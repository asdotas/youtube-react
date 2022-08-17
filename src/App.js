import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Search from "./pages/Search";
import Top from "./pages/Top";
import Watch from "./pages/Watch";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Top />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/watch' element={<Watch />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

/*
<Route path='/createpost' element={<CreatePost />}></Route>
<Route exact path="/" component={Top} />
<Route exact path="/search" component={Search} />
<Route exact path="/watch" component={Watch} />
*/
