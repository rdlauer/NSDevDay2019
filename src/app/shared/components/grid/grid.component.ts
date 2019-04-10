///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, ContentChild, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormArray } from '@angular/forms';

import { GridComponent, DataStateChangeEvent, SelectionEvent } from '@progress/kendo-angular-grid';
import { State } from '@progress/kendo-data-query';
import { DialogService, DialogRef, DialogAction } from '@progress/kendo-angular-dialog';

import { CollectionDataService } from '@src/app/core/data/collection-data.service';

const EDIT_MODE_READ_ONLY = 'ReadOnly';
const EDIT_MODE_INLINE = 'Inline';
const EDIT_MODE_POPUP = 'Popup';

@Component({
    selector: 'ks-grid',
    templateUrl: './grid.component.html',
})
export class KsGridComponent implements OnInit {
    @ContentChild(GridComponent) public kendoGrid: GridComponent;

    @Input() public config: any;
    @Input() public state: State = {};
    @Input() public dataService: CollectionDataService<any>;
    @Input() get model(): any {
        return this._model;
    }
    set model(value: any) {
        this._model = value;
        this.modelChange.emit(value);
    }

    @Output() public add: EventEmitter<any> = new EventEmitter();
    @Output() public edit: EventEmitter<any> = new EventEmitter();
    @Output() public remove: EventEmitter<any> = new EventEmitter();
    @Output() public cellClick: EventEmitter<any> = new EventEmitter();
    @Output() public cellClose: EventEmitter<any> = new EventEmitter();
    @Output() public modelChange: EventEmitter<any> = new EventEmitter();

    public viewFormArray: FormArray = new FormArray([]);
    public isNew: boolean;
    public popupActive = false;
    public editDataModel: any;
    public selectedKeys: number[] = [];

    private editedRowIndex: number;
    private originalItem: any;
    private _model: any;

    constructor(public dialogService: DialogService) { }

    public ngOnInit(): void { }

    public selectionChange(e: SelectionEvent): void {
        if (e.selectedRows.length) {
            this.model = e.selectedRows[0].dataItem;
        } else {
            this.model = {};
        }

        if (this.config.events && this.config.events.onRowSelect) {
            this.config.events.onRowSelect(e);
        }
    }

    public dataStateChange(gridState: DataStateChangeEvent): void {
        this.dataService.dataState.update(gridState);
    }

    public detailExpandHandler(e): void {
        if (this.config.events && this.config.events.onDetailExpand) {
            this.config.events.onDetailExpand(e);
        }
    }

    public detailCollapseHandler(e): void {
        if (this.config.events && this.config.events.onDetailCollapse) {
            this.config.events.onDetailCollapse(e);
        }
    }

    public addHandler(e) {
        const { sender } = e;
        this.isNew = true;
        this.editDataModel = this.dataService.createModel();
        this.add.emit();
        if (this.config.events && this.config.events.onRowCreate) {
            this.config.events.onRowCreate(e);
        }

        this.viewFormArray = new FormArray([]);

        switch (this.config.editing.mode) {
            case EDIT_MODE_INLINE:
                this.closeEditor(sender);
                sender.addRow(this.viewFormArray);
                break;

            case EDIT_MODE_POPUP:
                this.popupActive = true;
                break;

            default:
                break;
        }
    }

    public editHandler(e) {
        const { sender, rowIndex, dataItem } = e;
        this.originalItem = Object.assign({}, dataItem);
        this.editDataModel = dataItem;
        this.isNew = false;
        this.edit.emit();
        if (this.config.events && this.config.events.onRowUpdate) {
            this.config.events.onRowUpdate(e);
        }

        this.viewFormArray = new FormArray([]);

        switch (this.config.editing.mode) {
            case EDIT_MODE_INLINE:
                this.closeEditor(sender);
                this.editedRowIndex = rowIndex;
                sender.editRow(rowIndex, this.viewFormArray);
                break;

            case EDIT_MODE_POPUP:
                this.popupActive = true;
                break;

            default:
                break;
        }
    }

    public cancelHandler({ sender, rowIndex }) {
        Object.assign(this.editDataModel, this.originalItem);
        this.closeEditor(sender, rowIndex);
    }

    public saveHandler({ sender, rowIndex, formGroup, isNew }) {
        switch (this.config.editing.mode) {
            case EDIT_MODE_INLINE:
                this.dataService.save(this.editDataModel);
                sender.closeRow(rowIndex);
                break;

            case EDIT_MODE_POPUP:
                this.dataService.save(this.editDataModel);
                this.popupActive = false;
                break;

            default:
                break;
        }

    }

    public removeHandler(e) {
        const { sender, dataItem } = e;
        if (this.config.events && this.config.events.onRowDelete) {
            this.config.events.onRowDelete(e);
        }

        if (this.config.confirmDelete) {
            const dialog = this.showDeleteConfirmation();

            dialog.result.subscribe((result: DialogAction) => {
                if (result.primary) {
                    this.removeAction(sender, dataItem);
                }
            });
        } else {
            this.removeAction(sender, dataItem);
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

    protected removeAction(sender, dataItem) {
        this.remove.emit();
        this.dataService.remove(dataItem);
    }

    private closeEditor(grid, rowIndex = this.editedRowIndex) {
        switch (this.config.editing.mode) {
            case EDIT_MODE_INLINE:
                grid.closeRow(rowIndex);
                this.editedRowIndex = undefined;
                break;

            case EDIT_MODE_POPUP:
                this.popupActive = false;
                break;

            default:
                break;
        }
    }
}
