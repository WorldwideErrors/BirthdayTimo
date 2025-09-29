"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [answer, setAnswer] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const router = useRouter();

  const correctAnswer = "Speechless";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
    setMessage(""); // reset message when typing
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      router.push("/success"); // Redirect on correct answer
    } else {
      setMessage("Wrong answer. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-400 via-black to-orange-500 font-sans">
      {/* Banner */}
      <section
        className="relative h-64 md:h-96 flex items-center justify-center text-white shadow-xl/30"
        style={{
          backgroundImage: "url('/banner-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40" ></div>
      </section>

      {/* Content Sections */}
      <section className="container mx-auto grid md:grid-cols-3 gap-6 mt-6">
        {/* Puzzle Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden md:col-span-2 flex items-center justify-center min-h-[24rem]">
          <img
            src="/puzzle.png"
            alt="Word Puzzle"
            className="w-full h-full object-cover p-12"
          />
        </div>
      
        {/* Answer Section */}
        <div className="bg-gradient-to-br from-black via-gray-800 to-black rounded-2xl shadow-2xl p-10 flex flex-col justify-center text-white min-h-[24rem] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/sparkles.png')] opacity-15 mix-blend-screen"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center tracking-wide font-cinzel">
              Dance... or Die.
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Enter your answer"
                value={answer}
                onChange={handleChange}
                className="border border-gray-600 font-playfair rounded-lg px-4 py-3 text-white text-lg font-bold focus:outline-none focus:ring-2 focus:ring-white text-center"
              />
              <button
                type="submit"
                className="bg-gray-600 cursor-pointer sfont-playfair hover:bg-gray-700 transition text-white font-medium px-6 py-3 rounded-lg shadow"
              >
                Submit
              </button>
            </form>
            {message && (
              <p
                className={`mt-6 text-center text-lg font-medium text-yellow-400`}
              >
                {message}
              </p>
            )}
          </div>
        </div>
      </section>

      <footer>
        <div className="text-center py-6 text-black font-cinzel">
          &copy; 2025 Jeffrey van Tillo
        </div>
      </footer>
    </div>
  );
}
