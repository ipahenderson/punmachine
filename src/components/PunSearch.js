import React from 'react';

const PunSearch = (props) => {

  function handleSearch(e){
    props.onPunSearch(e.target.value);
    console.log("searching");
  }

  function handleEnter(e){
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
          type="text"
          placeholder="   TYPE A NUMBER BETWEEN 1 AND 1000..."
          onChange={handleSearch}
          onKeyDown={handleEnter}
          value={props.vidSearchNo}
        />
    </form>
  )

}

export default PunSearch;
