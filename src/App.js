import { Apexnavbar } from './components/navbar'
import Homepage from './components/homepage'
import Footer from './components/footer'
import AboutUs from './components/aboutus'
import TheTeam from './components/theteam'
import ContactUs from './components/contactus'
import Admin from './components/admin'

import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"

const App = () => {
  return (
    <div className='main-style'>
      <Apexnavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/theteam" element={<TheTeam />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
