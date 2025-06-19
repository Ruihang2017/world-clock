import React from 'react'
import styled from 'styled-components'

const StyledSecondHand = styled.div`
    position: absolute;
    width: 2px;
    height: 120px;
    background-color: red;
    top: 50%;
    left: 50%;
    transform-origin: bottom center;
    transform: translate(-50%, -100%) rotate(${props => props.angle}deg);
    z-index: 3;
    border-radius: 1px;
    

    &::after {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        background-color: red;
        border: 2px solid #ffffff;
        border-radius: 50%;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%);
    }

`

const SecondHand = (props) => {
    const { timeData } = props
    
    return (
        <StyledSecondHand angle={timeData.seconds_angle}>
        </StyledSecondHand>
    )
}

export default SecondHand 