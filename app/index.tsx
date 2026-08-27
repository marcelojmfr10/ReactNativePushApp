import { ThemedText } from "@/components/themed-text";
import { usePushNotifications } from "@/hooks/use-push-notifications";
import { FlatList, View } from "react-native";

export default function PushApp() {
  const { expoPushToken, notifications } = usePushNotifications();

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}
    >
      <ThemedText>Expo push token: {expoPushToken}</ThemedText>

      <FlatList
        renderItem={({ item }) => (
          <View style={{ paddingVertical: 10 }}>
            <ThemedText style={{ fontWeight: "bold" }}>
              {item.request.content.title}
            </ThemedText>
            <ThemedText>{item.request.content.body}</ThemedText>
            <ThemedText>
              {JSON.stringify(item.request.content.data, null, 2)}
            </ThemedText>
          </View>
        )}
        data={notifications}
        keyExtractor={(item) => item.request.identifier}
        ItemSeparatorComponent={() => (
          <View
            style={{ height: 1, backgroundColor: "grey", opacity: 0.5 }}
          ></View>
        )}
        ListEmptyComponent={() => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 20,
            }}
          >
            <ThemedText
              style={{ textAlign: "center", fontSize: 16, color: "grey" }}
            >
              No hay notificaciones
            </ThemedText>
          </View>
        )}
      />

      {/* <Button
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
      /> */}
    </View>
  );
}
