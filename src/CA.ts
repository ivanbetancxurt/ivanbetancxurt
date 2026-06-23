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

        for (let r = rMid - 25; r <= rMid + 25; r++) {
            for (let c = cMid - 25; c <= cMid + 25; c++) {
                if (Math.random() > 0.5) {
                    this.grid[r][c] = true;
                }
            }
        }
    }

    mod(x: number, y: number) {
        return ((x % y) + y) % y;
    }

    hlUpdate() {
        const next = Array.from({ length: this.rows }, () => Array(this.cols).fill(false));

        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                const neighbors = this.getNeighbors(r, c);

                if (this.grid[r][c]) {
                    if (neighbors !== 2 && neighbors !== 3) {
                        next[r][c] = false;
                    } else {
                        next[r][c] = true;
                    }
                } else {
                    if (neighbors === 3 || neighbors === 6) {
                        next[r][c] = true;
                    }    
                }
            }
        }

        this.grid = next;
    }
    
    golUpdate() {
        const next = Array.from({ length: this.rows }, () => Array(this.cols).fill(false));

        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                const neighbors = this.getNeighbors(r, c);

                if (this.grid[r][c]) {
                    if (neighbors !== 2 && neighbors !== 3) {
                        next[r][c] = false;
                    } else {
                        next[r][c] = true;
                    }
                } else {
                    if (neighbors === 3) {
                        next[r][c] = true;
                    }
                }
            }
        }

        this.grid = next;
    }

    getNeighbors(row, col) {
        let neighbors: number = 0;

        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                if (dr === 0 && dc === 0) {
                    continue;
                }
                neighbors += Number(
                    this.grid[this.mod(row + dr, this.rows)][
                    this.mod(col + dc, this.cols)
                    ],
                );
            }
        }

        return neighbors;
    }

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
