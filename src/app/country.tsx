import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";

const countries = [
  { name: "Myanmar", flag: "🇲🇲", code: "+95" },
  { name: "Thailand", flag: "🇹🇭", code: "+66" },
  { name: "Singapore", flag: "🇸🇬", code: "+65" },
  { name: "Malaysia", flag: "🇲🇾", code: "+60" },
  { name: "United States", flag: "🇺🇸", code: "+1" },
  { name: "United Kingdom", flag: "🇬🇧", code: "+44" },
];

export default function CountryScreen() {
  const [selected, setSelected] = useState(countries[0]);

  function handleNext() {
    router.push({
      pathname: "/phone",
      params: {
        country: selected.name,
        code: selected.code,
      },
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your country</Text>

      <Text style={styles.subtitle}>
        Select your country code to continue.
      </Text>

      <FlatList
        data={countries}
        keyExtractor={(item) => item.code}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          const isSelected = selected.code === item.code;

          return (
            <Pressable
              style={[
                styles.countryItem,
                isSelected && styles.countryItemSelected,
              ]}
              onPress={() => setSelected(item)}
            >
              <Text style={styles.flag}>{item.flag}</Text>

              <Text style={styles.countryName}>
                {item.name}
              </Text>

              <Text style={styles.countryCode}>
                {item.code}
              </Text>

              {isSelected && (
                <View style={styles.check}>
                  <Text style={styles.checkText}>✓</Text>
                </View>
              )}
            </Pressable>
          );
        }}
      />

      <Pressable style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextText}>Next</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E2F",
    paddingHorizontal: 24,
    paddingTop: 70,
    paddingBottom: 25,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
    fontFamily: "Poppins_700Bold",
  },

  subtitle: {
    color: "#AEB0C0",
    fontSize: 14,
    marginTop: 8,
    fontFamily: "Poppins_400Regular",
  },

  list: {
    paddingTop: 28,
    paddingBottom: 20,
  },

  countryItem: {
    minHeight: 68,
    backgroundColor: "#292940",
    borderRadius: 18,
    marginBottom: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
  },

  countryItemSelected: {
    backgroundColor: "#302C50",
    borderColor: "#6C5CE7",
  },

  flag: {
    fontSize: 28,
    marginRight: 14,
  },

  countryName: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },

  countryCode: {
    color: "#A255FF",
    fontSize: 15,
    fontFamily: "Poppins_600SemiBold",
    marginRight: 10,
  },

  check: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#6C5CE7",
    alignItems: "center",
    justifyContent: "center",
  },

  checkText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  nextButton: {
    height: 56,
    backgroundColor: "#6C5CE7",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  nextText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
  },
});

