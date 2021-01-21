import { TravelClub } from '../../model/index.js';
import { clubStateKeeper } from '../../state/index.js';
import BaseView from './BaseView.js';

class ClubModifyView extends BaseView{

    _parent = document.getElementById('club-modify');
    _element;
    _clubId;
    _club;

    async init(utilid){
        await clubStateKeeper.findOne(utilid);
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

    addClickHandler(parent, handler){
        this._element = document.getElementById(parent);
        switch(parent){
            case "btn_toList":
                this._element.addEventListener('click',event=>{
                    handler();
                });
                break;
            
            case "btn_Complet":
                this._element.addEventListener('click',async event=>{
                    const time = document.getElementById("club_time").value;
                    const intro = document.getElementById("club_intro").value;
                    this._club.foundationTime = time;
                    this._club.intro = intro;
                    
                    await clubStateKeeper.modify(this._club);
                    handler(this._clubId);
                });
                break;
        }
    }

    renderInline(club){
        return `
        <div class="content">
                        <form class="form-inline">
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="form-group">
                                        <label for="exampleInputName2" class="title">창설일</label>
                                        <input type="text" class="form-control" id="club_time" placeholder="" value=${club.foundationTime}>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="form-group">
                                        <label for="exampleInputName2" class="title">회원수</label>
                                        <p>${club.members.length}</p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
        `
    }

    renderBody(club){
        return `
        <div class="content">
                <div class="title">소개</div>
                    <div class="content-inner">
                        <textarea id="club_intro" class="form-control" rows="15">${club.intro}</textarea>
            </div>
        </div>
        `
    }

    renderContent(){
        //const {clubs} = clubStateKeeper;
        const {club} = clubStateKeeper;
        this._clubId=club.id;
        this._club=club;
        return `
        <div class="panel-body">
                    ${this.renderInline(club)}

                    ${this.renderBody(club)}
                </div>
        `
    }
}

export default ClubModifyView;