class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }

    // – Returns the number of empty seats, determined by the capacity set when the wagon was created, subtracted by the number of passengers currently on board.
    getAvailableSeatCount(capacity) {
        return this.capacity - this.passengers.length
    }

    // Adds the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.
    join(traveler) {

        if (this.getAvailableSeatCount () > 0 ) {
            this.passengers.push(traveler)
        }
    }

    // Returns true if there is at least one unhealthy person in the wagon. Return false if not.
    // const dysentery = this.party.some(traveler => traveler.isUnhealthy === false)
    shouldQuarantine() {
        const healthy = this.passengers.some(traveler => traveler.isHealthy === false)
        return healthy
    }
    // 

    // Returns the total amount of food among all passengers in the wagon.
    totalFood() {
        let allFood = 0
        console.log(this.passengers)
        for (let index = 0; index < this.passengers.length; index += 1) {
            allFood += this.passengers[index].food
        }
        return allFood
    }
}