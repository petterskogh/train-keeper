import { StatusBar, View, StyleSheet, Text } from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { colors, spacing } from "./utils/style-constants";
import { useState } from "react";
import Workouts from "./views/Workouts";
import Workout from "./views/Workout";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <View style={ { flex: 1 } }>
      <StatusBar barStyle="default" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: styles.container }}>
          <Stack.Screen name="Home" component={ Workouts }/>
          <Stack.Screen name="Workout" component={ Workout } initialParams={{key: ''}} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellow,
    paddingHorizontal: spacing.large,
    paddingTop: spacing.large,
  }
});

export default App;