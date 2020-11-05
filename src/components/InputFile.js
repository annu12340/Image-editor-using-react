import React, { useState } from "react";
import Result from "./Result";

const InputFile = () => {
   const [Upload, setUpload] = useState("");
   const handleChange = (e) => {
      setUpload(URL.createObjectURL(e.target.files[0]));
      console.log(URL.createObjectURL(e.target.files[0]));
   };
   return (
      <div>
         <header>
            <h1>Photo booth</h1>

            <div className='row InputForm'>
               <div className='col-5 s6 offset-s3 pl-40'>
                  <input id='upload-file' type='file' onChange={handleChange} />
               </div>
            </div>
         </header>
         <br />
         <br />

         {Upload ? <Result img={Upload} /> : <div className='result'></div>}
      </div>
   );
};

export default InputFile;
