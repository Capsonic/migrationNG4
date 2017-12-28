import { CRUDFactory } from './CRUDFactory';
import { IEntity } from './IEntity';
import { Observable } from 'rxjs/RX';

interface IConfigListController {
	service: CRUDFactory;
}

export abstract class ListController{

	protected baseEntity: IEntity = {id: 0, editMode: false};
	
	constructor(private config: IConfigListController) {
		
	}

	
    //Start List Methods
    
	removeItem(){
    }

    openItem(){
    }

    checkItem(){
    }

    removeSelected(){
    }

    pageChanged(){
    }

    saveItem(){
    }

    save(){
    }

    undoItem(){
    }

    refresh(){
    }

    getSelectedCount(){
    }

    unSelectAll(){
    }

    selectAll(){
    }

    getSelected(){
    }
    
    setFilterOptions(){
    }

    persistFilter(){
    }
    
    load(){
    }
    
    makeQueryParameters(){
    }
    
    updateList(){
    }

    clearFilters(){
    }

	//End List Methods

	

	//Start List Events
	on_input_change() {
		this.baseEntity.editMode = true;
	}
	//End List Events


	//Start Hooks
	abstract afterLoad();

	abstract onOpenItem();

	abstract afterRemove();

	abstract afterCreate();
	//End Hooks



}