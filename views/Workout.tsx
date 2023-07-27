import { useEffect, useState } from "react";
import { getObjectFromStorage } from "../utils/storage";
import { View, Text, TouchableNativeFeedback, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { sizes, spacing } from "../utils/style-constants";
import InputWithButton from "../components/InputWithButton";

type WorkoutProps = NativeStackScreenProps<RootStackParamList, 'Workout'>;

const Workout = ({ navigation, route }: WorkoutProps) => {
  const [ workout, setWorkout ] = useState<Workout>({} as Workout);

  useEffect(() => {
    const getWorkout = async () => {
      setWorkout(await getObjectFromStorage(route.params.key) as Workout);
    };

    getWorkout();
  }, [])

  const addExercise = (exerciseName: string) => {
    console.log(exerciseName);
  }

  return (
    <View style={ styles.container }>
      <View style={ styles.header }>
        <Text style={ styles.heading }>{ workout.name }</Text>
        <TouchableNativeFeedback onPress={ navigation.goBack }>
          <Text style={ styles.backButton }>Tillbaka</Text>
        </TouchableNativeFeedback>
      </View>
      <InputWithButton buttonCallback={ addExercise } buttonText="Lägg till" placeholder="Övning" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: spacing.large,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: sizes.fontL,
  },
  backButton: {
    fontSize: sizes.fontS,
  }
})

export default Workout;