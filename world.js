function startWorld(blnOnTitle) {
  // Set to world mode
  intMode = 3;

  // Describe controls for world
  setElement(document.body, 'label', 'lblFooterWorld', '', '[Esc]: Pause | [z]: Interact | [←]: Go left | [→]: Go right | [↓]: Go down | [↑]: Go up', 'footer', true, false); 

  // TEMPORARILY: Set the level to zero
  let intLevel = 0;

  // Create a world object that has all information
  // necessary to process
  let objWorld = {
    general: {
      title: blnOnTitle,
      viewStatus: false,
      viewStatusDelay: false,
    },
    0: {
      info: {
        width: 11 * 64,
        height: 11 * 64,
        music_loop: true,
        freeCamera: true,
      },

      tenant: {
        x: 32,
        y: 32,
        canMove: true,
        isMoving: false,
      },

      0: {
        map: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0,
          1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1,
          1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1,
          0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
      },

      1: {
        map: [
          19, 23, 23, 23, 18, 0, 19, 23, 23, 23, 18, 21, 0, 0, 0, 4, 25, 8, 0,
          0, 0, 20, 21, 0, 0, 0, 0, 28, 0, 0, 0, 0, 20, 21, 0, 0, 0, 0, 0, 0, 0,
          1, 0, 20, 21, 0, 0, 0, 11, 0, 11, 0, 0, 0, 20, 27, 7, 0, 2, 9, 0, 5,
          7, 0, 2, 26, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 27, 10, 10, 10, 17, 0,
          14, 10, 10, 10, 26, 21, 0, 0, 0, 3, 0, 3, 0, 0, 0, 20, 21, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 20, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 16, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 13,
        ],
      },

      2: {
        map: [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1,
          0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0,
          0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0,
          1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        ],

        assets: {
          0: {
            name: "passage",
            abbreviation: "P",
          },
          1: {
            name: "collision",
            abbreviation: "C",
          },
        },
      },

      3: {
        map: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],

        assets: {
          0: {
            name: "blank",
            abbreviation: "BK",
          },
          1: {
            name: "interaction",
            abbreviation: "IA",
            situation: ["evt_98", "[Interaction Test]", "Hello world!"],
            counter: 0,
            stillGoing: false,
          },
          2: {
            name: "walkthrough",
            abbreviation: "WT",
            situation: [
              "evt_99",
              "[Walkthrough Test]",
              "#tenant#You stepped in a walkthrough!",
            ],
            active: true,
            stillGoing: false,
          },
        },
      },
    },
  };

  for (let intIndex = 0; intIndex < 4; intIndex++) {
    setWorld(objWorld, intLevel, intIndex);
  }

  // With the visual tiles setted up, place
  // Tenant within the visual world
  setElement(
    document.body,
    "img",
    "imgWorldTenant",
    "image/png",
    "img/char/tenant/world/d.png",
    "image",
    false,
    true
  );

  // Create an HTML audio element and play it
  setElement(
    document.body,
    "audio",
    "audBackground",
    "audio/ogg",
    "aud/" + objWorld[intLevel] + ".ogg",
    "<NOCLASS>",
    false,
    true
  );
  audBackground.loop = objWorld[intLevel].info.music_loop;

  // Give Tenant coordinates starter
  if (objWorld[intLevel].info.freeCamera) {
    imgWorldTenant.style.transform = "translateX(-50%) translateY(-50%)";
  } else {
    imgWorldTenant.style.transform =
      "translateX(-" +
      objWorld[intLevel].tenant.x +
      "px) translateY(-" +
      objWorld[intLevel].tenant.y +
      "px) ";
  }

  // On each milisecond, check for updates
  itvWorld = setInterval(function () {
    setWorldUpdate(objWorld, intLevel), 0;
  });
}

