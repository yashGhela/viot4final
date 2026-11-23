import { Link } from "react-router"
import NavBar from "../components/NavBar"

function Infographic() {
  return (
            

    <div>

      <NavBar/>

       
        <iframe
      src="/infographic/index.html"
      title="Infographic"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
    </div>
  )
}
export default Infographic