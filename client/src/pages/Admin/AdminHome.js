import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container text-center ">
        <div className="d-felx flex-column mt-4">
          <h1 style={{ fontFamily: "Times New Roman" }}>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3 style={{ fontFamily: "Arial" }}>Manage HemoCare Hub </h3>
          <hr />
          <p  className="container text-center " style={{ fontFamily: "Arial",  color:"black",fontSize:"19px"}} >
          
HemoCare Hub rely on sophisticated information systems to efficiently manage their operations. These systems encompass a donor database that compiles essential information, ensuring a readily available pool of potential donors with diverse blood types. The app facilitates streamlined blood type management and inventory tracking, ensuring an ample supply of blood products. Donor history is recorded meticulously, recognizing and encouraging regular contributions. The emergency alert system enables real-time notifications for urgent blood needs, fostering swift responses during critical situations. Additionally, the app simplifies appointment scheduling, optimizing the blood donation process. Overall, these technological advancements are instrumental in maintaining a well-organized and responsive blood supply system, essential for meeting healthcare demands and saving lives. The integration of these features enhances the overall efficiency of blood banks, promoting a culture of regular donation and ensuring the availability of blood when it is needed the most.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;