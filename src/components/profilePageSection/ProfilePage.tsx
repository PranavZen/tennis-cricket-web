import "../../components/profilePageSection/profilePage.scss";
import Navigation from "../homepg/Navigation/Navigation";
import AllProfileTab from "./profilePageCombineSection/ProfilePageTabs";
import UserInfoCard from "./profilePageCombineSection/UserInfoCard";
const ProfilePage = () => {
  return (
    <section>
      <Navigation />
      <UserInfoCard />
      <div className="container">
        <div className="row">
          <AllProfileTab />
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
