import { revalidatePath } from "next/cache";
import { auth, currentUser } from "@clerk/nextjs/server";

type MockUser = {
  id: number;
  name: string;
};

const MockUser = async () => {
  const authObj = await auth();
  const userObj = await currentUser();

  const res = await fetch("https://67b9725651192bd378dd7038.mockapi.io/users");
  const users = await res.json();

  const addUser = async (formData: FormData) => {
    "use server";
    const name = formData.get("name");
    const res = await fetch(
      "https://67b9725651192bd378dd7038.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      }
    );
    const newUser = await res.json();
    revalidatePath("mock-users");
    console.log(newUser);
  };

  return (
    <div>
      <form action={addUser}>
        <input type="text" name="name" required />
        <input type="submit" value="add user" />
      </form>
      {users.map((user: MockUser) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default MockUser;
