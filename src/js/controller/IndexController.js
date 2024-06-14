import Index from "../view/Index/Index";

class IndexController{
    constructor(){}

    renderIndexView(){
        Index.startView();
    }
}

export default new IndexController;