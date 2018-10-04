function Thermostat() {
  this.startTemp = 20;
  this.minTemp = 10;
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
