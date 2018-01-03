import { CRUDFactory } from './CRUDFactory';
import { IEntity } from './IEntity';
import alertify from 'alertifyjs';

interface IConfigListController {
    service: CRUDFactory;
}

export abstract class ListController {

    protected baseList: Array<IEntity>;

    constructor(private config: IConfigListController) {
    }

    //Start List Methods
    createInstance(){

    }
    
    removeItem(user) {
        // this.config.service.removeSelected(user, user.UserKey).subscribe(results => {            
            alertify.success('User succesfully removed');
            this.afterRemove();
        // });
    }

    openItem() {
    }

    checkItem() {
    }

    removeSelected() {
    }

    pageChanged() {
    }

    saveItem() {
    }

    save() {
    }

    undoItem() {
    }

    refresh() {
    }

    getSelectedCount() {
    }

    unSelectAll() {
    }

    selectAll() {
    }

    getSelected() {
    }

    setFilterOptions() {
    }

    persistFilter() {
    }

    load() {
        this.config.service.loadEntities().subscribe(oResult => {
            this.baseList = oResult.Result;
        });
    }

    makeQueryParameters() {
    }

    updateList() {
    }

    clearFilters() {
    }
    //End List Methods


    //Start List Events
    on_input_change(oItem: IEntity) {
        oItem.editMode = true;
    }
    //End List Events


    //Start Hooks
    abstract afterLoad();

    abstract onOpenItem();

    abstract afterRemove();

    abstract afterCreate();
    //End Hooks
}