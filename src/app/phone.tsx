import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function PhoneScreen() {
  const { country, code } = useLocalSearchParams<{
    country?: string;
    code?: string;
  }>();

  const [phone, setPhone] = useState("");

  const countryName = country || "Myanmar";
  const countryCode = code || "+95";

  function handleNext() {
    const cleanPhone = phone.replace(/\D/g, "");

    if (cleanPhone.length < 5) {
      return;
    }

    router.push({
      pathname: "/code",
      params: {
        country: countryName,
        code: countryCode,
        phone: cleanPhone,
      },
    });
  }

  return (
    <KeyboardAvoidingView
      style={styles.keyboard}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <View style={styles.top}>
          <Pressable
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backText}>‹</Text>
          </Pressable>

          <View style={styles.iconCircle}>
            <Text style={styles.phoneIcon}>☎</Text>
          </View>

          <Text style={styles.title}>Your phone number</Text>

          <Text style={styles.subtitle}>
            Enter your phone number to continue.
          </Text>

          <Text style={styles.info}>
            We'll send you a verification code.
          </Text>

          <View style={styles.countryBox}>
            <Text style={styles.flag}>🌍</Text>

            <View style={styles.countryInfo}>
              <Text style={styles.countryLabel}>Country</Text>

              <Text style={styles.countryName}>
                {countryName}
              </Text>
            </View>

            <Text style={styles.countryCode}>
              {countryCode}
            </Text>
          </View>

          <View style={styles.phoneBox}>
            <Text style={styles.code}>
              {countryCode}
            </Text>

            <View style={styles.divider} />

            <TextInput
              value={phone}
              onChangeText={setPhone}
              placeholder="Phone number"
              placeholderTextColor="#77798A"
              keyboardType="phone-pad"
              maxLength={15}
              style={styles.input}
              autoFocus
            />
          </View>
        </View>

        <View style={styles.bottom}>
          <Pressable
            style={[
              styles.nextButton,
              phone.replace(/\D/g, "").length < 5 &&
                styles.nextButtonDisabled,
            ]}
            onPress={handleNext}
            disabled={phone.replace(/\D/g, "").length < 5}
          >
            <Text style={styles.nextText}>Next</Text>
          </Pressable>

          <Text style={styles.privacy}>
            Your phone number is used to verify your account.
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    backgroundColor: "#1E1E2F",
  },

  container: {
    flex: 1,
    backgroundColor: "#1E1E2F",
    paddingHorizontal: 24,
    paddingTop: 55,
    paddingBottom: 25,
    justifyContent: "space-between",
  },

  top: {
    alignItems: "center",
  },

  backButton: {
    alignSelf: "flex-start",
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#292940",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },

  backText: {
    color: "#FFFFFF",
    fontSize: 34,
    lineHeight: 36,
    marginTop: -4,
  },

  iconCircle: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: "#302C50",
    borderWidth: 1,
    borderColor: "#6C5CE7",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
  },

  phoneIcon: {
    color: "#A255FF",
    fontSize: 30,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 29,
    fontFamily: "Poppins_700Bold",
    textAlign: "center",
  },

  subtitle: {
    color: "#D0D0DC",
    fontSize: 15,
    marginTop: 10,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },

  info: {
    color: "#85879A",
    fontSize: 13,
    marginTop: 5,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },

  countryBox: {
    width: "100%",
    minHeight: 70,
    backgroundColor: "#292940",
    borderRadius: 18,
    marginTop: 30,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#373752",
  },

  flag: {
    fontSize: 28,
    marginRight: 13,
  },

  countryInfo: {
    flex: 1,
  },

  countryLabel: {
    color: "#77798A",
    fontSize: 11,
    fontFamily: "Poppins_400Regular",
  },

  countryName: {
    color: "#FFFFFF",
    fontSize: 15,
    marginTop: 2,
    fontFamily: "Poppins_600SemiBold",
  },

  countryCode: {
    color: "#A255FF",
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
  },

  phoneBox: {
    width: "100%",
    height: 62,
    backgroundColor: "#292940",
    borderRadius: 18,
    marginTop: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#6C5CE7",
  },

  code: {
    color: "#A255FF",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },

  divider: {
    width: 1,
    height: 28,
    backgroundColor: "#48485F",
    marginHorizontal: 13,
  },

  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
    paddingVertical: 0,
  },

  bottom: {
    width: "100%",
  },

  nextButton: {
    height: 56,
    backgroundColor: "#6C5CE7",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  nextButtonDisabled: {
    backgroundColor: "#403B65",
  },

  nextText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
  },

  privacy: {
    color: "#77798A",
    fontSize: 11,
    textAlign: "center",
    marginTop: 12,
    fontFamily: "Poppins_400Regular",
  },
});
