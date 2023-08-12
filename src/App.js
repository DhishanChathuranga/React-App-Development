import "./App.css";
import Main from "./Components/Main";

function App(){
  return (
    <>
      <Main name='Dhishan' position='Web Developer' city='Galle'>
        <p>create by Dhishan</p>
      </Main>
      <Main name='Chathuranga' position='UI/UX Engineer' city='Kotte'/>
      <Main name='Chandrathilaka' position='Software Engineer' city='Rathgama'/>
    </>
  );
}

export default App;
