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
    <div class="grid grid-cols-4 gap-4 bg-white py-4 px-3">
{/* card-1 */}
      <div class=" bg-half_white rounded-xl row-span-2">
		{/* <article class='p-4 z-10'>
			<h1 ><span class='text-3xl'>42</span>dB</h1>
		<p class='pt-2'>Active Noise Cancellation with Transparency Mode<sup>1</sup></p>
		</article> */}
		
		<img src={black_left_earbud} alt ="earbuds" className=' '/> 
        
      </div>
	<div class='bg-green rounded-xl'>

		<div class=''>
			{/* <p class='justify-items-center translate-y-24 p-6 z-10'>BLUETOOTH 5.3 AND <br/>FAST PAIR</p> */}
			<img src={bluetooth_black} class=''/>

		</div>
	</div>

{/* card-3 */}

      <div class="bg-half_white col-auto row-span-3 rounded-xl">
		<article class='p-6'>
			<p class='text-3xl font-medium'>35.5 <span class='uppercase text-sm'>hours</span> </p>
			<p>Total playback</p>
			<p class='text-3xl font-medium'>6.5 <span class='uppercase text-sm'>hours</span> </p>
			<p> With 10 minutes of<br/>charge²</p>
		</article>

		<img src={orange_buds_case}/>
          
      </div>

	  <div class="bg-half_white col-auto row-span-2 flex flex-col rounded-xl w-full">
		<article class='text-white px-14 py-6 z-10'>
			<h1 class='text-3xl'>4 HD</h1>
		<p class='pt-2'>mics with Clear Voice Technology³</p>
		</article>
		<img src={girl} alt ="earbuds" className='-translate-y-36'/> 
      </div>
     


{/* card-05 */}
      <div class="bg-dark_grey rounded-xl col-span-1 row-auto">
		<div class=' '>
			{/* <p class='text-white uppercase font-medium p-4 '>HIGH-DEFINITION AUDIO TUNED BY DIRAC</p> */}
			<img src ={dirac} alt='dirac' class=''/>
		</div>
		
	  </div>

	  <div class=" bg-half_white row-span-2 rounded-xl">
		<article class='p-4 z-10'>
			<h1><span class='text-3xl font-semibold'>12.4</span>mm</h1>
		<p class='pt-2'>Bio-fibre + custom TPU diaphragm</p>
		</article>
		
		<img src={bud_detail} alt ="earbuds" className=''/> 
        
      </div>
      
	  <div class=" bg-half_white col-auto row-span-2 flex flex-col rounded-xl w-full">
		<article class='px-14 py-6 z-10'>
			<h1 class='text-3xl'>IP54</h1>
		<p class='pt-2'>Dust and water resistance⁴</p>
		</article>
		
		<img src={black_buds_only} alt ="earbuds" className=''/> 
      </div>
     

      <div class="bg-dark_grey row-span-1 col-auto text-white rounded-xl">
		
		<img src={phone_bottom} class =' '/>
		{/* <p class='p-6'>ULTRA BASS<br/>TECHNOLOGY 2.0</p> */}

		</div>

      <div class="bg-dark_grey flex flex-col items-center rounded-xl">
		<h1 class='text-white uppercase translate-y-8'>DUAL-DEVICE CONNECTION</h1>
		<img src={black_buds_rev}/>
	</div>

      <div class="bg-green rounded-xl flex flex-col justify-center">
		
		<img src={game_mode} class=''/>
	  </div>
	  {/* <div class=''>
			<h1>LOW LAG MODE</h1>
			<p>Nothing X app and Nothing<br/>smartphones⁵</p>
		</div> */}
    </div>
  );
};

export default Grid1;
