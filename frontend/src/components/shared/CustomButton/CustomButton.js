import React from 'react';

import { ButtonContainer } from "./CustomButtonStyled";

const CustomButton = ({ text , parentCallBack}) => {
    return (
        <ButtonContainer onClick={parentCallBack}>
            { text }
        </ButtonContainer> 
    );
}
 
export default CustomButton;