import { View, Text, StyleSheet, FlatList } from "react-native";

const notifications = [
  {
    icon: "❤️",
    title: "Alex liked your post",
    time: "2 minutes ago",
  },
  {
    icon: "💬",
    title: "Maya sent you a message",
    time: "10 minutes ago",
  },
  {
    icon: "👥",
    title: "You joined Design Squad",
    time: "Yesterday",
  },
  {
    icon: "✨",
    title: "New people to discover",
    time: "Yesterday",
  },
];

export default function Notifications() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Notifications
      </Text>

      <Text style={styles.subtitle}>
        Stay updated with your vibes.
      </Text>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.icon}>
              {item.icon}
            </Text>

            <View>
              <Text style={styles.message}>
                {item.title}
              </Text>

              <Text style={styles.time}>
                {item.time}
              </Text>
            </View>
          </View>
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
    padding: 18,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  icon: {
    fontSize: 30,
    marginRight: 15,
  },

  message: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  time: {
    color: "#94A3B8",
    marginTop: 5,
  },
});
