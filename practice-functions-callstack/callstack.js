function start() {
 console.log("Start of program");
 firstTask();
 console.log("Back in start");
}
function firstTask() {
 console.log("First task running");
 secondTask();
 console.log("First task completed");
}
function secondTask() {
 console.log("Second task in progress");
}
start();

console.log("End of program");



// Tasks
// 1. Predict the Call Stack Behavior:
// ○ Write down the order in which functions are added to the call stack
// and when they are removed
// ○ Indicate which function is currently being executed at each step
// 2. Order the Call Stack:
// 1
// ○ Use a vertical list to represent the call stack, with the most recent
// function call at the top
// 3. Write the Console Output:
// ○ Predict and write the exact sequence of outputs that will be logged to
// the console
// 4. Explain Execution Flow:
// ○ Describe how the call stack enables JavaScript to pause one function,
// execute another, and then resume the original function

/*
Call stack trace:
1. start() is pushed onto the call stack
2. "Start of program" is printed
3. firstTask() is pushed onto the call stack (start is paused)
4. "First task running" is printed
5. secondTask() is pushed onto the call stack (firstTask is paused)
6. "Second task in progress" is printed
7. secondTask() finishes and is popped off the stack
8. firstTask() resumes, "First task completed" is printed
9. firstTask() finishes and is popped off the stack
10. start() resumes, "Back in start" is printed
11. start() finishes and is popped off the stack
12. "End of program" is printed (global scope)

*/