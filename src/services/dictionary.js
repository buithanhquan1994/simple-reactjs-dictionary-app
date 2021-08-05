import axios from 'axios';
const url = 'https://api.dictionaryapi.dev/api/v2/entries';

const getWordDefinitions = (language_code, word) =>  new Promise((resolve, reject) => {
  try {
    var result = axios.get(`${url}/${language_code}/${word}`)
    resolve(result)
  } catch (err) {
    throw new Error(err)
  }
}) 

const functionApi = {
  getWordDefinitions
}

export default functionApi