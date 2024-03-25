import Head from 'next/head';
import Footer from './components/Footer';
import Apropos from './components/Apropos';
import Hero from './components/Hero';
import Header from './components/Header';
import Asso from './components/Asso';
import FAQ from './components/FAQ';
import QuiSuisJe from './components/QuiSuisJe';


const IndexPage= () => {
    return (
        <>
        <Header />
        <Hero />
        <Apropos />
        <QuiSuisJe />
        <FAQ />
        <Footer />
        </>

    );
};

export default IndexPage;