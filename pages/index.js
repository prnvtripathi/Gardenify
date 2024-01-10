import Featured from "@/components/Featured"
import Header from "@/components/Header"
import Head from "next/head"
import { Product } from "@/models/Product"
import { mongooseConnect } from "@/lib/mongoose"
import { Montserrat } from "next/font/google"
import NewProducts from "@/components/NewProducts"
import Footer from "@/components/Footer"

const montserrat = Montserrat({
  subsets: ['latin'],
  weights: [400, 500, 600, 700]
})

const Home = ({ featuredProduct, newProducts }) => {
  return (
    <>
      <Head>
        <title>Gardenify | Home</title>
      </Head>
      <div className={montserrat.className}>
        <Header />
        <Featured product={featuredProduct} />
        <NewProducts products={newProducts} />
        <Footer />
      </div>
    </>

  )
}

export default Home

export async function getServerSideProps() {
  const featuredProductId = '64beaaa5db63d53bb78ca780'
  await mongooseConnect()
  const featuredProduct = await Product.findById(featuredProductId)
  const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 12 })

  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts))
    }
  }
}