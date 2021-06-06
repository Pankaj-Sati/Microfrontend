import { LocationChangeListener, LocationStrategy, PathLocationStrategy } from "@angular/common";
import { Injectable } from "@angular/core";

@Injectable()
export class CustomLocationStrategy extends PathLocationStrategy
{
    readonly appNameList=["app1","app2"];
   
    pushState(state: any, title: string, url: string, queryParams: string)
    {
        console.log('In pushState',arguments);
    }
}