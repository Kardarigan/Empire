import Hero_Bg from "../../assets/Hero.jpg";
import Hero_Video from "../../assets/Hero_Bg.mp4";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      className="h-screen bg-fullcenter relative"
      style={{ backgroundImage: "url(" + Hero_Bg + ")" }}
    >
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
