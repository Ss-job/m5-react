import React, { Component, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import config from '../config/config';
import './CoinItem.css';
import store from "../../redux/store";



export default function CoinItem () {
    let params = useParams();
    const navigate = useNavigate()

    let [state, setState] = useState({
        coin: {}
    })



    useEffect ( () => {

                //получение данных из state:
                let storeData = store.getState().filter;

        // {`${config.APIhostUrl}/coin/id?id=${coin.id}`} 
        // console.log('-----', this.props.match.params.id)
        // console.log('+++++', this)

        fetch(`${config.APIhostUrl}/coin/${params.id}`)
            .then(response => response.json())
            .then(data => {
                

                setState({
                    coin: data
                }
                );
                console.log(data+'из coinItem')
            })
            console.log(state.coin[0]+'из ------- coinItem')    
    },[])
            // console.log(navigate())
           return (
            <div>
            {state.coin.length >0
            ? state.coin.map(coinItem => (

            <div key={coinItem.id} className="coin-item">
                <div className="coin-item-images">
                    <div className="coin-img">
                        <img className="avers-revers" src={'../../Img_coins/' + coinItem.avers}  alt=""></img>
                    </div>
                    <div className="coin-img">
                        <img className="avers-revers" src={'../../Img_coins/' + coinItem.revers}  alt=""></img>
                    </div>
                </div>
                <div className="coin-propertys">
                    <div className="coin-propertys-content">
                    <h1 className="coin-name">{coinItem.name}</h1>
                    <div className="coin-description"><p>{coinItem.short_description}</p></div>
                    <div className="coin-description"><p>{coinItem.description}</p></div>
                    
                    <table>
                        <tbody>
                            <tr>
                                <td>Issuing Country</td>
                                <td>{coinItem.name_country}</td>
                            </tr>
                            <tr>
                                <td>Composition</td>
                                <td>{coinItem.name_metal}</td>
                            </tr>
                            <tr>
                                <td>Quality</td>
                                <td>{coinItem.name_quality}</td>
                            </tr>
                            <tr>
                                <td>Denomination</td>
                                <td>{coinItem.denomination} {coinItem.name_currency_unit}</td>
                            </tr>
                            <tr>
                                <td>Year</td>
                                <td>{coinItem.year}</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>{coinItem.weight} g</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>{coinItem.price}</td>
                            </tr>

                        </tbody>
                    </table>
                    </div >
                    <div className="footer" onClick={() => navigate(-1)}>Back to the list</div>
                
                    </div>                           
            </div>
             ))
            :''}

             </div>

        )
}