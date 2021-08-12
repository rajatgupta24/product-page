import { useState } from "react";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DehazeIcon from '@material-ui/icons/Dehaze';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import styles from "./Navbar.module.css";

function Navbar() {
    const [display, setDisplay] = useState("none");
    const clickHandler = () => {
        document.querySelector("#navBtn").addEventListener("click", () => {
            console.log("cliecked");

            if (display === "none")
                setDisplay("block");
            else 
                setDisplay("none");
            })
    }

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                {display === "none" ? (
                    <DehazeIcon id="navBtn" style={{ marginRight: "1rem" }} onClick={clickHandler} />
                    ) : (
                        <CloseIcon id="navBtn" style={{ marginRight: "1rem" }} onClick={clickHandler}/>
                    )
                }
                <h1>The Choco Makers</h1>
            </div>
            <div className={styles.searchBar}>
                <SearchIcon />
                <input className={styles.input} type="text" placeholder="Search" />
            </div>
            <div className={styles.btns}>
                <button className={styles.btn}>
                    <FavoriteIcon />
                </button>
                <button className={styles.btn}>
                    <ShoppingBasketIcon />
                </button>
                <button className={styles.btn}>
                    Login
                </button>
            </div>
        </div>
    );
}

export default Navbar;
