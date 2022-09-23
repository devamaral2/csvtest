import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  // const parseCSV = (text) => {
  //   console.log(text.split('\n'))
  // }
  // useEffect(() => {
  //   fetch('../PanilhinhaTopNossa.csv')
  //   .then((r) => console.log(r))
  //   // .then((text) => parseCSV(text))
  // }, [])

  // const tryi = async (csv) => {
  //  const testes = await csv.
  //  const spit = testes.join()
  //  console.log(testes)
  // }
  const [csv, setCsv] = useState()



  const processCSV = (str, delim=',') => {
    const result = {
      headers: [],
      data:[],
    }
    const [header, ...content] = str.split('\n');

    result.headers = header.split(delim);

    content.forEach((item) => {

      result.data.push(item.split(delim))
    })
    console.log(result)
  }

  const submit = () => {
    const file = csv;
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      processCSV(text)
    }
    reader.readAsText(file)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

   <input type="file" onChange={async (e) => {
    setCsv(e.target.files[0])
    // tryi(e.target.files[0]);
    
  }}/>
  <button type="button" onClick={ (e) => {
    e.preventDefault();
    if (csv) submit();
  }}>Enviar</button>
    </div>
  )
}
