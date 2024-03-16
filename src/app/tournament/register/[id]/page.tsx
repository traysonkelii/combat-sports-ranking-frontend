export default function Page({ params }: { params: { id: string } }) {
  return <div>Tournament ID: {params.id}</div>;
}
