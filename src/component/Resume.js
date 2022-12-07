import React, { useEffect } from "react"
import { useState } from "react";
function Resume() {
    useEffect(() => {
        document.title = "Resume Page";
    }, []);

    const [resume, setResume] = useState([]);

    const fetchData = () => {
        return fetch("http://localhost:3000/resume")
            .then((response) => response.json())
            .then((data) => setResume(data));
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <section className="resume container">
            <div className="header">
                <h2 className="header-bg">RESUME</h2>
                <h1>Resume</h1>
            </div>
            <p className="head-text" style={{ textAlign: 'center' }} >
                a brief document with a collection of achievements in professional,
                academic and personal areas
            </p>

            <div className="resume-container">
                {resume.map(item =>
                    <div key={item.name} className="res">
                        <i className={item.logo}></i>
                        <h3 className="edu-name">
                            {item.name}
                        </h3>
                        <span>{item.data}</span>
                        <p className="descrption">{item.descrption}</p>
                    </div>
                )}
            </div>
        </section>
    )

}
export default Resume;