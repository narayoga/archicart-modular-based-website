import { useState } from 'react';
import { Dropdown } from 'react-bootstrap'
import Banner from "./components/banner"
import Bannerun from './components/bannerun';
import Content from "./components/content"
import CountDown from "./components/countdown";
import Footer from "./components/footer"
import Foooter from './components/footerun';

function App() {
  const [banner, setBanner] = useState("primary")
  const [content, setContent] = useState("primary")
  const [footer, setFooter] = useState("primary")

  return (
    <>
      <div className="sticky">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-1x2" viewBox="0 0 16 16">
              <path d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z" />
            </svg>
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ width: "200px" }} className="p-3">
            <div className='d-flex justify-content-between'>
              <label for="banner">Choose banner:</label>
              <select id="banner" name="banner" value={banner} onChange={(e) => setBanner(e.target.value)} >
                <option value="primary">1</option>
                <option value="secondary">2</option>
              </select>
            </div>
            <div className='d-flex justify-content-between'>
              <label for="content">Choose content:</label>
              <select id="content" name="content" value={content} onChange={(e) => setContent(e.target.value)}>
                <option value="primary">1</option>
                <option value="secondary">2</option>
              </select>
            </div>
            <div className='d-flex justify-content-between'>
              <label for="footer">Choose footer:</label>
              <select id="footer" name="footer" value={footer} onChange={(e) => setFooter(e.target.value)}>
                <option value="primary">1</option>
                <option value="secondary">2</option>
              </select>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {banner === "primary" ?
        <Banner />
        :
        <Bannerun />
      }
      {content === "primary" ?
        <div className="section">
          <Content />
        </div>
        :
        <div className="section">
          <CountDown />
        </div>
      }
      {footer === "primary" ?
        <div>
          <Footer />
        </div>
        :
        <div>
          <Foooter />
        </div>
      }
    </>
  );
}

export default App;
