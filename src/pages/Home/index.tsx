import React from 'react';
import Images from '../../assets';
import CategoryTile from '../../components/CategoryTile';
import Header from '../../components/Header';
import { ROUTES } from '../../constants/routes';
import './index.css';

function Home(): JSX.Element {
  return (
    <div className="flex min-h-screen">
      <Header />
      <div
        className="flex justify-center flex-grow w-full bg-no-repeat bg-cover bg-center bg-opacity-80 mt-20"
        style={{
          backgroundImage: `url("${Images.backgroundImg}")`,
        }}
      >
        <div className="flex flex-col justify-center items-center content-container mx-20 my-10 px-10 py-18 bg-white-100 rounded-3xl 1.5xl:flex-row 1.5xl:m-auto laptop:px-24">
          <div className="text-white w-full mb-16 1.5xl:mr-16 1.5xl:mb-0">
            <div className="w-20 h-0.75 from-blue-100 bg-gradient-to-l to-blue-200 mb-4" />
            <div className="font-ibm-semi-bold text-5xl">
              MarTech
              <br />
              Compass
            </div>
            <div className="mt-5">Explore MarTechs for your clients</div>
          </div>
          <div className="flex justify-center flex-col md:flex-row">
            <CategoryTile
              categoryImg={Images.searchImg}
              title={(
                <>
                  SEARCH
                  <br />
                  FOR
                  <br />
                  VENDORS
                </>
              )}
              redirectionRoute={ROUTES.SEARCH}
            />
            <div className="flex flex-row items-center my-6 md:mx-4 md:my-0 md:flex-col">
              <div className="flex-1 border-t md:border-l" />
              <div className="mx-2 text-white">OR</div>
              <div className="flex-1 border-t md:border-l" />
            </div>
            <CategoryTile
              categoryImg={Images.compareImg}
              title={(
                <>
                  COMPARE
                  <br />
                  VENDORS
                </>
              )}
              redirectionRoute={ROUTES.COMPARE}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
