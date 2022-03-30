import React from 'react';
export default function Counter2({ number }) {
  React.useEffect(()=>{
    console.log("Component2 mounter First Time")
  },[])
  React.useEffect(()=>{
    console.log("Component2 Updated");
    return ()=>{
      console.log("Component Unmounted");
    }
  },[number])
  // React.useEffect(()=>{
  //   return 
  // })
  return <h1>{number} times</h1>;
}
