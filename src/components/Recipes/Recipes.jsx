import React, { useEffect, useState } from "react";
import RecipesCard from "../Shared/RecipesCard/RecipesCard";
import { useLoaderData } from "react-router-dom";

const Recipes = () => {
  const recipes = useLoaderData();
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://t3.ftcdn.net/jpg/03/35/51/06/360_F_335510693_HY7mLg3ARdLccKoXk3m66NLDpJRJh51p.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Unlock the Secrets of Great Dishes
            </h1>
            <p className="mb-5">
              Explore our diverse recipe collection, from savory mains to sweet
              desserts. Whether you're a seasoned chef or a beginner, our
              recipes will inspire your culinary journey. Get ready to create
              culinary masterpieces in your kitchen!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className=" m-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-14 mb-60 ">
          {recipes.map((recipe) => (
            <RecipesCard recipe={recipe}></RecipesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
