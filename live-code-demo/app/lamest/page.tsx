// "use client";
import Link from "next/link";
import { Noto_Sans } from "next/font/google";

const font = Noto_Sans({ weight: "400", subsets: ["latin"] });

export default async function Home() {
  const data = await fetch("http://localhost:3000/api/random-poke", {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <div className={`mx-auto w-72 text-center mt-72 ${font.className}`}>
      <h3 className="text-sm mb-2 text-gray-500">
        The lamest pokemon of all time:
      </h3>
      <h2 className="text-xl">
        {data.name.charAt(0).toUpperCase() + data.name.slice(1)}!
      </h2>
      <img src={data.sprites.front_default} className="mx-auto" />
      <Link className="block mt-4 text-blue-500 text-sm" href="/">
        See the greatest pokemon &raquo;
      </Link>
    </div>
  );
}
