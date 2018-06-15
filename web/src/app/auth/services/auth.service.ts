import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdalService } from 'adal-angular4'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user=null;
  private config = {
    tenant: 'c4a2137e-4842-4ed8-ac8b-ec94ed409a4d', //azure AD Directory ID
    clientId: 'e66ed2d7-d1b7-4031-9d2d-b3772bb84b04',//web app id registered at azure 
    redirectUri: 'http://localhost:4200/auth-callback',
    postLogoutRedirectUri: 'http://localhost:4200'
  }

  constructor(private adal:AdalService) { 
    this.adal.init(this.config)
  }

  public isLoggedIn():boolean {
    return this.adal.userInfo.authenticated;
 }
 
 public signout():void {
    this.adal.logOut();
 }
 
 public startAuthentication():any {
    this.adal.login();
 }
 
 public getName():string {
    return this.adal.userInfo.profile.getName
 }
 
 public completeAuthentication():void {
    this.adal.handleWindowCallback();
    this.adal.getUser().subscribe(user=> {
    this.adal=user;
    console.log(this.adal.userInfo);
    var expireIn=user.profile.exp.newDate().getTime();
 });
 
 }
}
