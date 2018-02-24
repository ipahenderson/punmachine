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
      console.log(props.video);
      console.log("Enter Working");
    }
  }


  return (
    <form>
        <input
          type="text"
          placeholder="TYPE A NUMBER BETWEEN 1 AND 1000"
          onChange={handleSearch}
          onKeyDown={handleEnter}
          value={props.vidSearchNo}
        />
    </form>
  )

}

export default PunSearch;
