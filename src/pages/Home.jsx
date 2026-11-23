import bgImage from "../assets/mountainsbg.jpg"
import surf from "../assets/surferbg.jpg"
import horses from "../assets/horses.jpg"
import note2 from "../assets/note2.png"
import note from "../assets/note.png"
import oceanbg from "../assets/oceanbg.jpg"
import buttonscrap from "../assets/buttonscrap.png"
import burst from "../assets/burst.png"
import stamp from "../assets/bluestamp.png"
import bubble from "../assets/speechbubble.png"
import newyork from "../assets/ny3.jpg"
import tains from "../assets/tainstwo.jpg"
import road from "../assets/road.jpg"
import valley from "../assets/valley3.jpg"
import xmen from "../assets/xmen.png"
import excl from "../assets/exclamation.png"
import pin from "../assets/pin.png"
import q from "../assets/question.png"
import blond from "../assets/blond.png"
import mfdoom from "../assets/mfdoom.png"
import nerv from "../assets/nerv.jpg"
import fish from "../assets/fish.png"
import lb from "../assets/letterboxd.png"
import persona from "../assets/persona.png"
import smisky from "../assets/smisky.png"
import smiley from "../assets/smiley.png"
import tlou from "../assets/tlou.png"
import cat from "../assets/cat.png"
import dog from "../assets/doggy.png"
import a24 from "../assets/a24.png"
import artfolio from "../assets/artfolio.png"
import aruarian from "../assets/aruarian.png"
import ers from "../assets/ers.png"
import tmb from "../assets/textmeback.png"
import lpv from "../assets/letterprojvert.png"
import lph from "../assets/letterprojhor.png"
import postcard from "../assets/postcard.png"
import mountainfinal from "../assets/mountains.jpg"

import bw from "../assets/bgbw.jpg"

import {motion} from "motion/react"
import { useNavigate } from "react-router"
import NavBar from "../components/NavBar"


