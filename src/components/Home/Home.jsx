import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Card from "../Shared/Cards/Card";

const Home = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/chefs")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
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
