class CA {
    rows: number;
    cols: number;
    grid: boolean[][];
    cellSize: number;
    ctx;
    pallete = [`rgb(166, 105, 209)`, `rgb(138, 73, 184)`, `rgb(228, 203, 245)`];

    constructor(rows: number, cols: number, cellSize: number, ctx) {
        this.rows = rows;
        this.cols = cols;
        this.cellSize = cellSize;
        this.ctx = ctx;
        this.grid = Array.from({ length: this.rows }, () =>
            Array(this.cols).fill(false),
        );

        const rMid = Math.floor(this.rows / 2);
        const cMid = Math.floor(this.cols / 2);

        for (let r = rMid - 5; r <= rMid + 5; r++) {
            for (let c = cMid - 5; c <= cMid + 5; c++) {
                if (Math.random() > 0.5) {
                    this.grid[r][c] = true;
                }
            }
        }
    }

    update() { }

    draw() {
        for (let r = 0; r < this.grid.length; r++) {
            for (let c = 0; c < this.grid[0].length; c++) {
                const p = Math.random();

                if (p < 0.33) {
                    this.ctx.fillStyle = this.pallete[0];
                } else if (p > 0.66) {
                    this.ctx.fillStyle = this.pallete[1];
                } else {
                    this.ctx.fillStyle = this.pallete[2];
                }

                if (this.grid[r][c]) {
                    this.ctx.fillRect(
                        c * this.cellSize,
                        r * this.cellSize,
                        this.cellSize,
                        this.cellSize,
                    );
                }
            }
        }
    }
}

export default CA;
