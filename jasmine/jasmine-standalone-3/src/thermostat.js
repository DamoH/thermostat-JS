function Thermostat() {
  this.currentTemp = undefined;
  this.startTemp = 20;
  this.minTemp = 10;
  this.button = "on";
};

Thermostat.prototype.starter = function() {
  return this.startTemp;
};

Thermostat.prototype.upTemp = function(num) {
  return (this.startTemp + num);
};

Thermostat.prototype.downTemp = function(num) {
  return (this.startTemp - num);
};

Thermostat.prototype.minimum = function() {
  return this.minTemp;
};

Thermostat.prototype.powerSave = function(button) {
  if (button === "on") {
    var maxTemp = 25;
  } else {
    var maxTemp = 32;
  }
};

Thermostat.prototype.reset = function() {
  this.temp = 20;
  return this.temp;
};
