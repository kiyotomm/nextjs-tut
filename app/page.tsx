import Image from "next/image";
import Header from "./components/Header";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <>
      <section className="flex justify-center items-center gap-5 h-[70vh]">
        <h1>Hello</h1>
        <Counter />
      </section>
    </>
  );
}
