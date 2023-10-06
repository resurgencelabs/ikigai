import styles from './profile.module.scss';
import { get_user_data, fetch_all_userdata } from './index.js';
import { useState, useEffect, useRef } from 'react';


export function Profile(){
  
  const [selectedUname, setSelectedUname] = useState(''); 
  const [selectedEmail, setSelectedEmail] = useState(''); 
  const [selectedDname, setSelectedDname] = useState(''); 
  function handleClick(s1: string, s2: string, s3: string) {
    var arr = get_user_data();
    console.log(s1.concat(s2).concat(s3));
    var data = fetch_all_userdata();
    var flag1 = true;
    var flag2 = true;
    var flag3 = true;
    var i = 0;
    while (i < data.length) {
      if (data[i][0] == s1) {
        document.getElementById('response')!.textContent = "That username is taken!";
        flag1 = false;
        return;
      }
      if (data[i][1] == s2) {
        document.getElementById('response')!.textContent = "That email is taken!";
        flag2 = false;
        return;
      }
      if (data[i][2] == s3) {
        document.getElementById('response')!.textContent = "That discord id is taken!";
        flag3 = false;
        return;
      }
      i += 1;
    }

    

    if (s1=="" || s2=="" || s3==""){
      document.getElementById('response')!.textContent = "All fields are mandatory!";
      return;
    }

    document.getElementById('response')!.textContent = "New Preferences have been Saved";
  
    
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
                value={selectedUname} 
                onChange={e => setSelectedUname(e.target.value)}
                
                
              />
              <label className={styles.commonLabel} htmlFor=""
                >Email</label
              >
              <input
                id="email"
                className={styles.commonInput}
                type="text"
                placeholder=""
                value={selectedEmail} 
                onChange={e => setSelectedEmail(e.target.value)}
                
              />
              <label className={styles.commonLabel} htmlFor=""
                >Discord Username</label
              >
              <input
                id="dname"
                className={styles.commonInput}
                type="text"
                placeholder=""
                value={selectedDname} 
                onChange={e => setSelectedDname(e.target.value)}
                
              />
            <button type="button" className={styles.formBtn} onClick={() => {handleClick(selectedUname, selectedEmail, selectedDname), setSelectedUname(''), setSelectedEmail(''), setSelectedDname('')}}>Save</button>
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