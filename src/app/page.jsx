'use client'
import { useUser } from '@/context/Context'
import { onAuth, signInWithEmailAndPassword } from '@/firebase/utils'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from './page.module.css'
import Button from '../components/Button'
import Input from '../components/Input'
import Error from '@/components/Error'
import SelectWithFlag from '@/components/SelectWithFlag'

import { useRouter } from 'next/navigation';

export default function Home() {
  const { user, userDB, setUserProfile, setUserSuccess, success, setUserData, postsIMG, setUserPostsIMG } = useUser()

  const router = useRouter()

  const signInHandler = (e) => {
    e.preventDefault()
    let email = e.target[0].value
    let password = e.target[1].value


    email.length !== 0 && password.length !== 0 ? signInWithEmailAndPassword(email, password, setUserSuccess) : setUserSuccess('Complete')




  }

console.log(SelectWithFlag)

  useEffect(() => {
    user === undefined && onAuth(setUserProfile)
    if (user !== undefined && user !== null) router.replace('/Cliente')
  }, [user]);

  console.log(success)
  return (

    <div >
      <header className={style.header}></header>
      <main className={style.main}>
        <Image src="/logo.svg" width="200" height="200" alt="User" />
        <h1 className='text-yellow-500'>Cambios App</h1>
        <h1>Tus cambios mas faciles y seguros</h1>
        <SelectWithFlag />

        <br />
        <br />
        <div
          className="w-full max-w-sm p-0 bg-transparent rounded-lg shadow sm:p-6 md:p-8 "
        >
          <form className="space-y-6" onSubmit={signInHandler} >
            <h5 className="text-xl font-medium text-white ">Iniciar Sesión</h5>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm text-left font-medium text-white">Email</label>
              <Input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm text-left  font-medium text-white">Contraseña</label>
              <Input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div className="flex items-start">
              <a href="#" className="ml-auto text-green-400 text-sm text-blue-700 hover:underline">Olvidaste tu contraseña?</a>
            </div>
            <Button type="submit" theme="Primary">Iniciar Sesión</Button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">No tienes una cuenta? <Link href="/SignUp" className="text-green-400 hover:underline">Registrate</Link >
            </div>
          </form>
        </div>
      </main>
      {success == 'AccountNonExist' && <Error>Cuenta inexistente</Error>}
      {success == 'Complete' && <Error>Complete el formulario</Error>}


      {/* {success == false && <Error>ERROR: verifique e intente nuevamente</Error>}
        {success == 'complete' && <Error>Llene todo el formulario</Error>} */}
    </div>

  )
}
