import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children, pagina }) => {
    return (
        <div>
            <Head>
                <title>Guitar Web - {pagina} | by Fran Mella</title>
                <meta name="description" content="Sitio Web de venta de guitarras" />
            </Head>

            <Header />

            {children}

            <Footer />
        </div>
    )
}

export default Layout
