import Exercise from './exercise';

type Props = {
    exercises: Exercise[];
    label: string;
}

class Workout {
    private exercises: Exercise[];
    private label: string;
    private currentIndex: number = 0;


    constructor({ exercises, label }: Props) {
        this.exercises = exercises;
        this.label = label;
    }

    public getCurrentExercise(): Exercise {
        return this.exercises[this.currentIndex];
    }

    public getLabel() {
        return this.label;
    }

    public nextExercise() {
        const nextIndex = this.currentIndex + 1;
        const isOverflow = nextIndex > (this.exercises.length - 1);

        if (isOverflow) {
            return;
        }

        this.currentIndex = nextIndex;
    }

    public previousExercise() {
        const nextIndex = this.currentIndex - 1;
        const isOverflow = nextIndex <= 0;

        if (isOverflow) {
            return;
        }

        this.currentIndex = nextIndex;
    }

};

export default Workout;