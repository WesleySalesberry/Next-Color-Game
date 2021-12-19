import { useState, useEffect } from 'react'

import Layout from '../components/Layout'
import Selector from '../components/Selector'
import { Square } from '../components/Square'
import Lost from '../components/Lost'

import { setLevelFunction } from '../utils/setLevel'
import { genRandomColors, getColorIndex } from "../utils/colors";


export default function HomePage() {
  const [ answerColor, setColor ] = useState("")
  const [ guessColors, setGuessColors ] = useState([])
  const [ level, setLevel ] = useState("easy")
  const [ bgColor, setBGColor ] = useState()
  const [ isCorrectColor, setIsCorrectColor ] = useState(false)
  const [ numGuesses, setNumGuesses ] = useState(2);
  const [ isPlaying, setIsPlaying ] = useState(true)
  

  useEffect(() => {

      const squaresNum = setLevelFunction(level) 
      const randomColors = genRandomColors(squaresNum)
      setGuessColors(randomColors)

      const index = getColorIndex(randomColors)
      setColor(randomColors[index])

  }, [level])

  const handleClick = (color) => {

      if(numGuesses === 0){
          setIsPlaying(false)
          return
      }
      
      if(color === answerColor){
          setIsCorrectColor(true)
          setBGColor(answerColor)
          setIsPlaying(false)
      }else{
          setNumGuesses(numGuesses - 1)
      }
      
  }

  const selectLevel = (level) => {
      if(level === 'easy'){
          setNumGuesses(2)
      }
      
      if(level === 'meduim'){
          setNumGuesses(4)
      }

      if(level === 'hard'){
          setNumGuesses(5)
      }
      setIsPlaying(true)
      setLevel(level)
  }; 

  const reset = () => {
      setBGColor()
      setIsCorrectColor(false)
      setLevel('easy')
      setNumGuesses(2)
      setIsPlaying(true)
      const squaresNum = setLevelFunction(level) 
      const randomColors = genRandomColors(squaresNum)
      setGuessColors(randomColors)
      const index = getColorIndex(randomColors)
      setColor(randomColors[index])
  }
  
  return (
      <Layout
          color={answerColor}
          bgColor={bgColor}
      >

          <Selector 
              reset={reset}
              isCorrectColor={isCorrectColor}
              selectLevel={selectLevel}
              isPlaying={isPlaying}
              guesses={numGuesses}
          />

          {
              numGuesses > 0 ? 
                  guessColors.map((color, idx) => (
                      <Square
                          key={idx}
                          color={color}
                          handleClick={handleClick}
                      />
                  ))
              :   
                  <Lost
                      color={answerColor}
                      reset={reset}
                  /> 
          }
      </Layout>
  )
}
