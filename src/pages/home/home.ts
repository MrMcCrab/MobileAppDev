import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shoppingItems: FirebaseListObservable<any[]>;
  newItem = '';

  username = '';
  email = '';

  constructor(private navCtrl: NavController, private auth: AuthService, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
    this.shoppingItems = this.firebaseProvider.getShoppingItems();
  }

  addItem() {
    this.firebaseProvider.addItem(this.newItem);
  }
 
  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }

 
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage')
    });
  }
}


/*
export class MenuPage {
  
    rootPage="TabsPage";
  
    @ViewChild(Nav) nav: Nav;
  
    pages: PageInterface[] = [
      { title: 'Home', pageName: 'TabsPage', tabComponent: 'ServicePage', index: 0, icon: 'home'},
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
  */