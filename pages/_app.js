const { Component } = require("react");

//Internal Import
import { NavBar,Footer } from "../components/ComponentIndex";
import {Web3Provider} from "../web3/web3Context"
const MyApp=({Component,pageProps})=>
(   <Web3Provider>
     <div>
    <NavBar/>
    <Component{...pageProps}/>
    <Footer/>
    </div>
    </Web3Provider>
)

export default MyApp