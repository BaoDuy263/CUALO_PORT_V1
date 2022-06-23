export interface Setting
{
    id: number,
    emailSupport: string,
    emailOrder: string,
    emailSenderSmtp: string,
    emailSenderPort : string,
    emailSender: string,
    emailSenderPassword: string,
    telephone: Date,
    websiteName: Date,
    domain: string,
    emailSenderSsl: string,
    adminName: string,
}

export interface lstSetting
{
    currentPage: number,
    pageSize : number,
    totalRecord : number,
    totalPage: number
    data : Setting[]
}


export interface SettingEdit
{
    id: number,
    emailSupport: string,
    emailOrder: string,
    emailSenderSmtp: string,
    emailSenderPort : string,
    emailSender: string,
    emailSenderPassword: string,
    telephone: Date,
    websiteName: Date,
    domain: string,
    emailSenderSsl: string,
    adminName: string,
}``