import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Login from '../components/Login'

export default function Home() {
  return (
    <div>
      <Header/>
      <Login/>
    </div>
  )
}
