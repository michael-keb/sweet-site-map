/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { useRef, useState, ReactNode } from 'react';
import { Canvas, createPortal, useFrame, useThree, ThreeElements } from '@react-three/fiber';
import {
  useFBO,
  Scroll,
  Preload,
  ScrollControls,
  MeshTransmissionMaterial,
} from '@react-three/drei';
import { easing } from 'maath';

type Mode = 'lens' | 'bar';

type ModeProps = Record<string, unknown>;

interface FluidGlassProps {
  mode?: Mode;
  lensProps?: ModeProps;
  barProps?: ModeProps;
  height?: string;
  children?: ReactNode;
}

export default function FluidGlass({ 
  mode = 'lens', 
  lensProps = {}, 
  barProps = {},
  height = '100%',
  children 
}: FluidGlassProps) {
  const Wrapper = mode === 'bar' ? Bar : Lens;
  const modeProps = mode === 'bar' ? barProps : lensProps;

  return (
    <div style={{ height, width: '100%', position: 'relative' }}>
      <Canvas 
        camera={{ position: [0, 0, 20], fov: 15 }} 
        gl={{ alpha: true }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      >
        <ScrollControls damping={0.2} pages={1} distance={0}>
          <Wrapper modeProps={modeProps}>
            <Scroll>
              {/* Background scene content */}
            </Scroll>
            <Scroll html />
            <Preload />
          </Wrapper>
        </ScrollControls>
      </Canvas>
      {/* HTML content that gets distorted */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}

type MeshProps = ThreeElements['mesh'];

interface ModeWrapperProps extends MeshProps {
  children?: ReactNode;
  geometry: THREE.BufferGeometry;
  lockToBottom?: boolean;
  followPointer?: boolean;
  modeProps?: ModeProps;
}

interface ZoomMaterial extends THREE.Material {
  zoom: number;
}

function ModeWrapper({
  children,
  geometry,
  lockToBottom = false,
  followPointer = true,
  modeProps = {},
  ...props
}: ModeWrapperProps) {
  const ref = useRef<THREE.Mesh>(null!);
  const buffer = useFBO();
  const { viewport: vp } = useThree();
  const [scene] = useState<THREE.Scene>(() => new THREE.Scene());

  useFrame((state, delta) => {
    const { gl, viewport, pointer, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

    const destX = followPointer ? (pointer.x * v.width) / 2 : 0;
    const destY = lockToBottom ? -v.height / 2 + 0.5 : followPointer ? (pointer.y * v.height) / 2 : 0;
    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);

    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
  });

  const { scale, ior, thickness, anisotropy, chromaticAberration, ...extraMat } = modeProps as {
    scale?: number;
    ior?: number;
    thickness?: number;
    anisotropy?: number;
    chromaticAberration?: number;
    [key: string]: unknown;
  };

  return (
    <>
      {createPortal(children, scene)}
      <mesh scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>
      <mesh
        ref={ref}
        scale={scale ?? 0.25}
        rotation-x={Math.PI / 2}
        geometry={geometry}
        {...props}
      >
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior ?? 1.15}
          thickness={thickness ?? 5}
          anisotropy={anisotropy ?? 0.01}
          chromaticAberration={chromaticAberration ?? 0.1}
          {...(typeof extraMat === 'object' && extraMat !== null ? extraMat : {})}
        />
      </mesh>
    </>
  );
}

function Lens({ modeProps, ...p }: { modeProps?: ModeProps } & MeshProps) {
  const geometry = new THREE.CylinderGeometry(2, 2, 0.5, 32);
  return <ModeWrapper geometry={geometry} followPointer modeProps={modeProps} {...p} />;
}

function Bar({ modeProps = {}, ...p }: { modeProps?: ModeProps } & MeshProps) {
  const geometry = new THREE.BoxGeometry(8, 0.5, 0.5);
  
  const defaultMat = {
    transmission: 1,
    roughness: 0,
    thickness: 10,
    ior: 1.15,
    color: '#ffffff',
    attenuationColor: '#ffffff',
    attenuationDistance: 0.25,
    scale: 1
  };

  return (
    <ModeWrapper
      geometry={geometry}
      lockToBottom
      followPointer={false}
      modeProps={{ ...defaultMat, ...modeProps }}
      {...p}
    />
  );
}
