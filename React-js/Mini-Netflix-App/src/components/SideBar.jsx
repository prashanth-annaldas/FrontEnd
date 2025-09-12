import profilePic from '../assets/Prashanth.jpg'
import Home from '../assets/N_Logo.png'

const Sidebar = ({ selectedTab, setSelectedTab }) => {

  const handleLogout = (e)=>{
    e.preventDefault();
    localStorage.removeItem("Email");
    localStorage.removeItem("Password");
    window.location.href = '/';
  }

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "180px" }}
    >
        <span className="fs-4"><img className='homeImg' src={ Home } /></span>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"
          onClick={() => {
            setSelectedTab("Search");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Search" && "active bg-danger"
            }`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#search"></use>
            </svg>
            Search
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Wishlist");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Wishlist" && "active bg-danger"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Wishlist
          </a>
        </li>
      </ul>
      <hr />
      <div>
          <img
            src={profilePic}
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <button type="button" className="btn btn-danger saveButton" onClick={ handleLogout }>Delete</button>
      </div>
    </div>
  );
};

export default Sidebar;
