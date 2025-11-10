import React from "react";

const TopCategories = () => {
  return (
    <section className="py-16  flex justify-center">
      <div className="">
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

        {/* Row 1 */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-marquee-left px-6">
            {[
              {
                img: "/Web Development.jpg",
                title: "Web Development",
                desc: "Build modern websites, apps, and digital experiences.",
              },
              {
                img: "/Graphic.jpg",
                title: "Graphic Design",
                desc: "Create visuals that inspire and engage your audience.",
              },
              {
                img: "/digital-marketing-with-icons-business-people.jpg",
                title: "Digital Marketing",
                desc: "Grow your reach with smart, data-driven campaigns.",
              },
              {
                img: "/content-creator.jpg",
                title: "Content Writing",
                desc: "Write compelling stories that connect and convert.",
              },
            ].map((cat, i) => (
              <div
                key={i}
                className="min-w-[250px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 cursor-pointer"
              >
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {cat.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-200 my-12 w-full"></div>

        {/* Row 2 */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-marquee-right px-6">
            {[
              {
                img: "/video-edit.jpeg",
                title: "Video Editing",
                desc: "Edit and enhance visuals to tell powerful stories.",
              },
              {
                img: "/mobile-Desiner.jpg",
                title: "Mobile App Development",
                desc: "Build responsive apps for Android and iOS platforms.",
              },
              {
                img: "/Landing Page UIUX Designer.jpg",
                title: "UI/UX Design",
                desc: "Design user interfaces that are beautiful and intuitive.",
              },
              {
                img: "/Virtual Assistance.png",
                title: "Virtual Assistance",
                desc: "Manage schedules, data, and communication remotely.",
              },
            ].map((cat, i) => (
              <div
                key={i}
                className="min-w-[250px]  rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 cursor-pointer"
              >
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {cat.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
