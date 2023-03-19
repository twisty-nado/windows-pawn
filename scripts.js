// JavaScript source code
function showBox() {
    new WinBox({
        root: document.getElementById("desktop"),
        title: "Microsoft Internet Exploder",
        icon: "https://win98icons.alexmeub.com/icons/png/msie1-2.png",
        html: "<p>No.</p><button style='position: absolute; right: 8px; bottom: 8px;'>OK</button>",
        width: "400px",
        height: "200px",
        x: "center",
        y: "center",
        bottom: 29
    });
}

function showPaintBox() {
    new WinBox({
        root: document.getElementById("desktop"),
        title: "Microsoft Paint",
        icon: "https://mspaint.humanhead.com/images/icons/16.png",
        url: "https://jspaint.app/",
        width: "900px",
        height: "600px",
        x: "center",
        y: "center",
        bottom: 29
    });
}

function shutDownBox() {
    var shutdownwindowsbox = new WinBox("Shut Down Windows", {
        root: document.getElementById("desktop"),
        modal: true,
        width: "320px",
        height: "200px",
        html: '<div style="position: absolute; left: 50px"><img draggable="false" src="https://win98icons.alexmeub.com/icons/png/shut_down_with_computer-0.png" style="position: absolute; left: -43px; top: 12px;"><p>What do you want the computer to do?</p><div class="field-row"><input type="radio" id="StandBy" name="ex"><label for="StandBy">S<u>t</u>and By</label></div><div class="field-row"><input type="radio" id="ShutDown" name="ex" checked><label for="ShutDown"><u>S</u>hut Down</label></div><div class="field-row"><input type="radio" id="Restart" name="ex"><label for="Restart"><u>R</u>estart</label></div><div class="field-row"><input type="radio" id="RestartMSDOS" name="ex"><label for="RestartMSDOS">Restart in <u>&nbsp;M</u>S-DOS mode</label></div><br><br><button onclick="buttons.close()">OK</button><button style="margin-left: 6px;" onclick="buttons.close()">Cancel</button><button style="margin-left: 6px;" onclick="buttons.close(); help()"><u>H</u>elp</button></div>'
    });
    window.buttons = {
        close: function () {
            shutdownwindowsbox.close();
        }
    }
}

function help() {
    const winbox = new WinBox("Windows Help", {
        root: document.getElementById("desktop"),
        width: "520px",
        height: "440px",
        icon: "https://win98icons.alexmeub.com/icons/png/chm-0.png",
        x: "center",
        y: "center",
        bottom: 29,
        html: '<p>Loading...</p>',
    });
    setTimeout(function () { helpError() }, 5000)
}

function helpError() {
    var sound = new Audio("Assets/CHORD.WAV")
    sound.play();
    const winbox = new WinBox("C:\\WINDOWS\\WHELP.EXE", {
        root: document.getElementById("desktop"),
        width: "450px",
        height: "130px",
        x: "center",
        y: "center",
        bottom: 29,
        class: [
            "no-resize",
            "no-max",
            "no-min"
        ],
        html: '<div style="position: absolute; left: 50px"><img draggable="false" src="https://win98icons.alexmeub.com/icons/png/msg_error-0.png" style="position: absolute; left: -43px; top: 12px;"><p>C:\\WINDOWS\\WHELP.EXE<br><br>A device attached to the system is not functioning.</p><br><button onclick="buttons.close()" style="margin-left: 135px">OK</button></div>',
    });
    window.buttons = {
        close: function () {
            winbox.close();
        }
    }
}

function start() {
    const startMenu = document.getElementById("startMenu");
    const startButton = document.getElementById("start");

    if (startMenu.style.display == "none") {
        startMenu.style.display = "block";
        startButton.classList.add("active")
    } else {
        startMenu.style.display = "none";
        startButton.classList.remove("active")
    }
}

function hideStart() {
    const startMenu = document.getElementById("startMenu");
    const startButton = document.getElementById("start");

    startMenu.style.display = "none";
    startButton.classList.remove("active")
}