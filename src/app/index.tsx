import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Home } from './home.js';
import { About } from './about.js';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import { Landing } from './landing.js';
import  { Projects } from './projects.js';
import { Profile } from './profile.js';
import { type } from 'os';
import { ProjectDetails } from './projectdetails.js';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route path="/" element={<Home/>}/>
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/about" element={<About/>} />
            
           {/* This route is for about component 
          with exact path "/landing", in component 
          props we passes the imported component*/}
          <Route path="/landing" element={<Landing/>} />

           {/* This route is for about component 
          with exact path "/profile", in component 
          props we passes the imported component*/}
          <Route path="/profile" element={<Profile/>} />

           {/* This route is for about component 
          with exact path "/projects", in component 
          props we passes the imported component*/}
          <Route path="/projects" element={<Projects/>} />

          {/* This route is for about component 
          with exact path "/project_details", in component 
          props we passes the imported component*/}
          <Route path="/project_details" element={<ProjectDetails/>} />
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          
        </Routes>
      </Router>
    </>
  </React.StrictMode>,
);

export function hi(){
  console.log("hi");
}

export function load_profile() {
  
}



export function get_user_data() {
  var arr = [];
  arr.push("zias");
  arr.push("resurgencelabs@gmail.com");
  arr.push("nambi_");
  return arr;
}

export function get_projects() {
  var proj_pre = [["Stray Rescue St Louis", "social", "dogs.png", "https://www.strayrescue.org/adopt-a-dog", "https://twitter.com/StrayRescue", "coming soon", "Stray Rescue is a Dog Shelter in St Louis, Missouri, registered as a Non Profit Organization. Help us stay afloat in these testing times by making a small donation. Every amount, big or small counts. Here are the tiers: \n- Bronze: For donations < $30. Get all the updates and news on our dog shelter weekly \n- Silver: For donations < $100. Get all the updates and news weekly, along with the pics of our latest incoming and outgoing (adopted) puppers  \n- Gold Tier: For donations < $300. Get all the news and updates, pics of our dogs, adopt a particular dog whose expenses your donation helped cover, and get all its updates \n- Platinum Tier: For donations > $500. Get all the news and updates, the pics of our dogs, adopt one dog whose updates you get access to, and weekly face timing with the dog and the caretakers", "4"],
  ["Hot or Not", "dapp", "gbzn.png", "https://www.hotornot.wtf", "https://twitter.com/hotornot_dapp", "https://discord.com/invite/GZ9QemnZuj", "Presenting Hot or Not, the TikTok on Web 3. Monetize your free time, not just by uploading short videos, but by correctly judging all videos as Hot or Not. Coming soon to Aztec Network. Here are the tiers: \n- Bronze: For donations < $30. Get all the updates and news on our development status weekly \n- Silver: For donations < $100. Get all the updates and news weekly, along with the an exclusive weekly personalized update from our founders  \n- Gold Tier: For donations < $300. Get all the news and updates, exclusives personalized weekly updates from our founders, and access to the Hot or Not Club Chatroom \n -Platinum Tier: For donations < $1000. Get weekly news and updates, exclusive personalized weekly updates from our founders, access to the Chat Room, and an 5 NFT in our upcoming HoN NFT Airdrop \n- Noir Tier: For donations > $1000. Get all the news and updates, weekly exclusive personalized updates from our founders, access to the chat room, 10 HoN NFTs during our upcoming NFT airdrop, AND lifetime Nitro subscription on Hot or Not when it launches.", "5"]];
  return proj_pre;
}

export function to_details_page(id: Number){
  if (id == 1) {
    localStorage.setItem("projId", "1");
  }
  else if (id == 2) {
    localStorage.setItem("projId", "2");
  }
  else {
    localStorage.setItem("projId", "0");
  }
  //console.log(id);
  window.location.href = '/project_details';
}


