import { Link } from "react-router"
import NavBar from "../components/NavBar"


function Comic(){

    return(


        

    <div>

        <NavBar/>
        <iframe
      src="/comic/index.html"
      title="Comic"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
    </div>

    )

    
}

export default Comic