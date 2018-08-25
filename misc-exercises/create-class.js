// just create a class

//a class is a function that can be hoisted and has properties that can be messed with by a new modifier

//KEEP IN MIND THAT THE ES6 METHOD DOES NOT WORK WITH THE CLASS STUFF
let Building = function(floors) {
    this.floors = 12; //it's a function not an object. even though it behaves like one.
    this.windows = 10;
    //why do you need the this?
};

Building.prototype.countFloors = function() {
    return this.floors;;

};
Building.prototype.moreWindows = function(windows) {
    return this.windows = windows;
}

let skyScraper = new Building(100);

console.log(skyScraper.countFloors());

skyScraper['windows']=5;

console.log(skyScraper);