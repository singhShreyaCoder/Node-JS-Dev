/*timers module is used when we want to run code after some delay 
or run some code repeatedly after some interval*/

function runSetTimeout(): void {
  console.log("1. setTimeout example started");

  setTimeout(() => {
    console.log("2. This runs after 1 second");
  }, 1000);

  console.log("3. This runs immediately, node doesn't wait");
}

function runSetInterval(): void {
  let count = 0;

  const intervalId = setInterval(() => {
    count++;

    console.log(`5. setInterval tick: ${count}`);

    if (count == 3) {
      clearInterval(intervalId);
      console.log("6. setInterval stopped");
    }
  }, 500);
}

function runClearTimeout(): void {
  const timerId = setTimeout(() => {
    console.log("Tis message will not run");
  }, 2000);

  clearTimeout(timerId);
  console.log("4.cleartimeout cancelled the 2 second timer");
}

function runSetImmediate(): void {
  setImmediate(() => {
    console.log("7. setImmediate callback");
  });

  console.log("8. synchronous code after setImmediate");
}

function runTimerDemo(): void {
  runSetTimeout();
  runClearTimeout();
  runSetInterval();
  runSetImmediate();
}

runTimerDemo();
