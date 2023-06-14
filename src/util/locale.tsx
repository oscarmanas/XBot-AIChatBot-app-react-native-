import I18n from "i18n-js";

// Define las traducciones en diferentes idiomas
const en = {
  greeting: 'Hello!',
  question: 'How can I help you?',
  send: 'Send',
};

const es = {
  greeting: '¡Hola!',
  question: '¿En qué puedo ayudarte?',
  send: 'Enviar',
};

// Agrega las traducciones a i18n-js
I18n.translations = { en, es };

// Define el idioma por defecto
I18n.defaultLocale = 'en';

// Define el idioma actual
I18n.locale = I18n.defaultLocale;
