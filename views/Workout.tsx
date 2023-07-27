import { useEffect, useState } from "react";
import { getObjectFromStorage } from "../utils/storage";
import { View, Text } from "react-native";

interface WorkoutProps {
  key: string;
}

const Workout = ({ key }: WorkoutProps) => {
  const [ workout, setWorkout ] = useState<Workout>({} as Workout);

  useEffect(() => {
    const getWorkout = async () => {
      setWorkout(await getObjectFromStorage(key) as Workout);
    };

    getWorkout();
  }, [])

  return (
    <View>
      <Text>{ workout.name }</Text>
    </View>
  );
}

export default Workout;