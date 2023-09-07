const Titlu = () => {
  return (<div>
    <h1>Site cu poze MEME</h1>
    <h2>Aici voi pune cateva poze MEME si voi exersa pentru curs</h2>
    </div>);
};

const Poze = () => {
  return (<div>
  <img src = "fortnutavatar.png"></img>
  <img src = "HappyCAT.jpg"></img>
  <img src = "LamaGermanaAVATAR.jpg"></img>
  <img src = "PASTOASOMUIE.png"></img>
  </div>)
};

function App() {
  return (<center><div>
    <Titlu/>
    <Poze/>
  </div>
  </center>)
};

export default App

