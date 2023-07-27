import { View, StyleSheet, TouchableNativeFeedback, Text } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import InputWithButton from "../components/InputWithButton";
import useWorkouts from "../utils/hooks/useWorkouts";
import WorkoutLink from "../components/WorkoutLink";
import { spacing } from "../utils/style-constants";
import { removeAll } from "../utils/storage";

type WorkoutsProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Workouts = ({navigation}: WorkoutsProps) => {
  const { workouts, addWorkout, removeWorkout } = useWorkouts();

  return (
    <View style={ styles.container }>
      <InputWithButton 
        buttonCallback={ addWorkout }
        buttonText="Lägg till"
        placeholder="Pass" />
      <View style={ styles.linkList }>
        { workouts.map(workout => 
          <WorkoutLink 
            key={ workout.key }
            workout={ workout }
            navigation={ navigation }
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