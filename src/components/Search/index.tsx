import React, { useState } from 'react';
// import Header from '../../components/Header';
import SearchField from '../SearchField';
import data1 from '../../assets/Data1.json';
import data2 from '../../assets/Data2.json';
import Images from '../../assets';
import './index.css';
import List from '../List';

function Search(): JSX.Element {
  const [broadCaseButtonVisibility, setBroadCaseButtonVisibility] = useState(true);
  const [detailCaseButtonVisibility, setDetailCaseButtonVisibility] = useState(true);
  const [componentButtonVisibility, setComponentButtonVisibility] = useState(true);
  const [vendorButtonVisibility, setVendorButtonVisibility] = useState(true);
  const [inputText, setInputText] = useState('');
  const changeVisibility = (selectedButton:string) => {
    setInputText('');
    if (selectedButton === 'Broad Use Case') {
      setBroadCaseButtonVisibility(false);
      setDetailCaseButtonVisibility(true);
      setComponentButtonVisibility(true);
      setVendorButtonVisibility(true);
    } else if (selectedButton === 'Detailed Use Case') {
      setBroadCaseButtonVisibility(true);
      setDetailCaseButtonVisibility(false);
      setComponentButtonVisibility(true);
      setVendorButtonVisibility(true);
    } else if (selectedButton === 'Component') {
      setBroadCaseButtonVisibility(true);
      setDetailCaseButtonVisibility(true);
      setComponentButtonVisibility(false);
      setVendorButtonVisibility(true);
    } else if (selectedButton === 'Vendor Name') {
      setBroadCaseButtonVisibility(true);
      setDetailCaseButtonVisibility(true);
      setComponentButtonVisibility(true);
      setVendorButtonVisibility(false);
    }
  };
  return (

    <div className="flex min-h-screen">
      {/* <Header /> */}
      {/* <div
        className="flex  flex-grow w-full bg-no-repeat bg-cover bg-center bg-opacity-80 mt-20"
        style={{
          backgroundImage: `url("${Images.backgroundImg}")`,
        }}
      > */}
      <div className="flex-col">
        <div>
          <SearchField
            data={data1}
            inputText={inputText}
            setInputText={setInputText}
            visibility={broadCaseButtonVisibility}
            selectedButton="Broad Use Case"
            changeVisibility={changeVisibility}
          />
        </div>
        <div>
          <SearchField
            data={data2}
            inputText={inputText}
            setInputText={setInputText}
            visibility={detailCaseButtonVisibility}
            selectedButton="Detailed Use Case"
            changeVisibility={changeVisibility}
          />
        </div>
        <div>
          <SearchField
            data={data1}
            inputText={inputText}
            setInputText={setInputText}
            visibility={componentButtonVisibility}
            selectedButton="Component"
            changeVisibility={changeVisibility}
          />
        </div>
        <div>
          <SearchField
            data={data2}
            inputText={inputText}
            setInputText={setInputText}
            visibility={vendorButtonVisibility}
            selectedButton="Vendor Name"
            changeVisibility={changeVisibility}
          />
        </div>
        <div className="w-32 h-0.25 from-blue-100 bg-gradient-to-l to-blue-200 ml-24 mt-6" />
        <div className="relative block mt-6 ">
          <button type="button" className="text-white text-sm w-85 text-left font-poppins-semi-bold">
            Advanced search
          </button>
          <img src={Images.dropdown} className="absolute top-1 right-0" alt="down arrow" />
        </div>
        <button type="button" disabled className="text-base text-white font-poppins-semi-bold h-14 w-62.24 object-fill border-gray-250 border bg-gray-350  pl-10 rounded-md mt-60 ml-9">
          <img src={Images.applyAndSearch} alt="apply and search" />
        </button>
      </div>

    </div>
  // </div>
  );
}
export default Search;
