// Data storege?

import { TravelClub } from '../../model/index.js'

//const { TravelClub } = require("../../model");

class ClubStateKeeper {


    constructor() {
        this.clubs = [];
    }

    findOne(){
        this.club = TravelClub.sample();
    }

    findOne(clubName){
        this.club = TravelClub.sample();
    }

    findAllClubs() {
        this.clubs = [TravelClub.sample()];
    }

    modify(club){

    }

    remove(clubName){

    }
}

export default new ClubStateKeeper();