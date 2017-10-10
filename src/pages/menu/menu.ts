import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
 }

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage="TabsPage";

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Home', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'home'},
    { title: 'About', pageName: 'TabsPage', tabComponent: 'AboutPage', index: 1, icon: 'contacts'},
    { title: 'Special', pageName: 'SpecialPage', tabComponent: 'SpecialPage', index: 2, icon: 'home'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: PageInterface) {
    let params ={};

    if(page.index){
      params = {tabIndex: page.index};
    }
    if(this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface){
    let childNav = this.nav.getActiveChildNav();

    if(childNav){
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
