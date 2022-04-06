import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FetchData, FetchListUpdate, FetchError } from "../actions/action";
import Spinner from "./Spinner";
import Error from "./Error";
import { useNavigate, useLocation } from "react-router-dom";

const ShopList = () => {

  const {pathname}=useLocation();
  const nav=useNavigate();
console.log(pathname);

  const { Shop, loading, ShopFilter } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchData()),
      axios
        .get("http://localhost:5000/shop")
        .then((data) => dispatch(FetchListUpdate(data.data)))
        .catch(() => dispatch(FetchError()));
  }, []);

  
  const deletInfo=(num)=>{

      axios.delete(`http://localhost:5000/shop/${num}`,{})

  }



if(loading==="error"){
  return <Error/>
}

  if (loading === "false") {
    return (
      <>

        { Shop.length ?  Shop.map((item) => (

          <div className="card p-1 mx-auto w-50 m-5">

            <table>

              <tr>

                <td> <span>{item.id}</span> </td>
                <td> <span>{item.name}</span> </td>
                <td> <span>{item.addres}</span> </td>
                <td> <button onClick={()=>{
                  return (
                    deletInfo(item.id),
                      setTimeout( ()=>  nav("/add") , 100)
                   )
                }} className="btn btn-danger m-3">DELET</button>
                
                </td>
              </tr>

            </table>
          
          </div>

        ) ) : <h4 className="card mx-auto bg-info p-5 m-5"> Ma'lumot yo'q </h4> }

      </>
    );
  }else {
    return <Spinner />;
  }



  return (
    <div className="card p-3 m-2">
      <></>
    </div>
  );
};

export default ShopList;
