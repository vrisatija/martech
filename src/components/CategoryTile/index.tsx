import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Images from '../../assets';

interface IProps {
  categoryImg: string;
  title: JSX.Element;
  redirectionRoute: string;
}

const CategoryTile: FC<IProps> = ({ categoryImg, title, redirectionRoute }) => {
  const navigate = useNavigate();
  return (
    <button
      className="rounded-3xl w-76.25 h-91.75 transform transition duration-500 hover:scale-105"
      style={{
        backgroundImage: `url("${Images.cardBackground}")`,
      }}
      data-testid=""
      type="button"
      onClick={() => navigate(redirectionRoute)}
    >
      <div className="px-10 pt-10">
        <img src={categoryImg} alt="search artwork" />
        <div className="flex flex-col items-center mt-4 text-white font-poppins-semi-bold text-center">
          {title}
        </div>
      </div>
    </button>
  );
};

export default CategoryTile;
