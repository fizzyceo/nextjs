interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();

  return {
    title: `User ${user.name}`,
    description: `This is the profile page of ${user.name}`,
    openGraph: {
      title: `User ${user.name}`,
      description: `This is the profile page of ${user.name}`,
      url: `https://localhost.com/users/${params.id}`,
      images: [
        {
          url: `https://api.ax  dorable.io/avatars/285/${user.email}.png`,
          width: 285,
          height: 285,
          alt: user.name,
        },
      ],
    },
  };
}

const User = ({ params }: Props) => {
  return <div>user number: {params.id}</div>;
};

export default User;
