import React, { useEffect, useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton'

export default function ControlPanelFrame(props) {

  const [checked, setChecked] = useState();

  useEffect(() => {
    if(props.checked == "LOW") {
      setChecked(false)
    }else{
      setChecked(true)
    }
    console.log(checked)
  }, []);
  
  const button = {
    justifyContent: 'center',
    display: 'flex',
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
  }

  const title = {
    justifyContent: 'center',
    padding: '100px',
    display: 'flex',
    marginRight: 'auto',
    marginLeft: 'auto',
  }

  const container = {
    marginTop: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'space-around',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    width: '50%',
    borderRadius: '2px',
  }

  function handleButton(e) {
    setChecked(e.currentTarget.checked)
    if(checked) {
      fetch("http://192.168.20.8/low")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // setChecked(false)
      })
      .catch(err => console.log(err))
    }else {
      fetch("http://192.168.20.8/high")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // setChecked(true)
      })
      .catch(err => console.log(err))
      }
  }
  return(
      <div style={container}>
          <div style={title}>Control Panel</div>
          <ToggleButton
            className="mb-2"
            id="toggle-check"
            type="checkbox"
            variant="outline-primary"
            checked={checked}
            value="1"
            style={button}
            onChange={handleButton}
          >
          LED
          </ToggleButton>
      </div>
  );
}
