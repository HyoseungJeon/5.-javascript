import ClubReigsterView from '../view/ClubReigsterView.js'
import routeUtill from '../../routes.js'

const clubReigsterView = new ClubReigsterView();

(async() => {
    clubReigsterView.init();
    clubReigsterView.render();
    clubReigsterView.addClickHandler("btn_register",()=>routeUtill.routeTo("club-List"));
})();