addEventListener("load", () => {
  let footer = document.getElementById("footer");
  let footerHTML = `     <div class="fContainer fContact">
    <ul class="fContact">
      <a href="mailto:valiopld@gmail.com"><li>Mail</li></a>
      <a target="_blank" href="https://github.com/valiopld/txtEff"><li>gitHub</li></a>
      <a href="./support.html"><li>Support</li></a>
      <a href="./about.html"><li>About</li></a>

    </ul>
    </div>
    <hr />
    
    <div class="fContainer reserved">
    All rights reserved, Copyright® 2020
    </div>
    
  `;
  footer.innerHTML = footerHTML;
});
