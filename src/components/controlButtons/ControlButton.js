import React, { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

// const Http = XMLHttpRequest();

export default function ControlButton(props) {

  // const [checked, setChecked] = useState()
  const baseUrl = "http://192.168.20.11";
  const checkState = baseUrl + "/" + props.num + "/state";
  const low = baseUrl + "/" + props.num + "/low";
  const high = baseUrl + "/" + props.num + "/high";

  const [checked1, setChecked1] = useState(false);

  const handleChange1 = (event) => {
    if(!checked1){
      handleChecked1()
    }else{
      handleUnChecked1()
    }
    setChecked1(event.target.checked);
  };

  function handleChecked1(){
    console.log("1 is checked")
    fetch(baseUrl + "/1/high")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
  }

  function handleUnChecked1(){
    console.log("1 is unchecked")
    fetch(baseUrl + "/1/low")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
  }
  
  const [checked2, setChecked2] = useState(false);

  const handleChange2 = (event) => {
    if(!checked2){
      handleChecked2()
    }else{
      handleUnChecked2()
    }
    setChecked2(event.target.checked);
  };

  function handleChecked2(){
    console.log("2 is checked")
    fetch(baseUrl + "/2/high")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
  }

  function handleUnChecked2(){
    console.log("2 is unchecked")
    fetch(baseUrl + "/2/low")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
  }
  
  const [checked3, setChecked3] = useState(false);

  const handleChange3 = (event) => {
    if(!checked3){
      handleChecked3()
    }else{
      handleUnChecked3()
    }
    setChecked3(event.target.checked);
  };

  function handleChecked3(){
    console.log("3 is checked")
    fetch(baseUrl + "/3/high")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
  }

  function handleUnChecked3(){
    console.log("3 is unchecked")
    fetch(baseUrl + "/3/low")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
  }
  const [checked4, setChecked4] = useState(false);

  const handleChange4 = (event) => {
    if(!checked4){
      handleChecked4()
    }else{
      handleUnChecked4()
    }
    setChecked4(event.target.checked);
  };

  function handleChecked4(){
    console.log("4 is checked")
    fetch(baseUrl + "/4/high")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
  }

  function handleUnChecked4(){
    console.log("4 is unchecked")
    fetch(baseUrl + "/4/low")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
  }

  const buttons = {
    position: "fixed",
    top: "50%",
    left: "50%",
    marginTop: "-100px",
    marginLeft: "-50px",
  }

  return (
     <FormGroup style={buttons}>
      <FormControlLabel control={<Switch onChange={handleChange1} checked={checked1} defaultChecked />} label="Valve 1" />
      <FormControlLabel control={<Switch onChange={handleChange2} checked={checked2} defaultChecked />} label="Valve 2" />
      <FormControlLabel control={<Switch onChange={handleChange3} checked={checked3} defaultChecked />} label="Valve 3" />
      <FormControlLabel control={<Switch onChange={handleChange4} checked={checked4} defaultChecked />} label="Valve 4" />
    </FormGroup>
  );

}
