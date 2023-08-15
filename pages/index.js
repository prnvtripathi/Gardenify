import Featured from "@/components/Featured"
import Header from "@/components/Header"
import Head from "next/head"
import { Product } from "@/models/Product"
import { mongooseConnect } from "@/lib/mongoose"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ['latin'],
  weights: [400, 500, 600, 700]
})

const Home = ({ product }) => {
  return (
    <>
      <Head>
        <title>Gardenify | Home</title>
      </Head>
      <div className={montserrat.className}>
        <Header />
        <Featured product={product} />
      </div>
    </>

  )
}

export default Home

export async function getServerSideProps() {
  const featuredProductId = '64beaaa5db63d53bb78ca780'
  await mongooseConnect()
  const product = await Product.findById(featuredProductId)

  return {
    props: { product: JSON.parse(JSON.stringify(product)) }
  }
}