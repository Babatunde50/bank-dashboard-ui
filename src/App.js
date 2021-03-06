import React from "react";
import { css } from "emotion";

import SideNav from "./SideNav";
import Tx1 from "./tx1.png"
import Tx2 from "./tx2.png"
import Tx3 from "./tx3.png"
import Tx4 from "./tx4.png"
import Tx5 from "./tx5.png"
import Tx6 from "./tx6.png"
import Visa from "./visa_card.png"
import Visa2 from "./visa_card2.png"
import Map from "./Map.png"

const container = css`
  display: flex;
  height: 100vh;
  width: 100%;
  margin: 0;
`;

const body = css`
  height: 100vh;
  width: 100%;
  background: linear-gradient(180deg, #59C2EE 0%, #000000 100%);
  padding: 2rem;
  overflow: hidden;
`;

const header = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const box = css`
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  padding: 1rem;
  align-items: center;
  height: 47.47px;
`

const searchInput = css`
  border: none;
  outline: none;
  width: 100%;
  padding-left: .5rem;
  &:focus {
    outline: none;
  }
`
const date = css`
  font-family: Product Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #79828E;
  margin: 0;
  padding: 0 .65rem;
`
const name = css`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #79828E;
  margin: 0;
  padding: 0 1rem;
`
const moneyBox = css`
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 1rem;
  // min-width: 228.37px;
`
const moneyText = css`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  padding-right: .3rem;
  margin: 0;
`
const subMoneyText = css`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  color: #79828E;
  flex: none;
  order: 0;
  align-self: center;
  margin: 7px 0px;
  padding-right: .3rem;
`
const moneyHeader = css`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

const moneyTableHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: .6rem;
`

const moneyRowHeader = css`
  display: flex;
  align-items: center;
`
const tableText = css`
  font-family: Product Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
`

const moneyRateText = css`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: #303956;
`

const moneyPercentText = css`
  font-family: Product Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: #01D066;
  flex: none;
  order: 0;
  align-self: center;
  margin: 4px 0px;
`

const midContainer = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 0;
`

const transactionBox = css`
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  // min-width: 392.65px;
  padding: 1rem 2rem;
`

const transactionTitle = css`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin: 0;
  padding: 1rem 0;
`

const transactionDayContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const daysContainer = css`
  display: flex;
  justify-content: space-between;
`

const dayText = css`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  color: #79828E;
`

const summaryText = css`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  color: #303956;
  flex: none;
  order: 1;
  align-self: center;
  margin: 10px 0px;
  padding-left: .15rem;
  padding-right: .45rem;
`

const usersBox = css`
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  min-width: 212.32px;
  padding: 1rem;
`

const usersText = css`
  font-family: Product Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 23px;
  color: #000000;
  margin: 0;
  padding: .5rem 0;
`

const usersDropdown = css`
  background: #f2f3f4;
  border-radius: 6px;
  display: flex;
  align-items: center;
  min-width: 81px;
  margin-right: 1rem;
  justify-content: space-around;

`

const usersDropdownText = css`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  display: flex;
  align-items: center;
  color: #000000;
`

const userContainer = css`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 0.75px solid #ECECEC;
`

const imgContainer = css`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const img = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`

const userName = css`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  display: flex;
  align-items: center;
  color: #000000;
  margin: 0;
`

const userPrice = css`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 9px;
  line-height: 11px;
  display: flex;
  align-items: center;
  color: #79828E;
`

const moneyBottom = css`
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`

const moneyHeaderText = css`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: #303956;
  margin: 0;
  padding-bottom: .5rem;
`

const moneySubHeaderText = css`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin: 0;
`

const cardBox = css`
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 1.8rem;
  margin: 1rem 0;
