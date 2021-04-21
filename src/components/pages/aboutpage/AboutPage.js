import React from 'react'

import Footer from "../../footer/Footer"

import "./AboutPage.css";

export default function AboutPage() {
    return (
        <div className = "about">
            <section id = "about__me"> 
                <h2>A little about me</h2>
                <p>
                    I’ve been a web developer for the last year, but I fell in love with programming way back when I picked up "C++ For Dummuies" my second year college. 
                    I’ve always had a passion for building things, and I want to make the world a better place with the things I make. 
                    Besides programming and computer science, I love music, math, engineering and exploring nature. 
                    I’ve been teaching lessons through a guitar business I started over the last year, but I’m also looking for my next professional opportunity. If you have a need for a problem solver with a penitent for science, please contact me!
                </p>
            </section>
            <aside id = "about__cards">
                <div className = "about__card">
                    <div id = "about__skills">
                        <div className = "about__card-front">
                            <h2 className = "about__card__title">Skills</h2>
                        </div>
                        <div className = "about__card-back">
                            <ul className = "about__card__list">
                                <li>Programming: JS, React.js, SQL/NoSQL, C++, Arduino for IC.</li>
                                <li>Math and Logic</li>
                                <li>Engineering</li>
                                <li>Music</li>
                                <li>Communication/teaching</li>
                                <li>Problem solving and critical thinking</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className = "about__card">
                    <div id = "about__favorites">
                        <div className = "about__card-front">
                            <h2 className = "about__card__title">Favortie Stuff</h2>
                        </div>
                        <div className = "about__card-back">
                            <ul className = "about__card__list">
                                <li>Classic Rock</li>
                                <li>Dogs</li>
                                <li>Mandelbrot Set</li>
                                <li>Prime numbers</li>
                                <li>Running</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
            <Footer/>
        </div>
    )
}