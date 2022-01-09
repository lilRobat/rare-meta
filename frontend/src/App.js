import Content from './components/Content/Content';
import Header from './components/Header/Header'
import { BrowserRouter } from "react-router-dom";

const App = ()  => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Content></Content>
      </BrowserRouter>
    </div>
  );
}

export default App;
