export default async function NotFound(props: { params: Promise<{ test: string }> }) {
  const params = await props.params;
  return (
    <div>
      <h1>Set the setting!</h1>

      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
}
