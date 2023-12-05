import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeadManagement from "../lead_management";
import OnBoard from "./OnBoard";
import AddVendorInfo from "./Initial_contact/AddVendorForm";
import Availability from "./Vendor/Availability";
import Review from "./Vendor/Review";
import Calendar from "./Vendor/Calendar";
import BookingView from "./Vendor/BookingView";
function AllRouting() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<LeadManagement />}></Route>
        <Route path="/onboard" element={<OnBoard />} />
        <Route path="/add-vendor-details" element={<AddVendorInfo />} />
        <Route path="/availability" element={<Availability />} />
        <Route path="/review" element={<Review />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/booking-view" element={<BookingView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AllRouting;
