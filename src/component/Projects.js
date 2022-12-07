
import withDocumentTitle from "react-router-document-title"

import { useState, useEffect } from "react";
function Projects() {

    useEffect(() => {
        document.title = "Resume Page";
    }, []);

    const [projects, setProjects] = useState([]);

    const fetchData = () => {
        return fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <section className="projects container">
            <div className="header">
                <h2 className="header-bg">projects</h2>
                <h1>my projects</h1>
            </div>
            <p className="title-paragraph">
                A creative project is a moving target. You never end up where you start.
            </p>
            <div className="portfolio" id="projects">
                <div className="container">
                    <div className="projects">
                        {projects.map(item =>
                            <div key={item.title} className="project">
                                <div className="image">
                                    <a href={item.link}>click to viste</a><img src={item.image} alt="" />
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>)}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default withDocumentTitle("Projects Page")(Projects);
