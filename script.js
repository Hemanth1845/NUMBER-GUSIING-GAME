let minimum = 1;
let maximum = 100;
let answer = Math.floor(Math.random() * (maximum-minimum+1)) + minimum ;

let attempt = 0;
let guess;
let running =  true;

while(running){
    
    guess = window.prompt(`Enter a number between ${minimum} - ${maximum}`);
    guess = Number(guess); //because the user value of window.prompt is in string so we change it

    if(isNaN(guess)){ //isNaN mean not a number
        window.alert(`enter a not a number`);
    }

    else if(guess <minimum && guess>maximum){
        window.alert(`enter a invalid number`);
    }
    else {
        if(guess < answer){
            window.alert(`THe value is too low`);
        }
        else if(guess> answer){
            window.alert('The vlaue is too high');
        }
        else {
            attempt++
            window.alert(`Correct the answer was ${answer}, it took attemps ${attempt}`);
            running = flase;
        }
    }
}