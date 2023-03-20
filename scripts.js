// JavaScript source code

var currentButtons = 0;

var w = 100;
var h = 100;
var c = 0;
var ranBefore = false

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

function countButtons(button) {
    return "window" + button.toString()
}

function shutDownBox() {
    currentButtons += 1;
    var shutdownwindowsbox = new WinBox("Shut Down Windows", {
        root: document.getElementById("desktop"),
        modal: true,
        width: "320px",
        height: "200px",
        mount: document.getElementById("shutdownHTML")
            .cloneNode(true)
    });
    window.buttons = {
        close: function () {
            shutdownwindowsbox.close(!this.close);
        }
    }
}

function logOffBox() {
    var shutdownwindowsbox = new WinBox("Log Off Windows", {
        root: document.getElementById("desktop"),
        modal: true,
        width: "270px",
        height: "120px",
        html: '<div style="position: absolute; left: 50px"><img draggable="false" src="https://win98icons.alexmeub.com/icons/png/key_win-4.png" style="position: absolute; left: -43px; top: 12px;"><p style="margin-top: 28px; margin-left: 4px;">Are you sure you want to log off?<br><br></p><button onclick="buttons.close()" style="margin-left: 4px;">Yes</button><button style="margin-left: 6px;" onclick="buttons.close()">No</button></div>'
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

function UnspecifiedError() {
    var sound = new Audio("Assets/DING.WAV")
    sound.play();
    const winbox = new WinBox("Error Starting Program", {
        root: document.getElementById("desktop"),
        width: "340px",
        height: "110px",
        x: "center",
        y: "center",
        bottom: 29,
        class: [
            "no-resize",
            "no-max",
            "no-min"
        ],
        html: '<div style="position: absolute; left: 50px"><img draggable="false" src="https://win98icons.alexmeub.com/icons/png/msg_warning-0.png" style="position: absolute; left: -43px; top: 12px;"><p>A required .DLL file, WIND-FILE.DLL, was not found</p><br><button onclick="buttons.close()" style="margin-left: 85px">OK</button></div>',
    });
    window.buttons = {
        close: function () {
            winbox.close();
        }
    }
}

function UnspecifiedErrorSpam() {
    if (ranBefore == false) {
        hideStart();
        c = 0;
        var sound = new Audio("Assets/DING.WAV")
        sound.play();
        const winbox = new WinBox("WARNING", {
            root: document.getElementById("desktop"),
            width: "340px",
            height: "110px",
            x: "center",
            y: "center",
            bottom: 29,
            class: [
                "no-resize",
                "no-max",
                "no-min"
            ],
            html: '<div style="position: absolute; left: 50px"><img draggable="false" src="https://win98icons.alexmeub.com/icons/png/msg_warning-0.png" style="position: absolute; left: -43px; top: 12px;"><p>Are you sure?</p><br><button onclick="buttons.close()" style="margin-left: 45px">Yes</button><button onclick="buttons.safeclose()" style="margin-left: 4px">No</button></div>',
        });
        window.buttons = {
            close: function () {
                winbox.close();
                ranBefore = true;
                setInterval(function () {
                    if (c <= 10) {
                        c += 1;
                        w += 25;
                        h += 25;
                        var sound = new Audio("Assets/DING.WAV")
                        sound.play();
                        const winbox = new WinBox("Error Starting Program", {
                            root: document.getElementById("desktop"),
                            width: "340px",
                            height: "110px",
                            x: w + "px",
                            y: h + "px",
                            bottom: 29,
                            class: [
                                "no-resize",
                                "no-max",
                                "no-min"
                            ],
                            html: '<div style="position: absolute; left: 50px"><img draggable="false" src="https://win98icons.alexmeub.com/icons/png/msg_warning-0.png" style="position: absolute; left: -43px; top: 12px;"><p>A required .DLL file, WIND-FILE.DLL, was not found</p><br><button onclick="buttons.close()" style="margin-left: 85px">OK</button></div>',
                        });
                        window.buttons = {
                            close: function () {
                                winbox.close();
                            }
                        }
                    } else if (c <= 20) {
                        c += 1;
                        w += 25;
                        h += 25;
                        var sound = new Audio("Assets/CHORD.WAV")
                        sound.play();
                        const winbox = new WinBox("C:\\WINDOWS\\WHELP.EXE", {
                            root: document.getElementById("desktop"),
                            width: "450px",
                            height: "130px",
                            x: w + "px",
                            y: h + "px",
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
                }, 50)
            },
            safeclose: function () {
                winbox.close();
            }
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

function removeDraggerBGandBorder()
{
    var dragger = document.querySelector(".ds-selector");

    dragger.style.background = "none";
    dragger.style.border = "none";
}