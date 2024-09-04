// // // 'use client'

// // // import React, { useState, useEffect } from 'react';
// // // import { ChevronRight, Home, Folder, File, ChevronLeft } from 'lucide-react';
// // // import styles from './HomePage.module.css';

// // // const HomePage = ({ categorizedUrls }) => {
// // //   const [activeTab, setActiveTab] = useState('overview');
// // //   const [currentSlide, setCurrentSlide] = useState(0);

// // //   // Placeholder data for featured content
// // //   const featuredContent = [
// // //     { title: "Featured Article 1", image: "/api/placeholder/800/400", description: "Description of featured article 1" },
// // //     { title: "Featured Article 2", image: "/api/placeholder/800/400", description: "Description of featured article 2" },
// // //     { title: "Featured Article 3", image: "/api/placeholder/800/400", description: "Description of featured article 3" },
// // //   ];

// // //   useEffect(() => {
// // //     const timer = setInterval(() => {
// // //       setCurrentSlide((prevSlide) => (prevSlide + 1) % featuredContent.length);
// // //     }, 5000);
// // //     return () => clearInterval(timer);
// // //   }, []);

// // //   const CategoryCard = ({ title, urls }) => (
// // //     <div className={styles.categoryCard}>
// // //       <h3 className={styles.cardTitle}>{title}</h3>
// // //       <ul className={styles.cardList}>
// // //         {urls.slice(0, 5).map((url, index) => (
// // //           <li key={index} className={styles.cardListItem}>
// // //             <ChevronRight className={styles.icon} />
// // //             <a href={url} className={styles.pageLink}>
// // //               {url.split('/').pop() || url}
// // //             </a>
// // //           </li>
// // //         ))}
// // //         {urls.length > 5 && (
// // //           <li className={styles.moreIndicator}>
// // //             and {urls.length - 5} more...
// // //           </li>
// // //         )}
// // //       </ul>
// // //     </div>
// // //   );

// // //   const ImageGallery = ({ images }) => (
// // //     <div className={styles.imageGallery}>
// // //       {images.map((image, index) => (
// // //         <div key={index} className={styles.galleryItem}>
// // //           <img src={image} alt={`Gallery image ${index + 1}`} className={styles.galleryImage} />
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );

// // //   return (
// // //     <div className={styles.container}>
// // //       <header className={styles.header}>
// // //         <h1 className={styles.title}>Welcome to My Site</h1>
// // //         <nav className={styles.nav}>
// // //           <button onClick={() => setActiveTab('overview')} className={`${styles.tabButton} ${activeTab === 'overview' ? styles.tabButtonActive : ''}`}>Overview</button>
// // //           <button onClick={() => setActiveTab('categories')} className={`${styles.tabButton} ${activeTab === 'categories' ? styles.tabButtonActive : ''}`}>Categories</button>
// // //           <button onClick={() => setActiveTab('all')} className={`${styles.tabButton} ${activeTab === 'all' ? styles.tabButtonActive : ''}`}>All Pages</button>
// // //         </nav>
// // //       </header>

// // //       <main className={styles.main}>
// // //         <section className={styles.heroSection}>
// // //           <div className={styles.slideshow}>
// // //             {featuredContent.map((content, index) => (
// // //               <div key={index} className={`${styles.slide} ${index === currentSlide ? styles.activeSlide : ''}`}>
// // //                 <img src={content.image} alt={content.title} className={styles.slideImage} />
// // //                 <div className={styles.slideContent}>
// // //                   <h2>{content.title}</h2>
// // //                   <p>{content.description}</p>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //             <button className={`${styles.slideButton} ${styles.prevButton}`} onClick={() => setCurrentSlide((currentSlide - 1 + featuredContent.length) % featuredContent.length)}>
// // //               <ChevronLeft />
// // //             </button>
// // //             <button className={`${styles.slideButton} ${styles.nextButton}`} onClick={() => setCurrentSlide((currentSlide + 1) % featuredContent.length)}>
// // //               <ChevronRight />
// // //             </button>
// // //           </div>
// // //         </section>

