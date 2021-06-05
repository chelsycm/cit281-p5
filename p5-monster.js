module.exports = class monster {
constructor({
    monsterName = "unknown",
    minimumLife = 0,
    currentLife = 100, 
   
})
{
    this.monsterName = monsterName; 
    this.minimumLife = minimumLife; 
    this.currentLife = currentLife; 
    this.isAlive = (currentLife >= minimumLife) ? true : false; 
}
updateLife(lifeChangeAmount){
    this.currentLife = (this.currentLife + lifeChangeAmount) > 0 ? this.currentLife + lifeChangeAmount : 0;
    //console.log(this.currentlife)
    this.isAlive = currentLife > minimumLife ? true : false;  
}
randomLifeDrain(minimumLifeDrain, maximumLifeDrain) {
    if (minimumLifeDrain < maximumLifeDrain){
        var life = getRandomInteger(minimumLifeDrain, maximumLifeDrain)
        updateLife(life); 
        console.log(`${this.monsterName} random power drain of ${life}`);
    }
}
getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
}
