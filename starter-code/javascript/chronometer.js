class Chronometer {
    constructor() {
        this.currentTime = 0
        this.intervalId = 0
        this.minutes=0
        this.seconds=0
    }
    startClick() {
        this.intervalId = setInterval(function () { 
            this.currentTime += 1;
            this.setTime();
        }.bind(this), 1000);
 
    }

    setMinutes() {
        return Math.floor(this.currentTime / 60);

    }

    setSeconds() {
        return this.currentTime % 60;
    }

    twoDigitsNumber(n) {
        if (n.toString().length < 2) {
            n = "0" + n
        }
        return n
    }
    setTime(){
        this.minutes = this.setMinutes();
        this.seconds = this.setSeconds();
        this.twoDigitsNumber(this.minutes);
        this.twoDigitsNumber(this.seconds);
        
        
        
}
    stopClick() {
        clearInterval(this.intervalId);
        console.log(this.intervalId)
        
    }

    resetClick() {
        this.currentTime = 0;
    }

    splitClick() {
      

    }
}
