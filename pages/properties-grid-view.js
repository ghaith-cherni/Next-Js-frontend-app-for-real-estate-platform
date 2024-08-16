import "antd/dist/antd.min.css";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import CardsWrapper from "../components/cards-wrapper";
import FooterSection from "../components/footer-section";

const PropertiesGridView = () => {
  return (
    <div className="w-full relative bg-gray-white flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
      <header className="self-stretch h-[98px] bg-gray-white flex flex-row items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] [background:white] z-[2] text-center text-5xl text-primary-500 font-body-large-400 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
        <div className="flex-1 flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center gap-2">
            <img className="w-11 relative h-11" alt="" src="/houseline1.svg" />
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[24px] font-semibold">REIS</div>
              <div className="relative text-sm leading-[16px] font-medium">
                Real State
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end gap-9 text-sm text-primary-900 sm:flex">
            <div className="flex flex-row items-start justify-start gap-[30px] lg:hidden">
              <div className="relative leading-[22px]">HOME</div>
              <div className="relative leading-[22px]">ABOUT US</div>
              <div className="relative leading-[22px]">OUR AGENTS</div>
              <div className="relative leading-[22px] font-semibold">
                PROPERTIES
              </div>
              <div className="relative leading-[22px]">GALLERY</div>
              <div className="relative leading-[22px]">BLOG</div>
              <div className="relative leading-[22px]">CONTACT US</div>
              <div className="relative leading-[22px]">SEARCH</div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-row items-center justify-center lg:flex">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 md:flex"
                alt=""
                src="/notification.svg"
              />
            </button>
          </div>
        </div>
      </header>
      <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url('/category@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="flex flex-col items-center justify-start gap-3">
          <div className="relative leading-[72px] font-semibold">
            Properties
          </div>
          <div className="relative text-base leading-[24px] text-whitesmoke-200 font-body-large-400">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Properties</span>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start pt-16 px-0 pb-2 gap-[95px] text-left text-base text-gray-black font-body-large-400 lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-[60px] md:pr-[60px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
        <div className="w-[272px] flex flex-row items-center justify-start">
          <div className="flex flex-row items-end justify-start gap-4">
            <div className="flex flex-row items-start justify-start gap-2">
              <img className="w-6 relative h-6" alt="" src="/listbullets.svg" />
              <img className="w-6 relative h-6" alt="" src="/squaresfour.svg" />
            </div>
            <div className="relative leading-[24px]">Sort by:</div>
            <Dropdown
              overlay={
                <Menu>
                  {[
                    { value: "Popular properties" },
                    { value: "Latest properties" },
                    { value: "Recommended properties" },
                  ].map((option, index) => (
                    <Menu.Item key={index}>
                      <a onClick={(e) => e.preventDefault()}>
                        {option.value || ""}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu>
              }
              trigger={["hover"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                {`Default Order `}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
          <CardsWrapper />
        </div>
        <div className="flex flex-row items-end justify-center gap-2 text-center text-primary-500">
          <div className="rounded bg-primary-50 flex flex-row items-start justify-start p-2.5">
            <img className="w-6 relative h-6" alt="" src="/arrowleft.svg" />
          </div>
          <div className="rounded-10xs bg-primary-500 flex flex-col items-start justify-start py-2.5 px-[9px] text-gray-white">
            <div className="w-[26px] relative leading-[24px] font-semibold flex items-end justify-center">
              1
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col items-start justify-start py-2.5 px-[9px]">
            <div className="w-[26px] relative leading-[24px] font-semibold flex items-end justify-center">
              2
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col items-start justify-start py-2.5 px-[9px]">
            <div className="w-[26px] relative leading-[24px] font-semibold flex items-end justify-center">
              3
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col items-start justify-start py-2.5 px-[9px]">
            <div className="w-[26px] relative leading-[24px] font-semibold flex items-end justify-center">
              ...
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col items-start justify-start py-2.5 px-[9px]">
            <div className="w-[26px] relative leading-[24px] font-semibold flex items-end justify-center">
              54
            </div>
          </div>
          <div className="rounded bg-primary-500 flex flex-row items-start justify-start p-2.5">
            <img className="w-6 relative h-6" alt="" src="/arrowright.svg" />
          </div>
        </div>
      </div>
      <FooterSection
        socialMediaLogo="/social-media-logo31.svg"
        socialMediaLogo1="/social-media-logo4.svg"
        socialMediaLogo2="/social-media-logo5.svg"
        socialMediaLogo3="/social-media-logo6.svg"
      />
    </div>
  );
};

export default PropertiesGridView;
