import type { MetaArgs } from "react-router";
import Hero from "~/components/Hero";

export function meta(_: MetaArgs) {
  return [
    { title: "New React Router App | Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  return (
    <section>
      <Hero />
    </section>
  );
}
