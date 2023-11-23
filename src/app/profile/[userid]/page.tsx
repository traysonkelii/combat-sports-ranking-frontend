export default function UserDetails({
  params,
}: {
  params: { userid: string };
}) {
  return <div>User Details: {params.userid}</div>;
}
