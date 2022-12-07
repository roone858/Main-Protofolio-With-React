import pic from "../imgs/clipart2939382.png"
import withDocumentTitle from 'react-router-document-title';
function Home() {

    return (
        <section className="home container">
            <div className="row">
                <div className="row-left">
                    <h3>hello!</h3>
                    <h1>i'm <span>mahmoud gamal</span></h1>
                    <h2>a freelance softwear engniring</h2>
                    <div className="btns">
                        <button>hire me</button>
                        <button id="myworks">my works</button>
                    </div>
                </div>
                <div className="row-right">
                    <div className="imgdiv">
                        <img src={pic} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default withDocumentTitle('Home')(Home);