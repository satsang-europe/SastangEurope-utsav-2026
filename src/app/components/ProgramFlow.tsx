import Image from "next/image";
import ProgramCard from "./ProgramCard";

const ProgramFlow = () => {
  return (
    <section className="max-w-6xl mx-auto pb-10 px-2">
      <h2 className="text-2xl font-bold px-2 mb-2">Program details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
        <ProgramCard
          imageLink="/meetAndGreet.PNG"
          imageAlt="Meet and Greet"
          title="Meet And Greet"
          desc="An open and welcoming space to connect and interact with fellow
            attendees, organisers and speakers."
          time="11:00 AM"
        />
        <ProgramCard
          imageLink="/lampLighting.PNG"
          imageAlt="Lamp Lighting"
          title="Inauguration with Lamp lighting"
          desc="Inauguration of the event with the symbolic gesture of lamp lighting
            which signifies auspicious beginning."
          time="11:30 AM"
        />
        <ProgramCard
          imageLink="/discussion.PNG"
          imageAlt="Open Discussion"
          title="Open discussion Forum: From Me to We - A journey beyond Self"
          desc="Respectful participation with sharing thoughts and ideas with fellow participants about newer ways of collaboration to serve and grow together as a community/society."
          time="11:45 AM"
        />
        <ProgramCard
          imageLink="/lunch.png"
          imageAlt="Lunch"
          title="Lunch"
          desc="Simple warm, freshly made vegetarian meal served with care. 'Good food tastes better together..'"
          time="12:30 AM"
        />
      </div>
      <div className="rounded-lg shadow-md overflow-hidden h-120 md:h-80 bg-yellow-50 mt-2">
        <div className="relative w-full h-[66%]">
          <Image
            src="/Immersive.PNG"
            alt="Immersive Expression"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-xl font-bold px-2 pt-4">An immersive experience</h3>
        <p className="text-gray-700 px-2 pt-2">
          Immerse yourself into an audio visual journey of Satsang Europe and
          its founder Sree Sree Thakur Anukulchandra Chakravarty
        </p>
      </div>
    </section>
  );
};

export default ProgramFlow;
