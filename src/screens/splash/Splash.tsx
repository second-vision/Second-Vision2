import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Video from "react-native-video";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@/app/types/types";

export const Splash = () => {
  const navigation = useNavigation<NavigationProp>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Espera 3 segundos para ir para a Home
    const timer = setTimeout(() => {
      setIsLoaded(true);
      navigation.navigate("ControlBluetoothStack"); // Navega diretamente para a Home
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Video
        source={require("../../shared/assets/images/splash.mp4")} // Coloque seu vídeo na pasta assets
        style={styles.video}
        resizeMode="cover"
        onEnd={() => setIsLoaded(true)}
        muted={false}
        repeat={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});
