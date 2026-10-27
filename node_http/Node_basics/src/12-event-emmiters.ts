//.on -- register one listener
//.once() --> register one listerner that runs only one time
// .emit() --> triggers an event and sends to the listeners

import EventEmitter from "node:events";

const appEvents = new EventEmitter();

type userRegisterPayLoad = {
  id: number;
  email: string;
};

appEvents.on("user:registered", (user: userRegisterPayLoad) => {
  console.log(`email listerner: Welcome email send to this user ${user.email}`);
});

appEvents.on("user:registered", (user: userRegisterPayLoad) => {
  console.log(`log listener:user ${user.id} and email is ${user.email}`);
});

appEvents.once("app.started", () => {
  console.log("once listener:app started");
});

function registerUser(id: number, email: string): void {
  const user = { id, email };
  console.log("user saved");

  appEvents.emit("user:registered", user);

  console.log("rergister user: event listener completed");
}

appEvents.emit("app started");
appEvents.emit("app.started");

registerUser(1, "shreya@gmail.com");
