import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../DetailPage/DetailPage';

@Component({
    selector: 'page-page1',
    templateUrl: 'page1.html'
})
export class Page1
{
    selectedItem: any;
    icons: string[];
    AllItems: Array<{ title: string, note: string, icon: string }>;

    constructor(public navCtrl: NavController, public navParams: NavParams)
    {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');

        this.AllItems = [
            { title: 'Item 1', note: 'This is item #1', icon: 'flask' },
            { title: 'Item 2', note: 'This is item #2', icon: 'wifi' },
            { title: 'Item 3', note: 'This is item #3', icon: 'beer' },
            { title: 'Item 4', note: 'This is item #4', icon: 'football' },
            { title: 'Item 5', note: 'This is item #5', icon: 'paper-plane' },
            { title: 'Item 6', note: 'This is item #6', icon: 'boat' },
            { title: 'Item 7', note: 'This is item #7', icon: 'bluetooth' },
            { title: 'Item 8', note: 'This is item #8', icon: 'build' }
        ];

    }

    itemTapped(event, item)
    {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push( DetailPage, { item: item } );
    }

    getItems(ev: any)
    {
    }


}
