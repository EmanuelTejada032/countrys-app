import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ByCapitalComponent } from "./country/pages/by-capital/by-capital.component";
import { ByRegionComponent } from "./country/pages/by-region/by-region.component";
import { ByCountryComponent } from "./country/pages/by-country/by-country.component";
import { ShowCountryComponent } from "./country/pages/show-country/show-country.component";


const routes: Routes = [

    {
        path: '',
        component: ByRegionComponent,
        pathMatch: 'full'
    },
    {
        path: 'country',
        component: ByCountryComponent
    },
    {
        path: 'capital',
        component: ByCapitalComponent
    },
    {
        path: 'country/:id',
        component: ShowCountryComponent
    },
    {
        path: '**', 
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})


export class RoutingModule {}