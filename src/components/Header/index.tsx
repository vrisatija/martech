import React, { FC } from 'react';
import Images from '../../assets';

const Header: FC = () => (
  <div className="flex px-10 py-7 justify-between bg-blue-900 text-white absolute w-full">
    <div className="font-ibm-semi-bold">logo</div>
    <div className="flex items-center cursor-pointer">
      <span className="mr-2">Profile</span>
      <img src={Images.downArrow} className="w-3.5" alt="menu arrow" />
    </div>
  </div>
);

export default Header;
