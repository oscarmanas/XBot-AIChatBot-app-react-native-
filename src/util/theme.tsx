// themes.js
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // Personaliza los colores para el modo claro
    primary: '#F0433A', // Color principal para los botones y otros elementos
    background: '#F0F0F0', // Fondo de la aplicación
    text: '#3D3D3D', // Color de texto
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    // Personaliza los colores para el modo oscuro
    primary: '#F0433A',
    background: '#121212',
    text: '#FFFFFF',
  },
};

export const useTheme = () => {
  const theme = useColorScheme() === 'dark' ? darkTheme : lightTheme;
  return theme;
};
