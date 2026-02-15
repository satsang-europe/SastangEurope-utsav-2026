"use client";
import Image from "next/image";
import ProgramCard from "./ProgramCard";
import { useLanguage } from "@/context/LanguageContext";

const ProgramFlow = () => {
  const { t } = useLanguage();
  return (
    <section className="max-w-6xl mx-auto pb-10 px-2">
      <h2 className="text-2xl font-bold px-2 mb-2">{t.program_heading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
        <ProgramCard
          imageLink="/MeetGreet.jpeg"
          imageAlt="Meet and Greet"
          title={t.program1_title}
          desc={t.program1_desc}
          time={t.program1_time}
        />
        <ProgramCard
          imageLink="/LampLighting.jpeg"
          imageAlt="Lamp Lighting"
          title={t.program2_title}
          desc={t.program2_desc}
          time={t.program2_time}
        />
        <ProgramCard
          imageLink="/Discussion.jpeg"
          imageAlt="Open Discussion"
          title={t.program3_title}
          desc={t.program3_desc}
          time={t.program3_time}
        />
        <ProgramCard
          imageLink="/Lunch.jpeg"
          imageAlt="Lunch"
          title={t.program4_title}
          desc={t.program4_desc}
          time={t.program4_time}
        />
      </div>
      <div className="rounded-lg shadow-md overflow-hidden h-120 md:h-80 bg-yellow-50 mt-2">
        <div className="relative w-full h-[66%]">
          <Image
            src="/Immersive.jpeg"
            alt="Immersive Expression"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-xl font-bold px-2 pt-4">{t.immersive_title}</h3>
        <p className="text-gray-700 px-2 pt-2">{t.immersive_desc}</p>
      </div>
    </section>
  );
};

export default ProgramFlow;
