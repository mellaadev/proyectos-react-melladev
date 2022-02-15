import React from 'react'

const Info = ({ artist }) => {
    
    if(Object.keys(artist).length === 0) return null;

    const { strArtistThumb, strGenre, strBiographyES} = artist

    return (
        <div className='card border-light'>
            <div className='card-header bg-primary text-light font-weight-bold'>
                Información Artista
            </div>

            <div className='card-body'>
                <img src={strArtistThumb} alt='Artist IMG'/>
                <p className='card-text'>Género: {strGenre}</p>
                <h2 className='card-text'>Biografía: </h2>
                <p className='card-text'>{strBiographyES}</p>
                <p className='card-text'>
                    <a href={`${artist.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`${artist.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${artist.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Info