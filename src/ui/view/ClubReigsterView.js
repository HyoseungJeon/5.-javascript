import { clubStateKeeper } from '../../state/index.js';
import BaseView from './BaseView.js';
import { TravelClub } from '../../model/index.js'

class ClubReigsterView extends BaseView{
    _parent = document.getElementById('club-reigster');
    _element;
    _club;

    init(){
    }

    addClickHandler(parent, handler){
        this._element = document.getElementById(parent);
        switch(parent){
            case "btn_register":{
                this._element.addEventListener('click',async event=>{
                    const name = document.getElementById("club_name").value;
                    const intro = document.getElementById("club_intro").value;
                    console.log(name);
                    this._club = new TravelClub(name, intro);
                    console.log(this._club.name);
                    debugger;
                    await clubStateKeeper.create(this._club);
                    handler();
                });
                break;
            }
        }
    }

    renderContent(){
        //const {clubs} = clubStateKeeper;
        return `
        <div class="panel-body">
        <div class="content">
            <form class="form-horizontal">
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">클럽 이름</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="club_name" placeholder="클럽 이름"></input>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">소개</label>
                    <div class="col-sm-10">
                        <textarea id="club_intro" class="form-control" rows="15" placeholder="내용을 입력해주세요"></textarea>
                    </div>
                </div>
            </form>
        </div>
    </div>
        `
    }
}

export default ClubReigsterView;