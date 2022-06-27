export interface TypeRoute {
    name : string
    url?: string
    children?: TypeRoute[] 
}



export const ROUTE_DATA: TypeRoute[] = [
    {
        name :'Quản lý danh mục',
        children : [
            {
                name :'Nhóm hàng hóa',
                url:'nhom-san-pham'
            },
            {
                name :'Hàng hóa',
                url:'san-pham'
            },
            {
                name :'Container',
                url:'khachhang'
            },
            {
                name :'Phương tiện',
                url:'phuong-tien'
            },
            {
                name :'Đơn vị',
                url:'don-vi'
            },
            {
                name :'Booking Cont E rỗng',
                url:'booking-cont-rong'
            },
            {
                name :'Booking nhập Cont',
                url:'booking-nhap-cont'
            },
        ]
    },
    {
        name :'Quản lý khách hàng',
        children : [
            {
                name :'Khách hàng',
                url:'khachhang'
            },
            {
                name :'Booking',
                url:'khachhang'
            }
        ]
    },
    {
        name :'Quản lý giao nhận cont',
        children : [
            {
                name :'Thời gian nhập, xuất',
                url:'khachhang'
            },
            {
                name :'Danh sách, bản đồ cont',
                url:'khachhang'
            }
        ]
    },
    {
        name :'Quản lý vị trí cont',
        url:'khachhang'
    },
    {
        name :'Quản lý ra vào',
        children : [
            {
                name :'Ra vào của cont',
                url:'khachhang'
            },
            {
                name :'Ra vào của các shipper theo booking',
                url:'khachhang'
            }
        ]
    },
    {
        name :'Quản lý công nợ',
        url:'khachhang'
    },
    {
        name :'Quản lý lịch tàu',
        url:'khachhang'
    },
  
    {
        name :'Quản trị hệ thống',
        children : [
            {
                name :'Quản lý tài khoản',
                url:'khachhang'
            },
            {
                name :'Thống kê truy cập',
                url:'khachhang'
            }
        ]
    },
    {
        name :'Setting',
        url:'setting'
    },
  ]
  