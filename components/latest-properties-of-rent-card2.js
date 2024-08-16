import PropTypes from "prop-types";

const LatestPropertiesOfRentCard2 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-primary-50 flex flex-row flex-wrap items-start justify-center py-[86px] px-[5px] text-center text-21xl text-primary-800 font-body-large-400 ${className}`}
    >
      <div className="w-[900px] flex flex-col items-center justify-start py-0 px-2.5 box-border gap-10 max-w-[900px]">
        <div className="w-[688px] flex flex-col items-center justify-start gap-6 max-w-[95%] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Contact us
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] rounded-xl bg-gray-white flex flex-row flex-wrap items-center justify-start py-7 px-[30px] gap-x-0 gap-y-[17px] text-left text-5xl text-darkslategray font-poppins">
          <div className="self-stretch w-[820px] flex flex-col items-center justify-start gap-1.5">
            <b className="self-stretch relative leading-[36px]">Enquiry Form</b>
            <div className="self-stretch relative text-lg leading-[30px] font-components-input-text text-slategray">
              Are you looking for details about a certain property? Ask us a
              question using the form below.
            </div>
          </div>
          <div className="self-stretch w-[820px] flex flex-col items-center justify-start gap-2.5 text-base text-darkgray font-components-input-text">
            <div className="self-stretch flex flex-row items-start justify-center gap-2.5 md:flex-col md:gap-2.5 md:items-start md:justify-center">
              <div className="self-stretch flex-1 rounded border-gray1-200 border-[1px] border-solid flex flex-col items-start justify-start py-4 px-3 md:flex-[unset] md:self-stretch">
                <div className="relative tracking-[0.15px] leading-[24px]">
                  First name
                </div>
              </div>
              <div className="self-stretch flex-1 rounded border-gray1-200 border-[1px] border-solid flex flex-col items-start justify-center py-4 px-3 md:flex-[unset] md:self-stretch">
                <div className="relative tracking-[0.15px] leading-[24px]">
                  Last name
                </div>
              </div>
            </div>
            <div className="self-stretch rounded border-gray1-200 border-[1px] border-solid flex flex-col items-start justify-start py-4 px-3">
              <div className="relative tracking-[0.15px] leading-[24px]">
                Email id
              </div>
            </div>
            <div className="self-stretch rounded border-gray1-200 border-[1px] border-solid box-border h-[105px] flex flex-col items-start justify-start p-3">
              <div className="relative tracking-[0.15px] leading-[24px]">
                Comments or questions
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-primary-500 w-[222px] h-[46px] rounded flex flex-col items-center justify-center hover:bg-gray1-100 hover:w-[250px] hover:h-[50px] lg:bg-blueviolet sm:self-stretch sm:w-auto sm:max-w-full">
              <div className="w-[203.1px] relative text-base font-components-input-text text-gray-white text-center inline-block">
                Submit
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

LatestPropertiesOfRentCard2.propTypes = {
  className: PropTypes.string,
};

export default LatestPropertiesOfRentCard2;
