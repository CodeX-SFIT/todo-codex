import { useState, useEffect } from 'react';



const List = function (props) {


    useEffect(() => {

        console.log(props);

    }, [])



    return (
        <div className="list-container">

            <div className="list-container-inner">


                <div className="list-title">

                    <h1>Hi, Harsh!</h1>
                    <p>Here is the list of all your unfinished tasks ,</p>

                    <p><span> {props.data.todos.length} Unfinished tasks</span></p>

                </div>

                <div className="list-scroll">

                    {props.data.todos.map((td, i) => <Card key={i} data={td} idx={i + 1} deleteItem={props.deleteItem} />)}
                </div>
            </div>

        </div>
    )
}


const Card = function (props) {




    return (

        <div className="list-card">
            <div className="todo">

                <h1> <span>{props.idx}</span> {props.data.text}</h1>
                <span className="date"> {new Date(props.data.created_at).toLocaleString()}</span>


            </div>

            <div className="delete-button" onClick={() => props.deleteItem(props.data.id)}>
                <i className="fal fa-times-circle"></i>
            </div>





        </div>
    )
}


export default List