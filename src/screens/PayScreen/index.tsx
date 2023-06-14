import React, { useEffect, useState } from 'react';
import i18n from 'i18n-js';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './styles';
import useRevenueCat from '../../hooks/useRevenueCat';
import Purchases from 'react-native-purchases';

const SubscriptionScreen = ({ navigation }: any) => {

  const { currentOffering, customerInfo } = useRevenueCat();
  const [loading, setLoading] = useState(false);

  if (!currentOffering || loading) {
    return (
      <View style={{ flex: 1, backgroundColor: '#1C1C1E', justifyContent: 'center' }}>
        <ActivityIndicator size={"large"} color={"white"} />
      </View>
    )
  }

  const onPressContinue = () => navigation.reset({ index: 0, routes: [{ name: 'Chat' }] });

  const handlyPurchases = async (duration: string) => {
    setLoading(true);
    if (!currentOffering) return;
    let purchaseInfo;

    switch (duration) {
      case "week":
        purchaseInfo = await Purchases.purchasePackage(
          currentOffering.weekly
        );
        console.log("Weekly Subs:", purchaseInfo.customerInfo.entitlements.active)
        break;
      case "month":
        purchaseInfo = await Purchases.purchasePackage(
          currentOffering.monthly
        );
        console.log("Month Subs:", purchaseInfo.customerInfo.entitlements.active)
        break;
      case "anual":
        purchaseInfo = await Purchases.purchasePackage(
          currentOffering.annual
        );
        console.log("Month Subs:", purchaseInfo.customerInfo.entitlements.active)
        break;
      default:
        break;
    }
    setLoading(false);
  }

  const activeSubscription = () => {
    if (!customerInfo) return '';
    const activeEntitlements = customerInfo.entitlements.active;
    if (Object.keys(activeEntitlements).length === 0) return '';
    const plan = activeEntitlements[Object.keys(activeEntitlements)[0]].productIdentifier;
    return plan;
  };

  const plan = activeSubscription();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#1C1C1E' }} contentContainerStyle={styles.container}>
      <View style={{ width: '100%', flexDirection: 'row', marginBottom: 30, marginTop: 50, justifyContent: 'space-around', alignItems: 'center' }}>
        <Text style={styles.title}>{i18n.t('choose')}</Text>
        <Text onPress={onPressContinue} style={styles.skip}>{i18n.t('skip')}</Text>
      </View>
      {plan !== '' && (
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.subscriptionTitle}>{i18n.t('actualPlan')}</Text>
          <Text style={styles.subscriptionTitle}>{plan}</Text>
        </View>
      )}
      <View style={styles.benefitsContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 7 }}>
          <AntDesign name="checksquare" size={35} color="#4CAF50" />
          <Text style={styles.benefitText}>{i18n.t('unlimitedAccess')}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 7 }}>
          <AntDesign name="checksquare" size={35} color="#4CAF50" />
          <Text style={styles.benefitText}>{i18n.t('technicalSupport')}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 7 }}>
          <AntDesign name="checksquare" size={35} color="#4CAF50" />
          <Text style={styles.benefitText}>{i18n.t('versions')}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.subscriptionOption} onPress={() => handlyPurchases('week')}>
        <Text style={styles.subscriptionTitle}>{i18n.t('weeklyPlan')}</Text>
        <Text style={styles.subscriptionPrice}>{currentOffering.weekly?.product.priceString}/semana</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subscriptionOption} onPress={() => handlyPurchases('month')}>
        <Text style={styles.subscriptionTitle}>{i18n.t('monthlyPlan')}</Text>
        <Text style={styles.subscriptionPrice}>{currentOffering.monthly?.product.priceString}/mes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subscriptionOption} onPress={() => handlyPurchases('anual')}>
        <Text style={styles.subscriptionTitle}>{i18n.t('anualPlan')}</Text>
        <Text style={styles.subscriptionPrice}>{currentOffering.annual?.product.priceString}/año</Text>
        <View style={styles.bestSellerContainer}>
          <Text style={styles.bestSellerText}>Best Seller</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SubscriptionScreen;
