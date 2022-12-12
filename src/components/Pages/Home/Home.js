import React, { useRef, useState } from 'react';
import ScrollToTop from '../../Utilities/ScrollToTop';
import Spinner from '../../Utilities/Spinner';
import About from '../About/About';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const Home = () => {
    // const spinnerAuth=use

    const contact = useRef(null)
    const about = useRef(null)
    const projectUndertaken = useRef(null)

    const [spinner, setSpinner] = useState(false)

    const scrollToComponent = (component) => {
        component.current?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div className='bg-black'>
            <ScrollToTop />
            <Navbar scrollToComponent={scrollToComponent}
                contact={contact} about={about} projectUndertaken={projectUndertaken}></Navbar>

            <Banner setSpinner={setSpinner}></Banner>
            {spinner && <Spinner></Spinner>}

            <Projects projectUndertaken={projectUndertaken}></Projects>
            <Skills></Skills>
            <About about={about}></About>
            <Contact contact={contact} setSpinner={setSpinner}></Contact>
            <Footer ></Footer>
            {/* {setSpinner(false)} */}
        </div>
    );
};

export default Home;