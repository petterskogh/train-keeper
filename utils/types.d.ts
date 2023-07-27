interface Workout {
  name: string;
  exercises: Exercise[];
  date: Date[];
}

interface Exercise {
  name: string;
  date: Date[];
}

interface WorkoutRef {
  name: string;
  key: string;
}