import { clubStateKeeper } from '../../state/index.js';
import BaseView from './BaseView.js';

class ClubModifyView extends BaseView{

    _parent = document.getElementById('club-modify');
    _element;

    init(){
        clubStateKeeper.findOne();
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
                this._element.addEventListener('click',event=>{
                    handler();
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
                                        <input type="text" class="form-control" id="exampleInputName2" placeholder="" value=${club.foundationTime}>
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
                            <textarea class="form-control" rows="15">${club.intro}</textarea>
                        </div>
                    </div>
        `
    }

    renderContent(){
        //const {clubs} = clubStateKeeper;
        const {club} = clubStateKeeper;
        return `
        <div class="panel-body">
                    ${this.renderInline(club)}

                    ${this.renderBody(club)}
                </div>
        `
    }
}

export default ClubModifyView;