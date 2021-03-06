import React from 'react';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
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
                    <p>There is no single way of splitting tips fairly amongst staff.</p>
                    <p>The two most common methods are:</p>
                    <ul>
                        <li>Splitting by Hours Worked</li>
                        <li>Splitting Amongst Support Staff</li>
                    </ul>

                <h2>Splitting By Hours</h2>
                    <p>Many restaurants and bars split tips by hours worked. This is fairer, so that people working shorter shifts but at better times don't get more tips than others.</p>
                    <p>This involves dividing the total tips received by total hours worked, then multiplying this by the hours each individual has worked.</p>
                    <p>The formula used on this site is: </p>
                    <p><strong>(Total Tips / Total Hours) x Employee Hours</strong></p>
                    <a href="/split-by-hours" className="about-button">
                        <button 
                            className="ripple"
                            >
                                Split My Tips By Hours
                            </button>
                    </a>

                <h2>Splitting Tips Amongst Support Staff</h2>
                    <p>Some restaurants or bars choose to split their tip pool (all of the tips) amongst all of their staff. This means that all supporting staff get a fair share, and no-one will suffer from having a particularly bad shift.</p>
                    <p>Most managers will split the pool amongst different staff categories, e.g.</p>
                    <ul>
                        <li>Bar Staff: 30%</li>
                        <li>Waiters: 40%</li>
                        <li>Kitchen Porters: 20%</li>
                        <li>Chefs: 10%</li>
                    </ul>
                    <p>This involves first splitting the total tips proportionally between these categories and then for each category, splitting by hours worked.</p>
                    <p>The formula used on this site is: </p>
                    <p><strong>((Total Tips x Percentage Due to Staff Category) / Total Hours) x Employee Hours</strong></p>
                    <a href="/split-with-support-staff" className="about-button">
                        <button className="ripple">Split My Tips Amongst Suppport Staff</button>
                    </a>
            </div>
            <Footer />
        </div>
    )
}

export default About