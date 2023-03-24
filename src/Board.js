import {useState} from 'react'
import Box from './Box'
import Result from './Result'
import "./style.css"

function Board() {

    const [initialData, setInitialData] = useState(
        [
        null, null, null,
        null, null, null,
        null, null, null 
        ])

        // initialData = [null, null, null, null, "O", null, null, null, "X"]

    const [currentPlayerIsX, setCurrentPlayer] = useState(true)

    // currentPlayerIsX = false

    function displayIndex(index)//index = 4
    {
        const anotherInitialData = [...initialData]//[null, null, null, null, null, null, null, null, "X"]
        anotherInitialData[index] = currentPlayerIsX ? "X" : "O"
        setInitialData(anotherInitialData)
        setCurrentPlayer(!currentPlayerIsX)
    }


    function checkWinner()
    {
        const winningPositions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for(let i of winningPositions)
        {
            // initialData = [O , O, O, X, O, O, O, X, X]
        
            const [x, y, z] = i
        //  x = 0,  y = 4, z = 8

            if((initialData[x] == initialData[y] &&  initialData[x] == initialData[z]))
            {
                // if the condition is true --> All 3 positions have same data
                // Get X or O

                return initialData[x]
            }   
        }
    }

    const myBoard = document.getElementById("gameboard")

    let winner = checkWinner()//null, O, X
    if(winner == "X")
    {
        return <Result result="X is the Winner"/>
    }
    else if(winner == "O")
    {
        return <Result result="O is the Winner"/>
    }

  return (
   <div>
    <h2>TIC TAC TOE</h2>
     <div className='gameboard' id='gameboard'>
        <div className='row'>

            {/* <Box data = {null} */} 
            {/* Until no we have passed some data to Box component,
             data is basically null
             Now we would not pass a normal value like null to Box component
             Instead we would be passing a function */}
            <Box data1={initialData[0]} data2={function()
            {
                displayIndex(0)
            }} />

            <Box data1={initialData[1]} data2={function()
            {
                displayIndex(1)
            }} />

            <Box data1={initialData[2]} data2={function()
            {
                displayIndex(2)
            }} />
        </div>

        <div className='row'>
            <Box data1={initialData[3]} data2={function()
            {
                displayIndex(3)
            }} />

            <Box data1={initialData[4]} data2={function()
            {
                displayIndex(4)
            }} />

            <Box data1={initialData[5]} data2={function()
            {
                displayIndex(5)
            }} />
        </div>

        <div className='row'>
            <Box data1={initialData[6]} data2={function()
            {
                displayIndex(6)
            }} />

            <Box data1={initialData[7]} data2={function()
            {
                displayIndex(7)
            }} />

            <Box data1={initialData[8]}
            data2={function()
                {
                    displayIndex(8)
                }} />
        </div>
    </div>
   </div>
  )
}

export default Board