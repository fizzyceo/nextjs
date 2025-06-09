import { Metadata, ResolvingMetadata } from "next";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
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
          url: `https://api.adorable.io/avatars/285/${user.email}.png`,
          width: 285,
          height: 285,
          alt: user.name,
        },
      ],
    },
  };
}

export default function UserPage({ params }: PageProps) {
  return <div>User number: {params.id}</div>;
}