function setTextParse(cntTextbox, stringParameter) {
  let arrCodes = [
    "#tenant#",
    "#advocate#",
    "#tenant_happy#",
    "#tenant_angry#",
    "#tenant_normal#",
    "#advocate_card_read#",
    "#advocate_shocked#",
    "#advocate_angry#",
    "#advocate_cry#",
    "#advocate_depressed#",
    "#advocate_delusional#",
    "#advocate_normal#",
    "#advocate_left#",
    "#advocate_right#",
    "#advocate_above#",
    "#advocate_below#",
    "#tenant_center#",
    "#tenant_shocked#",
    "#tenant_sad#",
    "#advocate_card_shocked#",
    "#advocate_card_normal#",
  ];
// For each element in arrCodes, if the stringParameter contains a code that is specified in arrCodes, 
  for (let i = 0; i < arrCodes.length; i++) {
    if (stringParameter.indexOf(arrCodes[i]) > -1) {
      stringParameter = stringParameter.slice(arrCodes[i].length);

      switch (i) {
        case 0: // tenant
          setElement(
            cntTextbox,
            "img",
            "imgTenant",
            "image/png",
            "img/char/tenant/normal.png",
            "image",
            false,
            true
          );
          break;
        case 1: // advocate
          setElement(
            cntTextbox,
            "img",
            "imgAdvocate",
            "image/png",
            "img/char/advocate/normal.png",
            "image",
            false,
            true
          );
          break;
        case 2: // tenant_happy
          imgTenant.src = "img/char/tenant/happy.png";
          break;
        case 3: // tenant_angry
          break;
        case 4: // tenant_normal
          imgTenant.src = "img/char/tenant/normal.png";
          break;
        case 5: // advocate_card_read
          imgAdvocate.src = "img/char/advocate/card_read.png";
          break;
        case 6: // advocate_shocked
          imgAdvocate.src = "img/char/advocate/shocked.png";
          break;
        case 7: // advocate_angry
          imgAdvocate.src = "img/char/advocate/angry.png";
          break;
        case 8: // advocate_cry
          break;
        case 9: // advocate_depressed
          break;
        case 10: // advocate_delusional
          imgAdvocate.src = "img/char/advocate/delusional.png";
          break;
        case 11: // advocate_normal
          imgAdvocate.src = "img/char/advocate/normal.png";
          break;
        case 12: // advocate_left
          imgAdvocate.style.transform =
            "translate(0vh, -245px) rotateY(180deg)";
          break;
        case 13: // advocate_right
          break;
        case 14: // advocate_above
          // Nonesense as Advocate is already above.
          break;
        case 15: // advocate_below
          break;
        case 16: // tenant_center
          imgTenant.style.transform = "translate(20vw, -330px)";
          break;
        case 17: // tenant_shocked
          imgTenant.src = "img/char/tenant/shocked.png";
          break;
        case 18: // tenant_sad
          imgTenant.src = "img/char/tenant/sad.png";
          break;
        case 19: // advocate_card_shocked
          imgAdvocate.src = "img/char/advocate/card_shocked.png";
          break;
        case 20: // advocate_card_normal
          imgAdvocate.src = "img/char/advocate/card_normal.png";
      } // End Switch
    } // End if
  } // End for

  return stringParameter;
}

function setText(objWorld, intLevel, intMapDigit) {
  let cntTextbox = setElement(
    document.body,
    "div",
    "cntTextbox",
    "",
    "",
    "container",
    false,
    false
  );
  let arrTexts = objWorld[intLevel][3].assets[intMapDigit].situation;
  let lblText = setElement(
    cntTextbox,
    "label",
    "lblText",
    "",
    arrTexts[1],
    "label",
    true,
    false
  );
  let intCounter = 1;

  cntTextbox.onclick = function () {
    intCounter++;

    if (intCounter < arrTexts.length) {
      lblText.firstChild.nodeValue = setTextParse(
        cntTextbox,
        arrTexts[intCounter]
      );
    } else {
      objWorld[intLevel].tenant.canMove = true;
      objWorld[intLevel][3].assets[intMapDigit].stillGoing = false;
      cntTextbox.remove();
    }
  };
  setTimeout(function () {
    cntTextbox.click();
  }, 1);
}

