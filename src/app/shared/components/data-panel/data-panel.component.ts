///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormArray } from '@angular/forms';

import { DialogService, DialogRef, DialogAction } from '@progress/kendo-angular-dialog';

import { CollectionDataService } from '@src/app/core/data/collection-data.service';

@Component({
    selector: 'ks-data-panel',
    templateUrl: './data-panel.component.html',
})
export class KsDataPanelComponent implements OnInit {
    private _model: any;

    @Input() public config: any;

    @Input() set model(value: any) {
        this._model = value;
        this.editDataModel = { ...this._model };
    }

    get model() {
        return this._model;
    }

    @Input() public dataService: CollectionDataService<any>;
    @Input() public canEdit: boolean;

    @Output() public insert: EventEmitter<any> = new EventEmitter();
    @Output() public save: EventEmitter<any> = new EventEmitter();
    @Output() public remove: EventEmitter<any> = new EventEmitter();
    @Output() public cancel: EventEmitter<any> = new EventEmitter();

    public viewFormArray: FormArray = new FormArray([]);
    public insertInProcess: boolean;
    public updateInProcess: boolean;
    public editDataModel: any;

    constructor(private dialogService: DialogService, private cdr: ChangeDetectorRef) {
    }

    public ngOnInit(): void {
    }

    public onEdit() {
        this.updateInProcess = true;
        this.cdr.detectChanges();
    }

    public onSave(): void {
        this.dataService.save(this.editDataModel).then(() => {
            this.closeEditing();
            this.save.emit();
        });
    }

    public onCancel(): void {
        const cancelState = {
            insertInProcess: this.insertInProcess,
            updateInProcess: this.updateInProcess
        };

        this.closeEditing();
        this.cancel.emit(cancelState);
    }

    public onInsert(): void {
        this.insertInProcess = true;
        this.updateInProcess = false;
        this.editDataModel = this.dataService.createModel();
        this.insert.emit();
    }

    public onDelete(): void {
        if (this.config.confirmDelete) {
            const dialog = this.showDeleteConfirmation();

            dialog.result.subscribe((result: DialogAction) => {
                if (result.primary) {
                    this.deleteAction();
                }
            });
        } else {
            this.deleteAction();
        }
    }

    public showDeleteConfirmation(): DialogRef {
        return this.dialogService.open({
            title: 'Confirm delete',
            content: 'Are you sure you want to delete this record?',
            actions: [
                { text: 'No' },
                { text: 'Yes', primary: true }
            ],
            width: 450,
            height: 200,
            minWidth: 250
        });
    }

    protected deleteAction() {
        this.dataService.remove(this._model).then(() => {
            this.closeEditing();
            this.remove.emit();
        });
    }

    protected closeEditing() {
        this.updateInProcess = this.insertInProcess = false;
    }
}
