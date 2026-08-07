import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          VP
        </Text>
      </View>

      <Text style={styles.name}>
        Vibe User
      </Text>

      <Text style={styles.bio}>
        Creating moments and sharing good vibes ✨
      </Text>

      <View style={styles.stats}>
        <View>
          <Text style={styles.number}>120</Text>
          <Text style={styles.label}>Posts</Text>
        </View>

        <View>
          <Text style={styles.number}>2.5K</Text>
          <Text style={styles.label}>Followers</Text>
        </View>

        <View>
          <Text style={styles.number}>340</Text>
          <Text style={styles.label}>Following</Text>
        </View>
      </View>

      <View style={styles.menu}>
        <Pressable style={styles.item} onPress={() => router.push("/settings")}><Text>
          ⚙ Account Settings
        </Text></Pressable>

        <Text style={styles.item}>
          🔒 Privacy & Security
        </Text>

        <Text style={styles.item}>
          🌙 Dark Mode
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    alignItems: "center",
    padding: 22,
    paddingTop: 70,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#6D28D9",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "800",
  },

  name: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "800",
    marginTop: 20,
  },

  bio: {
    color: "#94A3B8",
    marginTop: 8,
    textAlign: "center",
  },

  stats: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    backgroundColor: "#1E293B",
    padding: 20,
    borderRadius: 20,
    marginTop: 30,
  },

  number: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
  },

  label: {
    color: "#94A3B8",
    marginTop: 5,
  },

  menu: {
    width: "100%",
    marginTop: 25,
  },

  item: {
    color: "#FFFFFF",
    backgroundColor: "#1E293B",
    padding: 18,
    borderRadius: 18,
    marginBottom: 12,
  },
});
