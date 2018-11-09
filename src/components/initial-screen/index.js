import React from 'react';
import logo from '../../images/logo.svg';
import './initial-screen.css';

export default function InitialScreen() {
  return (
    <>
      <h1 className="app-headline">Chrome DevTools</h1>
      <img src={logo} className="app-logo" alt="logo" />
    </>
  );
}