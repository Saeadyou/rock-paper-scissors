function Paper({ className }) {
  return (
    <div
      className={`${className} flex items-center justify-center rounded-full border-[1rem] border-blue-500 bg-white shadow-[inset_0px_5px_0px_0px_#dedede,0px_5px_0px_0px_#1D57F6]`}
    >
      <img src="/images/icon-paper.svg" alt="icon-paper" className="h-12" />
    </div>
  );
}

export default Paper;
