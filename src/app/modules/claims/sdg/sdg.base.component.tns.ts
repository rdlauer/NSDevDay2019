///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, OnInit, Injector } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataServiceFactory } from '@src/app/core/data/data-service.factory';
import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { EntityDataService } from '@src/app/core/data/entity-data.service';
import { EntityState } from '@src/app/core/data/state/entity-state.interface';
import { Claim } from '@src/app/data/claim.model';
import { getClaimConfig } from '@src/app/data/claim.config';

@Component({
    templateUrl: './sdg.component.html',
    styleUrls: ['./sdg.component.css']
})
export class SdgViewBaseComponent implements OnInit {
    public $config: any = {};

    public $viewDataSource1Service: EntityDataService<Claim>;

    protected $route: ActivatedRoute;
    protected $serviceFactory: DataServiceFactory;

    constructor(public injector: Injector) {
        this.$route = injector.get(ActivatedRoute);
        this.$serviceFactory = injector.get(DataServiceFactory);

        const dataConfig = {
            viewDataSource1: getClaimConfig()
        };

        this.initDataServices(dataConfig);
    }

    public ngOnInit(): void {}

    protected initDataServices(dataConfig: { [key: string]: KinveyServiceConfig }) {
        // TODO: consider moving this functionality to separate service
        const routeParamStateChanges: Observable<EntityState> = this.$route.paramMap.pipe(
            map((params: ParamMap) => ({ id: params.get('id') }))
        );

        this.$viewDataSource1Service = this.$serviceFactory.entity<Claim>(dataConfig.viewDataSource1);
        this.$viewDataSource1Service.dataState.onChanges(routeParamStateChanges);
    }
}
