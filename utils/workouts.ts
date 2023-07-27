import { addToStorageArray, convertStringToKey, getObjectFromStorage, storeData } from "./storage";

export const storeWorkout = async (workoutName: string) => {
  await addToStorageArray('workouts', workoutName);

  const workout: Workout = {
    name: workoutName,
    exercises: [],
    date: []
  };
  const key = convertStringToKey(workoutName);
  await storeData(key, workout);
};

export const addExcerciseToWorkoutStore = async (workoutName: string, exercise: Exercise) => {
  const key = convertStringToKey(workoutName);
  const workout = await getObjectFromStorage(key) as Workout;
  
  workout.exercises.push(exercise);
  await storeData(workoutName, workout);
};

export const getWorkouts = async (): Promise<string[]> => {
  return await getObjectFromStorage('workouts') as string[];
};

export const getWorkout = async (workoutName: string): Promise<Workout> => {
  const key = convertStringToKey(workoutName);
  return await getObjectFromStorage(key) as Workout;
};
