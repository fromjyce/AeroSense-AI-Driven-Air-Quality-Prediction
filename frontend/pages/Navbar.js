import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full p-4 flex items-center justify-between bg-transparent">
      <div className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="AirSense"
          width={55}
          height={55}
        />
        <Link href="/" className="text-3xl font-bold poppins dela_gothic_one">
          AeroSense
        </Link>
      </div>
      <nav className="flex space-x-8">
        <Link href="/about" className="poppins font-bold text-lg px-4 py-2 hover:text-green hover:underline">
          About
        </Link>
        <Link href="#simulate" className="poppins font-bold text-lg px-4 py-2 hover:text-green hover:underline">
          Simulate
        </Link>
        <Link href="#predict" className="poppins px-4 font-bold text-lg py-2 bg-green text-white rounded hover:bg-opacity-80">
          Predict
        </Link>
      </nav>
    </header>
  );
}
