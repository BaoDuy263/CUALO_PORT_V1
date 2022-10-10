export interface TypeRoute {
    name : string
    url?: string
    roles?: any
    children?: TypeRoute[]
}



export const ROUTE_DATA: TypeRoute[] = [
    {
        name :'Quản lý danh mục',
        roles: ["Admin"],
        children : [

            // {
            //     name :'Nhóm hàng hóa',
            //     url:'nhom-san-pham',
            //     roles: ["Admin"],

            // },
            // {
            //     name :'Hàng hóa',
            //     url:'san-pham',
            //     roles: ["Admin"],

            // },
            // {
            //     name :'Khách hàng',
            //     url:'khachhang',
            //     roles: ["Admin"],

            // },
            {
                name :'Đơn vị',
                url:'don-vi',
                roles: ["Admin"],

            },
            {
                name :'Phương tiện',
                url:'phuong-tien',
                roles: ["Admin"],

            },
        ]
    },
    // {
    //     name :'Tạo booking',
    //     url:'booking',
    //     roles: ["Admin"],
    // },
    // {
    //     name :'Quản lý khách hàng',
    //     children : [
    //         {
    //             name :'Booking',
    //             url:'khachhang'
    //         }
    //     ]
    // },

    // {
    //     name :'Quản lý khách hàng',
    //     roles: ["Admin"],
    //     children : [
    //         {
    //             name :'Khách hàng',
    //             url:'khachhang',
    //             roles: ["Admin"],
    //         },
    //         {
    //             name :'Booking',
    //             url:'404-not-found',
    //             roles: ["Admin"],
    //         }
    //     ]
    // },
    // {
    //     name :'Quản lý giao nhận cont',
    //     roles: ["Admin"],
    //     children : [
    //         {
    //             name :'Thời gian nhập, xuất',
    //             url:'404-not-found',
    //             roles: ["Admin"],
    //         },
    //         {
    //             name :'Danh sách, bản đồ cont',
    //             url:'404-not-found',
    //             roles: ["Admin"],
    //         }
    //     ]
    // },
    // {
    //     name :'Quản lý vị trí cont',
    //     url:'404-not-found',
    //     roles: ["Admin"],
    // },
    {
      name :'Nghiệp vụ tại cảng',
      roles: ["Admin", "ds"],
      children : [
          {
              name :'Nhập cont từ tàu',
              url: 'nhapcont',
              roles: ["Admin"],
          },
          {
              name :'Lấy nguyên/rút ruột-Trả rỗng',
              url:'import-container',
              roles: ["Admin", "ds"],
          },
          {
              name : 'Cấp rỗng/đóng hàng-Hạ bãi',
              url: 'plan-packing',
              roles: ["Admin", "ds"],
          },
          {
            name :'Xuất cont lên tàu',
            url: 'xuatcont',
            roles: ["Admin"],
          },
          {
            name :'Quản lý lịch tàu',
            roles: ["Admin"],
            url:'quanlylichtau'
          },
          {
            name: "Quản lý transaction",
            roles: ["Admin"],
            url: 'transaction'
          },
      ]
    },
    {
      name :'Quản lý container',
      roles: ["Admin"],
      url:'container'
    },
    {
      name :'Bản đồ container',
      roles: ["Admin"],
      url:'container-maps'
    },
    {
        name :'Báo cáo',
        roles: ["Admin"],
        children : [
            {
                name :'Daily report',
                url: 'dayilyreport',
                roles: ["Admin"],
            },
        ]
    },
    // {
    //     name :'Thực hiên xuất nhập tàu',
    //     roles: ["Admin"],
    //     children : [
    //         {
    //             name :'Nhập cont từ tàu',
    //             url: 'thuchiennhapcont',
    //             roles: ["Admin"],
    //         },
    //         {
    //             name :'Xuất cont lên tàu',
    //             url: 'thuchienxuatcont',
    //             roles: ["Admin"],
    //         },
    //     ]
    // },
    {
        name :'Quản lý ra vào',
        roles: ["Admin"],
        children : [
            {
                name :'Ra vào của cont',
                url:'404-not-found',
                roles: ["Admin"],
            },
            {
                name :'Ra vào của các shipper theo booking',
                url:'404-not-found',
                roles: ["Admin"],
            }
        ]
    },
    // {
    //     name :'Quản lý công nợ',
    //     url:'404-not-found',
    //     roles: ["Admin"],
    // },


    //     name :'Quản lý ra vào',
    //     roles: ["Admin"],
    //     children : [
    //         {
    //             name :'Ra vào của cont',
    //             url:'404-not-found',
    //             roles: ["Admin"],
    //         },
    //         {
    //             name :'Ra vào của các shipper theo booking',
    //             url:'404-not-found',
    //             roles: ["Admin"],
    //         }
    //     ]
    // },
    // {
    //     name :'Quản lý công nợ',
    //     url:'404-not-found',
    //     roles: ["Admin"],
    // },
    // {
    //     name :'Quản lý lịch tàu',

    //     roles: ["Admin"],
    //     url:'quanlylichtau'
    // },

    {
        name :'Quản trị hệ thống',
        roles: ["Admin"],
        children : [
            {
                name :'Quản lý tài khoản',
                url:'quan-ly-tai-khoan',
                roles: ["Admin"],
            },
            {
                name :'Thống kê truy cập',
                url:'404-not-found',
                roles: ["Admin"],
            },
            {
                name :'Phân quyền hệ thống',
                url:'quan-ly-he-thong',
                roles: ["Admin"],
            }
        ]
    },
    {
        name :'Setting',
        url:'setting',
        roles: ["Admin"],
    },
]
