// Data storege?

import { TravelClub } from '../../model/index.js' //naming이 된 거는 {}로 가져온다.
import clubApiStub from '../apiclient/ClubApiStub.js'

//const { TravelClub } = require("../../model");



class ClubStateKeeper {

    constructor() {
        this.club = {};
        this.clubs = [];
    }

    findOne(){
        this.club = TravelClub.sample();
    }

    async findOne(id){
        this.club = await clubApiStub.retrieveClub(id);
    }

    async findAllClubs() {
        this.clubs = await clubApiStub.retrieveAllClubs();
    }

    async modify(club){
        await clubApiStub.modifyClub(club);
    }

    async remove(id){
        await clubApiStub.deleteClub(id);
    }

    async create(club){
        await clubApiStub.registerClub(club);
    }
}

export default new ClubStateKeeper();