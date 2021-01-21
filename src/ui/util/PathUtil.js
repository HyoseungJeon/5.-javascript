
class PathUtill{

    static getName(){

        const url = window.location.href;

        const nameQueryString = url.split('?')[1];
        const name = nameQueryString.split('=')[1];

        return name;
    }
}

export default PathUtill;