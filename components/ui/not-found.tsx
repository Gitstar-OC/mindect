// import { useState } from 'react'
// // import { Button } from "@/components/ui/button"
// import { Brain, Search, Home } from "lucide-react"
// import Link from 'next/link'

// export default function NotFound() {
//   const [searchQuery, setSearchQuery] = useState('')

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Implement your search functionality here
//     console.log('Searching for:', searchQuery)
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center px-4">
//       <div className="max-w-4xl w-full space-y-8 text-center">
//         <div className="space-y-4 relative">
//           <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2">
//             <div className="relative w-48 h-48">
//               <div className="absolute inset-0 bg-gray-300 rounded-full animate-pulse"></div>
//               <div className="absolute inset-2 bg-white rounded-full"></div>
//               <div className="absolute left-1/4 top-1/4 w-4 h-4 bg-black rounded-full"></div>
//               <div className="absolute right-1/4 top-1/4 w-4 h-4 bg-black rounded-full"></div>
//               <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-8 h-8 border-4 border-black rounded-full border-t-transparent animate-spin"></div>
//             </div>
//           </div>
//           <Brain className="mx-auto h-24 w-24 text-primary" />
//           <h1 className="text-4xl font-bold text-gray-900">
//             <span className="inline-block animate-bounce">4</span>
//             <span className="inline-block animate-bounce animation-delay-200">0</span>
//             <span className="inline-block animate-bounce animation-delay-400">4</span>
//           </h1>
//           <h2 className="text-2xl font-semibold text-gray-800">Neural Network Disconnected</h2>
//           <p className="text-xl text-gray-600">
//             Oops! It seems our AI couldn't find the page you're looking for. Let's retrain our model!
//           </p>
//         </div>
//         <div className="mt-8 space-y-4">
//           <Link href="/" passHref>
//             <Button className="w-full sm:w-auto">
//               <Home className="mr-2 h-4 w-4" />
//               Return to Homepage
//             </Button>
//           </Link>
//           <div className="relative">
//             <form onSubmit={handleSearch}>
//               <Input
//                 type="text"
//                 placeholder="Search for ML topics..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2"
//               />
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//             </form>
//           </div>
//         </div>
//         <div className="mt-8">
//           <p className="text-sm text-gray-500">
//             Popular topics: Neural Networks, Deep Learning, Computer Vision, Natural Language Processing
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }