import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Torus } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// Portal ring component
function PortalRing({ position, isActive, color }) {
  const ringRef = useRef()
  const particlesRef = useRef()

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.005
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.z -= 0.01
    }
  })

  return (
    <group position={position}>
      {/* Main portal ring */}
      <Torus
        ref={ringRef}
        args={[2, 0.1, 16, 100]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isActive ? 1 : 0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </Torus>

      {/* Inner glow */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2, 64]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={isActive ? 0.3 : 0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Particle ring */}
      <group ref={particlesRef}>
        {[...Array(20)].map((_, i) => {
          const angle = (i / 20) * Math.PI * 2
          return (
            <mesh
              key={i}
              position={[
                Math.cos(angle) * 2.2,
                Math.sin(angle) * 2.2,
                0
              ]}
            >
              <sphereGeometry args={[0.05, 8, 8]} />
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={isActive ? 2 : 0.5}
              />
            </mesh>
          )
        })}
      </group>

      {/* Point light */}
      <pointLight
        position={[0, 0, 2]}
        intensity={isActive ? 2 : 0.5}
        color={color}
        distance={10}
      />
    </group>
  )
}

// Entanglement particles
function EntanglementParticles({ isActive }) {
  const particlesRef = useRef()

  useFrame((state) => {
    if (particlesRef.current && isActive) {
      const time = state.clock.elapsedTime
      particlesRef.current.children.forEach((particle, i) => {
        const offset = (i / 50) * Math.PI * 2
        particle.position.x = Math.sin(time + offset) * 5
        particle.position.y = Math.cos(time * 2 + offset) * 0.5
        particle.position.z = Math.cos(time + offset) * 2
      })
    }
  })

  return (
    <group ref={particlesRef}>
      {[...Array(50)].map((_, i) => (
        <mesh key={i} position={[0, 0, 0]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial
            color="#a78bfa"
            emissive="#a78bfa"
            emissiveIntensity={isActive ? 3 : 0}
          />
        </mesh>
      ))}
    </group>
  )
}

// Main Portal Demo Scene
function PortalScene({ isActive }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <PortalRing position={[-5, 0, 0]} isActive={isActive} color="#8b5cf6" />
      <PortalRing position={[5, 0, 0]} isActive={isActive} color="#6d28d9" />
      <EntanglementParticles isActive={isActive} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  )
}

const PortalDemo = () => {
  const [isActive, setIsActive] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [metrics, setMetrics] = useState({
    energyLevel: 0,
    syncStatus: 0,
    coherence: 0,
  })
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setMetrics({
          energyLevel: Math.min(100, metrics.energyLevel + Math.random() * 10),
          syncStatus: Math.min(100, metrics.syncStatus + Math.random() * 15),
          coherence: Math.min(100, metrics.coherence + Math.random() * 12),
        })
      }, 100)

      return () => clearInterval(interval)
    } else {
      setMetrics({ energyLevel: 0, syncStatus: 0, coherence: 0 })
    }
  }, [isActive, metrics])

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-4 py-32">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center mb-6"
        >
          <span className="text-gradient">See it in action</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
        >
          Two quantum-entangled portal frames. Activate the connection and watch
          the magic of quantum mechanics unfold in real-time.
        </motion.p>

        {/* 3D Portal Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-96 md:h-[500px] rounded-3xl overflow-hidden border border-purple-500/30 mb-12 bg-black/50 backdrop-blur-sm"
        >
          <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
            <PortalScene isActive={isActive} />
          </Canvas>
        </motion.div>

        {/* Control Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {/* Activate Button */}
            <div className="md:col-span-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsActive(!isActive)}
                className={`interactive w-full py-6 rounded-2xl font-semibold text-xl transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-500/50'
                    : 'border-2 border-purple-500 hover:bg-purple-500/10'
                }`}
              >
                {isActive ? '⚡ Portal Active' : 'Activate Portal Connection'}
              </motion.button>
            </div>

            {/* Metrics */}
            {[
              { label: 'Energy Level', value: metrics.energyLevel, unit: 'PW' },
              { label: 'Sync Status', value: metrics.syncStatus, unit: '%' },
              { label: 'Quantum Coherence', value: metrics.coherence, unit: '%' },
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20"
              >
                <div className="text-sm text-gray-500 mb-2">{metric.label}</div>
                <div className="text-3xl font-bold text-gradient mb-2">
                  {metric.value.toFixed(1)}
                  <span className="text-lg ml-1">{metric.unit}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-600 to-indigo-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${metric.value}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}

            {/* Transit Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20"
            >
              <div className="text-sm text-gray-500 mb-2">Transit Time</div>
              <div className="text-3xl font-bold text-gradient">
                &lt;100
                <span className="text-lg ml-1">ms</span>
              </div>
              <div className="text-xs text-gray-600 mt-2">
                Faster than a heartbeat
              </div>
            </motion.div>
          </div>

          {/* Status Message */}
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center p-6 rounded-xl bg-purple-600/10 border border-purple-500/30"
            >
              <p className="text-lg text-purple-300">
                ✓ Quantum entanglement established • Wormhole stable • Ready for transit
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default PortalDemo
