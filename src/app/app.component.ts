import { OverlayKeyboardDispatcher } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { tokenToString } from 'typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CUALO_PORT_V1';
}



/**
 * em ko cần xác thực SSO đâu anh , e chỉ cần lấy cái token để load danh sách container a ạ
 * Cái token mà app này đang lấy sẽ không hợp lệ khi em gọi qua API mới đó (SSO nó không chấp nhận nên sẽ bị đá ra, và nó cứ quay vong đó).
 *
 *
 Em xu lý theo hương khac di nhe, chỗ app này anh chưa thấy chỗ nào để lưu giữu token của SSO cả, nên luc em gọi api mơi sẽ lõi
 Anh cho em cái hàm lấy token ko phải = SSO đc ko anh?
 không được em, SÔ nó không có cơ chế đó
 Em chạy cái WEB CCLO và xem thêm có chế hoạt động của nó nhé
 Dạ ok anh để e thử cách khác ạ
*/
