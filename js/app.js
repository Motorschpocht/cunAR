document.addEventListener("alpine:init", () => {
    Alpine.data("app", () => ({
        page: "start",
        startUpStep: 1,
        planeText: "",
        startUp: {
            1: {
                id: 1,
                plane: "A",
                title: "Schritt 1",
                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
                height: 1,
                width: 1,
                xpos: 0,
                ypos: 0,
                zpos: 0,
                xrot: -90,
                yrot: 0,
                zrot: 0
            },
            2: {
                id: 2,
                plane: "A",
                title: "Schritt 2",
                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
                height: .5,
                width: .5,
                xpos: -.5,
                ypos: 0,
                zpos: 1,
                xrot: -90,
                yrot: 0,
                zrot: 0
            },
            3: {
                id: 3,
                plane: "A",
                title: "Schritt 3",
                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
                height: .5,
                width: 1,
                xpos: 0,
                ypos: 0,
                zpos: 0,
                xrot: -30,
                yrot: 0,
                zrot: 45
            }
        },

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
            this.resizePlane(this.startUp[this.startUpStep].height, this.startUp[this.startUpStep].width);
            this.movePlane("plane"+this.startUp[this.startUpStep].plane, this.startUp[this.startUpStep].xpos, this.startUp[this.startUpStep].ypos, this.startUp[this.startUpStep].zpos);
            this.rotatePlane("plane"+this.startUp[this.startUpStep].plane, this.startUp[this.startUpStep].xrot, this.startUp[this.startUpStep].yrot, this.startUp[this.startUpStep].zrot);
        },

        resetAll() {
            this.updatePage("start");
            this.updateStep(1)
        }
    }))
})