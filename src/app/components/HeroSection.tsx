import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="md:grid grid-cols-[1.2fr_0.8fr] px-2 justify-between max-w-6xl mx-auto mt-10 container gap-5 pb-10">
      <div className="bg-linear-to-b  from-[rgba(225,200,150,0.3)] to-white border border-black/8 shadow-lg rounded-xl py-4">
        <div className="px-3 py-2">
          <p className="text-[rgba(30,42,90,.92)] rounded-2xl border border-[rgba(30,42,90,0.16)] inline-flex bg-[rgba(30,42,90,0.05)] px-2 text-sm py-1 font-bold">
            UTSAV 2026 • Arnhem, Netherlands
          </p>
        </div>
        <div className="px-3">
          <h1 className="text-2xl font-bold">
            Coming together in gratitude for every act of service, every life
            touched, and the love that fuels our journey forward.
          </h1>
          <p className="pt-2 text-gray-600">
            Connect. Celebrate. Share ideas. Spark conversations that open new
            paths ahead.
          </p>
          <p className="pt-1 text-gray-600">
            Enjoy uplifting music, heartfelt moments, and a soulful vegetarian
            meal served with warmth and care.
          </p>
        </div>
        <div className="px-3 py-6">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSe1TNogr0bb2_JD56H91wRCJfW8lYGOjJWpkS_bNyLabP6ahw/viewform?usp=dialog"
            target="_blank"
            className="px-4 py-3 bg-blue-950 rounded-lg text-white text-xs md:text-sm font-bold hover:bg-blue-900 transition"
          >
            I Wish to Join
          </Link>
        </div>
        <div className="px-3 flex mb-2 gap-2 flex-wrap">
          <p className="shrink-0 text-sm rounded-3xl border border-[rgba(30,42,90,0.16)] inline-flex px-2 py-2 font-bold">
            🗓️ May 16th, 2026
          </p>
          <p className="shrink-0 text-sm rounded-3xl border border-[rgba(30,42,90,0.16)] inline-flex px-2 py-2 font-bold">
            🕦 11:00 AM
          </p>
          <p className="shrink-0 text-sm rounded-3xl border border-[rgba(30,42,90,0.16)] inline-flex px-2 py-2 font-bold">
            📍 Slochterenweg 29, Arnhem
          </p>
          <p className="shrink-0 text-sm rounded-3xl border border-[rgba(30,42,90,0.16)] inline-flex px-2 py-2 font-bold">
            🥗 Vegetarian
          </p>
        </div>
      </div>
      <div className="relative bg-[url('/LifeOfTree.PNG')] bg-cover bg-center bg-no-repeat shadow-lg rounded-xl min-h-62.5 mt-5 md:mt-0">
        <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
        <p className="[text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black] absolute px-3 bottom-2 font-extrabold text-white tracking-[0.05em] text-lg">
          Meet & Greet • Inauguration with Lamp lighting • Open discussion Forum
          • Lunch • Immersive Expression
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
