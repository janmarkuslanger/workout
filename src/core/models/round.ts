import Exercise from "./exercise"

export default interface Round {
    exercises: Exercise[];
    quantity: number;
    duration?: number;
};