export function load_projects_all() {
  //document.getElementById("project_key")!.value = "";
  localStorage.setItem("projId", "0");
  var factor = 5;
  var i = 0;
  var root = document.getElementById("rootx")!;
  var childrenIfAny = root.childNodes;
  while (childrenIfAny.length != 0){
    var e = childrenIfAny[0];
    e.remove();
    childrenIfAny = root.childNodes;
  }
  var elr = document.createElement('div');
    elr.className = 'row';
    elr.style.display = "flex";
    elr.style.position = "relative";
    elr.style.left = "20%";
    var proj = get_projects();
  while (i < proj.length){
    if (i % factor == 0 && i != 0){
      root.appendChild(elr);
      var space = document.createElement('br');
      root.appendChild(space);
      space = document.createElement('br');
      root.appendChild(space);
      elr = document.createElement('div');
      elr.className = 'row';
    }
    var el = document.createElement('div');
    el.className = "col";
    el.style.width="30%";
    el.innerHTML = `
    <div class="exploreCardBody">
                        <div class="exploreCard">
                          <img
                            class="homeImg2"
                            src="`.concat(proj[i][2]).concat(`"
                            alt=""
                            style="width: 300px; height: 175px; object-fit: fill;"
                           
                          />
                          <div class="exploreCardFooter" style="text-align:right;" >
                            <div class="exploreCardText">`
                              .concat("").concat(
                            `</div>
                          </div>
                        </div>
                        <div class="exploreCardButton">
                          <a id="id`.concat((i+1).toString()).concat(`" class="exploreCardBtn">`.concat(proj[i][0]).concat(`</a>
                        </div>
                      </div>
    `))));

    
    elr.appendChild(el);
    i += 1;
    
  }
  while (i % factor != 0){
    var el = document.createElement('div');
    el.className = "col";
    elr.appendChild(el);
    i += 1;
  }

  root.appendChild(elr);

  var e111 = document.getElementById("id1")!;
  e111.addEventListener("click", function (e) {
    to_details_page(1);
  });
  var e222 = document.getElementById("id2")!;
  e222.addEventListener("click", function (e) {
    to_details_page(2);
  });


}

export function load_projects_dapp() {
   //document.getElementById("project_key")!.value = "";
   var factor = 5;
   var i = 0;
   var root = document.getElementById("rootx")!;
   var childrenIfAny = root.childNodes;
   while (childrenIfAny.length != 0){
     var e = childrenIfAny[0];
     e.remove();
     childrenIfAny = root.childNodes;
   }
   var elr = document.createElement('div');
     elr.className = 'row';
     elr.style.display = "flex";
     elr.style.position = "relative";
     elr.style.left = "20%";
     var proj_2 = get_projects();
     var proj: [] = [];
     while (i < proj_2.length) {
      if (proj_2[i][1] == 'dapp'){
        proj_2.push([proj_2[i][0], proj_2[i][1], proj_2[i][2]]);
        
      }
      i += 1;
     }
   while (i < proj.length){
     if (i % factor == 0 && i != 0){
       root.appendChild(elr);
       var space = document.createElement('br');
       root.appendChild(space);
       space = document.createElement('br');
       root.appendChild(space);
       elr = document.createElement('div');
       elr.className = 'row';
     }
     var el = document.createElement('div');
     el.className = "col";
     el.style.width="30%";
     el.innerHTML = `
     <div class="exploreCardBody">
                         <div class="exploreCard">
                           <img
                             class="homeImg2"
                             src="`.concat(proj[i][2]).concat(`"
                             alt=""
                             style="width: 300px; height: 175px; object-fit: fill;"
                            
                           />
                           <div class="exploreCardFooter" style="text-align:right;" >
                             <div class="exploreCardText">`
                               .concat("").concat(
                             `</div>
                           </div>
                         </div>
                         <div class="exploreCardButton">
                           <a id="icpvg" class="exploreCardBtn" href="/project_details?`.concat(proj[i][0]).concat(`">`.concat(proj[i][0]).concat(`</a>
                         </div>
                       </div>
     `))));
     
     elr.appendChild(el);
     i += 1;
   }
   while (i % factor != 0){
     var el = document.createElement('div');
     el.className = "col";
     elr.appendChild(el);
     i += 1;
   }
 
   root.appendChild(elr);
}

