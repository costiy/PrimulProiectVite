const Titlu = () => {
  return (<div>
    <h1>Site cu poze MEME</h1>
    <h2>Aici voi pune cateva poze MEME si voi exersa pentru curs</h2>
    </div>);
};

const Poze = () => {
  return (<div>
  <img src = "fortnutavatar.png" width = "200" height = "200"></img>
  <img src = "HappyCAT.jpg" width = "200" height = "200"></img>
  <img src = "LamaGermanaAVATAR.jpg" width = "200" height = "200"></img>
  <img src = "PASTOASOMUIE.png" width = "200" height = "200"></img>
  </div>)
};

const Reminder = (props) => {
  const { nume, varsta } = props;
  return <h1>Salut, noi am ajutat la acest site {nume} si avem impreuna {varsta} ani</h1>;
};

function App() {
  return (<center><div>
    <Titlu/>
    <Poze/>
    <Reminder nume = {"Vite + React = <3"} varsta = {3}/>
  </div>
  </center>)
};

export default App

