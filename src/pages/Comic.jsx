import { Link } from "react-router"


function Comic(){

    return(


        

    <div>

        <Link to="/" className="fixed top-4 left-4 z-10 bg-white px-4 py-2 rounded-md shadow-md">
        ← Back
      </Link>
        <iframe
      src="/comic/index.html"
      title="Comic"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
    </div>

    )

    
}

export default Comic