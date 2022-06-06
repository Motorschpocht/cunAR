document.addEventListener("alpine:init", () => {
    Alpine.data("app", () => ({
        page: "start",
        startUpStep: 1,
        planeText: "",
        expand: true,

        resizePlane(height, width) {
            var element = document.getElementById("htmlElement");
            element.style.minHeight = 1000*height + "px";
            element.style.minWidth = 1000*width + "px";
        },

        movePlane(id, x, y, z) {
            var plane = document.querySelector("#" + id);
            plane.setAttribute("position", {x: x, y: y, z: z});
        },

        rotatePlane(id, x, y, z) {
            var plane = document.querySelector("#" + id);
            plane.setAttribute("rotation", {x: x, y: y, z: z});
        },

        updatePage(id) {
            this.page = id;
        },

        updatePlaneText(text) {
            this.planeText = text;
        },

        updateStep(step) {
            this.startUpStep = step;

            if(startUp[this.startUpStep].mapTop && startUp[this.startUpStep].mapLeft) {
                this.updateMapPin(startUp[this.startUpStep].mapTop, startUp[this.startUpStep].mapLeft);
            }

            if(startUp.ar) {
                this.resizePlane(startUp[this.startUpStep].height, startUp[this.startUpStep].width);
                this.movePlane("plane"+startUp[this.startUpStep].plane, startUp[this.startUpStep].xpos, startUp[this.startUpStep].ypos, startUp[this.startUpStep].zpos);
                this.rotatePlane("plane"+startUp[this.startUpStep].plane, startUp[this.startUpStep].xrot, startUp[this.startUpStep].yrot, startUp[this.startUpStep].zrot);
            } else {
                // TODO...
            }
        },

        updateMapPin(top, left) {
            var pin = document.getElementById("pin");
            pin.style.top = "calc(" + top + "% - 12px)";
            pin.style.left = "calc(" + left + "% - 12px)";
        },

        resetAll() {
            this.updatePage("start");
            this.updateStep(1);
        }
    }))
})