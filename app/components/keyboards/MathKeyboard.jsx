
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
                           <span className="tooltip-text">{key.explanation?key.explanation:key.title}</span>
                       </div>;
            default:
                // For symbols, pass the symbol directly and use tooltip
                return <div className="tooltip">
                           <button className="keyboard__key" style={{ ...styles.keyboardKey }} onClick={() => onKeyClick(key.symbol)}>
                               {key.symbol}
                           </button>
                           <span className="tooltip-text">{key.explanation?key.explanation:key.title}</span>
                       </div>;
        }
    };
    

    return (
        <>
            {show && (
                <div className='keyboard' style={{ ...styles.keyboard }}>
                    <div className="keyboard__keys" style={{ ...styles.keyboardKeys }}>
                        {keylayout?.map((keyObj, index) => (
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