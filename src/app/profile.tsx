import styles from './profile.module.scss';
import { get_user_data } from './index.js';
import { useRef } from 'react';


export function Profile(){
  
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  function handleClick() {
    var arr = get_user_data();
    if (inputRef1.current !== null) {
      console.log(inputRef1.current);
    }
    
    
    
  }
  function load_profile() {
    
  }
    return (
        <div className={styles.home} onLoad={() => load_profile()}>
    
    
    <div className={styles.homeWrapper}>
    <div className={styles.header}>
      <a><img src="./home-img.png" alt="" height="80" width="80" /></a>

      <div className={styles.topnav}>
        <a  href="/landing">Home</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
        <a className={styles.active} href="/profile">Profile</a>
        
      </div>
    </div>
      
      
     
      <div className={styles.row}>
        <div className={styles.collg10}>
          <div className={styles.formBody}>
            <div>
            <br/>
              <label className={styles.commonLabel} htmlFor="">Username</label>
              <input
                id="uname"
                className={styles.commonInput}
                type="text"
                placeholder=""
                ref={inputRef1}
                
                
              />
              <label className={styles.commonLabel} htmlFor=""
                >Email</label
              >
              <input
                id="email"
                className={styles.commonInput}
                type="text"
                placeholder=""
                ref={inputRef2}
                
              />
              <label className={styles.commonLabel} htmlFor=""
                >Discord Username</label
              >
              <input
                id="dname"
                className={styles.commonInput}
                type="text"
                placeholder=""
                ref={inputRef3}
                
              />
            <button type="button" className={styles.formBtn} onClick={handleClick}>Save</button>
            </div>
            <br/>
            <br/>
            <div id="response" className={styles.responseBox}></div>  
         
          </div>
        </div>
      </div>
      
      
    </div>
    <br/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
  </div>
        
    );
}