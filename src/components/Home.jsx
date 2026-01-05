import { useEffect, useState } from "react";

export default function Home() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    const msg =
      hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
    setGreeting(`${msg} | ${new Date().toDateString()}`);
  }, []);

  return (
    <section id="home" className="home">
      <h1>Heavenly oven Bakery</h1>
      <p>{greeting}</p>
      <h2 className="tagline">
        Where every bite is baked with love, warmth, and unforgettable flavor
      </h2>
      <p className="intro-text">
       At Heavenly Oven Bakery, we combine traditional baking techniques with modern creativity to deliver 
    cakes, pastries, and breads that turn ordinary moments into sweet memories. 
    Whether you're celebrating a milestone or simply craving something delicious, 
    our ovens are always warm and waiting for you.
      </p>
    </section>
  );
}
