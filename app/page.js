import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Navbar />
      <div className="bg-gray-500 w-full flex flex-col items-center justify-center pt-20">
         <br />
        <h1 className="py-2 text-4xl font-bold text-white">Welcome to My Followers Website</h1>
        <button className=" px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            See More
          </button>
      </div>
      <About />
      <Contact />
    </div>
  );
}