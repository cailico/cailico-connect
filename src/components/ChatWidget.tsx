import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle, Trash2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const WEBHOOK_URL = "https://n8n.srv966880.hstgr.cloud/webhook-test/059400c4-6479-4f61-8a55-aa71ac2c5882";
const STORAGE_KEY = 'cailico-chat-messages';

const initialMessage: Message = {
  role: 'assistant',
  content: '¡Hola! 👋 Soy el asistente virtual de Cailico.\n\nEstoy aquí para resolver todas tus dudas sobre nuestros agentes de IA para instituciones educativas.\n\n¿En qué puedo ayudarte?',
  timestamp: new Date()
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
      } catch {
        return [initialMessage];
      }
    }
    return [initialMessage];
  });
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Persist messages to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: Message = {
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const messageToSend = inputValue.trim();
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: messageToSend,
          timestamp: new Date().toISOString()
        })
      });

      const data = await response.json();
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.response || data.message || data.output || 'Lo siento, no pude procesar tu mensaje.',
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Error al conectar con el servidor. Por favor intenta de nuevo.',
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearConversation = () => {
    setMessages([initialMessage]);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Botón flotante */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-orange hover:bg-orange/90 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all z-50 flex items-center gap-2 font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <>
            <X className="w-5 h-5" />
            <span className="hidden sm:inline">Cerrar Chat</span>
          </>
        ) : (
          <>
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">Chatea con la IA</span>
          </>
        )}
      </motion.button>

      {/* Widget de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 bg-[#f5f0e8] rounded-xl shadow-2xl flex flex-col overflow-hidden
              bottom-24 right-6 w-[400px] h-[600px] max-w-[calc(100vw-3rem)] max-h-[calc(100vh-8rem)]
              sm:bottom-24 sm:right-6
              max-sm:inset-4 max-sm:w-auto max-sm:h-auto max-sm:max-w-none max-sm:max-h-none"
          >
            {/* Header */}
            <div className="bg-navy text-white p-4 flex items-center gap-3 shrink-0">
              {/* Icon */}
              <div className="w-10 h-10 bg-orange rounded-full flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              {/* Title */}
              <div className="flex-1">
                <h3 className="font-display font-medium text-base uppercase tracking-wide">Chatea con Cailico</h3>
                <p className="text-white/70 text-sm">Asistente virtual</p>
              </div>
              {/* Actions */}
              <div className="flex items-center gap-1">
                <button 
                  onClick={clearConversation}
                  className="text-white/70 hover:text-white transition-colors p-2"
                  title="Limpiar conversación"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-white/70 hover:text-white transition-colors p-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f5f0e8]">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl whitespace-pre-wrap shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-orange text-white rounded-br-md' 
                      : 'bg-white text-[#1e293b] rounded-bl-md'
                  }`}>
                    {msg.content}
                  </div>
                  <span className="text-xs text-orange mt-1 px-1">
                    {formatTime(msg.timestamp)}
                  </span>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white p-4 rounded-2xl rounded-bl-md shadow-sm">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-orange/60 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-orange/60 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                      <div className="w-2 h-2 bg-orange/60 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-[#f5f0e8] shrink-0">
              <div className="flex gap-3 items-end">
                <textarea
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Escribe tu mensaje..."
                  rows={1}
                  className="flex-1 bg-[#e8e3db] border-0 rounded-full px-5 py-3 focus:outline-none placeholder:text-[#9ca3af] text-[#1e293b] resize-none max-h-32 min-h-[48px]"
                  style={{ height: 'auto' }}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = 'auto';
                    target.style.height = Math.min(target.scrollHeight, 128) + 'px';
                  }}
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-orange hover:bg-orange/90 disabled:bg-[#d4a574] disabled:cursor-not-allowed text-white p-3 rounded-full transition-colors shrink-0"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-[#9ca3af] text-center mt-3">
                Powered by Cailico AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
