///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, OnInit, AfterViewInit, OnDestroy, Injector } from '@angular/core';

import { AuthorizationService } from '@src/app/core/auth/authorization.service';
import { TranslationsProvider } from '@src/app/core/translations.provider';
import { DataServiceFactory } from '@src/app/core/data/data-service.factory';
import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { ErrorHandlingService } from '@src/app/core/error-handling.service';

@Component({
    templateUrl: './app-layout.component.html',
    styleUrls: ['./app-layout.component.css']
})
export class AppLayoutViewBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    public $config: any = {
        components: {
            image0: {
                navigateUrl: '/',
                alt: ''
            },
            languagesDdl: {
                data: this.getLanguages(),
                textField: 'label',
                valueField: 'key'
            },
            userdropdown0: {},
            navigationpanelbar0: {}
        }
    };

    public $authorizationService: AuthorizationService;
    public $navigationData = [
        {
            title: 'Claims',
            titleKey: 'modules.Claims.label',
            thumbnail: {
                background: '#00a2e8',
                color: '#ffffff',
                icon: 'fa-area-chart'
            },
            authorization: {
                allowedRoles: []
            },
            children: [
                {
                    title: 'ClaimsGrid',
                    titleKey: 'modules.Claims.views.ClaimsGrid.label',
                    label: undefined,
                    routerLink: '/claims/claims-grid',
                    authorization: {
                        allowedRoles: []
                    }
                }
            ]
        }
    ];

    public $dataModels: any = {};

    protected $serviceFactory: DataServiceFactory;
    protected $errorHandlingService: ErrorHandlingService;

    constructor(public injector: Injector) {
        this.$authorizationService = this.injector.get(AuthorizationService);
        this.filterNavigationData();
        const translationsProvider = this.injector.get(TranslationsProvider);
        translationsProvider.useDefaultLanguage();

        this.$serviceFactory = injector.get(DataServiceFactory);
        this.$errorHandlingService = injector.get(ErrorHandlingService);

        const dataConfig = {};

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

    protected initDataServices(dataConfig: { [key: string]: KinveyServiceConfig }) {}

    public getLanguages(): any[] {
        return [
            {
                label: 'English',
                culture: 'en-US',
                order: 0,
                key: 'translations.default'
            }
        ];
    }

    private filterNavigationData(): void {
        this.$navigationData.forEach(module => {
            let views = [];
            if (this.$authorizationService.isAuthorized(module.authorization)) {
                views = module.children.filter(view => this.$authorizationService.isAuthorized(view.authorization));
            }
            module.children = views;
        });

        this.$navigationData = this.$navigationData.filter(module => module.children.length);
    }
}