export function load_projects_social() {
   //document.getElementById("project_key")!.value = "";
   var factor = 5;
   var i = 0;
   var root = document.getElementById("rootx")!;
   var childrenIfAny = root.childNodes;
   while (childrenIfAny.length != 0){
     var e = childrenIfAny[0];
     e.remove();
     childrenIfAny = root.childNodes;
   }
   var elr = document.createElement('div');
     elr.className = 'row';
     elr.style.display = "flex";
     elr.style.position = "relative";
     elr.style.left = "20%";
     var proj_2 = get_projects();
     var proj: [] = [];
     while (i < proj_2.length) {
      if (proj_2[i][1] == 'social'){
        proj_2.push([proj_2[i][0], proj_2[i][1], proj_2[i][2]]);
        
      }
      i += 1;
     }
   while (i < proj.length){
     if (i % factor == 0 && i != 0){
       root.appendChild(elr);
       var space = document.createElement('br');
       root.appendChild(space);
       space = document.createElement('br');
       root.appendChild(space);
       elr = document.createElement('div');
       elr.className = 'row';
     }
     var el = document.createElement('div');
     el.className = "col";
     el.style.width="30%";
     el.innerHTML = `
     <div class="exploreCardBody">
                         <div class="exploreCard">
                           <img
                             class="homeImg2"
                             src="`.concat(proj[i][2]).concat(`"
                             alt=""
                             style="width: 300px; height: 175px; object-fit: fill;"
                            
                           />
                           <div class="exploreCardFooter" style="text-align:right;" >
                             <div class="exploreCardText">`
                               .concat("").concat(
                             `</div>
                           </div>
                         </div>
                         <div class="exploreCardButton">
                           <a id="icpvg" class="exploreCardBtn" href="/project_details?`.concat(proj[i][0]).concat(`">`.concat(proj[i][0]).concat(`</a>
                         </div>
                       </div>
     `))));
     
     elr.appendChild(el);
     i += 1;
   }
   while (i % factor != 0){
     var el = document.createElement('div');
     el.className = "col";
     elr.appendChild(el);
     i += 1;
   }
 
   root.appendChild(elr);
}

export function load_projects_meta() {
   //document.getElementById("project_key")!.value = "";
   var factor = 5;
   var i = 0;
   var root = document.getElementById("rootx")!;
   var childrenIfAny = root.childNodes;
   while (childrenIfAny.length != 0){
     var e = childrenIfAny[0];
     e.remove();
     childrenIfAny = root.childNodes;
   }
   var elr = document.createElement('div');
     elr.className = 'row';
     elr.style.display = "flex";
     elr.style.position = "relative";
     elr.style.left = "20%";
     var proj_2 = get_projects();
     var proj: [] = [];
     while (i < proj_2.length) {
      if (proj_2[i][1] == 'meta'){
        proj_2.push([proj_2[i][0], proj_2[i][1], proj_2[i][2]]);
        
      }
      i += 1;
     }
   while (i < proj.length){
     if (i % factor == 0 && i != 0){
       root.appendChild(elr);
       var space = document.createElement('br');
       root.appendChild(space);
       space = document.createElement('br');
       root.appendChild(space);
       elr = document.createElement('div');
       elr.className = 'row';
     }
     var el = document.createElement('div');
     el.className = "col";
     el.style.width="30%";
     el.innerHTML = `
     <div class="exploreCardBody">
                         <div class="exploreCard">
                           <img
                             class="homeImg2"
                             src="`.concat(proj[i][2]).concat(`"
                             alt=""
                             style="width: 300px; height: 175px; object-fit: fill;"
                            
                           />
                           <div class="exploreCardFooter" style="text-align:right;" >
                             <div class="exploreCardText">`
                               .concat("").concat(
                             `</div>
                           </div>
                         </div>
                         <div class="exploreCardButton">
                           <a id="icpvg" class="exploreCardBtn" href="/project_details?`.concat(proj[i][0]).concat(`">`.concat(proj[i][0]).concat(`</a>
                         </div>
                       </div>
     `))));
     
     elr.appendChild(el);
     i += 1;
   }
   while (i % factor != 0){
     var el = document.createElement('div');
     el.className = "col";
     elr.appendChild(el);
     i += 1;
   }
 
   root.appendChild(elr);
}

