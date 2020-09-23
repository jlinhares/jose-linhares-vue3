
export default {
    interval$: null,
    currentGrid: null,
    playing: false,
    currentCode: null,
    currentChar: '',

    _isPlaying: false,

    get isPlaying() {
        return this._isPlaying;
    },
        
    get grid() {
        if (this.currentGrid) {
          return this.currentGrid.slice(); // return a copy
        }
        return null;
    },
    
    get code() {
        return this.currentCode;
    },
    
    get character() {
        return this.currentChar;
    },
    
    set character(v) {
        this.currentChar = v;
    },

    start() {
        this._generate();
        // this.$emit('gridChange', this.currentGrid);
        this.$eventbus.emit('grid-change'); 
        this.interval$ = setInterval(() => {
            this._generate();
            // this.$emit('gridChange', this.currentGrid);
            this.$eventbus.emit('grid-change');
        }, 2000);
        this._isPlaying = true;
    },
    stop() {
        clearInterval(this.interval$);
        this._isPlaying = false;
    },

    _getCode() {
        const seconds = (new Date()).getSeconds();
        let ny = seconds % 10;
        let nx = (seconds - ny) / 10;
        let code = this._getCodeValue(nx, ny) * 10;
        [nx, ny] = [ny, nx];
        code += this._getCodeValue(nx, ny);
        return code;
    },

    _getCodeValue (x, y) {
        const c = this.currentGrid[y * 10 + x];
        const count = this.currentGrid.filter(i =>  i === c).length;
        let ret = count;
        if (count > 9) {
            for (let i = 2; i < 9; i ++ ) {
                if (Math.round(count / i) <= 9 ){
                    ret = Math.round(count / i);
                    break;
                }
            }
        }
        return ret;
    },

    _generate(){
        
        const a  = new Array(100).fill('');
        let counter = 0;
        this.currentGrid = a.map((v, i) => {
            if (this.currentChar && this.currentChar !== '' && this.currentChar.length === 1) {
                if (20 - counter === 100 - i ) {
                    counter++;
                    return this.currentChar;
                } else {
                    if (counter < 20 && Math.round(Math.random() - 0.25)) {  // 0.25 evita concentração excessiva no ínicio
                        counter++;
                        return this.currentChar;
                    }
                }
            }
            return String.fromCharCode(Math.round(Math.random() * (122 - 97) + 97));
        });
        this.currentCode = this._getCode();
    }

}
