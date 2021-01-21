import ClubModifyView from '../view/ClubModifyView.js'
import routeUtill from '../../routes.js'
import pathUtill from '../util/PathUtil.js'

const clubModifyView = new ClubModifyView();


(async()=>{
    const utilid = pathUtill.getName();

    await clubModifyView.init(utilid);
    clubModifyView.render();
    clubModifyView.addClickHandler("btn_toList",()=>routeUtill.routeTo("club-List"));
    clubModifyView.addClickHandler("btn_Complet",clubName => routeUtill.routeTo("club-Detail",clubName));
})();