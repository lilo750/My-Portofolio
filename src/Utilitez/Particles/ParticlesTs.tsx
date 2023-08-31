import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import ParticlesConfig from './ParticlesConfig';

export default function ParticlesTs() {
  const handleInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles id='particles' options={ParticlesConfig} init={handleInit} />
  );
}
