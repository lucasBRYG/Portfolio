import React, { useState } from "react"

import Content from "../../content/Content";
import Projectcard from "../../cards/Projectcard";
import Animation from "../../animation/Animation";
import NextButton from "../../buttons/NextButton";
import Footer from "../../footer/Footer"

import "./LandingPage.css";

export default function LandingPage() {

    const [contentState, setContentstate] = useState(1);

    let rightClick = function() {
      setContentstate(() => {return contentState + 1});
    };
  
    let leftClick = function() {
     
      setContentstate(() => { return contentState - 1});
    }
  
    return (
        <div className="landing">
            <Content pageState={contentState} dataSide="1" id="intro-content-section" className="start-section">
                <section id="animation">
                    <Animation />
                    <div id="intro-1">
                        <p>My name is Lucas Santiago, I'm a web developer and prgrammer based in Baltimore</p>
                    </div>
                    <div id="intro-2">
                        <p>This is my portfolio webpage, Have a look around!</p>
                    </div>
                </section>
                <NextButton direction="right" onClick={rightClick} />
            </Content>
            <Content pageState={contentState} dataSide="2" id="colaborations-section" className="card-section" title="Colaborations">
                <h2>Colaborations</h2>
                <NextButton direction="left" onClick={leftClick} />
                <Projectcard
                    img={process.env.PUBLIC_URL + "/assets/images/trail-mixer.jpeg"}
                    size="350px 225px"
                    title="Trail Mixr"
                    description="Get trail info and plan an outing"
                    github="https://github.com/lucasBRYG/Group-Project-1"
                    link="https://lucasbryg.github.io/Group-Project-1/"
                />
                <Projectcard
                    img={process.env.PUBLIC_URL + "/assets/images/nutrivice.png"}
                    size="500px 300px"
                    title="Nutrivice"
                    description="Track your meals and get healthy recipes"
                    github="https://github.com/nickgdam/NutriVice#license"
                    link="https://nutrivice.herokuapp.com/"
                />
                <NextButton direction="right" onClick={rightClick} />
            </Content>
            <Content pageState={contentState} dataSide="3" id="projects-section" className="card-section" title="Solo Projects">
                <h2>Solo Projects</h2>
                <NextButton direction="left" onClick={leftClick} />
                <Projectcard
                    img={process.env.PUBLIC_URL + "/assets/images/AmazonHomunculus.png"}
                    size="500px 300px"
                    title="Amazon Homunculus"
                    description="An amazon clone built with React.js"
                    github="https://github.com/lucasBRYG/amazonhomunculus"
                    link="https://homunculus-ad003.web.app/"
                />
                <Projectcard
                    img={process.env.PUBLIC_URL + "/assets/images/weatherDash.png"}
                    size="500px 300px"
                    title="WeatherDash"
                    description="Get the weather in your city"
                    github="https://github.com/lucasBRYG/Weather-Dashboard-App"
                    link="https://lucasbryg.github.io/Weather-Dashboard-App/"
                />
                <Projectcard
                    img={process.env.PUBLIC_URL + "/assets/images/password-generator.png"}
                    size="500px 300px"
                    title="SCP"
                    description="Secure Password Generator"
                    github="https://github.com/lucasBRYG/Password-Generator-App"
                    link="https://lucasbryg.github.io/Password-Generator-App/"
                />
            </Content>
            <Footer />
        </div>
    )
}
