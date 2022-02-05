import React, { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { flushSync } from 'react-dom';

// const Http = XMLHttpRequest();

export default function ControlButton(props) {

  // const [checked, setChecked] = useState()
  const baseUrl = "http://192.168.20.9"
  const checkState = baseUrl + "/" + props.num + "/state";
  const low = baseUrl + "/" + props.num + "/low";
  const high = baseUrl + "/" + props.num + "/high";

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  useEffect(() => {
    sync()
  }, []);
  

  function sync(){
    fetch(baseUrl + "/4/state")
    .then(res => res.json())
    .then(data => {
      if(data.Output == "LOW"){
        setChecked4(false)
      }else{
        setChecked4(true)
      }
    })
    .catch(err => console.log(err))
    fetch(baseUrl + "/3/state")
    .then(res => res.json())
    .then(data => {
      if(data.Output == "LOW"){
        setChecked3(false)
      }else{
        setChecked3(true)
      }
    })
    .catch(err => console.log(err))
    fetch(baseUrl + "/2/state")
    .then(res => res.json())
    .then(data => {
      if(data.Output == "LOW"){
        setChecked2(false)
      }else{
        setChecked2(true)
      }
    })
    .catch(err => console.log(err))
    fetch(baseUrl + "/1/state")
    .then(res => res.json())
    .then(data => {
      if(data.Output == "LOW"){
        setChecked1(false)
      }else{
        setChecked1(true)
      }
    })
    .catch(err => console.log(err))
  }


  const handleChange1 = (event) => {
    if(!checked2 && !checked3 && !checked4){
      if(!checked1){
        handleChecked1()
      }else{
        handleUnChecked1()
      }
      setChecked1(event.target.checked);
    }
  };

  function handleChecked1(){
    fetch(baseUrl + "/1/high")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
  }

  function handleUnChecked1(){
    fetch(baseUrl + "/1/low")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
  }
  

  const handleChange2 = (event) => {
    if(!checked1 && !checked3 && !checked4){
      if(!checked2){
        handleChecked2()
      }else{
        handleUnChecked2()
      }
      setChecked2(event.target.checked);
    }
  };

  function handleChecked2(){
    fetch(baseUrl + "/2/high")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
  }

  function handleUnChecked2(){
    fetch(baseUrl + "/2/low")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
  }
  

  const handleChange3 = (event) => {
    if(!checked1 && !checked2 && !checked4){
      if(!checked3){
        handleChecked3()
      }else{
        handleUnChecked3()
      }
      setChecked3(event.target.checked);
    }
  };

  function handleChecked3(){
    fetch(baseUrl + "/3/high")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
  }

  function handleUnChecked3(){
    fetch(baseUrl + "/3/low")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
  }

  const handleChange4 = (event) => {
    if(!checked1 && !checked2 && !checked3){
      if(!checked4){
        handleChecked4()
      }else{
        handleUnChecked4()
      }
      setChecked4(event.target.checked);
    }
  };

  function handleChecked4(){
    fetch(baseUrl + "/4/high")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
  }

  function handleUnChecked4(){
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
      <FormControlLabel control={<Switch onChange={handleChange1} checked={checked1} defaultChecked />} label="Lawn" />
      <FormControlLabel control={<Switch onChange={handleChange2} checked={checked2} defaultChecked />} label="Ferns" />
      <FormControlLabel control={<Switch onChange={handleChange3} checked={checked3} defaultChecked />} label="Top Level Orchard" />
      <FormControlLabel control={<Switch onChange={handleChange4} checked={checked4} defaultChecked />} label="Fence" />
    </FormGroup>
  );

}
