"use client";

export default function Navbar(){

const scrollToSection=(id:string)=>{

document
.getElementById(id)
?.scrollIntoView({
behavior:"smooth"
});

};


return(

<nav className="navbar">

<div className="container">


<div className="navbar-brand">
ANONYMOUS 4 NOW
</div>


<div className="nav-links">

<button onClick={()=>scrollToSection("music")}>
MUSIC
</button>

<button onClick={()=>scrollToSection("videos")}>
VIDEOS
</button>

<button onClick={()=>scrollToSection("shows")}>
SHOWS
</button>

<button onClick={()=>scrollToSection("shop")}>
SHOP
</button>

<button onClick={()=>scrollToSection("about")}>
ABOUT
</button>


</div>


</div>

</nav>

)

}