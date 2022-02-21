// Make Pasta

const getAPot = () => {
    console.log("Got a pot for making pasta");
}
const pourWater = () => {
    console.log("Water poured into te pot");
}
const boilWater = () => {
    console.log("Brought the wtaer to boil");
}
const addPasta = () => {
    console.log("Added pasta to the water");
}
const stir = () => {
    console.log("stirred the pasta");
}
const addSalt = () => {
    console.log("Added salt to the pasta");
}
const setTimer = (time) => {
    console.log(`Set the timer for ${time} mins`);
}
const turnOffTheFlame = () => {
    console.log("Turned the flame off");
}
const drainExcessWater = () => {
    console.log("Drained the excess water");
}
const addSauceAndCheese = () => {
    console.log("Added sauce and cheese to the pasta");
}

const makePasta = () => {
    getAPot();
    pourWater();
    boilWater();
    addPasta();
    stir();
    addSalt();
    setTimer(5);
    turnOffTheFlame();
    drainExcessWater();
    addSauceAndCheese();
}
// test output
makePasta();