import React, { Component } from "react";
import Search from "../Search/Search";
import './Coins.css';




export default class Coins extends Component {
    // state = {
    //     filterSrcImg: 'Advanced-filter.svg',
    //     filterOn: false
    // }

    // getFilter = (newFilterOn) => {

    //         this.setState({ 
    //             filterOn: newFilterOn,
    //             filterSrcImg: newFilterOn ? 'Advanced-filter-on.svg' : 'Advanced-filter.svg'    
    //         })

    // }
    render() {
        return (

            <div className="coins">
                <div>
                    <h1 className="coin-name">Homepage</h1>
                   
                    <Search />
                    {/* <div onClick={() => this.getFilter(!this.state.filterOn)}
                        className="button-advanced-filter">
                        <div className="button-advanced-filter-text">Advanced filter</div>
                        <div>
                            <img src={this.state.filterSrcImg} className="filter-img" alt="" />
                        </div>
                    </div>
                    {this.state.filterOn ? <AdvancedFilter /> : <Catalogs />} */}
            
                </div>


            </div>
        )
    }
}

{/* <Search targetComponrent="Catalogs"/> */}