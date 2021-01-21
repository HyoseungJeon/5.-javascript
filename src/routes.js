
const clubPage = {
    index:'index',
    clubList: 'club-List',
    clubDetail: 'club-Detail',
    clubModify: 'club-Modify',
    clubRegister: 'club-Register'
}
const memberPage ={
    
}

export const page = {
    ...clubPage,
    ...memberPage
}

class routeUtill{

    static routeTo(pageName, queryString){
        const baseUrl = '/public/html/';
        let targetUrl;

        switch(pageName){
            case page.index:
            case page.clubList:
                targetUrl = `${baseUrl}club-list.html`;
                break;
            case page.clubDetail:
                targetUrl = `${baseUrl}club-detail.html?name=${queryString}`;
                break;
            case page.clubModify:
                targetUrl = `${baseUrl}club-modify.html?name=${queryString}`;
                break;
            case page.clubRegister:
                targetUrl = `${baseUrl}club-register.html`;
                break;
        }
        console.log(targetUrl);
        window.location.href = targetUrl;
    }
}

export default routeUtill;