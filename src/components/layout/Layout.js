
import Footer from '../footer/Footer'
import NavBar from '../navigation/NavBar'

export default function ({children}) {
  return (
    <div>
<NavBar/>
<main>{children}</main>
<Footer/>


    </div>
  )
}
