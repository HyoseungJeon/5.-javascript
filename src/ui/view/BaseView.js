
class BaseView{
    render(){
        const content = this.renderContent();

        //this.clear();
        this._parent.insertAdjacentHTML('afterbegin',content);
    }

    clear(){
        
        this._parent.innerHTML = '';
    }
}

export default BaseView;