export interface BayPlanPaging
{
    Page : number,
    PageSize : number,
    ChuHang : string,
    ChuyenNhapXuat : string,
    CangCuoi : string,
    ContNo : string
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
    chuyenNhapXuat : string,
    chuHang : string,
    hangHoa : string,
    wg : number,
    cangCuoi : string,
    contNo : string
}


export interface BayPlanCreate
{
    ChuyenNhapXuat : string,
    ChuHang : string,
    HangHoa : string,
    WG : number,
    CangCuoi : string,
    ContNo : string
}


export interface BayPlanUpdate
{
    Id : number,
    ChuyenNhapXuat : string,
    ChuHang : string,
    HangHoa : string,
    WG : number,
    CangCuoi : string,
    ContNo : string
}