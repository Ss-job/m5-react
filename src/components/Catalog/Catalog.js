import React, { Component, useEffect, useState } from "react";
import './Catalog.css';
import config from '../config/config';
import { Link, useParams } from "react-router-dom"
// import {searchCoins} from '../actions/actions'
import Search from "../Search/Search";
import store from "../../redux/store";
import { useSelector, useDispatch } from 'react-redux'


export default function Catalog() {

    let params = useParams();
    // console.log(params+'++++++++++++++++++++++++++')
    let [state, setState] = useState({
        coins: [],
        filters: {}

    })

    const filters=useSelector(state=>state.filter)
    setState({
        ...state,
    })


    useEffect(() => {

        // const state = store.getState(); запрос данных из store и передавать в локальный state
        // this.setState({filter: state.filter});
        // store.subscribe(() => { - для классовых компонентов

        //получение данных из state:
        let storeData = store.getState().filter;
        console.log(storeData+'-=-=-=-=-');

        //---------------поместить в отдельную функцию generateSearchString
        let i = 0;
        let filterString = '';
        for (let filter in storeData) {
            if (storeData[filter] != null) {
                if (i < 1) {
                    filterString += `${filter}=${storeData[filter]}`
                } else {
                    filterString += `&${filter}=${storeData[filter]}`
                }
                i++;
            }
        }
        // console.log(filterString)
        //-------------

        fetch(`${config.APIhostUrl}/coins?${filterString}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setState({
                    coins: data
                })
            })



        // fetch(`${config.APIhostUrl}/coins/${params.id}`)
        //     .then(response => response.json())
        //     .then(data => {

        //         setState({
        //             coins: data
        //         },
        //         );

        //     })
    }, [])

    // componentDidMount() {
    // let infoState = store.getState()[0];




    return (
        <div className="wrapper">
            <h1>List of the coins</h1>
            <Link to={'/'} className="homepage">Homepage — List of the coins</Link>

            <Search showCatatlog='1' />
            
            <div className="items">

                {state.coins.length > 0
                    ? state.coins.map(coin => (
                        <div key={coin.id} className='coin-list-item'>
                            <div className="img">
                                <img src={'../../Img_coins/' + coin.avers} alt="" className="img-list-item" />
                            </div>
                            <div className="name-short-description">
                                {/* <div className="coin-list-item-name">{coin.name}</div> */}
                                <div>
                                    <Link to={'/coin/' + coin.id}
                                        className="coin-list-item-name">{coin.name}</Link>
                                </div>
                                <div className="coin-list-item-short-description">{coin.short_description}</div>
                            </div>
                        </div>
                    ))
                    : 'Список пуст!'
                }


            </div>
        </div >
    )

}