type Params = {
  id: string;
};

type PageProps = {
  params: Params;
};

export async function generateStaticParams(): Promise<Params[]> {
  return [
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
  ];
}

export default function Page({params}: PageProps) {
  return <div>{params.id}</div>;
}
