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
      expect(thermostat.powerSave("on")).toEqual(thermostat.powerSave(25));
    });
    it("should have a max temp of 32 degs when powersave mode is off", function() {
      expect(thermostat.powerSave("off")).toEqual(thermostat.powerSave(32));
    });
    it("should have the power save mode on by default", function() {
      expect(thermostat.powerSave(button)).toEqual(thermostat.powerSave("on"));
    });
  });

});
