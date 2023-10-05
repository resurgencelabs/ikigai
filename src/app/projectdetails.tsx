import styles from './projectdetails.module.scss';
import {load_project, tier_redirect} from './index.js';
import { useState, useEffect } from 'react';



export function ProjectDetails(){
    const [selectedTier, setSelectedTier] = useState('none'); 
    const [selectedSource, setSelectedSource] = useState('./home-img.png'); 
    var pid = localStorage.getItem("projId") || "0";
    useEffect(()=>{
      if (pid == "1") {
        setSelectedSource("./dogs.png");
      }
      else if (pid == "2") {
        setSelectedSource("./gbzn.png");
      }
      else {}
      
    }, [])
    
    return (
        <div id="bod" className={styles.home} onLoad={() => load_project()}>
    
    
    <div className={styles.homeWrapper}>
    <div className={styles.header}>
        <a><img src="home-img.png" alt="" height="80" width="80" /></a>

        <div className={styles.topnav}>
          <a href="/landing">Home</a>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
          <a href="/profile">Profile</a>
          
        </div>
    </div>
      
      </div>
      <a className={styles.back} href="/projects">back</a>
      <div className={styles.homeText2} id="pname"></div>
        <div id="pimagecov"><img id="pimage" className={styles.homeImg2} src={selectedSource} alt="" height="200" width="200" /></div>
        <br />
        
        <div className={styles.homeHeader4}>
        
          <a id="pweb" target="_blank" className={styles.soc} href="./index.html"> Website</a>
          <a id="ptwi" target="_blank" className={styles.soc} href="./projects.html" > Twitter</a>
          <a id="pdis" target="_blank" className={styles.soc} href="./news.html" > Discord</a>
          
          
        </div>
        <br/><br/><br/>
        <a>Pick Tier to Access:
            <select name="tier_name" id="tr" className={styles.tier}
            value={selectedTier} 
      onChange={e => setSelectedTier(e.target.value)} 
    >
      <option value="nonee">Choose Tier</option>
      <option value="bronze">Bronze</option>
      <option value="silver">Silver</option>
      <option value="gold">Gold</option>
      <option value="platinum">Platinum</option>
      <option value="noir">Noir</option>
      
              
            </select>
            <button className={styles.butt} onClick={() => tier_redirect(selectedTier)}>Go</button>
           <br/><br/>
      </a>
      <a id="ptext" className={styles.descr}>  </a>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      
    
    
  </div>
    )
}