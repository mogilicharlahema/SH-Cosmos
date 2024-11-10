
import Card from "../components/Card";
import styles from "../components/Card.module.css"
export default {
    component: <Card/>,
    CardWithProps:<Card button={<button className={styles.button}>GET</button>}></Card>
   
};


