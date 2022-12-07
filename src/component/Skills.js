import withDocumentTitle from "react-router-document-title";
import { useState, useEffect } from "react";
function Skills() {


    const [skills, setSkills] = useState([]);

    const fetchData = () => {
        return fetch("http://localhost:3000/skills")
            .then((response) => response.json())
            .then((data) => setSkills(data));
    }

    useEffect(() => {
        document.title = "Skills Page";
        fetchData();
    }, [])

    return (
        <section className="skills container">
            <div className="header">
                <h2 className="header-bg">skills</h2>
                <h1>my skills</h1>
            </div>
            <p className="title-paragraph">
                In a world that is constantly changing, there is no one subject or set
                of subjects that will serve you for the foreseeable future, let alone
                for the rest of your life. The most important skill to acquire now is
                learning how to learn.
            </p>
            <div className="row">
                {
                    skills.map(item =>
                        <div key={item.skill} className="skill">
                            <span className="skill-name">{item.skill}</span>
                            <span className="value">{item.value}%</span>
                            <div className="process">
                                <div className="process-bar" style={{ width: item.value + "%" }}></div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}
export default withDocumentTitle("Skills Page")(Skills);