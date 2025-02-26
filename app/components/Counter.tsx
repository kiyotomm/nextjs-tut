"use client";

import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

const Counter = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [count, setCount] = useState(0);

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <div>
      <button
        className="bg-white text-black p-3"
        onClick={() => setCount((prev) => prev + 1)}
      >
        add 1
      </button>
      {count}
    </div>
  );
};

export default Counter;
