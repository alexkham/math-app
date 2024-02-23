'use client'
import React, { useState, useRef, useEffect } from 'react';
import './TypeWriter.css';
import Keyboard from './Keyboard';
import MathKeyboard from './MathKeyboard';
import layout from './keyboardsData';
import general from './general_operations.json';
import data from './math_symbols_data'
import { capitalizeWords } from '@/app/utils/utils-functions';

const keyboard1Styles = {
  keyboard: {
    background: '#004134',
    height: '230px',
  },
  keyboardKeys: {
    padding: '5px',
  },
  keyboardKey: {
    height: '30px',
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
 const [symbols, setSymbols]=useState([])
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



  const onChange = (e) => {
    setInput(e.target.value);
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

  return (
    <div className="App">
       
                
        <button className='btn-select'
        title='Showing regular keyboard '
         onClick={() => showActiveKeyboard('Regular')}>
            Regular Keyboard </button>
           
        <div className='main-menu'>
      
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
        <textarea
         placeholder='To type here you can use your PC keyboard or pick one on the left'
          ref={textareaRef}
          value={input}
          onChange={onChange}
          className="keyboard-input"
          style={{ position: 'absolute', top: '30px', right: '30px', width: '300px' }}
        ></textarea>
        <div className='buttons-container'>
        <button className='btn' onClick={copyToClipboard} style={{backgroundColor:'#037f61'}}>Copy</button>
        <button  className='btn' onClick={resetInput} style={{backgroundColor:'red'}}>Clear</button>
        </div>

      </div>
      
      <div className='keyboards-container'>
        <span className='keyboard-title'>{currentType?.replaceAll('_',' ')}</span>
      {activeKeyboard === 'Regular' ?
        <Keyboard
          layout={layout}
          input={input}
          setInput={setInput}
          show={showKeyboard}
          setShow={setShowKeyboard}
          styles={keyboard1Styles} /> :
        <MathKeyboard
          layout={data[currentType]}
          input={input}
          setInput={setInput}
          show={showKeyboard}
          setShow={setShowKeyboard}
          styles={keyboard1Styles} />}
        
          <div>
      
          </div>
          </div>


          

    </div>
  );
}

export default MultipleTypeWriter;

