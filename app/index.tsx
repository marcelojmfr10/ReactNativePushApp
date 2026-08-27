import { ThemedText } from "@/components/themed-text";
import { usePushNotifications } from "@/hooks/use-push-notifications";
import { Button, View } from "react-native";

export default function PushApp() {
  const { expoPushToken, sendPushNotification } = usePushNotifications();

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}
    >
      <ThemedText>Expo push token: {expoPushToken}</ThemedText>

      <Button
        title="Press to Send Notification"
        onPress={async () => {
          await sendPushNotification({
            body: "Body desde app",
            title: "Título desde la app",
            to: [expoPushToken],
            data: {
              chatId: "abc-123",
            },
          });
        }}
      />
    </View>
  );
}
