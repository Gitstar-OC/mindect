import Link from "next/link";

const Footer = () => {
    return (
        <footer className="py-12 bg-white xl:pt-24 dark:bg-black">
    <div className="w-full px-4 mx-auto max-w-8xl">
        <div className="grid gap-8 xl:grid-cols-5 xl:gap-24">
            <div className="col-span-2 lg:ml-6">
                <a href="{{ .Site.Params.homepage }}/" className="flex mb-5">
                    <img src="/TransparentLogo.png" className="h-8 mr-3" alt="Mindect Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mindect</span>
                </a>
                <p className="max-w-lg mb-3 text-gray-600 dark:text-gray-400">Mindect is a collection of various notes and resources made for people to learn Machine Learning, AI, Training Algorithms, Machine Learning Libraries along with Python and Mathematics. </p>
                <p className="max-w-lg text-gray-600 dark:text-gray-400">Code licensed <a href="https://github.com/gitstar-oc/mindect/blob/main/LICENSE.md" className="text-blue-600 dark:text-blue-500 hover:underline" rel="nofollow">MIT</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/" className="text-blue-600 hover:underline dark:text-blue-500" rel="nofollow">CC BY 3.0</a>.</p>
                <p className="max-w-lg text-gray-600 dark:text-gray-400  mt-2"> Credits - <a href="https://deeplearning.ai" className="text-blue-600 dark:text-blue-500 hover:underline"  target="_blank" >DeepLearningAI</a> </p>
            </div>
            <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Support</h3>
                <ul>docs
                    
                    <li className="mb-4">
                        <a href="https://github.com/gitstar-oc/mindect" target="_blank"
                            className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Contribute</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://github.com/gitstar-oc/mindect"  target="_blank"
                            className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Sponsor</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Learn</h3>
                <ul>
                    <li className="mb-4 ">
                        <Link href="/learn/sl" 
                            className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Supervised Learning </Link>
                            
                    </li>
                    <li className="mb-4">
                        <Link href="/learn/usl"
                            className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Unsupervised Learning</Link>
                    </li>
                    <li className="mb-4 flex items-center ">
                        <Link href="/learn/algs"
                            className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Learning Algorithms</Link>
                        {/* <span className='bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-2'>
                        New
                        </span> */}
                    </li>
                </ul>
            </div>
            {/* <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Follow</h3>
                <ul>
                    <li className="mb-4">
                        <a href="https://github.com/themesberg/mindect.verce.app"
                            className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Github</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://twitter.com/zoltanszogyenyi" rel="noreferrer nofollow"
                            className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">Twitter/X</a>
                    </li>
                    <li className="mb-4">
                        <a href="https://www.linkedin.com/in/zoltanszogyenyi/" rel="noreferrer nofollow"
                            className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline">LinkedIn</a>
                    </li>
                </ul>
            </div> */}
            <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Coming Soon</h3>
                <ul className="pointer-events-none">
                    <li className="mb-4">
                        <p className="font-medium text-gray-600 dark:text-gray-400 group relative ">Calculus</p>
                    </li>
                    <li className="mb-4">
                        <p className="font-medium text-gray-600 dark:text-gray-400 ">Probability</p> 
                    </li>
                    <li className="mb-4">
                        <p
                            className="font-medium text-gray-600 dark:text-gray-400">Linear Algebra</p>
                    </li>
                </ul>
            </div>
        </div>
        <hr className="my-8 border-gray-200 dark:border-gray-700 lg:my-12" />
        <span className="block text-center text-gray-600 dark:text-gray-400 font-">© <span id="currentYear">2024</span> <a href="/">Mindect™</a> is a registered trademark. All Rights Reserved.
        </span>
    </div>
</footer>) 

}

export default Footer;