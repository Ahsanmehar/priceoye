function HeadingSection({ title }) {
  return (
    <div className="w-full h-[1px] bg-myblue bg-blue flexcenter">
      <h1 className="bg-myblue w-fit text-3xl	px-4 py-1.5 text-white">{title}</h1>
    </div>
  );
}

export default HeadingSection;
