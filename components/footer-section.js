import PropTypes from "prop-types";

const FooterSection = ({
  className = "",
  socialMediaLogo,
  socialMediaLogo1,
  socialMediaLogo2,
  socialMediaLogo3,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start p-[50px] md:self-stretch md:w-auto md:flex-row md:gap-0 sm:flex-col ${className}`}
    >
      <footer className="flex-1 flex flex-row items-start justify-between text-left text-5xl text-gray-black font-body-regular-400 md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px] sm:flex-[unset] sm:self-stretch">
        <div className="w-[312px] h-[300px] flex flex-col items-start justify-start gap-5 text-center text-primary-500 font-body-large-400">
          <div className="flex flex-row items-center justify-center gap-2">
            <img className="w-11 relative h-11" alt="" src="/houseline1.svg" />
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[24px] font-semibold">REIS</div>
              <div className="relative text-sm leading-[16px] font-medium">
                Real State
              </div>
            </div>
          </div>
          <div className="self-stretch h-[168px] flex flex-col items-start justify-start gap-[13px] text-left text-base text-gray-500 font-body-regular-400">
            <h3 className="m-0 relative text-5xl leading-[32px] font-semibold font-[inherit] text-gray-black">
              Contact Us
            </h3>
            <div className="relative leading-[24px]">Call : +123 400 123</div>
            <div className="w-[312px] relative leading-[24px] flex items-end">
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </div>
            <div className="relative leading-[24px] text-gray-700">
              Email: example@mail.com
            </div>
          </div>
          <div className="w-[304px] flex flex-row items-center justify-between">
            <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
              <img
                className="w-5 relative h-5 object-cover"
                alt=""
                src={socialMediaLogo}
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
              <img
                className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                alt=""
                src={socialMediaLogo1}
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
              <img
                className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                alt=""
                src={socialMediaLogo2}
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
              <img
                className="w-5 relative h-5 overflow-hidden shrink-0 object-cover"
                alt=""
                src={socialMediaLogo3}
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
              <img
                className="w-5 relative h-5 overflow-hidden shrink-0"
                alt=""
                src="/social-media-logo3.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-8">
          <div className="relative leading-[32px] font-semibold">Features</div>
          <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-4 text-base text-gray-500">
            <div className="relative leading-[24px]">Home</div>
            <div className="relative leading-[24px]">Become a Host</div>
            <div className="relative leading-[24px]">Pricing</div>
            <div className="relative leading-[24px]">Blog</div>
            <div className="relative leading-[24px]">Contact</div>
          </div>
        </div>
        <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-8">
          <div className="relative leading-[32px] font-semibold">Company</div>
          <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-4 text-base text-gray-500">
            <div className="relative leading-[24px]">About Us</div>
            <div className="relative leading-[24px]">Press</div>
            <div className="relative leading-[24px]">Contact</div>
            <div className="relative leading-[24px]">Careers</div>
            <div className="relative leading-[24px]">Blog</div>
          </div>
        </div>
        <div className="w-[203px] h-[168px] flex flex-col items-start justify-start gap-8">
          <div className="relative leading-[32px] font-semibold">
            Team and policies
          </div>
          <div className="self-stretch h-[104px] flex flex-col items-start justify-start gap-4 text-base text-gray-500">
            <div className="relative leading-[24px]">Terms of servies</div>
            <div className="relative leading-[24px]">Privacy Policy</div>
            <div className="relative leading-[24px]">Security</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

FooterSection.propTypes = {
  className: PropTypes.string,
  socialMediaLogo: PropTypes.string,
  socialMediaLogo1: PropTypes.string,
  socialMediaLogo2: PropTypes.string,
  socialMediaLogo3: PropTypes.string,
};

export default FooterSection;
