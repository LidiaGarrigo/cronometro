
class Chronometer {
    currentTime; //no es necesario
    intervalId; //no es necesario, ya definidos en linias 7 y 8

    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }


    startClick() {
        this.intervalId = setInterval(() => {
            this.currentTime++;
            this.setTime();
            // console.log(this.minutes+':'+this.seconds);
            printTime(this.minutes,this.seconds);
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
        clearInterval(this.intervalId);
    }

    resetClick() {
        this.currentTime = 0;
    }

    splitClick() {

    }
}

