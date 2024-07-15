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
      class="text-white p-8 flex place-items-end"
    >
      <article  class =' py-6 w-1/3 '>
      <h3 class="text-5xl font-light tracking-tighter" style={{ wordSpacing: '0.3em' }}>TUNE IN AND OUT<br/>AS YOU NEED</h3>
        <p class='pt-6'>
          With a depth of 42 dB and a bandwidth of up 2900 Hz, CMF Buds block
          out the unwanted noise. The external HD microphone detects ambient
          noise, then the internal processor generates inverse sound waves that
          are emitted through the speakers to mute it. Also supports
          Transparency Mode so you can tune back in when life calls.
        </p>

      </article>
       
    </div>
  );
};

export default Guy;