function setWorldUpdate(objWorld, intLevel) {
  if (objWorld.general.title) {
    if (typeof totSample !== "undefined") {
      if (document.getElementById("cntTitle") == null) {
        audBackground.play();
        objWorld.general.title = false;
      }
    } else if (document.getElementById("cntTitle") == null) {
      getPremadeContainer(3);
    }
  } else if (objWorld.general.viewStatus) {
    if (typeof cntPause !== "undefined") {
      if (cntPause.classList.contains("labelResume")) {
        objWorld.general.viewStatusDelay = true;

        cntPause.remove();
        objWorld.general.viewStatus = false;

        setElement(
          document.body,
          "audio",
          "audtitleSelect",
          "audio/ogg",
          "aud/titleSelect.ogg",
          "",
          false,
          true
        );
        audtitleSelect.play();

        if (objWorld.general.viewStatusDelay == false) {
          setTimeout(function () {
            audtitleSelect.remove();
            objWorld.general.viewStatusDelay = false;
          }, 5000);
        }
      } else if (cntPause.classList.contains("labelBattle")) {
        clearInterval(itvWorld);
        setFade(false);
        setTimeout( function() {startBattle()}, 1000);
      } else if (cntPause.classList.contains("labelExit")) {
        intMode = 0;
        clearInterval(itvWorld);
        setFade(false);
        setTimeout( function() {location.href = 'https://abanoy.github.io/';}, 300);
      }
    } else {
      getPremadeContainer(4);
    }
  } else {
    // Grab X and Y coordinates from Tenant's CSS transform style
    let arrTenantMovement = [
      parseInt(imgWorldTenant.style.transform.split(" ")[0].match(/[-]?\d+/)),
      parseInt(imgWorldTenant.style.transform.split(" ")[1].match(/[-]?\d+/)),
    ];
    let arrFloorMovement = [
      parseInt(cntFloor.style.transform.split(" ")[0].match(/[-]?\d+/)),
      parseInt(cntFloor.style.transform.split(" ")[1].match(/[-]?\d+/)),
    ];

    // Set directional movements to be passable.
    // In order, they are up, down, left, and right respectively.
    let arrPassableMovements = [true, true, true, true];

    // Check collision from Tenant
    checkCollision(objWorld, intLevel, arrPassableMovements);

    // Set visual and coordinal movements for Tenant
    setCharImg(
      arrTenantMovement,
      arrFloorMovement,
      arrPassableMovements,
      objWorld,
      intLevel
    );

    // Update Tenant's CSS transform style to which direction it will be heading
    if (objWorld[intLevel].info.freeCamera) {
      cntFloor.style.transform =
        "translateX(" +
        arrFloorMovement[0] +
        "px) translateY(" +
        arrFloorMovement[1] +
        "px)";
      cntWall.style.transform =
        "translateX(" +
        arrFloorMovement[0] +
        "px) translateY(" +
        arrFloorMovement[1] +
        "px)";
      cntCollision.style.transform =
        "translateX(" +
        arrFloorMovement[0] +
        "px) translateY(" +
        arrFloorMovement[1] +
        "px)";
      cntEvent.style.transform =
        "translateX(" +
        arrFloorMovement[0] +
        "px) translateY(" +
        arrFloorMovement[1] +
        "px)";
    } else {
      imgWorldTenant.style.transform =
        "translateX(" +
        arrTenantMovement[0] +
        "px) translateY(" +
        arrTenantMovement[1] +
        "px)";
    }
  }
}

function setTiles(objWorld, intLevel, intActionCode, cntDirector) {
  // Action - What are we parsing?
  //      0 - The floor world
  //      1 - The wall world
  //      2 - The collision world
  //      3 - The Event world

  // For each digits in Floor map
  for (
    intIndex = 0;
    intIndex < objWorld[intLevel][intActionCode].map.length;
    intIndex++
  ) {
    // Get the current index as string
    let strNumber = intIndex.toString();
    // Get the digit from the specified map
    let intDigit = objWorld[intLevel][intActionCode].map[intIndex];

    // If there is only one digit, add two
    // zeroes before it.
    // Else if two digits, one zero.
    if (strNumber.length == 1) {
      strNumber = "00" + strNumber;
    } else if (strNumber.length == 2) {
      strNumber = "0" + strNumber;
    }

    if (intActionCode == 0 || intActionCode == 1) {
      // Create a tile for the visual world
      setElement(
        cntDirector,
        "img",
        "img" + strNumber,
        "image/png",
        "img/bg/world/" + intLevel +"/" +
          cntDirector.id.replace("cnt", "").toLowerCase() +
          "/" +
          intDigit +
          ".png",
        "",
        false,
        true
      );
    } else {
      setElement(
        cntDirector,
        "img",
        "img" +
          strNumber +
          objWorld[intLevel][intActionCode].assets[intDigit].abbreviation,
        "image/png",
        "img/bg/world/" + intLevel + "/" +
          cntDirector.id.replace("cnt", "").toLowerCase() +
          "/" +
          objWorld[intLevel][intActionCode].assets[intDigit].name +
          ".png",
        "",
        false,
        true
      );
    }
  }
}

