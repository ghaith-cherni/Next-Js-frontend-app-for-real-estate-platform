import PropertiesCards from "./PropertiesCards";
import PropTypes from "prop-types";

const CardsWrapper = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-row flex-wrap items-start justify-center gap-2 ${className}`}
    >
      <PropertiesCards
        propFlex="unset"
        propMinWidth="unset"
        propWidth="350px"
        propertyImage="/property-image4@2x.png"
        bathtub="/bathtub1.svg"
        ellipse1="/ellipse-1@2x.png"
        shareNetwork="/sharenetwork1.svg"
      />
      <PropertiesCards
        propFlex="unset"
        propMinWidth="unset"
        propWidth="350px"
        propertyImage="/property-image5@2x.png"
        bathtub="/bathtub1.svg"
        ellipse1="/ellipse-1@2x.png"
        shareNetwork="/sharenetwork1.svg"
      />
      <PropertiesCards
        propFlex="unset"
        propMinWidth="unset"
        propWidth="350px"
        propertyImage="/property-image6@2x.png"
        bathtub="/bathtub1.svg"
        ellipse1="/ellipse-1@2x.png"
        shareNetwork="/sharenetwork1.svg"
      />
      <PropertiesCards
        propFlex="unset"
        propMinWidth="unset"
        propWidth="350px"
        propertyImage="/property-image7@2x.png"
        bathtub="/bathtub1.svg"
        ellipse1="/ellipse-1@2x.png"
        shareNetwork="/sharenetwork1.svg"
      />
      <PropertiesCards
        propFlex="unset"
        propMinWidth="unset"
        propWidth="350px"
        propertyImage="/property-image4@2x.png"
        bathtub="/bathtub1.svg"
        ellipse1="/ellipse-1@2x.png"
        shareNetwork="/sharenetwork1.svg"
      />
      <PropertiesCards
        propFlex="unset"
        propMinWidth="unset"
        propWidth="350px"
        propertyImage="/property-image8@2x.png"
        bathtub="/bathtub1.svg"
        ellipse1="/ellipse-11@2x.png"
        shareNetwork="/sharenetwork1.svg"
      />
      <PropertiesCards
        propFlex="unset"
        propMinWidth="unset"
        propWidth="350px"
        propertyImage="/property-image9@2x.png"
        bathtub="/bathtub1.svg"
        ellipse1="/ellipse-11@2x.png"
        shareNetwork="/sharenetwork1.svg"
      />
      <PropertiesCards
        propFlex="unset"
        propMinWidth="unset"
        propWidth="350px"
        propertyImage="/property-image10@2x.png"
        bathtub="/bathtub1.svg"
        ellipse1="/ellipse-11@2x.png"
        shareNetwork="/sharenetwork1.svg"
      />
    </div>
  );
};

CardsWrapper.propTypes = {
  className: PropTypes.string,
};

export default CardsWrapper;
