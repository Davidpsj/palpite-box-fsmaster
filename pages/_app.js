import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import '../css/styles.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <div className='container mx-auto'>
        <Component {...pageProps}></Component>
      </div>
      <Footer />
    </div>
  );
};

export default MyApp
