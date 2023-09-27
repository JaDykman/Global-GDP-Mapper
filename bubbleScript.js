class Country{
    constructor(name, states = Array){
        this.states = states;
    }
    getAverageIncome() {
        this.averageIncome = this.states.reduce((sum, state) => sum + state.averageIncome, 0) / this.states.length;
        return this.averageIncome;
    }
    
    getAverageLifespan() {
        this.averageLifespan = this.states.reduce((sum, state) => sum + state.averageLifespan, 0) / this.states.length;
        return this.averageLifespan;
    }
}
class State{
    constructor(averageLifespan, averageIncome){
        this.averageLifespan = averageLifespan;
        this.averageIncome = averageIncome;
    }
}
class Bubble {
    constructor(country, x, y, radius) {
        this.country = country;
        this.radius = radius;
        this.x = x;
        this.y = y;
    }
    Destroy() {
        return;
    }

    Draw() {
        let bubble = document.createElement("div");
        //set bubbles class to bubble
        bubble.className = "bubble";
        //make it turn blue when hovered over
        bubble.addEventListener("mouseover", function() {
            bubble.style.background = "blue";
        });
        bubble.addEventListener("mouseout", function() {
            bubble.style.background = "red";
        });

        bubble.style.position = "absolute";
        bubble.style.left = this.x + "px";
        bubble.style.top = this.y + "px";
        bubble.style.width = this.radius + "px";
        bubble.style.height = this.radius + "px";
        bubble.style.borderRadius = "50%";
        bubble.style.background = "red";
        document.body.appendChild(bubble);
    }
}

let allCountries = new Array;
let allStates = new Array;
let bubbles = new Array;



function printValues(){
    for (const element of allCountries) {
        console.log("Average Income: " + element.getAverageIncome());
        console.log("Average Lifespan: " + element.getAverageLifespan());

    }
}

function createRandCountry(){
    let newStates = new Array;
    for (let i = 0; i < Math.random()*100+1; i++) {
        newStates.push(new State((Math.random()*1000+100), (Math.random()*1000+100)))
    }

    let newCountry = new Country("randCountry", newStates);
    allCountries.push(newCountry);

    let newBubble = new Bubble;
    newBubble.country = newCountry;
    newBubble.x = Math.random() * screen.width;
    newBubble.y = Math.random() * screen.height;
    newBubble.radius = Math.random() * 100 + 10;
    newBubble.Draw();
    bubbles.push(newBubble);
    

}


