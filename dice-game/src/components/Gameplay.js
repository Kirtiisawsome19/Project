import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from 'react'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'; // Import the Rules component





const Gameplay = () => {
    const [score,setscore]=useState(0);

    const[selectedNumber,setSelectedNumber] =useState();
    const[currentDice,setCurrentDice]=useState(1);
const[error,setError]=useState("");
const[showRules,setShowRules]=useState(false)

    const generateRandomNumber=(min,max)=>{
        return Math.floor(Math.random()*(max-min)+min);
    }
    
    
    const roleDice=()=>{
        if(!selectedNumber) {
setError("You have not selected any number")
            return;
        }
       
        const randomNumber=generateRandomNumber(1,7);
    
        setCurrentDice((prev)=>randomNumber);

        
    
    

if(selectedNumber===randomNumber){
    setscore((prev)=>prev+randomNumber);
} else{
    setscore((prev)=>prev-2);
}

setSelectedNumber(undefined);
    }


    const  resetScore=()=>{
        setscore(0);
    }
  return (
    <MainContainer>
    <div className='top_section'>
    <TotalScore score={score}/>
 

    <NumberSelector
    error={error}
    setError={setError}
       selectedNumber={selectedNumber}
       setSelectedNumber={setSelectedNumber}
       
    />
    </div>
    <RoleDice
    currentDice={currentDice}
    roleDice={roleDice}

    />
    <div style={{marginTop:"44px"}}>
        <OutlineButton 
        
        className='btns'
        onClick={resetScore}
        >Reset Score</OutlineButton>
        <Button className='btns' style={{ marginTop: "19px" }} 
        
        onClick={()=>setShowRules(prev=>!prev)}
        >{showRules?"Hide":"Show"} Rules</Button>
    </div>
   {showRules&& <Rules/>}
</MainContainer>
  )
}

export default Gameplay

const MainContainer = styled.main`
padding-top:70px;
.top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;

}
.btns{
    align-items: center;
    justify-content: center;
    gap:10px;
    margin: 0 auto;
}
`;