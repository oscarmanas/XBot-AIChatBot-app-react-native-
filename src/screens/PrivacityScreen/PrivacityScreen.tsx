import React from 'react';
import WebView from 'react-native-webview';
import { ActivityIndicator } from 'react-native';
import { styles } from './styles';

export default function PrivacityScreen() {

  const IndicatorLoadingView = () => {
    return (
      <ActivityIndicator
        color='black'
        size="large"
        style={styles.indicatorStyle}
      />
    );
  }

  return (
    <WebView
      source={{ uri: "https://privacy-xbot.carrd.co" }}
      renderLoading={IndicatorLoadingView}
      startInLoadingState={true}
      style={{ backgroundColor: 'black' }}
    />
  );
}