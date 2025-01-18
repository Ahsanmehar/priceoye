function FormButton({ name, icon }) {
  return (
    <button className="w-[128px] h-[48px] border-myblack border-[1px] rounded-[7px] flexcenter gap-[2px] pointer">
      <i className={icon}></i>
      {name}
    </button>
  );
}

export default FormButton;
