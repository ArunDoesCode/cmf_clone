
import guy from "../assets/guy.png";
const Guy = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${guy})`
      }}
      className="guy-container"
    >
      <div  className ='p-6 w-1/2'>
        <h1 className="text-5xl font-letteraMonoLL">TUNE IN AND OUT<br/>AS YOU NEED</h1>
        <p className='guy-container-content'>
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
