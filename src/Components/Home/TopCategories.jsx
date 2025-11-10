import React from "react";

const TopCategories = () => {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Top Categories
        </h2>
        <p className="text-blue-600 font-medium max-w-2xl mx-auto">
          Explore the most popular freelance job categories and discover
          opportunities that match your skills and passions.
        </p>
      </div>

      {/*  Row 1  */}
      <div className="relative overflow-hidden">
        <div className="flex gap-8 animate-marquee px-6">
          {/* Card 1 */}
          <div className="min-w-[250px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 cursor-pointer">
            <img
              src="/Web Development.jpg"
              alt="Web Development"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Web Development
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Build modern websites, apps, and digital experiences.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="min-w-[250px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 cursor-pointer">
            <img
              src="/Graphic.jpg"
              alt="Graphic Design"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Graphic Design
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Create visuals that inspire and engage your audience.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="min-w-[250px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 cursor-pointer">
            <img
              src="/digital-marketing-with-icons-business-people.jpg"
              alt="Digital Marketing"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Digital Marketing
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Grow your reach with smart, data-driven campaigns.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="min-w-[250px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 cursor-pointer">
            <img
              src="/content-creator.jpg"
              alt="Content Writing"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Content Writing
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Write compelling stories that connect and convert.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-blue-200 my-12 w-11/12 mx-auto"></div>

      {/*  Row 2  */}
      <div className="relative overflow-hidden">
        <div className="flex gap-8 animate-marquee-reverse px-6">
          {/* Card 5 */}
          <div className="min-w-[250px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 cursor-pointer">
            <img
              src="/video-edit.jpeg"
              alt="Video Editing"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Video Editing
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Edit and enhance visuals to tell powerful stories.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="min-w-[250px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 cursor-pointer">
            <img
              src="/mobile-Desiner.jpg"
              alt="Mobile App Development"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Mobile App Development
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Build responsive apps for Android and iOS platforms.
              </p>
            </div>
          </div>

          {/* Card 7 */}
          <div className="min-w-[250px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 cursor-pointer">
            <img
              src="/Landing Page UIUX Designer.jpg"
              alt="UI/UX Design"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                UI/UX Design
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Design user interfaces that are beautiful and intuitive.
              </p>
            </div>
          </div>

          {/* Card 8 */}
          <div className="min-w-[250px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 cursor-pointer">
            <img
              src="/Virtual Assistance.png"
              alt="Virtual Assistance"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Virtual Assistance
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Manage schedules, data, and communication remotely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
