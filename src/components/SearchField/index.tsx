import React, { useState, FC } from 'react';
import List from '../List';
// import './Search.css';
import Images from '../../assets';

interface IProps {
  data:{ 'text': string, 'id': number }[];
  inputText:string
  setInputText:(args: string) => void;
  visibility:boolean;
  selectedButton:string;
  changeVisibility:(args:string)=>void;
}
export const Search: FC<IProps> = ({
  data, inputText, setInputText, visibility, selectedButton, changeVisibility,
}) => {
  const inputHandler = (event: React.ChangeEvent<any>): void => {
    const lowerCase = event.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div>
      <div className="mt-4">
        {visibility
          ? (
            <div className="relative block">
              <button type="button" onClick={() => changeVisibility(selectedButton)} className="w-85 h-14.5 font-poppins-regular text-base text-white bg-white-100  border-gray-150 border-0.2 rounded-3xl content-container text-left pl-5">{selectedButton}</button>
              <img src={Images.downArrowIcon} className="min-h-3.5 min-w-1.5 absolute top-6 right-6" alt="down arrow" />
            </div>
          )
          : (
            <div>
              <div className="relative block">
                <input
                  onChange={inputHandler}
                  className="w-85  h-14.5 bg-white border-gray-150 border rounded-3xl content-container text-left pl-5"
                />
                <img src={Images.leftArrowIcon} className="absolute min-h-3.5 min-w-1.5 top-6  right-6" alt="left arrow" />
              </div>
              <List input={inputText} data={data} />
            </div>

          )}

      </div>
    </div>
  );
};
export default Search;
