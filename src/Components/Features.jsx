import React from "react";

import orange_buds_case_open from "../assets/orange_buds_case_open.png";

const Features = () => {
  return (
    <div
      class="grid grid-cols-2 grid-rows-2"
      style={{
        height: "140vh",
        width: "100%",
      }}
    >
      <div class="row-span-2 bg-green flex flex-col">
        <img
          src={orange_buds_case_open}
          class="h-[90%] w-[90%] object-scale-down rounded-xl"
        />

        <div class="h-1/2 pl-12 pr-32">
          <h3
            class="text-4xl"
            style={{
              color: "#424b54",
            }}
          >
            MORE LISTENING, LESS
            <br />
            CHARGING
          </h3>
          <p
            class="pt-4 text-lg"
            style={{
              color: "#424b54",
            }}
          >
            More of what you love, in less time. A large 45 mAh battery in each
            bud. 8 hours of non-stop music on a single charge. 35.5 hours of
            playback with the case. A fast charge to power you ahead.
          </p>
        </div>
      </div>

      <div class="row-span-1 bg-half_white flex flex-col items-center justify-center">
        <div class='-translate-x-24'>
          <h3 class='text-8xl'>8<span class='text-5xl'>   HOURS</span></h3>
          <p class='text-dark_grey m-2 pt-6 text-start'
          style={{
            fontSize:"18px",
            lineHeight:"23.328px",
          }}>
            Earbuds only
            <br />
            8 hours of playback (ANC off)
            <br />
            5.6 hours of playback (ANC on)
            <br />
            10-minute charge = 2.2 hours of listening (ANC off)
          </p>
        </div>
      </div>

      <div class="row-span-1 bg-dark_grey text-white flex flex-col items-center justify-center">
        <div class='-translate-x-24'>
        <h3 class='text-8xl'>35.5<span class='text-5xl'>   HOURS</span></h3>
        <p class='m-2 pt-6 text-start'
          style={{
            fontSize:"18px",
            lineHeight:"23.328px",
          }}>
            Earbuds plus charging case
            <br />
            35.5 hours of playback (ANC off)
            <br />
            24 hours of playback (ANC on)
            <br />
            10-minute charge = 6.5 hours of listening (ANC off)
          </p>
        </div>
        </div>
    </div>
  );
};

export default Features;
