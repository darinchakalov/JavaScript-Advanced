class Challenge {
    constructor(id, level) {
        this.id = id;
        this.level = level;
    }
    points() {
        switch (this.level) {
            case "VE":
                return 5;
                break;
            case "EA":
                break;
            case "ME":
                break;
            case "HA":
                break;
            case "VH":
                break;
            case "EX":
                break;
        }
    }
}
