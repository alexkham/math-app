'use client'
import React, { Fragment ,useEffect} from 'react';
import { superscripts,subscripts } from './super_sub_scripts';

// const layout2 = [
//     "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
//     "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
//     "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
//     "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
//     "space"
// ];

const Keyboard = ({ layout ,styles, input, setInput, show, setShow ,mode}) => {
    const [capsLock, setCapsLock] = React.useState(false)
    const [keylayout, setKeylayout] = React.useState(layout)

    // const onKeyClick = (key) => {
    //     console.log('Typing Mode : '+mode)
    //     switch (key) {
    //         case "backspace":
    //             setInput(input.slice(0, -1))
    //             break
    //         case "caps":
    //             break
    //         case "enter":
    //             setInput(input + "\n")
    //             break
    //         case "space":
    //             setInput(input + " ")
    //             break
    //         case "done":
    //             break
    //         default:
    //             setInput(input + key)
    //             break
    //     }
    // }

    const onKeyClick = (key) => {
        let finalKey = key; // Default to the key itself
    
        // Directly apply transformations based on the current mode
        if (mode === 'subscript' && subscripts[key]) {
            finalKey = subscripts[key];
        } else if (mode === 'superscript' && superscripts[key]) {
            finalKey = superscripts[key];
        }
    
        switch (key) {
            case "backspace":
                setInput(prevInput => prevInput.slice(0, -1));
                break;
            case "caps":
                setCapsLock(prevCapsLock => !prevCapsLock);
                break;
            case "enter":
                setInput(prevInput => prevInput + "\n");
                break;
            case "space":
                setInput(prevInput => prevInput + " ");
                break;
            case "done":
                setShow(false);
                break;
            default:
                setInput(prevInput => prevInput + finalKey);
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
  //  console.log('capsLock', keylayout)

    const renderButton = (key) => {
        switch (key) {
            case "backspace":
                return <button className="keyboard__key keyboard__key--wide" style={{ ...styles.keyboardKey }} onClick={() => onKeyClick(key)}><i className="material-icons">backspace</i></button>
            case "caps":
                return <button className={`keyboard__key keyboard__key--wide keyboard__key--activatable ${capsLock && 'keyboard__key--active'}`} style={{ ...styles.keyboardKey }} onClick={onCapsLock}><i className="material-icons">keyboard_capslock</i></button>
            case "enter":
                return <button className="keyboard__key keyboard__key--wide" style={{ ...styles.keyboardKey }} onClick={() => onKeyClick(key)}><i className="material-icons">keyboard_return</i></button>
            case "space":
                return <button className="keyboard__key keyboard__key--extra-wide" style={{ ...styles.keyboardKey }} onClick={() => onKeyClick(key)}><i className="material-icons">space_bar</i></button>
            case "done":
                return <button className="keyboard__key keyboard__key--wide keyboard__key--dark" style={{ ...styles.keyboardKey }} onClick={() => setShow(false)}><i className="material-icons">check_circle</i></button>
            default:
                return <button className="keyboard__key" style={{ ...styles.keyboardKey }} onClick={() => onKeyClick(key)}>{key}</button>
        }
    }

    // Inside Keyboard component
    useEffect(() => {
    // Any logic that needs to run when `layout` changes
    console.log(layout); // Debugging: Log to see updates
    setKeylayout(layout); // If you maintain a separate state based on props
  }, [layout]); // Depend on `layout` prop
  

    return (
        <>
       
            {
                show &&
                <div className='keyboard' style={{ ...styles?.keyboard }}>
                    <div className="keyboard__keys" style={{ ...styles?.keyboardKeys }}>
                        {keylayout.map((key) => (
                            <Fragment key={key}>
                                {
                                    ['backspace', 'p', 'enter', '?'].indexOf(key.toLowerCase()) > -1 ? <>
                                        {renderButton(key)}
                                        <br />
                                    </> : renderButton(key)
                                }
                            </Fragment>
                        ))}
                    </div>
                </div>
            }
        </>
    )
}

export default Keyboard

