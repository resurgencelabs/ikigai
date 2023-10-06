import styles from './misc.module.scss';
import {load_misc} from './index.js';

export function Misc(){
    return (
        <div id="bod" className={styles.home} onLoad={() => load_misc()}>
    <div className={styles.header}>
      <a><img src="./home-img.png" alt="" height="80" width="80" /></a>

      <div className={styles.topnav}>
        <a href="/landing">Home</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
        <a href="/profile">Profile</a>
        
      </div>
    </div>
    <div className={styles.homeWrapper}>
      <div className={styles.row}>
        <div className={styles.collg2}>
          <div className={styles.homeText}></div>
        </div>
      </div>
      <a className={styles.back} href="/project_details">back</a>
      <div className={styles.miscCont}
        
      >
        <div style={{visibility: "hidden"}}>k</div>
        <div id="ttl" className={styles.homeText2} ></div>

        <div className={styles.unavail}>
          It looks like you're trying to access the features assured by the Platinum or Noir tier <br/>
          These features usually involve multimedia and outside smart contracts <br/>
         Hence we do not host them here on the dapp. The project concerned will <br/>
         reach out to you on your registered mail for these,
        </div>
        <br /><br /><br />
      </div>
      <br /><br />
      <div className={styles.homeText} id="msg">
        This might change for the mainnet release. Stay tuned for more information!
      </div>
    </div>
   <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
   
  </div>
    )
 }