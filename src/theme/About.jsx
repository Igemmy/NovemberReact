import { useContext } from "react"
import { Emmy } from "./Wrapcontent"


function About() {
  let {theme} = useContext(Emmy)
  return (
    <div>
     <div className={`h-screen w-full duration-200 ${theme ? "bg-amber-300 text-black" : "bg-amber-800 text-white"}`}>
       <h1 className='text-2xl'>About us</h1>
     </div>
    </div>
  )
}

export default About