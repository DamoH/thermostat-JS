describe("Thermostat", function () {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("starting temperature", function() {
    it("it should have a starting temp of 20 degrees", function() {
      expect(thermostat.startTemp()).toEqual(20);
    });
  });


});
