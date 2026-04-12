"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const STAR_COUNT = 9200;
const BRIGHT_STAR_COUNT = 780;
const STARFIELD_SPREAD = 1320;

const createStarTexture = (): THREE.Texture => {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    const gradient = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2,
    );
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.35, "rgba(255,255,255,0.95)");
    gradient.addColorStop(0.55, "rgba(255,255,255,0.4)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");

    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.needsUpdate = true;
  return texture;
};

const createStarGeometry = (count: number) => {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const radius = 280 + Math.random() * (STARFIELD_SPREAD - 280);
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);

    const value = 0.75 + Math.random() * 0.25;
    colors[i3] = value;
    colors[i3 + 1] = value;
    colors[i3 + 2] = value;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  return geometry;
};

export default function SpaceBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 1800);
    camera.position.set(0, 0, 0.1);
    camera.lookAt(0, 0, -1);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setClearColor(0x0f0f11, 0);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    const starTexture = createStarTexture();

    const mainStars = new THREE.Points(
      createStarGeometry(STAR_COUNT),
      new THREE.PointsMaterial({
        size: 2.1,
        map: starTexture,
        alphaMap: starTexture,
        transparent: true,
        opacity: 0.88,
        depthWrite: false,
        sizeAttenuation: true,
        vertexColors: true,
      }),
    );
    mainStars.rotation.set(
      THREE.MathUtils.degToRad(45),
      0,
      THREE.MathUtils.degToRad(45),
    );
    scene.add(mainStars);

    const brightStars = new THREE.Points(
      createStarGeometry(BRIGHT_STAR_COUNT),
      new THREE.PointsMaterial({
        size: 2.6,
        map: starTexture,
        alphaMap: starTexture,
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
        sizeAttenuation: true,
        color: new THREE.Color(0xffffff),
      }),
    );
    brightStars.rotation.copy(mainStars.rotation);
    scene.add(brightStars);

    const pointLight = new THREE.PointLight(0xffffff, 0.3);
    pointLight.position.set(140, 120, 110);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const resize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    resize();
    window.addEventListener("resize", resize);

    const target = targetRef.current;
    const handlePointer = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 0.35;
      target.y = ((event.clientY - rect.top) / rect.height - 0.5) * 0.35;
    };

    container.addEventListener("pointermove", handlePointer);

    const animate = () => {
      mainStars.rotation.y += 0.0008;
      brightStars.rotation.y += 0.00095;
      mainStars.rotation.x += (target.y - mainStars.rotation.x) * 0.02;
      mainStars.rotation.z += (target.x - mainStars.rotation.z) * 0.01;
      brightStars.rotation.x = mainStars.rotation.x;
      brightStars.rotation.y = mainStars.rotation.y * 1.02;
      brightStars.rotation.z = mainStars.rotation.z;
      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      container.removeEventListener("pointermove", handlePointer);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      mainStars.geometry.dispose();
      (mainStars.material as THREE.Material).dispose();
      brightStars.geometry.dispose();
      (brightStars.material as THREE.Material).dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 h-screen w-full">
      <div ref={containerRef} className="absolute inset-0 z-0 h-full w-full" />
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), " +
            "linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "96px 96px, 96px 96px",
          opacity: 0.18,
        }}
      />
    </div>
  );
}
