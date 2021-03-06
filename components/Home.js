addEventListener("load", () => {
  let home = document.getElementById("home");
  let homeHTML = `  
  <div class="mainContainer">
    <div class="container1">
      <div class="MainText">
        <h1>Hello Developers!!!</h1>
        <h2>This is txtEff library</h2>
        <h2>Now you can easily animate text for your Website.</h2>
        <h4>
        If you are not sure how to use the library, please check the 
        <a href="./doc.html">Official Documentation</a>
        </h4><br/>
        <h3><a id="dw" href="./txtEff.min.js" download>Download</a></h3>
      </div>
      <div class="main-logo"></div>
    </div>
    <div class="postIndex">
      <div class="postIndex-inside">
        <h2>What is txtEff Library</h2>
        <br/>
        txtEff Library v1.0 is a JS script that helps you by animating text directly in your HTML without the need to learn JavaScript. 
        The library includes 4 effects each with its additional attributes for more fine-controlled animations. 
        More on how to utilize them can be seen in the above-mentioned <a href="./doc.html">Documentation</a>.
        
      </div>
      <div class="postIndex-inside">
        <h2>How to use txtEff Library</h2>
        <br/>
        First of all, you need to include the script in the HTML of your page.
         After that, you need to add in your HTML a div tag with attribute class="txtEff"
          and the two mandatory attributes for the div tag:
          <ul class="ul1"><li>
        effect="name_of_the_effect"</li><li>
        text="the_text"</li></ul>
        
        
      </div>
    </div>
  </div>
    `;
  home.innerHTML = homeHTML;
});
