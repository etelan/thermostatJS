class Thermostat {
    constructor() {
        this.temp = 20;
        this.ps = true;
    };

    _tempChange(num) {

        var temp_old = this.temp;
        this.temp += num;

        // Reset to old temp if too low.
        if (this.temp < 10) {
            this.temp = temp_old;
        };

        // Resets to old temp if too high and ps
        this._savingOffTemp(temp_old)

        // Resets to old temp if too high and not ps
        this._savingOnTemp(temp_old)
    };

    // If it's off, it has higher temperature max.
    _savingOffTemp(temp_old) {
        if (this.ps === false && this.temp > 32) {
            this.temp = temp_old;
        };
    };

    // If it's on, it has a lower temperature max.
    _savingOnTemp(temp_old) {
        if (this.ps === true && this.temp > 25) {
            this.temp = temp_old;
        };
    }

    up(num) {
        this._tempChange(num);
        console.log(this.temp);
    };

    down(num) {
        this._tempChange(-1 * num);
        console.log(this.temp);
    };

    reset() {
        this.temp = 20;
    };

    psToggle(thermo) {
        thermo.ps = !thermo.ps
        thermo._savingOnTemp(25)
    }

    energyUsage(thermo) {
        if (thermo.temp < 18) {
            return "low-usage"
        } else if (thermo.temp <= 25) {
            return "medium-usage"
        } else {
            return "high-usage"
        }
    }

    returnShiz(item) {
        console.log(item);
    };

};
