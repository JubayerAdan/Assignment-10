import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const RecipesCard = ({ recipe }) => {
  return (
    <div className="h-[400px] p-6 space-y-4">
      <div className="prose max-w-xl">
        <div key={recipe.recipeName}>
          <div className="border rounded-lg shadow-md p-4 h-full">
            <img
              src={recipe.image}
              alt={recipe.recipeName}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-2xl font-semibold">{recipe.recipeName}</h2>
            <ul className="list-disc list-inside space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p className="mb-4">
              <strong>
                Rating:{" "}
                <Rating
                  placeholderRating={recipe.rating}
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                />
              </strong>{" "}
              {recipe.rating}
            </p>
            <p>{recipe.cookingMethod.slice(0, 200)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;
