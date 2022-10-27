import Particles from "react-tsparticles";
import particlesConfig from "./config/particlesConfig";

function ParticlesBackground() {
  return <Particles params={particlesConfig}></Particles>;
}

export default ParticlesBackground;
