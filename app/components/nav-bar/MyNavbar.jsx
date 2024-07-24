// // // // 'use client'
// // // // import React,{useEffect} from 'react'
// // // // import './MyNavbar.css'
// // // // import Link from 'next/link';

// // // // function MyNavbar() {

// // // //   useEffect(()=>{
// // // //     const nav = document.querySelector('.nav');

// // // // window.addEventListener('scroll', fixNav);

// // // // function fixNav(){
// // // //   if(window.scrollY > nav.offsetHeight + 150){
// // // //     nav.classList.add('active');
// // // //   }else{
// // // //     nav.classList.remove('active');
// // // //   }
// // // // }

// // // //   },[]);

// // // //   const navigateBack = () => {
// // // //     window.history.back();
// // // //   };
// // // //   return (
// // // //     <>
// // // //     <nav className="nav">
// // // //   <div className="container">
// // // //     {/* <h1 class="logo"><a href="#">My website</a></h1> */}
// // // //     <ul>
// // // //       <li><Link href="/">Home</Link></li>
// // // //       <li><Link href="/tables">Tables</Link></li>
// // // //       <li><Link href="/keyboard">Mathematical Keyboard</Link></li>
// // // //       <li><Link href="/sequences/prime-numbers">Prime Numbers</Link></li>
// // // //       <li><Link href="/sequences/fibonacci-numbers">Fibonacci Numbers</Link></li>
// // // //       <li><Link href="/logic/truth-tables">Truth Tables Generator</Link></li>
// // // //       <li><Link href="/visual-tools/matrix-multiplication">Matrix Multiplication</Link></li>
// // // //       <li onClick={navigateBack} style={{cursor:'pointer'}}><a>Go Back</a></li>
     
      

// // // //     </ul>
// // // //   </div>
// // // // </nav>

// // // // {/* <div class="hero">
// // // //   <div class="container">
// // // //     <h1>Welcome to our website</h1>
// // // //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, repudiandae.</p>
// // // //   </div>
// // // // </div>

// // // // <section class="container content">
// // // //   <h2>content 1</h2>
// // // //   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, animi sunt! Libero optio, asperiores quis ipsa eum eveniet labore nihil expedita nostrum laborum dicta at deleniti sapiente atque assumenda quo corrupti exercitationem animi minus nemo vero soluta alias perspiciatis! Aspernatur, laborum consectetur repellat repellendus aliquam sed. Cupiditate accusantium porro at quae, maxime itaque accusamus! Ipsam tempore, illo similique officia neque asperiores eveniet omnis rem veritatis cumque quos amet placeat dignissimos quisquam nesciunt quas. Adipisci perspiciatis veniam, voluptatibus dolores doloremque quisquam qui possimus, vero ab dolorum temporibus soluta libero similique assumenda debitis dolorem ut perferendis incidunt nobis facere eaque. Enim, nemo?</p>
// // // //   <h3>content 2</h3>
// // // //   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, animi sunt! Libero optio, asperiores quis ipsa eum eveniet labore nihil expedita nostrum laborum dicta at deleniti sapiente atque assumenda quo corrupti exercitationem animi minus nemo vero soluta alias perspiciatis! Aspernatur, laborum consectetur repellat repellendus aliquam sed. Cupiditate accusantium porro at quae, maxime itaque accusamus! Ipsam tempore, illo similique officia neque asperiores eveniet omnis rem veritatis cumque quos amet placeat dignissimos quisquam nesciunt quas. Adipisci perspiciatis veniam, voluptatibus dolores doloremque quisquam qui possimus, vero ab dolorum temporibus soluta libero similique assumenda debitis dolorem ut perferendis incidunt nobis facere eaque. Enim, nemo?</p>
// // // // </section> */}
// // // //     </>
// // // //   )
// // // // }

// // // // export default MyNavbar
// // // 'use client'
// // // import React, { useState, useEffect } from 'react'
// // // import './MyNavbar.css'
// // // import Link from 'next/link';

// // // function MyNavbar() {
// // //   const [isNavExpanded, setIsNavExpanded] = useState(false)

// // //   useEffect(() => {
// // //     const nav = document.querySelector('.nav');
// // //     window.addEventListener('scroll', fixNav);

// // //     function fixNav() {
// // //       if (window.scrollY > nav.offsetHeight + 150) {
// // //         nav.classList.add('active');
// // //       } else {
// // //         nav.classList.remove('active');
// // //       }
// // //     }

// // //     return () => {
// // //       window.removeEventListener('scroll', fixNav);
// // //     };
// // //   }, []);

