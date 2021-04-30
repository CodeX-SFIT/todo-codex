import React, { useEffect, useState } from 'react';
import List from '../componets/list'

import Cookies from 'js-cookie';


export default function Add(props) {

    const [data, setData] = useState({ todos: [] });

    const [input, setInput] = useState("");

    const [error, setError] = useState("");



    async function deleteItem(idx) {


        // return console.log(idx)

        const req = await fetch("https://django-todo-list-api.herokuapp.com/api/todo/" + idx, { credentials: 'include', method: 'DELETE' })

        const res = await req.json();


        console.log(res);

        loadTodo();



    }
    const updateList = async function (e) {


        if (input.length < 5) {

            return alert('Item too short')
        }


        if (input.length > 40) {
            // return setError("Item too long");

            return alert('Item too long')


        }





        // console.log(withCookies.)

        const req = await fetch("https://django-todo-list-api.herokuapp.com/api/todo/",
            {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'include', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    // 'X-CSRFToken': ""

                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },

                body: JSON.stringify({
                    text: input
                })
            })

        const res = await req.json()



        setInput('')

        // alert('Item added')

        console.log(res);


        loadTodo();



    }


    const loadTodo = async () => {

        const req = await fetch("https://django-todo-list-api.herokuapp.com/api/todo/", { credentials: 'include' })


        const res = await req.json();
        console.log(res)

        setData({ todos: res.data })



    }



    useEffect(async () => {

        console.log('CSRF', document.cookie)
        loadTodo();

    }, [])


    return (
        <div className="row">
            <div className="col col-sm-12 col-md-6 col-lg-6 col-12">


                <div className="add-container">




                    <div className="add-box">
                        <h1>My ToDo App</h1>
                        <div className="input-box">


                            <input type="text" placeholder="Add task" value={input} onChange={(e) => setInput(e.target.value)} />



                            <span onClick={updateList}>
                                <i className="fal fa-plus"></i>
                            </span>
                        </div>

                    </div></div>
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-6 col-12 list-parent">
                <List data={data} deleteItem={deleteItem} />


            </div>
        </div>
    )

}