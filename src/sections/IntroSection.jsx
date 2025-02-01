import React from "react";
import telegram from "../assets/images/telegram.svg";
import gmail from "../assets/images/gmail.svg";
import classmates from "../assets/images/classmates.svg"
function IntroSection() {
  return (
    <section className="pl-20 h-[calc(876px-150px)] flex flex-col justify-center relative z-[2]">
      <div className="flex flex-col gap-y-10">
        <h1 className="text-style text-[100px] leading-[101.46px] max-w-[594px]">
          Меня зовут Данил
        </h1>
        <p className="text-style text-[15px] leading-[25px]">
          Год работы под началом CTO{" "}
          <a
            href="https://t.me/devopsdir/20"
            className="underline cursor-pointer"
          >
            Пост с историей
          </a>{" "}
          <br />
          Middle DevOps Engineer в 22 года <br />
          Успешно заменторил 2их друзей в DevOps <br />
          Есть сертификат{" "}
          <a
            href="https://www.credly.com/badges/1c615f76-070a-48f4-b8a4-2224bc3b1814/public_url"
            className="underline cursor-pointer"
          >
            CKA: Certified Kubernetes Administrator
          </a>{" "}
          <br />
          Отчасти за меня говорит мое творчество в{" "}
          <a href="https://t.me/devopsdir" className="underline cursor-pointer">
            Телеграм Канале
          </a>
        </p>
        <div className="flex max-w-[584px] justify-between items-center">
          <div className="flex gap-x-3 items-center">
            <img src={telegram} alt="#" />
            <p className="text-style">@DanOtan</p>
          </div>
          <div className="flex gap-x-3 items-center">
            <img src={gmail} alt="#" />
            <p className="text-style">danilalovelinux@proton.me</p>
          </div>
          <div className="flex gap-x-3 items-center">
            <img src={classmates} alt="#" />
            <p className="text-style">Danka32</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
