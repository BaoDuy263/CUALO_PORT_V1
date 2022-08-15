export interface PlanPaging
{
    Page : number,
    PageSize : number,
    Voyace : string,
    Eta : Date,
    Etd : Date,
};

export interface PlanIndex
{
    currentPage : number,
    pageSize : number,
    totalPage : number,
    totalRecord : number,
    data : PlanRecord[]
}

export interface PlanRecord
{
    id : number,
    vessel: string,
    voyace: string,
    pod: string,
    pol: string,
    route : string,
    eta : Date,
    etd : Date
}

export interface PlanCreate
{
    Vessel: string,
    Voyace: string,
    POD: string,
    POL: string,
    Route : string,
    Eta : Date,
    Etd : Date
}

export interface PlanUpdate
{
    Id : number,
    Vessel: string,
    Voyace: string,
    POD: string,
    POL: string,
    Route : string,
    Eta : Date,
    Etd : Date
}