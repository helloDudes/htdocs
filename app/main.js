System.register(["@angular/core", "@angular/platform-browser", "./app.component", "./car-parts.component", "@angular/forms", "./racing-data.service", "@angular/http", "@angular/platform-browser-dynamic"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, app_component_1, car_parts_component_1, forms_1, racing_data_service_1, http_1, AppModule, platform_browser_dynamic_1, platform;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (car_parts_component_1_1) {
                car_parts_component_1 = car_parts_component_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (racing_data_service_1_1) {
                racing_data_service_1 = racing_data_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
                    declarations: [app_component_1.AppComponent, car_parts_component_1.CarPartsComponent],
                    providers: [racing_data_service_1.RacingDataService],
                    bootstrap: [app_component_1.AppComponent]
                })
            ], AppModule);
            platform = platform_browser_dynamic_1.platformBrowserDynamic();
            platform.bootstrapModule(AppModule);
        }
    };
});
//# sourceMappingURL=main.js.map