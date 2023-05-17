import Hero from '../Hero'
import Footer from '../footer/Footer'
import NavBar_2 from '../navigation/NavBar_2'

export default function ({children}) {
  return (
    <div>
      <NavBar_2/>
      <Hero/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}
