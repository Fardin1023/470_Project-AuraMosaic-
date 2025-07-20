import { BsChevronLeft} from "react-icons/bs";
import { CustomNextArrowWrapper } from "../../styles/slider";
import PropTypes from "prop-types"; 

const CustomNextArrow = ({ onClick }) => {
  return (
    <CustomNextArrowWrapper
      className="custom-nextarrow"
      onClick={onClick}
    >
        <BsChevronLeft />
    </CustomNextArrowWrapper>
  );
};

export default CustomNextArrow;
CustomNextArrow.propTypes = {
  onClick: PropTypes.func,
};
