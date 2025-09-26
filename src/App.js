import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import CollaborationModal from "./components/CollabrationModal";
import Footer from "./components/footer";

function App() {
  // const [showContactModal, setShowContactModal] = useState(false);
  // const [activeTab, setActiveTab] = useState("contact");
  // const [formData, setFormData] = useState({
  //   companyName: "",
  //   employeeSize: "",
  //   contactNumber: "",
  //   emailId: "",
  // });

  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = () => {
  //   // Handle form submission logic here
  //   console.log("Form submitted:", formData);
  //   setShowContactModal(false);
  //   // Reset form
  //   setFormData({
  //     companyName: "",
  //     employeeSize: "",
  //     contactNumber: "",
  //     emailId: "",
  //   });
  // };

  // const handleCancel = () => {
  //   setShowContactModal(false);
  //   // Reset form
  //   setFormData({
  //     companyName: "",
  //     employeeSize: "",
  //     contactNumber: "",
  //     emailId: "",
  //   });
  // };

  const services = [
    {
      id: "01",
      title: "Quick Bites",
      titleColor: "text-orange-500",
      description: "Light, tasty picks for breaks and meetings.",
      image: "/Quick_Bites.png", // Replace with your actual image path
      // bgColor: "bg-orange-400",
    },
    {
      id: "02",
      title: "Interactive Counters",
      titleColor: "text-pink-500",
      description:
        "Interactive food counters that add flavor and fun to every corporate event.",
      image: "/Interactive_Counters.png", // Replace with your actual image path
    },
    {
      id: "03",
      title: "On-the-Go Options",
      titleColor: "text-teal-500",
      description:
        "Vending & pantry-ready picks for instant fuel between meetings",
      image: "/On_the_Go_Options.png", // Replace with your actual image path
      bgColor: "bg-gray-900",
    },
    {
      id: "04",
      title: "Sweet Finishes",
      titleColor: "text-purple-500",
      description:
        "Cakes, pastries and desserts designed to celebrate every moment.",
      image: "/Sweet_Finishes.png", // Replace with your actual image path
    },
  ];

  const advantages = [
    {
      title: "Flexible vendor network & menu variety",
      icon: (
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <svg
            className="w-3 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Premium ingredients & strict hygiene",
      icon: (
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <svg
            className="w-3 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Tailored solutions for corporate needs",
      icon: (
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <svg
            className="w-3 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Dedicated coordination team",
      icon: (
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <svg
            className="w-3 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Professional, approachable service",
      icon: (
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <svg
            className="w-3 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ),
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialTab, setInitialTab] = useState("contact"); // State to track which tab to open

  const handleOpenModal = (tab) => {
    setInitialTab(tab);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <header className="w-full bg-[#000000] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/intake_logo.png"
              alt="Intake Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Contact Us Button */}
            <button
              onClick={() => handleOpenModal("contact")}
              className="px-6 py-2 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Contact Us
            </button>

            {/* Partner with Us Button */}
            <button
              onClick={() => handleOpenModal("partner")}
              className="px-6 py-2 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-200"
            >
              Partner with Us
            </button>
          </div>
        </div>
      </header>
      <CollaborationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        defaultTab={initialTab} // Pass the state to set the initial view
      />
      <section className="max-w-7xl mx-auto px-6 py-12 mt-20 mb-24 grid md:grid-cols-2 gap-8 items-center">
        {/* Left content */}
        <div>
          <h1
            className="text-[60px] font-bold"
            style={{
              lineHeight: 1.1,
            }}
          >
            Elevating Workdays,{" "}
            <span className="text-[#F54900]">One Bite at a Time.</span>
          </h1>
          <p className="mt-4 text-[20px] text-gray-600">
            At Intake,{" "}
            <span
              className="font-medium"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FF6900 0%, #AD46FF 100%)",
                // These two lines are essential for clipping the background to the text
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                // For non-webkit browsers (though cross-browser support varies greatly)
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Corporate snacking and food solutions
            </span>{" "}
            are at the heart of what we do. We make food at work simple,
            enjoyable, and memorabl helping teams connect over every break and
            meal. From snacks and meals to beverages and celebrations, we’ve got
            workplaces covered throughout the day. Because a good snack or a
            tasty meal can brighten the mood, we focus on making every bite
            worth it fresh, flavorful, and never boring.
          </p>
          <button
            className="mt-6 px-6 py-3 text-white rounded-lg shadow-lg hover:scale-105 transition"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #F54900 27.4%, #F54900 60.58%, #F0B100 100%)",
            }}
          >
            Start 3-day Trial
          </button>
        </div>

        <div className="relative flex justify-center items-center h-[300px] md:h-[400px]">
          {/* Yellow Blob Background */}
          <div className="absolute inset-0 flex justify-center items-center">
            <img
              src="/YellowBlobBackground.png"
              alt="Decorative blob background"
              // Using arbitrary values for exact size
              className="w-[550px] h-[550px] object-contain"
              style={{ transform: "rotate(-5deg)" }} // Using inline style for rotation is fine
            />
          </div>

          {/* Line Ornament 1 (Top Right) */}
          <img
            src="/Line_Ornament.png"
            alt="Decorative Line Ornament"
            // w/h, top/bottom adjusted
            // Arbitrary value for rotation: rotate-[56deg]
            // Arbitrary value for spacing: right-[4.5rem] (which is equivalent to right-18, if 1 unit = 0.25rem)
            className="absolute w-10 h-10 -top-11 right-3
               transform rotate-[14deg] 
               "
          />

          {/* Line Ornament 2 (Bottom Left) */}
          <img
            src="/Line_Ornament1.png"
            alt="Decorative Line Ornament"
            // w/h, top/bottom adjusted
            // Arbitrary value for negative rotation: -rotate-[56deg]
            // Removed unnecessary md/lg classes to ensure left-0 applies on smaller screens
            className="absolute w-10 h-10 -bottom-11 left-6 
               transform -rotate-[14deg] 
               "
          />

          {/* Foreground image - properly sized and positioned */}
          <div className="relative w-[480px] h-[370px] rounded-2xl overflow-hidden shadow-2xl z-10">
            <img
              src="/Corporate catering and office food solutions.png"
              alt="People eating"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="w-full  flex flex-col items-center justify-center py-16 px-6 bg-gradient-to-b from-white to-[#fafafa]">
        {/* Badge */}
        <span className="px-4 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-600 mb-3">
          Meet Intake
        </span>

        {/* Heading */}
        <h2 className="text-[60px] font-medium text-gray-900 mb-8">About Us</h2>

        {/* Black Box */}
        <div className="max-w-4xl bg-black text-white rounded-2xl shadow-lg p-8 text-center mb-8">
          <p className="text-[22px] leading-relaxed">
            Food is more than a necessity—it’s an opportunity to connect,
            celebrate, and energize. At{" "}
            <span className="text-orange-500 font-semibold">Intake</span> we
            specialize in providing end-to-end corporate food solutions that
            blend convenience, variety, and excellence. With multiple vendor
            partnerships, a commitment to hygiene, and an unwavering focus on
            client satisfaction, we make sure your organization enjoys a
            seamless dining experience every day.
          </p>
        </div>

        {/* Gradient Box */}
        <div className="max-w-3xl text-center bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 rounded-xl p-6">
          <p className="text-lg leading-relaxed text-gray-900">
            From{" "}
            <span className="text-orange-600 font-semibold">
              small office orders
            </span>{" "}
            to{" "}
            <span className="text-red-600 font-semibold">
              large corporate events
            </span>
            , we ensure variety, convenience, and excellence—every single day.
          </p>
        </div>

        {/* Gradient Line */}
        <div className="h-1 w-20 mt-8 rounded-full bg-gradient-to-r from-orange-500 to-purple-500" />
      </section>
      <section className="w-full flex flex-col items-center justify-center py-20 px-6 bg-[#FFFBF8]">
        {/* Badge */}
        <span className="px-4 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-600 mb-4">
          Our Services
        </span>

        {/* Heading */}
        <h2
          className="max-w-5xl text-center text-[60px] font-medium text-[#101828] mb-6"
          style={{
            lineHeight: 1.1,
          }}
        >
          Smart <span className="text-orange-600">food</span> & beverage{" "}
          <span className="text-orange-600">solutions</span> designed for modern
          workplaces.
        </h2>

        {/* Subtext */}
        <p className="max-w-3xl text-center text-lg text-gray-700">
          We keep teams energized, connected, and inspired—whether it’s daily
          snacks, fresh meals, or milestone celebrations.
        </p>
      </section>
      <section className="w-full py-20 px-6 bg-[#FFFBF8]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1">
            {/* Icon */}
            <div className="mb-4 w-14 h-14">
              <img src="/Background+Shadow.png" alt="Icon" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-[#0d1421] mb-2">
              Corporate Snacks
            </h2>

            {/* Subheading */}
            <p className="text-orange-600 italic font-medium mb-4">
              "Reliable solutions for every office need."
            </p>

            {/* Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed">
              We bring together savory classics and everyday favorites that
              everyone looks forward to. Each bite is crafted to keep workdays
              energized and every break more enjoyable. Familiar flavors that
              never go out of taste.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <div className="rounded-2xl border-2 border-orange-500 overflow-hidden shadow-lg">
              <img
                src="/Corporate Orders.png"
                alt="Corporate Snacks"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-10 py-20 px-6 bg-[#FFFBF8]">
        {/* Left Image */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 flex justify-center">
            <div className="rounded-2xl border-2 border-orange-500 overflow-hidden shadow-lg">
              <img
                src="/Tea & Coffee Solutions.png"
                alt="Beverage Solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            {/* Icon */}
            <div className="mb-4 w-14 h-14">
              <img src="/beverages.png"></img>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-[#0d1421] mb-2">
              Beverage Solutions
            </h2>

            {/* Subheading */}
            <p className="text-orange-600 italic font-medium mb-4">
              "Keeping your team refreshed, one cup at a time."
            </p>

            {/* Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed">
              From morning chai to evening cold brews, we keep your energy
              flowing all day. Choose from teas, coffees, and refreshing juices
              to suit every taste. Whatever you crave, we've got you covered.
              Ensuring the right sip is always within reach.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-10 py-20 px-6 bg-[#FFFBF8]">
        {/* Left Content */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            {/* Icon */}
            <div className="mb-4 w-14 h-14">
              <img src="/corporate-meals.png"></img>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-[#0d1421] mb-2">
              Corporate Meals
            </h2>

            {/* Subheading */}
            <p className="text-orange-600 italic font-medium mb-4">
              “Nutritious, delicious, and made for the workplace.”
            </p>

            {/* Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed">
              Delivered fresh and on time, our menus bring together variety and
              great taste. Every meal is crafted to keep teams fueled, focused,
              and ready to take on the day. Food that satisfies without ever
              slowing you down.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <div className="rounded-2xl border-2 border-orange-500 overflow-hidden shadow-lg">
              <img
                src="/Corporate Meals.png"
                alt="Corporate Snacks"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-10 py-20 px-6 bg-[#FFFBF8]">
        {/* Left Image */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 flex justify-center">
            <div className="rounded-2xl border-2 border-orange-500 overflow-hidden shadow-white-lg">
              <img
                src="/cakes.png"
                alt="Beverage Solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            {/* Icon */}
            <div className="mb-4 w-14 h-14">
              <img src="/cakess.png"></img>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-[#0d1421] mb-2">
              Cakes for Corporate Celebrations
            </h2>

            {/* Subheading */}
            <p className="text-orange-600 italic font-medium mb-4">
              “Every milestone deserves a sweet memory.”
            </p>

            {/* Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed">
              Milestones deserve sweetness. We craft and deliver fresh cakes and
              desserts tailored to birthdays, anniversaries, and
              achievements—making every occasion memorable.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-10 py-20 px-6 bg-[#FFFBF8]">
        {/* Left Content */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            {/* Icon */}
            <div className="mb-4 w-14 h-14">
              <img src="/vending.png"></img>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-[#0d1421] mb-2">
              Vending Solutions
            </h2>

            {/* Subheading */}
            <p className="text-orange-600 italic font-medium mb-4">
              “Convenience at your fingertips.”
            </p>

            {/* Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed">
              Healthy convenience around the clock. Our smart vending machines
              offer curated snacks and beverages with seamless payments, full
              servicing, and 24/7 availability.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <div className="rounded-2xl border-2 border-orange-500 overflow-hidden shadow-lg">
              <img
                src="/Corporate Gift Kits.png"
                alt="Corporate Snacks"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-10 py-20 px-6 bg-[#FFFBF8]">
        {/* Left Image */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 flex justify-center">
            <div className="rounded-2xl border-2 border-orange-500 overflow-hidden shadow-white-lg">
              <img
                src="/Corporate Gift Kits (1).png"
                alt="Beverage Solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            {/* Icon */}
            <div className="mb-4 w-14 h-14">
              <img src="/gift-kits.png"></img>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-[#0d1421] mb-2">
              Corporate Gift Kits
            </h2>

            {/* Subheading */}
            <p className="text-orange-600 italic font-medium mb-4">
              “Thoughtful gestures that go beyond words.”
            </p>

            {/* Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed">
              Celebrate connections with ease. Our custom hampers and branded
              gift kits make recognition, festive celebrations, and client
              appreciation thoughtful yet effortless.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-100 text-orange-500 px-6 py-2 rounded-full text-sm font-medium mb-4">
              Every Bite, a Moment
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Bites and Moments
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We believe every moment at work deserves the right bite. From
              quick grab-and-go snacks for meetings to interactive counters that
              energize events, we create experiences that keep teams connected.
              Sweet finishes and pantry-ready options ensure that every break
              feels special.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  {/* Sample Image - Replace with actual images */}
                  <div
                    className={`w-full h-full ${service.bgColor} flex items-center justify-center relative`}
                  >
                    {/* Mock content for each service type */}

                    {/* Replace all mock content above with actual images like this: */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h3 className={`text-2xl font-bold ${service.titleColor}`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Number indicator */}
                  <div className="pt-2 text-right">
                    <span className="text-2xl font-light text-gray-400">
                      {service.id}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-[#FFFBF8] mb-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-orange-100 text-orange-500 px-6 py-2 rounded-full text-sm font-medium mb-4">
            Our Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How We Make <span className="text-orange-500">Snacking</span> Simple
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We take the stress out of workplace food. Start with a no-obligation
            3-day trial, explore menus customized to your team's tastes, and
            enjoy seamless pre-scheduled deliveries. With ongoing feedback
            shaping our offerings, we make sure your team looks forward to every
            bite.
          </p>
        </div>

        {/* Process Cards */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Blue */}
            <div className="relative bg-white border-2 border-blue-300 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300">
              {/* Number */}
              <div className="text-gray-300 text-4xl font-light mb-6">01</div>

              {/* Icon */}
              <img src="/trial-run.png"></img>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                3 Days Trial Run
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Experience our service first hand with a complimentary trial
                that lets your team sample menus and setups before committing.
              </p>

              {/* Bottom gradient line */}
              <div className="absolute bottom-8 left-6 right-6 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
            </div>

            {/* Card 2 - Purple */}
            <div className="relative bg-white border-2 border-purple-300 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300">
              {/* Number */}
              <div className="text-gray-300 text-4xl font-light mb-6">02</div>

              {/* Icon */}
              <img src="/menus.png"></img>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Customized Menus
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Curated food and beverage plans built around your team's
                preferences, dietary needs, and office culture.
              </p>

              {/* Bottom gradient line */}
              <div className="absolute bottom-8 left-6 right-6 h-1 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"></div>
            </div>

            {/* Card 3 - Green */}
            <div className="relative bg-white border-2 border-green-300 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300">
              {/* Number */}
              <div className="text-gray-300 text-4xl font-light mb-6">03</div>

              {/* Icon */}
              <img src="/orders.png"></img>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Easy Pre-Orders
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Pre-scheduled deliveries that keep your pantry and meal service
                running smoothly, without last minute hassles.
              </p>

              {/* Bottom gradient line */}
              <div className="absolute bottom-8 left-6 right-6 h-1 bg-gradient-to-r from-green-500 to-green-400 rounded-full"></div>
            </div>

            {/* Card 4 - Red/Orange */}
            <div className="relative bg-white border-2 border-red-300 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300">
              {/* Number */}
              <div className="text-gray-300 text-4xl font-light mb-6">04</div>

              {/* Icon */}
              <img src="/driven.png"></img>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Feedback-Driven
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                We actively incorporate your team's input, continuously refining
                menus to keep everyone happy and engaged.
              </p>

              {/* Bottom gradient line */}
              <div className="absolute bottom-8 left-6 right-6 h-1 bg-gradient-to-r from-red-500 to-orange-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-500 px-6 py-2 rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why <span className="text-orange-500">Intake</span> works for you?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The advantages that set us apart in corporate food solutions
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
              {/* Row 1 - 3 items */}
              {advantages.slice(0, 3).map((advantage, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    {advantage.icon}

                    <div className="flex-1">
                      {/* Title */}
                      <h3 className="text-gray-900 font-medium text-lg leading-relaxed mb-4">
                        {advantage.title}
                      </h3>

                      {/* Decorative accent line */}
                      <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-orange-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Row 2 - Item 4 (first column) */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  {advantages[3].icon}

                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-gray-900 font-medium text-lg leading-relaxed mb-4">
                      {advantages[3].title}
                    </h3>

                    {/* Decorative accent line */}
                    <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-orange-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Row 2 - Item 5 (second column) */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  {advantages[4].icon}

                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-gray-900 font-medium text-lg leading-relaxed mb-4">
                      {advantages[4].title}
                    </h3>

                    {/* Decorative accent line */}
                    <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-orange-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Empty third column */}
              <div></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-[#F9F5F2]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-black text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              Because Food Matters
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Our <span className="text-orange-500">Story</span> - Our{" "}
              <span className="text-orange-500">Goal</span>
            </h2>
          </div>

          {/* Story Card */}
          <div className="bg-gray-900 rounded-3xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">
              Why We Started <span className="text-orange-500">Intake</span>
            </h3>

            <div className="space-y-6 text-gray-200 text-lg leading-relaxed max-w-4xl mx-auto">
              <p>
                We've been there—working long hours, counting down to office
                breaks, wishing for better food options. That's why we started
                Intake.
              </p>

              <p>
                To bring variety, freshness, and excitement to workplace dining.
                Snacks, meals, and treats that we'd love to eat
                ourselves—turning every break into something to look forward to,
                not just get through.
              </p>
            </div>

            {/* Decorative accent line */}
            <div className="mt-8 w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full mx-auto"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
