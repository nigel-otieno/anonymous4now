"use client";

import Image from "next/image";
import {motion} from "framer-motion";


export default function Hero(){

return(

<section className="hero">


<Image
src="/images/hero.jpg"
fill
alt=""
priority
className="hero-image"
/>


<div className="hero-overlay"/>


<motion.div
className="hero-content"
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>


<h1>
A4N
</h1>


<p>
ARTIST • PRODUCER • ENGINEER
</p>

<a
  href="https://open.spotify.com/artist/13MQWwCh2iJOqKgRZUpwux?si=JfTNgx3bS2yy9habfubJgg"
  target="_blank"
  rel="noopener noreferrer"
>
  <button>
    LISTEN NOW
  </button>
</a>


</motion.div>


</section>

)

}