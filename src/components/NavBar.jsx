import { Link } from "react-router"

function NavBar() {
    return (
        <div className="
            fixed bottom-6 left-6 z-20
            flex items-center gap-2
            p-2 px-4
            rounded-2xl
            
            bg-white/10
            backdrop-blur-2xl
            border border-white/20
            shadow-[0_8px_32px_rgba(0,0,0,0.15)]
            
            text-white
        ">
            <Link to='/' className="px-4 py-2 rounded-xl transition-all duration-300">યશ</Link>
            <Link className="px-4 py-2 rounded-xl hover:bg-white/15 transition-all duration-300" to="/">
                Portfolio
            </Link>

            <Link className="px-4 py-2 rounded-xl hover:bg-white/15 transition-all duration-300" to="/infographic">
                Infographic
            </Link>

            <Link className="px-4 py-2 rounded-xl hover:bg-white/15 transition-all duration-300" to="/comic">
                Comic
            </Link>
        </div>
    )
}

export default NavBar