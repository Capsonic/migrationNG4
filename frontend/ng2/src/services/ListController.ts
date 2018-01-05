import { CRUDFactory } from './CRUDFactory';
import { IEntity } from './IEntity';
import alertify from 'alertifyjs';
import { ModalController } from 'ionic-angular';
import { UserFormComponent } from '../components/user-form/user-form-component';

interface IConfigListController {
    service: CRUDFactory;
}

export abstract class ListController {

    protected baseList: Array<IEntity>;

    constructor(public config: IConfigListController, public modal: ModalController) {
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

    openItem(user) {
        let profileModal = this.modal.create(UserFormComponent, { oEntityOrId: user.id });
        profileModal.dismiss(false);
        profileModal.present();

        profileModal.onDidDismiss(data => {
            this.load();
        });
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

    abstract onOpenItem();

    abstract afterRemove();

    abstract afterCreate();
    //End Hooks
}