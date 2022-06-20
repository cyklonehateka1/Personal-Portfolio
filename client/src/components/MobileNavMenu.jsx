const MobileNavMenu = () => {
  return (
    <div className=" ">
      <ul className="bg-blue-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center text-xl uppercase">
        <li>
          <span>home</span>
        </li>
        <li>
          <span>services</span>
        </li>
        <li>
          <span>about</span>
        </li>
        <li>
          <span>works</span>
        </li>
        <li>
          <span>contact</span>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavMenu;
