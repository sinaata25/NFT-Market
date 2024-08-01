const { Component } = require("react");

//Internal Import
import { NavBar } from "../components/ComponentIndex";

const MyApp=({Component,pageProps})=>
(   <div>
    <NavBar/>
    <Component{...pageProps}/>
    </div>
)

export default MyApp