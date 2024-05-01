import React from "react";

const Half = ({ thing, reverse = false }) => {
  return (
    <section
      className={`padding-x py-10 flex md:flex-row ${
        reverse ? "flex-col-reverse" : "flex-col"
      }`}
    >
      <div className="md:w-1/2 flex-fullcenter">
        <div dir="rtl">
          <h1 className="title font-bold">{thing.title}</h1>
          <p className="max-md:text-sm mt-5">{thing.describe}</p>
        </div>
      </div>
      <div className="md:w-1/2">
        <div className="padding">
          {thing.cover.endsWith(".mp4") || thing.cover.endsWith(".webm") ? (
            <video autoPlay muted loop className="bg-fullobject w-full">
              <source
                src={thing.cover}
                type={`video/${thing.cover.split(".").pop()}`}
              />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={thing.cover}
              alt={thing.title}
              className="w-full bg-fullobject"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Half;
