import { CRUDFactory } from './CRUDFactory';
import { IEntity } from './IEntity';
import { Observable } from 'rxjs/RX';

interface IConfigFormController {
	service: CRUDFactory;
}

export abstract class FormController{

	protected baseEntity: IEntity = {id: 0, editMode: false};
	
	constructor(private config: IConfigFormController) {
		
	}

	
	//Start Form Methods
	remove() {
		this.config.service.remove()
			.subscribe(this.afterRemove);
	}

	createInstance() {
		return this.config.service.createInstance()
			.subscribe(oInstance => {
					//TODO: clone
					this.baseEntity = oInstance;
					this.afterCreate();
				});
			
	}

	save() {

		if(this.baseEntity.editMode) {
			return this.config.service.save(this.baseEntity)
				.subscribe(oEntity => {
						this.baseEntity = oEntity;
					});
		}

		return Observable.empty();
	}

	undo() {
		//Todo: retrieve copy instead of reference.
		this.baseEntity = this.config.service.getById(this.baseEntity.id);
	}

	load(oEntityOrID: any) {
		this.refresh(oEntityOrID);
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
					});
				break;
			case oEntityOrId instanceof Object || typeof(oEntityOrId) == 'object':
				//TODO: Clone object instead of copy reference.
				this.baseEntity = oEntityOrId;
				this.afterLoad();
				break;
			default:
				throw 'Invalid Form Init';
		}
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

	abstract afterRemove();
	//End Hooks



}