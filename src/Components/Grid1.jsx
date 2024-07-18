
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
    <div
      className="grid-container"
    >
      <div
        className="grid-card-1 grid-img"
        style={{
          backgroundImage: `url(${black_left_earbud})`,
        }}
      >
        <article className="grid-card-1-content">
          <h1>
            <span className="text-4xl">42</span>dB
          </h1>
          <p className="pt-2"> Active Noise Cancellation with <br />Transparency Mode<sup>1</sup></p>
        </article>
      </div>

      <div
        className="grid-card-2 grid-img" 
        style={{
          backgroundImage: `url(${bluetooth_black})`
        }}
      >
        <p className="grid-card-2-content">
          BLUETOOTH 5.3 AND <br />FAST PAIR
        </p>
      </div>

      <div
        className="grid-card-3 grid-img"
        style={{
          backgroundImage: `url(${orange_buds_case})`
        }}
      >
        <article className="grid-card-3-content">
          <p className="text-4xl font-medium">35.5 <span className="uppercase text-lg">hours</span></p>
          <p className="text-sm">Total playback</p>
          <p className="text-4xl font-medium">6.5 <span className="uppercase text-lg">hours</span></p>
          <p className="text-sm">With 10 minutes of<br/>charge²</p>
        </article>
      </div>

      <div
        className="grid-card-4 grid-img"
        style={{
          backgroundImage: `url(${girl})`
        }}
      >
        <article className="grid-card-4-content">
          <h1 className="text-4xl">4 <span className="text-lg">HD</span></h1>
          <p className="pt-1">mics with Clear Voice Technology³</p>
        </article>
      </div>


      <div
        className="grid-card-5 grid-img"
        style={{
          backgroundImage: `url(${dirac})`
        }}
      >
        <p className="grid-card-5-content">HIGH-DEFINITION AUDIO TUNED BY DIRAC</p>
      </div>

      <div
        className="grid-card-6 grid-img"
        style={{
          backgroundImage: `url(${bud_detail})`
        }}
      >
        <article className="grid-card-6-content">
          <h1><span className="text-4xl">12.4</span> mm</h1>
          <p className="text-base pt-2">Bio-fibre + custom TPU diaphragm</p>
        </article>
      </div>

      <div
        className="grid-card-7"
        style={{
          backgroundImage: `url(${black_buds_only})`,
          backgroundPosition: "center 60px",
          backgroundSize: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <article className=" grid-card-7-content">
          <h1 className="text-4xl">IP54</h1>
          <p className="pt-2 text-base">Dust and water resistance⁴</p>
        </article>
      </div>

      <div
        className="grid-card-8 grid-img"
        style={{
          backgroundImage: `url(${phone_bottom})`
        }}
      >
        <p className="grid-card-8-content">ULTRA BASS<br />TECHNOLOGY 2.0</p>
      </div>

      <div
        className="grid-card-9 grid-img"
        style={{
          backgroundImage: `url(${black_buds_rev})`
        }}>
        <h1 className="grid-card-9-content"> DUAL-DEVICE CONNECTION</h1>
      </div>

      <div
        className="grid-card-10 grid-img"
        style={{
          backgroundImage: `url(${game_mode})`,
        }}
      >
        <div className="grid-card-10-content">
          <h1>LOW LAG MODE</h1>
          <p> Nothing X app and Nothing<br />smartphones⁵</p>
        </div>
      </div>

    </div>
  );
};

export default Grid1;
