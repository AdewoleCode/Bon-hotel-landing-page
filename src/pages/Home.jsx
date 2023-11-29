import "./Home.css"
import Hero from "../components/hero/Hero"
import Facilities from "../components/facilities/Facilities"
import RoomRates from "../components/roomRates/RoomRates"
import Footer from "../components/footer/Footer"

const Home = () => {
    return (
        <div className="home-container">
            <Hero />
            <Facilities />
            <RoomRates />
            <Footer />
        </div>
    )
}

export default Home