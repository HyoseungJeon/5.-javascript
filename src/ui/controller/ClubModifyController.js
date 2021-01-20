import ClubModifyView from '../view/ClubModifyView.js'
import routeUtill from '../../routes.js'

const clubModifyView = new ClubModifyView();

clubModifyView.init();
clubModifyView.render();
clubModifyView.addClickHandler("btn_toList",()=>routeUtill.routeTo("club-List"));
clubModifyView.addClickHandler("btn_Complet",()=>routeUtill.routeTo("club-Detail"));