// 'use client'
// import React, { Fragment, useState, useEffect } from 'react';

// // Assuming the new layout is passed as the `layout` prop to the Keyboard component
// const MathKeyboard = ({ layout, styles, input, setInput, show, setShow }) => {
//     const [capsLock, setCapsLock] = useState(false);
//     const [keylayout, setKeylayout] = useState([]);

//     // useEffect(() => {
//     //     // Convert the new layout structure to match the expected keylayout structure
//     //     const newKeyLayout = layout["advanced_binary_operators"].map(item => item.symbol);
//     //     setKeylayout(newKeyLayout);
//     //     console.log(layout)
//     //     console.log(keylayout)
//     // }, [layout]);

//     useEffect(() => {
//         // Dynamically access the layout data and transform it into the required format
//         if (layout && Object.keys(layout).length > 0) {
//             const firstKey = Object.keys(layout)[0]; // Dynamically get the first key of the layout object
//             const newKeyLayout = layout[firstKey].map(item => item.symbol);
//             setKeylayout(newKeyLayout);
//         }
//     }, [layout]);

//     useEffect(() => {
//         // Log the updated keylayout for debugging purposes
//         console.log(keylayout);
//     }, [keylayout]); 

//     const onKeyClick = (key) => {
//         switch (key) {
//             case "backspace":
//                 setInput(input.slice(0, -1));
//                 break;
//             case "caps":
//                 // Intentionally left blank for future implementation
//                 break;
//             case "enter":
//                 setInput(input + "\n");
//                 break;
//             case "space":
//                 setInput(input + " ");
//                 break;
//             case "done":
//                 setShow(false);
//                 break;
//             default:
//                 setInput(input + key);
//                 break;
//         }
//     };

//     const onCapsLock = () => {
//         setKeylayout(keylayout.map((key) => {
//             if (key.length === 1) {
//                 return capsLock ? key.toLowerCase() : key.toUpperCase();
//             }
//             return key;
//         }));
//         setCapsLock(!capsLock);
//     };

//     // const renderButton = (key) => {
//     //     let buttonClassName = "keyboard__key";
//     //     switch (key) {
//     //         case "backspace":
//     //             buttonClassName += " keyboard__key--wide";
//     //             break;
//     //         case "caps":
//     //             buttonClassName += ` keyboard__key--wide keyboard__key--activatable ${capsLock && 'keyboard__key--active'}`;
//     //             break;
//     //         case "enter":
//     //         case "space":
//     //             buttonClassName += " keyboard__key--wide";
//     //             break;
//     //         case "done":
//     //             buttonClassName += " keyboard__key--wide keyboard__key--dark";
//     //             break;
//     //         // No default
//     //     }

    

//     //     return (
//     //         <button className={buttonClassName} style={{ ...styles.keyboardKey }} onClick={() => onKeyClick(key)}>
//     //             {key.length === 1 ? key : <i className="material-icons">{key}</i>}
//     //         </button>
//     //     );
//     // };

    
//     const renderButton = (key) => {
//         switch (key) {
//             case "backspace":
//                 return <button className="keyboard__key keyboard__key--wide" style={{ ...styles.keyboardKey }} onClick={() => onKeyClick(key)}><i className="material-icons">backspace</i></button>
//             case "caps":
//                 return <button className={`keyboard__key keyboard__key--wide keyboard__key--activatable ${capsLock && 'keyboard__key--active'}`} style={{ ...styles.keyboardKey }} onClick={onCapsLock}><i className="material-icons">keyboard_capslock</i></button>
//             case "enter":
//                 return <button className="keyboard__key keyboard__key--wide" style={{ ...styles.keyboardKey }} onClick={() => onKeyClick(key)}><i className="material-icons">keyboard_return</i></button>
//             case "space":
//                 return <button className="keyboard__key keyboard__key--extra-wide" style={{ ...styles.keyboardKey }} onClick={() => onKeyClick(key)}><i className="material-icons">space_bar</i></button>
//             case "done":
//                 return <button className="keyboard__key keyboard__key--wide keyboard__key--dark" style={{ ...styles.keyboardKey }} onClick={() => setShow(false)}><i className="material-icons">check_circle</i></button>
//             default:
//                 return <button className="keyboard__key" style={{ ...styles.keyboardKey }} onClick={() => onKeyClick(key)}>{key}</button>
//         }
//     }

//     return (
//         <>
//             {show && (
//                 <div className='keyboard' style={{ ...styles?.keyboard }}>
//                     <div className="keyboard__keys" style={{ ...styles?.keyboardKeys }}>
//                         {keylayout.map((key, index) => (
//                             <Fragment key={index}>
//                                 {['backspace', 'caps', 'enter', 'space', 'done'].includes(key) ? (
//                                     <>
//                                         {renderButton(key)}
//                                         <br />
//                                     </>
//                                 ) : renderButton(key)}
//                             </Fragment>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default MathKeyboard;
'use client'
import React , {useEffect} from "react";
import './TypeWriter.css'


