function Productcard(props) {
  const handleInputChange = (event) => {
    props.setInputText(event.target.value);
  }
  return (
    <>
    <div className="product_card">
      <h1 className="mx-auto">{props.heading}</h1>
      <textarea className="inputBox" placeholder="type your text" value={props.inputText} onChange={handleInputChange}></textarea>
      <button onClick={props.btnClicked}>Click me</button>

      <h3>{props.inputText}</h3>
    </div>
    </>
  );
}

export default Productcard