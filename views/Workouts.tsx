import { View, StyleSheet, TouchableNativeFeedback, Text } from "react-native";
import WorkoutInput from "../components/WorkoutInput";
import useWorkouts from "../utils/hooks/useWorkouts";
import WorkoutLink from "../components/WorkoutLink";
import { spacing } from "../utils/style-constants";
import { removeAll } from "../utils/storage";

interface WorkoutsProps {
  chooseWorkoutCallback: (workout: string) => void;
}

const Workouts = ({ chooseWorkoutCallback }: WorkoutsProps) => {
  const { workouts, addWorkout, removeWorkout } = useWorkouts();

  return (
    <View style={ styles.container }>
      <WorkoutInput callback={ addWorkout } />
      <View style={ styles.linkList }>
        { workouts.map(workout => 
          <WorkoutLink 
            key={ workout.key }
            workout={ workout }
            chooseWorkoutCallback={ chooseWorkoutCallback }
            removeWorkoutCallback={ removeWorkout } />
        ) }
      </View>
      <TouchableNativeFeedback onPress={ removeAll }>
        <View>
          <Text>Ta bort alla</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: spacing.large
  },
  linkList: {
    rowGap: spacing.medium,
  }
});

export default Workouts;