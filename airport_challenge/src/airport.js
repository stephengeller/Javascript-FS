
function Airport(){
  this.hanger = []
    hanger2 = []

}

Airport.prototype.land = function(plane) {
  this.hanger.push(plane)
  return plane + " has landed"
};

Airport.prototype.takeoff = function(plane) {
    var i = this.hanger.indexOf(plane);
    if(i != -1) {
        this.hanger.splice(i, 1);
    }
};
