import React from 'react'
import { useState, useEffect } from "react";
import { getTotalBook } from "../../axioshandle/leadMangement"

function HeaderTiles(props) {
  const [totalBooking, setTotalOrderBook] = useState(0);
  const [totayBooking, settotayOrderBook] = useState(0);
  const [confirmBooking, setConfirmOrderBook] = useState(0);
  const [cancelBooking, setCencelOrderBook] = useState(0);

  useEffect(() => {
    getTotalBook()
      .then((data) => {
        setTotalOrderBook(data.total_booking);
      })
      .catch((error) => {
        console.error("Error fetching total booking data:", error);
      });
  }, []);

  useEffect(() => {
    getTotalBook()
      .then((data) => {
        settotayOrderBook(data.today_booking);
      })
      .catch((error) => {
        console.error("Error fetching today booking data:", error);
      });
  }, []);

  useEffect(() => {
    getTotalBook()
      .then((data) => {
        setConfirmOrderBook(data.total_confirmed_booking);
      })
      .catch((error) => {
        console.error("Error fetching confirmed booking data:", error);
      });
  }, []);

  useEffect(() => {
    getTotalBook()
      .then((data) => {
        setCencelOrderBook(data.total_cancelled_booking);
      })
      .catch((error) => {
        console.error("Error fetching cancelled booking data:", error);
      });
  }, []);
  return (
    <div className="row row-cards">
      <div className="col-sm-6 col-lg-3">
        <div className="card card-sm" style={{ borderRadius: "12px" }}>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-auto">
                <span
                  className="bg-primary text-white avatar"
                  style={{
                    borderRadius: "8px",
                    width: "60px",
                    height: "60px",
                    background:
                      "linear-gradient(135deg, #5C4AF2 0%, #988DF5 100%)",
                  }}
                >
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="56" height="56" rx="8" fill="url(#paint0_linear_368_7890)" />
                    <rect x="0.5" y="0.5" width="55" height="55" rx="7.5" stroke="white" stroke-opacity="0.3" />
                    <path d="M41.3333 25.0832C41.8487 25.0832 42.3113 24.7668 42.4982 24.2864C42.6851 23.8059 42.5579 23.2601 42.1779 22.9118L32.1779 13.7451C31.8125 13.4101 31.2837 13.3227 30.8299 13.5223C30.3762 13.7219 30.0833 14.1708 30.0833 14.6665L30.0833 41.3332C30.0833 42.0236 30.6429 42.5832 31.3333 42.5832C32.0236 42.5832 32.5833 42.0236 32.5833 41.3332L32.5833 25.0832L41.3333 25.0832Z" fill="white" />
                    <path opacity="0.5" d="M14.6667 30.9165L23.4167 30.9165V14.6665C23.4167 13.9761 23.9763 13.4165 24.6667 13.4165C25.357 13.4165 25.9167 13.9761 25.9167 14.6665V41.3332C25.9167 41.8289 25.6237 42.2778 25.17 42.4774C24.7163 42.677 24.1874 42.5896 23.822 42.2546L13.822 33.0879C13.442 32.7396 13.3148 32.1938 13.5017 31.7134C13.6886 31.2329 14.1512 30.9165 14.6667 30.9165Z" fill="white" />
                    <defs>
                      <linearGradient id="paint0_linear_368_7890" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#5C4AF2" />
                        <stop offset="1" stop-color="#988DF5" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
              <div className="col">
                <div className="font-weight-medium count_card_heading">
                  Total Bookings
                </div>
                <div
                  className="text-secondary"
                  style={{ fontSize: "18px", fontWeight: "700" }}
                >
                  {totalBooking}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3">
        <div className="card card-sm" style={{ borderRadius: "12px" }}>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-auto">
                <span
                  className="bg-green text-white avatar"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.30)",
                    background:
                      "linear-gradient(135deg, #187AF7 0%, #559AF4 100%)",
                    width: "60px",
                    height: "60px",
                  }}
                >
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="56" height="56" rx="8" fill="url(#paint0_linear_368_7902)" />
                    <rect x="0.5" y="0.5" width="55" height="55" rx="7.5" stroke="white" stroke-opacity="0.3" />
                    <path d="M41.3333 25.0832C41.8487 25.0832 42.3113 24.7668 42.4982 24.2864C42.6851 23.8059 42.5579 23.2601 42.1779 22.9118L32.1779 13.7451C31.8125 13.4101 31.2837 13.3227 30.8299 13.5223C30.3762 13.7219 30.0833 14.1708 30.0833 14.6665L30.0833 41.3332C30.0833 42.0236 30.6429 42.5832 31.3333 42.5832C32.0236 42.5832 32.5833 42.0236 32.5833 41.3332L32.5833 25.0832L41.3333 25.0832Z" fill="white" />
                    <path opacity="0.5" d="M14.6667 30.9165L23.4167 30.9165V14.6665C23.4167 13.9761 23.9763 13.4165 24.6667 13.4165C25.357 13.4165 25.9167 13.9761 25.9167 14.6665V41.3332C25.9167 41.8289 25.6237 42.2778 25.17 42.4774C24.7163 42.677 24.1874 42.5896 23.822 42.2546L13.822 33.0879C13.442 32.7396 13.3148 32.1938 13.5017 31.7134C13.6886 31.2329 14.1512 30.9165 14.6667 30.9165Z" fill="white" />
                    <defs>
                      <linearGradient id="paint0_linear_368_7902" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#187AF7" />
                        <stop offset="1" stop-color="#559AF4" />
                      </linearGradient>
                    </defs>
                  </svg>

                </span>
              </div>
              <div className="col">
                <div className="font-weight-medium count_card_heading">
                  Today Bookings
                </div>
                <div
                  className="text-secondary"
                  style={{ fontSize: "18px", fontWeight: "700" }}
                >
                  {totayBooking}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3">
        <div className="card card-sm" style={{ borderRadius: "12px" }}>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-auto">
                <span
                  className="bg-twitter text-white avatar"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.30)",
                    background:
                      "linear-gradient(135deg, #13B370 0%, #3ACE90 100%)",
                    width: "60px",
                    height: "60px",
                  }}
                >
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="56" height="56" rx="8" fill="url(#paint0_linear_368_7914)" />
                    <rect x="0.5" y="0.5" width="55" height="55" rx="7.5" stroke="white" stroke-opacity="0.3" />
                    <path opacity="0.5" d="M20.075 11.3335H35.925C37.8564 11.3335 38.8222 11.3335 39.601 11.6045C41.078 12.1184 42.2375 13.3121 42.7367 14.8326C43 15.6344 43 16.6286 43 18.6169V41.9572C43 43.3876 41.3583 44.1465 40.3198 43.1962C39.7097 42.6379 38.7903 42.6379 38.1802 43.1962L37.375 43.933C36.3057 44.9115 34.6943 44.9115 33.625 43.933C32.5557 42.9545 30.9443 42.9545 29.875 43.933C28.8057 44.9115 27.1943 44.9115 26.125 43.933C25.0557 42.9545 23.4443 42.9545 22.375 43.933C21.3057 44.9115 19.6943 44.9115 18.625 43.933L17.8198 43.1962C17.2097 42.6379 16.2903 42.6379 15.6802 43.1962C14.6417 44.1465 13 43.3875 13 41.9572V18.6169C13 16.6286 13 15.6344 13.2633 14.8326C13.7625 13.3121 14.922 12.1184 16.399 11.6045C17.1778 11.3335 18.1436 11.3335 20.075 11.3335Z" fill="white" />
                    <path d="M33.0991 22.166C33.5589 21.6511 33.5141 20.8609 32.9992 20.4011C32.4842 19.9413 31.694 19.986 31.2342 20.501L26.2143 26.1233L24.7658 24.501C24.306 23.986 23.5158 23.9413 23.0008 24.4011C22.4859 24.8609 22.4411 25.6511 22.9009 26.166L25.2819 28.8327C25.519 29.0983 25.8582 29.2502 26.2143 29.2502C26.5704 29.2502 26.9096 29.0983 27.1467 28.8327L33.0991 22.166Z" fill="white" />
                    <path d="M20.5 32.5835C19.8096 32.5835 19.25 33.1432 19.25 33.8335C19.25 34.5239 19.8096 35.0835 20.5 35.0835H35.5C36.1904 35.0835 36.75 34.5239 36.75 33.8335C36.75 33.1432 36.1904 32.5835 35.5 32.5835H20.5Z" fill="white" />
                    <defs>
                      <linearGradient id="paint0_linear_368_7914" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#13B370" />
                        <stop offset="1" stop-color="#3ACE90" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
              <div className="col">
                <div className="font-weight-medium count_card_heading">
                  Confirmed Bookings
                </div>
                <div
                  className="text-secondary"
                  style={{ fontSize: "18px", fontWeight: "700" }}
                >
                  {confirmBooking}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3">
        <div className="card card-sm" style={{ borderRadius: "12px" }}>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-auto">
                <span
                  className="bg-facebook text-white avatar"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.30)",
                    background:
                      "linear-gradient(135deg, #DC5B32 0%, #FF8E6A 100%)",
                    width: "60px",
                    height: "60px",
                  }}
                >
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="56" height="56" rx="8" fill="url(#paint0_linear_368_7923)" />
                    <rect x="0.5" y="0.5" width="55" height="55" rx="7.5" stroke="white" stroke-opacity="0.3" />
                    <path opacity="0.5" d="M18.5556 11.3335H37.4444C37.9604 11.3335 38.2183 11.3335 38.4358 11.3535C40.853 11.5753 42.7695 13.5861 42.981 16.1222C43 16.3504 43 16.621 43 17.1623V41.7665C43 43.2207 41.2355 43.8378 40.4038 42.6744C39.8269 41.8673 38.6731 41.8673 38.0962 42.6744L37.375 43.6832C36.4375 44.9947 34.5625 44.9947 33.625 43.6832C32.6875 42.3717 30.8125 42.3717 29.875 43.6832C28.9375 44.9947 27.0625 44.9947 26.125 43.6832C25.1875 42.3717 23.3125 42.3717 22.375 43.6832C21.4375 44.9947 19.5625 44.9947 18.625 43.6832L17.9038 42.6744C17.3269 41.8673 16.1731 41.8673 15.5962 42.6744C14.7645 43.8378 13 43.2207 13 41.7665V17.1623C13 16.621 13 16.3504 13.019 16.1222C13.2305 13.5861 15.147 11.5753 17.5642 11.3535C17.7817 11.3335 18.0396 11.3335 18.5556 11.3335Z" fill="white" />
                    <path d="M25.5506 20.4496C25.0624 19.9615 24.271 19.9615 23.7828 20.4496C23.2947 20.9378 23.2947 21.7292 23.7828 22.2174L26.2323 24.6668L23.7828 27.1163C23.2947 27.6044 23.2947 28.3959 23.7828 28.884C24.271 29.3722 25.0625 29.3722 25.5506 28.884L28 26.4346L30.4495 28.884C30.9376 29.3722 31.7291 29.3722 32.2172 28.884C32.7054 28.3959 32.7054 27.6044 32.2172 27.1163L29.7678 24.6668L32.2172 22.2174C32.7054 21.7293 32.7054 20.9378 32.2172 20.4496C31.7291 19.9615 30.9376 19.9615 30.4495 20.4496L28 22.8991L25.5506 20.4496Z" fill="white" />
                    <path d="M20.5 32.5835C19.8096 32.5835 19.25 33.1431 19.25 33.8335C19.25 34.5239 19.8096 35.0835 20.5 35.0835H35.5C36.1904 35.0835 36.75 34.5239 36.75 33.8335C36.75 33.1431 36.1904 32.5835 35.5 32.5835H20.5Z" fill="white" />
                    <defs>
                      <linearGradient id="paint0_linear_368_7923" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#DC5B32" />
                        <stop offset="1" stop-color="#FF8E6A" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
              <div className="col">
                <div className="font-weight-medium count_card_heading">
                  Cancelled Bookings
                </div>
                <div
                  className="text-secondary"
                  style={{ fontSize: "18px", fontWeight: "700" }}
                >
                  {cancelBooking}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTiles;
