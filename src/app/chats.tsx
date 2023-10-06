import styles from './chats.module.scss';
import {get_chats, publish_chat} from './index.js';
import { useState, useEffect, useRef } from 'react';



export function Chats(){
    const [selectedChat, setSelectedChat] = useState(''); 
    const [selectedSource, setSelectedSource] = useState('./home-img.png'); 
    var pid = localStorage.getItem("projId") || "0";
    function submit_chat(s: string) {
        console.log(s);
        var now = new Date().toUTCString();
        console.log(now);
        var day = now.substring(5,7);
        var mon = now.substring(8, 11);
        var yr = now.substring(12, 16);
        var tm = now.substring(17, 22);
        var now2 = day.concat(" ").concat(mon).concat(" ").concat(yr).concat(" ").concat(tm);
        var added = "you @ ".concat(now2).concat(": ");
        var new_line = added.concat(s);
        console.log(new_line);
        var i = localStorage.getItem('counter_iki') || "0";
        var j = parseInt(i);
        var root2 = document.getElementById('ups')!;
        if (j % 2 == 1) {
            root2.innerHTML += `<div style="margin-top: .1em;padding-left: 10px;">
            <a target="_blank" ">`.concat(new_line).concat(`</a>
            <br/>
          </div>`);
        }
        else {
            root2.innerHTML += `<div style="margin-top: .0em;background-color: aqua;color:#000000;padding-left: 10px;">
            <a target="_blank" ">`.concat(new_line).concat(`</a>
            <br/>
          </div>`);
        }
        console.log(j);
        localStorage.setItem('counter_iki', (j+1).toString());

    }
    useEffect(()=>{
        var chats = get_chats();
        var i = 0;
        var l = chats.length;
      if (pid == "1") {
        var pname = "Stray Rescue St Louis";
        document.getElementById('proj')!.textContent = pname;
        document.getElementById('heading')!.textContent = 'Welcome to The '.concat(pname).concat(' Chat Room');
        var root2 = document.getElementById('ups')!;
        while (i < l) {
            if (i % 2 == 0) {
              root2.innerHTML += `<div style="margin-top: .1em;padding-left: 10px;">
              <a target="_blank" ">`.concat(chats[l - 1 - i][1]).concat(" @ ").concat(chats[l - 1- i][0]).concat(': ').concat(chats[l - 1- i][2]).concat(`</a>
              <br/>
            </div>`);
            }
            else {
              root2.innerHTML += `<div style="margin-top: .1em;background-color: aqua;color:#000000;padding-left: 10px;">
              <a target="_blank" ">`.concat(chats[l - 1- i][1]).concat(" @ ").concat(chats[l - 1- i][0]).concat(': ').concat(chats[l - 1- i][2]).concat(`</a>
              <br/>
            </div>`);
            }
            i++;
          }
          

        setSelectedSource("./dogs.png");
        var el = document.getElementById("imm")!;
        if (el instanceof HTMLImageElement){
          el.src = "./dogs.png";
        }
        
      }
      else if (pid == "2") {
        var pname = "Hot or Not";
        document.getElementById('proj')!.textContent = pname;
        document.getElementById('heading')!.textContent = 'Welcome to The '.concat(pname).concat(' Chat Room');
        var root2 = document.getElementById('ups')!;
        while (i < l) {
            if (i % 2 == 0) {
              root2.innerHTML += `<div style="margin-top: .1em;padding-left: 10px;">
              <a target="_blank" ">`.concat(chats[l - 1 - i][1]).concat(" @ ").concat(chats[l - 1- i][0]).concat(': ').concat(chats[l - 1- i][2]).concat(`</a>
              <br/>
            </div>`);
            }
            else {
              root2.innerHTML += `<div style="margin-top: .1em;background-color: aqua;color:#000000;padding-left: 10px;">
              <a target="_blank" ">`.concat(chats[l - 1- i][1]).concat(" @ ").concat(chats[l - 1- i][0]).concat(': ').concat(chats[l - 1- i][2]).concat(`</a>
              <br/>
            </div>`);
            }
            i++;
          }
        setSelectedSource("./gbzn.png");
        var el = document.getElementById("imm")!;
        if (el instanceof HTMLImageElement){
          el.src = "./gbzn.png";
        }
      }
      else {}
      
    }, [])
    return (
        <div id="bod" className={styles.home}>
    <div className={styles.header}>
        <a><img src="./home-img.png" alt="" height="80" width="80" /></a>

        <div className={styles.topnav}>
          <a  href="/landing">Home</a>
          <a  href="/projects">Projects</a>
          <a href="/about">About</a>
          <a href="/profile">Profile</a>
          
        </div>
    </div>
    <a className={styles.back} href="/project_details">back</a>
    <div className={styles.homeWrapper}>
      <div id="proj" className={styles.homeText4}></div>
     
      <div className={styles.homeText}>Click to read the latest news & articles across the Web about what's happening on Venom </div>

      <br />
      
     
      <div className={styles.rowx}>
        <div id="ups" className={styles.collg10}>
          <div className={styles.cont}>
            <a>
              <img id="imm" className={styles.homeImg2} src={selectedSource}
              height="110"  width="110" alt="" />
              
        
            </a>
            <a id="heading" className={styles.heads}   target="_blank" href="">Chat</a>
            <br/>
            <br/>
            
          </div>
            
          <br/>
      
          
        </div>
      </div>
      <br/><br/>
    <div className={styles.rowx}>
       
        <div className={styles.col8}><textarea id="ca" className={styles.tarea} name="textarea" value={selectedChat} 
      onChange={e => setSelectedChat(e.target.value)}></textarea>
            <br/>
            <a id = "cgo" className={styles.go} onClick={() => {submit_chat(selectedChat), setSelectedChat("")}}>Publish</a>
        </div>
        
    </div>
      
    </div>
   <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </div>
    )
}