import React,{StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Recipe from './Recipe';

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
   <Recipe/>
  </StrictMode>
);
