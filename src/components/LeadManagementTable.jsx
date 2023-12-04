import { Link } from "react-router-dom";
import AddNewLead from "./Modal/AddNewLead";
import { useState } from "react";
import '../static/css/Table.css'

function Table() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [selectedValue, setSelectedValue] = useState("New Lead");

  const handleOpenOffcanvas = () => setShowOffcanvas(true);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  function formatDate(date) {
    const created_at_str = date;
    const created_at_date = new Date(created_at_str);
    const options = { year: "numeric", month: "short", day: "2-digit" };
    const formatted_date = created_at_date.toLocaleDateString("en-US", options);

    return formatted_date;
  }
  return (
    <div>
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Confirmed</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Completed</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Cancelled</button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">All</div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">Confirm</div>
        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">Complete</div>
        <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">...</div>
      </div>
      <AddNewLead show={showOffcanvas} close={handleCloseOffcanvas} />
      <div className="col-12 actions_menu">
        <div className="action_menu_left col-5">
          <div>
            <form action="" method="post" autocomplete="off">
              <div className="input-icon">
                <span className="input-icon-addon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                  </svg>
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Input search term"
                />
                <button
                  type="button"
                  className="btn search_button"
                  style={{ background: "#006875" }}
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="action_buttons col-7">
          <button className="btn btn-outline" style={{ borderRadius: "6px" }}>
            Export &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3.33317 10C3.33317 13.6819 6.31794 16.6667 9.99984 16.6667C13.6817 16.6667 16.6665 13.6819 16.6665 10"
                stroke="#252525"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M10 11.6673L10 3.33398M10 3.33398L12.5 5.83398M10 3.33398L7.5 5.83398"
                stroke="#252525"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="container">
        <div class="table-responsive custom-table-responsive">
          <table class="table custom-table">
            <tbody>
              <tr scope="row">
                <td>
                  <span className="table-head">Booking ID</span>
                  <small class="d-block">#SS56DG2355D</small>
                </td>
                <td>
                  <span className="table-head"> Service</span>

                  <small class="d-block">Jet ski</small>
                </td>
                <td>
                  <span className="table-head"> Name</span>
                  <small class="d-block">James Corden</small>
                </td>
                <td>
                  <span className="table-head"> Booking Date</span>
                  <small class="d-block">22 FEB 2023</small>
                </td>
                <td>
                  <span className="table-head"> Created On</span>
                  <small class="d-block">18 JAN 2023</small>
                </td>
                <td>
                  <span className="table-head"> Price</span>
                  <small class="d-block">$ 13,000</small>
                </td>
                <td>
                  <span className="table-head"> Travellers</span>
                  <small class="d-block">1</small>
                </td>
                <td>
                  <button type="button" class="btn btn-primary">View
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 15L15 5M15 5H7.5M15 5V12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr class="spacer"><td colspan="100"></td></tr>
              <tr scope="row">
                <td>
                  <span className="table-head">Booking ID</span>
                  <small class="d-block">#SS56DG2355D</small>
                </td>
                <td>
                  <span className="table-head"> Service</span>

                  <small class="d-block">Jet ski</small>
                </td>
                <td>
                  <span className="table-head"> Name</span>
                  <small class="d-block">James Corden</small>
                </td>
                <td>
                  <span className="table-head"> Booking Date</span>
                  <small class="d-block">22 FEB 2023</small>
                </td>
                <td>
                  <span className="table-head"> Created On</span>
                  <small class="d-block">18 JAN 2023</small>
                </td>
                <td>
                  <span className="table-head"> Price</span>
                  <small class="d-block">$ 13,000</small>
                </td>
                <td>
                  <span className="table-head"> Travellers</span>
                  <small class="d-block">1</small>
                </td>
                <td>
                  <button type="button" class="btn btn-primary">View
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 15L15 5M15 5H7.5M15 5V12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>
      {/* </div> */}
    </div>
  );
}

export default Table;
