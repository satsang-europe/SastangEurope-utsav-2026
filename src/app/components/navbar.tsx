import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav className="bg-amber-50 shadow-sm">
            <div className="flex px-2 py-2 justify-between items-center md:max-w-6xl mx-auto">
                <div className="flex gap-2 items-center">
                    <Image src="/SElogo.png" width={40} height={40} alt="Satsang Europe Logo"/>
                    <div className="flex flex-col justify-center items-start">
                        <p className="font-bold">Utsav 2026</p>
                        <p className="text-sm text-gray-600">Celebrating togetherness…</p>
                    </div>
                </div>
                <div className="hidden px-2 py-2 md:block">
                    <p className="font-bold text-lg">Satsang Europe</p>
                </div>
                <div className="px-2 py-2">
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe1TNogr0bb2_JD56H91wRCJfW8lYGOjJWpkS_bNyLabP6ahw/viewform?usp=dialog" target="_blank"
                        className="px-4 py-3 bg-blue-950 rounded-lg text-white text-xs md:text-sm font-bold hover:bg-blue-900 transition">I Wish to Join</Link>
                    </div>
            </div>
        </nav>
     );
}
 
export default Navbar;