import './styles/screen.css';

function App() {
  return (
    <>
      <header>
        <span className="title">PetFinder</span>
        <span className="clickable add-window">메뉴01</span>
        <span className="clickable open-win-1">메뉴02</span>
        <span className="clickable open-win-2">메뉴03</span>
      </header>
      <div className="content">
        <div className="window-manager" data-reactid=".0">
          <div className="windows" data-reactid=".0.0">
            <div className="window active" style={{top: 20, left: 20, width: 300, height: 300, zIndex: 68}} data-reactid=".0.0.$settings-1659538139114">
              <header data-reactid=".0.0.$settings-1659538139114.0">
                <div className="title" data-reactid=".0.0.$settings-1659538139114.0.0">Settings 1659538139114</div>
                <div className="close" data-reactid=".0.0.$settings-1659538139114.0.1"/>
              </header>
              <div className="content" data-reactid=".0.0.$settings-1659538139114.1">
                <div tabIndex={-1} className="settings" data-reactid=".0.0.$settings-1659538139114.1.0">
                  <label data-reactid=".0.0.$settings-1659538139114.1.0.0">Name:</label>
                  <input type="text" defaultValue="Sam" data-reactid=".0.0.$settings-1659538139114.1.0.1"/>
                  <button data-reactid=".0.0.$settings-1659538139114.1.0.2">Save</button>
                  <br data-reactid=".0.0.$settings-1659538139114.1.0.3"/>
                  <p data-reactid=".0.0.$settings-1659538139114.1.0.4">
                    <span data-reactid=".0.0.$settings-1659538139114.1.0.4.0">My name is:{" "}</span>
                    <span data-reactid=".0.0.$settings-1659538139114.1.0.4.1">Sam</span>
                  </p>
                </div>
              </div>
              <div className="resize s-resize" data-reactid=".0.0.$settings-1659538139114.2"/>
              <div className="resize e-resize" data-reactid=".0.0.$settings-1659538139114.3"/>
              <div className="resize w-resize" data-reactid=".0.0.$settings-1659538139114.4"/>
              <div className="resize sw-resize" data-reactid=".0.0.$settings-1659538139114.5"/>
              <div className="resize se-resize" data-reactid=".0.0.$settings-1659538139114.6"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
