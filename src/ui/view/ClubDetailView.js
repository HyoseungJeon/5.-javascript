import { clubStateKeeper } from '../../state/index.js';
import BaseView from './BaseView.js';

class ClubDetailView extends BaseView{

    _parent = document.getElementById('club-detail');
    _btn_toList = document.getElementById('btn_toList');
    _element;

    init(){
        //clubStateKeeper.findAllClubs();
        clubStateKeeper.findOne();
    }
    
    addClickHandler(parent, handler){
        this._element = document.getElementById(parent);
        switch(parent){
            case "btn_toList":
                this._element.addEventListener('click',event=>{
                    handler();
                });
                break;

            case "btn_toModify":
                this._element.addEventListener('click',event=>{
                    handler();
                });
                break;
            
            case "btn_Delete":
                this._element.addEventListener('click',event=>{
                    handler();
                });
                break;
        }
    }

    renderInline(club){
        return `
        <div class="content">
        <ul class="list-inline">
            <li><span class="title">창설일</span>${club.foundationTime}</li>
            <li><span class="title">회원수</span> ${club.members.length}
                <button class="btn btn-basic"><span class="glyphicon glyphicon-search"></span></button>
            </li>
        </ul>
    </div>
        `
    }

    renderBody(club){
        return `
        <div class="content-inner">
                            <p>
                                ${club.intro}
                            </p>
                        </div>
        `
    }

    renderContent(){
        //const {clubs} = clubStateKeeper;
        const {club} = clubStateKeeper;
        return `
        <div class="panel-body">
            ${this.renderInline(club)}
                <div class="content">
                <div class="title">소개</div>
            ${this.renderBody(club)}
            </div>
        </div>
        `
    }
}

export default ClubDetailView;