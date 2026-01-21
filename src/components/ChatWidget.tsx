import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, Trash2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatWidgetProps {
  externalOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  showFloatingButton?: boolean;
}

const WEBHOOK_URL = "https://n8n.srv966880.hstgr.cloud/webhook-test/059400c4-6479-4f61-8a55-aa71ac2c5882";
const STORAGE_KEY = 'cailico-chat-messages';

const initialMessage: Message = {
  role: 'assistant',
  content: '¡Hola! 👋 Soy Cecil, la asistente virtual de Cailico.\n\nEstoy aquí para resolver todas tus dudas sobre nuestros servicios de IA para instituciones educativas.\n\n¿En qué puedo ayudarte?',
  timestamp: new Date()
};

const ChatWidget = ({ externalOpen, onOpenChange, showFloatingButton = false }: ChatWidgetProps) => {
  // Session ID se regenera en cada recarga de página (en memoria, no persistido)
  const [sessionId] = useState(() => 
    `web_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  );
  const [internalOpen, setInternalOpen] = useState(false);
  
  // Use external control if provided, otherwise internal
  const isOpen = externalOpen !== undefined ? externalOpen : internalOpen;
  const setIsOpen = (open: boolean) => {
    if (onOpenChange) {
      onOpenChange(open);
    } else {
      setInternalOpen(open);
    }
  };
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
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize del textarea
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [inputValue]);

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
    if (isOpen && textareaRef.current) {
      textareaRef.current.focus();
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
          contact_id: sessionId,
          timestamp: new Date().toISOString(),
          source: 'web'
        })
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      // Obtener respuesta y extraer el texto del campo "response"
      const responseText = await response.text();
      let messageContent = responseText;
      
      // Intentar parsear como JSON y extraer el campo "response"
      try {
        const jsonData = JSON.parse(responseText);
        if (jsonData.response) {
          messageContent = jsonData.response;
        } else if (jsonData.message) {
          messageContent = jsonData.message;
        } else if (jsonData.chunks) {
          messageContent = jsonData.chunks;
        }
      } catch {
        // Si no es JSON válido, usar el texto tal cual
        messageContent = responseText;
      }
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: messageContent,
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
      {/* Botón flotante - solo visible cuando el botón del centro NO es visible */}
      <AnimatePresence>
        {showFloatingButton && (
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ 
              type: 'spring',
              stiffness: 200,
              damping: 20,
              duration: 0.3
            }}
            className="fixed bottom-6 right-6 bg-orange hover:bg-orange/90 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-colors z-50 flex items-center gap-2 font-medium"
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
                <Bot className="w-5 h-5" />
                <span className="hidden sm:inline">Chatea con la IA</span>
              </>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Widget de chat - posición dinámica según botón flotante */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              bottom: showFloatingButton ? 100 : 24
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ 
              type: 'spring',
              stiffness: 200,
              damping: 25,
              duration: 0.4
            }}
            style={{
              position: 'fixed',
              right: 24,
              bottom: showFloatingButton ? 100 : 24
            }}
            className="z-50 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden
              w-[400px] h-[600px] max-w-[calc(100vw-3rem)] max-h-[calc(100vh-8rem)]
              max-sm:inset-4 max-sm:w-auto max-sm:h-auto max-sm:max-w-none max-sm:max-h-none max-sm:right-auto max-sm:bottom-auto"
          >
            {/* Header */}
            <div className="bg-navy text-white p-4 flex justify-between items-center shrink-0">
              <h3 className="font-display font-medium text-lg uppercase tracking-wide">Chatea con Cecil</h3>
              <div className="flex items-center gap-2">
                <button 
                  onClick={clearConversation}
                  className="text-white/70 hover:text-white transition-colors p-1"
                  title="Limpiar conversación"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-white/70 hover:text-white transition-colors p-1"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div 
                      className={`p-3 rounded-2xl break-words ${
                        msg.role === 'user' 
                          ? 'bg-white text-gray-800 rounded-br-md shadow-sm border border-gray-100' 
                          : 'bg-orange text-white rounded-bl-md'
                      }`}
                      style={{ 
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                        overflowWrap: 'break-word'
                      }}
                    >
                      {msg.content}
                    </div>
                    <span className="text-xs text-gray-400 mt-1 px-1">
                      {formatTime(msg.timestamp)}
                    </span>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white p-4 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 bg-white shrink-0">
              <div className="flex gap-2 items-end">
                <textarea
                  ref={textareaRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Escribe tu mensaje..."
                  rows={1}
                  className="flex-1 border-2 border-[#cbd5e1] rounded-xl px-4 py-3 resize-none min-h-[48px] max-h-[120px] text-gray-900 bg-white appearance-none overflow-y-auto [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  style={{ 
                    outline: 'none',
                    boxShadow: 'none'
                  }}
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-orange hover:bg-orange/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-colors shrink-0 h-[48px]"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-400 text-center mt-2">
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
