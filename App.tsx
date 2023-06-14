import React from 'react';
import i18n from 'i18n-js';
import 'expo-dev-client';
import * as Localization from 'expo-localization';
import "react-native-url-polyfill/auto";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ca, en, es } from './src/assets/value';
import Router from './src/navigation';

//This get the language Device and set the app in your local language
i18n.fallbacks = true;
i18n.translations = { en, es, ca };
let lang = Localization.locale;
if (lang.substring(0, 2) === 'eu' || lang.substring(0, 2) === 'gl') {
  lang = 'es-ES';
}
i18n.locale = lang

export default function App() {
  return (
    <SafeAreaProvider>
      <Router />
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}