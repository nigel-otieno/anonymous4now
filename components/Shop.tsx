export default function Shop(){

const products = [
  {
    name:"ANONYMOUS SIGNATURE TEE",
    price:"$45",
    image:"/images/shirt.jpg"
  },
  {
    name:"MIDNIGHT HOODIE",
    price:"$90",
    image:"/images/hoodie.jpg"
  },
  {
    name:"LIMITED EDITION VINYL",
    price:"$35",
    image:"/images/vinyl.jpg"
  }
];


return(

<section id="shop" className="shop-section section-background shop-bg">

<div className="shop-container">


<h2>
SHOP
</h2>


<p className="section-subtitle">
LIMITED RELEASES
</p>



<div className="shop-grid">


{products.map((product,index)=>(

<div className="shop-card" key={index}>


<div className="shop-image">

<img
src={product.image}
alt={product.name}
/>

</div>



<div className="shop-info">


<h3>
{product.name}
</h3>


<p>
{product.price}
</p>


<button>
VIEW ITEM
</button>


</div>


</div>


))}


</div>


</div>


</section>

)

}