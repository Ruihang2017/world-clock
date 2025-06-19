import React from 'react'
import styled from 'styled-components'

const StyledHourHand = styled.div`
    position: absolute;
    width: 6px;
    height: 70px;
    background-color: ${({ light }) => light ? '#333' : '#fff'};
    top: 50%;
    left: 50%;
    transform-origin: bottom center;
    transform: translate(-50%, -100%) rotate(${props => props.angle}deg);
    z-index: 1;
    border-radius: 3px;
`

const HourHand = (props) => {
    const { timeData, light } = props
    
    return (
        <StyledHourHand angle={timeData.hours_angle} light={light}>
        </StyledHourHand>
    )
}

export default HourHand 