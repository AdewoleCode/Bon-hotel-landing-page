import "./NavigationBar.css"
import Logo from "../../assets/logo.png"
import DropdrownBox from "../dropdownBox/DropdrownBox"


const NavigationBar = () => {

    return (
        <>
            <div className="nav_container">
                <img src={Logo} alt="shape" className="bon" />

                <header>
                    <nav>
                        <a className="anchor" to="/about">About</a>
                        <a className="anchor" to="/HowItWorks">How It Works</a>
                        <a className="anchor" to="/testimonials">Testimonial</a>
                        <a className="anchor contact" to="/contact">Contact</a>
                    </nav>
                </header>
            </div>
            <DropdrownBox />
        </>
    )
}

export default NavigationBar