// // //   const navigateBack = () => {
// // //     window.history.back();
// // //   };

// // //   return (
// // //     <>
// // //       <nav className="nav">
// // //         <div className="container">
// // //           <button 
// // //             className="hamburger"
// // //             onClick={() => setIsNavExpanded(!isNavExpanded)}
// // //           >
// // //             ☰
// // //           </button>
// // //           <ul className={isNavExpanded ? "expanded" : ""}>
// // //             <li><Link href="/">Home</Link></li>
// // //             <li><Link href="/tables">Tables</Link></li>
// // //             <li><Link href="/keyboard">Mathematical Keyboard</Link></li>
// // //             <li><Link href="/sequences/prime-numbers">Prime Numbers</Link></li>
// // //             <li><Link href="/sequences/fibonacci-numbers">Fibonacci Numbers</Link></li>
// // //             <li><Link href="/logic/truth-tables">Truth Tables Generator</Link></li>
// // //             <li><Link href="/visual-tools/matrix-multiplication">Matrix Multiplication</Link></li>
// // //             <li><Link href="/visual-tools/gauss-elimination">Gaussian Elimination </Link></li>
// // //             <li onClick={navigateBack} style={{cursor:'pointer'}}><a>Go Back</a></li>
// // //           </ul>
// // //         </div>
// // //       </nav>
// // //     </>
// // //   )
// // // }

// // // export default MyNavbar
// // 'use client'
// // import React, { useState, useEffect } from 'react'
// // import './MyNavbar.css'
// // import Link from 'next/link';

// // function MyNavbar() {
// //   const [isNavExpanded, setIsNavExpanded] = useState(false)
// //   const [openDropdown, setOpenDropdown] = useState(null)

