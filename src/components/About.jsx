import React from 'react';

const About = () => {
    return (
        <section>
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>
                <div className="w-[900px] flex flex-col justify-center items-center mx-auto">
                    <p className="text-center leading-relaxed">A passionate and detail-oriented web developer based in Bradford. With a
                        love for crafting clean and efficient code, I specialize in creating engaging and user-friendly
                        websites. My journey in web development has equipped me with a diverse skill set, ranging from
                        front-end technologies like HTML, CSS, and JavaScript to back-end frameworks like Node.js.
                    </p>
                    {/*<br/>*/}
                    {/*<p className="text-center leading-relaxed">*/}
                    {/*    Driven by a constant curiosity for the latest in web technologies, I thrive on turning ideas*/}
                    {/*    into reality through thoughtful and innovative solutions. Whether it's building responsive*/}
                    {/*    interfaces or optimizing website performance, I am committed to delivering high-quality results.*/}
                    {/*</p>*/}
                    {/*<br/>*/}
                    {/*<p className="text-center leading-relaxed">*/}
                    {/*    When I'm not coding, you can find me exploring new technologies, contributing to open-source*/}
                    {/*    projects, or enjoying a good cup of coffee.*/}
                    {/*</p>*/}
                </div>
            </div>
        </section>
    );
};

export default About;
