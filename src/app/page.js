import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center px-8 py-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold">[ APTOS BUILD ]</span>
          <span className="text-xs bg-gray-700 px-2 py-1 rounded">BETA</span>
        </div>
        <div className="ml-auto flex gap-6 text-sm items-center">
          <a href="#products" className="hover:text-gray-400">Products</a>
          <a href="#about" className="hover:text-gray-400">About Aptos</a>
          <a href="#use-cases" className="hover:text-gray-400">Use Cases</a>
          <button className="bg-gray-700 px-4 py-2 rounded text-sm">SIGN UP / LOG IN</button>
        </div>
      </nav>

      <br />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center p-16">
        <h1 className="text-5xl md:text-6xl font-bold uppercase leading-tight">
          The Essential Toolkit for Every Aptos Developer
        </h1>
        <br />
        <p className="max-w-2xl mt-4 text-gray-300 text-xl">
          Aptos Build offers a robust, easy-to-use suite of tools for developers to create, test, and launch dApps on Aptos.
          Whether you are a beginner or an experienced builder, you can generate API keys in seconds, launch NFT collections
          with a single click, and streamline user onboarding - all from one easy-to-use platform.
        </p>
        <button className="mt-6 bg-green-500 px-6 py-3 rounded text-black font-semibold hover:bg-green-400">
          START BUILDING →
        </button>
      </section>

      {/* Products Section */}
      <section id="products" className="p-10">
        <h2 className="text-xl font-bold uppercase text-gray-400 flex items-center gap-2">
          Products <FaArrowRight />
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {["API Access", "NFT Studio", "Identity Solutions"].map((title, index) => (
            <div key={index} className="border border-gray-700 p-6 rounded-lg bg-black text-center flex flex-col justify-between h-full">
              <h3 className="text-lg font-semibold">{title}</h3>
              <div className="w-16 h-16 mx-auto my-4">
                <Image src={`/icons/icon${index + 1}.PNG`} alt="icon" width={154} height={154} />
              </div>
              <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                {index === 0 && (
                  <>
                    <li>✓ Versatile Access - Generate API keys tailored to various development needs.</li>
                    <li>✓ Effortless Integration - Write transactions and retrieve blockchain data.</li>
                    <li>✓ Real-Time Insights - Monitor and analyze transaction data.</li>
                  </>
                )}
                {index === 1 && (
                  <>
                    <li>✓ Customizable and Dynamic - Integrate NFTs with tailored business logic.</li>
                    <li>✓ Cost-Efficient - Reduce minting costs by up to 8x.</li>
                    <li>✓ User-Friendly - Easy-to-use NFT management tools.</li>
                  </>
                )}
                {index === 2 && (
                  <>
                    <li>✓ Seamless Sign-In - Log in with familiar Web2 credentials.</li>
                    <li>✓ Secure & Private - Zero-knowledge technology.</li>
                    <li>✓ Full Control - Customize identity solutions for your app.</li>
                  </>
                )}
              </ul>
              <p className="mt-6 text-gray-400 text-sm flex justify-center items-center">
                {index === 0 && <a href="#" className="text-gray-400 hover:text-gray-300">Learn more about API Access →</a>}
                {index === 1 && <a href="#" className="text-gray-400 hover:text-gray-300">Learn more about NFT Studio →</a>}
                {index === 2 && <a href="#" className="text-gray-400 hover:text-gray-300">Learn more about Identity Solutions →</a>}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Aptos Section */}
      <section id="about" className="p-10">
        <h2 className="text-xl font-bold uppercase text-gray-400 flex items-center gap-2">
          About Aptos <FaArrowRight />
        </h2>
        {/* <h3>The Blockchain for Builders</h3> */}
        <div className="grid md:grid-cols-2 gap-6 items-center mt-6">
          {/* Left Side - Heading */}
          <h3 className="text-2xl font-semibold">Industry Leading Performance:</h3>
          {/* Right Side - Text */}
          <div className="text-gray-300 text-lg space-y-4">
            <p>With a peak of 30,000 transactions per second paired with 99.99% uptime, Aptos is the fastest and most reliable network.</p>
          </div>
        </div>
        <div className="border-b border-gray-700 my-6"></div>

        <div className="grid md:grid-cols-2 gap-6 items-center mt-6">
          {/* Left Side - Heading */}
          <h3 className="text-2xl font-semibold">Secure by Default</h3>
          {/* Right Side - Text */}
          <div className="text-gray-300 text-lg space-y-4">
            <p>The Move programming language is simple by design, allowing for easy decompilation, runtime verification, and code inspection.</p>
          </div>
        </div>
        <div className="border-b border-gray-700 my-6"></div>

        <div className="grid md:grid-cols-2 gap-6 items-center mt-6">
          {/* Left Side - Heading */}
          <h3 className="text-2xl font-semibold">Lowest Fees on any Chain</h3>
          {/* Right Side - Text */}
          <div className="text-gray-300 text-lg space-y-4">
            <p>Gas fees on Aptos are up to 100x lower than other Layer-1 chains—so low, you won’t mind covering them.</p>
          </div>
        </div>
        <div className="border-b border-gray-700 my-6"></div>
      </section>

       {/* Use Cases Section */}
<section id="use-cases" className="p-10 text-center">
  <h2 className="text-xl font-bold uppercase border-b border-gray-700 pb-2 text-gray-400 flex">
    Use Cases <FaArrowRight className="ml-2" />
  </h2>
  <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
    Level Up Your Games<br />
    Transform your games into thriving player-driven ecosystems that boost engagement and monetization. Aptos Build provides tools and infrastructure tailored to meet the needs of modern game studios.
  </p>

  {/* Use Case Boxes */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
    <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80 h-60 text-center relative top-40">
      <h3 className="text-lg font-bold text-white">NFT Studio</h3>
      <p className="text-gray-300 mt-2">
        Enable dynamic, evolving NFTs that reflect players' in-game achievements. Your players can control, trade, and upgrade their in-game assets, providing a sense of ownership that drives engagement and retention.
      </p>
    </div>
    <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80 h-60 text-center">
      <h3 className="text-lg font-bold text-white">Identity Solutions</h3>
      <p className="text-gray-300 mt-2">
        Provide gamers with seamless Web2 social login experiences across mobile and desktop.
      </p>
    </div>
    <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80 h-60 text-center relative top-40">
      <h3 className="text-lg font-bold text-white">API Access</h3>
      <p className="text-gray-300 mt-2">
        Our seamless API integration allows you to build and scale games without the complexities of blockchain management.
      </p>
    </div>
  </div>
</section>



    </div>
  );
}
