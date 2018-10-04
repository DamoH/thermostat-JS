function Thermostat() {
  this.currentTemp = 20;
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
    return maxTemp;
  } else if (button === "off") {
    var maxTemp = 32;
    return maxTemp;
  } else {
    this.button === "on";
    return this.button;
  }
};

Thermostat.prototype.reset = function() {
  this.currentTemp = 20;
  return this.currentTemp;
};

Thermostat.prototype.usage = function(currentTemp) {
  if (currentTemp < 18) {
    return "low-usage";
  } else if (currentTemp > 25) {
    return "high-usage";
  } else {
    return "medium-usage";
  }
};
