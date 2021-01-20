
export const page = {
    index:'index',
    clubList: 'club-List',
    clubDetail: 'club-Detail',
    clubModify: 'club-Modify'
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
                targetUrl = `${baseUrl}club-detail.html`;
                break;
            case page.clubModify:
                targetUrl = `${baseUrl}club-modify.html`;
                break; 
        }
        console.log(targetUrl);
        window.location.href = targetUrl;
    }
}

export default routeUtill;