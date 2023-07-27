import { StatusBar, View, StyleSheet, Text } from "react-native";
import { colors, spacing } from "./utils/style-constants";
import { useState } from "react";
import Workouts from "./views/Workouts";
import Workout from "./views/Workout";

const App = () => {
  const [activeWorkoutKey, setActiveWorkoutKey] = useState<string>('');

  return (
    <View style={ styles.container }>
      <StatusBar barStyle="default" />
      { activeWorkoutKey !== undefined && activeWorkoutKey === '' ?
          <Workouts chooseWorkoutCallback={ setActiveWorkoutKey } /> 
          : <Workout key={ activeWorkoutKey } /> 
      }
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