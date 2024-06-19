import React from "react";


const Services = () => {
  const services = [
    {
      id: 1,
      title: "Graphics Designing",
      description:
        "We provide a various professional graphics designing from flyers, logos, promo videos, and all other marketing tools",
      image: <SiAdobephotoshop />,
    },
    {
      id: 2,
      title: "Database Management",
      description:
        "We take pride in delivering excellent solutions using popular database management tools, such as MySQL, PostgreSQL, and MongoDB",
      image: <BsDatabaseFillLock />,
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "We develop modern websites fully responsive using morden and secure technologies.",
      image: <FaLaptopCode />,
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto text-center">
      <div className="text-center my-8">
        <h1 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Clients
        </h1>
        <p className="text-neutralGrey mb-8">
          We have over 100+ country wide verified clients.
        </p>
        {/* commpany logos */}

        <div className="flex flex-row justify-between items-center gap-2">
          <img src="/src/assets/logoo.png" alt="" className="w-14 h-14" />
          <img src="/src/assets/logoo.png" alt="" className="w-14 h-14" />
          <img src="/src/assets/logoo.png" alt="" className="w-14 h-14" />
          <img src="/src/assets/logoo.png" alt="" className="w-14 h-14" />
          <img src="/src/assets/logoo.png" alt="" className="w-14 h-14" />
        </div>
      </div>

      {/* Services profile */}
      <div>
        <h1 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Services
        </h1>
        <p className="text-neutralGrey mb-8">
          From graphics designing, frontend development, database management and
          backend development.
        </p>
      </div>
      {/* cards */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 "
          >
            <div className="text-center justify-center items-center">
              <div className="text-5xl text-center text-brandPrimary mx-auto mb-2">
                {service.image}
              </div>
              <h4 className="text-3xl font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-lg text-neutralDGrey">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
