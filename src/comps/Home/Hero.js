import Hero_Bg from "../../assets/Hero.jpg";
import Hero_Video from "../../assets/Hero_Bg.mp4";
import { TypeAnimation } from "react-type-animation";
<<<<<<< HEAD
=======
import { Button } from "../Portal";
>>>>>>> e75a9612 (Hero is Done)

const Hero = () => {
  return (
    <section
      className="h-screen bg-fullcenter relative"
      style={{ backgroundImage: "url(" + Hero_Bg + ")" }}
    >
<<<<<<< HEAD
      <div className="w-full text-center absolute">
        <div className="text-7xl text-slate-50 mx-auto padding max-w-[800px]">
          <h1>امپــراتـــوری</h1>
          <h1 className="text-red-600">کــــــــــــــــــد</h1>
          <p className="text-sm">
            <TypeAnimation
              sequence={[
                "امپراتوری کد ",
                3000,
                "امپراتوری کد ",
                3000,
                "امپراتوری کد  Pigs",
                3000,
                "امپراتوری کد ",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
=======
      <div className="w-full text-center absolute z-10 mt-24">
        <div className="text-7xl text-slate-50 mx-auto padding max-w-[800px]">
          <h1>امپــراتـــوری</h1>
          <h1 className="text-red-600">کــــــــــــــــــد</h1>
          <p className="text-base max-sm:text-sm" dir="rtl">
            <TypeAnimation
              sequence={[
                "ما برات بهترین سایت رو میسازیم",
                2500,
                "ما بهت یاد میدیم چطوری برنامه نویسی کنی",
                3000,
                "ما زندگیت رو بهتر میکنیم",
                2000,
                "ما مسیر موفقیت در این زمینه رو بهت نشون میدیم",
                4000,
                "اگر به امپراتوری بپیوندی!",
                5000,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />
          </p>
          <div className="flex justify-center mt-10">
            <Button label="ارتباط با امپراطوری" to="/" />
          </div>
>>>>>>> e75a9612 (Hero is Done)
        </div>
      </div>
      <video autoPlay muted loop className="bg-fullobject w-full h-screen">
        <source
          src={Hero_Video}
          type={`video/${Hero_Video.split(".").pop()}`}
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Hero;
