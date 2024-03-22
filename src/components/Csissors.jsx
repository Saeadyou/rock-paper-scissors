function Csissors({ className }) {
  return (
    <div
      className={`${className} flex items-center justify-center rounded-full border-[1rem] border-yellow-500 bg-white shadow-[inset_0px_5px_0px_0px_#dedede,0px_5px_0px_0px_#CA9A07]`}
    >
      <div className="winner absolute h-96 w-96 rounded-full"></div>
      <img
        src="/images/icon-scissors.svg"
        alt="icon-scissors"
        className="h-12"
      />
    </div>
  );
}

export default Csissors;
