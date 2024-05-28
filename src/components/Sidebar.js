import React from "react";
import "./styles/Sidebar.css";

const Sidebar = () => {
    const handleClick = () => {
        window.location.reload();
      };
  return (
    <div className="sidebar">
      <div className="icon"onClick={handleClick}>
        <img src="/svg/home.svg" alt="" />
        <span className="label">Trang chủ </span>
      </div>
      <div className="icon">
        <img src="/svg/shorts.svg" alt="" />
        <span className="label">Shorts</span>
      </div>
      <div className="icon">
        <img src="/svg/subchanel.svg" alt="" />
        
        <span className="label">Kênh đăng ký</span>
      </div>
      <div className="divider"></div>
      <div className="icon">
        <span className="label label-larger">Bạn</span>
        <img src="/svg/you.svg" alt="" />
      </div>
      <div className="icon">
        <img src="/svg/yourchanel.svg" alt="" />
        <span className="label">Kênh của bạn</span>
      </div>
      <div className="icon">
        <img src="/svg/seenvid.svg" alt="" />
        <span className="label">Video đã xem</span>
      </div>
      <div className="icon">
        <img src="/svg/playlist.svg" alt="" />
        <span className="label">Danh sách phát</span>
      </div>
      <div className="icon">
        <img src="/svg/yourvid.svg" alt="" />
        <span className="label">Video của bạn</span>
      </div>
      <div className="icon">
        <img src="/svg/latervid.svg" alt="" />
        <span className="label">Xem sau</span>
      </div>
      <div className="icon">
        <img src="/svg/likevid.svg" alt="" />
        <span className="label">Video đã thích</span>
      </div>
      <div className="divider"></div>
      <div className="icon4">
        <span className="label label-larger">Kênh đăng ký</span>
      </div>
      <div className="icon2">
        <img
          src="https://yt3.googleusercontent.com/ytc/AIdro_nVtvlWXjHCB6JpyqJZsa2QNhLfQDmh7-pZWfIJ1JiJRzM=s176-c-k-c0x00ffffff-no-rj-mo"
          alt=""
        />
        <span className="label2">Phê Phim Review</span>
      </div>
      <div className="icon2">
        <img
          src="https://yt3.ggpht.com/w7XTvogibxD9DP9ENUk2HAiTL9lcviUdHe2t9Yn2-r70lY-t5H-Ulg82jfX-tL_7pZWHO3IRQwA=s88-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <span className="label2">Malte Marten</span>
      </div>
      <div className="icon2">
        <img
          src="https://yt3.ggpht.com/BHfbCbg4x6VgO5sEDv0E5odG2ML9NOYxuDN8r91FhI1j0HFu2ulIus3j2D4M-7fdQvwBrgXX=s88-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <span className="label2">UFC</span>
      </div>
      <div className="icon2">
        <img
          src="https://yt3.ggpht.com/K4ygAstBO0MO0K1YlZroyEcSS2JiKdhS5n84K9e8etsh52XTucdkDxjATnpuVGoRXNV1DhQu=s88-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <span className="label2">Kplus Sports</span>
      </div>
      <div className="icon2">
        <img
          src="https://yt3.ggpht.com/zq9JPmjWzuwUQejXmzmJouVo-L3y99htD6ivFySDDKNaZcFMqmblAzYPxds7RsM2py68jhjp=s88-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <span className="label2">Levitation Offic...</span>
      </div>
      <div className="icon">
        <img src="/svg/allchanel.svg" alt="" />
        <span className="label3">Tất cả kênh đăng ký</span>
      </div>
      <div className="divider"></div>
      <div className="icon4">
        <span className="label label-larger">Khám phá</span>
      </div>
      <div className="icon">
        <img src="/svg/trend.svg" alt="" />
        <span className="label">Thịnh hành</span>
      </div>
      <div className="icon">
        <img src="/svg/music.svg" alt="" />
        <span className="label">Âm nhạc</span>
      </div>
      <div className="icon">
        <img src="/svg/game.svg" alt="" />
        <span className="label">Trò chơi</span>
      </div>
      <div className="icon">
        <img src="/svg/news.svg" alt="" />
        <span className="label">Tin tức</span>
      </div>
      <div className="icon">
        <img src="/svg/sport.svg" alt="" />
        <span className="label">Thể thao</span>
      </div>
      <div className="divider"></div>
      <div className="icon2">
        <span className="label label-larger">Dịch vụ khác của Youtube</span>
      </div>
      <div className="icon">
        <img src="/svg/pre.svg" alt="" />
        <span className="label">Youtube Premium</span>
      </div>
      <div className="icon">
        <img src="/svg/studio.svg" alt="" />
        <span className="label">Youtube Studio</span>
      </div>
      <div className="icon">
        <img src="/svg/musicytb.svg" alt="" />
        <span className="label">Youtube Music</span>
      </div>
      <div className="icon">
        <img src="/svg/kids.svg" alt="" />
        <span className="label">Youtube Kids</span>
      </div>
      <div className="divider"></div>
      <div className="icon">
        <img src="/svg/set.svg" alt="" />
        <span className="label">Cài đặt</span>
      </div>
      <div className="icon">
        <img src="/svg/historyreport.svg" alt="" />
        <span className="label">Nhật ký báo cáo</span>
      </div>
      <div className="icon">
        <img src="/svg/help.svg" alt="" />
        <span className="label">Trợ giúp</span>
      </div>
      <div className="icon">
        <img src="/svg/feedback.svg" alt="" />
        <span className="label">Gửi ý kiến phản hồi</span>
      </div>
      <div className="divider"></div>
      <div className="info">
        <p>Giới thiệu Báo chí Bản quyền </p>
        <p>Liên hệ với chúng tôi </p>
        <p>Người sáng tạo Quảng cáo </p>
        <p>Nhà phát triển</p>
        <br></br>
        <p>Điều khoản Quyền riêng tư</p>
        <p> Chính sách và an toàn </p>
        <p>Cách YouTube hoạt động</p>
        <p>Thử các tính năng mới</p>
      </div>
      <br></br>
      <div className="mark">© 2024 Google LLC</div>
      <br></br>
    </div>
  );
};

export default Sidebar;
