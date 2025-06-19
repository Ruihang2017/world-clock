import React, { useCallback } from 'react'
import styled from 'styled-components'
import SecondHand from './SecondHand'
import MinuteHand from './MinuteHand'
import HourHand from './HourHand'
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const StyledClockBoard = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    border: 10px solid ${({ light }) => light ? 'white' : 'black'};
    background-color: ${({ light }) => light ? '#f0f0f0' : '#2a2a2a'};
    position: relative;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    
    /* Background image layer */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(${props => props.clockImage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        z-index: 0;
    }
    
    /* Mask overlay layer */
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${({ light }) => light ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'};
        z-index: 1;
    }
`

const ClockOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.clockOverlay});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 2;
    pointer-events: none;
`

const ParticleBackground = ({ light, city }) => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particleConfig = {
        particles: {
            number: { value: light ? 50 : 100 },
            color: { value: light ? "#4d528d" : "#ffd700" },
            shape: { type: "circle" },
            opacity: {
                value: light ? 0.6 : 0.8,
                random: true,
                animation: { enable: true, speed: 1 }
            },
            size: {
                value: { min: 1, max: 4 },
                animation: { enable: true, speed: 2 }
            },
            move: {
                enable: true,
                speed: light ? 0.8 : 1.2,
                direction: "top",
                random: true,
                straight: false,
                outModes: { default: "out" }
            },
            shadow: {
                enable: true,
                color: light ? "#4d528d" : "#ffd700",
                blur: 8
            }
        },
        style: {
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            zIndex: 1,
            filter: light ? "drop-shadow(0 0 8px #4d528d)" : "drop-shadow(0 0 10px #ffd700)"
        }
    };

    return (
        <Particles
            id={`particles-${city.toLowerCase().replace(' ', '-')}`}
            init={particlesInit}
            options={particleConfig}
        />
    );
};

const ClockBoard = (props) => {
    const {light, timeData, children, clockImage, clockOverlay, city} = props
    return (
        <StyledClockBoard light={light} clockImage={clockImage}>
            <ClockOverlay clockOverlay={clockOverlay} />
            <HourHand timeData={timeData} light={light} />
            <MinuteHand timeData={timeData} light={light} />
            <SecondHand timeData={timeData} />
            <ParticleBackground light={light} city={city} />
            {children}  
        </StyledClockBoard>
    )  
}

export default ClockBoard;