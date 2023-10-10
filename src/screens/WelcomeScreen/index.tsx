import React, { useCallback } from 'react';
import i18n from 'i18n-js';
import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const handleNextPage = useCallback(async () => {
    await AsyncStorage.setItem('WelcomeScreen', 'Visit');
    navigation.navigate('Subscription');
  }, [navigation]);

  return (
    <ScrollView style={{ backgroundColor: "#1C1C1E"}} contentContainerStyle={styles.container}>
      <Text style={styles.title}>{i18n.t('iAm')}</Text>
      <Text style={styles.subtitle}>{i18n.t('presentation')}</Text>
      <Image resizeMode="contain" style={styles.images} source={require('../../assets/images/photo/photo_01.png')} />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white', marginBottom: 10 }}>{i18n.t('continue')}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Pressable onPress={() => navigation.navigate("Privacy")}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{i18n.t('privacityPolicy')}</Text>
          </Pressable>
          <Text style={{ color: 'white' }}> & </Text>
          <Pressable onPress={() => navigation.navigate("Terms")}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{i18n.t('termsConditions')}</Text>
          </Pressable>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNextPage}>
        <Text style={styles.buttonText}>{i18n.t('letUsBegin')}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default WelcomeScreen;
