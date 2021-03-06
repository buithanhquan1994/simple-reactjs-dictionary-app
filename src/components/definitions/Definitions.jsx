import React, { useEffect } from 'react'
import './definitions.scss'

export default function Definitions({ word, meanings, language, lightMode}) {
  useEffect(() => {
  }, [meanings,language ])
  return (
    <div className="meanings">
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
