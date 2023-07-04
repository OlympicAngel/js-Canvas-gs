class Task {
    static mainContainer;
    static autoID = 1;
    /** @type <()=>{}> */
    #drawFunc;
    constructor(description) {
        const desc = description.split("http")[0]; //set first part of the description to be everything BUT the image url
        const imageUrl = "http" + description.split("http")[1]; //extract the url of the image

        //create containing div & html structure
        const div = document.createElement("div");
        div.className = "task"
        div.innerHTML = `<h2>Task #${Task.autoID}</h2>
        <div>
            <p>${desc}</p> <img src="${imageUrl}" alt="task${Task.autoID} illustration" />
        </div>
        <button>Draw Task!</button>
        <canvas></canvas>`;
        div.querySelector("button").addEventListener("click", this.canvasDraw.bind(this, div.querySelector("canvas")))

        //if container exist - append div.
        if (Task.mainContainer)
            Task.mainContainer.append(div)


        Task.autoID++; //increase id for later iteration
    }

    /**
     * 
     * @param {HTMLCanvasElement} canvas 
     */
    canvasDraw(canvas) {
        //clean the canvas
        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
        this.#drawFunc?.call(this, canvas, canvas.width, canvas.height);
    }

    /** */
    set drawer(func = (canvas) => { }) {
        this.#drawFunc = func;
    }
}