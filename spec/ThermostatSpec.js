describe('Themostat', function() {

    var Themostat;

    // Before each statement
    beforeEach(function() {
        stat = new Thermostat();
    });

    // Construct
    describe('Constructor', function () {
        it('temp is 20', function() {
            expect(stat.temp).toEqual(20);
        });
        
        it('power saving is off', function() {
            expect(stat.ps).toEqual(true);
        });
    });

    // Up
    describe('Up', function () {
        it('increases by 1', function() {
            stat.up(1)
            expect(stat.temp).toEqual(21);
        }); 

        it('if power saving, max 25 (sets previous value)', function() {
            stat.up(300)
            expect(stat.temp).toEqual(20);
        }); 

        it('if not power saving, max 32 (sets previous value)', function() {
            stat.ps = false
            stat.up(300)
            expect(stat.temp).toEqual(20);
        }); 
    });

    // Down
    describe('Down', function () {
        it('decreased by 2', function() {
            stat.down(2)
            expect(stat.temp).toEqual(18);
        });

        it('has a minimum temp', function() {
            stat.down(60)
            expect(stat.temp).toEqual(20);
        });
    });

    // Reset
    describe('reset temp to 20', function () {
        it('decreased by 2', function() {
            stat.down(2)
            stat.reset()
            expect(stat.temp).toEqual(20);
        });
    });

    // PS TOGGLE
    describe('PS TOGGLE', function () {
        it('decreased by 2', function() {
            stat.psToggle()
            expect(stat.ps).toEqual(false);
        });
    });

    // Energy Usage
    describe('Energy Usage', function () {
        it('18 to 25 is medium-usage', function() {
            expect(stat.energyUsage()).toEqual("medium-usage");
        });

        it('Under 18 is low-usage', function() {
            stat.temp = 17
            expect(stat.energyUsage()).toEqual("low-usage");
        });

        it('Over 25 is low-usage', function() {
            stat.ps = false
            stat.temp = 30
            expect(stat.energyUsage()).toEqual("high-usage");
        });
    });
});