import React, { useState } from 'react'
import './header.scss'
import { TextField, MenuItem } from '@material-ui/core'
import { ThemeProvider  } from '@material-ui/core/styles'
import { createTheme } from '@material-ui/core/styles'
import listLanguage  from '../../data/listLanguage'

export default function Header({ language, setLanguage, word, setWord, setMeanings, lightMode }) {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightMode ? '#000' : '#fff',
      },
      type: lightMode ? 'light' : 'dark'
    }
  })

  const handleSelectLanguage = (language) => {
    setLanguage(language)
    setWord('')
    setMeanings([])
  }

  return (
    <div className="header">
      <span className="header__title">{ word ? word : 'Word Hunt' }</span>   
      <div className="header__input">
        <ThemeProvider theme={darkTheme}>
          {/* Searching text */}
          <TextField 
            className="header__input__searchText"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            label="Search word"/>

          {/* Select language */}
          <TextField
            className="header__input__select" 
            select
            label="Language"
            value={language}
            onChange={(e) => handleSelectLanguage(e.target.value)}
          > 
            { 
              listLanguage.map(item => (
                <MenuItem key={item.value}
                  value={item.value}
                >{item.label}</MenuItem>
              ))
            }
          </TextField>
        </ThemeProvider>
      </div>   
    </div>
  )
}
