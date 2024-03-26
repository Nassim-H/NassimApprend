import Head from 'next/head';
import Footer from './components/Footer';
import Apropos from './components/Apropos';
import Hero from './components/Hero';
import Header from './components/Header';
import FAQ from './components/FAQ';


const IndexPage= () => {
    return (
        <>
        <Header />
        <Hero />
        <Apropos />
        <FAQ />
        </>

    );
};

export default IndexPage;