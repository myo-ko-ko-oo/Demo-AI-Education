
import InfoBtn from "./InfoBtn"
import AppLogo from "./AppLogo"
import NavButton from "./NavButton"



const Navbar = () => {
  return (
   <>
   <nav className="w-full z-20 top-0 fixed mx-auto bg-white dark:bg-gray-800">
    <div className="flex justify-between items-center shadow py-3   dark:border-b dark:border-gray-700">
        <div className=""><InfoBtn/></div>
        <div className=""><AppLogo/></div>
        <div className=""><NavButton/></div>
    </div>
   </nav>
   </>
  )
}

export default Navbar