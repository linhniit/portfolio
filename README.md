# Portfolio — Nguyen Ngoc Linh

Portfolio một trang dành cho Senior DevOps / Platform Engineer, sử dụng nội dung trong CV được cung cấp. Giao diện tiếng Anh, tương thích điện thoại và máy tính.

HTML, CSS và JavaScript thuần. Không cần npm, framework, backend, API key hoặc bước build. Không tải font hay thư viện từ dịch vụ bên ngoài.

## Xem trên máy

Mở `index.html` bằng trình duyệt, hoặc chạy trong thư mục này:

```sh
python3 -m http.server 8000
```

Truy cập `http://localhost:8000`. Nhấn `Ctrl+C` để dừng máy chủ.

## Đưa lên GitHub Pages

1. Tạo một repository **public** trên GitHub, ví dụ `portfolio`.
2. Đưa **nội dung bên trong thư mục portfolio** vào gốc repository. File `index.html` phải nằm ngay ở gốc, cùng với `styles.css`, `script.js`, `.nojekyll` và thư mục `assets`. Không đưa cả thư mục `portfolio` vào thành một thư mục con.
3. Commit/push các file lên nhánh `main`. Có thể dùng giao diện **Add file → Upload files** của GitHub hoặc Git CLI.
4. Vào **Settings → Pages → Build and deployment**.
5. Chọn **Source: Deploy from a branch**, nhánh **main**, thư mục **/(root)**, rồi **Save**.
6. Đợi quy trình Pages hoàn tất. Địa chỉ website sẽ được hiển thị trong trang Settings → Pages. Với repository tên `portfolio`, địa chỉ thông thường là `https://TEN-GITHUB.github.io/portfolio/`.

Để dùng địa chỉ `https://TEN-GITHUB.github.io/`, đặt tên repository là `TEN-GITHUB.github.io` (thay `TEN-GITHUB` bằng username thực tế).

Mọi đường dẫn nội bộ đều là đường dẫn tương đối, nên dùng được cả với website ở gốc và ở thư mục `/portfolio/`. File `.nojekyll` cho phép phục vụ trực tiếp các file tĩnh. Với thay đổi sau này, chỉ cần commit/push lên nhánh đã chọn.

Nguồn hướng dẫn: [GitHub Docs — Configuring a publishing source for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Chỉnh sửa

| File | Nội dung |
| --- | --- |
| `index.html` | Tên, phần giới thiệu, thành quả, kinh nghiệm, kỹ năng, học vấn, chứng chỉ và liên hệ |
| `styles.css` | Giao diện, màu sắc, typography và bố cục responsive; bảng màu ở `:root` |
| `script.js` | Menu trên điện thoại và năm ở footer |
| `assets/Resume.pdf` | Bản CV tải về; thay file này để cập nhật CV |

- Email và LinkedIn lấy từ CV. Nếu thay email, cập nhật cả phần chữ hiển thị và `href="mailto:..."`.
- Chưa có đường dẫn GitHub cá nhân trong CV nên website không thêm liên kết GitHub giả.
- Các số liệu là thành quả trong CV, không phải dữ liệu giám sát thời gian thực. Thời gian làm việc tại Tamara được giữ là tháng 1/2021–2/2025.
- PDF tải về là bản CV gốc, gồm thông tin liên hệ và work authorization có trong CV.
- Giữ nguyên `./` ở các đường dẫn CSS, JavaScript và PDF để tương thích GitHub Pages theo tên repository.
- Nội dung và các liên kết vẫn hoạt động khi JavaScript bị tắt.

## Cấu trúc

```text
portfolio/
├── index.html
├── styles.css
├── script.js
├── .nojekyll
├── .gitignore
├── README.md
└── assets/
    └── Resume.pdf
```

Bộ mã nguồn này đã sẵn sàng để upload; chưa tạo repository hay xuất bản lên tài khoản GitHub của bạn.
