
const Map = () => {
    return (
      <div className="flex flex-col justify-center items-center p-12">
          <h1 className="mb-6 text-3xl font-sans text-green-600 font-semibold">Locate Us</h1>
        <div className="relative w-full max-w-full h-[400px] rounded-sm shadow-lg border border-gray-300 overflow-hidden">
          <iframe
            className="w-full h-full rounded-lg"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=ifelodun local government lagos&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default Map;
  