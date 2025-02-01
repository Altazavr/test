import React from "react";
import Header from "../components/Header";
import IntroSection from "../sections/IntroSection";
import SkillsSection from "../sections/SkillsSection";
import ServicesSection from "../sections/ServicesSection";
import ExtraServicesSection from "../sections/ExtraServicesSection";
import FirstSectionBackground from "../assets/images/background2.png";
import owner from "../assets/images/owner-photo.png";
function LandingPage1() {
  return (
    <>
      {/* фон обычного света для header и intro-section  */}
      <div className="bg-[#13141a] relative h-[876px]">
        {/* фон с гармошкой и тенью */}
        <img
          className="absolute right-0 top-0 z-[1]"
          src={FirstSectionBackground}
          alt="#"
        />
        {/* фото владельца сайта */}
        <img className="absolute z-[2] top-0 right-20" src={owner} alt="#" />
        <Header />
        <IntroSection />
      </div>
      <div className="bg-[#13141a]">
        <SkillsSection />
        <ServicesSection />
        <ExtraServicesSection />
      </div>
    </>
  );
}

export default LandingPage1;
