
function Navbar() {




    const items = ['home', 'about', 'resume', 'services', 'skills', 'projects', 'contact']
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <a className="logo" href="/#">rooney</a>
                    <div className="toggle-btn" onClick={function () {
                        document.querySelector(".nav-container ul.nav-list").classList.toggle("active");
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="nav-links">
                        <ul className="nav-list">
                            {items.map(item =>
                                <li key={item} className="navbar-item"><a href={item}>{item}</a></li>
                            )}


                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;