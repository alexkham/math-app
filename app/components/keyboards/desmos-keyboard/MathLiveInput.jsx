// // // // // // // 'use client';

// // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // import { MathfieldElement } from 'mathlive';

// // // // // // // // This component wraps the MathLive library.
// // // // // // // const MathLiveInput = ({ value, onChange, onMount }) => {
// // // // // // //   const mathfieldRef = useRef(null);
// // // // // // //   const mathfieldElementRef = useRef(null);

// // // // // // //   useEffect(() => {
// // // // // // //     // Initialize the Mathfield element
// // // // // // //     const mfe = new MathfieldElement({
// // // // // // //       // Suppress the default virtual keyboard if you're using your own
// // // // // // //       virtualKeyboardMode: 'off',
// // // // // // //     });

// // // // // // //     // Assign the element to the ref for external access
// // // // // // //     mathfieldElementRef.current = mfe;
// // // // // // //     const currentRef = mathfieldRef.current;
    
// // // // // // //     // Mount the element
// // // // // // //     if (currentRef) {
// // // // // // //       currentRef.appendChild(mfe);
// // // // // // //     }
    
// // // // // // //     // Set initial value
// // // // // // //     mfe.value = value;
    
// // // // // // //     // Add event listener for changes
// // // // // // //     const handleChange = (evt) => {
// // // // // // //       // The `evt.target.value` is the LaTeX string
// // // // // // //       if (onChange) {
// // // // // // //         onChange(evt.target.value);
// // // // // // //       }
// // // // // // //     };
// // // // // // //     mfe.addEventListener('input', handleChange);

// // // // // // //     // Provide the mounted instance to the parent component
// // // // // // //     if (onMount) {
// // // // // // //       onMount(mfe);
// // // // // // //     }

// // // // // // //     // Cleanup on component unmount
// // // // // // //     return () => {
// // // // // // //       mfe.removeEventListener('input', handleChange);
// // // // // // //       if (currentRef && mfe.parentElement === currentRef) {
// // // // // // //         currentRef.removeChild(mfe);
// // // // // // //       }
// // // // // // //     };
// // // // // // //   }, [onChange, onMount, value]);

// // // // // // //   // This effect listens for external changes to the value prop
// // // // // // //   // and updates the mathfield if it's different.
// // // // // // //   useEffect(() => {
// // // // // // //     const mfe = mathfieldElementRef.current;
// // // // // // //     if (mfe && mfe.value !== value) {
// // // // // // //       mfe.value = value;
// // // // // // //     }
// // // // // // //   }, [value]);

// // // // // // //   return <div ref={mathfieldRef} />;
// // // // // // // };

// // // // // // // export default MathLiveInput;


// // // // // // 'use client';

// // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // import { MathfieldElement } from 'mathlive';

// // // // // // const MathLiveInput = ({ value, onChange, onMount }) => {
// // // // // //   const mathfieldRef = useRef(null);
// // // // // //   const mathfieldElementRef = useRef(null);


// // // // // //   // Inside MathLiveInput.js


// // // // // // useEffect(() => {
// // // // // //     const mfe = new MathfieldElement({
// // // // // //       // --- Recommended Configuration ---
// // // // // //       usePopover: false,
// // // // // //     //   virtualKeyboardMode: 'off',
      
// // // // // //       // --- Other Useful Options ---
// // // // // //       smartFence: true,
// // // // // //       letterShapeStyle: 'tex',
// // // // // //       placeholder: '\\text{Type your math here...}'
// // // // // //     });
// // // // // // });

// // // // // //   useEffect(() => {
// // // // // //     // Initialize the Mathfield element with a configuration object
// // // // // //     const mfe = new MathfieldElement({
// // // // // //       // --- ADD/CONFIRM THESE OPTIONS ---
// // // // // //       virtualKeyboardMode: 'off', // Disables the virtual keyboard
// // // // // //       usePopover: false,          // Disables the 'N' popover menu
// // // // // //       // ---------------------------------
// // // // // //     });

// // // // // //     mathfieldElementRef.current = mfe;
// // // // // //     const currentRef = mathfieldRef.current;
    
// // // // // //     if (currentRef) {
// // // // // //       currentRef.appendChild(mfe);
// // // // // //     }
    
// // // // // //     mfe.value = value;
    
// // // // // //     const handleChange = (evt) => {
// // // // // //       if (onChange) {
// // // // // //         onChange(evt.target.value);
// // // // // //       }
// // // // // //     };
// // // // // //     mfe.addEventListener('input', handleChange);

