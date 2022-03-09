import React from "react";
import Navbar from "./Componets/Navbar";

import Text from "./Componets/Text"
import Image from "./Componets/Image";
import More from "./Componets/More";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Undo from "./Componets/Undo";
import Redo from './Componets/Redo';
import Proof from './Componets/Proof';

import Save from './Componets/Save';

function App() {
  

  return (
    
        <BrowserRouter>
          <Navbar />

     <Routes>
     <Route index  path="/" element={<Text/>} />
     <Route  path="/image" element={<Image/>} />
     <Route  path="/" element={<More/>} />
     <Route path="/undo" element={<Undo/>} />
     <Route path="/" element={<Redo/>} />
     <Route path="/" element={<Proof/>} />
     <Route path="/" element={<Save/>} />


     {/* <Route  path="" element={<DeleteConfirmation/>} /> */}



     
     </Routes>
     </BrowserRouter>

       
  );
}
export default App;
