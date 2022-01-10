import Content from './components/Content/Content';
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Collection from './components/Collection/Collection';

const App = ()  => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="collection" element={<Collection />}>
            <Route path=":collectionId" element={<Collection />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
