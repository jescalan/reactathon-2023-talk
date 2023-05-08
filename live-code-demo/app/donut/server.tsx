export default async function ServerComponent() {
  const data = await fetch("http://localhost:3000/api/random-poke").then(
    (res) => res.json()
  );
  return <p>hello from the server: {JSON.stringify(data)}</p>;
}
