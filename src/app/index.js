import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import { list } from '../data'

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

      <div className="container">
      <Navbar filterResult={filterResult} setFiltering={setFiltering} count={count}/>
        <div className="row">
            <SideMenu loadCategory={ loadCategory} category={category} />

          <div className="col-sm">
            <div className="row">
              <List data={(isfiltering)?filtredResult:list[category]}
                addtoCard={setCount} count={count}
                />

            </div>
          </div>
        </div>

        <Footer />
      </div>

    </Fragment>
  );
}


const SideMenu = ({loadCategory,category}) => {
  let links = ["fruits", "legumes", "fresh", "epicerie", "boissons"]
  
  return (
    <div className="col-sm-2 sidebar">
        <ul>
          {
              links.map((link,key) =>{
                return( <li className={(category == key) ?'active':''} 
                            key={key} 
                            onClick={ () => loadCategory(key)}>{link} </li>)
              }
            )
          }

        </ul>
      </div>
  );
};

const List = props => {
  
  let {data} = props
  
  console.log('data',data)
  

  return (
    <div className="col-sm">
            <div className="row">
                {data.map( (item) => <Card key={item.ref} item={item} count={props.count} addtoCard={props.addtoCard} />)}
            </div>
    </div>
  );
};
export default App;
