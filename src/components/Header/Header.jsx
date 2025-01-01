import React from "react";


const Header = ({sectionOne, sectionTwo, sectionOneWidth, sectionTwoWidth}) => {
  return (
    <section className="flex flex-col space-y-4 md:flex-row md:justify-between md:space-x-4 md:space-y-0 md:items-center">
      {/* section one*/}
      <div className={`w-full ${sectionOneWidth ? sectionOneWidth : 'md:w-1/2'}`}>
        {sectionOne}
      </div>
      {/* section two */}
      <div className={`w-full ${sectionTwoWidth ? sectionTwoWidth : 'md:w-1/2'}`}>
      {sectionTwo}
      </div>
    </section>
  );
};

export default Header;
