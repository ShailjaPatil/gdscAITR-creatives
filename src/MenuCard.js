import React from 'react'

const MenuCard = ({menuData}) => {
  return (
  <>
    <section className="main-card--container">
    {menuData.map((curElem) => {
        return(
        <>
        <div className="card-container" key={curElem.id}>
        <div className='card'>

            <div  className='card-body'>
            {(curElem.id===3)? <iframe className='card-video' src="https://www.youtube.com/embed/TUXRgir028w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            :(curElem.id===4)? <iframe className='card-video' src="https://www.youtube.com/embed/jc2ij80gzoU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            :<img  src={curElem.image} alt="images" className="card-media"/> }
            {/* <span className='card-tag subtle'>Order Now</span> */}
            </div>

            <div className='card-body'>
                {}
                <span className='card-author subtle' >{curElem.name}</span>
                <h2 className='card-title'>{curElem.name}</h2>
                <span className='card-description subtle'>{curElem.description}</span>
                <div className='card-read'>Creator {curElem.author}</div>
            </div>
    </div>
</div>


</>
        );
    })}
    </section> 
</>
  );
};

export default MenuCard