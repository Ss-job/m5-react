import React, { Component } from "react";
import ReactDOM from "react-dom";
import './Catalogs.css';
import config from '../config/config';
import { Link } from "react-router-dom";
import store from "../../redux/store";
import {addToStoreCatalog} from "../../actions/actions"

export default class Catalogs extends Component {
    state = {
        catalogs: []
    }

    handlerAddToState = (catalogId) => {
        store.dispatch(addToStoreCatalog(catalogId))
    }

    componentDidMount() {


        fetch(`${config.APIhostUrl}/coin-catalogs`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    catalogs: data
                })
            })


    }
    
    render() {
        return (

            <div className="catalogs-item">
                {this.state.catalogs.map(catalog => (
                    <div key={catalog.id} className='catalogs-list-item'>
                        <div className="name-catalog">{catalog.name}</div>
                        <Link to={'/catalog/' + catalog.id} className="show-all"  onClick = {() => this.handlerAddToState(catalog.id)}>
                            <div>Show all</div>
                            <img src='../../Img_coins/Стрелка.svg' alt="" className="catalogs-list-item-img"></img>
                        </Link>
                        <div className="img">
                            <img src={'../../Img_coins/' + catalog.catalog_img} alt="" className="img-list-item" />
                        </div>
                    </div>
                ))
                }
            </div>

        )
    }
}