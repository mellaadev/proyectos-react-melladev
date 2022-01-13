import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return (
        <Layout
            pagina='Nosotros'
        >
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>

                <div className={styles.contenido}>
                    <Image 
                        layout='responsive'
                        width={600}
                        height={450}
                        src='/img/nosotros.jpg'
                        alt='Imagen Nosotros'
                    />
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt risus at auctor egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis lorem felis, at interdum neque luctus vel. Etiam eu vestibulum est. Fusce velit leo, porttitor vitae vehicula non, vestibulum et sapien. Ut tincidunt risus non pellentesque maximus. Nulla sollicitudin orci vitae augue eleifend, sed luctus quam dictum. Nulla lectus purus, placerat id gravida tristique, tincidunt non dolor.</p>

                        <p>Quisque vitae lobortis quam, sed varius tortor. Sed ac nisl purus. Integer elementum dui massa, et euismod quam mollis at. Etiam ut lorem sem. Mauris non sagittis neque, id placerat ante. Quisque tincidunt mauris tortor, nec malesuada libero vulputate et. Maecenas facilisis magna velit, mollis suscipit enim eleifend a. Nullam eu elit id enim dapibus bibendum vitae et leo.</p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros
