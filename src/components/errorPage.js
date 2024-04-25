import React from 'react';
import errorImage from './assets/404_error_page.webp'; // Adjust the path according to your project structure

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        textAlign: 'center',
        backgroundColor: '#f0f0f0', // A light grey background
    },
    image: {
        maxWidth: '100%', // Ensure the image is responsive and fits well
        height: '80%',
        objectFit: 'fill',
    },
    text: {
        marginTop: '20px',
        fontSize: '20px',
        color: '#333', // Dark grey text for readability
    }
};

function ErrorPage() {
    return (
        <div style={styles.container}>
            <img src={errorImage} alt="404 Error: Page Not Found" style={styles.image} />
            <p style={styles.text}>Oops! The page you are looking for has disappeared into the void.</p>
        </div>
    );
}


export default ErrorPage;