`

const cardTitle = css`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`
const mapBox = css`
  background: #FFFFFF;
  background: url("https://s3-alpha-sig.figma.com/img/489b/e506/ecc48ac16c2715d093c531737c30f985?Expires=1598832000&Signature=Ya53UyKvfTmBB2YUhODe0jd5QFZ-5yUoi7AnjD9C69cyNFPFWeqZdmu2cFjA1q1dV~pagAY6NlGEdWsaoGXaL8mQyTzy1B6Hv19QKOSJ0zu1so2B7LjIpZEVpvey9zNhSfde-~ms7vuQ~ZZwcuw~IUMkMUFM4jk8FkkYdkle12DqoE223MAwmpI15Jwwp97Gu10dHh8BKJ5~WDClL2ANGOr8MMVORYrUCzG1GxeFutTIZDJ78u7s9jN~XTPP8DBtkrcQ2fd4SSBO1TnLgsLLX2~pC9dKA0HarMkuD3qBcO1MfiJG~CzxV5vnIDPS8v1z0bHvC1jSEVJEmyvRH4oMtA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
  margin-top: .4rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: .25rem;
  background-position: center;
  background-size: cover;
  height: 170px;
`

function App() {
  return (
    <main className={container}>
      <SideNav />
      <div className={body}>
        <header className={header}>
          <div className={box} style={{width: "50%"}}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.8985 8.87351H10.2662L10.0421 8.65739C10.8265 7.74487 11.2988 6.56019 11.2988 5.27145C11.2988 2.39781 8.96944 0.0684814 6.0958 0.0684814C3.22215 0.0684814 0.892822 2.39781 0.892822 5.27145C0.892822 8.1451 3.22215 10.4744 6.0958 10.4744C7.38453 10.4744 8.56921 10.0022 9.48173 9.21771L9.69785 9.44184V10.0742L13.7001 14.0685L14.8928 12.8758L10.8985 8.87351ZM6.0958 8.87351C4.10266 8.87351 2.49374 7.26459 2.49374 5.27145C2.49374 3.27832 4.10266 1.6694 6.0958 1.6694C8.08893 1.6694 9.69785 3.27832 9.69785 5.27145C9.69785 7.26459 8.08893 8.87351 6.0958 8.87351Z" fill="#046AF3"/>
            </svg>
            <input className={searchInput} placeholder="Search" />
          </div>
          <div className={box}>
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.1551 1.34121H11.5187V0.0684814H10.246V1.34121H3.88235V0.0684814H2.60962V1.34121H1.97326C1.27326 1.34121 0.700531 1.91394 0.700531 2.61394V12.7958C0.700531 13.4958 1.27326 14.0685 1.97326 14.0685H12.1551C12.8551 14.0685 13.4278 13.4958 13.4278 12.7958V2.61394C13.4278 1.91394 12.8551 1.34121 12.1551 1.34121ZM12.1551 12.7958H1.97326V4.52303H12.1551V12.7958Z" fill="#046AF3"/>
            </svg>
            <p className={date}>January - December</p>
            <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.65671 0.795166L4.71671 3.8485L7.77671 0.795166L8.71671 1.73517L4.71671 5.73517L0.716705 1.73517L1.65671 0.795166Z" fill="#046AF3"/>
            </svg>
          </div>
          <div className={box}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.54635 2.12848L3.47385 1.05598C1.67385 2.42848 0.48885 4.54348 0.38385 6.94348H1.88385C1.99635 4.95598 3.01635 3.21598 4.54635 2.12848ZM13.8388 6.94348H15.3388C15.2263 4.54348 14.0414 2.42848 12.2489 1.05598L11.1839 2.12848C12.6989 3.21598 13.7263 4.95598 13.8388 6.94348ZM12.3614 7.31848C12.3614 5.01598 11.1314 3.08848 8.98635 2.57848V2.06848C8.98635 1.44598 8.48385 0.943481 7.86135 0.943481C7.23885 0.943481 6.73635 1.44598 6.73635 2.06848V2.57848C4.58385 3.08848 3.36135 5.00848 3.36135 7.31848V11.0685L1.86135 12.5685V13.3185H13.8613V12.5685L12.3614 11.0685V7.31848ZM7.86135 15.5685C7.96635 15.5685 8.06385 15.561 8.16135 15.5385C8.64885 15.4335 9.04635 15.1035 9.24135 14.6535C9.31635 14.4735 9.35385 14.2785 9.35385 14.0685H6.35385C6.36135 14.8935 7.02885 15.5685 7.86135 15.5685Z" fill="#046AF3"/>
            </svg>
            <p className={name}> John Max</p>
            <div style={{paddingRight: "1rem"}}>
              <svg width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect y="-1" width="24" height="36" fill="url(#pattern0)"/>
                <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0" transform="translate(-0.266892) scale(0.00675676 0.0045045)"/>
                  </pattern>
                  <image id="image0" width="227" height="222" xlinkHref="data:image/jpeg;base64,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"/>
                </defs>
              </svg>
            </div>
            <svg width="3" height="12" viewBox="0 0 3 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.33663 3.40183C2.06996 3.40183 2.66996 2.80184 2.66996 2.0685C2.66996 1.33517 2.06996 0.735168 1.33663 0.735168C0.603296 0.735168 0.0032959 1.33517 0.0032959 2.0685C0.0032959 2.80184 0.603296 3.40183 1.33663 3.40183ZM1.33663 4.73517C0.603296 4.73517 0.0032959 5.33517 0.0032959 6.0685C0.0032959 6.80183 0.603296 7.40183 1.33663 7.40183C2.06996 7.40183 2.66996 6.80183 2.66996 6.0685C2.66996 5.33517 2.06996 4.73517 1.33663 4.73517ZM1.33663 8.73517C0.603296 8.73517 0.0032959 9.33517 0.0032959 10.0685C0.0032959 10.8018 0.603296 11.4018 1.33663 11.4018C2.06996 11.4018 2.66996 10.8018 2.66996 10.0685C2.66996 9.33517 2.06996 8.73517 1.33663 8.73517Z" fill="#046AF3"/>
            </svg>
          </div>
        </header>
        <div className={midContainer}>
          <div style={{paddingRight: "1rem", width: "40%"}}>
            <div className={moneyBox}>
            <div className={moneyHeader}>
              <h3 className={moneyText}>N28,941.69</h3>
              <span className={subMoneyText} >+1.01%</span>
              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.99702 0.659515L10.3329 1.99535L7.48618 4.84202L5.15285 2.50868L0.830349 6.83702L1.65285 7.65952L5.15285 4.15952L7.48618 6.49285L11.1612 2.82368L12.497 4.15952V0.659515H8.99702Z" fill="#01D066"/>
              </svg>
            </div>
            <div className={moneyTableHeader}>
              <div className={moneyRowHeader}>
                <span className={tableText}>Bank</span>
                <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.42783 3.30963L2.92783 0.809631L0.427826 3.30963H5.42783Z" fill="#79828E"/>
                </svg>
              </div>
              <div className={moneyRowHeader}>
                <span className={tableText}>Income</span>
                <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.42783 3.30963L2.92783 0.809631L0.427826 3.30963H5.42783Z" fill="#79828E"/>
                </svg>
              </div>
            </div>
            <div className={moneyTableHeader} style={{borderBottom: "0.75px solid #ECECEC", paddingBottom: ".3rem"}}>
              <span className={moneyRateText}>NP 250 03</span>
              <div>
                <span className={moneyPercentText}> +12.5% </span>
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.99702 0.651093L10.3329 1.98693L7.48618 4.83359L5.15285 2.50026L0.830349 6.82859L1.65285 7.65109L5.15285 4.15109L7.48618 6.48443L11.1612 2.81526L12.497 4.15109V0.651093H8.99702Z" fill="#01D066"/>
                </svg>
              </div>
            </div>
            <div className={moneyTableHeader} style={{borderBottom: "0.75px solid #ECECEC", paddingBottom: ".3rem"}}>
              <span className={moneyRateText}>NP 250 03</span>
              <div>
                <span className={moneyPercentText}> +12.5% </span>
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.99702 0.651093L10.3329 1.98693L7.48618 4.83359L5.15285 2.50026L0.830349 6.82859L1.65285 7.65109L5.15285 4.15109L7.48618 6.48443L11.1612 2.81526L12.497 4.15109V0.651093H8.99702Z" fill="#01D066"/>
                </svg>
              </div>
            </div>
            <div className={moneyTableHeader} style={{borderBottom: "0.75px solid #ECECEC", paddingBottom: ".3rem"}}>
              <span className={moneyRateText}>NP 250 03</span>
              <div>
                <span className={moneyPercentText}> +12.5% </span>
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.99702 0.651093L10.3329 1.98693L7.48618 4.83359L5.15285 2.50026L0.830349 6.82859L1.65285 7.65109L5.15285 4.15109L7.48618 6.48443L11.1612 2.81526L12.497 4.15109V0.651093H8.99702Z" fill="#01D066"/>
                </svg>
              </div>
            </div>
            <div className={moneyTableHeader} style={{borderBottom: "0.75px solid #ECECEC", paddingBottom: ".3rem"}}>
              <span className={moneyRateText}>NP 250 03</span>
              <div>
                <span className={moneyPercentText}> +12.5% </span>
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.99702 0.651093L10.3329 1.98693L7.48618 4.83359L5.15285 2.50026L0.830349 6.82859L1.65285 7.65109L5.15285 4.15109L7.48618 6.48443L11.1612 2.81526L12.497 4.15109V0.651093H8.99702Z" fill="#01D066"/>
                </svg>
              </div>
            </div>
            <div className={moneyTableHeader} style={{borderBottom: "0.75px solid #ECECEC", paddingBottom: ".3rem"}}>
              <span className={moneyRateText}>NP 250 03</span>
              <div>
                <span className={moneyPercentText} style={{color: "#FD3758"}}> +12.5% </span>
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.66368 7.31119L9.99951 5.97535L7.15285 3.12869L4.81951 5.46202L0.497013 1.13369L1.31951 0.311188L4.81951 3.81119L7.15285 1.47785L10.8278 5.14702L12.1637 3.81119V7.31119H8.66368Z" fill="#FD3758"/>
                </svg>
              </div>
            </div>
            <div className={moneyTableHeader} style={{borderBottom: "0.75px solid #ECECEC", paddingBottom: ".3rem"}}>
              <span className={moneyRateText}>NP 250 03</span>
              <div>
                <span className={moneyPercentText} style={{color: "#FD3758"}}> +12.5% </span>
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.66368 7.31119L9.99951 5.97535L7.15285 3.12869L4.81951 5.46202L0.497013 1.13369L1.31951 0.311188L4.81951 3.81119L7.15285 1.47785L10.8278 5.14702L12.1637 3.81119V7.31119H8.66368Z" fill="#FD3758"/>
                </svg>
              </div>
            </div>
            <div className={moneyTableHeader} style={{borderBottom: "0.75px solid #ECECEC", paddingBottom: ".3rem"}}>
              <span className={moneyRateText}>NP 250 03</span>
              <div>
                <span className={moneyPercentText} style={{color: "#FD3758"}} > +12.5% </span>
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.66368 7.31119L9.99951 5.97535L7.15285 3.12869L4.81951 5.46202L0.497013 1.13369L1.31951 0.311188L4.81951 3.81119L7.15285 1.47785L10.8278 5.14702L12.1637 3.81119V7.31119H8.66368Z" fill="#FD3758"/>
                </svg>
              </div>
            </div>
            
          </div>
            <div className={moneyBottom}>
              <div>
                <p className={moneyHeaderText}> NP 250 04 </p>
                <h3 className={moneySubHeaderText}> N45682.01 </h3>
              </div>
              <svg width="103" height="31" viewBox="0 0 103 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.20438 17.6188L10.5833 4.75124L19.8947 10.944L28.7206 5.05L37.7135 29.7065L46.982 3.54168L55.9399 18.3356L65.6638 8.4659L74.3769 12.3948L83.265 5.05L92.7673 8.4659L101.942 1.65595" stroke="#4CD964" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div className={moneyBottom}>
              <div>
                <p className={moneyHeaderText}> NP 250 04 </p>
                <h3 className={moneySubHeaderText}> N45682.01 </h3>
              </div>
              <svg width="103" height="31" viewBox="0 0 103 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.20438 17.6188L10.5833 4.75124L19.8947 10.944L28.7206 5.05L37.7135 29.7065L46.982 3.54168L55.9399 18.3356L65.6638 8.4659L74.3769 12.3948L83.265 5.05L92.7673 8.4659L101.942 1.65595" stroke="#4CD964" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div className={moneyBottom}>
              <div>
                <p className={moneyHeaderText}> NP 250 04 </p>
                <h3 className={moneySubHeaderText}> N45682.01 </h3>
              </div>
              <svg width="103" height="31" viewBox="0 0 103 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.20438 17.6188L10.5833 4.75124L19.8947 10.944L28.7206 5.05L37.7135 29.7065L46.982 3.54168L55.9399 18.3356L65.6638 8.4659L74.3769 12.3948L83.265 5.05L92.7673 8.4659L101.942 1.65595" stroke="#4CD964" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div style={{paddingRight: "1rem", width: "70%"}}>
            <div className={transactionBox}>
            <h1 className={transactionTitle}>Transaction Summary</h1>
            <div className={daysContainer}>
              <div className={transactionDayContainer}>
                <p className={dayText}>Mon</p>
                <img src={Tx1} alt="monday" />
              </div>
              <div className={transactionDayContainer}>
                <p className={dayText}>Tue</p>
                <img src={Tx2} alt="Tuesday" />
              </div>
              <div className={transactionDayContainer}>
                <p className={dayText}> Wed </p>
                <img src={Tx3} alt="Wednesday" />
              </div>
              <div className={transactionDayContainer}>
                <p className={dayText}> Thu </p>
                <img src={Tx4} alt="Thursday" />
              </div>
              <div className={transactionDayContainer}>
                <p className={dayText}> Fri </p>
                <img src={Tx5} alt="Friday" />
              </div>
              <div className={transactionDayContainer}>
                <p className={dayText}> Sun </p>
                <img src={Tx6} alt="Sunday" />
              </div>
            </div>
            <div className={daysContainer}>
              <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4.24777" cy="4.31119" r="4" fill="#046AF3"/>
                </svg>
                <p className={summaryText}>ATM Cards</p>
              </div>
              <div style={{display: "flex", alignItems: "center"}}>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4.48801" cy="4.31119" r="4" fill="#FD3758"/>
                </svg>
                <p className={summaryText}>Remittance</p>
              </div>
              <div style={{display: "flex", alignItems: "center"}}>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4.72824" cy="4.31119" r="4" fill="#02C39A"/>
                </svg>
                <p className={summaryText}>Online Transaction</p>
              </div>
            </div>
          </div>
            <div className={cardBox} style={{padding: ".8rem", paddingRight: "0"}}>
              <h1 className={cardTitle}>Active Cards</h1>
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <img src={Visa} alt="visa_card" />
                <img src={Visa2} alt="visa_card" />
              </div>
              <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3.55179" cy="3" r="3" fill="#79828E"/>
                </svg>
                <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3.55179" cy="3" r="3" fill="#4B5057"/>
                </svg>
                <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3.55179" cy="3" r="3" fill="#79828E"/>
                </svg>
              </div>
            </div>
          </div>
          <div>
          <div className={usersBox}>
            <h3 className={usersText}> Users </h3>
            <div style={{display: "flex", alignItems: "center"}}>
              <div className={usersDropdown}>
                <p className={usersDropdownText}>All Time</p>
                <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.957029 0.5896L4.01703 3.64293L7.07703 0.5896L8.01703 1.5296L4.01703 5.5296L0.0170288 1.5296L0.957029 0.5896Z" fill="#046AF3"/>
                </svg>
              </div>
              <div className={usersDropdown}>
                <p className={usersDropdownText}>Nepal</p>
                <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.957029 0.5896L4.01703 3.64293L7.07703 0.5896L8.01703 1.5296L4.01703 5.5296L0.0170288 1.5296L0.957029 0.5896Z" fill="#046AF3"/>
                </svg>
              </div>
            </div>
            <div className={userContainer}>
              <div className={imgContainer}>
                <img className={img} src="https://s3-alpha-sig.figma.com/img/1335/39be/868f78572c83e448e2f500279fb3fd42?Expires=1598832000&Signature=Wo8pAujCxwkDNCtjgHWFDZXIsZQMQVYUhheIl-qfcmBqfMPtBfyH6XLmJ0QyM-Jh0ETgaNtsmw-tCS3G1T6qz7YcXijXapW66P2ncyxw1ANkuGmLuKFL5U7v-Xq-bjrC1iAkAjXKZ3SJPKeF5IcGkaYVJ9XvmLiFzmSgezJoQ0eQhafwvUwnqvqNcIR9LOGLpdCmoTqwBPvNPHwMl5x8vRGL48NQ-gVNchmwSQkYxMgQqdU-jM9CWIW~pkPIZqqWv47KsoNkvC7lKD2XZNcoLc3cwRO7Nt~Dp-6X9uZSXnvsx5HBAS8PCjC34kHvITn1BNJ9Ea4kcFvlFZNqtfnSXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
              </div>
              <div style={{paddingLeft: "1rem"}}>
                <p className={userName}>Shola Makinde</p>
                <span className={userPrice}>N15025.10</span>
              </div>
            </div>
            <div className={userContainer}>
              <div className={imgContainer}>
                <img className={img} src="https://s3-alpha-sig.figma.com/img/46ab/c225/b9868f838b153938eb0d2df4a9c265b4?Expires=1598832000&Signature=KabeezeIrD~gQOLkuP~yf5FMllQOhRUPQ5dz9s9YFC9aWzG-Pg6T81H4sUyZTdQ7jswq7Nfx9mILjTemiemIBQeHYxoF~Tj6qbZU8FOWfVuzw2mMUpYmpRzYw4C~sTNMIVVookaQv6YqWdERC1Wb~kpfnjJuFuMqmPfdfjsAm03OaSyE1zzZsBhj9jd402~URvAJ3K~TeGq08TCGx6uAuzqpOOHJhnkrRsxjIKbTczlUqEWzL-BYmY3s5jKa2KLuyNT-7jbBI2TfWpxZSeb6iRC0B9d80-aHEtN~Wo-dUeQ-FEh5QQUcAlQXcfs~kY9y1oTv1aW~1gWOrARSaOI5fA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
              </div>
              <div style={{paddingLeft: "1rem"}}>
                <p className={userName}>Alfredo Levin</p>
                <span className={userPrice}>N15025.10</span>
              </div>
            </div>
            <div className={userContainer}>
              <div className={imgContainer}>
                <img className={img} src="https://s3-alpha-sig.figma.com/img/deda/b577/94425b86db7a8c5abff08dc1e9f23e08?Expires=1598832000&Signature=IuDB1YaYfbY1hCOiSdrXJxW~Pub5Nw4Jn9xXgEo9kqcOQSlPqgl86gc22LCco3wcfyI7WZndHiZVw5vECpW6pcF2LHz~dXUsVNIDbBPyYe1QzdU44Zbo1e4Z9K7zcsqgA3qBPlVLqk-aObf6pV3M4Tdom4m4J~5O8uA6XvSGirAJhG4XtBh0j4NIPebIxcoChHqTd788ehIzL8Aftf9I5BG9jaUaKnBOYDYDj-aa9VxT2jw3ytHKqD6K1VNymu08GzsBNERJ1TQjHiWA8yeRez5oRrYpaCmvxd-gidr3OJGZI1E8HSCVPQfO-Z~t4Lr73zplxbyENB4ZzO0GPzTBcg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
              </div>
              <div style={{paddingLeft: "1rem"}}>
                <p className={userName}>Adison Davies</p>
                <span className={userPrice}>N15025.10</span>
              </div>
            </div>
            <div className={userContainer}>
              <div className={imgContainer}>
                <img className={img} src="https://s3-alpha-sig.figma.com/img/513e/04a0/f9a33440a64a491a2c89d5a2ccd5dd50?Expires=1598832000&Signature=KKITU1l3KTr2eubLwzOoUOv7heEkZ7QbPhk5aC9JhWN1A13pcJnPnwoqModai6EIzS7gCNqmN2gcjHUJJRFj6PNogL416Gt1f7tsmd8-t0OfZlxGorocefVgPAP~um-~KPRyNpGJR7B~PhhMc-i6LZamzOPy-Tqg4LC-LjEtCK4iJshIMnA0t-K33Ey8mCTgWYeMafyAeq4Q1M2HnySpBt6bmxldBg8Bq3I9p2olXTM0hXfUBDah7xnesTy5yJaB5zaOzJGo9jvC3CmS5Zr96DQ5hkUvwzZRWky8A7tkPVMc5V0rjvABzTGmEbilQbggqmBiVnvmofr29EYlpoHptw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
              </div>
              <div style={{paddingLeft: "1rem"}}>
                <p className={userName}>Lynda Ukwu</p>
                <span className={userPrice}>N15025.10</span>
              </div>
            </div>
            <div className={userContainer}>
              <div className={imgContainer}>
                <img className={img} src="https://s3-alpha-sig.figma.com/img/0cd5/1ee9/17f7fc40a1533602d2c637bdc6dbc61d?Expires=1598832000&Signature=LyuXPujkBihr1qIktBgK4IOakNWDZduc7X0Z9iS4QXkbHU1PpCg5b4gfEcL~TaFnEJPzAKIecESeVl-zXixIZm7A0q3CgIEWDdKKrKC-6W~SMfQdYXvX~SMDdZX5ZwcU6wRVOLy~tLWbBXM~WGIfkh2gdj1wg5fs7Ma1mxzqheUhvE8qQ2bJ9d8kkYXW5PhYlg1Oizn-J1KUGoEI06zIu0niCSsXlLDllRQ1QBhg3WPqt09wAlod-upGuGa4Rt0uiVkCNuSuVwy2YRPxyM~53OyY71VuaeasItUOwyDWpAbrGrh9Sx68gBPbz0-H7GNpaanX95~1opF1ITO2wOq78w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
              </div>
              <div style={{paddingLeft: "1rem"}}>
                <p className={userName}>Chioma Edwards</p>
                <span className={userPrice}>N15025.10</span>
              </div>
            </div>
          </div>
          <div className={mapBox}>
            <img style={{height: "170px"}} src={Map} alt="map" />
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;