// // // // // //     if (onMount) {
// // // // // //       onMount(mfe);
// // // // // //     }

// // // // // //     return () => {
// // // // // //       mfe.removeEventListener('input', handleChange);
// // // // // //       if (currentRef && mfe.parentElement === currentRef) {
// // // // // //         currentRef.removeChild(mfe);
// // // // // //       }
// // // // // //     };
// // // // // //   }, [onChange, onMount, value]);

// // // // // //   useEffect(() => {
// // // // // //     const mfe = mathfieldElementRef.current;
// // // // // //     if (mfe && mfe.value !== value) {
// // // // // //       mfe.value = value;
// // // // // //     }
// // // // // //   }, [value]);

// // // // // //   return <div ref={mathfieldRef} style={{ fontSize: '1.5em', border: '1px solid #ccc', padding: '5px' }} />;
// // // // // // };

// // // // // // export default MathLiveInput;


// // // // // 'use client';

// // // // // import React, { useEffect, useRef } from 'react';
// // // // // import { MathfieldElement } from 'mathlive';

// // // // // const MathLiveInput = ({ value, onChange, onMount }) => {
// // // // //   const mathfieldRef = useRef(null);
// // // // //   const mathfieldElementRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     // Initialize the Mathfield element with the corrected configuration
// // // // //     const mfe = new MathfieldElement({
// // // // //       // --- The black circle is now removed ---
// // // // //       usePopover: true,
      
// // // // //       // --- The keyboard is now available on-demand ---
// // // // //       virtualKeyboardMode: 'manual',
// // // // //     });

// // // // //     mathfieldElementRef.current = mfe;
// // // // //     const currentRef = mathfieldRef.current;
    
// // // // //     if (currentRef) {
// // // // //       currentRef.appendChild(mfe);
// // // // //     }
    
// // // // //     mfe.value = value;
    
// // // // //     const handleChange = (evt) => {
// // // // //       if (onChange) {
// // // // //         onChange(evt.target.value);
// // // // //       }
// // // // //     };
// // // // //     mfe.addEventListener('input', handleChange);

// // // // //     if (onMount) {
// // // // //       onMount(mfe);
// // // // //     }

// // // // //     return () => {
// // // // //       mfe.removeEventListener('input', handleChange);
// // // // //       if (currentRef && mfe.parentElement === currentRef) {
// // // // //         currentRef.removeChild(mfe);
// // // // //       }
// // // // //     };
// // // // //   }, [onChange, onMount, value]);

// // // // //   useEffect(() => {
// // // // //     const mfe = mathfieldElementRef.current;
// // // // //     if (mfe && mfe.value !== value) {
// // // // //       mfe.value = value;
// // // // //     }
// // // // //   }, [value]);

// // // // //   return <div ref={mathfieldRef} style={{ fontSize: '1.5em', border: '1px solid #ccc', padding: '5px' }} />;
// // // // // };

// // // // // export default MathLiveInput;

// // // // 'use client';

// // // // import React, { useEffect, useRef } from 'react';
// // // // import { MathfieldElement } from 'mathlive';

// // // // const MathLiveInput = ({ value, onChange, onMount }) => {
// // // //   const mathfieldRef = useRef(null);
// // // //   const mathfieldElementRef = useRef(null);

// // // //   // This new useEffect hook injects the required CSS into the document head
// // // //   useEffect(() => {

   
// // // //     const styleId = 'mathlive-popover-override';
    
    
// // // //     // Avoid adding the style tag more than once
// // // //     if (document.getElementById(styleId)) {
// // // //       return;
// // // //     }

// // // //     const style = document.createElement('style');
// // // //     style.id = styleId;
// // // //     // This CSS rule will forcibly hide the black circle
// // // //     style.innerHTML = `
// // // //       .ML__popover-toggle {
// // // //         display: none !important;
// // // //       }
// // // //     `;
// // // //     document.head.appendChild(style);

// // // //     // Cleanup function to remove the style when the component is unmounted
// // // //     return () => {
// // // //       const styleElement = document.getElementById(styleId);
// // // //       if (styleElement) {
// // // //         styleElement.remove();
// // // //       }
// // // //     };
// // // //   }, []); // Empty array ensures this effect runs only once

// // // //   // This useEffect hook initializes the MathLive component itself
// // // //   useEffect(() => {
// // // //     const mfe = new MathfieldElement({
// // // //       usePopover: false,
// // // //       virtualKeyboardMode: 'off',
// // // //     });

