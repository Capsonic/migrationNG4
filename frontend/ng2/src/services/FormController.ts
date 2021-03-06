import { CRUDFactory } from './CRUDFactory';
import { IEntity } from './IEntity';
import { Observable } from 'rxjs/RX';

interface IConfigFormController {
	service: CRUDFactory;
}

export abstract class FormController {

	protected baseEntity: IEntity = { id: 0, editMode: false };

	constructor(private config: IConfigFormController) {
	}

 
	//Start Form Methods
	createInstance() {
		return this.config.service.createInstance().subscribe(oInstance => {
			this.baseEntity = oInstance;
			this.afterCreate();
			return this.baseEntity;
		});
	}

	load(oEntityOrID: any) {
		return this.refresh(oEntityOrID);
	}

	refresh(oEntityOrId: any) {
		switch (true) {
			case !oEntityOrId:
				this.createInstance();
				break;
			case oEntityOrId > 0:
				this.config.service.loadEntity(oEntityOrId)
					.subscribe(oResult => {
						this.baseEntity = oResult.Result
						this.afterLoad();
					});
				break;
			case oEntityOrId instanceof Object || typeof (oEntityOrId) == 'object':
				this.baseEntity = oEntityOrId;
				this.afterLoad();
				break;
			default:
				throw 'Invalid Form Init';
		}
	}

	remove() {
		this.config.service.remove().subscribe(this.afterRemove);
	}

	save() {
		if (this.baseEntity.editMode) {
			return this.config.service.save(this.baseEntity).subscribe(oEntity => {
				this.baseEntity = oEntity;
				this.afterSave();
			});
		}
		return Observable.empty();
	}

	undo() {
		this.baseEntity = this.config.service.getById(this.baseEntity.id);
	}
	//End Form Methods


	//Start Form Events
	on_input_change() {
		this.baseEntity.editMode = true;
	}
	//End Form Events

	//Start Hooks
	abstract afterLoad();

	abstract afterCreate();

	abstract afterSave();

	abstract afterRemove();
	//End Hooks
}