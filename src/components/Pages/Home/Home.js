import React, { useRef } from 'react';
import ScrollToTop from '../../Utilities/ScrollToTop';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const Home = () => {
    const contact = useRef(null)

    const scrollToContact = () => {
        contact.current?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <>
            <ScrollToTop />
            <Navbar scrollToContact={scrollToContact}></Navbar>
            <Banner></Banner>
            <Projects ></Projects>
            {/* <Skills></Skills> */}
            <Contact contact={contact}></Contact>
            <Footer></Footer>
        </>
    );
};

export default Home;