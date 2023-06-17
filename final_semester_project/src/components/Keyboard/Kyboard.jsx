import React from 'react';
import styles from './Kyboard.module.css'

function Kyboard({arr,i}) {
    return (
        <div className={styles.keybord}>
              <div className={styles.row} >
             { arr.map((el, ind) => {
                let colors=(i===ind)?"red":"black";
            return <button style={{backgroundColor:colors}} className={styles.button}> 
                {el}
            </button>
             })}
        </div>
        </div>
    );
}

export default Kyboard;