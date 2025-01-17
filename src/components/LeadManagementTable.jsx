import { Link } from "react-router-dom";
import AddNewLead from "./Modal/AddNewLead";
import { useEffect, useState } from "react";
import '../static/css/Table.css'
import { getbookingList } from "../axioshandle/leadMangement";
const data = [
  {
    bookingId: 111,
    name: 'firts'
  },
  {
    bookingId: 111,
    name: 'firts'
  },
  {
    bookingId: 111,
    name: 'firts'
  }
]
function Table() {
  const [order_data, setOrderData] = useState([]);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [selectedValue, setSelectedValue] = useState("New Lead");
  const [booking, setBooking] = useState([])
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
  const [filteredBookings, setFilteredBookings] = useState([]);

  // useEffect(() => {
  //   getbookingList()
  //     .then((data) => {
  //       console.log('data', data)
  //       setBooking(data?.results);
  //       setFilteredBookings(data?.results);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching distributor data:", error);
  //     });
  // }, []);

  useEffect(() => {
    getbookingList()
      .then((data) => {
        console.log('data', data);
        setBooking(data?.results);
        setFilteredBookings(data?.results); // Initialize with all bookings
        setOrderData(data?.results); // Set order_data with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching distributor data:", error);
      });
  }, []);

  const filterBookings = (status) => {
    if (status === 'All') {
      setFilteredBookings(booking);
    } else {
      const filtered = booking.filter((item) => item.status === status);
      setFilteredBookings(filtered);
    }
  };

  const exportToCSV = () => {
    if (order_data) {
      const header = [
        "Booking ID",
        "Service",
        "Name",
        "Booking Date",
        "Created On",
        "Price",
        "Travellers",
      ];

      const csvData = order_data.map((rr_data) => {
        const date = new Date(rr_data.start_date);
        const formattedDate = date.toLocaleDateString();

        return [
          rr_data?.booking_id,
          rr_data.service,
          `${rr_data.first_name} ${rr_data.last_name}`,
          formattedDate,
          formattedDate,
          rr_data.price,
          rr_data.number_of_people,
        ];
      });

      const csvContent = [header, ...csvData]
        .map((row) => row.join(","))
        .join("\n");

      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Order_Requests.csv";
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };
  return (
    <div>
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" onClick={() => filterBookings('All')} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" onClick={() => filterBookings('Confirmed')} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Confirmed</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" onClick={() => filterBookings('Completed')} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Completed</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" onClick={() => filterBookings('Cancelled')} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Cancelled</button>
        </li>
      </ul>
      <AddNewLead show={showOffcanvas} close={handleCloseOffcanvas} />
      <div className="col-12 actions_menu">
        <div className="action_menu_left col-5">
          <div>
            <form action="" method="post" autoComplete="off">
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
          <button className="btn btn-outline" style={{ borderRadius: "6px" }} onClick={exportToCSV}>
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
              {filteredBookings.map((item, index) => {
                return (
                  <>
                    <tr scope="row">
                      <td>
                        <span className="table-head">Booking ID</span>
                        <small class="d-block">{item?.booking_id}</small>
                      </td>
                      <td>
                        <span className="table-head"> Service</span>
                        <small class="d-block">Service Name</small>
                      </td>
                      <td>
                        <span className="table-head">Name</span>
                        <small class="d-block">{item?.first_name} {item?.last_name}</small>
                      </td>
                      <td>
                        <span className="table-head"> Booking Date</span>
                        <small class="d-block">{formatDate(item?.start_date)}</small>
                      </td>
                      <td>
                        <span className="table-head"> Created On</span>
                        <small class="d-block">{formatDate(item?.start_date)}</small>
                      </td>
                      <td>
                        <span className="table-head"> Price</span>
                        <small class="d-block">{item?.price_total || 0}</small>
                      </td>
                      <td>
                        <span className="table-head"> Travellers</span>
                        <small class="d-block">{item?.number_of_people}</small>
                      </td>
                      <td>
                        <Link
                          to={`/booking-view/${item?.id}/`}


                          className="btn btn-sm btn-info"
                          style={{
                            padding: "7px 10px 5px 10px",
                            borderRadius: "4px",
                            borderRadius:
                              "var(--roundness-round-inside, 6px)",
                            background: "#187AF7",
                            boxSShadow:
                              "0px 1px 2px 0px rgba(16, 24, 40, 0.04)",
                              color: "#fff"
                          }}
                        >
                          View &nbsp;
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M4 12L12 4M12 4H6M12 4V10"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </td>
                    </tr>
                    <tr class="spacer"><td colSpan="100"></td></tr>
                  </>
                )
              })
              }
            </tbody>
          </table>
        </div>


      </div>
      {/* </div> */}
    </div>
  );
}

export default Table;
