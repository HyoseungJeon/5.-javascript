import { TravelClub } from "../../model/index.js";


class ClubApiStub{

    baseUrl = "http://localhost:3000/clubs/";

    retrieveAllClubs(){
        return fetch(this.baseUrl)
        .then(response => response.json())
        .then(clubsJson => TravelClub.fromClubsJson(clubsJson));
    }

    retrieveClub(id){
        return fetch(`${this.baseUrl}${id}`)
        .then(response=>response.json());
    }

    modifyClub(club){
        return fetch(`${this.baseUrl}${club.name}`,{
            method: 'PUT',
            headers:{
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(club)
        }).then(response => response.json());
    }

    deleteClub(id){
        return fetch(`${this.baseUrl}${id}`,{
            method: 'DELETE'
        }).then(response => response.json());
    }

    registerClub(club){
        return fetch(`${this.baseUrl}`,{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(club)
        }).then(response => response.json());
    }
}

export default new ClubApiStub();