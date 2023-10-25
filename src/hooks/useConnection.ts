import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";

function useConnection() {
  const [isConnected, setIsConnected] = useState(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    return unsubscribe;
  }, []);

  return isConnected;
}

export default useConnection;
