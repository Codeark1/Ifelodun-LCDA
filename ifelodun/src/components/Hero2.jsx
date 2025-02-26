import Image from "next/image";

const councilData = {
  title: "Welcome to Ifelodun LCDA",
  description: `Ifelodun Local Council Development Area (L.C.D.A) was carved out of the Ajeromi–Ifelodun Local Government Area (L.G.A) with Administrative Headquarter at 3, Dispensary Street, Mosafejo, Amukoko, Lagos State. `,
  details: `Ifelodun LCDA has two coordinating area offices, one at “Layeni Area Office” situated at Ojo Road, (Oja Bus-stop) while the second is “Amukoko Area office”, situated inside the Ifelodun L.C.D.A headquarter Mosafejo, Amukoko.`,
  initiatives: [
    "Infrastructural Development",
    "Youth/Women Empowerment",
    "Improved Health Care System",
    "Human Capacity Development",
  ],
  buttonText: "Read More",
  imageSrc: "/images/chairman4.jpg",
  officialName: "Hon. Fuad Atanda-Lawal",
  officailPosition: "Executive Chairman",
};

const CouncilWelcome = () => {
  return (
  <div className="min-h-screen bg-slate-100">
      <div className="flex flex-col  md:flex-row items-center gap-6 p-6">
      {/* Left: Image Section */}
      <div className="w-full md:w-1/2 flex justify-center flex-col text-center">
        <Image
          src={councilData.imageSrc}
          alt={councilData.officialName}
          width={600}
          height={600}
        />
        <p className="text-[#1c1c1c] font-sans font-medium text-lg">
          {councilData.officialName}
        </p>
        <p className="italic font-sans text-[#1c1c1c]">
          {councilData.officailPosition}
        </p>
      </div>

      {/* Right: Text Section */}
      <div className="w-full md:w-2/3">
        <h1 className="text-2xl md:text-3xl font-bold font-sans text-green-700">
          {councilData.title}
        </h1>
        <p className="text-[#1c1c1c] mt-2 font-sans leading-8">{councilData.description}</p>
        <p className="text-[#1c1c1c] mt-2 font-sans leading-8">{councilData.details}</p>

        {/* List of Initiatives */}
        <ul className="mt-4 space-y-2">
          {councilData.initiatives.map((item, index) => (
            <li key={index} className="flex items-center space-x-2 font-medium text-[#1c1c1c]">
              ✅ <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Read More Button */}
        <button className="mt-6 px-6 py-2 bg-green-900 text-white font-medium font-sans rounded-md hover:bg-[#0F1E50] transition">
          {councilData.buttonText}
        </button>
      </div>
  
    </div>
    <div className="w-full text-center mt-10 md:mt-16 pb-4  font-sans ">
      <h2 className="text-2xl font-bold font-sans text-green-700">
        Ifelodun’s Growth Story
      </h2>
   
      <div className="mt-4 flex justify-center">
        <video
          className="w-full md:w-1/2 rounded-lg p-2 sm:p-1"
          controls
          preload="metadata" 
          playsInline 
          poster="/images/chairman.jpg" 
          
        >
          <source src="/images/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
  );
};

export default CouncilWelcome;

