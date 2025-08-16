
'use client'
import React, { useState, useRef, useEffect } from 'react';
import './TypeWriter.css';
import Keyboard from './Keyboard';
import MathKeyboard from './MathKeyboard';
import layout from './keyboardsData';
import general from './general_operations.json';

const keyboard1Styles = {
  keyboard: {
    background: '#004134',
    height: '200px',
  },
  keyboardKeys: {
    padding: '5px',
  },
  keyboardKey: {
    height: '30px',
  },
};

function TypeWriter() {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeKeyboard, setActiveKeyboard] = useState('Regular');
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const resetInput = () => {
    setInput('');
  };

  const showActiveKeyboard = (index) => {
    setShowKeyboard(true);
    setActiveKeyboard(index);
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
      <button title='Showing keyboard 1' onClick={() => showActiveKeyboard('Regular')}>Show Keyboard 1</button>
      <button onClick={() => showActiveKeyboard('Math')}>Show Keyboard 2</button>
      <div className='keyboard-group'>
        <textarea
          ref={textareaRef}
          value={input}
          onChange={onChange}
          className="keyboard-input"
          style={{ position: 'absolute', top: '30px', right: '30px', width: '300px' }}
        ></textarea>
        <div className='buttons-container'>
        <button className='btn' onClick={copyToClipboard} style={{backgroundColor:'#037f61'}}>Copy</button>
        <button  className='btn' onClick={resetInput} style={{backgroundColor:'red'}}>Reset</button>
        </div>

      </div>
      {activeKeyboard === 'Regular' ?
        <Keyboard
          layout={layout}
          input={input}
          setInput={setInput}
          show={showKeyboard}
          setShow={setShowKeyboard}
          styles={keyboard1Styles} /> :
        <MathKeyboard
          layout={general}
          input={input}
          setInput={setInput}
          show={showKeyboard}
          setShow={setShowKeyboard}
          styles={keyboard1Styles} />}
    </div>
  );
}

export default TypeWriter;

