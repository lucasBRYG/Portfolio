import React from 'react'

import Footer from "../../footer/Footer";

import "./ContactPage.css";

export default function ContactPage () {
    return (
        <div id = "contact">
            <section className = "contact__section">
                <div>
                    <h2>
                        Email
                    </h2>
                    <p>
                        adio.lucas@gmail.com
                    </p>
                </div>
                <div>
                    <h2>
                        LinkedIn
                    </h2>
                    <p>
                        https://www.linkedin.com/in/lucas-bryg-codes/
                    </p>
                </div>
                {/* <form>

                </form> */}
            </section>
            <Footer/>
        </div>
    )
}