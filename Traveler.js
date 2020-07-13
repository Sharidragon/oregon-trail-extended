class Traveler {

    constructor(traveler) {
        this.newTraveler = traveler
        this.food = 1
        this.isHealthy = true
    }
    hunt() {
        return this.food += 2
    }
    eat() {
        this.food -= 1
        if (this.food >= 0) {
            this.isHealthy = true
        }
        else { return this.isHealthy = false }
    }
}

class Doctor extends Traveler {
    constructor(newTraveler, food, isHealthy) {
        super(newTraveler, food, isHealthy)
    }
    heal(traveler) {
        traveler.isHealthy = true
    }
}

class Hunter extends Traveler {
    constructor(newTraveler, food, isHealthy) {
        super(newTraveler, food, isHealthy)
        }
     eat() {
            // Consumes 2 units of food. If the hunter doesn't have 2 food when they are instructed to eat, they eat as much as they can (0 or 1 unit), but the hunter is no longer healthy.

            if (this.food < 2 ) {
                this.food -= 2
                this.isHealthy = true
            }
            else { 
                this.food -= 1
                return this.isHealthy = false }
        }
    
    hunt() {
        // hunt() - Increase the hunter's food by 5. (A normal traveler gains only 2.)
        return this.food += 5
        }

    giveFood(traveler, numOfFoodUnits) {
        // Transfers numOfFoodUnits from the hunter to the traveler. If the hunter doesn't have enough food, then no food should be transferred.
        if (numOfFoodUnits <= this.food) {
            traveler.food += numOfFoodUnits
            this.food -= numOfFoodUnits
        }
   
    }
}




