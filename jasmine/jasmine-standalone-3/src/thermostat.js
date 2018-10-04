function Thermostat() {
  this.startTemp = 20;
};

Thermostat.prototype.starter = function() {
  return this.startTemp;
};

Thermostat.prototype.upTemp = function(num) {
  return (this.startTemp + num);
};
