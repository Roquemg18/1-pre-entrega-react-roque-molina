import React from "react"
import Cards from './../cards/Cards';
import './style.css'

function ItemListContainer (props){
    console.log(props);
    return(
        <main>
            <h1 style={{textAlign:"center"}}>{props.palabra}</h1>
            <div className='conteiner__cards'>
                <Cards/>
            </div>
            
        </main>            
    

    )

}

export default ItemListContainer