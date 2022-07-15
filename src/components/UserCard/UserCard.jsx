import "./UserCard.css";
export const UserCard = () => {
  return (
    <>
      <div className="text-center" id="user_icon_div">
        <img src="/user_icon.jpg" alt="user_icon" id="user_icon" />
      </div>
      <div id="user-card-top">
        <p className="m-0">
          <strong>John Doe</strong>
        </p>
        <p className="m-0">John@gmail.com</p>
        <button id="edit_profile_btn" className="ps-2 pe-2 mt-1 mb-3">
          EDIT PROFILE
        </button>
        <div className="row">
          <div className="col-4 text-end">
            <span className="material-symbols-outlined" id="shield_icon">
              shield_with_house
            </span>
          </div>
          <div className="col-6">
            <p className="m-0 text-start">Your CMX Lifetime</p>
            <p className="m-0 text-start">
              points <strong>560</strong>
            </p>
          </div>
        </div>
      </div>
      <div id="user-card-bottom">
        <p>My Dashboard</p>
        <p>Booking history</p>
        <p>Manage saved cards</p>
        <p>Rewards</p>
        <p>Plan a movie party</p>
        <p>Gift cards</p>
        <p>Watchlist</p>
        <p>Preferences</p>
        <p>Logout</p>
      </div>
    </>
  );
};
