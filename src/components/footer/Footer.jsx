import styles from "./Footer.module.css";
function Footer() {
    return (
        <>
            <main>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
            </main>
            <div className={styles.container}>
                <div className={styles.list}>
                    <h2>Quick Links</h2>
                    <ul>
                        <li>ChocoLate Bar</li>
                        <li>ChocoBalls</li>
                        <li>Custom Made</li>
                    </ul>
                </div>
                <div className={styles.list}>
                    <h2>Get To Know Us</h2>
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Business</li>
                    </ul>
                </div>
                <div className={styles.list}>
                    <h2>Follow Us</h2>
                    <ul>
                        <li>Twitter</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
            <div className={styles.copy}>

                <p>CopyRights &copy; 2021 TheChocoMakers</p>
            </div>
        </>
    )
}

export default Footer
