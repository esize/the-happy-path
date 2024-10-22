export default function NotFound({ params }: { params: { test: string } }) {
  return (
    <div>
      <h1>Set the setting!</h1>

      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
}
