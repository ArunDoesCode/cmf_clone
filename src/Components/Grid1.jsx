import React from "react";

import black_left_earbud from "../assets/black_left_earbud.png";
import bluetooth_black from "../assets/bluetooth_black.png";
import dirac from "../assets/dirac.png";
import bud_detail from "../assets/bud_detail.png";
import orange_buds_case from "../assets/orange_buds_case.png";
import girl from "../assets/girl.png";
import phone_bottom from "../assets/phone_bottom.png";
import black_buds_only from "../assets/black_buds_only.png";
import black_buds_rev from "../assets/black_buds_rev.png";
import game_mode from "../assets/game_mode.png";

const Grid1 = () => {
  return (
    <div class="grid grid-cols-4 gap-5 bg-white py-4 px-3"
	style={{
		height:"130vh",
	}}>

      <div class="realtive rounded-xl row-span-2"
	  style={{
        backgroundImage: `url(${black_left_earbud})`,
        backgroundPosition: "center",
		backgroundSize:"cover",
		height: "100%", 

      }}>
		<article class='font-franklinGothicBook absolute p-4 z-10'>
			<h1 ><span class='text-4xl'>42</span>dB</h1>
		<p class='pt-2'>Active Noise Cancellation with<br/>Transparency Mode<sup>1</sup></p>
		</article>
        
      </div>


	<div class='relative rounded-xl'
	style={{
		backgroundImage: `url(${bluetooth_black})`,
		backgroundPosition: "center",
		backgroundSize:"cover",
		height: "100%", 
	  }}>

		<p class='absolute inset-0 flex justify-start items-center p-8 font-franklinGothicBook text-base'>BLUETOOTH 5.3 AND <br/>FAST PAIR</p>

	</div>



      <div class="relative col-auto row-span-3 rounded-xl"
	  style={{
		backgroundImage: `url(${orange_buds_case})`,
		backgroundPosition: "center",
		backgroundSize:"cover",
		height: "100%", 
	  }}>

		<article class='absolute font-franklinGothicBook p-6'>
			<p class='text-4xl font-medium'>35.5 <span class='uppercase text-lg'>hours</span> </p>
			<p class='text-sm'>Total playback</p>
			<p class='text-4xl font-medium'>6.5 <span class='uppercase text-lg'>hours</span> </p>
			<p class='text-sm'> With 10 minutes of<br/>charge²</p>
		</article>
          
      </div>

	  <div class="relative col-auto row-span-2 rounded-xl"
	  style={{
		backgroundImage: `url(${girl})`,
		backgroundPosition: "center",
		backgroundSize:"cover",
		height: "100%", 
	  }}>
		<article class='absolute font-franklinGothicBook text-white pl-7 mt-2 py-6'>
			<h1 class='text-4xl'>4 <span class='text-lg'>HD</span></h1>
			<p class='pt-1'>mics with Clear Voice Technology³</p>
		</article>
      </div>
     


{/* card-05 */}
      <div class="relative rounded-xl col-span-1 row-auto"
	  style={{
		backgroundImage: `url(${dirac})`,
		backgroundPosition: "center",
		backgroundSize:"cover",
		height: "100%", 
	  }}>
		
			<p class='text-white absolute uppercase font-franklinGothicBook text-base p-5'>HIGH-DEFINITION AUDIO TUNED BY DIRAC</p>		
	  </div>

	  <div class="relative row-span-2 rounded-xl"
	  style={{
		backgroundImage: `url(${bud_detail})`,
		backgroundPosition: "center",
		backgroundSize:"cover",
		height: "100%", 
	  }}>
		<article class='absolute font-franklinGothicBook text-white p-4'>
			<h1><span class='text-4xl'>12.4</span> mm</h1>
			<p class='text-base pt-2'>Bio-fibre + custom TPU diaphragm</p>
		</article>
		
      </div>
      
	  <div class="relative bg-half_white row-span-2 rounded-xl"
	  style={{
		backgroundImage: `url(${black_buds_only})`,
		backgroundPosition: "center 60px",
		backgroundSize:"100%",
		height: "100%", 
		backgroundRepeat: 'no-repeat',
	  }}>
		<article class=' absolute px-14 py-6 z-10'>
			<h1 class='text-4xl'>IP54</h1>
		<p class='pt-2 text-base'>Dust and water resistance⁴</p>
		</article>
      </div>
     

      <div class="relative row-span-1 text-white rounded-xl"
	  style={{
		backgroundImage: `url(${phone_bottom})`,
		backgroundPosition: "center",
		backgroundSize:"cover",
		height: "100%", 
	  }}>
		<p class='absolute font-franklinGothicBook text-base inset-0 flex justify-start items-end p-6'>ULTRA BASS<br/>TECHNOLOGY 2.0</p>

		</div>

      <div class="relative rounded-xl"
	  style={{
		backgroundImage: `url(${black_buds_rev})`,
		backgroundPosition: "center",
		backgroundSize:"cover",
		height: "100%", 
	  }}>
		<h1 class='absolute font-franklinGothicBook text-base text-white uppercase inset-0 flex justify-center pt-6'>DUAL-DEVICE CONNECTION</h1>

	</div>

      <div class="relative bg-green rounded-xl"
	  style={{
		backgroundImage: `url(${game_mode})`,
		backgroundPosition: "center",
		backgroundSize:"cover",
		height: "100%", 
	  }}>
		<div class='absolute inset-0 flex  flex-col justify-end p-8 font-franklinGothicBook text-base'>
			<h1>LOW LAG MODE</h1>
			<p>Nothing X app and Nothing<br/>smartphones⁵</p>
		</div>
	  </div>
	  
    </div>
  );
};

export default Grid1;