function setWorld(objWorld, intLevel, intActionCode) {
  // Action - What world should we create?
  //      0 - The floor world
  //      1 - The wall world
  //      2 - The collision world
  //      3 - The event world

  let strWorldName;

  if (intActionCode == 0) {
    strWorldName = "cntFloor";
  } else if (intActionCode == 1) {
    strWorldName = "cntWall";
  } else if (intActionCode == 2) {
    strWorldName = "cntCollision";
  } else {
    strWorldName = "cntEvent";
  }

  cntTemp = setElement(
    document.body,
    "div",
    strWorldName,
    "",
    "",
    "tile",
    false,
    false
  );
  cntTemp.style.width = objWorld[intLevel].info.width + "px";
  cntTemp.style.height = objWorld[intLevel].info.height + "px";

  if (objWorld[intLevel].info.freeCamera) {
    cntTemp.style.transform =
      "translateX(-" +
      objWorld[intLevel].info.width / 2 +
      "px) translateY(-" +
      objWorld[intLevel].info.height / 2 +
      "px)";
  } else {
    cntTemp.style.transform = "translateX(-50%) translateY(-50%)";
  }

  setTiles(objWorld, intLevel, intActionCode, cntTemp);
}

function setCharImg(
  arrTenantMovement,
  arrFloorMovement,
  arrPassableMovements,
  objWorld,
  intLevel
) {
  // Check if the respective inclusion should have images be mapped

  blnCanMove = objWorld[intLevel].tenant.canMove;
  blnFreeCamera = objWorld[intLevel].info.freeCamera;

  if (blnCanMove) {
    if (arrKeys.includes("Escape")) {
      objWorld.general.viewStatus = true;
    } else {
      if (arrKeys.includes("ArrowUp")) {
        if (arrKeys.includes("ArrowLeft")) {
          imgWorldTenant.src = "img/char/tenant/world/ul.png";
        } else if (arrKeys.includes("ArrowRight")) {
          imgWorldTenant.src = "img/char/tenant/world/ur.png";
        } else {
          imgWorldTenant.src = "img/char/tenant/world/u.png";
        }
      } else if (arrKeys.includes("ArrowDown")) {
        if (arrKeys.includes("ArrowLeft")) {
          imgWorldTenant.src = "img/char/tenant/world/dl.png";
        } else if (arrKeys.includes("ArrowRight")) {
          imgWorldTenant.src = "img/char/tenant/world/dr.png";
        } else {
          imgWorldTenant.src = "img/char/tenant/world/d.png";
        }
      } else if (arrKeys.includes("ArrowLeft")) {
        imgWorldTenant.src = "img/char/tenant/world/l.png";
      } else if (arrKeys.includes("ArrowRight")) {
        imgWorldTenant.src = "img/char/tenant/world/r.png";
      }

      // Check if the respective inclusion should have Tenant be moving

      if (arrKeys.includes("ArrowUp") && arrPassableMovements[0]) {
        arrTenantMovement[1] -= 3;
        if (blnFreeCamera) {
          arrFloorMovement[1] += 3;
        }
      }

      if (arrKeys.includes("ArrowDown") && arrPassableMovements[1]) {
        arrTenantMovement[1] += 3;
        if (blnFreeCamera) {
          arrFloorMovement[1] -= 3;
        }
      }

      if (arrKeys.includes("ArrowLeft") && arrPassableMovements[2]) {
        arrTenantMovement[0] -= 3;
        if (blnFreeCamera) {
          arrFloorMovement[0] += 3;
        }
      }

      if (arrKeys.includes("ArrowRight") && arrPassableMovements[3]) {
        arrTenantMovement[0] += 3;
        if (blnFreeCamera) {
          arrFloorMovement[0] -= 3;
        }
      }
    }
  }
}

