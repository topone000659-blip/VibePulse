import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";

const tags = [
  "#nature",
  "#music",
  "#photography",
  "#fitness",
];

const people = [
  {
    name: "Luna",
    bio: "Creative designer ✨",
  },
  {
    name: "Noah",
    bio: "Travel & adventure 🌍",
  },
  {
    name: "Emma",
    bio: "Music lover 🎵",
  },
];

export default function Explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Explore
      </Text>

      <TextInput
        placeholder="Search people and topics..."
        placeholderTextColor="#94A3B8"
        style={styles.search}
      />

      <Text style={styles.section}>
        Popular Tags
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {tags.map((tag) => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>
              {tag}
            </Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.section}>
        Recommended Profiles
      </Text>

      {people.map((person) => (
        <View key={person.name} style={styles.card}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {person.name[0]}
            </Text>
          </View>

          <View>
            <Text style={styles.name}>
              {person.name}
            </Text>

            <Text style={styles.bio}>
              {person.bio}
            </Text>
          </View>
        </View>
      ))}
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
    marginBottom: 20,
  },

  search: {
    backgroundColor: "#1E293B",
    color: "#FFFFFF",
    padding: 16,
    borderRadius: 18,
  },

  section: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 30,
    marginBottom: 15,
  },

  tag: {
    backgroundColor: "#6D28D9",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: 10,
  },

  tagText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },

  card: {
    backgroundColor: "#1E293B",
    padding: 18,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#06B6D4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  avatarText: {
    color: "#FFFFFF",
    fontWeight: "800",
  },

  name: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 17,
  },

  bio: {
    color: "#94A3B8",
    marginTop: 5,
  },
});
