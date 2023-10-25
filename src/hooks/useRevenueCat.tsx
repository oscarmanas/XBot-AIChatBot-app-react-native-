import { useState, useEffect } from "react";
import { Platform } from "react-native";
import Purchases, {
    CustomerInfo,
    LOG_LEVEL,
    PurchasesOffering,
} from "react-native-purchases";

const APIKeys = {
    //apple: "",
    //google: ""
}

const typeOfMembership = {
    monthly: "pro",
    yearly: "proYearly",
    weekly: "proWeekly"
}

function useRevenueCat() {
    const [currentOffering, setCurrentOffering] = useState<PurchasesOffering | null>(null);
    const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);

    const isProMember =
        customerInfo?.activeSubscriptions.includes(typeOfMembership.monthly) ||
        customerInfo?.activeSubscriptions.includes(typeOfMembership.yearly) ||
        customerInfo?.activeSubscriptions.includes(typeOfMembership.weekly);

    useEffect(() => {
        const fetchData = async () => {
            Purchases.setDebugLogsEnabled(true);
            Purchases.configure({ apiKey: APIKeys.apple })

            const offerings = await Purchases.getOfferings();
            const customerInfo = await Purchases.getCustomerInfo();

            setCustomerInfo(customerInfo)
            setCurrentOffering(offerings.current)
        };

        fetchData().catch(console.error);
    }, [])

    useEffect(() => {
        const customerInfoUpdated = async (purchasesInfo: CustomerInfo) => {
            setCustomerInfo(purchasesInfo)
        }

        Purchases.addCustomerInfoUpdateListener(customerInfoUpdated)
    }, [])

    return { currentOffering, customerInfo, isProMember }
}

export default useRevenueCat;