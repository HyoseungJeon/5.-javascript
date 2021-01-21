import ClubDetailView from '../view/ClubDetailView.js'
import routeUtill from '../../routes.js'
import pathUtill from '../util/PathUtil.js'

(async()=>{
    const utilid = pathUtill.getName();
    //console.log(id);
    console.log(utilid);
    const clubDetailView = new ClubDetailView();
    await clubDetailView.init(utilid);
    clubDetailView.render();
    clubDetailView.addClickHandler("btn_toList",()=>routeUtill.routeTo("club-List"));
    clubDetailView.addClickHandler("btn_toModify",clubName => routeUtill.routeTo("club-Modify",clubName));
    clubDetailView.addClickHandler("btn_Delete",()=>routeUtill.routeTo("club-List"));
})();
