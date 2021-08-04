import React, { useEffect } from 'react'
import './definitions.scss'
import ReactAudioPlayer from 'react-audio-player';

export default function Definitions({ word, meanings, language, lightMode}) {
  useEffect(() => {

    console.log(language)
    console.log(meanings[0])
  }, [meanings,language ])
  return (
    <div className="meanings">
      {/* audio---------------------------- */}
      {meanings[0] && word && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your browser does not support the audio element.
        </audio>
      )}
      {/* audio---------------------------- */}

      {word === "" ? (
        <span className="meanings__subTitle">Start by typing a word in search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def, index) => (
              <div
                key={index}
                className="meanings__singleMean"
                style={{
                  backgroundColor:  lightMode ? '#3b5360' : 'white',
                  color: lightMode ? 'white' : 'black',
                }}
              >
                <b>{def.definition}</b>
                <hr/>
                {def.example && (
                  <span>
                    <b>Example :</b> {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  )
}
