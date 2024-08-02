import React, { useState } from "react";
import { sidebarLinks } from "../../../data/dashboard-links";

import { logout } from "../../../services/operations/authApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { VscSignOut } from "react-icons/vsc";
import ConfirmationModal from "../../common/ConfirmationModal";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const { loading: authLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmationModal, setConfirmationModal] = useState(null);
  return (
    <>
      {(profileLoading || authLoading) && (
        <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800">
          ...Loading
        </div>
      )}
      {!profileLoading && !authLoading && (
        <>
          <div className="flex flex-col min-w-[220px] border-r-[1px] border-r-richblack-700 h-[calc(100vh-3.5rem)] bg-richblack-800 py-10">
            <div className="flex flex-col">
              {sidebarLinks.map((sideLink) => {
                if (sideLink.type && sideLink.type !== user?.accountType)
                  return null;
                return (
                  <div key={sideLink.id}>
                    <SidebarLink {...sideLink} />
                  </div>
                );
              })}
            </div>
            <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700" />
            <div className="flex flex-col">
              <SidebarLink
                id="A"
                name="settings"
                path="/dashboard/settings"
                icon="VscSettingsGear"
              />
              <button
                className="px-8 py-2 text-sm font-medium text-richblack-300"
                onClick={() =>
                  setConfirmationModal({
                    text1: "Are You Sure?",
                    text2: "You will be logged out of your Account.",
                    btn1Text: "Logout",
                    btn2Text: "Cancel",
                    btn1Handler: () => dispatch(logout(navigate)),
                    btn2Handler: () => setConfirmationModal(null),
                  })
                }
              >
                <div className="flex items-center gap-x-2">
                  <VscSignOut className="text-lg" />
                  <span>Logout</span>
                </div>
              </button>
            </div>
          </div>
          {confirmationModal && (
            <ConfirmationModal modalData={confirmationModal} />
          )}
        </>
      )}
    </>

    // if (profileLoading || authLoading) {
    //   return <div className="mt-10">...Loading</div>;
    // } else {
    //   return (
    //     <div>
    //       <div className="flex flex-col min-w-[222px] border-r-[1px] border-r-richblack-700 h-[calc(100vh-3.5rem)] bg-richblack-800 py-10">
    //         <div className="flex flex-col">
    //           {sidebarLinks.map((sideLink) => {
    //             if (sideLink.type && sideLink.type !== user?.accountType)
    //               return null;
    //             return <SidebarLink {...sideLink} />;
    //           })}
    //         </div>
    //         <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-600"></div>
    //         <div className="flex flex-col">
    //           <SidebarLink
    //             id="A"
    //             name="settings"
    //             path="/dashboard/settings"
    //             icon="VscSettingsGear "
    //           />
    //           <button
    //             className="text-sm font-medium text-richblack-300"
    //             onClick={() =>
    //               setConfirmationModal({
    //                 text1: "Are You Sure?",
    //                 text2: "You will be logged out of your Account.",
    //                 btn1Text: "Logout",
    //                 btn2Text: "Cancel",
    //                 btn1Handler: () => dispatch(logout(navigate)),
    //                 btn2Handler: () => {},
    //               })
    //             }
    //           >
    //             <div className="flex items-center gap-x-2">
    //               <VscSignOut className="text-lg" />
    //               <span>Logout</span>
    //             </div>
    //           </button>
    //         </div>
    //       </div>
    //       {confirmationModal && (
    //         <ConfirmationModal modalData={confirmationModal} />
    //       )}
    //     </div>
    //   );
    // }
  );
};
export default Sidebar;
