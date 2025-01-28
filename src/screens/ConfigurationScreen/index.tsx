import React, { useEffect, useState } from 'react';
import i18n from 'i18n-js';
import { View, Text, TouchableOpacity, Pressable, Linking, Platform, Share, Alert, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import Purchases from 'react-native-purchases';

const ConfigurationScreen = ({ navigation }: any) => {

    const [loading, setLoading] = useState(false)

    const handleGoBack = () => {
        navigation.goBack()
    };

    /* const shareContent = async () => {
        try {
            await Share.share({
                url: 'https://apps.apple.com/es/app/xbot-ai-chatbot/id6446496807',
            });
        } catch (error) {
            //console.log(error.message);
        }
    }; */

    /* const openStoreReview = () => {
        if (Platform.OS === 'ios') {
            //Linking.openURL('itms-apps://itunes.apple.com/app/id6446496807?mt=8&action=write-review');
        } else {
            //Linking.openURL('market://details?id=nombre_de_tu_app');
        }
    }; */

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => {
                return <>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF', borderRadius: 8, height: 30, width: 30, justifyContent: 'center', alignItems: 'center' }} onPress={handleGoBack}>
                        <FontAwesome name="angle-left" size={25} color="black" />
                    </TouchableOpacity>
                </>;
            },
        });
    }, [])

    /* const handleNavPlan = () => {
        navigation.navigate('Subscription')
    } */

    /* const handleRestorePurchases = async () => {

        const purchasesInfo = await Purchases.restorePurchases();

        if (purchasesInfo.activeSubscriptions.length > 0) {
            Alert.alert(i18n.t('success'), i18n.t('purchasesRestored'))
        } else {
            Alert.alert(i18n.t('error'), i18n.t('noRestored'))
        }
    } */

    if (loading) {
        return (
            <View style={{ flex: 1, backgroundColor: '#1C1C1E', justifyContent: 'center' }}>
                <ActivityIndicator size={"large"} color={"white"} />
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.textLeft}>{i18n.t('version')}</Text>
                    <Text style={styles.textRight}>1.1</Text>
                </View>
                {/* <Pressable style={styles.section} onPress={() => handleNavPlan()}>
                    <Text style={styles.textLeft}>{i18n.t('myPlan')}</Text>
                    <FontAwesome name="angle-right" size={25} color="white" style={{ marginRight: 5 }} />
                </Pressable> */}
                {/* <Pressable style={styles.section} onPress={() => shareContent()}>
                    <Text style={styles.textLeft}>{i18n.t('share')}</Text>
                    <FontAwesome name="angle-right" size={25} color="white" style={{ marginRight: 5 }} />
                </Pressable> */}
                {/* <Pressable style={styles.section} onPress={() => openStoreReview()}>
                    <Text style={styles.textLeft}>{i18n.t('review')}</Text>
                    <FontAwesome name="angle-right" size={25} color="white" style={{ marginRight: 5 }} />
                </Pressable> */}
                {/* <Pressable style={styles.section} onPress={() => handleRestorePurchases()}>
                    <Text style={styles.textLeft}>{i18n.t('restorePurchases')}</Text>
                    <FontAwesome name="angle-right" size={25} color="white" style={{ marginRight: 5 }} />
                </Pressable> */}
                <Pressable style={styles.section} onPress={() => navigation.navigate('OpenBrowser', { link: "privacy", title: "privacyPolicy"})}>
                    <Text style={styles.textLeft}>{i18n.t('privacyPolicy')}</Text>
                    <FontAwesome name="angle-right" size={25} color="white" style={{ marginRight: 5 }} />
                </Pressable>
                <Pressable style={styles.section} onPress={() => navigation.navigate('OpenBrowser', { link: "terms", title: "termsConditions"})}>
                    <Text style={styles.textLeft}>{i18n.t('termsConditions')}</Text>
                    <FontAwesome name="angle-right" size={25} color="white" style={{ marginRight: 5 }} />
                </Pressable>
            </View>
        );
    }
};

export default ConfigurationScreen;