// // //         {activeTab === 'overview' && (
// // //           <section className={styles.overviewSection}>
// // //             <div className={styles.featuredCategories}>
// // //               <CategoryCard title="Main Pages" urls={categorizedUrls.main} />
// // //               {Object.entries(categorizedUrls.categories).slice(0, 2).map(([category, urls]) => (
// // //                 <CategoryCard key={category} title={category} urls={urls} />
// // //               ))}
// // //             </div>
// // //             <ImageGallery images={["/api/placeholder/300/200", "/api/placeholder/300/200", "/api/placeholder/300/200", "/api/placeholder/300/200"]} />
// // //           </section>
// // //         )}

// // //         {activeTab === 'categories' && (
// // //           <section className={styles.categoriesSection}>
// // //             <div className={styles.categoryGrid}>
// // //               {Object.entries(categorizedUrls.categories).map(([category, urls]) => (
// // //                 <CategoryCard key={category} title={category} urls={urls} />
// // //               ))}
// // //             </div>
// // //           </section>
// // //         )}

// // //         {activeTab === 'all' && (
// // //           <section className={styles.allPagesSection}>
// // //             <h2 className={styles.sectionTitle}>All Pages</h2>
// // //             <ul className={styles.pageGrid}>
// // //               {[...categorizedUrls.main, ...categorizedUrls.leaves, ...Object.values(categorizedUrls.categories).flat()].map((url, index) => (
// // //                 <li key={index} className={styles.pageGridItem}>
// // //                   {url.split('/').length === 2 ? (
// // //                     <Home className={styles.icon} />
// // //                   ) : url.split('/').length === 3 ? (
// // //                     <Folder className={styles.icon} />
// // //                   ) : (
// // //                     <File className={styles.icon} />
// // //                   )}
// // //                   <a href={url} className={styles.pageLink}>
// // //                     {url.split('/').pop() || url}
// // //                   </a>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </section>
// // //         )}
// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // export default HomePage;
// // 'use client'

// // import React, { useState, useEffect } from 'react';
// // import { ChevronRight, ChevronLeft } from 'lucide-react';
// // import styles from './HomePage.module.css';

// // const HomePage = ({ categorizedUrls }) => {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const allUrls = [...categorizedUrls.main, ...Object.values(categorizedUrls.categories).flat(), ...categorizedUrls.leaves];

// //   const heroUrls = allUrls.slice(0, 5);  // Use the first 5 URLs for the hero section
// //   const featuredUrls = allUrls.slice(5, 9);  // Use the next 4 URLs for featured stories

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrentSlide((prevSlide) => (prevSlide + 1) % heroUrls.length);
// //     }, 5000);
// //     return () => clearInterval(timer);
// //   }, [heroUrls.length]);

// //   const NewsCard = ({ url, size = 'medium' }) => {
// //     const title = url.split('/').pop() || url;
// //     return (
// //       <div className={`${styles.newsCard} ${styles[size]}`}>
// //         <img src={`/api/placeholder/800/600?text=${encodeURIComponent(title)}`} alt={title} className={styles.newsImage} />
// //         <h3 className={styles.newsTitle}>{title}</h3>
// //       </div>
// //     );
// //   };

// //   const CategorySection = ({ category, urls }) => (
// //     <section className={styles.categorySection}>
// //       <h2 className={styles.categoryTitle}>{category}</h2>
// //       <div className={styles.categoryGrid}>
// //         {urls.slice(0, 4).map((url, index) => (
// //           <NewsCard key={index} url={url} size="small" />
// //         ))}
// //       </div>
// //     </section>
// //   );

// //   return (
// //     <div className={styles.container}>
// //       <header className={styles.header}>
// //         <h1 className={styles.siteTitle}>My Dynamic Site</h1>
// //         <nav className={styles.nav}>
// //           {Object.keys(categorizedUrls.categories).map((category) => (
// //             <a key={category} href={`#${category}`} className={styles.navLink}>{category}</a>
// //           ))}
// //         </nav>
// //       </header>

// //       <main className={styles.main}>
// //         <section className={styles.heroSection}>
// //           {heroUrls.map((url, index) => (
// //             <div key={index} className={`${styles.heroSlide} ${index === currentSlide ? styles.activeSlide : ''}`}>
// //               <img src={`/api/placeholder/1200/600?text=${encodeURIComponent(url)}`} alt={url} className={styles.heroImage} />
// //               <div className={styles.heroContent}>
// //                 <h2 className={styles.heroTitle}>{url.split('/').pop() || url}</h2>
// //               </div>
// //             </div>
// //           ))}
// //           <button className={`${styles.slideButton} ${styles.prevButton}`} onClick={() => setCurrentSlide((currentSlide - 1 + heroUrls.length) % heroUrls.length)}>
// //             <ChevronLeft />
// //           </button>
// //           <button className={`${styles.slideButton} ${styles.nextButton}`} onClick={() => setCurrentSlide((currentSlide + 1) % heroUrls.length)}>
// //             <ChevronRight />
// //           </button>
// //         </section>

