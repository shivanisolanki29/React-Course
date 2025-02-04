const Contact = () => {
  return (
    <div className="text-center h-96 border-dashed p-2">
      <h1 className="font-bold text-xl">Contact Us</h1>
      <form className="pt-5 bg-slate-200">
        <input
          type="text"
          className="border-gray-300 border-2 rounded-sm m-1"
          placeholder="name"
        ></input>
        <input
          type="text"
          className="border-gray-300 border-2 rounded-sm m-1"
          placeholder="message"
        ></input>
        <button className="border-gray-300 border-2 rounded-lg m-1 p-2 bg-green-200">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
