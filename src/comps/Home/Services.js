import React from "react";
import { homeServices } from "../../Constants";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="padding">
      <h2 className="text-center title">خدمات ما</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-12" dir="rtl">
        {homeServices.map((item, index) => {
          return (
            <div className="flex-fullcenter">
              <Link
                to="/"
                className="size-full border border-slate-100 p-5 text-center hover:bg-sky-500"
              >
                <h3>{item.title}</h3>
                <p className="text-sm">{item.describe}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