// //   useEffect(() => {
// //     const nav = document.querySelector('.nav');
// //     const handleScroll = () => {
// //       if (window.scrollY > nav.offsetHeight + 150) {
// //         nav.classList.add('active');
// //       } else {
// //         nav.classList.remove('active');
// //       }
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const toggleDropdown = (dropdown) => {
// //     setOpenDropdown(openDropdown === dropdown ? null : dropdown);
// //   };

// //   return (
// //     <nav className="nav">
// //       <div className="container">
// //         <button className="hamburger" onClick={() => setIsNavExpanded(!isNavExpanded)}>
// //           ☰
// //         </button>
// //         <ul className={isNavExpanded ? "expanded" : ""}>
// //           <li><Link href="/">Home</Link></li>
// //           <li><Link href="/tables">Tables</Link></li>
// //           <li><Link href="/keyboard">Mathematical Keyboard</Link></li>
// //           <li className="dropdown">
// //             <a onClick={() => toggleDropdown('sequences')}>Sequences</a>
// //             {openDropdown === 'sequences' && (
// //               <ul className="dropdown-menu">
// //                 <li><Link href="/sequences/prime-numbers">Prime Numbers</Link></li>
// //                 <li><Link href="/sequences/fibonacci-numbers">Fibonacci Numbers</Link></li>
// //               </ul>
// //             )}
// //           </li>
// //           <li><Link href="/logic/truth-tables">Truth Tables Generator</Link></li>
// //           <li className="dropdown">
// //             <a onClick={() => toggleDropdown('visual-tools')}>Visual Tools</a>
// //             {openDropdown === 'visual-tools' && (
// //               <ul className="dropdown-menu">
// //                 <li><Link href="/visual-tools/matrix-multiplication">Matrix Multiplication</Link></li>
// //                 <li><Link href="/visual-tools/gauss-elimination">Gaussian Elimination</Link></li>
// //               </ul>
// //             )}
// //           </li>
// //           <li onClick={() => window.history.back()} style={{cursor:'pointer'}}><a>Go Back</a></li>
// //         </ul>
// //       </div>
// //     </nav>
// //   )
// // }

// // export default MyNavbar
// 'use client'
// import React, { useState } from 'react'
// import './MyNavbar.css'
// import Link from 'next/link';

// function MyNavbar() {
//   const [isNavExpanded, setIsNavExpanded] = useState(false)

//   return (
//     <nav className="nav">
//       <div className="container">
//         <button className="hamburger" onClick={() => setIsNavExpanded(!isNavExpanded)}>
//           ☰
//         </button>
//         <ul className={isNavExpanded ? "expanded" : ""}>
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/tables">Tables</Link></li>
//           <li><Link href="/keyboard">Mathematical Keyboard</Link></li>
//           <li className="dropdown">
//             <span>Sequences</span>
//             <ul className="dropdown-menu">
//               <li><Link href="/sequences/prime-numbers">Prime Numbers</Link></li>
//               <li><Link href="/sequences/fibonacci-numbers">Fibonacci Numbers</Link></li>
//             </ul>
//           </li>
//           <li><Link href="/logic/truth-tables">Truth Tables Generator</Link></li>
//           <li className="dropdown">
//             <span>Visual Tools</span>
//             <ul className="dropdown-menu">
//               <li><Link href="/visual-tools/matrix-multiplication">Matrix Multiplication</Link></li>
//               <li><Link href="/visual-tools/gauss-elimination">Gaussian Elimination</Link></li>
//             </ul>
//           </li>
//           <li onClick={() => window.history.back()} style={{cursor:'pointer'}}><span>Go Back</span></li>
//         </ul>
//       </div>
//     </nav>
//   )
// }

// export default MyNavbar

// 'use client'
// import React, { useState, useEffect } from 'react'
// import './MyNavbar.css'
// import Link from 'next/link';

// function MyNavbar() {
//   const [isNavExpanded, setIsNavExpanded] = useState(false)

//   useEffect(() => {
//     const nav = document.querySelector('.nav');
//     window.addEventListener('scroll', fixNav);

//     function fixNav() {
//       if (window.scrollY > nav.offsetHeight + 150) {
//         nav.classList.add('active');
//       } else {
//         nav.classList.remove('active');
//       }
//     }

//     return () => {
//       window.removeEventListener('scroll', fixNav);
//     };
//   }, []);

//   const navigateBack = () => {
//     window.history.back();
//   };

//   return (
//     <>
//       <nav className="nav">
//         <div className="container">
//           <button 
//             className="hamburger"
//             onClick={() => setIsNavExpanded(!isNavExpanded)}
//           >
//             ☰
//           </button>
//           <ul className={isNavExpanded ? "expanded" : ""}>
//             <li><Link href="/">Home</Link></li>
//             <li><Link href="/tables">Tables</Link></li>
//             <li><Link href="/keyboard">Mathematical Keyboard</Link></li>
//             <li><Link href="/sequences/prime-numbers">Prime Numbers</Link></li>
//             <li><Link href="/sequences/fibonacci-numbers">Fibonacci Numbers</Link></li>
//             <li><Link href="/logic/truth-tables">Truth Tables Generator</Link></li>
//             <li><Link href="/visual-tools/matrix-multiplication">Matrix Multiplication</Link></li>
//             <li><Link href="/visual-tools/gauss-elimination">Gaussian Elimination </Link></li>
//             <li onClick={navigateBack} style={{cursor:'pointer'}}><a>Go Back</a></li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   )
// }

// export default MyNavbar
'use client'
import React, { useState, useEffect } from 'react'
import './MyNavbar.css'
import Link from 'next/link';

function MyNavbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [isSequencesExpanded, setIsSequencesExpanded] = useState(false)
  const [isVisualToolsExpanded, setIsVisualToolsExpanded] = useState(false)

  useEffect(() => {
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', fixNav);

    function fixNav() {
      if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
      } else {
        nav.classList.remove('active');
      }
    }

    return () => {
      window.removeEventListener('scroll', fixNav);
    };
  }, []);

  const navigateBack = () => {
    window.history.back();
  };

  return (
    <>
      <nav className="nav">
        <div className="container">
          <button
             className="hamburger"
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            ☰
          </button>
          <ul className={isNavExpanded ? "expanded" : ""}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/tables">Tables</Link></li>
            <li><Link href="/keyboard">Mathematical Keyboard</Link></li>
            <li>
              <a onClick={() => setIsSequencesExpanded(!isSequencesExpanded)}>Sequences ▼</a>
              {isSequencesExpanded && (
                <ul>
                  <li><Link href="/sequences/prime-numbers">Prime Numbers</Link></li>
                  <li><Link href="/sequences/fibonacci-numbers">Fibonacci Numbers</Link></li>
                </ul>
              )}
            </li>
            <li><Link href="/logic/truth-tables">Truth Tables Generator</Link></li>
            <li>
              <a onClick={() => setIsVisualToolsExpanded(!isVisualToolsExpanded)}>Visual Tools ▼</a>
              {isVisualToolsExpanded && (
                <ul>
                  <li><Link href="/visual-tools/matrix-multiplication">Matrix Multiplication</Link></li>
                  <li><Link href="/visual-tools/gauss-elimination">Gaussian Elimination</Link></li>
                </ul>
              )}
            </li>
            <li onClick={navigateBack} style={{cursor:'pointer'}}><a>Go Back</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default MyNavbar