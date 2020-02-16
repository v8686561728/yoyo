import React from "react";
import Styles from "../../assets/css/Landing.module.css";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { imageURLS } from "../../assets/images/imageUrls";

function Landing(props) {
  const Vendor = [
    { Vendor: "Whole Foods Market", image: imageURLS.wholeFoodMarket },
    { Vendor: "Ebay", image: imageURLS.ebay },
    { Vendor: "Amazon", image: imageURLS.amazon },
    { Vendor: "Flipkart", image: imageURLS.flipkart },
    { Vendor: "Zomato", image: imageURLS.zomato }
  ];
  return (
    <React.Fragment>
      <div id="promo-ribbon" className={Styles.offerMessage}>
        Use code TRAVEL15 to get 15% off
      </div>
      <div className={Styles.mainSlide}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <h1 className={Styles.sectionTitle}>
              Buy, Send, & Redeem Gift Cards
            </h1>
            <div className={Styles.sectionText}>
              <p>YoYo makes it easy for you to give the perfect gift card</p>
              <p>and conveniently manage them from any device!!</p>
            </div>
            <Link to="/giftCards" className={Styles.cardsBtn}>
              <Button variant="contained">Explore Cards</Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={imageURLS.yoyoGift}
          
              className={Styles.GiftImg}
              alt="YoYoImg"
            />
          </Grid>
        </Grid>
      </div>
      <div className={Styles.vendors}>
        <h2 className={Styles.vendorTitle}>
          Buy Gift Cards from your favourite Vendors
        </h2>
        <div style={{ textAlign: "center" }}>
          {Vendor.map(vendor => {
            return (
              <div className={Styles.vendorContainer}>
                <img
                  className={Styles.vendorImage}
                  src={vendor.image}
                  alt="amazon"
                />
                <p className={Styles.vendorName}>{vendor.vendor}</p>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Landing;
