import { useEffect, useRef } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export default function Chatbot() {
  const chatContainerRef = useRef(null); 

  useEffect(() => {

    createChat(
      {
      webhookUrl: 'N8N_WEBHOOK_URL',
      target: '#n8n-chat-container', 
      mode: 'window', 
  defaultLanguage: 'en',
  initialMessages: ['Welcome to Mustafa Hospital. How can we help you?'],
  i18n: {
    en: {
      title: 'Mustafa Hospital',
      sendButtonText: 'Send',
    }
  }
    }
  );

  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div id="n8n-chat-container"></div>
    </div>
  );
}