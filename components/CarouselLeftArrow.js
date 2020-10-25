import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa, faTimes } from "@fortawesome/free-solid-svg-icons";


export const CarouselLeftArrow = (props) => {
    const { goToPrevSlide } = props;
    return (
        <div className='backArrow' onClick={goToPrevSlide}>

        <i className='fa fa-angle-left fa-3x' aria-hidden='true'></i>
      </div>
    );
  };

  export default CarouselLeftArrow;