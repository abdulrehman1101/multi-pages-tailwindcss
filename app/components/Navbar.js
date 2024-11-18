import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Followers Website</h1>
        <div className="space-x-6">
          <Link href="/" className="text-gray-200 hover:text-white">Home</Link>
          <Link href="#about" className="text-gray-200 hover:text-white">About</Link>
          <Link href="#contact" className="text-gray-200 hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
}