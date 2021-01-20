import ClubListView from '../view/ClubListView.js'
import routeUtill from '../../routes.js'

const clubListView = new ClubListView();

clubListView.init();
clubListView.render();
clubListView.addClickHandler(clubName => routeUtill.routeTo("club-Detail"));