// //         <section className={styles.featuredSection}>
// //           {featuredUrls.map((url, index) => (
// //             <NewsCard key={index} url={url} size="medium" />
// //           ))}
// //         </section>

// //         <div className={styles.mainContent}>
// //           <div className={styles.primaryContent}>
// //             {Object.entries(categorizedUrls.categories).map(([category, urls]) => (
// //               <CategorySection key={category} category={category} urls={urls} />
// //             ))}
// //           </div>
// //           <aside className={styles.sidebar}>
// //             <h2 className={styles.sidebarTitle}>Latest Updates</h2>
// //             <ul className={styles.sidebarList}>
// //               {allUrls.slice(9, 19).map((url, index) => (
// //                 <li key={index} className={styles.sidebarItem}>
// //                   <a href={url} className={styles.sidebarLink}>{url.split('/').pop() || url}</a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </aside>
// //         </div>
// //       </main>

// //       <footer className={styles.footer}>
// //         <p>&copy; 2024 My Dynamic Site. All rights reserved.</p>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default HomePage;
// 'use client'

// import React, { useState, useEffect } from 'react';
// import { ChevronRight, ChevronLeft } from 'lucide-react';
// import styles from './HomePage.module.css';
// import { capitalizeWords } from '@/app/utils/utils-functions';

// const HomePage = ({ categorizedUrls }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const allUrls = [...categorizedUrls.main, ...Object.values(categorizedUrls.categories).flat(), ...categorizedUrls.leaves];

//   const heroUrls = allUrls.slice(0, 5);
//   const featuredUrls = allUrls.slice(5, 9);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % heroUrls.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [heroUrls.length]);

//   const NewsCard = ({ url, size = 'medium' }) => {
//     const title = capitalizeWords(url.split('/').pop() || url);
//     return (
//       <div className={`${styles.newsCard} ${styles[size]}`}>
//         <img src={`/api/placeholder/800/600?text=${encodeURIComponent(title)}`} alt={title} className={styles.newsImage} />
//         <h3 className={styles.newsTitle}>{title}</h3>
//       </div>
//     );
//   };

//   const CategorySection = ({ category, urls }) => (
//     <section className={styles.categorySection}>
//       <h2 className={styles.categoryTitle}>{capitalizeWords(category)}</h2>
//       <div className={styles.categoryGrid}>
//         {urls.slice(0, 4).map((url, index) => (
//           <NewsCard key={index} url={url} size="small" />
//         ))}
//       </div>
//     </section>
//   );

//   return (
//     <div className={styles.container}>
//       <header className={styles.header}>
//         <h1 className={styles.siteTitle}>My Dynamic Site</h1>
//         <nav className={styles.nav}>
//           {Object.keys(categorizedUrls.categories).map((category) => (
//             <a key={category} href={`#${category}`} className={styles.navLink}>
//               {capitalizeWords(category)}
//             </a>
//           ))}
//         </nav>
//       </header>

//       <main className={styles.main}>
//         <section className={styles.heroSection}>
//           {heroUrls.map((url, index) => (
//             <div key={index} className={`${styles.heroSlide} ${index === currentSlide ? styles.activeSlide : ''}`}>
//               <img src={`/api/placeholder/1200/600?text=${encodeURIComponent(capitalizeWords(url))}`} alt={url} className={styles.heroImage} />
//               <div className={styles.heroContent}>
//                 <h2 className={styles.heroTitle}>{capitalizeWords(url.split('/').pop() || url)}</h2>
//               </div>
//             </div>
//           ))}
//           <button className={`${styles.slideButton} ${styles.prevButton}`} onClick={() => setCurrentSlide((currentSlide - 1 + heroUrls.length) % heroUrls.length)}>
//             <ChevronLeft />
//           </button>
//           <button className={`${styles.slideButton} ${styles.nextButton}`} onClick={() => setCurrentSlide((currentSlide + 1) % heroUrls.length)}>
//             <ChevronRight />
//           </button>
//         </section>

