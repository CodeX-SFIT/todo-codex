
import Head from 'next/head'
import { useState, useEffect } from 'react';
import {useRouter}  from 'next/router'
const {url} = require('../config')
const HeadTag = function () {




    return (
        <Head>
            <title>Login</title>


            <meta name="theme-color" />
            <meta
                name="description"
                content="Web site created using create-react-app"
            />


            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap"
                rel="stylesheet"
            />

            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Source+Sans+Pro:wght@300;400;600&display=swap"
                rel="stylesheet"
            />
            <link
                rel="stylesheet"
                href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                crossorigin="anonymous"
            />

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&family=Nunito:wght@300;400;600&family=Work+Sans:wght@100;300;400;500;600&display=swap"
                rel="stylesheet"
            />

            <link rel="stylesheet" href="css/login.css" />
        </Head>


    )
}



const Login = function () {

    const router = useRouter();

    const [formData, setForm] = useState({ username: '', password: '' })
    useEffect(async () => {

        let req =  await fetch(`${url}/api/todo/` ,{credentials:'include'});

        if(req.status ==200){


       router.replace('/todo')
        }

        




    } ,[]) 


    const submitForm = async function () {



        //  return console.log(form);

        const req = await fetch(`${url}/api/login/`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',


            body: JSON.stringify(formData)
        })
        console.log(req.status);



        if (req.status === 200) {

            let res = await req.json()   
            router.replace('/todo');   

            // console.log(res);
        }
        else if(req.status ==400){

            alert("Invalid username or password")


        }
        else  {
            alert("Something went wrong! Error:", req.status )
        }

       


    }


    function updateForm(e) {

        let temp = {
            ...formData,

        }
        temp[e.target.name] = e.target.value
        setForm(temp)


    }


    return (
        <div >

            <HeadTag />



                <div className="container">

                    <div className="canvas">

                        <h1>
                            Organise all your tasks
                        </h1>

                    </div>

                    <div className="login-container">


                        <div className="login-tab">

                            <h2>

                                Login

                                </h2>



                            <div className="input-tab">
                                <span>Username</span>

                                <input type="username" placeholder="username" name="username" value={formData.username} onChange={updateForm} />
                            </div>

                            <div className="input-tab">
                                <span>Password</span>

                                <input type="password" name="password" placeholder="password" value={formData.password} onChange={updateForm} />
                            </div>


                            <div className="button-tab">

                                <button onClick={submitForm}>Sign In</button>

                            </div>

                        </div>


                    </div>





                </div>

        </div>

    )
}




export default Login