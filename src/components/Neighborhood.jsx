import {
  Landmark,
  Train,
  Plane,
  Building2,
  Hospital,
  ShoppingBag,
  GraduationCap
} from "lucide-react";

const locations = [
  {
    icon: <Landmark className="w-5 h-5 text-yellow-700" />,
    label: "Airoli via the Mulund-Airoli-Palava Freeway",
    time: "20 mins",
  },
  {
    icon: <Train className="w-5 h-5 text-yellow-700" />,
    label: "Metro Station",
    time: "5 mins",
  },
  {
    icon: <Plane className="w-5 h-5 text-yellow-700" />,
    label: "Navi Mumbai International Airport via the upcoming DP road",
    time: "30 mins",
  },
  {
    icon: <Building2 className="w-5 h-5 text-yellow-700" />,
    label: "Bullet Train Station",
    time: "10 mins",
  },
  {
    icon: <Hospital className="w-5 h-5 text-yellow-700" />,
    label: "Jupiter Hospital",
    time: "15 mins",
  },
  {
    icon: <ShoppingBag className="w-5 h-5 text-yellow-700" />,
    label: "Xperia Mall",
    time: "15 mins",
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-yellow-700" />,
    label: "The Shri Ram Universal School",
    time: "4 mins",
  },
];

const Neighbourhood = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 text-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left text block */}
        <div>
          <h2 className="text-2xl md:text-3xl font-serif mb-4">
            Explore the neighbourhood
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Private, yet perfectly placed. Serenely away from the city’s bustle,
            yet seamlessly connected to the heart of MMR.
          </p>
        </div>

        {/* Right list block */}
        <div className="space-y-5 text-sm md:text-base">
          {locations.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border-b border-gray-200 pb-2"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="text-gray-700">{item.label}</span>
              </div>
              <span className="font-semibold text-gray-700 whitespace-nowrap">
                {item.time}
              </span>
            </div>
          ))}

          <p className="text-xs text-gray-500 italic mt-6">
            *Upcoming infrastructure/ development
          </p>
          <p className="text-xs text-gray-500">
            Note: All distances stated in minutes are estimated travel time
            during normal traffic.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Neighbourhood;
