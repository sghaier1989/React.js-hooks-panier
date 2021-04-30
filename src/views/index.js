import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import { list } from '../data'
import Home from '../views/Home'

import {
  BrowserRouter as Router,  Route} from "react-router-dom";
import { CartPage } from './CartPage';

const App = () => {
  const [count,setCount] = useState(0)
  const [category,setCategory] = useState(0)
  const [isfiltering,setFiltering] = useState(false)
  const [filtredResult,setFilteredResult] = useState(false)
  
  let loadCategory = (i) => setCategory(i)

  let filterResult = ( input ) => {
    let fullList = list.flat()
    let result = fullList.filter( item => {
      let name = item.name.toLowerCase()
      let strSearch = input.toLowerCase()
      return name.indexOf(strSearch) > -1
    })
    setFilteredResult(result)
    console.log('result',result)
  }

 

  useEffect(() => {
    setFiltering(isfiltering)
    
  });
  
  return (
    <Fragment>
      <Router>
      <Navbar filterResult={filterResult} setFiltering={setFiltering} count={count}/>

      {/* routes */}
        <Route exact path="/home" component={() => <Home loadCategory={loadCategory} 
                                                              category={category} 
                                                              addtoCard={setCount}
                                                              count={count}
                                                              setFiltering={setFiltering}
                                                              filterResult={filterResult}
                                                              data={(isfiltering)?filtredResult:list[category]}
                                                              isfiltering={isfiltering}
                                                              filtredResult={filtredResult}
                                                              />}>
           
          </Route>
        <Route exact path="/CartPage">
            <CartPage />
          </Route>
        </Router>
        <Footer />

    </Fragment>
  );
}


export default App;