//         <section className={styles.featuredSection}>
//           {featuredUrls.map((url, index) => (
//             <NewsCard key={index} url={url} size="medium" />
//           ))}
//         </section>

//         <div className={styles.mainContent}>
//           <div className={styles.primaryContent}>
//             {Object.entries(categorizedUrls.categories).map(([category, urls]) => (
//               <CategorySection key={category} category={category} urls={urls} />
//             ))}
//           </div>
//           <aside className={styles.sidebar}>
//             <h2 className={styles.sidebarTitle}>Latest Updates</h2>
//             <ul className={styles.sidebarList}>
//               {allUrls.slice(9, 19).map((url, index) => (
//                 <li key={index} className={styles.sidebarItem}>
//                   <a href={url} className={styles.sidebarLink}>
//                     {capitalizeWords(url.split('/').pop() || url)}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </aside>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <p>&copy; 2024 My Dynamic Site. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;
// 'use client'

// import React, { useState, useEffect } from 'react';
// import { ChevronRight, ChevronLeft, SquareChevronUp } from 'lucide-react';
// import styles from './HomePage.module.css';
// import { formatTitle , getImageUrl } from '@/app/utils/utils-functions';
// import Image from 'next/image';

// const HomePage = ({ categorizedUrls }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const allUrls = [...categorizedUrls.main, ...Object.values(categorizedUrls.categories).flat(), ...categorizedUrls.leaves];

//   const heroUrls = allUrls.slice(0, 5);
//   const featuredUrls = allUrls.slice(5, 9);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % heroUrls.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [heroUrls.length]);

// //   const formatTitle = (url) => {
// //     const title = url.split('/').pop() || url;
// //     return capitalizeWords(title.replaceAll('_', ' ').replaceAll('-', ' '));
// //   };

// //   const NewsCard = ({ url, size = 'medium' }) => {
// //     const title = formatTitle(url);
// //     return (
// //       <div className={`${styles.newsCard} ${styles[size]}`}>
// //         <img src={`/api/placeholder/800/600?text=${encodeURIComponent(title)}`} alt={title} className={styles.newsImage} />
// //         <h3 className={styles.newsTitle}>{title}</h3>
// //       </div>
// //     );
// //   };


// const NewsCard = ({ url, size = 'medium' }) => {
//     const title = formatTitle(url);
//     const imageUrl = getImageUrl(url);
  
//     return (
//       <div className={`${styles.newsCard} ${styles[size]}`}>
//         <div>
//         <ImageWithFallback 
//           src={imageUrl}
//           alt={title} 
//           className={styles.newsImage}
//           width={800}
//           height={600}
//         />
//         <p>Short Description</p>
//         </div>
//         <h3 className={styles.newsTitle}>{title}</h3>
//       </div>
//     );
//   };

// //   const CategorySection = ({ category, urls }) => (
// //     <section className={styles.categorySection} id={category}>
// //       <h2 className={styles.categoryTitle}>{formatTitle(category)}</h2>
// //       <div className={styles.categoryGrid}>
// //         {urls.slice(0, 4).map((url, index) => (
// //           <NewsCard key={index} url={url} size="small" />
// //         ))}
// //       </div>
// //     </section>
// //   );

// // const CategorySection = ({ category, urls }) => (
// //     <section className={styles.categorySection} id={category}>
// //         <br></br>
// //         <br></br>
       
// //       <h2 className={styles.categoryTitle}>{formatTitle(category)}</h2>
// //       <div className={styles.categoryGrid}>
// //         {urls.slice(0, 4).map((url, index) => (
// //           <div key={index} className={styles.categoryItem}>
// //             <img 
// //               src={`/api/placeholder/400/300?text=${encodeURIComponent(formatTitle(url))}`} 
// //               alt={formatTitle(url)} 
// //               className={styles.categoryImage} 
// //             />
// //             <div className={styles.categoryContent}>
// //               <h3 className={styles.categoryItemTitle}>{formatTitle(url)}</h3>
// //               <p className={styles.categoryItemDescription}>
// //                 This is a brief description of the {formatTitle(url)} page. You can add more details here.
// //               </p>
// //               <a href={url} className={styles.categoryItemLink}>Learn More</a>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );

