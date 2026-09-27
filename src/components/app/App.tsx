import React, {useState} from 'react';
import classes from "./App.module.scss"
import {Link} from "react-router-dom";
import About from "@/pages/about/About";
import AvatarPng from "@/assets/avatar2.png"
import AvatarJpg from "@/assets/avatar.jpg"
import Calendar from "@/assets/calendar.svg"


function TODO() {
    TODO2();
}
function TODO2() {
    throw new Error();
}

export const App = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prev => prev + 1)
    }
    const decrement = () => {
        // setCount(prev => prev - 1)
        TODO()
    }

    // if(__PLATFORM__ === "desktop") {
    //     return <div>ISDESKTOPPLATFORM</div>
    // }
    //
    // if(__PLATFORM__ === "mobile") {
    //     return <div>ISMOBILEPLATFORM</div>
    // }
    return (
        <div data-testid={"App.DataTestId"}>
            <h1 data-testid={"Platform"}>PLATFORM={__PLATFORM__}</h1>
            <div>
                <img className={classes.AvatarImg} src={AvatarPng} alt="avatar"/>
                <img className={classes.AvatarImg} src={AvatarJpg} alt="avatar_beer"/>
            </div>
            <div><Calendar  width={100} height={100} fill={"green"}/></div>
            <h1 className={classes.main__title}>Наш Счетчик</h1>
            <h2 className={classes.title} >{count}</h2>
            <div className={classes.wrapper}>
                <button className={classes.button} onClick={decrement}>Decrement</button>
                <button className={classes.button} onClick={increment}>Increment</button>
            </div>
                <div className={classes.wrapper__link}>
            <Link to={"/about"} className={classes.page}>about</Link>
            <Link to={"/shop"} className={classes.page}>shop</Link>
                </div>
            <About/>
        </div>
    );
};

export default App;