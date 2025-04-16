export type WorkoutType = 'strength' | 'hypertrophy' | 'endurance' | 'flexibility' | 'recovery';

export type ExerciseCategory = 'compound' | 'isolation' | 'accessory' | 'cardio';

export interface Exercise {
  id: string;
  name: string;
  category: ExerciseCategory;
  primaryMuscles: string[];
  secondaryMuscles?: string[];
  equipment: string[];
  description: string;
  formTips: string[];
  videoUrl?: string;
}

export interface Workout {
  id: string;
  name: string;
  type: WorkoutType;
  exercises: {
    exercise: Exercise;
    sets: number;
    reps: number;
    weight?: number;
    restTime: number;
    notes?: string;
  }[];
  duration: number;
  date: string;
  notes?: string;
  rating?: number;
}

export interface Progress {
  id: string;
  date: string;
  measurements: {
    weight: number;
    bodyFat?: number;
    chest?: number;
    arms?: number;
    waist?: number;
    hips?: number;
    thighs?: number;
  };
  photos?: string[];
  notes?: string;
}

export interface FitnessContent {
  workouts: Workout[];
  exercises: Exercise[];
  progress: Progress[];
  stats: {
    totalWorkouts: number;
    averageWorkoutDuration: number;
    favoriteExercise: string;
    recentProgress: Progress[];
  };
} 