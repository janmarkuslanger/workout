type Props = {
    label: string;
    time?: number;
    repetitions?: number;
}

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

}

export default Exercise;