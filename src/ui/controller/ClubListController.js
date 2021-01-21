import ClubListView from '../view/ClubListView.js'
import routeUtill from '../../routes.js'


(async()=>{
    const clubListView = new ClubListView();

    await clubListView.init();
    clubListView.render();
    clubListView.addClickHandler(clubName => routeUtill.routeTo("club-Detail",clubName));
    clubListView.addClickHandler("btn_register",()=>routeUtill.routeTo("club-Register"));
})();