import React from "react";
import styled from "styled-components";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import trainingIcon from "../../assets/img/training (3).png"
import proposalIcon from "../../assets/img/business-proposal.png"
import machineIcon from "../../assets/img/algorithm.png"
import feasibilityIcon from "../../assets/img/feasibility.png"
import vehicleIcon from "../../assets/img/automotive.png"
import installIcon from "../../assets/img/installation.png"
import automationIcon from "../../assets/img/automation.png"
import commissionIcon from "../../assets/img/dividend.png"

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <img src={proposalIcon} alt="proposal Icon" />;
      break;
    case "monitor":
      getIcon = <img src={feasibilityIcon} alt="proposal Icon" />;
      break;
    case "browser": 
    getIcon = <img src={trainingIcon} alt="proposal Icon" />;
      break;
    case "printer":
      getIcon = <img src={machineIcon} alt="proposal Icon" />;
      break;


      case "vehicle":
        getIcon = <img src={vehicleIcon} alt="proposal Icon" />;
        break;
      case "installation":
        getIcon = <img src={installIcon} alt="proposal Icon" />;
        break;
      case "automation": 
      getIcon = <img src={automationIcon} alt="proposal Icon" />;
        break;
      case "commission":
        getIcon = <img src={commissionIcon} alt="proposal Icon" />;
        break;
    default:
      getIcon = <img src={trainingIcon} alt="Training Icon" />;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;