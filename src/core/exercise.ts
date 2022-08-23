import { Exercise as Props } from './types';

class Exercise {
    private label: string;
    private time?: number;
    private repetitions?: number;

    constructor({ label, time, repetitions }: Props) {
        this.label = label;
        this.time = time;
        this.repetitions = repetitions;
    }

    public getLabel(): string {
        return this.label;
    }

    public hasTime(): boolean {
        return !!this.time && Number.isInteger(this.time) && this.time > 0;
    }

    public haRepetitions(): boolean {
        return !!this.repetitions && Number.isInteger(this.repetitions) && this.repetitions > 0;
    }

    public shouldEnd(time: number) {
        return this.time && time >= this.time;
    }

}

export default Exercise;