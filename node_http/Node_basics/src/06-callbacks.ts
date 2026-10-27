type User = {
  id: number;
  name: string;
  role: "user" | "Super-admin";
};

const users: User[] = [
  {
    id: 1,
    name: "Shreya",
    role: "Super-admin",
  },
  {
    id: 2,
    name: "utkarsh",
    role: "user",
  },
  {
    id: 3,
    name: "Surbhi",
    role: "user",
  },
];

function findUserWithCallback(
  userId: number,
  callback: (error: Error | null, user?: User) => void,
): void {
  setTimeout(() => {
    const user = users.find((currentUser) => currentUser.id == userId);

    if (!user) {
      callback(new Error(`user with ${userId} was not found`));
      return;
    }

    callback(null, user);
  }, 500);
}

findUserWithCallback(3, (error, user) => {
  if (error) {
    console.log("callback error", error.message);
    return;
  }
  console.log("callback result", user?.id, user?.name, user?.role);
});
