import React, {useEffect, useState} from "react";
import '../css/Job.css';
import Header from "../components/common/Header";
import BottomDoubleButtons from "../components/common/BottomDoubleButtons";
import ShareButton from "../components/common/ShareButton";
import {getItemBySessionStorage} from "../common";
import {announceAPI} from "../fetch";
import JobDetailInfo from "../components/job/JobDetailInfo";

const Job = () => {
  const token = getItemBySessionStorage("token");

  const [announcement, setAnnouncement] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await announceAPI(token, getIdFromUrl());
        setAnnouncement(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [token]);

  const getIdFromUrl = () => {
    const location = window.location;
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get('id');
  }

  return (
    <div className="App">
      <Header/>
      <img src={announcement.announce_imageUrl} alt="" className="jobImg"/>
      <ShareButton/>
      <div className="jobContent">
        <p className="jobName">
          {announcement.announce_title}
          <span className="statusBox">지원률 높음</span>
        </p>
        <p className="company">{announcement.company.company_name}</p>
        <p className="address">{announcement.location.address}</p>
        <JobDetailInfo/>
        <div className="content">
          {announcement.announce_detail}
        </div>
        <div className="pageBottomPadding"></div>
      </div>
      <BottomDoubleButtons/>
    </div>
  );
};

export default Job;