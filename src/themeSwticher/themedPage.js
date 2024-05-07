import { useContext } from 'react';
import Header from './Header';
import './theme.css';
import ThemeContext from './themeContext';
export default function Page() {
    const theme = useContext(ThemeContext);
    return (
        <div id="app" className={theme}>
            <Header />

            <article>
                <h2>React Context Learning</h2>
                <p>
                    Yo boys and girls, let's learn and understand React Context API.
                </p>
            </article>
        </div>
    );
}
