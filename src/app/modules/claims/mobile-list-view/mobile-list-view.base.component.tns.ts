///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Injector, OnInit } from '@angular/core';

import { DataServiceFactory } from '@src/app/core/data/data-service.factory';
import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { CollectionDataService } from '@src/app/core/data/collection-data.service';
import { CollectionState } from '@src/app/core/data/state/collection-state.interface';
import { Claim } from '@src/app/data/claim.model';
import { getClaimConfig } from '@src/app/data/claim.config';

@Component({
    templateUrl: './mobile-list-view.component.html',
    styleUrls: ['./mobile-list-view.component.css']
})
export class MobileListViewViewBaseComponent implements OnInit {
    public $config: any = {
        listView: {
            navigateOnItemTap: {
                module: 'claims',
                parameter: '',
                view: 'mobile-list-view-form'
            }
        }
    };

    public $claimsService: CollectionDataService<Claim>;

    protected $serviceFactory: DataServiceFactory;

    constructor(public injector: Injector) {
        this.$serviceFactory = injector.get(DataServiceFactory);

        const dataConfig = {
            claims: getClaimConfig()
        };

        this.initDataServices(dataConfig);
    }

    ngOnInit(): void {}

    protected initDataServices(dataConfig: { [key: string]: KinveyServiceConfig }) {
        this.$claimsService = this.$serviceFactory.collection<Claim>(dataConfig.claims, {
            skip: 0,
            take: 20
        });
    }
}
