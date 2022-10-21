import React, { Component } from "react";
import './Advanced-filter.css';
import config from '../config/config';
import store from "../../redux/store";
import {addToFilterCountry, addToFilterQuality} from "../../actions/actions"
import {addToFilterComposition} from "../../actions/actions"
import { event } from "jquery";

export default class AdvancedFilter extends Component {
    state = {
        countries: [],
        compositions: [],
        qualities: []
    }

    componentDidMount() {

            fetch(`${config.APIhostUrl}/filters?filters=countries,compositions,qualities`) 
            
                .then(response => response.json())
                .then(data => {

                    // console.log(data)

                    this.setState(data)
                })
                
    }
    
    handlerAddToStateCountry = (countryID) => {
        store.dispatch(addToFilterCountry(countryID))    
    }
    handlerAddToStateComposition = (compositionID) => {
        console.log(event)
            store.dispatch(addToFilterComposition(compositionID))    
    }
    handlerAddToStateQuality = (qualityID) => {
        console.log(event)
        store.dispatch(addToFilterQuality(qualityID))    
    }

    render() {
        return (
            <div className="filter">
                <div>
                    <div className="text">Issuing country</div>
                    <div className="list">
                        
                        <select value = {this.state.value} 
                         onChange={(event) => this.handlerAddToStateCountry(event.target.value)}
                        >
                            <option hidden className="choose">Choose country</option>
                            {this.state.countries.map(country => (

                                <option value={country.id}>{country.name}</option>
                                

                            ))
                            }
                        </select>
                    </div>
                    <div className="text">Metal</div>
                    <div className="list">
                        <select value = {this.state.value} 
                        onChange={(event) => this.handlerAddToStateComposition(event.target.value)}
                        >
                        <option hidden  className="choose">Choose compositions</option>
                            {this.state.compositions.map(composition => (
                                <option value={composition.id}>{composition.name}</option>
                            ))
                            }
                        </select>
                    </div>
                    <div className="text">Quality of the coin</div>
                    <div className="list">
                        <select value = {this.state.value}
                        onChange={(event) => this.handlerAddToStateQuality(event.target.value)}
                        >
                        <option hidden className="choose">Choose quality</option>
                            {this.state.qualities.map(quality => (
                                <option value={quality.id}>{quality.name}</option>
                            ))
                            }
                        </select>
                    </div>
                </div>

                <div className="right">

                    <div className="text">Price</div>

                    <div className="price">
                        <div className="text-right">from</div>
                        <div className="field-right">
                            <input type="text" />
                        </div>
                        <div className="text-right">to</div>
                        <div className="field-right">
                            <input type="text" />
                        </div>
                    </div>

                    <div className="text">Year of issue</div>

                    <div className="year-of-issue">
                        <div className="text-right">from</div>
                        <div className="field-right">
                            <input type="text" />
                        </div>
                        <div className="text-right">to</div>
                        <div className="field-right">
                            <input type="text" />
                        </div>
                    </div>

                </div>


            </div>
        )
    }
}