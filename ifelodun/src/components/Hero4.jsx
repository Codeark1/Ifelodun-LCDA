import Image from "next/image";

// Emergency Numbers Data
const emergencyNumbers = [
  { number: "112", label: "Medical Emergency", icon: "/svgs/ambulance.svg" },
  { number: "767", label: "Distress Call", icon: "/police-icon.svg" },
  { number: "112", label: "Distress Call", icon: "/alert-icon.svg" },
];

const EmergencyNumbers = () => {
  return (
    <section className="px-6  bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-6">
          Helplines and Emergency Numbers
        </h2>

        {/* Emergency Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {emergencyNumbers.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md transition-transform hover:scale-105"
            >
              {/* Icon in Top Right */}
              <div className="relative w-full flex justify-end">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={24}
                    height={24}
                  />
                </div>
              </div>

              {/* Emergency Number */}
              <h3 className="text-green-600 text-4xl font-bold mt-2">
                {item.number}
              </h3>
              <p className="text-gray-800 text-lg font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencyNumbers;
