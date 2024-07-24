import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/myyqrggq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (response.ok) {
      setName("");
      setEmail("");
      setMessage("");
    } else {
      // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario.
    }
  };

  return (
    <>
      <section id="section4" className="grid place-content-center w-full py-5">
        <h1 className="text-center text-red-400 text-3xl lg:text-5xl font-mono ">
          {t("contact.title")}
        </h1>
        <h2 className="text-slate-500 text-2xl text-center mt-3 px-5">
          {t("contact.subtitle")}
        </h2>
        <form
          className="flex flex-col p-0 lg:p-10 gap-2"
          onSubmit={handleSubmit}
        >
          <label className="text-slate-300 text-xl">
            {t("contact.labels.name")}
          </label>
          <input
            className="text-slate-400 border border-slate-400 focus:outline-none focus:bg-slate-400 focus:text-slate-900 p-2 duration-300"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="text-slate-300 text-xl">
            {t("contact.labels.email")}
          </label>
          <input
            className="text-slate-400 border border-slate-400 focus:outline-none focus:bg-slate-400 focus:text-slate-900 p-2 duration-300"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="text-slate-300 text-xl">
            {t("contact.labels.message")}
          </label>
          <textarea
            className="h-32 resize-none border border-slate-400 focus:outline-none focus:bg-slate-400 focus:text-slate-900 p-2 duration-300"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            className="border border-slate-400 bg-slate-400 p-1 hover:bg-red-400 hover:text-slate-800 duration-300"
            type="submit"
          >
            {t("contact.button")}
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
