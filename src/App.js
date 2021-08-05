import './App.scss'
import { useEffect, useState } from 'react'
import dictionaryApi from './services/dictionary';
import { Container, Switch } from '@material-ui/core';
import Header from './components/header/Header'
import Definitions from './components/definitions/Definitions';
import listLanguage  from './data/listLanguage'
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

function App({children}) {
  const [meanings, setMeanings] = useState([]) 
  const [word, setWord] = useState("")
  const [language, setLanguage] = useState(listLanguage[0].value)
  const [lightMode, setLightMode] = useState(false)

  
  useEffect(() => {
    async function getWordMeaning () {
      try {
        const data = await dictionaryApi.getWordDefinitions(language, word)
        setMeanings(data.data)
      } catch (err) {
        console.log(err)
      }
    }
  
    getWordMeaning()
  }, [word, language]) 

  const SwitchChangeTheme = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    <div className="App" style={{
      backgroundColor: lightMode ? '#fff' : '#282c34',
      color: lightMode ? 'black' : 'white',
      transition: 'all 0.5s linear'
    }}>
      <Container className="container" maxWidth="xl">
        <div style={{ position: 'absolute', top: 0, right: 15, paddingTop: 10}}>
          <span>{ lightMode ? 'Light Mode' : 'Dark Mode' }</span>
          <SwitchChangeTheme checked={lightMode} onChange={() => setLightMode(!lightMode)}/>
        </div>

        <Header 
          language={language} 
          setLanguage={setLanguage}
          word={word}
          setWord={setWord}
          setMeanings={setMeanings}
          lightMode={lightMode}
          />

        {
          meanings && (
          <Definitions 
            word={word} 
            meanings={meanings}
            language={language}
            lightMode={lightMode}
            />
          )
        }
        
      </Container>
    </div>
  );
}

export default App;
