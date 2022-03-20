import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    setEmail("");
    setMessage("");
    setName("");
  };

  return (
    <div className="h-screen bg-primary">
      <div className="bg-primary flex items-center">
        <div className="w-1/2 text-white py-40 px-20">
          <h1 className="text-sm sm:text-4xl md:text-6xl  mt-5 font-extrabold">
            Get In Touch
          </h1>
          <p className="pt-3 text-lg font-light text-purple-200">
            Let's talk about everything! 👋
          </p>
        </div>

        <div className="w-1/2 h-fit pl-20 mt-20 bg-primary text-center text-white pr-14">
          <div className="bg-gray-400 rounded-md p-5 text-left">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-5 px-10 py-5"
            >
              <div className="flex flex-col">
                <label htmlFor="name" className="text-xl font-bold text-black ">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className=" bg-slate-600 text-white pl-2 rounded-sm py-1.5"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-xl font-bold text-black "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-600 text-white pl-2 rounded-sm py-1.5"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-xl font-bold text-black "
                >
                  Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here."
                  className="bg-slate-600 text-white pl-2 rounded-sm py-1.5"
                />
              </div>

              <button className="bg-primary bg-bob text-red-200 border-2 w-60 border-primary hover:bg-red-200 hover:text-black py-4 rounded-md">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
