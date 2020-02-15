import React from "react";
import { shallow } from "../../../enzyme";
import GiftShow from "./GiftShow"

describe("<GiftShow/>", () => {
  
    let wrapper;
    beforeEach(() => {
        let props={
          data:{
            cardImage:'cardImage',
            cardName:'cardImage',
            cardPoints:'cardPoints',
            cardCount:'cardCount',
            cardExpiryDate:'cardExpiryDate',
            cardComments:[{
              first_name:'first_name',
              last_name:'last_name',
              commented_on:'commented_on',
              rating:0,

            }],
            cardVendor:'cardVendor',
            cardLongDesc:'cardLongDesc'

          }
        }
        wrapper = shallow(<GiftShow {...props} />);
    });
    it("should render", () => {

      expect(wrapper).toBeTruthy();
    });
    
 
  });