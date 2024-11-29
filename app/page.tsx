// pages/index.tsx
import Head from 'next/head';
import Layout from '../comonents/Layout';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>My Next.js Project</title>
        <meta name="description" content="Welcome to my Next.js project!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <div 
          className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" 
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <h1 className="text-5xl font-bold text-white">Welcome to My Project!</h1>
          <p className="text-xl text-white mt-4">Explore the options in the navigation bar.</p>
        </div>
      
    </>
  );
};

export default Home;
