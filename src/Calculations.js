function Calculations (props) {
  return (
    <>
      <div className="product_card">
          <h2>Total  number of letters: {props.totalLenght}</h2>
          <h2>Total number of words: {props.totalWordsLength}</h2>
        <div className="btns">
          <button onClick={props.lowerCase}>Lower case</button>
          <button onClick={props.upperCase}>Upper case</button>
          <button onClick={props.firstCharCaps}>First letter caps</button>
        </div>
      </div>
    </>
  )
  
}

export default Calculations