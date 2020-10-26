
class Chronometer {
    currentTime;
    intervalId;

    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }


    startClick() {
        this.intervalId = setInterval(() => {
            this.currentTime++;
            this.setTime();
            
        }, 1000)
    }

    setMinutes() {
        return Math.floor(this.currentTime/60);
    }

    setSeconds() {
        return this.currentTime%60;
    }

    twoDigitsNumber(number) {
        if ( number < 10) {
            return "0" + number;
        } else {
            return number.toString();
        }
    }

    setTime() {
        let minutes = this.twoDigitsNumber(this.setMinutes());
        let seconds = this.twoDigitsNumber(this.setSeconds());
    }

    setMilliseconds() {

    }

    stopClick() {
        clearInterval(this.intervalId)
    }

    resetClick() {
        this.currentTime = 0;
    }

    splitClick() {

    }
}

