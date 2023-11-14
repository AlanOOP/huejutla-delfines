import React from 'react'
import LogoMujer from '../../public/img/mujer.png'
import LogoHombre from '../../public/img/hombre.png'

function AcercaDe() {
    const fecha = new Date();
  const anio = fecha.getFullYear();

  return (
    <div className='mt-5 flex flex-col items-center'>

        <div className='flex-col'>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white p-4 uppercase">Acerca de la  
                <span className="text-blue-600 dark:text-blue-500 uppercase"> Bina</span>
            </h1>

        </div>

        <div className='flex'>
            <div className="w-full m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center p-10 text-center">
                    <img className="m-3 rounded-full shadow-lg" src={LogoMujer} alt="Bonnie image" width={100} height={100}/>
                    <h5 className="mb-1 text-7xl font-medium text-gray-900 dark:text-white">Zuri Anahi</h5>
                    <span className="text-5xl text-gray-500 dark:text-gray-400">Granadilla Vega</span>
                    <p className='p-1'>20211021</p>
                </div>
            </div>
            
            <div className="w-full m-5  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center p-5 text-center">
                    <img className="m-3 rounded-full shadow-lg" src={LogoHombre} alt="Bonnie image" width={100} height={100}/>
                    <h5 className="mb-1 text-7xl font-medium text-gray-900 dark:text-white">Alan Alexis</h5>
                    <span className="text-5xl text-gray-500 dark:text-gray-400">Hernandez Francisco</span>
                    <p className='p-1'>20211021</p>
                </div>
            </div>
        </div>

        <footer>
        <p className='text-sm'> Todo los Derechos Reservados UTHH { anio} , Hecho con fines educativos. </p>
       </footer>

    </div>
  )
}

export default AcercaDe