import React, { useState } from "react";
import axios from "axios";



const AddItem = () => {
  const [name, setName] = useState("");
  const [addres, setAddres] = useState("");


const addItem=()=>{

axios.post(`http://localhost:5000/shop`,{
    name:`${name}`,
    addres: `${addres}`
})
  setName(''),
  setAddres('')
  
}

  return (
    <div className="card p-4 w-50 mx-auto m-5 bordred">

      <input
        type="text"
        className="form form-control m-3 mx-auto w-50"
        placeholder="name"
        onChange={(e)=>setName(e.target.value)}
        value={name}
      />

      <input
        type="text"
        className="form form-control m-3 mx-auto w-50"
        placeholder="addres"
        onChange={(e)=>setAddres(e.target.value)}
        value={addres}
      />

      <button onClick={()=>addItem()} className="btn-success btn mx-auto w-50">add</button>
    </div>
  );
};

export default AddItem;
