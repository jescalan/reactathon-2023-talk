export async function GET() {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomInt(0,250)}`).then(
    (res) => res.json()
  );
  return new Response(JSON.stringify(data))
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}