import React from 'react';


const PunSearch = (props) => {

  function handleSearch(e){
    props.onPunSearch(e.target.value);
    console.log("searching");
  }

  function checkInput(e) {
      if(e.keyCode === 116){
      return
      }
      if(e.keyCode === 8){
      return
      }
      if (e.keyCode < 48 || e.keyCode > 57) {
       e.preventDefault();
      };
  }

  function handleEnter(e){
    checkInput(e)
    if (e.key === 'Enter'){
      e.preventDefault();
      props.onEnter();

    }
  }

  return (

    <form>
        <p id="title">THE PUNMACHINE</p>
        <input
          ref={input => input && input.focus()}
          id="pun-search"
          autoComplete="off"
          type="number"
          placeholder="   TYPE A NUMBER BETWEEN 1 AND 1000..."
          onChange={handleSearch}
          onKeyDown={handleEnter}
          value={props.vidSearchNo}
          maxLength="4"
        />
    </form>
  )

}

export default PunSearch;
