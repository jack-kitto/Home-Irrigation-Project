import React, {useEffect, useState} from 'react';
import ControlPanelFrame from './ControlPanelFrame';

export default function ControlPanel() {
  const [state, setState] = useState("LOW");
  useEffect(() => {
    fetch("http://192.168.20.8/state")
    .then(res => res.json())
    .then(data => setState(data.state))
    .catch(err => console.log(err))
  });
  
  return(
      <div>
          <ControlPanelFrame checked={state} />
      </div>
  );
}
