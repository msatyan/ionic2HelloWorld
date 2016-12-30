import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SideMenu } from './app.component.sm';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { DetailPage } from '../pages/DetailPage/DetailPage';

@NgModule({

    // See Angular2 doc for more information about NgModule
    // https://angular.io/docs/ts/latest/api/core/index/NgModule-interface.html

    //declarations: Specifies a list of directives/pipes that belong to this module
    declarations: [
        SideMenu,
        Page1,
        Page2,
        DetailPage
    ],

    //imports: Specifies a list of modules whose exported directives/pipes should be available to templates in this module
    imports: [
        IonicModule.forRoot(SideMenu)
    ],

    // bootstrap: Defines the components that should be bootstrapped when this module is bootstrapped.
    // FYI: The components listed here will automatically be added to entryComponents.
    bootstrap: [IonicApp],


    // Specifies a list of components that should be compiled when this module is defined. 
    // For each component listed here, Angular will create a ComponentFactory and store it in the ComponentFactoryResolver.
    entryComponents: [
        SideMenu,
        Page1,
        Page2,
        DetailPage
    ],

    // providers: Defines the set of injectable objects that are available in the injector of this module
    providers: [
        {
            provide: ErrorHandler,
            useClass: IonicErrorHandler
        }
    ]
})
export class SideMenuModule { }
