import React, {useState} from "react";
import axios from 'axios'
import './Crypto.css'

function Crypto() {

    const [crypto, setCrypto] = useState('')
    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [symbol, setSymbol] = useState('')
    const [link, setLink] = useState('')
    const [ind, setInd] = useState('')
    const [usd, setUsd] = useState('')
    const [desc, setDesc] = useState('')

    const handleSearch = () => {
        const url = "https://api.coingecko.com/api/v3/coins/" + crypto;

        axios.get(url)
        .then(res => {
            const responseData = res.data
            setImg(responseData.image.large)
            setName(responseData.name)
            setSymbol(responseData.symbol)
            setLink(responseData.links.homepage[0])
            setInd("₹ : " + responseData.market_data.current_price.inr)
            setUsd("$ : " + responseData.market_data.current_price.usd)
            setDesc(JSON.stringify(responseData.description.en))
        }).catch(err => {
            alert(`${crypto} is not a Cryptocurrency`)
        })
    }

    function createMarkup() {
        return { __html: desc }
    }

    return <>
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        CryptoScope
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    About
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <input
                                className="form-control me-2"
                                type="text"
                                placeholder="Search"
                                value={crypto}
                                onChange={(e) => setCrypto(e.target.value)}
                                required
                            />
                            <button onClick={handleSearch} className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* middle section */}
            <div className="mt-5 container-fuild d-flex justify-content-center">
                <div className="col-md-4 p-2 rounded my-auto" id="sub-container" style={{backgroundColor:"#FFF7FC"}}>
                    <img src={img} width="150" alt="" /> <br />
                    <h1 className="text-black">{name}</h1>
                    <h2>{symbol}</h2>
                    <h2><a href={link} className="text-blue">{link}</a></h2> <br />
                    <h2>{ind}</h2>
                    <h2>{usd}</h2>
                </div>

                <div className="text-white p-5 col-md-8 my-auto" id="sub-container">
                    <div dangerouslySetInnerHTML={createMarkup()}>

                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Crypto;


