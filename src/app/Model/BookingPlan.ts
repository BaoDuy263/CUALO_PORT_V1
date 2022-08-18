export interface BookingPlanPaging
{
    Page : number,
    PageSize : number,
    BookingType : number,
    FileName : string,
    FromDate? : Date,
    ToDate? : Date
};

export interface BookingPlanIndex
{
    currentPage : number,
    pageSize : number,
    totalPage : number,
    totalRecord : number,
    data : BookingPlanRecord[]
}

export interface BookingPlanRecord
{
    id : number,
    pathFile: string,
    createdOn: Date,
    createdBy: string
}