// // // //     mathfieldElementRef.current = mfe;
// // // //     const currentRef = mathfieldRef.current;
    
// // // //     if (currentRef) {
// // // //       currentRef.appendChild(mfe);
// // // //     }
    
// // // //     mfe.value = value;
    
// // // //     const handleChange = (evt) => {
// // // //       if (onChange) {
// // // //         onChange(evt.target.value);
// // // //       }
// // // //     };
// // // //     mfe.addEventListener('input', handleChange);

// // // //     if (onMount) {
// // // //       onMount(mfe);
// // // //     }

// // // //     return () => {
// // // //       mfe.removeEventListener('input', handleChange);
// // // //       if (currentRef && mfe.parentElement === currentRef) {
// // // //         currentRef.removeChild(mfe);
// // // //       }
// // // //     };
// // // //   }, [onChange, onMount, value]);

// // // //   useEffect(() => {
// // // //     const mfe = mathfieldElementRef.current;
// // // //     if (mfe && mfe.value !== value) {
// // // //       mfe.value = value;
// // // //     }
// // // //   }, [value]);

// // // //   // A basic div for MathLive to mount into.
// // // //   // Add styling here if needed, for example:
// // // //   // style={{ fontSize: '1.5em', border: '1px solid #ccc', padding: '5px' }}
// // // //   return <div ref={mathfieldRef} />;
// // // // };

// // // // export default MathLiveInput;


// // // 'use client';

// // // import React, { useEffect, useRef } from 'react';
// // // import { MathfieldElement } from 'mathlive';

// // // const MathLiveInput = ({ value, onChange, onMount }) => {
// // //   const mathfieldRef = useRef(null);

// // //   useEffect(() => {
// // //     const mfe = new MathfieldElement({
// // //       usePopover: false,
// // //       virtualKeyboardMode: 'off',
// // //     });

// // //     const currentRef = mathfieldRef.current;
// // //     if (currentRef) {
// // //       currentRef.appendChild(mfe);
// // //     }

// // //     // --- NEW LOGIC TO INJECT STYLE INTO SHADOW DOM ---
// // //     // This runs after the element is in the DOM and its shadow root is available.
// // //     if (mfe.shadowRoot) {
// // //       const style = document.createElement('style');
// // //       // This CSS is now injected directly where it can affect the internal elements.
// // //       style.innerHTML = `
// // //         .ML__popover-toggle {
// // //           display: none !important;
// // //         }
// // //       `;
// // //       mfe.shadowRoot.appendChild(style);
// // //     }
// // //     // --- END OF NEW LOGIC ---

// // //     mfe.value = value;

// // //     const handleChange = (evt) => {
// // //       if (onChange) {
// // //         onChange(evt.target.value);
// // //       }
// // //     };
// // //     mfe.addEventListener('input', handleChange);

// // //     if (onMount) {
// // //       onMount(mfe);
// // //     }

// // //     return () => {
// // //       mfe.removeEventListener('input', handleChange);
// // //       if (currentRef && mfe.parentElement === currentRef) {
// // //         currentRef.removeChild(mfe);
// // //       }
// // //     };
// // //   }, [onChange, onMount, value]);

// // //   useEffect(() => {
// // //     // This second useEffect is still necessary to update the value
// // //     // if it's changed from outside the component.
// // //     const mfe = mathfieldRef.current?.querySelector('math-field');
// // //     if (mfe && mfe.value !== value) {
// // //       mfe.value = value;
// // //     }
// // //   }, [value]);

// // //   return <div ref={mathfieldRef} />;
// // // };

// // // export default MathLiveInput;


// // 'use client';

// // import React, { useEffect, useRef } from 'react';
// // import { MathfieldElement } from 'mathlive';

// // // 1. The 'width' prop is added here, with a default value of '100%'.
// // const MathLiveInput = ({ value, onChange, onMount, width = '100%' }) => {
// //   const mathfieldRef = useRef(null);

// //   useEffect(() => {
// //     const mfe = new MathfieldElement({
// //       usePopover: false,
// //       virtualKeyboardMode: 'off',
// //     });

// //     const currentRef = mathfieldRef.current;
// //     if (currentRef) {
// //       currentRef.appendChild(mfe);
// //     }

// //     if (mfe.shadowRoot) {
// //       const style = document.createElement('style');
// //       style.innerHTML = `
// //         .ML__popover-toggle {
// //           display: none !important;
// //         }
// //       `;
// //       mfe.shadowRoot.appendChild(style);
// //     }
    
