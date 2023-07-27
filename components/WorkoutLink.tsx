import { Text, TouchableNativeFeedback, StyleSheet, View } from "react-native";
import { borderRadius, colors, sizes, spacing } from "../utils/style-constants";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface WorkoutLinkProps {
  workout: WorkoutRef;
  removeWorkoutCallback: (workout: string) => void;
  navigation: NativeStackNavigationProp<RootStackParamList, "Home", undefined>;
}

const WorkoutLink = ({ workout, removeWorkoutCallback, navigation }: WorkoutLinkProps) => {
  return (
    <TouchableNativeFeedback onPress={ () => navigation.navigate('Workout', { key: workout.key }) }>
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