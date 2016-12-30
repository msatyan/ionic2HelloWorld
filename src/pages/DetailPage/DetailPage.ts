import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'detail-page',
    templateUrl: 'DetailPage.html'
})
export class DetailPage
{
    selectedItem: any;
    icons: string[];
    items: Array<{ title: string, note: string, icon: string }>;

    constructor(public navCtrl: NavController, public navParams: NavParams)
    {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');

        //ios-star-outline
        /*
            <!--Basic: auto-select the icon based on the platform -->
            <ion-icon name="star"></ion-icon>

            <!-- Advanced: explicity set the icon for each platform -->
            <ion-icon ios="ios-star" md="md-star"></ion-icon>
        */
    }

}