// // const CategorySection = ({ category, urls }) => (
// //     <section className={styles.categorySection} id={category}>
// //       <h2 className={styles.categoryTitle}>{formatTitle(category)}</h2>
// //       <div className={styles.categoryGrid}>
// //         {urls.slice(0, 4).map((url, index) => {
// //           const imageUrl = getImageUrl(url);
// //           return (
// //             <div key={index} className={styles.categoryItem}>
// //               {imageUrl ? (
// //                 <Image 
// //                   src={imageUrl}
// //                   alt={formatTitle(url)} 
// //                   className={styles.categoryImage}
// //                   width={400}
// //                   height={300}
// //                 />
// //               ) : (
// //                 <div className={styles.placeholderImage}>No Image Available</div>
// //               )}
// //               <div className={styles.categoryContent}>
// //                 <h3 className={styles.categoryItemTitle}>{formatTitle(url)}</h3>
// //                 <p className={styles.categoryItemDescription}>
// //                   This is a brief description of the {formatTitle(url)} page. You can add more details here.
// //                 </p>
// //                 <a href={url} className={styles.categoryItemLink}>Learn More</a>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </section>
// //   );


// // const ImageWithFallback = ({ src, alt, ...props }) => {
// //     const [error, setError] = useState(false);
  
// //     if (error) {
// //       return <div className={styles.placeholderImage}>No Image Available</div>;
// //     }
  
// //     return (
// //       <Image 
// //         src={src} 
// //         alt={alt} 
// //         {...props} 
// //         onError={() => setError(true)}
// //       />
// //     );
// //   };

// const ImageWithFallback = ({ src, alt, ...props }) => {
//     const [error, setError] = useState(false);
//     const [loading, setLoading] = useState(true);
  
//     if (error) {
//       return <div className={styles.placeholderImage}>No Image Available</div>;
//     }
  
//     return (
//       <>
//         {loading && <div className={styles.placeholderImage}>Loading...</div>}
//         <Image 
//           src={src} 
//           alt={alt} 
//           {...props} 
//           onError={() => setError(true)}
//           onLoad={() => setLoading(false)}
//           style={{ display: loading ? 'none' : 'block' }}
//         />
//       </>
//     );
//   };
  
// //   const CategorySection = ({ category, urls }) => (
// //     <section className={styles.categorySection} id={category}>
// //       <h2 className={styles.categoryTitle}>{formatTitle(category)}</h2>
// //       <div className={styles.categoryGrid}>
// //         {urls.slice(0, 4).map((url, index) => {
// //           const imageUrl = getImageUrl(url);
// //           return (
// //             <div key={index} className={styles.categoryItem}>
// //               <ImageWithFallback 
// //                 src={imageUrl}
// //                 alt={formatTitle(url)} 
// //                 className={styles.categoryImage}
// //                 width={400}
// //                 height={300}
// //               />
// //               <div className={styles.categoryContent}>
// //                 <h3 className={styles.categoryItemTitle}>{formatTitle(url)}</h3>
// //                 <p className={styles.categoryItemDescription}>
// //                   This is a brief description of the {formatTitle(url)} page. You can add more details here.
// //                 </p>
// //                 <a href={url} className={styles.categoryItemLink}>Learn More</a>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </section>
// //   );
  

// const CategorySection = ({ category, urls }) => (
//     <section className={styles.categorySection} id={category}>
//         <br></br>
//         <br></br>
//         <br></br>
//       <h2 className={styles.categoryTitle}>{formatTitle(category)}</h2>
//       <div className={styles.categoryGrid}>
//         {urls.slice(0, 4).map((url, index) => {
//           const imageUrl = getImageUrl(url);
//           return (
//             <div key={index} className={styles.categoryItem}>
//               <ImageWithFallback 
//                 src={imageUrl}
//                 alt={formatTitle(url)} 
//                 className={styles.categoryImage}
//                 width={400}
//                 height={300}
//               />
//               <div className={styles.categoryContent}>
//                 <h3 className={styles.categoryItemTitle}>{formatTitle(url)}</h3>
//                 <p className={styles.categoryItemDescription}>
//                   This is a brief description of the {formatTitle(url)} page. You can add more details here.
//                 </p>
//                 <div className={styles.linksGroup}>
//                 <a href={url} className={styles.categoryItemLink}>Learn More</a>
//                 <a href={'#top'} className={styles.backToTop}>
//                 <svg width="24" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                  <path d="M6 15L12 9L18 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//                 </a>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
  

