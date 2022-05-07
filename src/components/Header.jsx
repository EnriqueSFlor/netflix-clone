import "./Header.css";

export default () => {
  return (
    <header>
      <div className="header--log">
        <a href="/">
          <img
            src="https://www.dafont.com/forum/attach/orig/7/3/736247.png?1"
            alt=""
          ></img>
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
        </a>
      </div>
    </header>
  );
};
