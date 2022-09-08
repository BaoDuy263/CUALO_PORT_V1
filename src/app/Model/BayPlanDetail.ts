// From Ship to port
export interface BayPlanPaging
{
    Page : number,
    PageSize : number,
    Voyace : string,
    ContNo : string,
    BillNo : string,
    FromDate? : Date,
    ToDate? : Date
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
    returnPlan: Date,
    typeDirection: number,
    dateUpdate: Date,
    dateCheckIn: Date,
    step: number,
    impExpDate : Date,
    outDeliveryDate : Date,
    inDeliveryDate : Date,
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
    ReturnPlan : Date,
    DateUpdate : Date,
    CheckIn : Date,
    Book : string,
    ReturnAddress : string,
    StatusContainer : string,
    Direction : string,
    Shipper : string,
    TypeCont : string,
    impExpDate : Date,
    outDeliveryDate : Date,
    inDeliveryDate : Date,
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
    ReturnPlan : Date,
    CheckIn : Date,
    Book : string,
    ReturnAddress : string,
    StatusContainer : string,
    Direction : string,
    Shipper : string,
    TypeCont : string,
    impExpDate : Date,
    outDeliveryDate : Date,
    inDeliveryDate : Date,
}

// From Port to Ship

export interface PortToShipPaging
{
    Page : number,
    PageSize : number,
    Voyace : string,
    ContNo : string
    FromDate?: Date,
    ToDate?: Date
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
    contNo : string,
    dateCheckOut: Date,
    dateUpdate: Date,
    step : number
}


export interface PortToShipCreate
{
    Voyace : string,
    ContNo : string,
    CheckOut : Date,
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
    CheckOut : Date,
    GW : number,
    Commodity : string,
    SealNo : string,
    TypeCont : string,
    IsLeave : boolean
}