function checkCollision(objWorld, intLevel, arrPassableMovements) {
  /*
   * Offsets for domTenant is used to accomidate the
   * picture boundary. In other words, since all world-related
   * assets are 64x64 and Tenant is visually shown smaller than that,
   * we use offsets to not evaluate the extra spaces that Tenant
   * has.
   */

  /*
   * For the sake of simplicity, INT_IMAGE_SIZE is the sum
   * of two comparing objects (Tenant and the collision tile) for
   * both width and height.
   */

  const INT_IMAGE_OFFSET = 48;
  const INT_IMAGE_SIZE = 128;
  const INT_STEPS = 3;
  let chdTiles = cntCollision.children;
  let domTenant = imgWorldTenant.getBoundingClientRect();

  // For number of tiles set in the collision world
  for (
    let intIndex = 0;
    intIndex < objWorld[intLevel][1].map.length;
    intIndex++
  ) {
    // If that tile is a collision
    if (objWorld[intLevel][2].map[intIndex] == 1) {
      // Get the HTML element of that tile
      let elmTile = document.getElementById(chdTiles[intIndex].id);

      // Get the JavaScript DOM object of that tile
      let domTile = elmTile.getBoundingClientRect();

      // Get the diffence in coordinates from these two object.
      let intXCheck = domTenant.x - domTile.x;
      let intYCheck = domTenant.y - domTile.y;

      // In general, check if the difference in X and Y coordinates is less then
      // the surrounding collision tile. Subtract or add Floord on which direction
      // it will affect Tenant for the ability to move.

      // Check if going up
      if (
        Math.abs(intXCheck) * 2 < INT_IMAGE_SIZE - INT_IMAGE_OFFSET &&
        Math.abs(intYCheck - INT_STEPS) * 2 < INT_IMAGE_SIZE - INT_IMAGE_OFFSET
      ) {
        arrPassableMovements[0] = checkTileAssociation(
          objWorld,
          domTenant,
          domTile,
          intLevel,
          intIndex,
          INT_IMAGE_OFFSET
        );
      }

      // Check if going down
      if (
        Math.abs(intXCheck) * 2 < INT_IMAGE_SIZE - INT_IMAGE_OFFSET &&
        Math.abs(intYCheck + INT_STEPS) * 2 < INT_IMAGE_SIZE - INT_IMAGE_OFFSET
      ) {
        arrPassableMovements[1] = checkTileAssociation(
          objWorld,
          domTenant,
          domTile,
          intLevel,
          intIndex,
          INT_IMAGE_OFFSET
        );
      }

      // Check if going left
      if (
        Math.abs(intXCheck - INT_STEPS) * 2 <
          INT_IMAGE_SIZE - INT_IMAGE_OFFSET &&
        Math.abs(intYCheck) * 2 < INT_IMAGE_SIZE - INT_IMAGE_OFFSET
      ) {
        arrPassableMovements[2] = checkTileAssociation(
          objWorld,
          domTenant,
          domTile,
          intLevel,
          intIndex,
          INT_IMAGE_OFFSET
        );
      }

      // Check if going right
      if (
        Math.abs(intXCheck + INT_STEPS) * 2 <
          INT_IMAGE_SIZE - INT_IMAGE_OFFSET &&
        Math.abs(intYCheck) * 2 < INT_IMAGE_SIZE - INT_IMAGE_OFFSET
      ) {
        arrPassableMovements[3] = checkTileAssociation(
          objWorld,
          domTenant,
          domTile,
          intLevel,
          intIndex,
          INT_IMAGE_OFFSET
        );
      }
    }
  }
}

function checkTileAssociation(
  objWorld,
  domTenant,
  domTile,
  intLevel,
  intIndex,
  INT_IMAGE_OFFSET
) {
  let intMapDigit = objWorld[intLevel][3].map[intIndex];
  let strEventName = objWorld[intLevel][3].assets[intMapDigit].name;
  let blnEventActive;
  let blnEventtillGoing = objWorld[intLevel][3].assets[intMapDigit].stillGoing;

  if (strEventName == "walkthrough") {
    blnEventActive = objWorld[intLevel][3].assets[intMapDigit].active;
  }

  if (intMapDigit > 0 && strEventName == "interaction") {
    // If the interaction event has the 'z' key active, and there is not one
    // already happening, then initiate the interaction.

    if (arrKeys.includes("z") && !blnEventtillGoing) {
      objWorld[intLevel].tenant.canMove = false;
      objWorld[intLevel][3].assets[intMapDigit].stillGoing = true;
      setTimeout(function () {
        setText(objWorld, intLevel, intMapDigit);
      }, 1);
      return true;
    } else if (blnEventtillGoing) {
      return true;
    } else {
      return false;
    }
  } else if (intMapDigit > 0 && strEventName == "walkthrough") {
    // If the walkthrough event has never been activated, and Tenant is within image,
    // then initiate the walkthrough event.
    if (
      blnEventActive &&
      domTenant.left + INT_IMAGE_OFFSET > domTile.left &&
      domTenant.right - INT_IMAGE_OFFSET < domTile.right &&
      domTenant.top + INT_IMAGE_OFFSET > domTile.top &&
      domTenant.bottom - INT_IMAGE_OFFSET < domTile.bottom
    ) {
      objWorld[intLevel].tenant.canMove = false;
      objWorld[intLevel][3].assets[intMapDigit].active = false;
      objWorld[intLevel][3].assets[intMapDigit].stillGoing = true;
      setTimeout(function () {
        setText(objWorld, intLevel, intMapDigit);
      }, 1);
      return false;
    } else if (blnEventtillGoing) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}
