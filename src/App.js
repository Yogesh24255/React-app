import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './NavBar';
import Productcard from './Productcard';
import Calculations from './Calculations';

function App() {
  const [heading, setHeading] = useState('hello this is react app')
  const [inputText, setInputText] = useState('')
  const totalLenght = inputText.length
  const totalWordsLength = inputText.length ? inputText.trim().split(/\s+/).length : 0
  const btnClicked = () => {
    setHeading('Oh! this is an app')
    setInputText('')
  }
  const lowerCase = () => {
    setInputText(inputText.toLocaleLowerCase())
  }
  const upperCase = () => {
    setInputText(inputText.toUpperCase())
  }
  const firstCharCaps = () => {
    const capitalizedText = inputText
    .split(' ')
    .map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
    .join(' ')
    setInputText(capitalizedText)
  }
  return (
    <>
      <Navbar></Navbar>
      <Productcard heading={heading} inputText={inputText} setInputText={setInputText} btnClicked={btnClicked}></Productcard>
      <Calculations totalLenght={totalLenght} totalWordsLength={totalWordsLength} upperCase={upperCase} firstCharCaps={firstCharCaps} lowerCase={lowerCase}></Calculations>
    </>
  );
}

export default App;
