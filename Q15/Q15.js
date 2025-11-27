// Simplified countdown timer
function simpleCountdown(seconds) {
    let timeLeft = seconds;
    
    console.log(`Starting ${seconds}-second countdown...`);
    
    const timer = setInterval(() => {
        console.log(`Time: ${timeLeft}s`);
        timeLeft--;
        
        if (timeLeft < 0) {
            clearInterval(timer);
            console.log("Countdown Complete!");
        }
    }, 1000);
    
    // Using setTimeout to set up emergency stop
    setTimeout(() => {
        console.log("Emergency stop will activate in 3 seconds...");
        
        setTimeout(() => {
            console.log("⏹️  Emergency stop activated!");
            clearInterval(timer);
        }, 3000);
        
    }, 2000);
}
console.log(simpleCountdown(10))