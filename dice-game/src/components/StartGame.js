import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>

        <img src="./images/dices.png
        " alt="dice"/>
        </div>
  
        <div className="content">
            <h1 >Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>

    </Container>
  )
}

export default StartGame;

const Container=styled.div`
max-width: 1180px;
display: flex;
margin:0 auto;
align-items: center;
margin-top:226px;
.content {
    h1 {
      font-size: 67px;
      white-space: nowrap;
    }

  }
`;
