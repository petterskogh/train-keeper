import { StatusBar, View, StyleSheet } from "react-native";
import { borderRadius, colors, spacing } from "./utils/style-constants";
import WorkoutInput from "./components/WorkoutInput";

const App = () => {
  return (
    <View style={ styles.container }>
      <StatusBar barStyle="default" />
      <WorkoutInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellow,
    paddingHorizontal: spacing.large,
    paddingTop: spacing.large,
  },
  workoutInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.gray,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
    borderRadius: borderRadius.small,
  },
  addWorkoutButton: {
    backgroundColor: '#DABC1C',
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
    justifyContent: 'center',
    borderRadius: borderRadius.small,
  },
  workoutInputContainer: {
    flexDirection: 'row',
    columnGap: spacing.small,
  }
});

export default App;