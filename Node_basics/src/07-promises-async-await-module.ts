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

export function fetchUser(userId: number): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((currentUser) => currentUser.id == userId);

      if (!user) {
        reject(new Error(`user with ${userId} is not present`));
        return;
      }
      resolve(user);
    }, 1000);
  });
}

fetchUser(1)
  .then((user) => {
    console.log("Promise result:", user?.id, user?.name, user?.role);
  })
  .catch((error: Error) => {
    console.log("Promise error", error.message);
  });
