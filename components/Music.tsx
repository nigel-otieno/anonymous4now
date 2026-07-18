export default function Music(){

return(

<section id="music" className="music-section section-background music-bg">

<h2>
MUSIC
</h2>


<p className="section-subtitle">
LATEST RELEASES
</p>


<div className="spotify-container">


<iframe
style={{borderRadius:"12px"}}
src="https://open.spotify.com/embed/artist/13MQWwCh2iJOqKgRZUpwux"
width="100%"
height="352"
frameBorder="0"
allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
loading="lazy"
/>


</div>


</section>

)

}