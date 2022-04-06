export const FetchData=()=>{
  return  {type:"SHOP_LIST"}
}


export const FetchListUpdate=(shops)=>{
return {type:"SHOP_LIST_UPDATE" , payload: shops}
}

export const FetchError=()=>{
    return {type:"ERROR"}
}