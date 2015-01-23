{
    init: function(elevators, floors) {
      _.each(floors, function(f) {
          f.on("down_button_pressed", function(event) { 
              
          });
          
          f.on("up_button_pressed", function(event) { 
              
          });
      });
      
      _.each(elevators, function(e) {
        e.on("idle", function() {
            e.goToFloor(0);            
        });      
        
        e.on("floor_button_pressed", function(floorNum) { 
            e.goToFloor(floorNum);
        });        
      
        e.on("passing_floor", function(floorNum, direction) { 
            
        });
        
        e.on("stopped_at_floor", function(floorNum) {
            
        });        
      });
    },
    
    update: function(dt, elevators, floors) {
    }
}
