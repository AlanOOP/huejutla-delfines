import React from 'react'

function Intro() {

  const fecha = new Date();
  const anio = fecha.getFullYear();


  return (
    <div className='col text-center mt-10'>

        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white p-4 uppercase">Huejutla 
            <span className="text-blue-600 dark:text-blue-500 uppercase"> Delfines</span>
        </h1>
       
       <div className=' flex-col'>
        <p>¡Hola!</p>
        <span className="font-bold"> Somos un club </span> de natación,{" "}
        <p>¡Nos encantaría que formaras parte de nuestro club!</p>
        <span className="font-bold">Estamos ubicados</span> en Huejutla de Reyes Hidalgo.{" "}
        <p>Lima 349, Valle del Encinal, 43000 Huejutla, Hgo.</p>
        <p>¡Te esperamos!</p>
       </div>

       <div className="drop drop-2"></div>

       <div className='p-5 m-5'>
        <a href="/acerca-de" className="inline-flex items-center m-5 px-5 py-5 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Acerca de

        </a>
        <a href="/aviso-privacidad" className="inline-flex items-center m-5 px-5 py-5 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Avisos de Privacidad
        </a>
       </div>

       <footer>
        <p className='text-sm'> Todo los Derechos Reservados UTHH { anio} , Hecho con fines educativos. </p>
       </footer>
    </div>
  )
}

export default Intro