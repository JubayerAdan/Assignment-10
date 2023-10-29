import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import RecipesCard from "../Shared/RecipesCard/RecipesCard";

const Chef = () => {
  const { id, img, Name, bio } = useLoaderData();
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/recipe")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  console.log(useLoaderData());
  return (
    <div>
      <Banner img={img} title={Name} description={bio}></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-14 mb-60 ">
        {recipes.map((recipe) => (
          <RecipesCard recipe={recipe}></RecipesCard>
        ))}
      </div>
    </div>
  );
};

export default Chef;
