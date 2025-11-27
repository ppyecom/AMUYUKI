// LearnIA.jsx
import React, { useState, useRef, useEffect } from 'react';
import ReactMarkDown from 'react-markdown'
import './learnia.css';
import GenIAService from '../../../connectionIA/GenIA';

const LearnIA = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'amuyuki',
      text: '¡Kamisaraki! 🌄 Soy Amuyuki, tu asistente virtual para aprender aymara. Estoy aquí para ayudarte a descubrir este hermoso idioma de manera práctica y divertida.\n\n¿En qué te gustaría que te ayude hoy? Puedo:\n• Enseñarte saludos y frases básicas\n• Explicarte gramática y pronunciación\n• Compartir historias y leyendas aymaras\n• Crear ejercicios personalizados\n• Responder tus dudas culturales\n\n¡Jach\'a kusisiwa! (¡Mucho gusto!)'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (inputText.trim() && !isLoading) {
      const userMessage = {
        id: messages.length + 1,
        sender: 'user',
        text: inputText
      };

      setMessages(prev => [...prev, userMessage]);
      setInputText('');
      setIsLoading(true);

      try {
        const aiResponse = await GenIAService.generateResponse(inputText);

        const aiMessage = {
          id: messages.length + 2,
          sender: 'amuyuki',
          text: aiResponse
        };

        setMessages(prev => [...prev, aiMessage]);
      } catch (error) {
        const errorMessage = {
          id: messages.length + 2,
          sender: 'amuyuki',
          text: 'Ay, disculpa. Tuve un problemita técnico. ¿Podrías repetir tu pregunta? 😊'
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickAction = async (action) => {
    let prompt = '';
    
    switch(action) {
      case 'saludos':
        prompt = 'Enséñame los saludos básicos en aymara';
        break;
      case 'numeros':
        prompt = 'Quiero aprender los números del 1 al 10 en aymara';
        break;
      case 'ejercicio':
        prompt = 'Dame un ejercicio de práctica';
        break;
      case 'historia':
        prompt = 'Cuéntame una historia o leyenda aymara';
        break;
      default:
        return;
    }

    setInputText(prompt);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <div className="learnia-container">
      <div className="chat-wrapper">
        <div className="chat-header">
          <div className="header-avatar"><img src="./images/logot.png" alt="" /></div>
          <div>
            <h1 className="header-title">Conversa con AMUYUKI</h1>
            <p className="header-subtitle">Tu profesor de aymara con IA</p>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message-row ${message.sender === 'user' ? 'message-user' : 'message-amuyuki'}`}
            >
              <div className={`avatar ${message.sender === 'user' ? 'avatar-user' : 'avatar-amuyuki'}`}>
                {message.sender === 'user' ? null : <img src="./images/logot.png" alt="Amuyuki Avatar" style={{'objectFit': 'contain', 'width':'60px' }}/>}
              </div>
              <div className={`message-bubble ${message.sender === 'user' ? 'bubble-user' : 'bubble-amuyuki'}`}>
                <ReactMarkDown>{message.text}</ReactMarkDown>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="message-row message-amuyuki">
              <div className="avatar avatar-amuyuki"></div>
              <div className="message-bubble bubble-amuyuki">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {messages.length === 1 && (
          <div className="quick-actions">
            <button 
              className="quick-action-btn"
              onClick={() => handleQuickAction('saludos')}
            >
              👋 Saludos
            </button>
            <button 
              className="quick-action-btn"
              onClick={() => handleQuickAction('numeros')}
            >
              🔢 Números
            </button>
            <button 
              className="quick-action-btn"
              onClick={() => handleQuickAction('ejercicio')}
            >
              ✍️ Ejercicio
            </button>
            <button 
              className="quick-action-btn"
              onClick={() => handleQuickAction('historia')}
            >
              📖 Historia
            </button>
          </div>
        )}

        <div className="chat-input-area">
          <div className="input-wrapper">
            <div className="input-avatar"></div>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe tu pregunta o mensaje..."
              className="message-input"
              disabled={isLoading}
            />
            <button 
              onClick={handleSend} 
              className="send-button"
              disabled={isLoading || !inputText.trim()}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnIA;