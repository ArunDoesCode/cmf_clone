import React from "react";

import guy from "../assets/guy.png";
const Guy = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${guy})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "120vh",
        width: "100%",
      }}
      class="text-white p-8 flex items-end"
    >
      <div  class =' p-6 w-1/2 '>
      <h1 class="text-5xl font-letteraMonoLL">TUNE IN AND OUT<br/>AS YOU NEED</h1>
        <p class='font-franklinGothicBook text-base pt-6 text-start font-thin'
        style={{
          lineHeight: "20.41px",
        }}>
          With a depth of 42 dB and a bandwidth of up 2900 Hz, CMF <br/>Buds block
          out the unwanted noise. The external HD <br/> microphone detects ambient
          noise, then the internal processor<br/> generates inverse sound waves that
          are emitted through the<br/>speakers to mute it. Also supports
          Transparency Mode so you <br/> can tune back in when life calls.
        </p>

      </div>
       
    </div>
  );
};

export default Guy;
