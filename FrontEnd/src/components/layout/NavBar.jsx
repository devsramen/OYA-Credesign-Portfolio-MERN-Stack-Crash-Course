import { useEffect } from "react";
import {Fragment} from "react";
import axios from 'axios';
import { useState } from "react";

const NavBar = () => {

    const [list, setList] = useState([])
    const [buttonText, setButtonText] = useState("")
    const [buttonShow, setButtonShow] = useState(false)


    useEffect(()=>{
        async function fetchData() {
            let data = await axios.get("http://localhost:5050/navBar")
            setList(data.data.menuItem.split(","))
            setButtonText(data.data.buttonText)
            setButtonShow(data.data.buttonShow)
        }
        fetchData()
    },[])


    return (
        <Fragment>
            <nav id="nav">
                <div className="container">
                    <div className="navWrapper">
                        <a href="/"><img src="./public/images/Logo.svg" alt="Logo" width="135" height="auto"/></a>
                        <ul className="dFlex">
                            {
                                list.map((item,index)=>(
                                    index === 0?<li key={index}><a href="/">{item}</a></li>:<li key={index}><a href={item}>{item}</a></li>
                                ))
                            }
                            {/* <li><a href="/">home</a></li>
                            <li><a href="/about">about</a></li>
                            <li><a href="/service">service</a></li>
                            <li><a href="/resume">resume</a></li>
                            <li><a href="/portfolio">portfolio</a></li>
                            <li><a href="/testimonial">testimonial</a></li>
                            <li><a href="/blogs">blogs</a></li> */}
                        </ul>
                        {
                            buttonShow && 
                            <a href="/contactUs" className="commonBtn">{buttonText}</a>
                        }
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default NavBar;