// //     mfe.value = value;

// //     const handleChange = (evt) => {
// //       if (onChange) {
// //         onChange(evt.target.value);
// //       }
// //     };
// //     mfe.addEventListener('input', handleChange);

// //     if (onMount) {
// //       onMount(mfe);
// //     }

// //     return () => {
// //       mfe.removeEventListener('input', handleChange);
// //       if (currentRef && mfe.parentElement === currentRef) {
// //         currentRef.removeChild(mfe);
// //       }
// //     };
// //   }, [onChange, onMount, value]);

// //   useEffect(() => {
// //     const mfe = mathfieldRef.current?.querySelector('math-field');
// //     if (mfe && mfe.value !== value) {
// //       mfe.value = value;
// //     }
// //   }, [value]);

// //   // 2. The 'width' prop is now used here to set the style.
// //   return <div ref={mathfieldRef} style={{ width:width }} />;
// // };

// // export default MathLiveInput;

// 'use client';

// import React, { useEffect, useRef } from 'react';
// import { MathfieldElement } from 'mathlive';

// const MathLiveInput = ({ value, onChange, onMount, width ='100%' }) => {
//   const mathfieldRef = useRef(null);

//   useEffect(() => {
//     const mfe = new MathfieldElement({
//       usePopover: false,
//       virtualKeyboardMode: 'off',
//     });

//     const currentRef = mathfieldRef.current;
//     if (currentRef) {
//       currentRef.appendChild(mfe);
//     }

//     if (mfe.shadowRoot) {
//       const style = document.createElement('style');
//       style.innerHTML = `
//         .ML__popover-toggle {
//           display: none !important;
//         }
//       `;
//       mfe.shadowRoot.appendChild(style);
//     }
    
//     mfe.value = value;

//     const handleChange = (evt) => {
//       if (onChange) {
//         onChange(evt.target.value);
//       }
//     };
//     mfe.addEventListener('input', handleChange);

//     if (onMount) {
//       onMount(mfe);
//     }

//     return () => {
//       mfe.removeEventListener('input', handleChange);
//       if (currentRef && mfe.parentElement === currentRef) {
//         currentRef.removeChild(mfe);
//       }
//     };
//   }, [onChange, onMount, value]);

//   useEffect(() => {
//     const mfe = mathfieldRef.current?.querySelector('math-field');
//     if (mfe && mfe.value !== value) {
//       mfe.value = value;
//     }
//   }, [value]);

//   // This is the long-form version for clarity.
//   // The 'width' prop variable is explicitly assigned to the 'width' CSS key.
//   return <div ref={mathfieldRef} style={{ width: width }} />;
// };

// export default MathLiveInput;


'use client';

import React, { useEffect, useRef } from 'react';
import { MathfieldElement } from 'mathlive';

const MathLiveInput = ({ value, onChange, onMount, width = '100%' }) => {
  const mathfieldRef = useRef(null);

  useEffect(() => {
    const mfe = new MathfieldElement({
      usePopover: false,
      virtualKeyboardMode: 'off',
    });

    // --- THIS IS THE NEW LINE ---
    // It forces the <math-field> element itself to take up 100% of its container.
    mfe.style.width = '100%';
    // --- END OF NEW LINE ---

    const currentRef = mathfieldRef.current;
    if (currentRef) {
      currentRef.appendChild(mfe);
    }

    if (mfe.shadowRoot) {
      const style = document.createElement('style');
      style.innerHTML = `
        .ML__popover-toggle {
          display: none !important;
        }
      `;
      mfe.shadowRoot.appendChild(style);
    }
    
    mfe.value = value;

    const handleChange = (evt) => {
      if (onChange) {
        onChange(evt.target.value);
      }
    };
    mfe.addEventListener('input', handleChange);

    if (onMount) {
      onMount(mfe);
    }

    return () => {
      mfe.removeEventListener('input', handleChange);
      if (currentRef && mfe.parentElement === currentRef) {
        currentRef.removeChild(mfe);
      }
    };
  }, [onChange, onMount, value]);

  useEffect(() => {
    const mfe = mathfieldRef.current?.querySelector('math-field');
    if (mfe && mfe.value !== value) {
      mfe.value = value;
    }
  }, [value]);

  // This div acts as the container. Its width is controlled by the prop.
  return (<div ref={mathfieldRef} style={{ width: width }} />);
};

export default MathLiveInput;