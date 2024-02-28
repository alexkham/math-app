'use client'
import React, { useState, useRef, useEffect } from 'react';
import './TypeWriter.css';
import Keyboard from './Keyboard';
import MathKeyboard from './MathKeyboard';
import layout from './keyboardsData';
import data from './math_symbols_data'
import { capitalizeWords } from '@/app/utils/utils-functions';
import { superscripts,subscripts } from './super_sub_scripts';

const keyboard1Styles = {
  keyboard: {
    background: '#004134',
    height: '230px',
    
  },
  keyboardKeys: {
    padding: '5px',
  },
  keyboardKey: {
    height: '25px',
  },
};

function MultipleTypeWriter() {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeKeyboard, setActiveKeyboard] = useState(0);
  const [input, setInput] = useState("");
  const [keyboardTypes, setKeyboardTypes]=useState([]);
  const [currentType,setCurrentType]=useState('');
 const [keylayout, setKeylayout] = useState([]);
 const [dataObj,setDataObj]=useState();
 const [symbols, setSymbols]=useState([]);
 const [mode, setMode] = useState('regular'); // Options: 'normal', 'subscript', 'superscript'

//  const [symbols,setSymbols]=useState([])
  const textareaRef = useRef(null);

  useEffect(()=>{
    setDataObj(data)
    const keyTypes=Object.keys(data);
    setKeyboardTypes(keyTypes);
    console.log(keyTypes)
    // console.log('General :'+general)
    console.log(data)
    // console.log(keyboardTypes[activeKeyboard])
    // console.log(data[keyTypes[activeKeyboard]])

  },[]);


  useEffect(() => {
    if (activeKeyboard !== 'Regular' && data[activeKeyboard]) {
      const layoutData = data[activeKeyboard];
      if (Array.isArray(layoutData)) {
        const symbols = layoutData.map(item => item.symbol);
        setKeylayout(symbols);
      } else {
        setKeylayout([]);
      }
    } else {
      // Set to default layout or leave empty if 'Regular'
      setKeylayout([]);
    }
  }, [activeKeyboard]);



//   const onChange = (e) => {
   
//     setInput(e.target.value);
   
//   };

const onChange = (e) => {
    const char = e.target.value.slice(-1); // Get the last character entered
    handleCharacterInput(char);
};


  const resetInput = () => {
    setInput('');
  };


const showActiveKeyboard = (index) => {
    const newType = keyboardTypes[index];
    setShowKeyboard(true);
    setActiveKeyboard(index);
    setCurrentType(newType);
  
    if (newType !== 'Regular') {
      const newKeyLayout = dataObj[newType];
      console.log(newKeyLayout); // Immediate logging is fine
      setKeylayout(newKeyLayout); // State is set here
  
      // Use newKeyLayout directly for operations that need immediate access to the new data
      const newSymbols = newKeyLayout?.map((key) => key.symbol);
      console.log(newSymbols); // Directly using newSymbols here is fine
      setSymbols(newSymbols); // State is set here
  
      // Any logic that depends on the updated state should be moved to an useEffect hook
    } else {
      setKeylayout([]);
      setSymbols([]);
    }
  };
  

  const copyToClipboard = () => {
    navigator.clipboard.writeText(input).then(() => {
      /* Clipboard successfully set */
    }, () => {
      /* Clipboard write failed */
    });
  };

  // Focus the textarea whenever it's rendered or updated, especially after keyboard switches
  useEffect(() => {
    if (showKeyboard) {
      textareaRef.current.focus();
    }
  }, [showKeyboard, input, activeKeyboard]);

  useEffect(()=>{
    document.addEventListener('keydown',detectKeydown,true)
  },[])

  const detectKeydown=(e)=>{
    console.log('Clicked :',e.key)
  }


  const handleCharacterInput = (char) => {
    let transformedChar = char;

    if (mode === 'subscript' && subscripts[char]) {
        transformedChar = subscripts[char];
    } else if (mode === 'superscript' && superscripts[char]) {
        transformedChar = superscripts[char];
    }

    setInput(prevInput => prevInput + transformedChar);
};

const toggleMode = (newMode) => {
    setMode(newMode); // newMode could be 'normal', 'subscript', or 'superscript'
};



  return (
    <div className="App">
        {/* <h3 style={{verticalAlign: 'sub',fontSize:'medium' }}> Chemical formula of Water is: H<span id="sub">2</span>O</h3>   */}
        {/* <span>{subscripts['y']},{subscripts['(']}{superscripts['x']}</span>
        <span>{mode}</span> */}
                
        
           
        <div className='main-menu'>
        <button className='btn-select'
        title='Showing regular keyboard '
         onClick={() => showActiveKeyboard('Regular')}>
            QWERTY Keyboard </button>
      
      {keyboardTypes.map((key,index)=>{
        return(
            <div  key={index} className="tooltip2">
            <button 
            className='btn-select'
           
            onClick={() => showActiveKeyboard(index)}>
                {capitalizeWords(key.replaceAll('_',' '))}</button>
                <span className="tooltip2-text2">
                    {data[key]?.slice(0, -4).map((item) => item.symbol).join(', ')}
                    </span>
                       </div>
        )
      })}
      
      </div>

      <div className='keyboard-group'>
        <div className='small-btns'>
        <button onClick={()=>toggleMode('regular')}>regular mode {mode==='regular'? '✅':''}</button>
        <button onClick={()=>toggleMode('subscript')}>subscript {mode==='subscript'? '✅':''}</button>
        <button onClick={()=>toggleMode('superscript')}>superscript {mode==='superscript'? '✅':''}</button>
        <span className='current-mode'>current mode : {mode} </span>
        </div>
        
        <textarea
        
         placeholder='To type here you can use your PC keyboard or pick one on the left'
          ref={textareaRef}
          value={input}
          onChange={onChange}
          className="keyboard-input"
          style={{ position: 'absolute', top: '60px', right: '30px', width: '300px' }}
        >

       
        </textarea>
        <div className='buttons-container'>
        <button className='btn' onClick={copyToClipboard} style={{backgroundColor:'#037f61'}}>Copy</button>
        <button  className='btn' onClick={resetInput} style={{backgroundColor:'red'}}>Clear</button>
        {/* <span className='keyboard-title'>{currentType?.replaceAll('_',' ')}</span> */}
        </div>

      </div>
      
      <div className='keyboards-container'>
       
        
      {activeKeyboard === 'Regular' ?
        <Keyboard
          layout={layout}
          input={input}
          setInput={setInput}
          show={showKeyboard}
          setShow={setShowKeyboard}
          styles={keyboard1Styles}
          mode={mode} /> :
          
         
        <MathKeyboard
          layout={data[currentType]}
          input={input}
          setInput={setInput}
          show={showKeyboard}
          setShow={setShowKeyboard}
          styles={keyboard1Styles} />
          }
        
          <div>
      
          </div>
          </div>


          

    </div>
  );
}

export default MultipleTypeWriter;

