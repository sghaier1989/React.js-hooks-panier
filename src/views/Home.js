import React, { Component } from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import {list} from '../data'

class Home extends Component {
    render () {

        const {category, loadCategory ,isfiltering, addtoCard, filtredResult, filterResult, count, data, setFiltering } = this.props

        return (
        
        
        <div className="container">
                
                <div className="row">
                
                    <SideMenu loadCategory={ loadCategory} category={category} />

                <div className="col-sm">
                    <div className="row">
                    <List data={(isfiltering)?filtredResult:list[category]}
                        addtoCard={addtoCard} count={count}
                        />
                    </div>
                </div>
                </div>
        </div>
        )
    }
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

export default Home