'use client'

import { useState } from "react";
import Image from "next/image";
import { ButtonPrimary, ButtonTittle, ButtonSecondary } from "../Button";

import icon from "../../../public/icons/iconCompany.svg";
import dashboard from "../../../public/icons/dashboard.svg";
import users from "../../../public/icons/users.svg";
import iconUp from "../../../public/icons/iconUp.svg";
import message from "../../../public/icons/message.svg";
import security from "../../../public/icons/security.svg";
import settings from "../../../public/icons/settings.svg";
import notifications from "../../../public/icons/notifications.svg";
import password from "../../../public/icons/password.svg";
import goals from "../../../public/icons/goals.svg";
import config from "../../../public/icons/config.svg";

const SideBar = () => {

  const [firstMenu, setFirstMenu] = useState(false);
  const [secondMenu, setSecondMenu] = useState(false);
  const [thirdMenu, setThirdMenu] = useState(false);



  const showFirstMenu = () => {
    let icon1 = document.getElementById("icon1");
    if(firstMenu === false){
      setFirstMenu(true);
      icon1.style.transform = "rotate(180deg)";
    }else{
      setFirstMenu(false);
      icon1.style.transform = "rotate(0deg)";
    }
  };
  const showSecondMenu = () => {
    let icon2 = document.getElementById("icon2");
    if(secondMenu === false){
      setSecondMenu(true);
      icon2.style.transform = "rotate(180deg)";
    }else{
      setSecondMenu(false);
      icon2.style.transform = "rotate(0deg)";
    }
  };
  const showThirdMenu = () => {
    let icon3 = document.getElementById("icon3");
    if(thirdMenu === false){
      setThirdMenu(true);
      icon3.style.transform = "rotate(180deg)";
    }else{
      setThirdMenu(false);
      icon3.style.transform = "rotate(0deg)";
    }
  };

  return (
      <div
        id="Main"
        className="xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full  w-full sm:w-64 bg-gray-900 flex-col"
      >
        <div className="flex justify-start p-6 items-center space-x-3">
          <Image src={icon} alt="icon" />
          <p className="text-2xl leading-6 text-white">Solar Control</p>
        </div>
        <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
          <ButtonPrimary>
            <Image src={dashboard} alt="dashboard" />
            <p className="text-base leading-4 ">Dashboard</p>
          </ButtonPrimary>
          <ButtonPrimary>
            <Image src={users} alt="users" />
            <p className="text-base leading-4 ">Users</p>
          </ButtonPrimary>
        </div>
        <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-600 w-full  ">
          <ButtonTittle onClick={showFirstMenu}>
            <p className="text-sm leading-5  uppercase">Profile Overview</p>
            <Image id="icon1" src={iconUp} alt="iconUp" />
          </ButtonTittle>
          {firstMenu ? <div
            className="flex justify-start  flex-col w-full md:w-auto items-start pb-1 "
          >
            <ButtonSecondary>
              <Image src={message} alt="message" />
              <p className="text-base leading-4  ">Messages</p>
            </ButtonSecondary>
            <ButtonSecondary>
              <Image src={security} alt="security" />
              <p className="text-base leading-4  ">Security</p>
            </ButtonSecondary>
            <ButtonSecondary>
              <Image src={settings} alt="setting" />
              <p className="text-base leading-4  ">Settings</p>
            </ButtonSecondary>
            <ButtonSecondary>
              <Image src={notifications} alt="notifications" />
              <p className="text-base leading-4  ">Notifications</p>
            </ButtonSecondary>
            <ButtonSecondary>
              <Image src={password} alt="password" />
              <p className="text-base leading-4  ">Passwords</p>
            </ButtonSecondary>
            <ButtonSecondary>
              <Image src={goals} alt="goals" />
              <p className="text-base leading-4  ">Goals</p>
            </ButtonSecondary>
          </div> : null}
        </div>
        <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-600 w-full  ">
          <ButtonTittle onClick={showSecondMenu}>
            <p className="text-sm leading-5 uppercase">PLANTS</p>
            <Image id="icon2" src={iconUp} alt="iconUp" />
          </ButtonTittle>
          {secondMenu ? <div
            className="flex justify-start flex-col w-full md:w-auto items-start pb-1 "
          >
            <ButtonSecondary>
              <Image src={message} alt="message" />
              <p className="text-base leading-4  ">Messages</p>
            </ButtonSecondary>
            <ButtonSecondary>
              <Image src={security} alt="security" />
              <p className="text-base leading-4  ">Security</p>
            </ButtonSecondary>
            <ButtonSecondary>
              <Image src={settings} alt="setting" />
              <p className="text-base leading-4  ">Settings</p>
            </ButtonSecondary>
            <ButtonSecondary>
              <Image src={notifications} alt="notifications" />
              <p className="text-base leading-4  ">Notifications</p>
            </ButtonSecondary>
            <ButtonSecondary>
              <Image src={password} alt="password" />
              <p className="text-base leading-4  ">Passwords</p>
            </ButtonSecondary>
            <ButtonSecondary>
              <Image src={goals} alt="goals" />
              <p className="text-base leading-4  ">Goals</p>
            </ButtonSecondary>
          </div> : null}
        </div>
        <div className="flex flex-col justify-between items-center h-full pb-6   px-6  w-full">
          <ButtonTittle onClick={showThirdMenu}>
            <p className="text-sm leading-5  uppercase">SERVICES</p>
            <Image id="icon3" src={iconUp} alt="iconUp" />
          </ButtonTittle>
          {thirdMenu ? <div
            className="flex justify-start  flex-col w-full md:w-auto items-start pb-1 "
          >
            <ButtonSecondary>
              <Image src={message} alt="message" />
              <p className="text-base leading-4  ">Messages</p>
            </ButtonSecondary>
            <ButtonSecondary>
              <Image src={security} alt="security" />
              <p className="text-base leading-4  ">Security</p>
            </ButtonSecondary>
            <ButtonSecondary>
              <Image src={settings} alt="setting" />
              <p className="text-base leading-4  ">Settings</p>
            </ButtonSecondary>
            <ButtonSecondary>
              <Image src={notifications} alt="notifications" />
              <p className="text-base leading-4  ">Notifications</p>
            </ButtonSecondary>
            <ButtonSecondary>
              <Image src={password} alt="password" />
              <p className="text-base leading-4  ">Passwords</p>
            </ButtonSecondary>
            <ButtonSecondary>
              <Image src={goals} alt="goals" />
              <p className="text-base leading-4  ">Goals</p>
            </ButtonSecondary>
          </div> : null}
          <div className=" flex justify-between items-center w-full">
            <div className="flex justify-center items-center  space-x-2">
              <div>
                <Image
                  className="rounded-full"
                  src=""
                  alt="avatar"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex justify-start flex-col items-start">
                <p className="cursor-pointer text-sm leading-5 text-white">
                  Nombre usuario
                </p>
                <p className="cursor-pointer text-xs leading-3 text-gray-300">
                  email usuario
                </p>
              </div>
            </div>
            <Image src={config} alt="config" />
          </div>
        </div>
      </div>
  );
};

export default SideBar;