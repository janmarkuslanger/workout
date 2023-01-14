import WorkoutModel from "../models/workout";
import State from "./state";

export default interface Workout {
    workout: WorkoutModel;
    state: State;
    start(): void;
    stop(): void;
    pause(): void;
    nextExercise(): void;
    previousExercise(): void;
}