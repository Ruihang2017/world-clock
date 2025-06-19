import styled, { createGlobalStyle , ThemeProvider} from 'styled-components'
import Clock from './components/Clock'
import CitySearch from './components/CitySearch'
import { useEffect } from 'react'
import useClockStore from './store/useClockStore'

const theme = {
    "primary": "#69c0ff",
    "secondary": "#b7eb8f",
    'color': {
      'dark': "#333",
      'light': "#eee",
    },
    "colorBackground": {
      "dark": 'rgba(255, 255, 255, 0.1)',
      "light": 'rgba(0, 0, 0, 0.1)'
    }
  }

const backgroundImage = `linear-gradient(to bottom right, ${theme.primary}, ${theme.secondary} 100%)`
const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 10px;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100dvw;
    min-height: 100dvh;
    font-family: "Audiowide", monospace, "Courier New", Courier, sans-serif;
    font-size: 2rem;
    font-weight: normal;
    text-shadow: 0 3px 5px rgba(0 0 0 / 10%);
    background: ${backgroundImage}
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    user-select: none;
    -webkit-user-drag: none;
    font-family: inherit;
  }
`

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1400px;
    padding: 2rem;
`

const Header = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`

const Title = styled.h1`
    color: white;
    font-size: 3.5rem;
    font-weight: normal;
    margin-bottom: 1rem;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    font-family: "Audiowide", monospace;
`

const Subtitle = styled.p`
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.6rem;
    font-weight: normal;
    margin-bottom: 2rem;
    font-family: "Audiowide", monospace;
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    gap: 20px;
`

const EmptyState = styled.div`
    text-align: center;
    padding: 4rem 2rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.8rem;
    font-weight: normal;
    font-family: "Audiowide", monospace;
`

const App = () => {
    // Zustand store hooks
    const userCities = useClockStore((state) => state.userCities);
    const addCity = useClockStore((state) => state.addCity);
    const removeCity = useClockStore((state) => state.removeCity);
    const toggleClockTheme = useClockStore((state) => state.toggleClockTheme);
    const getClockTheme = useClockStore((state) => state.getClockTheme);
    const initializeDefaultCities = useClockStore((state) => state.initializeDefaultCities);

    // Initialize default cities on mount
    useEffect(() => {
        initializeDefaultCities();
    }, [initializeDefaultCities]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AppContainer>
                <Header>
                    <Title>World Clock</Title>
                    <Subtitle>Keep track of time around the world</Subtitle>
                </Header>

                <CitySearch />

                {userCities.length === 0 ? (
                    <EmptyState>
                        <p>No cities added yet.</p>
                        <p>Search and add cities to get started!</p>
                    </EmptyState>
                ) : (
                    <Container>
                        {userCities.map((city) => (
                            <Clock 
                                key={city.id}
                                cityData={city}
                                light={getClockTheme(city.name)}
                                onToggleTheme={() => toggleClockTheme(city.name)}
                                onDelete={() => removeCity(city.id)}
                                showDelete={userCities.length > 1}
                            />
                        ))}
                    </Container>
                )}
            </AppContainer>
        </ThemeProvider>
    )
}

export default App