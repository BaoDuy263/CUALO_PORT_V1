import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray, ValidationErrors } from '@angular/forms';
import { DBkeys } from './dbkeys.service';

export interface IFormControlInvalid {
    field: string;
    errors: ValidationErrors;
}

@Injectable()
export class Utilities {

    public static readonly captionAndMessageSeparator = ':';
    public static readonly noNetworkMessageCaption = 'No Network';
    public static readonly noNetworkMessageDetail = 'The server cannot be reached';
    public static readonly accessDeniedMessageCaption = 'Access Denied!';
    public static readonly accessDeniedMessageDetail = '';
    public static readonly timezoneOffset: number = -420;

    public static readonly patternBasic: RegExp = /^[^<>~!@#$%^&*]+$/;
    public static readonly patternTaxCode: RegExp = /^[0-9]{10}(-[0-9]{3})?$/;
    public static readonly patternEmail: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    public static readonly patternTextInput: RegExp = /^[A-Za-z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝàáâãèéêìíòóôõùúýĂăĐđĨĩŨũƠơƯưẠ-ỹ\s\-_+,.?/;:'"()\\]+$/;
    public static readonly patternTextVN: RegExp = /^[A-Za-zÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝàáâãèéêìíòóôõùúýĂăĐđĨĩŨũƠơƯưẠ-ỹ\s\-_,.']+$/;
    public static readonly patternHomePhone: RegExp = /^(0|84|\+84)\d{10}$/;
    public static readonly patternMobile: RegExp = /^(0|84|\+84)\d{9}$/;
    public static readonly patternNumber: RegExp = /^[\d]*$/;
    public static readonly patternAcctExec: RegExp = /^[A-Z0-9]+$/;

    public static baseUrl() {
        if (window.location.origin)
            return window.location.origin;

        return window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }

}
