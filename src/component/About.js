import me from "../imgs/me.jpg"
import { useEffect } from "react";
function About() {
    useEffect(() => {
        document.title = "About Page";
    }, []);
    return (
        <section className="about container">
            <div className="header">
                <h2 className="header-bg">about</h2>

                <h1>about me</h1>
            </div>
            <div className="row">
                <div className="row-left">
                    <img src={me} alt="aboutphoto" />
                </div>
                <div className="row-right">
                    <p className="text">
                        Student in computer programing with a background in Java
                        application, Python, C++, Js, HTML, CSS, MySQL, and databases.
                        proficiency with algorithms and data structures in c++ and python.
                        Experience working on many projects.
                    </p>
                    <div className="about-content">
                        <ul>
                            <li className="text">
                                <span>Name : </span>
                                <span>Mahmoud Gamal</span>
                            </li>
                            <li className="text">
                                <span>Date of Birth : </span>
                                <span>January 01, 1999</span>
                            </li>
                            <li className="text">
                                <span>Address : </span>
                                <span>Asyut , Asyut , Egypt</span>
                            </li>
                            <li className="text">
                                <span>Email : </span>
                                <span>roone858@gmail.com</span>
                            </li>
                            <li className="text">
                                <span>Zip code : </span>
                                <span>000000</span>
                            </li>
                            <li className="text">
                                <span>Phone: </span>
                                <span>011 4019 2314</span>
                            </li>
                        </ul>
                    </div>

                    <h3>7 <span >Project complete</span></h3>
                    <a href="./cv.pdf" download>
                        <button type="button" className="btn">download cv</button>
                    </a>
                </div>
            </div>
        </section>
    )
}
export default About;