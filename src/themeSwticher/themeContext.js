import React from 'react';

const ThemeContext = React.createContext('dark');

function ThemeProvider({ props }) {
    const [theme, setTheme] = React.useState('light');
    const children = props.children;
    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
    }
    return (
        <ThemeContext.Provider value={{
            theme: theme, 
            toggleTheme: toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
    }
<ThemeProvider>

</ThemeProvider>
export default ThemeContext;
export {ThemeProvider};












