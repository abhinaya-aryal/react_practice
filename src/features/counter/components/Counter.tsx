import { useState, useEffect } from "react";

export default function TCounter() {
  const [count, setCount] = useState<string>("Click!");

  function incrementCount() {
    if (count === "Click!") {
      setCount("1");
    } else {
      setCount((prev) => (Number.parseInt(prev) + 1).toString());
    }
  }

  useEffect(() => {
    document.title = `Home | Counter ${count}`;
  });

  return (
    <div className="text-2xl bg-blue-100 text-red-800 h-full flex items-center justify-center text-center ">
      <div>
        <h1 className="text-4xl font-bold">Hello there!</h1>
        <p className="font-mono">Bun, Vite, and TailwindCSS</p>
        <button
          className="bg-blue-800 text-white py-1 px-4 w-24 my-4 rounded-md"
          onClick={incrementCount}
        >
          {count}
        </button>
      </div>
    </div>
  );
}
