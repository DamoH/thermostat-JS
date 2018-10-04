describe("Thermostat", function () {
  var thermostat;
  var button;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("#start", function() {
    it("should have a starting temp of 20 degrees", function() {
      expect(thermostat.starter()).toEqual(20);
    });
  });

  describe("#upTemp", function() {
    it("should increase the temp with an up function", function() {
      expect(thermostat.upTemp(5)).toEqual(25);
    });
  });

  describe("#downTemp", function() {
    it("should decrease the temp with a down function", function() {
      expect(thermostat.downTemp(10)).toEqual(10);
    });
  });

  describe("#minimum", function() {
    it("should have a minimum temperature of 10 degrees", function() {
      expect(thermostat.minimum()).toEqual(10);
    });
  });

  describe("#powerSave", function() {
    it("should have a max temp of 25 degs when powersave mode is on", function() {
      expect(thermostat.powerSave("on")).toEqual(25);
    });
    it("should have a max temp of 32 degs when powersave mode is off", function() {
      expect(thermostat.powerSave("off")).toEqual(32);
    });
    console.log(button);
    it("should have the power save mode on by default", function() {
      expect(thermostat.powerSave(this.button)).toEqual("on");
    });
  });

  describe("#reset", function() {
    it("should reset the temp to 20 with a reset function", function() {
      expect(thermostat.reset()).toEqual(20);
    });
  });

  describe("#usage", function() {
    it("it should report back with low energy usage", function() {
      expect(thermostat.usage(17)).toEqual("low-usage");
    });

    it("it should report back with medium energy usage", function() {
      expect(thermostat.usage(22)).toEqual("medium-usage");
    });

    it("it should report back with low energy usage", function() {
      expect(thermostat.usage(26)).toEqual("high-usage");
    });
  });

});
