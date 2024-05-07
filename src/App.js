import ThemePage from './themeSwticher/themedPage';
import { ThemeProvider } from './themeSwticher/themeContext';
import CartApp from './cartApplication/App';


function App() {
  return (
    // <ThemeProvider>
    //   <ThemePage/>
    // </ThemeProvider>
    <CartApp/>
  );
}

export default App;
