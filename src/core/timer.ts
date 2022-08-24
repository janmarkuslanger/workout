type Events = {
    onTick: (currentTime: number) => void;
    onStop: (currentTime: number) => void;
    onReset: () => void;
};

class Timer {
    private current: number;
    private interval: any;

    constructor(private end: number, private events: Events) {
        this.end = end;
        this.current = end;
        this.events = events;
    }

    public run() {
        this.interval = setInterval(() => {
            this.current -= 1;
            this.events.onTick(this.current);

            if (this.current <= 0) {
                this.stop();
            }
        }, 1000);
    }

    public stop() {
        clearInterval(this.interval);
        this.events.onStop(this.current);
    }

    public reset() {
        this.current = this.end;
        this.events.onReset();
    }

}