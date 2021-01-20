import { clubStateKeeper } from '../../state/index.js';
import ClubDetailView from '../view/ClubDetailView.js'
import routeUtill from '../../routes.js'

const clubDetailView = new ClubDetailView();

clubDetailView.init();
clubDetailView.render();
clubDetailView.addClickHandler("btn_toList",()=>routeUtill.routeTo("club-List"));
clubDetailView.addClickHandler("btn_toModify",()=>routeUtill.routeTo("club-Modify"));
clubDetailView.addClickHandler("btn_Delete",()=>routeUtill.routeTo("club-List"));
