// ctrl - 17
// k - 75
var isCtrlPressed = false;
var isKPressed = false;

document.onkeydown = function(e) {
    if(e.keyCode === 17) {
        isCtrlPressed = true;
    } else if (e.keyCode === 75) {
        isKPressed = true;
    }

    if(isCtrlPressed && isKPressed) {
        document.querySelector('span[role="search"] input').focus();
        e.preventDefault();
        e.stopPropagation();
    }
};
document.onkeyup = function(e) {
    if(e.keyCode === 17) {
        isCtrlPressed = false;
    } else if (e.keyCode === 75) {
        isKPressed = false;
    }
}
