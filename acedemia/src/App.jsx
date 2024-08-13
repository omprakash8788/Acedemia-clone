import { useState } from 'react'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Program from './components/programs/Program'
import Testmonials from './components/testmonilas/Testmonials'
import Title from './components/title/Title'
import Video from './components/video/Video'
const App = () => {
  const [play, setPlay]=useState(false)
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
       <Title subTitle="Our Program" title="What we Offer" />
      <Program/>
      <About setPlay={setPlay}/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='Testimonials' title='What Students Says'/>
      <Testmonials/>
      <Footer/>
      <div>
        <Video play={play} setPlay={setPlay}/>
      </div>
      </div>
    </div>
  )
}

export default App
