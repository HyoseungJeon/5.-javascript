class TravelClub{

    constructor(name, intro){
        this.name = name;
        this.intro = intro;
        this.foundationTime = new Date();
        this.members = [];
    }

    static sample(){
        //
        return new TravelClub("Jiri mountin", "welcome!!! plz check ~~");
    }
}

export default TravelClub;