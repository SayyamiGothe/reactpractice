import './props.css';

function Card(props)
{
    return(
        <>
<div  className="container">

    <div className="images">


        <img src={props.src}></img>
    </div>
    <div className="details">

        <h3>{props.name}</h3>
    </div>
    <div className="price"></div>
</div>
   

   </>
    )
}
export default Card;