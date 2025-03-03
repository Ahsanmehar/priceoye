function HeadingSection({ title }) {
  return (
    <div className="w-full h-[1px] bg-myblue bg-blue flexcenter">
      <h1 className="bg-myblue w-fit text-3xl max-l:text-[25px] max-2:text-[16px]	px-4 max-2:px-[12px] py-1.5 max-2:py-[3px] text-white">{title}</h1>
    </div>
  );
}

export default HeadingSection;
