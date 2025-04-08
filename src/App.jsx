import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
  const addItem = () => {
	  if (inputValue.trim()) {
		  setItems([...items, inputValue]);
		  setInputValue('');
	  }
  };
  
  return (
    
    <div className="container">
		<h1>Dynamic List Manager</h1>
		<div className="input-section">
			<input 
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder="Enter an item"/>
			<button onClick={addItem}>Add Item</button>
		</div>
		{items.length > 0 && (
			<div className="list-box">
				<ul>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
				</ul>
			</div>
		)}
    </div>
  );
}

export default App;
