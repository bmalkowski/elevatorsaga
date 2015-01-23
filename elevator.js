{
    init: function(elevators, floors) {
      _.each(floors, function(f) {
      });
      
      _.each(elevators, function(e) {
        e.on("idle", function() {
            // The elevator is idle, so let's go to all the floors (or did we forget one?)
            e.goToFloor(0);            
            e.goToFloor(1);
            e.goToFloor(3);

        });      
      });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
