import React from 'react'
import styled from 'styled-components'

const StyledMinuteHand = styled.div`
    position: absolute;
    width: 4px;
    height: 100px;
    background-color: ${({ light }) => light ? '#555' : '#eee'};
    top: 50%;
    left: 50%;
    transform-origin: bottom center;
    transform: translate(-50%, -100%) rotate(${props => props.angle}deg);
    z-index: 2;
    border-radius: 2px;
`

const MinuteHand = (props) => {
    const { timeData, light } = props
    
    return (
        <StyledMinuteHand angle={timeData.minutes_angle} light={light}>
        </StyledMinuteHand>
    )
}

export default MinuteHand 