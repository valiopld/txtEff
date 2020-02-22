getAllEffectTags = document.querySelectorAll(".txtEff");

let allEffectObjects = [];

getAllEffectTags.forEach((htmlTag, i) => {
  props = getAllEffectTags[i].attributes;
  effectName = props.effect.value;
  allEffectObjects[i] = {
    effectName: effectName,
    props: props,
    target: htmlTag
  };
});

function filterAllObjects(effectName) {
  return (filteredEffects = allEffectObjects.filter(
    a => a.effectName == effectName
  ));
}
let funcObject = {
  typing: function(a) {
    const props = a.props;
    const target = a.target;
    const eText = props.text.value;
    target.innerHTML = "<span id='myText'></span><span id='cursor'>|</span>";

    let cursorSpeed = "300";
    let typingSpeed = "300";
    let repeat = "yes";
    let cursor = target.querySelector("#cursor");
    let myText = target.querySelector("#myText");

    let wordArray = [];
    let i = 0;
    let back = false;

    props.repeat ? (repeat = props.repeat.value) : null;
    props.cursorspeed ? (cursorSpeed = props.cursorspeed.value) : null;
    props.typingspeed ? (typingSpeed = props.typingspeed.value) : null;
    if (props.cursor) {
      if (props.cursor.value == "no") {
        cursor.innerHTML = "&nbsp;";
      }
    }
    setInterval(() => {
      cursor.style.opacity == "1"
        ? (cursor.style.opacity = "0")
        : (cursor.style.opacity = "1");
    }, cursorSpeed);

    repeat == "no"
      ? eText.split("").forEach((l, i) => {
          setTimeout(() => {
            wordArray[i] = eText.split("")[i];
            myText.innerHTML = wordArray.join("");
          }, typingSpeed * i);
        })
      : null;

    setInterval(() => {
      "yes" == repeat &&
        (0 == back && wordArray.length < eText.length
          ? ((wordArray[i] = eText.split("")[i]),
            (myText.innerHTML = wordArray.join("")),
            i++)
          : (back = !0),
        wordArray.length > 0 && 1 == back
          ? ((wordArray.length = i),
            (myText.innerHTML = wordArray.join("")),
            i--)
          : (back = !1));
    }, typingSpeed);
  },
  fade: function(a) {
    const props = a.props;
    const target = a.target;
    const eText = props.text.value;
    let speedShowing = 50;
    let speedFading = 5;
    target.innerHTML = eText.replace(
      /\S/g,
      "<span class='letter' style='opacity: 0;'>$&</span>"
    );
    const letterArray = target.querySelectorAll(".letter");

    props.speedshowing ? (speedShowing = props.speedshowing.value) : null;
    props.speedfading ? (speedFading = props.speedfading.value) : null;

    letterArray.forEach((e, i) => {
      setTimeout(() => {
        let opacity = 0;

        let myInt = setInterval(() => {
          if (opacity < 1) {
            opacity = opacity + 0.01;
            e.style.opacity = opacity;
          } else {
            clearInterval(myInt);
          }
        }, speedFading);
      }, speedShowing * i);
    });
  },

  popUp: function(a) {
    const props = a.props;
    const target = a.target;
    const eText = props.text.value;

    target.innerHTML = eText.replace(
      /\S/g,
      "<span class='letter' style='display: inline-block'>$&</span>"
    );

    let lettersArray = target.querySelectorAll(".letter");
    let sizeUp = "2";
    let cursor = "pointer";
    let color = "red";
    let move = "";
    let defaultStyle = getComputedStyle(a.target);

    props.sizeup ? (sizeUp = props.sizeup.value) : null;
    props.color ? (color = props.color.value) : null;
    props.cursor ? (cursor = props.cursor.value) : null;
    props.move ? (move = props.move.value) : null;

    lettersArray.forEach(a => {
      a.addEventListener("mouseover", e => {
        let isUp = "";
        let pr = 25;
        sizeUp.value < 2 ? (pr = props.sizeup.value * 5) : null;

        move == "up" ? (isUp = `translateY(-${pr}%)`) : null;
        move == "down" ? (isUp = `translateY(${pr}%)`) : null;
        e.target.style.transform = `scale(${sizeUp}) ${isUp}`;
        e.target.style.cursor = cursor;
        e.target.style.color = color;
      });
      a.addEventListener("mouseout", e => {
        e.target.style = defaultStyle;
        e.target.style.display = "inline-block";
      });
    });
  },

  color: function(a) {
    const props = a.props;
    const target = a.target;
    const eText = props.text.value;

    target.innerHTML = eText.replace(/\S/g, "<span class='letter'>$&</span>");
    const lettersArray = target.querySelectorAll(".letter");
    let speed = 200;
    let colorArray = [
      "red",
      "blue",
      "green",
      "yellow",
      "pink",
      "gray",
      "orange",
      "purple"
    ];
    props.colors ? (colorArray = props.colors.value.split(" ")) : null;
    props.speed ? (speed = props.speed.value) : null;

    function color() {
      setInterval(() => {
        lettersArray.forEach(e => {
          let randomC =
            colorArray[Math.floor(Math.random() * colorArray.length)];

          e.style.color = randomC;
        });
      }, speed);
    }
    color();
  }
};

filterAllObjects("typing").forEach(a => funcObject.typing(a));
filterAllObjects("fade").forEach(a => funcObject.fade(a));
filterAllObjects("popUp").forEach(a => funcObject.popUp(a));
filterAllObjects("color").forEach(a => funcObject.color(a));