// return (
//     <div className={styles.container} id='top'>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//       <header className={styles.header}>
//         <h1 className={styles.siteTitle}>Mathematics Online Class</h1>
//         <nav className={styles.nav} >
//           {Object.keys(categorizedUrls.categories).map((category) => (
//             <a key={category} href={`#${category}`} className={styles.navLink}>
//               {formatTitle(category)}
//             </a>
//           ))}
//         </nav>
//       </header>

//       <main className={styles.main}>
//         <section className={styles.heroSection}>
//           {heroUrls.map((url, index) => (
//             <div key={index} className={`${styles.heroSlide} ${index === currentSlide ? styles.activeSlide : ''}`}>
//               <img src={`/api/placeholder/1200/600?text=${encodeURIComponent(formatTitle(url))}`} alt={formatTitle(url)} className={styles.heroImage} />
//               <div className={styles.heroContent}>
//                 <h2 className={styles.heroTitle}>{formatTitle(url)}</h2>
//               </div>
//             </div>
//           ))}
//           <button className={`${styles.slideButton} ${styles.prevButton}`} onClick={() => setCurrentSlide((currentSlide - 1 + heroUrls.length) % heroUrls.length)}>
//             <ChevronLeft />
//           </button>
//           <button className={`${styles.slideButton} ${styles.nextButton}`} onClick={() => setCurrentSlide((currentSlide + 1) % heroUrls.length)}>
//             <ChevronRight />
//           </button>
//         </section>

//         <section className={styles.featuredSection}>
//           {featuredUrls.map((url, index) => (
//             <NewsCard key={index} url={url} size="medium" />
//           ))}
//         </section>

//         <div className={styles.mainContent}>
//           <div className={styles.primaryContent}>
//             {Object.entries(categorizedUrls.categories).map(([category, urls]) => (
//               <CategorySection key={category} category={category} urls={urls} />
//             ))}
//           </div>
//           <aside className={styles.sidebar}>
//             <br></br>
//             <br></br>
//             <br></br>
//             <h2 className={styles.sidebarTitle}>Latest Updates</h2>
//             <ul className={styles.sidebarList}>
//               {allUrls.slice(9, 19).map((url, index) => (
//                 <li key={index} className={styles.sidebarItem}>
//                   <a href={url} className={styles.sidebarLink}>
//                     {formatTitle(url)}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </aside>
//         </div>
//       </main>

//       {/* <footer className={styles.footer}>
//         <p>&copy; 2024 My Dynamic Site. All rights reserved.</p>
//       </footer> */}
//     </div>
//   );
// };

// export default HomePage;
'use client'

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, SquareChevronUp,Book } from 'lucide-react';
import styles from './HomePage.module.css';
import { formatTitle } from '@/app/utils/utils-functions';
import Image from 'next/image';

