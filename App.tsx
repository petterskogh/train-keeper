import { Text, View, StyleSheet } from "react-native";
import { spacing } from "./utils/style-constants";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <View>
      <StatusBar style="auto" />
      <Text>Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
});

export default App;