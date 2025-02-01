import React from "react";

// Массив из названий технологий
import { tools } from "../utils/technologiesArray";

// Массив url самих картинок
const images = Object.values(
  import.meta.glob("/src/assets/images/technologies/*", {
    eager: true,
    import: "default",
  })
);

function SkillsSection() {
  return (
    <section className="flex flex-col items-center gap-y-20 bg-[#13141a] pt-20 pb-20">
      <h1 className="text-style text-[100px]">Мой стек</h1>
      <div className="bg-[#212836] w-full flex justify-center shadow-basic">
        <div className="grid grid-cols-5 grid-rows-2 gap-x-20 gap-y-10 px-20 py-10">
          {images.map((img, index) => (
            <div className="flex flex-col items-center" key={index}>
              <h6 className="text-style mb-5">{tools[index]}</h6>
              <img className="w-[100px]" src={img} alt="#" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-x-10 px-20">
        <aside className="flex-1 px-5 py-10 bg-[#18191E] border-2 border-[#212228] border-t-[#323336]">
          <h1 className="text-style text-[60px] mb-5">Кому полезен?</h1>
          <p className="text-white font-Montserrat">
            Студенты, вкатуны, джуны
            <br /> Люди, которые меняют профессию или область в айти <br />
            Специалисты, изучающие технологии, которые я знаю <br />
            Релоканты в Германию и те, кто хотят больше узнать о специфике
            немецкого айти рынка
          </p>
        </aside>
        <aside className="flex-1 px-5 py-10 bg-[#18191E] border-2 border-[#212228] border-t-[#323336]">
          <h1 className="text-style text-[60px] mb-5">Почему я?</h1>
          <p className="text-white font-Montserrat">
            Как свежий миддл, я ближе к тебе и твоим проблемам/переживаниям, чем
            синьор <br /> Материалы скорее всего актуальнее и прикладнее,
            так-как я сам ими недавно пользовался <br /> Индивидуальное
            обучение. У меня нет десятков менти и большой организации. Поэтому
            со мной не будет классов/групп и делегирования другим менторам
          </p>
        </aside>
      </div>
    </section>
  );
}

export default SkillsSection;
