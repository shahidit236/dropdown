
import React, { useEffect, useState } from 'react'
import Multiselect from 'multiselect-react-dropdown';

function App() {
  const [optionData, setoptionData] = useState([])
  const onSelect = (selectedList, selectedItem) => {
    setoptionData(selectedList);
    let value = "";
    selectedList.forEach(element => {
      value = value == "" ? element.name : value + "," + element.name;
    });
    alert(value)
  }
  const onRemove = (selectedList, removedItem) => {
    setoptionData(selectedList);
    let value = "";
    selectedList.forEach(element => {
      value = value == "" ? element.name : value + "," + element.name;
    });
    alert(value)
  }

  const options = [
    { name: 'Admin', id: 1 },
    { name: 'User', id: 2 },
    { name: ' moderator', id: 3 },
    { name: 'Customer', id: 4 },
  ]
 
  return (
    <>
      <div className='row'>
        <div className='col-md-3'>
          <label><b>Options</b></label>
         
          <Multiselect
            options={options} // Options to display in the dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
            
          />
      
        </div>
      </div>
    </>
  );
}

export default App;