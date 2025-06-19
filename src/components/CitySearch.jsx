import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { CITIES_DATA } from '../data/cities';
import useClockStore from '../store/useClockStore';

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 2rem auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1.2rem 1.6rem;
  font-size: 1.6rem;
  font-weight: normal;
  font-family: "Audiowide", monospace;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.secondary};
    box-shadow: 0 0 0 3px rgba(105, 192, 255, 0.1);
  }

  &::placeholder {
    color: #666;
    font-weight: normal;
    font-family: "Audiowide", monospace;
  }
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 2px solid ${({ theme }) => theme.primary};
  border-top: none;
  border-radius: 0 0 1rem 1rem;
  max-height: 300px;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.div`
  padding: 1.2rem 1.6rem;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary}20;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const CityName = styled.div`
  font-weight: normal;
  color: #333;
  font-size: 1.4rem;
  font-family: "Audiowide", monospace;
`;

const CityDetails = styled.div`
  font-size: 1.2rem;
  font-weight: normal;
  color: #666;
  margin-top: 0.2rem;
  font-family: "Audiowide", monospace;
`;

const AddButton = styled.button`
  margin-left: 1rem;
  padding: 1.2rem 2rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary});
  color: white;
  border: none;
  border-radius: 1rem;
  font-size: 1.4rem;
  font-weight: normal;
  font-family: "Audiowide", monospace;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const SearchRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
`;

const CitySearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);

  // Zustand store hooks
  const existingCities = useClockStore((state) => state.userCities);
  const addCity = useClockStore((state) => state.addCity);

  // Filter cities based on search term
  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = CITIES_DATA.filter(city => {
        const searchLower = searchTerm.toLowerCase();
        return (
          city.name.toLowerCase().includes(searchLower) ||
          city.country.toLowerCase().includes(searchLower)
        );
      }).filter(city => 
        // Exclude cities that are already added
        !existingCities.some(existing => existing.name === city.name)
      );
      setFilteredCities(filtered);
      setShowDropdown(filtered.length > 0);
    } else {
      setFilteredCities([]);
      setShowDropdown(false);
    }
  }, [searchTerm, existingCities]);

  // Handle clicking outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current && 
        !searchRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSearchTerm(city.name);
    setShowDropdown(false);
  };

  const handleAddCity = () => {
    if (selectedCity && !existingCities.some(existing => existing.name === selectedCity.name)) {
      addCity(selectedCity);
      setSearchTerm('');
      setSelectedCity(null);
    }
  };

  const formatTimezone = (timezone) => {
    const sign = timezone >= 0 ? '+' : '';
    return `GMT${sign}${timezone}`;
  };

  return (
    <SearchRow>
      <SearchContainer>
        <SearchInput
          ref={searchRef}
          type="text"
          placeholder="Search for a city..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setSelectedCity(null);
          }}
          onFocus={() => {
            if (filteredCities.length > 0) {
              setShowDropdown(true);
            }
          }}
        />
        
        {showDropdown && (
          <DropdownContainer ref={dropdownRef}>
            {filteredCities.map((city, index) => (
              <DropdownItem
                key={`${city.name}-${city.country}`}
                onClick={() => handleCitySelect(city)}
              >
                <CityName>{city.name}</CityName>
                <CityDetails>
                  {city.country} • {formatTimezone(city.timezone)}
                </CityDetails>
              </DropdownItem>
            ))}
          </DropdownContainer>
        )}
      </SearchContainer>
      
      <AddButton
        onClick={handleAddCity}
        disabled={!selectedCity}
      >
        Add City
      </AddButton>
    </SearchRow>
  );
};

export default CitySearch; 