

const text1 = "$ i'm a current student at UNSW and software developer";
const text2 = "$ It is my goal to gain as much practical experience as possible throughout my univerity journey";
const text3 = "$ I am keen to learn! Contact me if you want to build something (^_^)";
const text4 = "$ ";
const id1 = "terminal-text1";
const id2 = "terminal-text2";
const id3 = "terminal-text3";
const id4 = "terminal-text4";

let blinkingCursorInterval;

const terminalTypeAnimation = (text, id, i, done) => {
    let element = document.getElementById(id);
    if (i < text.length) {
        let char = text[i];
        if (char === "$") char = '<span class="dollar-symbol">$</span>';
        element.innerHTML = element.innerHTML.replace('|', '') + char + '|';
        i++;
        setTimeout(() => terminalTypeAnimation(text, id, i, done), 50);
    } else {
        element.innerHTML = element.innerHTML.replace('|', ''); // remove cursor when done
        done(); // Call the "done" function when done typing this line
        if (id === "terminal-text4") {
            let showCursor = true;
            clearInterval(blinkingCursorInterval);
            blinkingCursorInterval = setInterval(() => {
                if (showCursor) {
                    element.innerHTML += "|";
                } else {
                    element.innerHTML = element.innerHTML.replace('|', '');
                }
                showCursor = !showCursor;
            }, 500);
        }
    }
}

window.onload = () => {
    terminalTypeAnimation(text1, id1, 0, () => {
        terminalTypeAnimation(text2, id2, 0, () => {
            terminalTypeAnimation(text3, id3, 0, () => {
                terminalTypeAnimation(text4, id4, 0, () => {
                });
            });
        });
    });
}
