/* styles.css */
/* universal selector - Applies to whole document */
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: #082c6c;
    color: #fff;
}
/* To center everything in game */
.game{
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
}
  
/* Title of the game */
.title{
    position: absolute;
    top: 0;
    font-size: 4rem;
    z-index: 2;
}
  
/* Score Board */
.score{
    display: flex;
    width: 30vw;
    justify-content: space-evenly;
    position: absolute;
    top: 70px;
    z-index: 1;
}
  
/* Score  */
.p-count,.c-count{
    text-align: center;
    font-size: 1.5rem;
    margin-top: 1rem;
}
  
/* displaying three buttons in one line */
.options{
    display: flex;
    width: 50vw;
    justify-content: space-evenly;
    margin-top: 2rem;
}
  
/* Styling on alll three buttons */
.rock, .paper, .scissor{
    padding: 0.8rem;
    width: 100px;
    border-radius: 10px;
    background: green;
    outline: none;
    border-color: green;
    border: none;
    cursor: pointer;
}
  
.move{
    font-size: 2rem;
    font-weight: bold;
}
  
/* Reload button style */
.reload {
    display: none;
    margin-top: 2rem;
    padding: 1rem;
    background: green;
    outline: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}
  
.result{
    margin-top: 20px;
    font-size: 1.2rem;
}
  
/* Responsive Design */
@media screen and (max-width: 612px)
{  
    .title{
        text-align: center;
    }
    .score{
        position: absolute;
        top: 200px;
        width: 100vw;
    }
    .options{
        width: 100vw;
    }
