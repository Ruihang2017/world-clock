import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';
import { DEFAULT_CITIES, generateClockId } from '../data/cities';

const useClockStore = create(
	persist(
		immer((set, get) => ({
			// State
			userCities: [],
			clockThemes: {},
			clockTimes: {},

			// Initialize with default cities if none exist
			initializeDefaultCities: () =>
				set((state) => {
					if (state.userCities.length === 0) {
						const defaultCitiesWithIds = DEFAULT_CITIES.map((city) => ({
							...city,
							id: generateClockId(city.name),
						}));

						state.userCities = defaultCitiesWithIds;

						// Set default themes
						DEFAULT_CITIES.forEach((city) => {
							state.clockThemes[city.name] = ['London', 'New York'].includes(
								city.name
							);
						});
					}
				}),

			// Add a new city
			addCity: (cityData) =>
				set((state) => {
					const newCity = {
						...cityData,
						id: generateClockId(cityData.name),
					};

					state.userCities.push(newCity);
					state.clockThemes[cityData.name] = false; // Default to dark theme
				}),

			// Remove a city
			removeCity: (cityId) =>
				set((state) => {
					const cityToRemove = state.userCities.find(
						(city) => city.id === cityId
					);
					if (cityToRemove) {
						state.userCities = state.userCities.filter(
							(city) => city.id !== cityId
						);
						delete state.clockThemes[cityToRemove.name];
						delete state.clockTimes[cityToRemove.name];
					}
				}),

			// Toggle clock theme
			toggleClockTheme: (cityName) =>
				set((state) => {
					state.clockThemes[cityName] = !state.clockThemes[cityName];
				}),

			// Update clock time data
			updateClockTime: (cityName, timeData) =>
				set((state) => {
					state.clockTimes[cityName] = timeData;
				}),

			// Get clock theme
			getClockTheme: (cityName) => {
				const state = get();
				return state.clockThemes[cityName] || false;
			},

			// Get clock time
			getClockTime: (cityName) => {
				const state = get();
				return state.clockTimes[cityName] || null;
			},

			// Get existing cities (for search component)
			getExistingCities: () => {
				const state = get();
				return state.userCities;
			},
		})),
		{
			name: 'world-clock-storage', // localStorage key
			partialize: (state) => ({
				userCities: state.userCities,
				clockThemes: state.clockThemes,
				// Don't persist clockTimes as they should be calculated fresh
			}),
		}
	)
);

export default useClockStore;
