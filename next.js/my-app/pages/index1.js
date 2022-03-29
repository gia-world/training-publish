import Head from 'next/head'
import Image from 'next/image'
import { Button } from '../components/Button'
import styles from '../styles/Home.module.css'
import About from './about'
import HelloWorld from './HelloWorld'

export default function Home() {
  return (
    <div className={styles.container}>
      <About/>
      <Button/>
      <HelloWorld/>
    </div>
  )
}
