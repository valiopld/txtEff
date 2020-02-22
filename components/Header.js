addEventListener("load", () => {
  let header = document.getElementById("header");
  let headerHTML = `      <div class="headerContainer">
<div class="logo"></div> 
<div
  class="mobile-icon"
  onClick="{
          a=document.querySelector('div.topNav, div.topNav-mobile')
        if(a.className != 'topNav-mobile'){
            a.className = 'topNav-mobile'
        }else{
            a.className = 'topNav'
        }
          
  }"
>
  ≡
</div>
<div class="topNav">
  <ul>
    <li>
      <a href="./index.html">Home</a>
    </li>
    <li>
      <a href="./doc.html">Documentation</a>
    </li>
    <li>
      <a href="./support.html">Support</a>
    </li>
    <li>
      <a href="./about.html">About</a>
    </li>
  </ul>
</div>
</div>
`;
  header.innerHTML = headerHTML;
});
