export type Exercise = {
    time?: number;
    repetitions?: number;
    label: string;
}

export type Workout = {
    exercise: Exercise[];
    label: string;
}

export type State = {
    currentTime?: number;
    currentExercise: number;
};