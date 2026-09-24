import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import * as THREE from "three";
import Reveal from "../common/Reveal";

function GlobeSection() {
  const globeRef = useRef(null);

  useEffect(() => {
    const container = globeRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      28,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );

    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    renderer.setSize(
      container.clientWidth,
      container.clientHeight
    );

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    container.appendChild(renderer.domElement);

    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";

    // =====================================================
    // EARTH GROUP
    // =====================================================

    const earthGroup = new THREE.Group();

    scene.add(earthGroup);

    /*
      IMPORTANT:
      Earth অনেক বড় করা হয়েছে এবং center নিচে রাখা হয়েছে।
      তাই screen-এ শুধু upper half / horizon দেখা যাবে।
    */

  earthGroup.scale.set(2.55, 2.55, 2.55);

    // Start from below
    earthGroup.position.y = -5.2;

    // Slight tilt for cinematic horizon
    earthGroup.rotation.x =
      THREE.MathUtils.degToRad(-8);

    earthGroup.rotation.z =
      THREE.MathUtils.degToRad(-2);

    // =====================================================
    // EARTH TEXTURES
    // =====================================================

    const loader = new THREE.TextureLoader();

    const earthTexture = loader.load(
      "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg"
    );

    const earthNormal = loader.load(
      "https://threejs.org/examples/textures/planets/earth_normal_2048.jpg"
    );

    const earthSpecular = loader.load(
      "https://threejs.org/examples/textures/planets/earth_specular_2048.jpg"
    );

    const cloudTexture = loader.load(
      "https://threejs.org/examples/textures/planets/earth_clouds_1024.png"
    );

    earthTexture.colorSpace =
      THREE.SRGBColorSpace;

    cloudTexture.colorSpace =
      THREE.SRGBColorSpace;

    // =====================================================
    // EARTH
    // =====================================================

    const earthGeometry =
      new THREE.SphereGeometry(
        2.3,
        128,
        128
      );

    const earthMaterial =
      new THREE.MeshPhongMaterial({
        map: earthTexture,
        normalMap: earthNormal,
        specularMap: earthSpecular,
        specular: new THREE.Color(0x6fa8ff),
        shininess: 22,
      });

    const earth = new THREE.Mesh(
      earthGeometry,
      earthMaterial
    );

    earthGroup.add(earth);

    // =====================================================
    // CLOUD LAYER
    // =====================================================

    const cloudGeometry =
      new THREE.SphereGeometry(
        2.325,
        128,
        128
      );

    const cloudMaterial =
      new THREE.MeshPhongMaterial({
        map: cloudTexture,
        transparent: true,
        opacity: 0.5,
        depthWrite: false,
      });

    const clouds = new THREE.Mesh(
      cloudGeometry,
      cloudMaterial
    );

    earthGroup.add(clouds);

    // =====================================================
    // ATMOSPHERE
    // =====================================================

    const atmosphereGeometry =
      new THREE.SphereGeometry(
        2.38,
        128,
        128
      );

    const atmosphereMaterial =
      new THREE.MeshBasicMaterial({
        color: 0x21a9ff,
        transparent: true,
        opacity: 0.16,
        side: THREE.BackSide,
      });

    const atmosphere = new THREE.Mesh(
      atmosphereGeometry,
      atmosphereMaterial
    );

    earthGroup.add(atmosphere);

    // =====================================================
    // LIGHTING
    // =====================================================

    const ambientLight =
      new THREE.AmbientLight(
        0x8bbcff,
        0.4
      );

    scene.add(ambientLight);

    const sunLight =
      new THREE.DirectionalLight(
        0xffffff,
        2.8
      );

    sunLight.position.set(
      -5,
      4,
      6
    );

    scene.add(sunLight);

    const blueLight =
      new THREE.DirectionalLight(
        0x168cff,
        0.65
      );

    blueLight.position.set(
      4,
      0,
      -5
    );

    scene.add(blueLight);

    // =====================================================
    // STARS
    // =====================================================

    const starCount = 1300;

    const starPositions =
      new Float32Array(
        starCount * 3
      );

    for (let i = 0; i < starCount; i++) {
      const radius =
        13 + Math.random() * 25;

      const theta =
        Math.random() *
        Math.PI *
        2;

      const phi =
        Math.acos(
          2 * Math.random() - 1
        );

      starPositions[i * 3] =
        radius *
        Math.sin(phi) *
        Math.cos(theta);

      starPositions[i * 3 + 1] =
        radius *
        Math.cos(phi);

      starPositions[i * 3 + 2] =
        radius *
        Math.sin(phi) *
        Math.sin(theta);
    }

    const starGeometry =
      new THREE.BufferGeometry();

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        starPositions,
        3
      )
    );

    const starMaterial =
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.025,
        transparent: true,
        opacity: 0.75,
      });

    const stars =
      new THREE.Points(
        starGeometry,
        starMaterial
      );

    scene.add(stars);

    // =====================================================
    // SMOOTH EARTH RISE
    // =====================================================

    let earthTargetY = -3.65;

    let currentY =
      earthGroup.position.y;

    // =====================================================
    // ANIMATION
    // =====================================================

    let animationId;

    const animate = () => {
      animationId =
        requestAnimationFrame(
          animate
        );

      // -----------------------------------------
      // Smoothly rise from bottom
      // -----------------------------------------

      currentY +=
        (earthTargetY - currentY) *
        0.008;

      earthGroup.position.y =
        currentY;

      // -----------------------------------------
      // Very slow realistic rotation
      // -----------------------------------------

      earth.rotation.y += 0.00065;

      clouds.rotation.y +=
        0.00082;

      // -----------------------------------------
      // Tiny star movement
      // -----------------------------------------

      stars.rotation.y +=
        0.000015;

      renderer.render(
        scene,
        camera
      );
    };

    animate();

    // =====================================================
    // RESIZE
    // =====================================================

    const handleResize = () => {
      if (!container) return;

      const width =
        container.clientWidth;

      const height =
        container.clientHeight;

      camera.aspect =
        width / height;

      camera.updateProjectionMatrix();

      renderer.setSize(
        width,
        height
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    // =====================================================
    // CLEANUP
    // =====================================================

    return () => {
      cancelAnimationFrame(
        animationId
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      earthGeometry.dispose();
      cloudGeometry.dispose();
      atmosphereGeometry.dispose();

      earthMaterial.dispose();
      cloudMaterial.dispose();
      atmosphereMaterial.dispose();

      starGeometry.dispose();
      starMaterial.dispose();

      renderer.dispose();

      if (
        renderer.domElement.parentNode ===
        container
      ) {
        container.removeChild(
          renderer.domElement
        );
      }
    };
  }, []);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-950
        pb-8
        pt-10
        text-center
      "
    >

      {/* =================================================
          REALISTIC EARTH HORIZON
          ================================================= */}

      <Reveal>
       <div
  ref={globeRef}
  className="
    relative
    mx-auto
    h-[280px]
    w-full
    max-w-[1500px]
    overflow-hidden
  "
/>

        {/* Bottom atmospheric glow */}
       <div
  className="
    pointer-events-none
    absolute
    left-1/2
    top-[75px]
    h-[180px]
    w-[900px]
    -translate-x-1/2
    rounded-full
    bg-cyan-400/10
    blur-[110px]
  "
/>
      </Reveal>

      {/* =================================================
          TEXT
          ================================================= */}

      <Reveal delay={180}>
        <p className="mt-5 text-sm text-slate-400">
          Businesses in 30+ countries automate with Fexa Agent
        </p>

        <div className="mt-3 flex items-center justify-center gap-3">

          <div className="flex -space-x-2">
            {["S", "M", "J", "R"].map((i) => (
              <span
                key={i}
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-slate-950
                  bg-emerald-500/20
                  text-xs
                  font-semibold
                  text-emerald-300
                "
              >
                {i}
              </span>
            ))}
          </div>

          <div className="flex gap-0.5">
            {Array.from({
              length: 5,
            }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className="
                  fill-amber-400
                  text-amber-400
                "
              />
            ))}
          </div>

          <span className="text-xs text-slate-500">
            4.9/5 from 500+ reviews
          </span>

        </div>
      </Reveal>
    </section>
  );
}

export default GlobeSection;