function Rock({ className, winner }) {
  return (
    <div
      className={`${className} flex items-center justify-center rounded-full border-[1rem] border-red-500 bg-white shadow-[inset_0px_5px_0px_0px_#dedede,0px_5px_0px_0px_#C43838]`}
    >
      <img src="/images/icon-rock.svg" alt="icon-rock" className="h-12" />
    </div>
  );
}

export default Rock;
