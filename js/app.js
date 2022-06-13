document.addEventListener("alpine:init", () => {
    Alpine.data("app", () => ({
        page: "start",
        manualStep: 1,
        activeMarker: null,
        expand: true,

        resizePlane(height, width) {
            let element = document.getElementById("htmlElement" + manual[this.manualStep].marker);
            element.style.minHeight = 1000*height + "px";
            element.style.minWidth = 1000*width + "px";
        },

        movePlane(id, x, y, z) {
            let plane = document.querySelector("#" + id);
            plane.setAttribute("position", {x: x, y: y, z: z});
        },

        rotatePlane(id, x, y, z) {
            let plane = document.querySelector("#" + id);
            plane.setAttribute("rotation", {x: x, y: y, z: z});
        },

        updatePage(id) {
            this.page = id;
        },

        updateStep(step) {
            this.manualStep = step;

            if(manual[this.manualStep].mapTop && manual[this.manualStep].mapLeft) {
                this.updateMapPin(manual[this.manualStep].mapTop, manual[this.manualStep].mapLeft);
            }

            if(manual[this.manualStep].ar) {
                this.resizePlane(manual[this.manualStep].height, manual[this.manualStep].width);
                this.movePlane("plane"+manual[this.manualStep].marker, manual[this.manualStep].xpos, manual[this.manualStep].ypos, manual[this.manualStep].zpos);
                this.rotatePlane("plane"+manual[this.manualStep].marker, manual[this.manualStep].xrot, manual[this.manualStep].yrot, manual[this.manualStep].zrot);
            }
        },

        updateMapPin(top, left) {
            let pin = document.getElementById("pin");
            pin.style.top = "calc(" + top + "% - 12px)";
            pin.style.left = "calc(" + left + "% - 12px)";
        },

        resetAll() {
            this.updatePage("start");
            this.updateStep(1);
        }
    }))
})

var previousOrientation = window.orientation;
var checkOrientation = function(){
    if(window.orientation !== previousOrientation){
        previousOrientation = window.orientation;
        document.location.reload(true);
    }
};

window.addEventListener("resize", checkOrientation, false);
window.addEventListener("orientationchange", checkOrientation, false);