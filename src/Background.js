import React from "react";
import ParticleBackground from "react-particle-backgrounds";

export default function Background() {
  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 200,
      height: 100,
      ueBouncyWalls: false,
    },
    particle: {
      particleCount: 200,
      color: "rgb(105, 69, 94)",
      maxSize: 4,
    },
    velocity: {
      directionAngle: 180,
      directionAngleVariance: 60,
      minSpeed: 0.1,
      maxSpeed: 0.3,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.6,
      opacityTransitionTime: 10000,
    },
  };

  return <ParticleBackground settings={settings} />;
}
