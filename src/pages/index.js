import Head from "next/head";
import Header from '../components/Header'
import Banner from '../components/Banner'
import ProductFeed from '../components/ProductFeed'

export default function Home({products}) {
  return (
    <div className="bg-gray-200 body">
      <Head>
        <title>Amazon Clone || Abtahi Noor</title>
        <link href="https://iconape.com/wp-content/files/mk/33892/svg/amazon-icon-1.svg" rel="icon" type="image/icon"></link>
      </Head>

      {/* Header */}
      <Header/>

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner/>

        {/* Product Feed */}
        <ProductFeed product= {products}/>
      </main>
 

    </div>
  );
}

// https://course-api.com/react-store-products
// https://fakestoreapi.com/products/
export async function getServerSideProps(context){
  const products = await fetch("https://fakestoreapi.com/products/")
  .then(res => res.json())
  // .then(data=>console.log(data))

  return {
    props:{
      products,
    }
  }
}

// Get : https://fakestoreapi.com/products/