import React, { useEffect } from "react"
function Contact() {
    useEffect(() => {
        document.title = "Contact Page";
    }, []);
    return (
        <section className="contact container">
            <div className="header">
                <h2 className="header-bg">contact</h2>

                <h1>get in touch</h1>
            </div>
            <p className="title-paragraph">
                Although I’m not currently looking for any new opportunities, my inbox
                is always open. Whether you have a question or just want to say hi, I’ll
                try my best to get back to you!
            </p>
            <div className="row">
                <div className="row-left">
                    <h3>feel free to ask us !</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        veniam beatae velit modi doloribus, ut possimus sit voluptatem
                        molestias dignissimos quasi.
                    </p>
                    <div className="mail">
                        <i className="fa-sharp fa-solid fa-envelope"></i>
                        <div>
                            <label>mail me </label>
                            <p>roone858@gmail.com</p>
                        </div>
                    </div>
                    <div className="phone">
                        <i className="fa-solid fa-square-phone"></i>
                        <div>
                            <label>call me </label>
                            <p>01140192314</p>
                        </div>
                    </div>
                    <div className="social-media">
                        <a href="www.facebok.com"
                        ><i className="fa-brands fa-square-facebook"></i
                        ></a>
                        <a href="www.facebok.com"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="www.facebok.com"
                        ><i className="fa-brands fa-square-twitter"></i
                        ></a>
                        <a href="www.facebok.com"
                        ><i className="fa-brands fa-square-whatsapp"></i
                        ></a>
                    </div>
                </div>
                <div className="row-right">
                    <div className="input-group">
                        <input type="text" placeholder="Your Name" />
                        <input type="text" placeholder="Your email" />
                        <input type="text" placeholder="Your subject" />
                    </div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>SEND MASSAGE</button>
                </div>
            </div>
        </section>
    )
}
export default Contact;