
import Head from 'next/head'
import { useState, useEffect } from 'react';

let url = "http://localhost:8000"//"https://django-todo-list-api.herokuapp.com"
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

    const [formData, setForm] = useState({ username: 'Damon', password: '123456' })
    useEffect(async () => {
    })


    const submitForm = async function () {



        //  return console.log(form);

        const req = await fetch('https://django-todo-list-api.herokuapp.com/api/login/', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            credentials: 'include',


            body: JSON.stringify(formData)
        })
        console.log(req.status);



        if (req.status === 200) {

            let res = await req.json()

            console.log(req.status, res);


        }


        else {

            alert("Something went wrong")
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

            <main>


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

            </main>
        </div>

    )
}




export default Login