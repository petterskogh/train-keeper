import { useEffect, useState } from "react";
import { convertStringToKey, getAllKeys, getObjectFromStorage, removeData, storeData } from "../storage";

interface Workouts {
  workouts: WorkoutRef[];
  addWorkout: (workout: string) => void;
  removeWorkout: (key: string) => void;
}

const WORKOUT_PREFIX = 'workout-';

const useWorkouts = (): Workouts => {
  const [workouts, setWorkouts] = useState<WorkoutRef[]>([]);

  const addWorkout = async (workoutName: string) => {
    const workout: Workout = {
      name: workoutName,
      exercises: [],
      date: []
    };
    const key = convertStringToKey(`${WORKOUT_PREFIX}${workoutName}`);
    await storeData(key, workout);

    loadWorkouts();
  }

  const removeWorkout = async (key: string) => {
    await removeData(key);
    loadWorkouts();
  }

  const loadWorkouts = async () => {
    const keys = await getAllKeys();
    if (!keys) {
      return;
    }

    const workoutKeys = keys.filter(key => key.startsWith(WORKOUT_PREFIX));
    const workoutRefs: WorkoutRef[] = [];
    
    for(const workoutKey of workoutKeys) {
      const workout = await getObjectFromStorage(workoutKey);
      if(workout) {
        workoutRefs.push({
          name: workout.name,
          key: workoutKey
        });
      }
    }

    setWorkouts(workoutRefs);
  }

  useEffect(() => {
    loadWorkouts();
  }, []);

  return { workouts, addWorkout, removeWorkout };
}

export default useWorkouts;