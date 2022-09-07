import { Injectable } from '@angular/core';
//import { Utilities } from './utilities';

@Injectable()
export class ConfigService {
    public static readonly appVersion: string = '1.0.0';
    public static readonly apiVersion: string = '1.0';
  //  public baseUrl: string = Utilities.baseUrl().replace(/\/$/, '');

    public url = {
        home: {
            index: 'api/home/index',
        },
        admin: {
            getUserInfo: '/api/admin/getUserInfo',
            logout: '/api/admin/logout',
            getListParameter: '/api/Admin/getListParameterByCode',
            getGroupUsers: '/api/Admin/GetGroupUsersByParentCode',
        },
        map_cont_yarn3:{
            getDataPagedList: '/api/MapContYard3/GetDataPagedList',
            addMapCont: '/api/MapContYard3/Add',
            editMapCont: '/api/MapContYard3/Edit',
            deleteMapCont: '/api/MapContYard3/Delete/',
            getIdMapCont: '/api/MapContYard3/GetDataById/',
        },
        contImages:{
            getDataPagedList: '/api/ContImages/GetDataPagedList',
            addContImages:'/api/ContImages/Add',
        },
        user:{
            changePW:'/User/UserChangePW'
        }

    }

    // public parseFilenameFromContentDisposition(contentDisposition: string): string {
    //     if (!contentDisposition) return null;
    //     let matches = /; filename=(.*?);/g.exec(contentDisposition);

    //     return matches && matches.length > 1 ? matches[1] : null;
    // }

    // public leftPad(input, width: number, char?: string): string {
    //     char = char || '0';
    //     input = input + '';
    //     return input.length >= width ? input : new Array(width - input.length + 1).join(char) + input;
    // }

    public openPopupPrint(url: string): void {
        // let popup = window.open(url, '_blank');
        // //if (navigator.userAgent.match(/Edge\/\d+/g)) {
        // //    popup = window.open(url, 'popupPrint', 'width=' + screen.width + ',height=' + screen.height);
        // //} else {
        // //    popup.moveTo(0, 0);
        // //    popup.resizeTo(screen.availWidth, screen.availHeight);
        // //}

        // popup.onload = function () {
        //     popup.focus();
        //     popup.print();
        // }

        // setTimeout(() => {
        //     popup.onfocus = function () {
        //         popup.close(); // Close the window
        //     }
        // }, 500);
    }

    public getLabelMonth(isCurr: boolean = false): Array<string> {
        let output = [];
        let first = isCurr ? 12 : 13;
        let newDate = new Date();
        newDate.setDate(1);
        newDate.setMonth(newDate.getMonth() - first);

        for (var i = 0; i < 12; i++) {
            newDate.setMonth(newDate.getMonth() + 1);
            output.push(`${newDate.getMonth() + 1}/${newDate.getFullYear()}`);
        }

        return output;
    }

    public bsConfigDefault = {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'DD/MM/YYYY',
        rangeInputFormat: 'DD/MM/YYYY',
        selectFromOtherMonth: true,
        showWeekNumbers: false,
        locale: 'vi',
    }
}
