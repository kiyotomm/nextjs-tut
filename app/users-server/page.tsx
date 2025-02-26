type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: number;
};
const usersServer = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return (
    <div>
      {users.map((user: User) => (
        <div>{user.name}</div>
      ))}
    </div>
  );
};

export default usersServer;
