/* eslint-disable no-unused-vars */
import React from "react";
import maleAvatar from "../assets/image/male-avatar.jpg";
import femaleAvatar from "../assets/image/female-avater.jpg";
import { Avatar } from "flowbite-react";

const UserAvatarImage = () => {
 
  let user = JSON.parse(localStorage.getItem("set_user"));

  return (
    <>
      {user.profile_photo_url !== null ? (
        <>
          {/* // Has user profile image */}
          <Avatar
            className="cursor-pointer"
            img={user.profile_photo_url}
            rounded
            bordered
          />
        </>
      ) : (
        <>
          {user.gender == "male" ? (
            <>
              <Avatar
                className="cursor-pointer"
                img={maleAvatar}
                rounded
                bordered
              />
            </>
          ) : (
            <>
              <Avatar
                className="cursor-pointer"
                img={femaleAvatar}
                rounded
                bordered
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default UserAvatarImage;
