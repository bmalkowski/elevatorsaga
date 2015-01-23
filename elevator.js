{
    init: function(elevators, floors) {
        var requests = new Array();
        
        _.each(floors, function(f) {
            f.on("down_button_pressed", function(event) { 
                requests.push(f.floorNum());
            });
          
            f.on("up_button_pressed", function(event) { 
                requests.push(f.floorNum());
            });
        });
      
        _.each(elevators, function(e) {
            e.on("idle", function() {
                if (_.isEmpty(requests)) {
                    e.goToFloor(0);            
                } else {
                    e.goToFloor(requests.pop());
                }
            });      
            
            e.on("floor_button_pressed", function(floorNum) { 
                e.goToFloor(floorNum);
            });        
            
            e.on("passing_floor", function(floorNum, direction) { 
                if (_.contains(requests, floorNum)) {
                    e.stop();
                }
            });
            
            e.on("stopped_at_floor", function(floorNum) {
                _.without(requests, _.findWhere(requests, floorNum));
            });        
        });
    },
    
    update: function(dt, elevators, floors) {
    }
}
