import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Card = ({ card }) => {
  const { id, img, Name, experience, Recipes, Likes } = card;
  const navigate = useNavigate();
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="max-h-96" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="whitespace-nowrap text-2xl font-semibold">
          Name: {Name}
        </h2>
        <h3 className=" text-2xl font-normal">Exeperience: {experience} </h3>
        <h3 className=" text-2xl font-normal">Number Of Recipes: {Recipes}</h3>
        <div className="flex">
          <FaThumbsUp className="me-2 text-2xl"></FaThumbsUp>
          <p className="font-semibold text-lg">{Likes}</p>
        </div>

        <div className="card-actions justify-end">
          <button
            onClick={() => navigate(`/chef/${id}`)}
            className="btn btn-primary"
          >
            View Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
