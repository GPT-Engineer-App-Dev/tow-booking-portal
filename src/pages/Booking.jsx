function Booking() {
  return (
    <div>
      <h1 className="text-3xl text-center">Book a Tow Service</h1>
      <form className="max-w-md mx-auto mt-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Contact Number</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Service Required</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Preferred Date/Time</label>
          <input type="datetime-local" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md">Submit</button>
      </form>
    </div>
  );
}

export default Booking;