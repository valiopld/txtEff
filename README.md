# txtEff
txtEff Library

Get Started
The only thing you need to do to use the txtEff Library is to import the script in your page in one of the following ways:

1. Import the script directly from this GitHub repository.
Add the following code in your HTML file (it is recommended you add it at the end of the <body>):
<script src="valiopld.github.io/txtEff/txtEff.min.js"></script>
2. Download the script and then import it in your HTML file.
This way the library will stay on your server and will be preserved from connection issues.
<script src='./txtEff.min.js'></script>
You CANNOT use the txtEff library v1.0 with Frameworks that use virtual DOM like React, VueJS, Angular, etc!
Effects
To use an effect, you will need an empty div tag with class = "txtEff".
Every txtEff div has two mandatory attributes:

    effect - the effect which you will use.
    text - the text that will be affected.

Each effect can be fine-tuned with other attributes according to your needs.

<div class="txtEff"
effect ="Your Effect"
text ="Your Text"
></div>

--------------------------------------------------------------------------------------------------------------------
Typing
Along with the mandatory attributes “effect” and “text” the div tag can also contain:

    cursor - you can use ="no" if you do not wish to have a cursor at the end of the text.
    cursorspeed - the speed at which the cursor blinks. A cursorspeed="300" means that the cursor will blink every 300 ms.
    typingspeed - the pace at which each letter of the text appears.
    repeat - if you wish to have the text disappear and then re-apply the effect, add ="yes".

The default values for every text are: repeat="yes", typingspeed="300", cursrorspeed="300".

<div class="txtEff"
effect ="typing"
text ="This is Typing Effect"
repeat ="yes"

typingspeed ="300"
cursrorspeed ="300"
><div/>
----------------------------------------------------------------------------------------------------------
Fade
The Fade effect has 2 attributes associated with it:

    speedshowing - controls the time between the appearance of each letter.
    speedfading - controls after how many ms the opacity of the letter is increased by 0.01.

The default values here are - speedshowing="50", speedfading="5"

<div class="txtEff"
effect ="fade"
text = "This is Fade Effect"

speedfading ="5"
speedshowing ="50"
><div/>

You can also add an effect repeat button like the one above by including “onClick = 'funcObject.fade(filterAllObjects('fade')[0])'".
This will only repeat the first text on the page, so if you want the repeat button to work for a second text, you must change the [0] to [1].

As the functionality starts from 0 just like arrays, always use the number before the actual place of your text.
So your 4th text on the page will be affected by the button with “onClick = "funcObject.fade(filterAllObjects('fade')[3])".

<button
onClick = "funcObject.fade(filterAllObjects('fade')[0])" >
Repeat
</button>

--------------------------------------------------------------------------------------------------------------------------------
PopUp
With the popup effect, upon hovering over a letter of the text, the same will change its size. Here, you also have a few additional attributes:

    sizeUp - defines the size multiplier for your text.
    cursor - defines the cursor form change after you hover over the text. You can choose between pointer, wait, crosshair, grab and all other possible cursor values in your CSS.
    move - provides control if you want to move the letters while increasing their size. The possible values here are "up" and "down".
    color - defines the color change of the letters while they are scaled.

The default values for the popup effect are - sizeUp="2", cursor=”pointer”, color=”red”.
<div class="txtEff"
effect="popUp"
text = "This is popUp Effect"

sizeUp="2"
color="brown"
move="up"
><div/>
-----------------------------------------------------------------------------------------------------------------------
Color
You can utilize a separate color effect. This is not the attribute from the popup effect but a completely different effect on its own.
The possible attributes here are:

    speed - controls how fast (ms) the color of the letters will switch to the next one.
    colors - defines the possible colors of the text. The colors must be separated by a comma and you can also use Hex values of colors for better color accuracy.

The default values on the color effect are - speed = "200", colors = "red, blue, green, yellow, pink, gray, orange, purple".
<div class="txtEff"
effect="color"
text = "This is Color Effect"

speed="200"
color ="red, blue, green, yellow, pink, gray, orange, purple"
><div/>
-------------------------------------------------------------------------------------------------------------------
This is Color Effect
txtEff v1.2
Expect the new version of txtEff very soon.
In the meantime, you can contact us with feedback, ideas and bug reports.

