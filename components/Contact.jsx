import React from "react"

export default function Contact() {
    return (
        <section className="contact" id="contact">
        <div className="row">
            <h2>Get in Touch</h2>
            <div className="contact__info">
            <p>
            Are you in need of a highly efficient and seamlessly automated system to enhance your product or business operations? 
            Whether you require consultation, have inquiries, wish to provide insights, or simply want to say "Hi 👋," feel free to reach out. 
            I prioritize prompt responses, and the most expedient method to contact me is through email. 
            I look forward to assisting you! 😊
            </p>
            {/* Replace the email with yours */}
            <a href="mailto:sommacalalberto@gmail.com" className="btn">
                Contact Me
            </a>
            </div>
        </div>
        </section>
    )
}