/*External javaScript file for eleanor's playlist by Shreeya Shrestha*/
if (window.matchMedia("(min-width: 768px)").matches) {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById("mouse");

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    };

    let delay = 6,
        revisedMousePosX = 0,
        revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

        mouseCircle.style.top = revisedMousePosY + "px";
        mouseCircle.style.left = revisedMousePosX + "px";
    }
    delayMouseFollow();
}
function openNav() {
            document.getElementById("myNav").style.width = "100%";
            }
        function closeNav() {
            document.getElementById("myNav").style.width = "0%";
            }
