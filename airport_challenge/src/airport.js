
function Airport(){
  this.hanger = []
}

Airport.prototype.land = function(plane) {
  this.hanger.push(plane)
  return plane + " has landed"
};

Airport.prototype.takeoff = function(plane) {
    var planeIndex = this.hanger.indexOf(plane);
// The indexOf method returns -1 if the value to search for never occurs."
    if(planeIndex != -1) {
        this.hanger.splice(planeIndex, 1);
    }
    return plane + " has departed";
};


// airport = new Airport();
// console.log(airport.land("concorde 572"))
// console.log(airport.land("concorde 576"))
// console.log(airport.takeoff("concorde 572"))
// console.log(airport)
