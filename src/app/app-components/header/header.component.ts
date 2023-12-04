import { Component } from '@angular/core';
import {AppLanguage} from "../../translate/AppLanguage";
import {FormControl} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  langs = Object.values(AppLanguage.languages)
  selectedLang = new FormControl<string>(AppLanguage.languages.Ru)
  constructor(
    //private userAuthService:AuthService,
    private translate: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let lang = AppLanguage.getLocalLanguage()
    this.selectedLang.setValue(  lang)
    this.translate.use(lang);
  }

  onProfileClicked(){
    // if(this.userAuthService.isLoggedIn()){
    //   this.router.navigate([ComponentRoutingPaths.userControl.profile])
    //   return
    // }
    // this.router.navigate([ComponentRoutingPaths.userControl.signin])
  }
  // hasRole(role:string): boolean{
  //   return this.userAuthService.hasRole(role)
  // }

  onLangChange() {
    const lang = this.selectedLang.value ?? "kg"
    AppLanguage.setLocalLanguage(lang)
    this.translate.use(lang);
    window.location.reload()
  }
}
