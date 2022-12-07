import withDocumentTitle from "react-router-document-title";
import { useState, useEffect } from "react";
function Services() {


    const [services, setServices] = useState([]);

    const fetchData = () => {
        return fetch("http://localhost:3000/services")
            .then((response) => response.json())
            .then((data) => setServices(data));
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <section className="services container">
            <div className="header">
                <h2 className="header-bg">services</h2>
                <h1>services</h1>
            </div>
            <p className="title-paragraph">
                it may seem far, far away at first. Your ideas are in uncharted,
                pixelated territory. Our crew will guide you through the discovery,
                design, and build of your idea. Together we will realize your vision.
            </p>
            <div className="row">
                {services.map(item =>
                    <div key={item.name} className="service">
                        <i className={item.logo}></i>
                        <h2 className="service-name">{item.name}</h2>
                    </div>
                )}

            </div>
        </section>
    )
}
export default withDocumentTitle("Services Page")(Services);