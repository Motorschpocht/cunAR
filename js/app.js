document.addEventListener("alpine:init", () => {
    Alpine.data("app", () => ({
        page: "start",
        startUpStep: 1,
        planeText: "cunAR",

        movePlane(id, x, y, z) {
            var plane = document.querySelector("#" + id);
            plane.setAttribute("position", {x: x, y: y, z: z});
        },

        rotatePlane(id, x, y, z) {
            var plane = document.querySelector("#" + id);
            plane.setAttribute("rotation", {x: x, y: y, z: z});
        },

        changePage(id) {
            this.page = id;
        },

        changePlaneText(text) {
            this.planeText = text;
        },

        nextStep() {
            this.startUpStep++;
            this.rotatePlane("planeA", -90, this.startUpStep*45-45, 0);
        },

        lastStep() {
            this.startUpStep--;
            this.rotatePlane("planeA", -90, this.startUpStep*45-45, 0);
        },

        resetAll() {
            this.changePage("start");
            this.startUpStep = 1;
            this.movePlane("planeA", 0, 0, 0);
            this.rotatePlane("planeA", -90, 0, 0);
        }
    }))
})