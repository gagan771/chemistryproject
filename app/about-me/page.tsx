// pages/about-me.tsx
import Navbar from '../components/Navbar';

const AboutMe: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <h1 className="text-4xl font-bold text-center mt-10">About Me</h1>
      {/* Add your content here */}
    </div>
  );
};

export default AboutMe;