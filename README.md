# Giới thiệu chung
Git là một hệ thống VCS (Version Control System) dùng để quản lý và kiểm tra các phiên bản source code khác nhau trong quá trình phát triển. Trên Git, có thể lưu trạng thái của file khi có nhu cầu dưới dạng lịch sử cập nhật. Vì thế, có thể đưa file đã chỉnh sửa một lần về trạng thái cũ hay có thể hiển thị sự khác biệt ở nơi chỉnh sửa. Khi định ghi đè (overwrite) lên file mới nhất đã chỉnh sửa của người khác bằng file đã chỉnh sửa dựa trên file cũ, thì khi đăng (upload) lên server sẽ hiện ra cảnh cáo. Vì thế, sẽ không xảy ra thất bại về việc đã ghi đè lên nội dung chỉnh sửa của người khác mà không hề hay biết.
![git-la-gi-1](https://github.com/DoHuongLyy/m/assets/147292804/eb9defea-b6a4-442c-88b1-466bb26638c5)

**Dưới đây là một số khái niệm về Git:**

- Repository(Kho): là nơi lưu trữ toàn bộ lịch sử thay đổi và nhánh (branch), tất cả các tệp tin và dự án của bạn.
- Có hai loại repository: local (trên máy cá nhân) và remote (trên sever)
  
**Các tính năng của Git bao gồm như sau:**

- Sắp xếp công việc tốt hơn để bạn có thể tập trung giải quyết từng task mà không phải bận tâm lo lắng cho những task liên quan.
- Linh hoạt hơn khi phải làm cùng lúc nhiều task.
- Tự tin hơn khi thử nghiệm những ý tưởng mới nó sẽ giúp bạn có thể tách biệt việc thử nghiệm với dự án chính, điều này giúp nâng cao chất lượng code cũng như tính sáng tạo. Nhìn chung, Git được coi là tiêu chuẩn bất thành văn trong ngành.
- Git cho phép chúng ta làm việc offline trong một khoảng thời gian. Bạn chỉ cần internet cho nhu cầu hợp tác nhóm hoặc lưu lịch sử commit code lên remote repos.
- Cách lưu trữ thông tin có sự khác biệt cốt lõi trong cách quản lý storage và các nhánh của Git khiến cho việc merging cũng hoàn toàn khác. Bên cạnh đó, cũng nhờ Git lưu trữ thông tin mà bạn có thể thực hiện vô vàn những điều thú vị để viết lại lịch sử commit.
- Git hoàn toàn miễn phí
  
**Ưu và nhược điểm của Git:**

• *Ưu điểm của Git:*
 Quản lý phiên bản hiệu quả: cung cấp khả năng quản lý lịch sử và phiên bản của mã nguồn một cách hiệu quả cho phép theo dõi và khôi phục các thay đổi một cách chính xác.
 Hỗ trợ nhánh mạnh mẽ: cho phép tạo cũng như quản lý nhiều nhánh độc lập giúp phát triển song song các tính năng, sửa lỗi và thử nghiệm không làm ảnh hưởng đến mã nguồn chính.
 Tốc độ và hiệu suất: hoạt động nhanh chóng với các thao tác như commit, branch, merge.
 Làm việc cùng một lúc trên nhiều dự án: cho phép làm việc trên nhiều dự án khác nhau mà không gây ra xung đột.
 Lịch sử linh hoạt: chi tiết tất cả những thay đổi, giúp theo dõi thông tin và xem thông tin về từng commit.

• *Nhược điểm của Git:*
 Học và sử dụng khó khăn ban đầu
 Xung đột (Conflict) trong merge: merge thay đổi từ nhiều nhánh có thể xảy ra xung đột khi hai phiên bản của mã nguồn có thay đổi gây tranh cãi. Xử lí xung đột đôi khi đòi hỏi sự can thiệp thủ công.
 Quản lý lớn (large repository)
 Khó duy trì lịch sử sau khi thay đổi cấu trúc thư mục: có thể làm mất mát lịch sử nếu không thực hiện đúng quy trình.
 Backup phức tạp: khôi phục toàn bộ repository Git cần quản lý nhiều file và dữ liệu đòi hoit sự quan tâm và kỹ thuật

