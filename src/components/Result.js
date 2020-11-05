import React from "react";
import Edits from "./Edits";

const Result = ({ img }) => {
   console.log({ img });
   return (
      <div className='row'>
         <Edits img={img} className='preview-wrapper' />
      </div>
   );
};

export default Result;
