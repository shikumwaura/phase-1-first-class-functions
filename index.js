function runFiveMiles() {
  console.log("Go for a five-mile run");
  //when called the function prints Go for a five mile run
}

function liftWeights() {
  console.log("Pump iron");
  // when called prints pump iron
}

function Monday() {
  exerciseRoutine(liftWeights);
// This function calls exerciseRoutine and passes the function liftWeights as the argument.
// So, postRunActivity inside exerciseRoutine refers to the liftWeights function.
}

function exerciseRoutine(postRunActivity) {
  runFiveMiles(); //It calls runFiveMiles(), so it prints "Go for a five-mile run".
  postRunActivity();// It calls postRunActivity(), which will execute whatever function was passed in as an argument.(lifeweights)
  
}

Monday();
// When Monday() is called, it triggers the following sequence:
// exerciseRoutine(liftWeights) is called.
// Inside exerciseRoutine:
// runFiveMiles() runs and prints "Go for a five-mile run".
// postRunActivity() runs, which is liftWeights(), printing "Pump iron".


    // A function that calls a callback function
function receivesAFunction(cb){
    cb();
}

    // Retuns a named function
function returnsANamedFunction(){
    return function named (){
        console.log("my name")
    }
}

     // returning anonymous arrow function

function returnsAnanymousFunction(){
    return () => console.log("Ananymous function")
}

function returnsAnAnonymousFunction() {
  return function() {
    // This is an anonymous function with no name
    console.log("Hello from the anonymous function!");
  };
}
