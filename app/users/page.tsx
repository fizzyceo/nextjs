import Image from "next/image";
import Link from "next/link";

interface User {
  name: string;
  email: string;
  id: any;
}

export const metadata = {
  title: "users",
  keywords: ["users", "information", "data", "jsonplaceholder", "Api"],
  description: "This page displays a list of users fetched from an API.",
  openGraph: {
    title: "Users List",
    description: "Explore the list of users fetched from an API.",
    url: "https://yourwebsite.com/users",
    images: [
      {
        url: "https://api.adorable.io/avatars/285/users.png",
        width: 285,
        height: 285,
        alt: "Users List",
      },
    ],
  },
};

async function Users() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();

  //   const users: User[] = [
  //     {
  //       id: 1,
  //       name: "soumeya",
  //       email: "retard@gmail.com",
  //     },
  //     {
  //       id: 2,
  //       name: "zaki",
  //       email: "heisenberg@gmail.com",
  //     },
  //     {
  //       id: 3,
  //       name: "aymen",
  //       email: "jesaistout!!!!@gmail.com",
  //     },
  //     {
  //       id: 4,
  //       name: "salim",
  //       email: "couple1@gmail.com",
  //     },
  //     {
  //       id: 5,
  //       name: "wyssal",
  //       email: "couple2@gmail.com",
  //     },
  //   ];
  return (
    <div>
      {users.map((e, index) => {
        return (
          <Link href={`/users/${e.id}`} key={index}>
            <h1>{e.email}</h1>
            <h2>{e.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default Users;
