import { View, Image, StyleSheet, Dimensions } from "react-native"

export default function AuthHeader() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Registereren%20optie%206%20v2-gnCGeegoIDjV8uLDbGo4yrqx6uTvx2.png",
        }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    backgroundColor: "#0066FF",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
})

