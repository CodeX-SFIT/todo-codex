
import Head from 'next/head'
import List from '../componets/list';
import { useRouter } from 'next'
import Add from '../componets/add';

const HeadTag = function () {
    return (
        <Head>
            <title>ToDo</title>
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

            <link rel="stylesheet" href="css/todo.css" />


        </Head>


    )
}



const Todo = function () {

    return (
        <div style={{ height: '100vh' }}>

            <HeadTag />


            <Add />
            {/* <main>


                <div className="container">


                </div>

            </main> */}

        </div>

    )
}



export default Todo