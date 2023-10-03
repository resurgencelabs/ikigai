import styles from './landing.module.scss';
import {hi} from './index.js';

export function Landing(){
    return (
        <div>Landing<div className={styles.superButton} onClick={() => hi()}>button</div></div>
        
    );
}