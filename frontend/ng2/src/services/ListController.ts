import { CRUDFactory } from './CRUDFactory';
import { IEntity } from './IEntity';
import alertify from 'alertifyjs';
import { ModalController } from 'ionic-angular';
import { UserFormComponent } from '../components/user-form/user-form-component';

interface IConfigListController {
    service: CRUDFactory;
    paginate?: boolean;
    limit?: number;
    filters?: any;
}

export abstract class ListController {

    protected baseList: Array<IEntity>;

    constructor(public config: IConfigListController) {
    }

    //Start List Methods
    clearFilters() {
    }

    checkItem() {
    }

    createInstance() {
    }

    getSelected() {
    }

    getSelectedCount() {
    }

    load() {
        this.config.service.loadEntities().subscribe(oResult => {
            this.baseList = oResult.Result;
        });
    }

    makeQueryParameters() {
    }

    openItem(oEntity) {
        var theArguments = Array.prototype.slice.call(arguments);
        this.onOpenItem.apply(this, theArguments);

        // let profileModal = this.modal.create(UserFormComponent, { oEntityOrId: user.id });
        // profileModal.dismiss(false);
        // profileModal.present();
        // profileModal.onDidDismiss(data => {
        //     this.load();
        // });
    }

    pageChanged() {
    }

    persistFilter() {
    }

    refresh() {
    }

    removeItem(user) {
        let self = this;
        alertify.confirm('Are you sure you want to delete this user ' + user.Value + ' ?',
            function () {
                self.config.service.removeEntity(user, user.UserKey).subscribe(results => {
                    alertify.success('User succesfully deleted');
                    self.afterRemove();
                }
                );
            },
            function () {
                alertify.error('Cancel');
            });

    }

    removeSelected() {
    }

    selectAll() {
    }

    setFilterOptions() {
        console.log('ListController > setFilterOptions');
        this.load();
    }

    saveItem() {
    }

    save() {
    }

    undoItem() {
    }

    updateList() {
    }

    unSelectAll() {
    }
    //End List Methods


    //Start List Events
    on_input_change(oItem: IEntity) {
        oItem.editMode = true;
    }
    //End List Events


    //Start Hooks
    abstract afterLoad();

    abstract onOpenItem(oEntity);

    abstract afterRemove();

    abstract afterCreate();
    //End Hooks
}