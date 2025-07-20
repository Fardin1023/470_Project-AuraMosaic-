import { BsChevronRight } from "react-icons/bs";
import { CustomPreviousArrowWrapper } from "../../styles/slider";
import  PropTypes from "prop-types";

const CustomPreviousArrow = ({ onClick }) => {
  return (
    <CustomPreviousArrowWrapper
      className="custom-prevarrow"
      onClick={onClick}
    >
        <BsChevronRight />
    </CustomPreviousArrowWrapper>
  );
};

export default CustomPreviousArrow;
CustomPreviousArrow.propTypes = {
  onClick: PropTypes.func,
};
