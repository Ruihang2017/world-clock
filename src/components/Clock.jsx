import styled from 'styled-components'
import City from './City'
import Time from './Time'
import React from 'react'
import clockOverlayDark from '../../public/bg-image/clock_black.png'
import clockOverlayLight from '../../public/bg-image/clock_white.png'
import clockBgDark3 from '../../public/bg-image/bg-dark-3.jpg'
import clockBgLight5 from '../../public/bg-image/bg-light-5.webp'

import ClockBoard from './ClockBoard'
import useClockStore from '../store/useClockStore'

const StyledClock = styled.div`
  width: ${props => props.size};
  aspect-ratio: 1/1;
  background-color: ${({ light, theme }) => light ? theme.colorBackground.light : theme.colorBackground.dark};
  color: ${({ light, theme }) => light ? theme.color.light : theme.color.dark};

  border-radius: 2rem;
  padding: 2rem;
  margin: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }
  
  &:hover .delete-button {
    opacity: 1;
  }
`

const ClockContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DeleteButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #ff4757;
  color: white;
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  &:hover {
    background-color: #ff3742;
    transform: scale(1.1);
  }

  &.delete-button {
    opacity: 0;
  }
`;

const ThemeToggleArea = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  height: 4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Clock = ({ cityData, light, onToggleTheme, onDelete, showDelete = true }) => {
    const size = `40rem`;
    
    // Zustand store hooks
    const updateClockTime = useClockStore((state) => state.updateClockTime);
    const getClockTime = useClockStore((state) => state.getClockTime);

    const [timeData, setTimeData] = React.useState(
        getClockTime(cityData.name) || {
            dateTime: new Date(),
            year: 0,
            month: 0,
            day: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            seconds_angle: 0,
            minutes_angle: 0,
            hours_angle: 0,
            ampm: 'AM'
        }
    );

    const calculateTime = () => {
        const currentTime = new Date();
        const offset = cityData.timezone * 60 * 60 * 1000;
        const timeWithOffset = new Date(currentTime.getTime() + offset);
        const hours = timeWithOffset.getUTCHours();
        const minutes = timeWithOffset.getUTCMinutes();  
        const seconds = timeWithOffset.getUTCSeconds();
        const unitDeg = 360/60;
        const unitMin = 360/60;
        const unitHour = 360/12;

        const newTimeData = {
            dateTime: timeWithOffset,
            year: timeWithOffset.getUTCFullYear(),
            month: timeWithOffset.getUTCMonth() + 1,
            day: timeWithOffset.getUTCDate(),
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            seconds_angle: seconds * unitDeg,
            minutes_angle: minutes * unitMin + seconds * unitMin / 60,
            hours_angle: hours * unitHour + minutes * unitHour / 12,
            ampm: hours >= 12 ? 'PM' : 'AM'
        };

        setTimeData(newTimeData);
        updateClockTime(cityData.name, newTimeData);
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            calculateTime();
        }, 200);
        return () => clearInterval(interval);
    }, [cityData.timezone]);

    const handleDelete = (e) => {
        e.stopPropagation();
        if (window.confirm(`Are you sure you want to remove ${cityData.name} from your world clocks?`)) {
            onDelete();
        }
    };

    return (
        <StyledClock light={light} size={size}>
            {showDelete && (
                <DeleteButton 
                    className="delete-button"
                    onClick={handleDelete}
                    title={`Remove ${cityData.name}`}
                >
                    ×
                </DeleteButton>
            )}
            
            <City light={light}>{cityData.name}</City>
            
            <ClockContainer>
                <ClockBoard 
                    light={light} 
                    timeData={timeData}
                    city={cityData.name}
                    clockImage={light ? clockBgLight5 : clockBgDark3}
                    clockOverlay={light ? clockOverlayLight : clockOverlayDark}
                />
            </ClockContainer>

            <Time light={light}>{timeData.dateTime.toLocaleString()}</Time>
            
            <ThemeToggleArea onClick={onToggleTheme} title="Toggle theme" />
        </StyledClock>
    );
};

export default Clock;