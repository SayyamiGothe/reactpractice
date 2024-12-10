import './Props.css';

function Card(props) {
    return (
        <>
            <div className="container">

                <div className="images">


                    <img src={props.src}></img>
                </div>
                <div className="details">

                    <h3>{props.name}</h3>
                    <ol>
                        <li>s Discontinued By Manufacturer No</li>
                        <li>Product Dimensions : 31 x 10 x 21 cm; 700 g</li>
                        <li>Date First Available : 21 November 2016</li>
                        <li>Manufacturer   ASIAN</li>
                        <li>ASIN :  B01N66F4CH</li>
                    </ol>
                </div>
                <div className="price">
                    <h1>{props.price}</h1>
                </div>
            </div>


        </>
    )
}
export default Card;