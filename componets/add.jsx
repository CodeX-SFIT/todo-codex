import React, { useEffect, useState } from 'react';
import List from '../componets/list'
import {useRouter} from 'next/router'
import Cookies from 'js-cookie';
import { url } from '../config';


export default function Add(props) {

    const [data, setData] = useState({ todos: [] });

    const [input, setInput] = useState("");

    const [error, setError] = useState("");


const router = useRouter();
   
async function deleteItem(idx) {


        // return console.log(idx)




        const req = await fetch(`${url}/api/todo/`+ idx, { credentials: 'include', method: 'DELETE' })

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

        const req = await fetch(`${url}/api/todo/`,
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
        
        if(req.status == 201){
            setInput('')

            // alert('Item added')
    
            loadTodo();
    

        }else if (req.status ==500){


            alert("SERVER ERROR");

            router.replace('/login')
        }else {
            alert("Something Went wrong Error:" , req.status);

            router.replace('/login')

        }


      


    }


    const loadTodo = async () => {

        const req = await fetch(`${url}/api/todo/`, { credentials: 'include' })




        if(req.status ==200){
        const res = await req.json();

        setData({ todos: res.data })

}else {

    router.replace("/login")
}

    }



    useEffect(async () => {

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