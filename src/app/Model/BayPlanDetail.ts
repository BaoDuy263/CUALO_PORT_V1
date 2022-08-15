// From Ship to port
export interface BayPlanPaging
{
    Page : number,
    PageSize : number,
    Voyace : string,
    ContNo : string,
    BillNo : string,
}

export interface BayPlanIndex
{
    currentPage : number,
    pageSize : number,
    totalPage : number,
    totalRecord : number,
    data : BayPlanRecord[]
}

export interface BayPlanRecord
{
    id:number,
    voyace : string,
    receiver : string,
    contNo : string,
    billNo : string,
    commodity : string,
    sealNo : string,
    returnPlan: string
}


export interface BayPlanCreate
{
    Voyace : string,
    Receiver : string,
    ContNo : string,
    WG : number,
    BillNo : string,
    Commodity : string,
    SealNo : string,
    ReturnPlan : string,
    DateUpdate : Date,
    Book : string,
    ReturnAddress : string,
    StatusContainer : string,
    Direction : string,
    Shipper : string,
    TypeCont : string
}


export interface BayPlanUpdate
{
    Id : number,
    Voyace : string,
    Receiver : string,
    ContNo : string,
    WG : number,
    BillNo : string,
    Commodity : string,
    SealNo : string,
    ReturnPlan : string,
    DateUpdate : Date,
    Book : string,
    ReturnAddress : string,
    StatusContainer : string,
    Direction : string,
    Shipper : string,
    TypeCont : string
}

// From Port to Ship

export interface PortToShipPaging
{
    Page : number,
    PageSize : number,
    Voyace : string,
    ContNo : string
}

export interface PortToShipIndex
{
    currentPage : number,
    pageSize : number,
    totalPage : number,
    totalRecord : number,
    data : PortToShipRecord[]
}

export interface PortToShipRecord
{
    id:number,
    chuyen : string,
    gw : number,
    hangHoa : string,
    loaiCont : number,
    contNo : string
}


export interface PortToShipCreate
{
    Voyace : string,
    ContNo : string,
    DateExport : Date,
    GW : number,
    Commodity : string,
    SealNo : string,
    TypeCont : string,
    IsLeave : boolean
}


export interface PortToShipUpdate
{
    Id : number,
    Voyace : string,
    ContNo : string,
    DateExport : Date,
    GW : number,
    Commodity : string,
    SealNo : string,
    TypeCont : string,
    IsLeave : boolean
}