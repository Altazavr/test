import React from "react";

function ServicesSection() {
  return (
    <section className="bg-[#212836] flex flex-col items-center gap-y-10 p-10 mx-10 mb-20">
      <h1 className="text-style text-[100px]">Услуги</h1>
      <div className="flex gap-x-10">
        <aside className="flex-1 bg-[#11151C] border-2 border-[#212228] border-t-[#323336] px-5 py-10">
          <h5 className="font-[700] font-Montserrat text-[15px] text-white">
            Основой моей программы является:
          </h5>
          <p className="font-[500] font-Montserrat text-white mb-5">
            <span className="text-style">1) Простой и прозрачный план</span>
            <br />Я сделаю тебе т.н. Personal Development Plan, где ты сможешь,
            в любое время, наблюдать за прогрессом, брать от туда материалы и
            напоминать себе о целях нашей менторской программы.
          </p>
          <p className="font-[500] font-Montserrat text-white">
            <span className="text-style">2) Адаптивное Обучение</span>
            <br />
            Домашние задания, мои объяснения и общий подход к обучению будут
            зависеть от тебя. Помимо роли технического эксперта, как ментор я
            исполняю роль твоего коуча, поэтому моя первоочередная задача —
            сделать менторство для ТЕБЯ приятным процессом.
          </p>
        </aside>
        <aside className="flex-1 bg-[#11151C] border-2 border-[#212228] border-t-[#323336] px-5 py-10">
          <h5 className="font-[700] font-Montserrat text-[15px] text-white mb-5">
            Почему менторство?
          </h5>
          <p className="font-[500] font-Montserrat text-white mb-5">
            Хочешь взять новые профессиональные высоты?
          </p>
          <p className="font-[500] font-Montserrat text-white mb-5">
            Или может хочешь устроиться на новое, более сочное место?
          </p>
          <p className="font-[500] font-Montserrat text-white mb-5">
            А может хочешь увеличить зарплату на актуальной работе?
          </p>
          <p className="text-style">
            С ментором ты сэкономишь время на поиск годной информации. <br />
             Не будешь засорять свою голову бесполезными знаниями. <br />
             Ментор всегда подправит твои шестерёнки в голове и восстановит
            фокус.
          </p>
        </aside>
      </div>
      <a href="#" className="p-5 bg-[#13141A] text-style shadow-basic">
        Записаться на бесплатную ознакомительную консультацию
      </a>
    </section>
  );
}

export default ServicesSection;