function Home() {

    const navigate = useNavigate();
 
  return (
   <div  >

    <NavBar/>

   

    {/* Intro hero section */}
    <motion.div
    id="hero"
    initial={{opacity:0, y:20}}
    whileInView={{opacity:1, y:0}}
     style={{backgroundImage:`url(${bgImage})`, backgroundSize:"cover"}} className="relative overflow-hidden text-center   py-52">
      
      <p   className=" font-heading text-8xl font-bold text-white" >YASH GHELA  </p>
      <p className="text-gray-200  px-80 text-5xl font-bold">is a multidisciplinary designer and developer from South Africa with a focus on game development and web design.</p>
     
      <div className="flex flex-col items-center justify-center">
        <motion.button
        onClick={()=>{navigate('/infographic')}}
         whileHover={{ y: -5}}
      whileTap={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
         style={{backgroundImage: `url(${buttonscrap})`, backgroundSize: "100% 100%"}} className=" cursor-pointer shadow-md text-lg   font-semibold w-auto p-14 mx-10 mt-20">View my infographic</motion.button>
      <motion.button
      onClick={()=>{navigate('/comic')}}
       whileHover={{ y: -5}}
      whileTap={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{backgroundImage: `url(${buttonscrap})`, backgroundSize: "100% 100%"}} className=" cursor-pointer text-lg   font-semibold w-auto p-14 mx-10 mt-5">View my motion-comic</motion.button>
      </div>

   {/* Top-left: X-Men */}
<motion.img
  src={xmen}
  alt="X-Men"
   className="absolute left-10 top-10 w-64 cursor-pointer z-0 drop-shadow-2xl"

    initial={{ opacity: 0, x: -200, y: -100, rotate: -10 }}

    animate={{
        opacity: 1,
        x: 0,
        y: [0, -20, 0],
        rotate: [0, -3, 0],
    }}

    whileTap={{
        scale: 1.2,
        rotate: 10
    }}

    transition={{
        opacity: { duration: 0.8 },
        x: { type: "spring", stiffness: 60, damping: 12 },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    }}
/>

{/* Top-right: Excl */}
<motion.img
  src={excl}
  alt="Excl"
  className="absolute cursor-pointer right-10 top-10 w-32 pointer-events-none z-0 drop-shadow-2xl"
  initial={{ opacity: 0, x: 200, y: -100, rotate: 10 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -20, 0],
    rotate: [0, 3, 0],
  }}

    whileTap={{
        scale: 1.2,
        rotate: 10
    }}

  transition={{
    opacity: { duration: 0.8 },
    x: { type: "spring", stiffness: 60, damping: 12 },
    y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  }}
/>

{/* Bottom-left: Pin */}
<motion.img
  src={pin}
  alt="Pin"
  className="absolute left-10 bottom-10 w-32 pointer-events-none z-0 drop-shadow-2xl"
  initial={{ opacity: 0, x: -200, y: 100, rotate: -10 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -20, 0],
    rotate: [0, -3, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    x: { type: "spring", stiffness: 60, damping: 12 },
    y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
    rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
  }}
/>

{/* Bottom-right: Q */}
<motion.img
  src={nerv}
  alt="Q"
  className="absolute right-10 bottom-10 w-32 pointer-events-none z-0 drop-shadow-2xl"
  initial={{ opacity: 0, x: 200, y: 100, rotate: 10 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -20, 0],
    rotate: [0, 3, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    x: { type: "spring", stiffness: 60, damping: 12 },
    y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
    rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
  }}
/>

      
    </motion.div>

    {/* About Me */}

    <motion.div
    initial={{opacity:0, y:20}}
    whileInView={{opacity:1, y:0}}
     style={{backgroundImage:`url(${surf})`, backgroundSize:"cover"}} className="relative overflow-hidden flex pt-32  h-screen flex-col items-center justify-center text-white" >
     <div
      style={{
    backgroundImage: `url(${note2})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    
  }}
  className=" md:p-24 text-black ">


       <p className=" font-heading text-4xl font-bold">About Me</p>
      <ul className=" md:mt-10  list-disc">
        <li>I'm a multimedia student at the University of Pretoria</li>
        <li>I've been drawing since I was born</li>
        <li>I started programming at 14</li>
        <li>I love comic books</li>
        <li>I love the McFizz</li>
        <li>I'm platinum in Apex Legends</li>
      </ul>
     </div>


         {/* Top-left: Blond */}
<motion.img
  src={blond}
  alt="X-Men"
  className="absolute left-10 top-10 w-64 pointer-events-none z-0 drop-shadow-2xl"
  initial={{ opacity: 0, x: -200, y: -100, rotate: -10 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -20, 0],
    rotate: [0, -3, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    x: { type: "spring", stiffness: 60, damping: 12 },
    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  }}
/>

{/* Top-right: Cats */}
<motion.img
  src={cat}
  alt="Excl"
  className="absolute right-10 top-10 w-32 pointer-events-none z-0 drop-shadow-2xl"
  initial={{ opacity: 0, x: 200, y: -100, rotate: 10 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -20, 0],
    rotate: [0, 3, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    x: { type: "spring", stiffness: 60, damping: 12 },
    y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  }}
/>

{/* Bottom-left: Pin */}
<motion.img
  src={fish}
  alt="Pin"
  className="absolute left-10 bottom-10 w-32 pointer-events-none z-0 drop-shadow-2xl"
  initial={{ opacity: 0, x: -200, y: 100, rotate: -10 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -20, 0],
    rotate: [0, -3, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    x: { type: "spring", stiffness: 60, damping: 12 },
    y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
    rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
  }}
/>

{/* Bottom-right: Q */}
<motion.img
  src={q}
  alt="Q"
  className="absolute right-10 bottom-10 w-32 pointer-events-none z-0 drop-shadow-2xl"
  initial={{ opacity: 0, x: 200, y: 100, rotate: 10 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -20, 0],
    rotate: [0, 3, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    x: { type: "spring", stiffness: 60, damping: 12 },
    y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
    rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
  }}
/>



    </motion.div>


  


      
  


    {/* Skills */}

    <motion.div
    initial={{opacity:0, y:20}}
    whileInView={{opacity:1, y:0}} style={{backgroundImage:`url(${oceanbg})`, backgroundSize:"cover"}} className="flex h-screen pt-32 flex-col text-black items-center justify-center">
      <div

      style={{
        backgroundImage: `url(${note})`,
        
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
      }}
      className="w-full h-full items-center justify-center text-center lg:pt-40"
      >
        <p className=" font-heading text-4xl font-bold">Skills</p>
        <p  className="text-lg">A collection of skills I've learnt in uni and <br/> through building my own projects</p>
      <ul className=" mt-5 text-lg  list-disc">
        <li className="font-bold text-lg">C++</li>
        <li className="font-bold text-lg">JS</li>
        <li className="font-bold text-lg" >React</li>
        <li className="font-bold text-lg">NextJs</li>
        <li className="font-bold text-lg">Vue</li>
        <li className="font-bold text-lg">Adobe Suite</li>
        <li className="font-bold text-lg">Godot</li>
        <li className="font-bold text-lg">Blender</li>
      </ul>
      </div>
    </motion.div>

    {/* My favourite games */}

    <motion.div
    initial={{opacity:0, y:20}}
    whileInView={{opacity:1, y:0}} style={{backgroundImage:`url(${horses})`, backgroundSize:"cover"}} className="relative overflow-hidden flex h-screen pt-32 flex-col text-black items-center justify-center">
     <div 
        style={{
        backgroundImage: `url(${burst})`,
        
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
      }}
      className="w-[120%] h-[120%] items-center justify-center text-center lg:pt-48 px-10">
       <p className=" font-heading text-4xl font-bold">Games I love</p>
      <ul className=" mt-10  list-disc  list-none">
        <li className="font-bold">1.The Legend of Zelda Breath of the Wild
           <br/>
           <p className="font-light">- Easily one of my favourite games of all time, unmatched freedom</p>
        </li>
        <li className="font-bold">2.Ratchet and Clank

           <br/>
           <p className="font-light">- The first game series i ever played, holds a really special place in my heart </p>

        </li>
        <li className="font-bold">3.Spider-man PS4</li>
        <li className="font-bold">4.Uncharted
          <br/>
          <p className="font-light">- The story is so good</p>
        </li>
      </ul>
     </div>

     {/* Top-left: Persona */}
<motion.img
  src={persona}
  alt="Persona"
  className="absolute left-10 top-32 w-48 pointer-events-none z-0 drop-shadow-2xl"
  initial={{ opacity: 0, x: -200, y: -100, rotate: -10 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -20, 0],
    rotate: [0, -3, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    x: { type: "spring", stiffness: 60, damping: 12 },
    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  }}
/>

{/* Top-right: TLOU */}
<motion.img
  src={tlou}
  alt="The Last of Us"
  className="absolute right-10 top-32 w-48 pointer-events-none z-0 drop-shadow-2xl"
  initial={{ opacity: 0, x: 200, y: -100, rotate: 10 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -20, 0],
    rotate: [0, 3, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    x: { type: "spring", stiffness: 60, damping: 12 },
    y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  }}
/>

{/* Bottom-left: Smisky */}
<motion.img
  src={smisky}
  alt="Smisky"
  className="absolute left-10 bottom-10 w-32 pointer-events-none z-0 drop-shadow-2xl"
  initial={{ opacity: 0, x: -200, y: 100, rotate: -10 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -20, 0],
    rotate: [0, -3, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    x: { type: "spring", stiffness: 60, damping: 12 },
    y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
    rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
  }}
/>

{/* Bottom-right: Dog */}
<motion.img
  src={dog}
  alt="Dog"
  className="absolute right-10 bottom-10 w-32 pointer-events-none z-0 drop-shadow-2xl"
  initial={{ opacity: 0, x: 200, y: 100, rotate: 10 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -20, 0],
    rotate: [0, 3, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    x: { type: "spring", stiffness: 60, damping: 12 },
    y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
    rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
  }}
/>
    </motion.div>

    {/* My Letterboxd 4 */}


     <motion.div
    initial={{opacity:0, y:20}}
    whileInView={{opacity:1, y:0}} style={{backgroundImage:`url(${tains})`, backgroundSize:"cover"}} className="relative overflow-hidden flex h-screen pt-32 flex-col text-black items-center justify-center" >
      <div

      style={{
        backgroundImage: `url(${stamp})`,
        
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize:"80% 80%"
        
      }}
      className="w-full h-full items-center justify-center text-center text-white lg:pt-52"
      
      >
        <p className=" font-heading text-4xl font-bold">My Letterboxd 4</p>
      <ul className=" mt-10  list-decimal">
        <li  className="font-black text-lg">The Batman</li>
        <li className="font-black text-lg">The Social Network</li>
        <li className="font-black text-lg">Harold and Kumar Go To White Castle</li>
        <li className="font-black text-lg">Chungking Express</li>

        <button className="px-4 mt-20 hover:cursor-pointer py-2 rounded-xl text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300" onClick={()=>{window.location.href="https://letterboxd.com/yachhu/"}}>See More</button>
      </ul>
      </div>

      {/* Top-left: Letterboxd logo */}
<motion.img
  src={lb}
  alt="Letterboxd"
  className="absolute left-10 top-32 w-40 pointer-events-none z-0 drop-shadow-2xl"
  initial={{ opacity: 0, x: -200, y: -100, rotate: -10 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -20, 0],
    rotate: [0, -3, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    x: { type: "spring", stiffness: 60, damping: 12 },
    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  }}
/>

{/* Top-right: A24 */}
<motion.img
  src={a24}
  alt="A24"
  className="absolute right-10 top-32 w-32 pointer-events-none z-0 drop-shadow-2xl"
  initial={{ opacity: 0, x: 200, y: -100, rotate: 10 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -20, 0],
    rotate: [0, 3, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    x: { type: "spring", stiffness: 60, damping: 12 },
    y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  }}
/>

{/* Bottom-left: MF Doom */}
<motion.img
  src={mfdoom}
  alt="MF Doom"
  className="absolute left-10 bottom-10 w-48 pointer-events-none z-0 drop-shadow-2xl"
  initial={{ opacity: 0, x: -200, y: 100, rotate: -10 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -20, 0],
    rotate: [0, -3, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    x: { type: "spring", stiffness: 60, damping: 12 },
    y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
    rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
  }}
/>

{/* Bottom-right: Smiley */}
<motion.img
  src={smiley}
  alt="Smiley"
  className="absolute right-10 bottom-10 w-32 pointer-events-none z-0 drop-shadow-2xl"
  initial={{ opacity: 0, x: 200, y: 100, rotate: 10 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -20, 0],
    rotate: [0, 3, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    x: { type: "spring", stiffness: 60, damping: 12 },
    y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
    rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
  }}
/>
    </motion.div>




    {/* Projects */}

    <motion.div
    initial={{opacity:0, y:20}}
    whileInView={{opacity:1, y:0}}  style={{backgroundImage:`url(${bw})`, backgroundSize:"cover"}} className="flex  h-full py-32 flex-col text-black items-center justify-center">
      <p className=" font-heading text-4xl text-white font-bold">Other Work</p>
      
      <div className="grid grid-cols-2 gap-5">
      <div>
         <motion.div
          style={{
    backgroundImage: `url(${note2})`,
    backgroundSize: "120% 120%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
          }}
           initial={{y:0}} whileHover={{y:-5}} className="bg-neutral-200 rotate-3 p-5 m-10 ">
        <p className=" text-lg font-bold">Blame</p>
        <div className="flex p-2">
          <p className="bg-green-200 mr-2  p-1 rounded-lg">Godot</p>
          <p className="bg-blue-200 mx-2  p-1 rounded-lg">Blender</p>
        </div>
        <p>An action adventure game I'm working on</p>
        <p className=" italic">TBA</p>
      </motion.div>

      <motion.div 
       style={{
    backgroundImage: `url(${note2})`,
    backgroundSize: "120% 120%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
       }}
      initial={{y:0}} whileHover={{y:-5}} className="bg-neutral-200 p-5 m-10  -rotate-2 shadow-md">
        <p className=" text-lg font-bold">Entity Removal Service</p>
        <div className="flex p-2">
          <p className="bg-green-200 mr-2  p-1 rounded-lg">Godot</p>
          <p className="bg-blue-200 mx-2  p-1 rounded-lg">Blender</p>
        </div>
         <img src={ers}  />
        <p>An short action and platforming demo game. Out on Itch </p>
        <p className=" italic">2026</p>
      </motion.div>

      <motion.div

       style={{
    backgroundImage: `url(${note2})`,
    backgroundSize: "120% 120%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
       }}
       initial={{y:0}} whileHover={{y:-5}} className="bg-neutral-200 rotate-3 p-5 m-10 rounded-md">
        <p className=" text-lg font-bold">Text Me Back</p>
        <div className="flex p-2">
          <p className="bg-green-200 mr-2  p-1 rounded-lg">Godot</p>
          <p className="bg-blue-200 mx-2  p-1 rounded-lg">Blender</p>
        </div>
         <img src={tmb}  />
        <p>A stealth game about texting your girlfriend. Out on Itch</p>
        <p className=" italic">2026</p>
      </motion.div>
      </div>

       
       <div>
        <motion.div
         style={{
    backgroundImage: `url(${note2})`,
    backgroundSize: "120% 128%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
       }}
         initial={{y:0}} whileHover={{y:-5}} className="bg-neutral-200 rotate-6 p-5 w-fit ml-40 m-10 rounded-md">
        <p className=" text-lg font-bold">Aruarian AI</p>
        <div className="flex p-2">
          <p className="bg-red-200 mr-2  p-1 rounded-lg">NextJS</p>
          <p className="bg-yellow-200 mx-2  p-1 rounded-lg">Tailwind</p>
          <p className="bg-emerald-200 mx-2  p-1 rounded-lg">MongoDB</p>
           <p className="bg-blue-200 mx-2  p-1 rounded-lg">Vercel</p>
        </div>
         <img src={aruarian}  />
        <p>Natural language AI task manager assistant</p>
        <p className=" italic">2024</p>
        </motion.div>

      <motion.div

       style={{
    backgroundImage: `url(${note2})`,
    backgroundSize: "120% 120%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
       }}
      
      initial={{y:0}} whileHover={{y:-5}} className="bg-neutral-200 -rotate-6 p-5 m-10 rounded-md">
        <p className=" text-lg font-bold">Artfolio</p>
         <div className="flex p-2">
          <p className="bg-red-200 mr-2  p-1 rounded-lg">NextJS</p>
          <p className="bg-yellow-200 mx-2  p-1 rounded-lg">Tailwind</p>
          <p className="bg-emerald-200 mx-2  p-1 rounded-lg">Firebase</p>
           <p className="bg-blue-200 mx-2  p-1 rounded-lg">Vercel</p>
        </div>
        <img src={artfolio}  />
        <p>A custom art portfolio website creator</p>
        <p className=" italic">2023</p>
      </motion.div>
       </div>
      </div>

       <button className="px-4 mt-20 hover:cursor-pointer py-2 rounded-xl text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300" onClick={()=>{window.location.href="https://yachhu.itch.io"}}>Play my games</button>

      
    </motion.div>


     <motion.div
    initial={{opacity:0, y:20}}
    whileInView={{opacity:1, y:0}}  style={{backgroundImage:`url(${mountainfinal})`, backgroundSize:"cover"}} className="flex  h-screen py-32 flex-col text-black items-center justify-center">
      

       <div

      style={{
        backgroundImage: `url(${postcard})`,
        
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize:"100% 100%"
        
      }}
      className="  w-1/2 h-full items-center justify-center text-center text-black lg:pt-48"
      
      >
        <p className=" font-heading text-4xl font-bold">Thanks For Visiting!</p>
        <p className="mt-5">Thanks for viewing my portfolio! Let's work together!</p>
      <ul className=" mt-5   list-decimal">
       <li> <a className="mt-10 hover:underline" href="https://www.instagram.com/yachhumade/">Follow my instagram</a></li>
       <li> <a className="hover:underline" href="mailto:ghelayash@gmail.com">Email Me</a></li>
        <li><a className="hover:underline" href="https://yachhu.itch.io">Play my games!</a></li>
        
      </ul>
      

      <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="px-4 mt-20 hover:cursor-pointer py-2 rounded-xl text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
>
    Back To Top ↑
</button>
      </div>
      </motion.div>


   </div>
  )
}

export default Home