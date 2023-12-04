"use client";

import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { ISourceOptions } from "tsparticles-engine";
import Particles from "react-particles";

import ParticleConfig from "./particle.json"


export default function ParticlesComponent(props: { id: string }) {
    const themeConfig = ParticleConfig
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id={props.id}
            init={particlesInit}
            options={themeConfig as ISourceOptions}
        />
    );
};