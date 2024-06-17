// Page.js
import React from 'react';
import ReasonList from './ReasonList';
import FooterComponent from './FooterComponent';
import NavbarComponent from './NavbarComponent';

function Page() {
  return (
    <div>
      <NavbarComponent />
      <h1>My Awesome React Web App</h1>
      <h3>Reasons I Love React</h3>
      <ReasonList />
      <FooterComponent />
    </div>
  );
}

export default Page;