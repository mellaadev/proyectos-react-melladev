import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Song from './components/Song';
import Info from './components/Info';

import axios from 'axios';

function App() {

  // Definir el state para la consulta a las apis

  const [ toSearchLyrics, setToSearchLyrics ] = useState({})
  const [ lyrics, setLyrics ] = useState('')
  const [ artist, setArtist ] = useState({})

  useEffect(() => {
    if(Object.keys(toSearchLyrics).length === 0) return;

    const lyricsConsultAPI = async () => {
      const { artist, song } = toSearchLyrics;
      const urlLyrics = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const urlArtist = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`

      const [lyrics, info] = await Promise.all([
        axios(urlLyrics), 
        axios(urlArtist)
      ])

      setLyrics(lyrics.data.lyrics)
      setArtist(info.data.artists[0])
    }
    lyricsConsultAPI()
  }, [toSearchLyrics, artist])
  

  return (
    <>
      <Formulario 
        setToSearchLyrics={setToSearchLyrics}
      />

      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
          <Info 
            artist={artist}
          />
          </div>
          <div className='col-md-6'>
            <Song 
              lyrics={lyrics}
            />
          </div>
        </div>
      </div>    
    </>
  );
}

export default App;
