import { clubStateKeeper } from '../../state/index.js';
import BaseView from './BaseView.js';

class ClubListView extends BaseView{

    _parent = document.getElementById('club-list');

    init(){
        clubStateKeeper.findAllClubs();
    }

    addClickHandler(handler){
        this._parent.addEventListener('click', event => {
            const row = event.target.closest('tr');

            if (!row){
                return;
            }

            const clubName = row.dataset.name;
            console.log(clubName);
            handler(clubName);
        });
    }

    renderHeader(){
        return `
        <tr>
        <th class="text-center">No</th>
        <th class="text-center">클럽명</th>
        <th class="text-center">창설일</th>
        <th class="text-center">회원수</th>
        </tr>
        `;
    }

    renderRow(club, index){
        return `
            <tr data-name="${club.name}>
                <th scope="row" class="text-center">${index}</th>
                <td>${club.name}</td>
                <td>${club.foundationTime}</td>
                <td>${club.members.length}</td>
            </tr>
        `
    }
    renderContent(){
        //const clubs = ClubStateKeeper.clubs;
        const {clubs} = clubStateKeeper;

        //const sampleText = `club name: ${}`
        return `<table class="table text-center">
        <thead>
            ${this.renderHeader()}
        </thead>
        <tbody>
        ${clubs.map((club, index) => this.renderRow(club, index))}
        </tbody>
    </table>`
    }
}

export default ClubListView;