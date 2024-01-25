import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="bg-card-bg py-20">
            <div className="container mx-auto flex flex-col items-center">
                <h2 className="text-4xl font-bold mb-16 text-center">Contact Me</h2>
                <p className="w-[70%] text-center">I`m always open to job opportunities within the web development space, if you have any job opportunities or just fancy a chat, please use the button below to get in touch</p>
                <a href="mailto:lukecoleman123@gmail.com">
                    <button className="py-2 px-6 mt-10 bg-theme-red rounded-3xl hover:scale-110">Get in Touch</button>
                </a>
            </div>
        </section>
    );
};

export default Contact;
