import logo from "/assets/logo.svg";

const Sidebar = () => {
  return (
    <aside className="flex flex-col border-r border-[#dbdbdb]">
      <div className="ml-6">
        <img src={logo} alt="insta-logo" className="h-16 w-[90px] mt-8" />

        <div className="mt-6 flex flex-col justify-center gap-8">
          <div>
            <p>Home</p>
          </div>
          <div>
            <p>Search</p>
          </div>
          <div>
            <p>Explore</p>
          </div>
          <div>
            <p>Reels</p>
          </div>
          <div>
            <p>Messages</p>
          </div>
          <div>
            <p>Notifications</p>
          </div>
          <div>
            <p>Create</p>
          </div>
          <div>
            <p>Profile</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
