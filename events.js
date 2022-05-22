window.addEventListener('load', function () {

    // If no cookies are present
    if (document.cookie == '') {

        // If the location is on the specified domain
        // Else if the location is not localhost
        if (this.location.hostname == 'abanoy.github.io') {
            setFade(true);
            getPremadeContainer();
            setElement(document.body, 'audio', 'audIntro', 'audio/ogg', 'aud/intro.ogg', '', false, true);

            btnOK.onclick = function() {    
                audFirstClick.play();
                setElement(document.body, 'img', 'imgBackgroundEffect', '', "img/gif/flashLong.gif", '', false, true);

                setTimeout(function() {cntFirstTimePopup.remove();}, 1000);
                setTimeout(function() {imgBackgroundEffect.src = "img/gif/blank.gif";}, 2000);
                let dblIntroDuration = audIntro.duration * 1000;
                
                getCutscene(999, [audFirstClick.duration, dblIntroDuration]);
                setCookies();
            }
        } else if (this.location.hostname != '') {
            alert('Unrecognized host.');
        } else {

            setCookies();
            startWorld(false);
        }
    } else {
        parseCookies();

        // TODO: Check if the player would still be alive
        
        startBattle();
    } 

    
});

window.addEventListener('unload', function (e) {
    for (let objKey in objCookies) {
        Cookies.set(objKey, objCookies[objKey], {sameSite: 'strict', expires: 7 });
    }
});

document.addEventListener('keydown', (event) => {
    let name = event.key;
    let code = event.code;

    // If the user is in world or battle mode
    if (intMode == 3 || intMode == 2) {
        
        // Check if the previous key is the same as the current key
        if (name != arrKeys[arrKeys.length - 1]) {
            arrKeys.push(name);
        }
        
    }

    // Filter out duplicate keys
    if (intMode == 3 || intMode == 2) {
        arrKeys = Array.from(new Set(arrKeys));
    }
    console.log(arrKeys);
}, false);

document.addEventListener('keyup', (event) => {

    // If the user is in world or battle mode
    if (intMode == 3 || intMode == 2) {
        arrKeys.splice(arrKeys.indexOf(event.key), 1);
    }
}, false);