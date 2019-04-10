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

import { FormGroup } from '@angular/forms';

@Component({
    templateUrl: './mobile-list-view-form.component.html',
    styleUrls: ['./mobile-list-view-form.component.css']
})
export class MobileListViewFormViewBaseComponent implements OnInit {
    public $config: any = {};

    public $claimsFormService: EntityDataService<Claim>;

    protected $route: ActivatedRoute;
    protected $serviceFactory: DataServiceFactory;

    public ClaimsFormFormGroup: FormGroup;

    constructor(public injector: Injector) {
        this.$route = injector.get(ActivatedRoute);
        this.$serviceFactory = injector.get(DataServiceFactory);

        const dataConfig = {
            claimsForm: getClaimConfig()
        };

        this.initDataServices(dataConfig);
        this.ClaimsFormFormGroup = new FormGroup({});
    }

    public ngOnInit(): void {}

    protected initDataServices(dataConfig: { [key: string]: KinveyServiceConfig }) {
        // TODO: consider moving this functionality to separate service
        const routeParamStateChanges: Observable<EntityState> = this.$route.paramMap.pipe(
            map((params: ParamMap) => ({ id: params.get('id') }))
        );

        this.$claimsFormService = this.$serviceFactory.entity<Claim>(dataConfig.claimsForm);
        this.$claimsFormService.dataState.onChanges(routeParamStateChanges);
    }
}
