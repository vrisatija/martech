import React from 'react';
import Header from '../../components/Header';
import Images from '../../assets';
import SearchPanel from '../../components/Search';

function Search(): JSX.Element {
  return (
    <div className="flex h-screen">
      <div className="flex h-screen">
        <Header />
        <div
          style={{
            backgroundImage: `url("${Images.backgroundImg}")`,
          }}
          className="flex flex-grow w-full bg-no-repeat bg-cover bg-center mt-20 overflow-auto"
        >
          <div className="ml-10">
            {/* <SearchPanel /> */}
          </div>
          <div className="border-l border-gray-500 mt-12 mb-5 ml-16 flex items-center">
            <div className="px-28">
              <div className="text-white  font-ibm-regular text-6xl ">Search</div>
              <div className="text-white font-ibm-semi-bold text-8xl mt-2">Vendors</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
