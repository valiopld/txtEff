addEventListener("load", () => {
  let home = document.getElementById("home");
  let homeHTML = `  
  <div class="mainContainer">
    <div class="container1">
      <div class="MainText">
        <h1>Hello Developers!!!</h1>
        <h2>This is txtEff library</h2>
        <h2>Now you can animate text for your Website really easy</h2>
        <h4>
          If you are not sure how to use the library -> please check the
          <a href="./doc.html">Documentation</a>
        </h4>
        <h3><a id="dw" href="./txtEff.min.js" download>Download</a></h3>
        <h4>:)</h4>
      </div>
      <div class="main-logo"></div>
    </div>
    <div class="postIndex">
      <div class="postIndex-inside">
        <h2>What is txtEff Library</h2>
        txtEff Library v1.0 is a JS script that help you to easy animate text directly in your HTML without
        understanding JavaScript. The library include 4 effects that can be used and every
         effect can be controled by differents attributes.
        
      </div>
      <div class="postIndex-inside">
        <h2>How to use txtEff Library</h2>
      First of all you need to include the script in your HTML on your page.
      After that you need to add in your HTML file a DIV tag with attribute class="txtEff".
      There is two more required attributes of the DIV tag - *effect="name_of_the_effect" and
       *text="the_text". There is many more attributes that can help 
       you to control the result of the effect. 
       You can check the full <a href="./doc.html">Documentation...</a>
      </div>
    </div>
  </div>
    `;
  home.innerHTML = homeHTML;
});
