class TravelClub{

    constructor(name, intro){
        this.name = name;
        this.intro = intro;
        this.foundationTime = new Date();
        this.members = [];
    }

    static fromClubsJson(clubsJson){
        return clubsJson.map(clubjson => this.fromJson(clubjson));
    }

    static fromJson(json){
        
        const club = new TravelClub(json.name, json.intro);
        club.foundationTime = json.foundationTime;
        club.members = json.members;
        return club;
    }

    static sample(){
        //
        return new TravelClub("Jiri mountin", "welcome!!! plz check ~~");
    }

    get displayTime(){
        return this.foundationTime.replaceAll('-','.');
    }
}

export default TravelClub;