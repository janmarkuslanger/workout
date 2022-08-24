class Timer {
    private current: number;
    private interval: any;

    constructor(private end: number, private onTick: (time: number) => void) {
        this.end = end;
        this.current = end;
        this.onTick = onTick;
    }

    public run() {
        this.interval = setInterval(() => {
            this.current -= 1;
            this.onTick(this.current);

            if (this.current <= 0) {
                this.stop();
            }
        }, 1000);
    }

    public stop() {
        clearInterval(this.interval);
    }

    public reset() {
        this.current = this.end;
    }

}