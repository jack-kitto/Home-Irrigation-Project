import React from 'react';
// import { Container } from 'react-bootstrap';
// import Signup from './components/auth/Signup';
import ControlButton from './components/controlButtons/ControlButton';
// import { AuthProvider } from './components/contexts/AuthContext';

export default function App() {
  return(
    <div>
    {/* <AuthProvider>
      <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: "100vh" }}>
        <div className='w-100' style={{ maxWidth: "400px" }}>
          <Signup />
        </div> */}
      {/* </Container> */}
      <ControlButton />
    {/* </AuthProvider> */}
    </div>
  );
}
