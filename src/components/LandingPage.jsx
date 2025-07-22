import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaReact, FaNodeJs, FaJava, FaDatabase, FaGithub, FaFacebook, FaWhatsapp, FaCloud, FaGitAlt, FaLock, FaHtml5, FaCss3Alt, FaJs, FaCogs, FaHeart } from "react-icons/fa";
import { SiExpress, SiPostgresql, SiCplusplus } from "react-icons/si";
import logo from "../logo.svg";
import "../index.css"; // Asegura que tailwind y fuentes personalizadas estén aplicadas

export default function LandingPage() {
  const [darkMode] = useState(true); // Elimino el toggle, fijo en dark
  const topRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [darkMode]);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Redes y contacto
  const github = "https://github.com/Baque2005";
  const facebook = "https://www.facebook.com/profile.php?id=61576900643053";
  const whatsapp = "https://wa.me/593999562442";
  const cv = process.env.PUBLIC_URL + "/services/Cv.Ronald Steven.pdf";

  // Tecnologías
  const techs = [
    { icon: <FaReact className="text-cyan-400" />, name: "React" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-300" />, name: "Express" },
    { icon: <SiPostgresql className="text-blue-400" />, name: "PostgreSQL" },
    { icon: <FaJava className="text-orange-500" />, name: "Java" },
    { icon: <SiCplusplus className="text-blue-500" />, name: "C++ (básico)" },
    { icon: <FaHtml5 className="text-orange-400" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-300" />, name: "CSS" },
    { icon: <FaJs className="text-yellow-300" />, name: "JavaScript" },
    { icon: <FaCogs className="text-blue-500" />, name: "Material UI" },
    { icon: <FaLock className="text-yellow-500" />, name: "JWT" },
    { icon: <FaGitAlt className="text-orange-400" />, name: "Git" },
    { icon: <FaCloud className="text-indigo-400" />, name: "Cloud" },
    { icon: <FaLock className="text-pink-400" />, name: "APIs REST" },
  ];

  // Testimonios de ejemplo
  const testimonials = [
    {
      name: "Juan Pérez",
      text: "Steven es un desarrollador muy dedicado y creativo. Su trabajo siempre supera las expectativas.",
      role: "Compañero de universidad"
    },
    {
      name: "María López",
      text: "Excelente profesional, responsable y con gran capacidad para resolver problemas complejos.",
      role: "Cliente freelance"
    },
    {
      name: "Carlos Torres",
      text: "Su pasión por la tecnología y el diseño se nota en cada proyecto que realiza.",
      role: "Profesor"
    }
  ];

  // Experiencia de ejemplo
  const experience = [
    {
      year: "2023 - Actualidad",
      title: "Estudiante de Ingeniería de Software",
      place: "Universidad XYZ"
    },
    {
      year: "2022 - 2023",
      title: "Desarrollador Web Freelance",
      place: "Proyectos personales y para clientes"
    },
    {
      year: "2021 - 2022",
      title: "Participante en hackathons y competencias",
      place: "Diversos eventos online"
    }
  ];

  // Imágenes de programación (ahora solo las locales)
  const programmingImages = [
    process.env.PUBLIC_URL + "/captura1.png",
    process.env.PUBLIC_URL + "/captura2.png"
  ];

  // Cambia la fuente global usando Tailwind (asegúrate de tener Inter, Montserrat, Roboto o Poppins en tu proyecto, aquí uso 'font-sans' de Tailwind por defecto)
  return (
    <main ref={topRef} className="min-h-screen relative bg-gradient-to-br from-[#181c24] via-[#23283a] to-[#1a1d23] text-white transition-colors duration-500 font-sans overflow-x-hidden">
      {/* Fondo de partículas */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#181c24" } },
          fpsLimit: 60,
          interactivity: {
            events: { onClick: { enable: true, mode: "push" }, onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { push: { quantity: 4 }, repulse: { distance: 100, duration: 0.4 } }
          },
          particles: {
            color: { value: ["#6ee7b7", "#818cf8", "#a5b4fc"] }, // tonos suaves
            links: { enable: true, color: "#64748b", distance: 120, opacity: 0.15, width: 1 },
            collisions: { enable: true },
            move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.18 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } }
          },
          detectRetina: true
        }}
        className="absolute inset-0 z-0"
      />
      {/* Overlay de fondo profesional */}
      <div className="pointer-events-none absolute inset-0 z-0" style={{background: 'url("https://www.transparenttextures.com/patterns/cubes.png") repeat', opacity: 0.08}} />

      {/* Botón scroll top */}
      {showScrollTop && (
        <button
          onClick={() => topRef.current.scrollIntoView({ behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-30 bg-cyan-400 text-[#23283a] p-3 rounded-full shadow-lg hover:bg-cyan-300 transition border-2 border-white animate-bounce"
          aria-label="Volver arriba"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
        </button>
      )}

      {/* Header con animación hover, colores sobrios */}
      <header className="container mx-auto p-6 flex flex-col items-center relative z-10">
        <motion.h1
          className="text-3xl font-extrabold tracking-tight mb-2 cursor-pointer text-gray-100 hover:text-[#6ee7b7] transition-colors"
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Steven Baque
        </motion.h1>
        <nav>
          <ul className="flex space-x-8 text-lg justify-center">
            {[
              { href: "#about", label: "Sobre mí" },
              { href: "#projects", label: "Proyectos" },
              { href: "#services", label: "Servicios" },
              { href: "#contact", label: "Contacto" }
            ].map((item, i) => (
              <motion.li
                key={item.href}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.08 }}
              >
                <a href={item.href} className="relative px-2 py-1 transition-colors duration-200 hover:text-[#6ee7b7]">
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#6ee7b7] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section con imagen de fondo sutil y tu foto */}
      <section className="flex-grow container mx-auto px-6 flex flex-col md:flex-row justify-center items-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-12 relative z-10 pt-10 pb-20">
        <motion.img
          src={process.env.PUBLIC_URL + "/Foto.png"}
          alt="Steven Baque"
          className="w-44 h-44 rounded-full object-cover border-4 border-[#6ee7b7] shadow-xl mb-4 md:mb-0 hover:scale-105 transition-transform duration-300"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <div>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-2 text-gray-100"
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            ¡Hola! Soy <span className="text-[#6ee7b7]">Steven Baque</span>
          </motion.h2>
          <motion.p
            className="max-w-xl text-lg drop-shadow-md mb-4 text-gray-200"
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Estudiante de Ingeniería de Software, apasionado por el desarrollo web full stack, la tecnología y el diseño de experiencias interactivas. Siempre buscando aprender y crear soluciones que impacten.
          </motion.p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4">
            <a href={github} target="_blank" rel="noopener noreferrer" className="bg-[#23283a] hover:bg-[#6ee7b7] hover:text-[#23283a] text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow transition"><FaGithub size={22}/>GitHub</a>
            <a href={facebook} target="_blank" rel="noopener noreferrer" className="bg-[#23283a] hover:bg-blue-500 hover:text-white text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow transition"><FaFacebook size={22}/>Facebook</a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="bg-[#23283a] hover:bg-green-400 hover:text-[#23283a] text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow transition"><FaWhatsapp size={22}/>WhatsApp</a>
            <a href={cv} download className="bg-[#23283a] hover:bg-[#818cf8] hover:text-[#23283a] text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow transition"><FaCloud size={22}/>Descargar CV</a>
          </div>
        </div>
      </section>

      {/* Galería de imágenes de programación */}
      <section className="container mx-auto px-6 py-12 max-w-3xl">
        <h3 className="text-3xl font-bold mb-8 text-[#6ee7b7] text-center">Mi trabajo y entorno</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programmingImages.map((img, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform border-2 border-[#6ee7b7] bg-[#23283a] opacity-0 animate-fadein"
              style={{ animationDelay: `${0.1 * i}s`, animationFillMode: 'forwards' }}
            >
              <img src={img} alt="programming inspiration" className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
        <style>{`
          @keyframes fadein {
            to { opacity: 1; }
          }
          .animate-fadein {
            animation: fadein 1s ease forwards;
          }
        `}</style>
      </section>

      {/* Cinta de tecnologías/lenguajes (marquee infinita) */}
      <section className="w-full py-8 bg-[#181c24] border-y border-cyan-900 overflow-hidden relative">
        <div className="absolute left-0 top-0 w-full h-full pointer-events-none bg-gradient-to-r from-[#181c24] via-transparent to-[#181c24] z-10" />
        <div className="flex items-center gap-12 animate-marquee whitespace-nowrap text-4xl font-bold px-8" style={{ width: 'max-content' }}>
          {Array(3).fill(techs).flat().map((t, i) => (
            <span key={i} className="flex flex-col items-center mx-6">
              <span className="drop-shadow-lg">{t.icon}</span>
              <span className="text-xs mt-1 font-semibold text-cyan-300">{t.name}</span>
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="bg-[#23283a] text-white py-20 relative z-10 shadow-inner"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h3 className="text-4xl font-bold mb-8">Sobre mí</h3>
          <p className="text-lg leading-relaxed mb-8">
            Soy estudiante de tercer semestre en Ingeniería de Software. Tengo experiencia con tecnologías modernas y frameworks tanto en frontend como backend. Me encanta aprender, colaborar y desarrollar proyectos innovadores que impactan positivamente.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {techs.map((t, i) => (
              <motion.div
                key={t.name}
                className="flex flex-col items-center bg-[#181c24] rounded-xl p-4 shadow-lg hover:scale-110 transition-transform"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.05 * i, duration: 0.5 }}
              >
                <span className="text-4xl mb-2 animate-bounce-slow">{t.icon}</span>
                <span className="text-sm font-semibold">{t.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="container mx-auto px-6 py-20 max-w-6xl relative z-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-4xl font-bold mb-12 text-center text-cyan-400 drop-shadow-lg">Proyectos destacados</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Proyecto 1 */}
          <motion.div
            className="bg-[#23283a] rounded-lg shadow-lg p-6 text-white hover:scale-105 transform transition cursor-pointer border-b-4 border-cyan-400"
            whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 rgba(99,102,241,0.2)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <FaLock className="text-4xl text-cyan-400 mb-2 animate-pulse"/>
            <h4 className="text-2xl font-semibold mb-2">Sistema de Gestión de Tareas</h4>
            <p>App full-stack para administrar tareas y roles, con autenticación y panel administrativo.</p>
          </motion.div>
          {/* Proyecto 2 */}
          <motion.div
            className="bg-[#23283a] rounded-lg shadow-lg p-6 text-white hover:scale-105 transform transition cursor-pointer border-b-4 border-pink-400"
            whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 rgba(236,72,153,0.2)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <FaHeart className="text-4xl text-pink-400 mb-2 animate-bounce"/>
            <h4 className="text-2xl font-semibold mb-2">Página Romántica Interactiva</h4>
            <p>Sitio web personalizado con animaciones y mensajes para dedicar a personas especiales.</p>
          </motion.div>
          {/* Proyecto 3 */}
          <motion.div
            className="bg-[#23283a] rounded-lg shadow-lg p-6 text-white hover:scale-105 transform transition cursor-pointer border-b-4 border-violet-400"
            whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 rgba(139,92,246,0.2)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <FaCogs className="text-4xl text-violet-400 mb-2 animate-spin-slow"/>
            <h4 className="text-2xl font-semibold mb-2">Dashboard Administrativo</h4>
            <p>Dashboard moderno con React y Material UI para gestión de usuarios y estadísticas en tiempo real.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="bg-[#181c24] text-white py-20 relative z-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h3 className="text-4xl font-bold mb-8 text-cyan-400">Servicios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <motion.div className="bg-[#23283a] rounded-lg p-8 shadow-lg flex flex-col items-center hover:scale-105 transition border-b-4 border-cyan-400" whileHover={{ scale: 1.07 }}>
              <FaReact className="text-5xl text-cyan-400 mb-4 animate-spin-slow"/>
              <h4 className="text-xl font-bold mb-2">Desarrollo Web Full Stack</h4>
              <p>Frontend y backend con React, Node.js, Express y PostgreSQL.</p>
            </motion.div>
            <motion.div className="bg-[#23283a] rounded-lg p-8 shadow-lg flex flex-col items-center hover:scale-105 transition border-b-4 border-violet-400" whileHover={{ scale: 1.07 }}>
              <FaCogs className="text-5xl text-violet-400 mb-4 animate-spin-slow"/>
              <h4 className="text-xl font-bold mb-2">Soluciones a Medida</h4>
              <p>Desarrollo de sistemas personalizados para empresas y personas.</p>
            </motion.div>
            <motion.div className="bg-[#23283a] rounded-lg p-8 shadow-lg flex flex-col items-center hover:scale-105 transition border-b-4 border-pink-400" whileHover={{ scale: 1.07 }}>
              <FaHeart className="text-5xl text-pink-400 mb-4 animate-bounce"/>
              <h4 className="text-xl font-bold mb-2">Páginas Interactivas</h4>
              <p>Webs creativas y animadas para ocasiones especiales.</p>
            </motion.div>
            <motion.div className="bg-[#23283a] rounded-lg p-8 shadow-lg flex flex-col items-center hover:scale-105 transition border-b-4 border-green-400" whileHover={{ scale: 1.07 }}>
              <FaCloud className="text-5xl text-green-400 mb-4 animate-pulse"/>
              <h4 className="text-xl font-bold mb-2">Despliegue en la Nube</h4>
              <p>Implementación y mantenimiento de apps en la nube.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section con correo visible y visual */}
      <motion.section
        id="contact"
        className="container mx-auto px-6 py-20 max-w-2xl text-center relative z-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-4xl font-bold mb-6 text-cyan-400">Contacto</h3>
        <p className="mb-6">¿Quieres trabajar conmigo, tienes una idea o necesitas ayuda en tu proyecto? ¡Hablemos!</p>
        <div className="flex flex-col items-center gap-4 mb-6">
          <a href="mailto:baqueperez89@gmail.com" className="text-lg font-semibold text-cyan-300 hover:underline">baqueperez89@gmail.com</a>
          <div className="flex gap-4 justify-center">
            <a href={github} target="_blank" rel="noopener noreferrer" className="bg-[#23283a] hover:bg-cyan-400 hover:text-[#23283a] text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow transition text-lg"><FaGithub size={26}/>GitHub</a>
            <a href={facebook} target="_blank" rel="noopener noreferrer" className="bg-[#23283a] hover:bg-blue-500 hover:text-white text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow transition text-lg"><FaFacebook size={26}/>Facebook</a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="bg-[#23283a] hover:bg-green-400 hover:text-[#23283a] text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow transition text-lg"><FaWhatsapp size={26}/>WhatsApp</a>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#23283a] text-white text-center py-6 relative z-10 border-t border-cyan-900">
        &copy; {new Date().getFullYear()} Steven Baque - Todos los derechos reservados
      </footer>
      <style>{`
        .animate-bounce-slow { animation: bounce 2.5s infinite; }
        .animate-spin-slow { animation: spin 4s linear infinite; }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </main>
  );
}
