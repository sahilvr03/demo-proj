import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center px-8 py-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold">[ Kadeshchain ]</span>
          <span className="text-xs bg-gray-700 px-2 py-1 rounded">BETA</span>
        </div>
        <div className="ml-auto flex gap-6 text-sm items-center">
          <a href="#products" className="hover:text-gray-400">Products</a>
          <a href="#about" className="hover:text-gray-400">About Kadeshchain</a>
          <a href="#use-cases" className="hover:text-gray-400">Use Cases</a>
          <button className="bg-gray-700 px-4 py-2 rounded text-sm">SIGN UP / LOG IN</button>
        </div>
      </nav>

      <br />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center p-16">
        <h1 className="text-5xl md:text-6xl font-bold uppercase leading-tight">
          The Essential Toolkit for Every kadeshchain Developer
        </h1>
        <br />
        <p className="max-w-2xl mt-4 text-gray-300 text-xl">
          kadeshchain Build offers a robust, easy-to-use suite of tools for developers to create, test, and launch dApps on Kadeshchain.
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
          About kadeshchain <FaArrowRight />
        </h2>
        {/* <h3>The Blockchain for Builders</h3> */}
        <div className="grid md:grid-cols-2 gap-6 items-center mt-6">
          {/* Left Side - Heading */}
          <h3 className="text-2xl font-semibold">Industry Leading Performance:</h3>
          {/* Right Side - Text */}
          <div className="text-gray-300 text-lg space-y-4">
            <p>With a peak of 30,000 transactions per second paired with 99.99% uptime, kadeshchain is the fastest and most reliable network.</p>
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
            <p>Gas fees on kadeshchain are up to 100x lower than other Layer-1 chains—so low, you won’t mind covering them.</p>
          </div>
        </div>
        <div className="border-b border-gray-700 my-6"></div>
      </section>

       {/* Use Cases Section */}
       <section id="use-cases" className="p-10 text-center">
  <h2 className="text-xl font-bold uppercase border-b border-gray-700 pb-2 text-gray-400 flex">
    Use Cases <FaArrowRight className="ml-2" />
  </h2>
  <h2 className="text-white-300 text-3xl mt-10 max-w-7xl mx-auto">Level Up Your Games </h2>

  <p className="text-gray-300 text-xlg mt-6 max-w-4xl mx-auto">
    Transform your games into thriving player-driven ecosystems that boost engagement and monetization. Aptos Build provides tools and infrastructure tailored to meet the needs of modern game studios.
  </p>

  {/* First Use Case Boxes */}
  <div className="flex flex-col items-center gap-8 mt-10">
    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80 h-60 text-center relative top-80">
        <h3 className="text-lg font-bold text-white">NFT Studio</h3>
        <p className="text-gray-300 mt-2">
          Enable dynamic, evolving NFTs that reflect players' in-game achievements. Your players can control, trade, and upgrade their in-game assets, providing a sense of ownership that drives engagement and retention.
        </p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80 h-60 text-center relative">
        <h3 className="text-lg font-bold text-white">Identity Solutions</h3>
        <p className="text-gray-300 mt-2">
          Provide gamers with seamless Web2 social login experiences across mobile and desktop.
        </p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80 h-60 text-center relative top-80">
        <h3 className="text-lg font-bold text-white">API Access</h3>
        <p className="text-gray-300 mt-2">
          Our seamless API integration allows you to build and scale games without the complexities of blockchain management.
        </p>
      </div>
    </div>

    {/* Centered Image Below First Identity Solutions */}
    <div className="flex justify-center">
      <Image 
        src={`/icons/lvlup.png`} 
        alt="icon" 
        width={450} 
        height={450} 
        className="mt-4"
      />
    </div>
  </div>

  {/* Second Use Case */}
  <h2 className="text-white-300 text-3xl mt-10 max-w-7xl mx-auto">Boost Loyalty Programs</h2>

  <p className="text-gray-300 text-xlg mt-10 max-w-4xl mx-auto">
    Imagine a loyalty program where customers are more engaged with your brand than ever before. With Aptos Build, you can seamlessly integrate blockchain technology to create dynamic and secure loyalty solutions that are easy to manage and scale to drive customer retention and satisfaction.
  </p>

  {/* Second Use Case Boxes */}
  <div className="flex flex-col items-center gap-8 mt-10">
    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80 h-60 text-center relative top-80">
        <h3 className="text-lg font-bold text-white">NFT Studio</h3>
        <p className="text-gray-300 mt-2">
          Transform traditional loyalty rewards with customizable NFTs that adapt to customer behavior. Enhance engagement through deep insights and integrated data analytics, allowing you to tailor rewards to each customer.
        </p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80 h-60 text-center relative">
        <h3 className="text-lg font-bold text-white">Identity Solutions</h3>
        <p className="text-gray-300 mt-2">
          Onboard users to your loyalty program seamlessly, with familiar Web2 logins and no abstract concepts.
        </p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80 h-60 text-center relative top-80">
        <h3 className="text-lg font-bold text-white">API Access</h3>
        <p className="text-gray-300 mt-2">
          Power your loyalty program with the underlying infrastructure to generate and manage API keys, ensuring seamless and scalable integration.
        </p>
      </div>
    </div>

    {/* Centered Image Below Second Identity Solutions */}
    <div className="flex justify-center">
      <Image 
        src={`/icons/boost.png`} 
        alt="icon" 
        width={150} 
        height={60} 
        className="mt-4"
      />
    </div>
  </div>
</section>
<footer className="bg-gray-900 text-gray-400 py-6 mt-16">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
    
    {/* Left Side - Aptos Labs */}
    <div className="text-lg font-semibold">kadeshchain Labs</div>

    {/* Center Links */}
    <div className="flex space-x-6 mt-4 md:mt-0">
      <a href="#" className="hover:text-white">Privacy</a>
      <a href="#" className="hover:text-white">Terms</a>
      <a href="#" className="hover:text-white">Content Policy</a>
    </div>

  </div>
</footer>


    </div>
  );
}
