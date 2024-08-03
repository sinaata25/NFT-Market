const { Component } = require("react");

//Internal Import
import { NavBar,Footer } from "../components/ComponentIndex";

const MyApp=({Component,pageProps})=>
(   <div>
    <NavBar/>
    <Component{...pageProps}/>
    <Footer/>
    </div>
)

export default MyApp