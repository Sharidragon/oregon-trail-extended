class Traveler {

    constructor(traveler)   {
        this.newTraveler = traveler
        this.food = 1
        this.isHealthy = true   
    }

// hunt() – Increases the traveler's food by 2.
    hunt (){
        return this.food += 2
    }

// eat() – Consumes 1 unit of the traveler's food. If the traveler doesn't have any food left to eat, the traveler is no longer healthy (set isHealthy to false).
    eat () {
         this.food -= 1
         if (this.food >= 0){
             this.isHealthy = true
         }
         else {return this.isHealthy = false}
         
    }
}