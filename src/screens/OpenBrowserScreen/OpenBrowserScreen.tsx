import React, { useEffect, useState } from 'react';
import i18n from 'i18n-js';
import WebView from 'react-native-webview';
import { ActivityIndicator } from 'react-native';
import { styles } from './styles';

export default function OpenBrowserScreen({ navigation, route }: any) {

  const { link, title } = route.params;
  const [updateLink, setUpdateLink] = useState("");

  useEffect(() => {
    changeTitle();
    setUrlLogin();
  }, []);

  const setUrlLogin = async () => {
    setUpdateLink(link === "privacy" ? "https://privacy-xbot.carrd.co" : "https://terms-conditions-xbot.carrd.co/");
  };

  const changeTitle = () => {
    navigation.setOptions({
      headerTitle: `${i18n.t(title)}`,
    });
  };

  const IndicatorLoadingView = () => {
    return (
      <ActivityIndicator
        color={'white'}
        size="large"
        style={styles.indicatorStyle}
      />
    );
  };

  return (
    <WebView
      source={{ uri: updateLink }}
      renderLoading={IndicatorLoadingView}
      startInLoadingState={true}
      style={{ backgroundColor: 'black' }}
    />
  );
}