const MathKeyboard = ({ layout, styles, input, setInput, show, setShow }) => {
    const [capsLock, setCapsLock] = React.useState(false);
    const [keylayout, setKeylayout] = React.useState([]);

    // React.useEffect(() => {

    //     //const key=Object.keys(layout)[0]


    //     // console.log(key)
    //     // console.log(layout)
        
    //     // Assuming layout.advanced_binary_operators is the prop being passed
    //    //const newKeyLayout = Object.values(layout)[0];//or layout[key]
    // //    console.log('New key layout')
    // //    console.log(newKeyLayout)
    //     setKeylayout(layout);
    //     //console.log(newKeyLayout)
    // }, [layout]);

     // Inside Keyboard component
     useEffect(() => {
        // Any logic that needs to run when `layout` changes
        console.log(layout); // Debugging: Log to see updates
        setKeylayout(layout); // If you maintain a separate state based on props
      }, [layout]); // Depend on `layout` prop
      
   
    const onKeyClick = (keySymbol) => {
        switch (keySymbol) {
            case "backspace":
                setInput(input.slice(0, -1));
                break;
            case "caps":
                // Handle caps lock logic here if necessary
                break;
            case "enter":
                setInput(input + "\n");
                break;
            case "space":
                setInput(input + " ");
                break;
            case "done":
                setShow(false);
                break;
            default:
                setInput(input + keySymbol);
                break;
        }
    };

    

    
    
    const onCapsLock = () => {
        setKeylayout(keylayout.map((key) => {
            if (key.length === 1) {
                return capsLock ? key.toLowerCase() : key.toUpperCase()
            }
            return key
        }))
        setCapsLock(!capsLock)
    }

    const renderButton = (key) => {
        switch (key.symbol) { // Access symbol from key object
            case "backspace":
                return     <div className="tooltip ">
                           <button className="keyboard__key keyboard__key--wide" style={{ ...styles.keyboardKey }} onClick={() => onKeyClick(key.symbol)}>
                               <i className="material-icons">backspace</i>
                           </button>
                           
                           <span className="tooltip-text">{key.explanation}</span>
                           </div>;
            case "caps":
                return <div className="tooltip">
                           {/* <button className={`keyboard__key keyboard__key--wide keyboard__key--activatable ${capsLock && 'keyboard__key--active'}`} style={{ ...styles.keyboardKey }} onClick={() => onKeyClick(key.symbol)}>
                               <i className="material-icons">keyboard_capslock</i>
                           </button> */}
                           <button className={`keyboard__key keyboard__key--wide keyboard__key--activatable ${capsLock && 'keyboard__key--active'}`} style={{ ...styles.keyboardKey }} onClick={onCapsLock}><i className="material-icons">keyboard_capslock</i></button>
                           <span className="tooltip-text">{key.explanation}</span>
                       </div>;
            case "enter":
                return <div className="tooltip">
                           <button className="keyboard__key keyboard__key--wide" style={{ ...styles.keyboardKey }} onClick={() => onKeyClick(key.symbol)}>
                               <i className="material-icons">keyboard_return</i>
                           </button>
                           <span className="tooltip-text">{key.explanation}</span>
                       </div>;
            case "space":
                return <div className="tooltip">
                           <button className="keyboard__key keyboard__key--extra-wide" style={{ ...styles.keyboardKey }} onClick={() => onKeyClick(key.symbol)}>
                               <i className="material-icons">space_bar</i>
                           </button>
                           <span className="tooltip-text">{key.explanation}</span>
                       </div>;
            case "done":
                return <div className="tooltip">
                           <button className="keyboard__key keyboard__key--wide keyboard__key--dark" style={{ ...styles.keyboardKey }} onClick={() => setShow(false)}>
                               <i className="material-icons">check_circle</i>
                           </button>
                           <span className="tooltip-text">{key.explanation}</span>
                       </div>;
            default:
                // For symbols, pass the symbol directly and use tooltip
                return <div className="tooltip">
                           <button className="keyboard__key" style={{ ...styles.keyboardKey }} onClick={() => onKeyClick(key.symbol)}>
                               {key.symbol}
                           </button>
                           <span className="tooltip-text">{key.explanation}</span>
                       </div>;
        }
    };
    

    return (
        <>
            {show && (
                <div className='keyboard' style={{ ...styles.keyboard }}>
                    <div className="keyboard__keys" style={{ ...styles.keyboardKeys }}>
                        {keylayout.map((keyObj, index) => (
                            <React.Fragment key={index}>
                                {renderButton(keyObj)}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};
export default MathKeyboard;