import { View, Text, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default function Index() {
  return (
    <LinearGradient
      colors={["#4C1D95", "#6D28D9", "#06B6D4"]}
      style={styles.container}
    >
      <View style={styles.logoArea}>
        <View style={styles.wave}>
          <View style={[styles.bar, styles.small]} />
          <View style={[styles.bar, styles.big]} />
          <View style={[styles.bar, styles.medium]} />
          <View style={[styles.bar, styles.big]} />
          <View style={[styles.bar, styles.small]} />
        </View>

        <Text style={styles.logo}>
          Vibe Pulse
        </Text>

        <Text style={styles.tagline}>
          Feel the vibe. Stay connected.
        </Text>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.title}>
          Welcome to{"\n"}Vibe Pulse
        </Text>

        <Text style={styles.desc}>
          Connect through real conversations,
          groups, and good vibes.
        </Text>

        <Pressable style={styles.start} onPress={() => router.replace("/(tabs)/chats")}>
          <Text style={styles.startText}>
            Get Started
          </Text>
        </Pressable>

        <Pressable style={styles.login} onPress={() => router.replace("/(tabs)/profile")}>
          <Text style={styles.loginText}>
            Create Account / Login
          </Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
    justifyContent: "space-between",
  },

  logoArea: {
    alignItems: "center",
    marginTop: 120,
  },

  wave: {
    flexDirection: "row",
    alignItems: "center",
    height: 70,
  },

  bar: {
    width: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 5,
  },

  small: {
    height: 30,
  },

  medium: {
    height: 50,
  },

  big: {
    height: 70,
  },

  logo: {
    color: "#fff",
    fontSize: 38,
    fontWeight: "800",
    marginTop: 25,
  },

  tagline: {
    color: "#E2E8F0",
    marginTop: 8,
  },

  bottom: {
    marginBottom: 40,
  },

  title: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "800",
  },

  desc: {
    color: "#E2E8F0",
    marginTop: 15,
    lineHeight: 24,
  },

  start: {
    backgroundColor: "#fff",
    padding: 17,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 30,
  },

  startText: {
    color: "#6D28D9",
    fontWeight: "800",
  },

  login: {
    borderWidth: 1,
    borderColor: "#fff",
    padding: 17,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 15,
  },

  loginText: {
    color: "#fff",
    fontWeight: "700",
  },
});
