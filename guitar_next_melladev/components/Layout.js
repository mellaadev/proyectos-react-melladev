import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children, pagina, guitarras }) => {
    return (
        <div>
            <Head>
                <title>Guitar Web - {pagina} | by Fran Mella</title>
                <meta name="description" content="Sitio Web de venta de guitarras" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />
            </Head>

            <Header 
                guitarras={guitarras}
            />

            {children}

            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    guitarras: null
}

export default Layout