export function load_projects_game() {
   //document.getElementById("project_key")!.value = "";
   var factor = 5;
   var i = 0;
   var root = document.getElementById("rootx")!;
   var childrenIfAny = root.childNodes;
   while (childrenIfAny.length != 0){
     var e = childrenIfAny[0];
     e.remove();
     childrenIfAny = root.childNodes;
   }
   var elr = document.createElement('div');
     elr.className = 'row';
     elr.style.display = "flex";
     elr.style.position = "relative";
     elr.style.left = "20%";
     var proj_2 = get_projects();
     var proj: [] = [];
     while (i < proj_2.length) {
      if (proj_2[i][1] == 'game'){
        proj_2.push([proj_2[i][0], proj_2[i][1], proj_2[i][2]]);
        
      }
      i += 1;
     }
   while (i < proj.length){
     if (i % factor == 0 && i != 0){
       root.appendChild(elr);
       var space = document.createElement('br');
       root.appendChild(space);
       space = document.createElement('br');
       root.appendChild(space);
       elr = document.createElement('div');
       elr.className = 'row';
     }
     var el = document.createElement('div');
     el.className = "col";
     el.style.width="30%";
     el.innerHTML = `
     <div class="exploreCardBody">
                         <div class="exploreCard">
                           <img
                             class="homeImg2"
                             src="`.concat(proj[i][2]).concat(`"
                             alt=""
                             style="width: 300px; height: 175px; object-fit: fill;"
                            
                           />
                           <div class="exploreCardFooter" style="text-align:right;" >
                             <div class="exploreCardText">`
                               .concat("").concat(
                             `</div>
                           </div>
                         </div>
                         <div class="exploreCardButton">
                           <a id="icpvg" class="exploreCardBtn" href="/project_details?`.concat(proj[i][0]).concat(`">`.concat(proj[i][0]).concat(`</a>
                         </div>
                       </div>
     `))));
     
     elr.appendChild(el);
     i += 1;
   }
   while (i % factor != 0){
     var el = document.createElement('div');
     el.className = "col";
     elr.appendChild(el);
     i += 1;
   }
 
   root.appendChild(elr);
}

export function load_projects_nft() {
   //document.getElementById("project_key")!.value = "";
   var factor = 5;
   var i = 0;
   var root = document.getElementById("rootx")!;
   var childrenIfAny = root.childNodes;
   while (childrenIfAny.length != 0){
     var e = childrenIfAny[0];
     e.remove();
     childrenIfAny = root.childNodes;
   }
   var elr = document.createElement('div');
     elr.className = 'row';
     elr.style.display = "flex";
     elr.style.position = "relative";
     elr.style.left = "20%";
     var proj_2 = get_projects();
     var proj: [] = [];
     while (i < proj_2.length) {
      if (proj_2[i][1] == 'nft'){
        proj_2.push([proj_2[i][0], proj_2[i][1], proj_2[i][2]]);
        
      }
      i += 1;
     }
   while (i < proj.length){
     if (i % factor == 0 && i != 0){
       root.appendChild(elr);
       var space = document.createElement('br');
       root.appendChild(space);
       space = document.createElement('br');
       root.appendChild(space);
       elr = document.createElement('div');
       elr.className = 'row';
     }
     var el = document.createElement('div');
     el.className = "col";
     el.style.width="30%";
     el.innerHTML = `
     <div class="exploreCardBody">
                         <div class="exploreCard">
                           <img
                             class="homeImg2"
                             src="`.concat(proj[i][2]).concat(`"
                             alt=""
                             style="width: 300px; height: 175px; object-fit: fill;"
                            
                           />
                           <div class="exploreCardFooter" style="text-align:right;" >
                             <div class="exploreCardText">`
                               .concat("").concat(
                             `</div>
                           </div>
                         </div>
                         <div class="exploreCardButton">
                           <a id="icpvg" class="exploreCardBtn" href="/project_details?`.concat(proj[i][0]).concat(`">`.concat(proj[i][0]).concat(`</a>
                         </div>
                       </div>
     `))));
     
     elr.appendChild(el);
     i += 1;
   }
   while (i % factor != 0){
     var el = document.createElement('div');
     el.className = "col";
     elr.appendChild(el);
     i += 1;
   }
 
   root.appendChild(elr);
}

