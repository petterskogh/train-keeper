import { Text, TouchableNativeFeedback, StyleSheet, View } from "react-native";
import { borderRadius, colors, sizes, spacing } from "../utils/style-constants";

interface WorkoutLinkProps {
  workout: WorkoutRef;
  chooseWorkoutCallback: (workout: string) => void;
  removeWorkoutCallback: (workout: string) => void;
}

const WorkoutLink = ({ workout, chooseWorkoutCallback, removeWorkoutCallback }: WorkoutLinkProps) => {
  return (
    <TouchableNativeFeedback onPress={ () => chooseWorkoutCallback(workout.key) }>
      <View style={ styles.workoutLink }>
        <Text style={ styles.workoutLinkText }>
          { workout.name }
        </Text>
        <TouchableNativeFeedback onPress={ () => removeWorkoutCallback(workout.key) }>
          <View>
            <Text>Ta bort</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  workoutLink: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.yellowDark,
    paddingHorizontal: spacing.large,
    paddingVertical: spacing.small,
    borderRadius: borderRadius.medium,
  },
  workoutLinkText: {
    fontSize: sizes.fontL,
  }
});

export default WorkoutLink;