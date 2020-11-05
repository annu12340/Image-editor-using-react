import React from "react";
import download from "./download.jpg";
import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon } from "react-share";

const Share = () => {
   let msg = "Check out my cool picture";
   let url = "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201910/everest-770x433.jpeg?DkSLZAPfQSncJakqbZvW6t3TIytzUApc";
   return (
      <div>
         <FacebookShareButton quote={msg} hashtag='#photography #editing' url={url}>
            <FacebookIcon size={36} round={true} />
         </FacebookShareButton>

         <LinkedinShareButton url={url} title={msg} media={download}>
            <LinkedinIcon size={32} round={true} />
         </LinkedinShareButton>

         <WhatsappShareButton title={msg} media={download} url={url}>
            <WhatsappIcon size={32} round={true} />
         </WhatsappShareButton>

         <TwitterShareButton url={url} subject={msg} body={msg}>
            <TwitterIcon size={32} round={true} />
         </TwitterShareButton>
      </div>
   );
};
export default Share;
