import React, { useState } from "react";
import Share from "./Share";
import { EmailShareButton, EmailIcon } from "react-share";

const Edits = ({ img }) => {
   const UploadedImg = React.useRef(null);
   const [Height, setHeight] = useState(500);
   const [Width, setWidth] = useState(600);
   const HandleClick = (filter, val) => {
      window.Caman(`#${UploadedImg.current.id}`, function () {
         if (filter === "brightness") {
            this.brightness(val).render();
         } else if (filter === "contrast") {
            this.contrast(val).render();
         } else if (filter === "sepia") {
            this.sepia(val).render();
         } else if (filter === "saturation") {
            this.saturation(val).render();
         } else if (filter === "noise") {
            this.noise(val).render();
         } else if (filter === "sharpen") {
            this.sharpen(val).render();
         } else if (filter === "stackBlur") {
            this.stackBlur(val).render();
         }
      });
   };

   const HandleEffects = (effect) => {
      window.Caman(`#${UploadedImg.current.id}`, function () {
         if (effect === "vintage") {
            this.vintage().render();
         } else if (effect === "lomo") {
            this.lomo().render();
         } else if (effect === "clarity") {
            this.clarity().render();
         } else if (effect === "sunrise") {
            this.sunrise().render();
         } else if (effect === "pinhole") {
            this.pinhole().render();
         }
      });
   };

   const crop = (e) => {
      e.preventDefault();
      let h = Height;
      let w = Width;
      console.log(h, { Width });
      window.Caman(`#${UploadedImg.current.id}`, function () {
         this.crop(h, w);
         this.render();
      });
   };

   const download = () => {
      console.log("download");
      window.Caman(`#${UploadedImg.current.id}`, img, function () {
         this.render(function () {
            this.save("png");
            // add .png/.jpg to the downloaded file
         });
      });
   };
   const email = () => {
      console.log(this);
      window.Caman(`#${UploadedImg.current.id}`, function () {
         this.render(function () {
            var image = new Image();
            image.src = this.toBase64();
            var link = document.createElement("a");
            link.innerHTML = "Send mail";
            link.href = `https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=Sending an image&body=Hey check out this image` + this;
            document.body.appendChild(link);
         });
      });
   };

   const SliderHeight = (e) => {
      setHeight(e.target.value);
   };
   const SliderWidth = (e) => {
      setWidth(e.target.value);
   };
   return (
      <div className='row'>
         <div className='preview'>
            <img id='UploadedImg' ref={UploadedImg} src={img} alt='' style={{ maxHeight: 600 }} />
         </div>
         <div className='add-effects container-fluid'>
            <div className='row'>
               <div className='col-3'>
                  <button onClick={() => HandleClick("brightness", 10)} className='btn  btn-sm btn-outline-success'>
                     +
                  </button>
                  &nbsp; Brightness &nbsp;
                  <button onClick={() => HandleClick("brightness", -10)} className='btn  btn-sm btn-outline-danger'>
                     -
                  </button>
               </div>

               <div className='col-3'>
                  <button onClick={() => HandleClick("stackBlur", 10)} className='btn  btn-sm btn-outline-success'>
                     +
                  </button>
                  &nbsp; Blur &nbsp;
                  <button onClick={() => HandleClick("stackBlur", -10)} className='btn  btn-sm btn-outline-danger' className='btn  btn-sm btn-outline-danger'>
                     -
                  </button>
               </div>
               <div className='col-3'>
                  <button onClick={() => HandleClick("sepia", 10)} className='btn  btn-sm btn-outline-success'>
                     +
                  </button>
                  &nbsp; Sepia &nbsp;
                  <button onClick={() => HandleClick("sepia", -10)} className='btn  btn-sm btn-outline-danger'>
                     -
                  </button>
               </div>

               <div className='col-3'>
                  <button onClick={() => HandleClick("saturation", 10)} className='btn  btn-sm btn-outline-success'>
                     +
                  </button>
                  &nbsp; Saturation &nbsp;
                  <button onClick={() => HandleClick("saturation", -10)} className='btn  btn-sm btn-outline-danger'>
                     -
                  </button>
               </div>
               <br />
               <br />

               <div className='col-3'>
                  <button onClick={() => HandleClick("contrast", 10)} className='btn  btn-sm btn-outline-success'>
                     +
                  </button>
                  &nbsp; Contrast &nbsp;
                  <button onClick={() => HandleClick("contrast", -10)} className='btn  btn-sm btn-outline-danger'>
                     -
                  </button>
               </div>

               <div className='col-3'>
                  <button onClick={() => HandleClick("noise", 10)} className='btn  btn-sm btn-outline-success'>
                     +
                  </button>
                  &nbsp; Noise &nbsp;
                  <button onClick={() => HandleClick("noise", -10)} className='btn  btn-sm btn-outline-danger'>
                     -
                  </button>
               </div>

               <div className='col-3'>
                  <button onClick={() => HandleClick("sharpen", 10)} className='btn  btn-sm btn-outline-success'>
                     +
                  </button>
                  &nbsp; Sharpen &nbsp;
                  <button onClick={() => HandleClick("sharpen", -10)} className='btn  btn-sm btn-outline-danger'>
                     -
                  </button>
               </div>
            </div>
            <div className='effects container-fluid'>
               <div className='row'>
                  <button className='col-1  btn btn-info' onClick={() => HandleEffects("vintage")}>
                     vintage
                  </button>
                  <button className='col-1  btn btn-info' onClick={() => HandleEffects("lomo")}>
                     lomo
                  </button>
                  <button className='col-1  btn btn-info' onClick={() => HandleEffects("clarity")}>
                     clarity
                  </button>
                  <button className='col-1  btn btn-info' onClick={() => HandleEffects("sunrise")}>
                     sunrise
                  </button>
                  <button className='col-1  btn btn-info' onClick={() => HandleEffects("pinhole")}>
                     pinhole
                  </button>
               </div>
            </div>
            <div className='crop'>
               <div className='d-flex justify-content-center my-4'>
                  <form className='range-field w-50'>
                     <label htmlFor='height'>height {Height}</label>
                     <span className='font-weight-bold blue-text mr-2 mt-1'>0</span>
                     <input className='border-0' type='range' min='10' max='400' id='height' onChange={SliderHeight} />
                     <span className='font-weight-bold blue-text ml-2 mt-1'>100</span>
                     <label htmlFor='width'>width {Width}</label>
                     <span className='font-weight-bold blue-text mr-2 mt-1'>0</span>
                     <input className='border-0' type='range' min='10' max='400' id='width' onChange={SliderWidth} />
                     <span className='font-weight-bold blue-text ml-2 mt-1'>100</span>
                     <br />

                     <button onClick={crop} className='btn btn-dark text-center'>
                        Crop
                     </button>
                  </form>
               </div>
            </div>
         </div>

         <br />
         <div className='container'>
            <div className='share text-center row'>
               <div className='col-3'>
                  <button className='btn btn-danger btn-block' onClick={download}>
                     Download image
                  </button>
               </div>
               <div className='col-9'>
                  <span>
                     <EmailShareButton onClick={email}>
                        <EmailIcon size={32} round={true} />
                     </EmailShareButton>
                  </span>
                  <span>
                     <Share />
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Edits;
