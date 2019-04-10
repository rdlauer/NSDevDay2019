///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Injector, ViewChild, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

import { KsGridComponent } from '@src/app/shared/components/grid/grid.component';
import { DataServiceFactory } from '@src/app/core/data/data-service.factory';
import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { CollectionDataService } from '@src/app/core/data/collection-data.service';
import { CollectionState } from '@src/app/core/data/state/collection-state.interface';
import { Claim } from '@src/app/data/claim.model';
import { getClaimConfig } from '@src/app/data/claim.config';
import { ErrorHandlingService } from '@src/app/core/error-handling.service';

@Component({
    templateUrl: './claims-grid.component.html',
    styleUrls: ['./claims-grid.component.css']
})
export class ClaimsGridViewBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('grid')
    public $grid: KsGridComponent;

    public $config: any = {
        title: '&lt;Title&gt;',
        titleKey: 'modules.Claims.views.ClaimsGrid.title',
        components: {
            grid: {
                filterable: false,
                groupable: false,
                pageable: true,
                reorderable: false,
                resizable: false,
                sortable: false,
                commandColumnWidth: 220,
                editing: {
                    mode: 'ReadOnly'
                },
                confirmDelete: true,
                events: {
                    onRowSelect: e => {
                        this['onRowSelect'](e);
                    }
                }
            }
        }
    };

    public $claimsService: CollectionDataService<Claim>;

    public $dataModels: any = {
        ClaimsModel: {}
    };

    protected $serviceFactory: DataServiceFactory;
    protected $errorHandlingService: ErrorHandlingService;

    constructor(public injector: Injector) {
        this.$serviceFactory = injector.get(DataServiceFactory);
        this.$errorHandlingService = injector.get(ErrorHandlingService);

        const dataConfig = {
            claims: getClaimConfig()
        };

        this.initDataServices(dataConfig);
    }

    public ngOnInit(): void {
        this['onInit']();
    }

    public ngAfterViewInit(): void {
        this['onShow']();
    }

    public ngOnDestroy(): void {
        this['onHide']();
    }

    protected initDataServices(dataConfig: { [key: string]: KinveyServiceConfig }) {
        this.$claimsService = this.$serviceFactory.collection<Claim>(dataConfig.claims, {
            skip: 0,
            take: 20
        });

        this.$errorHandlingService.subscribe(this.$claimsService.errors);
    }
}
