import React from "react";

function ExtraServicesSection() {
  return (
    <section>
      <div className="flex gap-x-5 mx-20 mb-20">
        <aside className="flex-1 bg-[#191A20] border-2 border-[#212228] border-t-[#323336] px-5 py-10">
          <h5 className="font-[700] font-Montserrat text-[15px] text-white">
            Разовая консультация - 3000р час
          </h5>
          <p className="font-[500] font-Montserrat text-white mb-5">
            У тебя есть вопросы по технологии или карьерному пути?
            <br />
            Или тебе нужен свежий вгляд на ситуацию с экспертной стороны?
          </p>
          <button className="px-5 py-2 font-[700] font-Montserrat bg-[#13141A] text-white shadow-basic">Записаться</button>
        </aside>
        <aside className="flex-1 bg-[#191A20] border-2 border-[#212228] border-t-[#323336] px-5 py-10">
          <h5 className="font-[700] font-Montserrat text-[15px] text-white">
            Разовая консультация - 3000р час
          </h5>
          <p className="font-[500] font-Montserrat text-white mb-5">
            У тебя есть вопросы по технологии или карьерному пути?
            <br />
            Или тебе нужен свежий вгляд на ситуацию с экспертной стороны?
          </p>
          <button className="px-5 py-2 font-[700] font-Montserrat bg-[#13141A] text-white shadow-basic">Записаться</button>
        </aside>
      </div>
      <div className="flex flex-col items-center gap-y-10 w-full pb-20">
        <h6 className="text-center font-Montserrat font-[700] text-white">Если у тебя есть вопросы по какой-либо теме, дерзай и спрашивай напрямую у меня. <br /> Я рад тебе ответить</h6>
        <button className="bg-[#212836] py-3 px-20 font-Montserrat font-[700] text-white">Написать</button>
      </div>
    </section>
  );
}

export default ExtraServicesSection;