export function load_projects_other() {
   //document.getElementById("project_key")!.value = "";
   var factor = 5;
   var i = 0;
   var root = document.getElementById("rootx")!;
   var childrenIfAny = root.childNodes;
   while (childrenIfAny.length != 0){
     var e = childrenIfAny[0];
     e.remove();
     childrenIfAny = root.childNodes;
   }
   var elr = document.createElement('div');
     elr.className = 'row';
     elr.style.display = "flex";
     elr.style.position = "relative";
     elr.style.left = "20%";
     var proj_2 = get_projects();
     var proj: [] = [];
     while (i < proj_2.length) {
      if (proj_2[i][1] == 'other'){
        proj_2.push([proj_2[i][0], proj_2[i][1], proj_2[i][2]]);
        
      }
      i += 1;
     }
   while (i < proj.length){
     if (i % factor == 0 && i != 0){
       root.appendChild(elr);
       var space = document.createElement('br');
       root.appendChild(space);
       space = document.createElement('br');
       root.appendChild(space);
       elr = document.createElement('div');
       elr.className = 'row';
     }
     var el = document.createElement('div');
     el.className = "col";
     el.style.width="30%";
     el.innerHTML = `
     <div class="exploreCardBody">
                         <div class="exploreCard">
                           <img
                             class="homeImg2"
                             src="`.concat(proj[i][2]).concat(`"
                             alt=""
                             style="width: 300px; height: 175px; object-fit: fill;"
                            
                           />
                           <div class="exploreCardFooter" style="text-align:right;" >
                             <div class="exploreCardText">`
                               .concat("").concat(
                             `</div>
                           </div>
                         </div>
                         <div class="exploreCardButton">
                           <a id="icpvg" class="exploreCardBtn" href="/project_details?`.concat(proj[i][0]).concat(`">`.concat(proj[i][0]).concat(`</a>
                         </div>
                       </div>
     `))));
     
     elr.appendChild(el);
     i += 1;
   }
   while (i % factor != 0){
     var el = document.createElement('div');
     el.className = "col";
     elr.appendChild(el);
     i += 1;
   }
 
   root.appendChild(elr);
}

export function project_search() {

}




export function load_project() {
  var pid = localStorage.getItem("projId");
  console.log(pid);
  console.log("hiii");
  var proj = get_projects();
  if (pid != "1" && pid != "2"){
    console.log("non existent project");
    return;
  }
  var im = "";
  var ds = "";
  var ws = "";
  var tw = "";
  var tx = "";
  if (pid == "1"){
    im = proj[0][2];
    tw = proj[0][4];
    ds = proj[0][5];
    ws = proj[0][3];
    tx = proj[0][6];
  }
  else {
    im = proj[1][2];
    tw = proj[1][4];
    ds = proj[1][5];
    ws = proj[1][3];
    tx = proj[1][6];
  }
  
  var t = tx.split("\n");
  var i = 0;
  var el2 = document.getElementById("ptext")!;
  while (i < t.length){
    el2.innerHTML += `<br/>`.concat(t[i]);
    i++;
  }
  var ws_el = document.getElementById("pweb")!;
  if (ws_el instanceof HTMLAnchorElement){
    ws_el.href = ws;
    ws_el.style.color="cyan";
  }
  var tw_el = document.getElementById("ptwi")!;
  if (tw_el instanceof HTMLAnchorElement) {
    if (tw != "coming soon"){
      tw_el.href = tw;
      tw_el.style.color="cyan";
      
    }
    else {
      tw_el.removeAttribute("href");
      tw_el.style.color="red";
      tw_el.style.fontWeight="100";
      tw_el.style.cursor="default";
      
    }
  }
  var ds_el = document.getElementById("pdis")!;
  if (ds_el instanceof HTMLAnchorElement){
    if (ds != "coming soon"){
      ds_el.href = ds;
      ds_el.style.color="cyan";
    }
    else {
      ds_el.removeAttribute("href");
      ds_el.style.color="red";
      ds_el.style.fontWeight="100";
      ds_el.style.cursor="default";
    }
  }
  
}

export function tier_redirect(selection: String){
  var tier = selection;//document.getElementById('tr').value;
  console.log(tier);
  return;
  var pid = localStorage.getItem("projId");
  if (tier == 'noir' || tier == 'platinum') {
    window.location.href = "/misc";
  }
  else if (tier == 'gold') {
    if (pid == '1'){}
    else {
      window.location.href = "/chats";
    }
  }
  else if (tier == 'silver') {
    if (pid == '1'){
      window.location.href = "/gallery";
    }
    else {
      window.location.href = "/updates";
    }
  }
  else if (tier == 'bronze') {
    window.location.href = "/updates";
  }
  else {}

}