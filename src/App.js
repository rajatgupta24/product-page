import LandingPage from "./pages/landingPage/LandingPage";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <LandingPage/>
      </div>
    </div>
  );
}

export default App;
