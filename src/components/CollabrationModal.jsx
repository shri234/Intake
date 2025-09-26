import React, { useState } from "react";
import { X } from "lucide-react";

// --- Form Data for Contact Us ---
const ContactUsForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    employeeSize: "",
    contactNumber: "",
    emailId: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Us Form Data Submitted:", formData);
    // Add your API call or submission logic here
    onClose(); // Close the modal on successful submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-xl font-semibold text-orange-600 mb-6">
        Corporate Collaboration
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company Name */}
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="companyName"
            className="text-gray-700 flex items-center font-medium"
          >
            <span className="mr-2 text-xl">🏢</span> Company Name
          </label>
          <input
            type="text"
            id="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter company name here..."
            required
            className="p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition outline-none"
            style={{
              borderColor: "#FF6900",
              boxShadow: "0 0 0 1px #FF6900 inset",
            }}
          />
        </div>

        {/* Employee Size */}
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="employeeSize"
            className="text-gray-700 flex items-center font-medium"
          >
            <span className="mr-2 text-xl">👥</span> Employee Size
          </label>
          <input
            type="text"
            id="employeeSize"
            value={formData.employeeSize}
            onChange={handleChange}
            placeholder="Enter employee size here..."
            required
            className="p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition outline-none"
            style={{
              borderColor: "#FF6900",
              boxShadow: "0 0 0 1px #FF6900 inset",
            }}
          />
        </div>

        {/* Contact Number */}
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="contactNumber"
            className="text-gray-700 flex items-center font-medium"
          >
            <span className="mr-2 text-xl">📞</span> Contact Number
          </label>
          <div className="flex">
            <select
              className="p-3 border border-gray-300 rounded-l-lg bg-white appearance-none pr-8 cursor-pointer"
              style={{
                borderColor: "#FF6900",
                boxShadow: "0 0 0 1px #FF6900 inset",
                borderRight: "none",
                outline: "none",
              }}
            >
              <option>91+</option>
            </select>
            <input
              type="tel"
              id="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Enter contact number here..."
              required
              className="flex-grow p-3 border border-gray-300 rounded-r-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition outline-none"
              style={{
                borderColor: "#FF6900",
                boxShadow: "0 0 0 1px #FF6900 inset",
                borderLeft: "none",
              }}
            />
          </div>
        </div>

        {/* Email ID */}
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="emailId"
            className="text-gray-700 flex items-center font-medium"
          >
            <span className="mr-2 text-xl">✉️</span> Email ID
          </label>
          <input
            type="email"
            id="emailId"
            value={formData.emailId}
            onChange={handleChange}
            placeholder="Enter email id here..."
            required
            className="p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition outline-none"
            style={{
              borderColor: "#FF6900",
              boxShadow: "0 0 0 1px #FF6900 inset",
            }}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-10">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition shadow-sm"
          style={{ borderColor: "#FF6900" }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-gradient-to-r from-[#FF6900] to-[#F54900] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

// --- Form Data for Partner With Us (Vendor) ---
const PartnerWithUsForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    shopName: "",
    contactNumber: "",
    shopAddress: "",
    foodVariety: "",
  });
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    // This handles the actual file selected
    const file = e.target.files[0];
    setUploadedFile(file);

    // Update the visual input field text
    setFormData((prev) => ({
      ...prev,
      foodVariety: file ? `File selected: ${file.name}` : "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Partner Form Data Submitted:", {
      formData,
      file: uploadedFile,
    });
    // Add your API call to send formData AND uploadedFile here
    onClose(); // Close the modal on successful submission
  };

  // Ref for the hidden file input
  const fileInputRef = React.useRef(null);

  // Function to simulate clicking the hidden file input
  const triggerFileUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-xl font-semibold text-orange-600 mb-6">
        Vendor Collaboration
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Shop Name */}
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="shopName"
            className="text-gray-700 flex items-center font-medium"
          >
            <span className="mr-2 text-xl">🛍️</span> Shop Name
          </label>
          <input
            type="text"
            id="shopName"
            value={formData.shopName}
            onChange={handleChange}
            placeholder="Enter your shop name here..."
            required
            className="p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition outline-none"
            style={{
              borderColor: "#FF6900",
              boxShadow: "0 0 0 1px #FF6900 inset",
            }}
          />
        </div>

        {/* Contact Number */}
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="contactNumber"
            className="text-gray-700 flex items-center font-medium"
          >
            <span className="mr-2 text-xl">📞</span> Contact Number
          </label>
          <div className="flex">
            <select
              className="p-3 border border-gray-300 rounded-l-lg bg-white appearance-none pr-8 cursor-pointer"
              style={{
                borderColor: "#FF6900",
                boxShadow: "0 0 0 1px #FF6900 inset",
                borderRight: "none",
                outline: "none",
              }}
            >
              <option>91+</option>
            </select>
            <input
              type="tel"
              id="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Enter contact number here..."
              required
              className="flex-grow p-3 border border-gray-300 rounded-r-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition outline-none"
              style={{
                borderColor: "#FF6900",
                boxShadow: "0 0 0 1px #FF6900 inset",
                borderLeft: "none",
              }}
            />
          </div>
        </div>
      </div>

      {/* Shop Address (Full Width) */}
      <div className="flex flex-col space-y-2 mt-6">
        <label
          htmlFor="shopAddress"
          className="text-gray-700 flex items-center font-medium"
        >
          <span className="mr-2 text-xl">📍</span> Shop Address
        </label>
        <input
          type="text"
          id="shopAddress"
          value={formData.shopAddress}
          onChange={handleChange}
          placeholder="Enter your shop address here..."
          required
          className="p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition outline-none"
          style={{
            borderColor: "#FF6900",
            boxShadow: "0 0 0 1px #FF6900 inset",
          }}
        />
      </div>

      {/* Food Variety (Full Width) - Includes File Upload Logic */}
      <div className="flex flex-col space-y-2 mt-6">
        <label
          htmlFor="foodVariety"
          className="text-gray-700 flex items-center font-medium justify-between"
        >
          <div className="flex items-center">
            <span className="mr-2 text-xl">🍴</span> Food Variety
          </div>
          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.jpeg,.jpg,.png" // Limit file types
            className="hidden"
          />
          {/* Upload link: Clicks the hidden input */}
          <span
            onClick={triggerFileUpload}
            className="text-orange-600 font-semibold cursor-pointer flex items-center hover:text-orange-700 transition"
          >
            <span className="mr-1">⬆️</span> Upload pdf/jpeg
          </span>
        </label>
        <input
          type="text"
          id="foodVariety"
          value={formData.foodVariety}
          onChange={handleChange}
          placeholder="Enter your food varieties here or upload pdf..."
          className="p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition outline-none"
          style={{
            borderColor: "#FF6900",
            boxShadow: "0 0 0 1px #FF6900 inset",
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-10">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition shadow-sm"
          style={{ borderColor: "#FF6900" }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-gradient-to-r from-[#FF6900] to-[#F54900] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

// --- Main Modal Component (Remains unchanged) ---
const CollaborationModal = ({ isOpen, onClose, defaultTab = "contact" }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-6 relative border-2 border-orange-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Tab/Header Section */}
        <div className="flex justify-start text-lg font-medium mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("contact")}
            className={`px-4 py-2 relative transition-colors ${
              activeTab === "contact" ? "text-orange-600" : "text-gray-500"
            }`}
          >
            Contact Us
            {activeTab === "contact" && (
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-orange-500 to-purple-500"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab("partner")}
            className={`px-4 py-2 relative transition-colors ${
              activeTab === "partner" ? "text-orange-600" : "text-gray-500"
            }`}
          >
            Partner With Us
            {activeTab === "partner" && (
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-orange-500 to-purple-500"></div>
            )}
          </button>
        </div>

        {/* Form Content */}
        {activeTab === "contact" ? (
          <ContactUsForm onClose={onClose} />
        ) : (
          <PartnerWithUsForm onClose={onClose} />
        )}
      </div>
    </div>
  );
};

export default CollaborationModal;
