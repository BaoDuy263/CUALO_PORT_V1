//import { SystemMenuModel } from './systemmenu.model';

export class UserModel {
    constructor(
        totalRow?: number,
        rowNumber?: number,
        id?: string,
        userName?: string,
        fullName?: string,
        email?: string,
        phoneNumber?: string,
        gender?: boolean,
        securityStamp?: string,
        passwordHash?: string,
        employeeCode?: string,
        userType?: number,
        sessionTimeOut?: number,
        expireTimeSpan?: Date,
        branchId?: string,
        branchCode?: string,
        branchName?: string,
        division?: string,
        divisionDesc?: string,
        acctExec?: string,
        empNo?: number,
        active?: boolean,
        createdDate?: Date,
        createdBy?: string,
        contractNo?: number,
        listNo?: number,
        password?: string,
        currentPassword?: string,
        oldpass?: string,
        newpass?: string,

        systemID?: string,
        deviceID?: string,
        simSerialNumber?: string,
        ownerName?: string,
        superId?: number,
        userGroupID?: number,
        statusID?: number,
        fcmToken?: string,
        showAdvertising?: boolean,
        showDeliveryChart?: number,
        deviceToken?: string,
        latestVeriOS?: number,
        latestVeraRoid?: number,
        qrCode?: string,
        showWhatOnHome?: number,
    ) {
        totalRow = totalRow;
        rowNumber = rowNumber;
        id = id;
        userName = userName;
        fullName = fullName;
        email = email;
        phoneNumber = phoneNumber;
        gender = gender;
        securityStamp = securityStamp;
        passwordHash = passwordHash;
        employeeCode = employeeCode;
        userType = userType;
        sessionTimeOut = sessionTimeOut;
        expireTimeSpan = expireTimeSpan;
        branchId = branchId;
        branchCode = branchCode;
        branchName = branchName;
        division = division;
        divisionDesc = divisionDesc;
        acctExec = acctExec;
        this.permissions = new Array<PermissionObject>();
       // this.systemMenu = new SystemMenuModel();
        empNo = empNo;
        active = active;
        createdDate = createdDate;
        createdBy = createdBy;
        contractNo = contractNo;
        listNo = listNo;
        password = password;
        currentPassword = currentPassword;
        oldpass = oldpass;
        newpass = newpass;

        systemID = systemID;
        deviceID = deviceID;
        simSerialNumber = simSerialNumber;
        ownerName = ownerName;
        superId = superId;
        userGroupID = userGroupID;
        statusID = statusID;
        fcmToken = fcmToken;
        showAdvertising = showAdvertising;
        showDeliveryChart = showDeliveryChart;
        deviceToken = deviceToken;
        latestVeriOS = latestVeriOS;
        latestVeraRoid = latestVeraRoid;
        qrCode = qrCode;
        showWhatOnHome = showWhatOnHome;
    }

    public totalRow!: number;
    public rowNumber!: number;
    public id!: string;
    public userName!: string;
    public fullName!: string;
    public email!: string;
    public phoneNumber!: string;
    public gender!: boolean;
    public securityStamp!: string;
    public passwordHash!: string;
    public employeeCode!: string;
    public userType!: number;
    public sessionTimeOut!: number;
    public expireTimeSpan!: Date;
    public branchId!: string;
    public branchCode!: string;
    public branchName!: string;
    public division!: string;
    public divisionDesc!: string;
    public acctExec!: string;
    public acctExecName!: string;
    public permissions!: PermissionObject[];
    public permissionEx!: PermissionExModel[];
   // public systemMenu!: SystemMenuModel;
    public empNo!: number;
    public active!: boolean;
    public createdDate!: Date;
    public createdBy!: string;
    public contractNo!: number;
    public listNo!: number;
    public password!: string;
    public currentPassword!: string;
    public oldpass!: string;
    public newpass!: string;

    public systemID!: string;
    public deviceID!: string;
    public simSerialNumber!: string;
    public ownerName!: string;
    public superId!: number;
    public userGroupID!: number;
    public statusID!: number;
    public fcmToken!: string;
    public showAdvertising!: boolean;
    public showDeliveryChart!: number;
    public deviceToken!: string;
    public latestVeriOS!: number;
    public latestVeraRoid!: number;
    public qrCode!: string;
    public showWhatOnHome!: number;


    public hasPermission(url: string): boolean {
        let index = this.permissions.findIndex((val, index) => {
            return val.resourceApi.toLowerCase() === url.toLowerCase();
        });

        return index > -1;
    }
}

export class PermissionObject {
    constructor() {
    }

    public functionCode!: string;
    public functionTitle!: string;
    public resourceCode!: string;
    public resourceTitle!: string;
    public resourceApi!: string;
    public groupUserCode!: string;
    public groupUserTitle!: string;
    public roleId!: string;
    public roleTitle!: string;
}

export class PermissionExModel {
    constructor() {
    }

    public roleCode!: string;
    public resourceApi!: string;
    public clientType!: string;
}

export class AcctExecModel {
    constructor() {
    }

    public acctExec!: string;
    public acctExecName!: string;
    public staffCode!: string;
}
