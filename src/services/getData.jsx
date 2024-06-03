import React from "react";

export const GetDataObject = (preData,setData)=>(id, value) => {
  setData({ ...preData, [id]: value });
};
export const getDataArray =(preData,setData)=>( value) => {
  setData([ ...preData,  value ]);
};
export const deleteDataArray =(preData,setData)=>( index) => {
  const newArray = [...preData.slice(0, index), ...preData.slice(index + 1)];
  setData(newArray);
};

