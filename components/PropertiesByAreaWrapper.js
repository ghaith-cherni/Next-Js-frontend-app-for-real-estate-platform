import "antd/dist/antd.min.css";
import { Input } from "antd";
import RentYourHome from "./rent-your-home";
import PropTypes from "prop-types";

const PropertiesByAreaWrapper = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-primary-50 flex flex-col items-center justify-start py-[70px] px-0 text-center text-21xl text-primary-800 font-body-large-400 ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start pt-[75px] px-0 pb-0 box-border gap-[54px] max-w-[95%]">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] box-border gap-6 max-w-[95%]">
          <div className="self-stretch relative leading-[48px] font-semibold">
            {" "}
            Services
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-5xl text-gray-700">
          <div className="shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] rounded bg-gray-white flex flex-col items-start justify-start p-[22px] box-border min-w-[300px] max-w-[340px]">
            <div className="flex flex-col items-start justify-start gap-6">
              <img
                className="w-[78px] relative h-[78px] overflow-hidden shrink-0"
                alt=""
                src="/icon.svg"
              />
              <div className="flex flex-col items-start justify-start gap-6">
                <div className="relative leading-[32px] font-semibold">
                  Sell your home
                </div>
                <div className="w-[268px] relative text-base leading-[24px] text-lightslategray text-left flex items-end">
                  We do a free evaluation to be sure you want to start selling.
                </div>
                <Input.TextArea className="relative" placeholder="Read more" />
              </div>
            </div>
          </div>
          <RentYourHome icon="/icon1.svg" rentYourHome="Rent your home" />
          <RentYourHome
            propWidth="unset"
            icon="/icon2@2x.png"
            rentYourHome="Buy a home"
          />
          <RentYourHome
            propWidth="312px"
            icon="/icon3.svg"
            rentYourHome="Free marketing"
          />
        </div>
      </div>
    </div>
  );
};

PropertiesByAreaWrapper.propTypes = {
  className: PropTypes.string,
};

export default PropertiesByAreaWrapper;
