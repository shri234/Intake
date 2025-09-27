import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import CollaborationModal from "./components/CollabrationModal";
import Footer from "./components/footer";
import { motion } from "framer-motion";

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

  const dropIn = {
    hidden: { y: -80, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 180 } },
  };

  const slideLeft = {
    hidden: { x: -80, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 1.2 } },
  };

  const slideRight = {
    hidden: { x: 80, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 1.2 } },
  };

  const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1.2 } },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2, // each child animates 0.2s after previous
      },
    },
  };

  const fadeUpStagger = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

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
            <img src="/logo12.png" alt="Intake Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => handleOpenModal("contact")}
              className="px-6 py-2 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Contact Us
            </button>

            <button
              onClick={() => handleOpenModal("partner")}
              className="px-6 py-2 bg-[#F54900] text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-200"
            >
              Partner with Us
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden">
            <button
              // onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {/* Simple Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <CollaborationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        defaultTab={initialTab} // Pass the state to set the initial view
      />
      <motion.section
        className="max-w-7xl mx-auto px-6 py-12 mt-20 mb-24 grid md:grid-cols-2 gap-8 items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left content */}
        <motion.div variants={fadeUp}>
          <motion.h1
            className="text-[60px] font-bold"
            style={{ lineHeight: 1.1 }}
            variants={fadeUp}
          >
            Elevating Workdays,{" "}
            <span className="text-[#F54900]">One Bite at a Time.</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-[20px] text-gray-600"
            variants={fadeUp}
          >
            At Intake,{" "}
            <span
              className="font-medium"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FF6900 0%, #AD46FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Corporate snacking and food solutions
            </span>{" "}
            are at the heart of what we do. We make food at work simple,
            enjoyable, and memorable, helping teams connect over every break and
            meal. From snacks and meals to beverages and celebrations, we’ve got
            workplaces covered throughout the day. Because a good snack or a
            tasty meal can brighten the mood, we focus on making every bite
            worth it—fresh, flavorful, and never boring.
          </motion.p>

          <motion.button
            className="mt-6 px-6 py-3 text-white rounded-lg shadow-lg hover:scale-105 transition"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #F54900 27.4%, #F54900 60.58%, #F0B100 100%)",
            }}
            variants={fadeUp}
          >
            Start 3-day Trial
          </motion.button>
        </motion.div>

        {/* Right content */}
        <motion.div
          className="relative flex justify-center items-center h-[300px] md:h-[400px]"
          variants={fadeUp}
        >
          {/* Yellow Blob Background */}
          <motion.div
            className="absolute inset-0 flex justify-center items-center"
            variants={dropIn}
          >
            <img
              src="/YellowBlobBackground.png"
              alt="Decorative blob background"
              className="w-[550px] h-[550px] object-contain"
              style={{ transform: "rotate(-5deg)" }}
            />
          </motion.div>

          {/* Line Ornaments */}
          <motion.img
            src="/Line_Ornament.png"
            alt="Decorative Line Ornament"
            className="absolute w-10 h-10 -top-11 right-3 transform rotate-[14deg]"
            variants={fadeUp}
          />

          <motion.img
            src="/Line_Ornament1.png"
            alt="Decorative Line Ornament"
            className="absolute w-10 h-10 -bottom-11 left-6 transform -rotate-[14deg]"
            variants={fadeUp}
          />

          {/* Foreground image */}
          <motion.div
            className="relative w-[480px] h-[370px] rounded-2xl overflow-hidden shadow-2xl z-10"
            variants={dropIn}
          >
            <img
              src="/Corporate catering and office food solutions.png"
              alt="People eating"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="w-full flex flex-col items-center justify-center py-16 px-6 bg-gradient-to-b from-white to-[#fafafa]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        {/* Badge */}
        <motion.span
          className="px-4 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-600 mb-3"
          variants={fadeUpStagger}
        >
          Meet Intake
        </motion.span>

        {/* Heading */}
        <motion.h2
          className="text-[60px] font-medium text-gray-900 mb-8"
          variants={fadeUpStagger}
        >
          About Us
        </motion.h2>

        {/* Black Box */}
        <motion.div
          className="max-w-4xl bg-black text-white rounded-2xl shadow-lg p-8 text-center mb-8"
          variants={fadeUpStagger}
        >
          <motion.p
            className="text-[22px] leading-relaxed"
            variants={fadeUpStagger}
          >
            Food is more than a necessity—it’s an opportunity to connect,
            celebrate, and energize. At{" "}
            <span className="text-orange-500 font-semibold">Intake</span> we
            specialize in providing end-to-end corporate food solutions that
            blend convenience, variety, and excellence. With multiple vendor
            partnerships, a commitment to hygiene, and an unwavering focus on
            client satisfaction, we make sure your organization enjoys a
            seamless dining experience every day.
          </motion.p>
        </motion.div>

        {/* Gradient Box */}
        <motion.div
          className="max-w-3xl text-center bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 rounded-xl p-6"
          variants={fadeUpStagger}
        >
          <motion.p
            className="text-lg leading-relaxed text-gray-900"
            variants={fadeUpStagger}
          >
            From{" "}
            <span className="text-orange-600 font-semibold">
              small office orders
            </span>{" "}
            to{" "}
            <span className="text-red-600 font-semibold">
              large corporate events
            </span>
            , we ensure variety, convenience, and excellence—every single day.
          </motion.p>
        </motion.div>

        {/* Gradient Line */}
        <motion.div
          className="h-1 w-20 mt-8 rounded-full bg-gradient-to-r from-orange-500 to-purple-500"
          variants={fadeUpStagger}
        />
      </motion.section>
      <motion.section
        className="w-full flex flex-col items-center justify-center py-20 px-6 bg-[#FFFBF8]"
        initial="hidden"
        animate="show"
        variants={fadeUp}
      >
        <motion.span
          className="px-4 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-600 mb-4"
          variants={fadeUp}
        >
          Our Services
        </motion.span>

        <motion.h2
          className="max-w-5xl text-center text-[60px] font-medium text-[#101828] mb-6"
          style={{ lineHeight: 1.1 }}
          variants={dropIn}
        >
          Smart <span className="text-orange-600">food</span> & beverage{" "}
          <span className="text-orange-600">solutions</span> designed for modern
          workplaces.
        </motion.h2>

        <motion.p
          className="max-w-3xl text-center text-lg text-gray-700"
          variants={fadeUp}
        >
          We keep teams energized, connected, and inspired—whether it’s daily
          snacks, fresh meals, or milestone celebrations.
        </motion.p>
      </motion.section>

      {/* Service Sections */}
      {[
        {
          title: "Corporate Snacks",
          sub: '"Reliable solutions for every office need."',
          desc: `We bring together savory classics and everyday favorites that
            everyone looks forward to. Each bite is crafted to keep workdays
            energized and every break more enjoyable. Familiar flavors that
            never go out of taste.`,
          icon: "/Background+Shadow.png",
          image: "/Corporate Orders.png",
          reverse: false,
        },
        {
          title: "Beverage Solutions",
          sub: '"Keeping your team refreshed, one cup at a time."',
          desc: `From morning chai to evening cold brews, we keep your energy
            flowing all day. Choose from teas, coffees, and refreshing juices
            to suit every taste. Whatever you crave, we've got you covered.
            Ensuring the right sip is always within reach.`,
          icon: "/beverages.png",
          image: "/Tea & Coffee Solutions.png",
          reverse: true,
        },
        {
          title: "Corporate Meals",
          sub: "“Nutritious, delicious, and made for the workplace.”",
          desc: `Delivered fresh and on time, our menus bring together variety and
            great taste. Every meal is crafted to keep teams fueled, focused,
            and ready to take on the day. Food that satisfies without ever
            slowing you down.`,
          icon: "/corporate-meals.png",
          image: "/Corporate Meals.png",
          reverse: false,
        },
        {
          title: "Cakes for Corporate Celebrations",
          sub: "“Every milestone deserves a sweet memory.”",
          desc: `Milestones deserve sweetness. We craft and deliver fresh cakes and
            desserts tailored to birthdays, anniversaries, and
            achievements—making every occasion memorable.`,
          icon: "/cakess.png",
          image: "/cakes.png",
          reverse: true,
        },
        {
          title: "Vending Solutions",
          sub: "“Convenience at your fingertips.”",
          desc: `Healthy convenience around the clock. Our smart vending machines
            offer curated snacks and beverages with seamless payments, full
            servicing, and 24/7 availability.`,
          icon: "/vending.png",
          image: "/Corporate Gift Kits.png",
          reverse: false,
        },
        {
          title: "Corporate Gift Kits",
          sub: "“Thoughtful gestures that go beyond words.”",
          desc: `Celebrate connections with ease. Our custom hampers and branded
            gift kits make recognition, festive celebrations, and client
            appreciation thoughtful yet effortless.`,
          icon: "/gift-kits.png",
          image: "/Corporate Gift Kits (1).png",
          reverse: true,
        },
      ].map((service, idx) => (
        <motion.section
          key={idx}
          className="w-full py-20 px-6 bg-[#FFFBF8]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div
            className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 ${
              service.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <motion.div
              className="flex-1 flex justify-center"
              variants={service.reverse ? slideLeft : slideRight}
            >
              <div className="rounded-2xl border-2 border-orange-500 overflow-hidden shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="flex-1"
              variants={service.reverse ? slideRight : slideLeft}
            >
              <div className="mb-4 w-14 h-14">
                <img src={service.icon} alt="icon" />
              </div>

              <h2 className="text-3xl font-bold text-[#0d1421] mb-2">
                {service.title}
              </h2>

              <p className="text-orange-600 italic font-medium mb-4">
                {service.sub}
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          </div>
        </motion.section>
      ))}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block bg-orange-100 text-orange-500 px-6 py-2 rounded-full text-sm font-medium mb-4"
            >
              Every Bite, a Moment
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Bites and Moments
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              We believe every moment at work deserves the right bite. From
              quick grab-and-go snacks for meetings to interactive counters that
              energize events, we create experiences that keep teams connected.
              Sweet finishes and pantry-ready options ensure that every break
              feels special.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className={`w-full h-full ${service.bgColor} flex items-center justify-center relative`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className={`text-2xl font-bold ${service.titleColor}`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-[14px] line-clamp-2">
                    {service.description}
                  </p>

                  <div className="text-right">
                    <span className="text-2xl font-light text-gray-400">
                      {service.id}
                    </span>
                  </div>
                </div>
              </motion.div>
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
            {[
              {
                num: "01",
                border: "border-blue-300",
                gradient: "from-blue-500 to-blue-400",
                title: "3 Days Trial Run",
                desc: "Experience our service first hand with a complimentary trial that lets your team sample menus and setups before committing.",
                img: "/trial-run.png",
              },
              {
                num: "02",
                border: "border-purple-300",
                gradient: "from-purple-500 to-purple-400",
                title: "Customized Menus",
                desc: "Curated food and beverage plans built around your team's preferences, dietary needs, and office culture.",
                img: "/menus.png",
              },
              {
                num: "03",
                border: "border-green-300",
                gradient: "from-green-500 to-green-400",
                title: "Easy Pre-Orders",
                desc: "Pre-scheduled deliveries that keep your pantry and meal service running smoothly, without last minute hassles.",
                img: "/orders.png",
              },
              {
                num: "04",
                border: "border-red-300",
                gradient: "from-red-500 to-orange-400",
                title: "Feedback-Driven",
                desc: "We actively incorporate your team's input, continuously refining menus to keep everyone happy and engaged.",
                img: "/driven.png",
              },
            ].map((card, idx) => (
              <motion.div
                key={card.num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className={`relative bg-white border-2 ${card.border} rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300`}
              >
                {/* Number */}
                <div className="text-gray-300 text-4xl font-light mb-6">
                  {card.num}
                </div>

                {/* Icon */}
                <img src={card.img} alt={card.title} />

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {card.desc}
                </p>

                {/* Bottom gradient line */}
                <div
                  className={`absolute bottom-8 left-6 right-6 h-1 bg-gradient-to-r ${card.gradient} rounded-full`}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block bg-orange-100 text-orange-500 px-6 py-2 rounded-full text-sm font-medium mb-4"
            >
              Why Choose Us
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Why <span className="text-orange-500">Intake</span> works for you?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              The advantages that set us apart in corporate food solutions
            </motion.p>
          </div>

          {/* Advantages Grid */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
              {/* Row 1 - 3 items */}
              {advantages.slice(0, 3).map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    {advantage.icon}
                    <div className="flex-1">
                      <h3 className="text-gray-900 font-medium text-lg leading-relaxed mb-4">
                        {advantage.title}
                      </h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-orange-400 rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Row 2 - Item 4 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  {advantages[3].icon}
                  <div className="flex-1">
                    <h3 className="text-gray-900 font-medium text-lg leading-relaxed mb-4">
                      {advantages[3].title}
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-orange-400 rounded-full"></div>
                  </div>
                </div>
              </motion.div>

              {/* Row 2 - Item 5 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  {advantages[4].icon}
                  <div className="flex-1">
                    <h3 className="text-gray-900 font-medium text-lg leading-relaxed mb-4">
                      {advantages[4].title}
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-orange-400 rounded-full"></div>
                  </div>
                </div>
              </motion.div>

              {/* Empty column */}
              <div></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-[#F9F5F2]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="inline-block bg-black text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
            >
              Because Food Matters
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-gray-900"
            >
              Our <span className="text-orange-500">Story</span> - Our{" "}
              <span className="text-orange-500">Goal</span>
            </motion.h2>
          </div>

          {/* Story Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-3xl p-8 lg:p-12 text-center shadow-xl hover:shadow-2xl transition-shadow"
          >
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-3xl font-bold text-white mb-8"
            >
              Why We Started <span className="text-orange-500">Intake</span>
            </motion.h3>

            <div className="space-y-6 text-gray-200 text-lg leading-relaxed max-w-4xl mx-auto">
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
              >
                We've been there—working long hours, counting down to office
                breaks, wishing for better food options. That's why we started
                Intake.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                viewport={{ once: true }}
              >
                To bring variety, freshness, and excitement to workplace dining.
                Snacks, meals, and treats that we'd love to eat
                ourselves—turning every break into something to look forward to,
                not just get through.
              </motion.p>
            </div>

            {/* Decorative accent line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ duration: 0.7, delay: 0.7 }}
              viewport={{ once: true }}
              className="mt-8 h-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full mx-auto"
            ></motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
