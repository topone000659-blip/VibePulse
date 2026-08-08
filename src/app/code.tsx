import { useEffect, useState } from "react";
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

export default function CodeScreen() {
  const { country, code, phone } = useLocalSearchParams<{
    country?: string;
    code?: string;
    phone?: string;
  }>();

  const [verificationCode, setVerificationCode] = useState("");
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setInterval(() => {
      setSeconds((value) => value - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  function handleVerify() {
    if (verificationCode.length !== 6) {
      return;
    }

    // Verification backend ချိတ်တဲ့အခါ
    // ဒီနေရာမှာ server ကို code ပို့ပြီး verify လုပ်မယ်။
    router.replace("/(tabs)/chats");
  }

  function handleResend() {
    if (seconds > 0) return;

    setSeconds(60);
    setVerificationCode("");

    // SMS resend API ကို ဒီနေရာမှာ ချိတ်မယ်။
  }

  const maskedPhone =
    phone && phone.length > 4
      ? `${code || "+95"} ${"*".repeat(Math.max(0, phone.length - 3))}${phone.slice(-3)}`
      : `${code || "+95"} ${phone || ""}`;

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
            <Text style={styles.icon}>✉</Text>
          </View>

          <Text style={styles.title}>Enter verification code</Text>

          <Text style={styles.subtitle}>
            We sent a 6-digit code to
          </Text>

          <Text style={styles.phone}>
            {maskedPhone}
          </Text>

          <Text style={styles.country}>
            {country || "Myanmar"}
          </Text>

          <View style={styles.codeBox}>
            <TextInput
              value={verificationCode}
              onChangeText={(text) =>
                setVerificationCode(
                  text.replace(/\D/g, "").slice(0, 6)
                )
              }
              keyboardType="number-pad"
              maxLength={6}
              placeholder="000000"
              placeholderTextColor="#62647A"
              style={styles.input}
              autoFocus
            />
          </View>

          <Text style={styles.helper}>
            Enter the code to verify your phone number.
          </Text>

          <Pressable
            onPress={handleResend}
            disabled={seconds > 0}
          >
            <Text
              style={[
                styles.resend,
                seconds > 0 && styles.resendDisabled,
              ]}
            >
              {seconds > 0
                ? `Resend code in ${seconds}s`
                : "Resend code"}
            </Text>
          </Pressable>
        </View>

        <View style={styles.bottom}>
          <Pressable
            style={[
              styles.verifyButton,
              verificationCode.length !== 6 &&
                styles.verifyDisabled,
            ]}
            onPress={handleVerify}
            disabled={verificationCode.length !== 6}
          >
            <Text style={styles.verifyText}>
              Verify & Continue
            </Text>
          </Pressable>

          <Text style={styles.security}>
            Your verification code is private and secure.
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
    marginBottom: 28,
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

  icon: {
    color: "#A255FF",
    fontSize: 29,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 27,
    fontFamily: "Poppins_700Bold",
    textAlign: "center",
  },

  subtitle: {
    color: "#AEB0C0",
    fontSize: 14,
    marginTop: 12,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },

  phone: {
    color: "#FFFFFF",
    fontSize: 17,
    marginTop: 5,
    fontFamily: "Poppins_600SemiBold",
  },

  country: {
    color: "#A255FF",
    fontSize: 13,
    marginTop: 2,
    fontFamily: "Poppins_500Medium",
  },

  codeBox: {
    width: "100%",
    height: 70,
    backgroundColor: "#292940",
    borderRadius: 18,
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#6C5CE7",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    width: "100%",
    color: "#FFFFFF",
    fontSize: 28,
    letterSpacing: 10,
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
  },

  helper: {
    color: "#77798A",
    fontSize: 12,
    marginTop: 12,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },

  resend: {
    color: "#A255FF",
    fontSize: 14,
    marginTop: 18,
    fontFamily: "Poppins_600SemiBold",
  },

  resendDisabled: {
    color: "#686A7C",
  },

  bottom: {
    width: "100%",
  },

  verifyButton: {
    height: 56,
    backgroundColor: "#6C5CE7",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  verifyDisabled: {
    backgroundColor: "#403B65",
  },

  verifyText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
  },

  security: {
    color: "#77798A",
    fontSize: 11,
    textAlign: "center",
    marginTop: 12,
    fontFamily: "Poppins_400Regular",
  },
});
