import { translations } from "./Transulations.js";

const Services = ({ language }) => {
  const t = translations[language];
  return (
      <section className="p-10 ">
        <h2 className="text-center mb-8">{t.servicesTitle}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-6">
        {t?.services.map((service, index) => (
          <div
            key={index}
            className="border rounded -md overflow-hidden p-5 border-black-900"
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
