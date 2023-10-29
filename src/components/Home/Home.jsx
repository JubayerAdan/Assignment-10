import React, { useEffect, useState } from "react";

import Card from "../Shared/Cards/Card";
import Banner from "../Shared/Banner/Banner";

const Home = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/chefs")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div>
      <Banner
        img="https://i.pinimg.com/originals/68/8e/1a/688e1ad62f12aaba7b7ad36bf5025a85.png"
        title="Discover Taste Innovators"
        description="Immerse yourself in a unique culinary experience as you discover a
        collection of world-renowned chefs and their signature dishes.
        Each chef offers a glimpse into the culinary world's brightest
        minds, with their own delectable recipes waiting to be explored."
      ></Banner>
      <h3 className="text-3xl font-bold m-6">Chefs</h3>
      <hr></hr>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-14">
        {cards.map((card, id) => (
          <Card key={id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
