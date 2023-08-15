import Featured from "@/components/Featured"
import Header from "@/components/Header"
import Head from "next/head"

const Home = () => {
  return (
    <>
    <Head>
      <title>Gardenify | Home</title>
    </Head>
      <div>
        <Header />
        <Featured />
      </div>
    </>

  )
}

export default Home