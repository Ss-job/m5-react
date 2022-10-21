import React, { Component } from "react";
import './Search.css';
import AdvancedFilter from "../Advanced_filter/Advansed-filter";
import Catalogs from "../Catalogs/Catalogs";
import Catalog from "../Catalog/Catalog";

export default class Search extends Component {
    state = {
        filterSrcImg: '/Advanced-filter.svg',
        filterOn: false
    }
    componentDidMount () {
        this.setState (
            {url: window.location.pathname}
        ) 
    }

    getFilter = (newFilterOn) => {

        this.setState({
            filterOn: newFilterOn,
            filterSrcImg: newFilterOn ? '/Advanced-filter-on.svg' : '/Advanced-filter.svg'
        })

    }

    getCoins = () => {

    }
    
    render() {
        console.log(this.props)
        return (
            <div>
                <div className="input-field">
                    Input field
                </div>
                <div className="search">
                    <div className="search-line">
                        <input className="input-search-field" type="text" name="search-field"></input>
                    </div>
                    <div onClick={this.getCoins}
                        className="button-search">
                        <span className="button-text">Search</span>
                    </div>
                </div>

                <div onClick={() => this.getFilter(!this.state.filterOn)}
                    className="button-advanced-filter">
                    <div className="button-advanced-filter-text">Advanced filter</div>
                    <div>
                        <img src={this.state.filterSrcImg} className="filter-img" alt="" />
                    </div>
                </div>

                {
                    
                    this.state.filterOn 
                        ? <AdvancedFilter /> 
                        : (this.props.showCatalog === '1' ? <Catalogs /> : <Catalog />)
                        
                        // : <Catalogs />
                }
            </div>
        )
    }
}

// state = {
//     filterOn: false
// }

// render() {
//     let Component = this.props.targetComponent;
//     return(

// <div onClick={() => this.getFilter(!this.state.filterOn)}
//                         className="button-advanced-filter">
//                         <div className="button-advanced-filter-text">Advanced filter</div>
//                         <div>
//                             <img src={this.state.filterSrcImg} className="filter-img" alt="" />
//                         </div>
//                     </div>
//                     {this.state.filterOn ? <AdvancedFilter /> : <Component />}