const getImageUrl = (url) => {
  const path = url.replace(/^https?:\/\/[^\/]+/, '');
  let imageName = path.replace(/^\//, '').replace(/\//g, '_');
  if (!/\.(jpg|jpeg|png|gif|webp)$/i.test(imageName)) {
    imageName += '.jpg';
  }
  return `/images/${imageName}`;
};

const HomePage = ({ categorizedUrls ,metaDescriptions}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const allUrls = [...categorizedUrls.main, ...Object.values(categorizedUrls.categories).flat(), ...categorizedUrls.leaves];

  const heroUrls = allUrls.slice(0, 5);
  const featuredUrls = allUrls.slice(5, 9);


  useEffect(()=>{
    console.log('Meta Descriptions :  '  +metaDescriptions)
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroUrls.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroUrls.length]);

  // const NewsCard = ({ url, size = 'medium' }) => {
  //   const title = formatTitle(url);
  //   const imageUrl = getImageUrl(url);
  //   return (
  //     <div className={`${styles.newsCard} ${styles[size]}`}>
        
  //         {/* <Image 
  //           src={imageUrl}
  //           alt={title} 
  //           className={styles.newsImage}
  //           width={800}
  //           height={600}
  //           loading="lazy"
  //         /> */}
  //          <h3 className={styles.newsTitle}>{title}</h3>
  //         <p> {metaDescriptions[url] || 'No description available at the Moment'}</p>
       
       
  //     </div>
  //   );
  // };


  const NewsCard = ({ url, size = 'medium' }) => {
    const title = formatTitle(url);
    return (
      <div className={`${styles.newsCard} ${styles[size]}`}>
        <div className={styles.newsCardHeader}>
          <div className={styles.newsCardIcon}>
            <Book />
          </div>
          <h3 className={styles.newsTitle}>{title}</h3>
        </div>
        <div className={styles.newsCardContent}>
          <p className={styles.newsDescription}>
            {metaDescriptions[url] || 'No description available at the Moment'}
          </p>
          <a href={url} className={styles.newsCardLink}>Learn More</a>
        </div>
      </div>
    );
  };
 
 
  // const NewsCard = ({ url, size = 'medium' }) => {
  //   const title = formatTitle(url);
  //   return (
  //     <div className={`${styles.newsCard} ${styles[size]}`}>
  //       <div className={styles.newsCardHeader}>
  //         <h3 className={styles.newsTitle}>{title}</h3>
  //       </div>
  //       <div className={styles.newsCardContent}>
  //         <p className={styles.newsDescription}>
  //           {metaDescriptions[url] || 'No description available at the moment. Check back later for updates on this topic.'}
  //         </p>
  //         <a href={url} className={styles.newsCardLink}>Learn More</a>
  //       </div>
  //     </div>
  //   );
  // };
 
 
  const CategorySection = ({ category, urls }) => (
    <section className={styles.categorySection} id={category}>
      <br></br>
      <br></br>
      <br></br>
      <h2 className={styles.categoryTitle}>{formatTitle(category)}</h2>
      <div className={styles.categoryGrid}>
        {urls.slice(0, 4).map((url, index) => (
          <div key={index} className={styles.categoryItem}>
            <Image 
              src={getImageUrl(url)}
              alt={formatTitle(url)} 
              className={styles.categoryImage}
              width={400}
              height={300}
              loading="lazy"
            />
            <div className={styles.categoryContent}>
              <h3 className={styles.categoryItemTitle}>{formatTitle(url)}</h3>
              <p className={styles.categoryItemDescription}>
               {metaDescriptions[url]?.content || 'No description available at the Moment'}
              </p>
              <div className={styles.linksGroup}>
                <a href={url} className={styles.categoryItemLink}>Learn More</a>
                <a href={'#top'} className={styles.backToTop}>
                  <svg width="24" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 15L12 9L18 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className={styles.container} id='top'>
      <br></br>
      <br></br>
      <br></br>
      <header className={styles.header}>
        <h1 className={styles.siteTitle}>Learn Mathematics Online</h1>
        <nav className={styles.nav} >
          {Object.keys(categorizedUrls.categories).map((category) => (
            <a key={category} href={`#${category}`} className={styles.navLink}>
              {formatTitle(category)}
            </a>
          ))}
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.heroSection}>
          {heroUrls.map((url, index) => (
            <div key={index} className={`${styles.heroSlide} ${index === currentSlide ? styles.activeSlide : ''}`}>
              <Image 
                src={getImageUrl(url)}
                alt={formatTitle(url)}
                className={styles.heroImage}
                width={1000}
                height={500}
                loading='lazy'
              />
              <div className={styles.heroContent}>
                <h2 className={styles.heroTitle}>{formatTitle(url)}</h2>
              </div>
            </div>
          ))}
          <button className={`${styles.slideButton} ${styles.prevButton}`} onClick={() => setCurrentSlide((currentSlide - 1 + heroUrls.length) % heroUrls.length)}>
            <ChevronLeft />
          </button>
          <button className={`${styles.slideButton} ${styles.nextButton}`} onClick={() => setCurrentSlide((currentSlide + 1) % heroUrls.length)}>
            <ChevronRight />
          </button>
        </section>

        <section className={styles.featuredSection}>
          {featuredUrls.map((url, index) => (
            <NewsCard key={index} url={url} size="medium" />
          ))}
        </section>

        <div className={styles.mainContent}>
          <div className={styles.primaryContent}>
            {Object.entries(categorizedUrls.categories).map(([category, urls]) => (
              <CategorySection key={category} category={category} urls={urls} />
            ))}
          </div>
          <aside className={styles.sidebar}>
            <br></br>
            <br></br>
            <br></br>
            <h2 className={styles.sidebarTitle}>Latest Updates</h2>
            <ul className={styles.sidebarList}>
              {allUrls.slice(9, 19).map((url, index) => (
                <li key={index} className={styles.sidebarItem}>
                  <a href={url} className={styles.sidebarLink}>
                    {formatTitle(url)}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
