console.log("Simulating a loading screen with setInterval")
console.log("Starting loading simulation...");

let counter = 0;
const loadingInterval = setInterval(() => {
    counter++;
    console.log("Loading...");
    
    if (counter >= 5) {
        clearInterval(loadingInterval);
        console.log("Loaded successfully!");
    }
}, 1000);
