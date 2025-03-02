// /** @type {import('next').NextConfig} */
// const nextConfig = {

//       webpack: (config, { isServer }) => {
//             if (!isServer) {
//               config.resolve.fallback.fs = false;
//             }
//             return config;
//           },
        
    
//       }


// module.exports = nextConfig


// // next.config.js
// // module.exports = {
// //     webpackDevMiddleware: (config) => {
// //       config.watchOptions = {
// //         poll: 1000, // Check for changes every 1 second (adjust as needed)
// //       };
// //       config.devServer = {
// //         // Specify the desired port (e.g., 3001)
// //         port: 3001,
// //       };
// //       return config;
// //     },
// //   };
// //   /**
// //  * @type {import('next').NextConfig}
// //  */
// // const nextConfig = {
// //     /* config options here */
// //     webpackDevMiddleware: (config) => {
// //         config.watchOptions = {
// //           poll: 1000, // Check for changes every 1 second (adjust as needed)
// //         };
// //         config.devServer = {
// //           // Specify the desired port (e.g., 3001)
// //           port: 3001,
// //         };
// //         return config;
// //       },}
   
// //   module.exports = nextConfig
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback.fs = false;
//     }
//     return config;
//   },
//   // Ensure that Next.js serves files from the public folder
//   async rewrites() {
//     return [];
//   },

  
// }

// module.exports = nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  
  // Ensure that Next.js serves files from the public folder
  async rewrites() {
    return [];
  },

  // Image optimization settings
  images: {
    domains: ['www.learnmathclass.com', 'learnmathclass.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.learnmathclass.com',
      },
    ],
  },

  // Modern font optimization is now enabled by default in App Router
  experimental: {
    // Add any experimental features you need
  }
}

module.exports = nextConfig