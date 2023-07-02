import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import google from "../public/Google__G__Logo.svg.webp"
import {useSession, signIn, signOut} from "next-auth/react"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const session = useSession()

  if(session.data === null) {
    return(
      <Image onClick={signIn} src={google} width="50" height="50" alt=''/>
    )
  }

  console.log(session);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <h2>Signed in as {session?.data?.user?.name}</h2>
        <button onClick={signOut}>Sign Out</button>

    </>
  )
}
