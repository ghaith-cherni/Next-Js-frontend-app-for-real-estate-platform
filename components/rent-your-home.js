import { useMemo } from "react";
import PropTypes from "prop-types";

const RentYourHome = ({ className = "", propWidth, icon, rentYourHome }) => {
  const rentYourHomeStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`w-[312px] shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] rounded bg-gray-white flex flex-col items-start justify-start py-[22px] px-4 box-border min-w-[300px] max-w-[340px] text-left text-base text-gray-700 font-body-large-400 ${className}`}
      style={rentYourHomeStyle}
    >
      <div className="flex flex-col items-start justify-start gap-6">
        <img
          className="w-[78px] relative h-[78px] overflow-hidden shrink-0"
          alt=""
          src={icon}
        />
        <div className="flex flex-col items-start justify-start gap-6">
          <div className="relative text-5xl leading-[32px] font-semibold text-center">
            {rentYourHome}
          </div>
          <div className="w-[268px] relative leading-[24px] text-lightslategray flex items-end">
            We do a free evaluation to be sure you want to start selling.
          </div>
          <div className="relative leading-[24px] text-primary-500">
            Read more
          </div>
        </div>
      </div>
    </div>
  );
};

RentYourHome.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  rentYourHome: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default RentYourHome;
