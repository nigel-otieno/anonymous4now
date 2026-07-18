export default function Shows(){

const shows = [
  {
    date:"AUG 22, 2026",
    city:"LOS ANGELES, CA",
    venue:"THE NOVO",
    status:"TICKETS"
  },
  {
    date:"SEP 10, 2026",
    city:"SAN DIEGO, CA",
    venue:"HOUSE OF BLUES",
    status:"TICKETS"
  },
  {
    date:"OCT 04, 2026",
    city:"SAN FRANCISCO, CA",
    venue:"THE FILLMORE",
    status:"SOLD OUT"
  },
  {
    date:"NOV 18, 2026",
    city:"NEW YORK, NY",
    venue:"WEBSTER HALL",
    status:"TICKETS"
  },
];


return(

<section id="shows" className="shows-section">


<div className="shows-container">


<h2>
SHOWS
</h2>


<p className="section-subtitle">
LIVE PERFORMANCES
</p>



<div className="show-list">


{shows.map((show,index)=>(

<div className="show-item" key={index}>


<div className="show-date">
{show.date}
</div>


<div className="show-location">

<h3>
{show.city}
</h3>

<p>
{show.venue}
</p>

</div>


<button className={
show.status === "SOLD OUT"
? "sold-out"
: ""
}>

{show.status}

</button>


</div>

))}


</div>


</div>


</section>

)

}