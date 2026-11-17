import { Link } from "react-router"

function Infographic() {
  return (
            

    <div>

        <Link to="/" className="fixed top-4 left-4 z-10 bg-white px-4 py-2 rounded-md shadow-md">
        ← Back
      </Link>
        <iframe
      src="/infographic/index.html"
      title="Infographic"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
    </div>
  )
}
export default Infographic