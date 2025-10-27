
import './App.css'
import About from './components/About'
import OnlineOrders from './components/Online_orders'
import Online_services from './components/Online_services'
import Booktable from './components/Booktable.jsx'
import Specialities from './components/Specialities.jsx'
import BrandCheif from './components/BrandCheif.jsx'
import Ourlocations from './components/Ourlocations.jsx'
import Testimonials from './components/Testimonials.jsx'
import Insta from './components/Insta.jsx'
import TiffinBoxLanding from './components/TiffinBoxLanding.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
    <TiffinBoxLanding/>
      <About />
      <OnlineOrders />
      <Online_services />
      <Booktable />
      <Specialities/>
      <BrandCheif/>
      <Ourlocations/>
      <Testimonials/>
      <Insta/>
      <Footer/>
    </>
  )
}

export default App
