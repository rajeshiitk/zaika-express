import { Alert } from "react-native";
import { supabase } from "./supabase";
import {
  initPaymentSheet,
  presentPaymentSheet,
} from "@stripe/stripe-react-native";

const fetchPaymentSheetParams = async (amount: number) => {
  const { data, error } = await supabase.functions.invoke("payment-sheet", {
    body: { amount },
  });
  if (data) {
    return data;
  }
  Alert.alert("Error fetching payment sheet params");
  return {};
};

export const initialisePaymentSheet = async (amount: number) => {
  console.log("Initialising payment sheet, for: ", amount);

  const { paymentIntent, publishableKey } = await fetchPaymentSheetParams(
    amount
  );

  console.log("paymentIntent", paymentIntent);
  console.log("publishableKey", publishableKey);
  if (!paymentIntent || !publishableKey) return;

  const result = await initPaymentSheet({
    merchantDisplayName: "zaika.express",
    paymentIntentClientSecret: paymentIntent,
    defaultBillingDetails: {
      name: "Test User",
    },
  });
  console.log(result);
};

export const openPaymentSheet = async () => {
  const { error } = await presentPaymentSheet();

  console.log("open payment sheet error", error);
  if (error) {
    Alert.alert(error.message);
    return false;
  }
  return true;
};
