import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import ReactGA from 'react-ga';
import "./About.css";

ReactGA.initialize('UA-177613300-1');

const About: React.FC = () => {
    ReactGA.pageview('/about');
    return (
        <div>
            <Menu />
            <div className="about-text">
                <h1>How To Split Tips</h1>
                    <p>There is no one way of splitting tips fairly amongst staff.</p>
                    <p>The two most common methods are:</p>
                    <ul>
                        <li>Splitting by Hours Worked</li>
                        <li>Splitting Amongst Support Staff</li>
                    </ul>

                <h2>Splitting By Hours</h2>
                    <p>Many restaurants split tips by hours worked. This is fairer, so that people working shorter shifts but at better times don't get more tips than others.</p>
                    <p>This involves dividing the total tips received by total hours worked, then multiplying this by the hours each individual has worked.</p>
                    <a href="/split-by-hours">
                        <strong>| Split My Tips By Hours</strong>
                    </a>

                <h2>Splitting Tips Amongst Support Staff</h2>
                    <p>Some restaurants choose to split their tip pool (all of the tips) amongst all of their staff. This means that all supporting staff get a fair share, and no-one will suffer from having a particularly bad shift.</p>
                    <p>Most managers will split the pool amongst different staff categories, e.g.</p>
                    <ul>
                        <li>Bar Staff: 30%</li>
                        <li>Waiters: 40%</li>
                        <li>Kitchen Porters: 20%</li>
                        <li>Chefs: 10%</li>
                    </ul>
                    <p>This involves first splitting the total tips proportionally between these categories and then for each category, splitting by hours worked.</p>
                    <a href="/split-with-support-staff">
                        <strong>| Split My Tips Amongst Suppport Staff</strong>
                    </a>
            </div>
            <Footer />
        </div>
    )
}

export default About