function Footer() {
    const items = ['home', 'about', 'resume', 'services', 'skills', 'projects', 'contact']

    return (
        <>
            <footer className="footer-container">
                <div className="cols">
                    <h2 className="footer-title">four group</h2>
                    <p>
                        “Your work is going to fill a large part of your life, and the only
                        way to be truly satisfied is to do what you believe is great work. And
                        the only way to do great work is to love what you do. If you haven’t
                        found it yet, keep looking. Don’t settle. As with all matters of the
                        heart, you’ll know when you find it.” <br />
                        Steve Jobs
                    </p>
                    <div className="footer-icons">
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/mah.moud.1675275"><i className="fa-brands fa-facebook"></i></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mahmoud-gamal-55a933166/"><i className="fa-brands fa-linkedin"></i></a>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/Mahmoudg_dev"><i className="fa-brands fa-twitter"></i></a>
                        <a target="_blank" rel="noreferrer" href="https://wa.me/201140192314"><i className="fa-brands fa-whatsapp"></i></a>
                    </div>
                    <div className="footerlist">
                        <ul className="footer-linkes">
                            {items.map((item) =>
                                <li key={item}><a href={item}>{item}</a></li>)}
                        </ul>
                    </div>
                </div>
            </footer>
            <p className="created">created by :  ROONEY</p></>
    )
}

export default Footer