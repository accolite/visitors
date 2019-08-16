/**
 * @author M.Shashikant(shashikant.mittapelli@accoliteindia.com)
 * Helps to set user details when user is logged in
 */

import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ContextService } from './base/context.service';

@Injectable({
    providedIn:'root'
})

export class ContextResolver {
    constructor(private contextService:ContextService){}

    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
      return this.contextService.hasUser ?  this.contextService.user : this.contextService.setUser()
    }
}