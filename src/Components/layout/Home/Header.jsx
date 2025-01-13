function Header() {
  return (
    <div className="bg-myblue w-full flexbox relative py-3 px-28">
      <img
        src="https://static.priceoye.pk/images/logo.svg"
        alt="Error Image"
        className="w-32 h-12"
      />
      <form className="position w-96">
        <input
          type="text"
          placeholder="I'm shopping for ..."
          className="w-full relative px-2 py-2.5 focus:outline-none rounded-lg placeholder:text-sm caret-myblack"
        />
        <i className="ri-search-line absolute right-2 top-1/2 -translate-y-1/2 text-myblue text-xl pointer"></i>
      </form>
      <div className="flex gap-x-3">
        <i className="ri-account-circle-line icons"></i>
        <i className="ri-shopping-cart-line icons"></i>
        <i className="ri-heart-3-line icons"></i>
      </div>
    </div>
  );
}

export default Header;
