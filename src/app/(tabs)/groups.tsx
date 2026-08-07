import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { router } from "expo-router";

const groups = [
  {
    name: "Design Squad",
    members: "2.4K members",
    icon: "🎨",
  },
  {
    name: "Travel Buddies",
    members: "1.8K members",
    icon: "🌍",
  },
  {
    name: "College Friends",
    members: "980 members",
    icon: "🎓",
  },
];

export default function Groups() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Groups
      </Text>

      <Text style={styles.subtitle}>
        Join communities and share good vibes.
      </Text>

      <FlatList
        data={groups}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Pressable style={styles.card} onPress={() => router.push("/group/design")}>
            <Text style={styles.icon}>
              {item.icon}
            </Text>

            <View>
              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.members}>
                {item.members}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 22,
    paddingTop: 60,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "800",
  },

  subtitle: {
    color: "#94A3B8",
    marginTop: 8,
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#1E293B",
    borderRadius: 22,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  icon: {
    fontSize: 40,
    marginRight: 18,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  members: {
    color: "#94A3B8",
    marginTop: 5,
  },
});
