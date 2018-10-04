describe("Thermostat", function () {
  var thermostat;

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

});
