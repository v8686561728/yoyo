import React from "react";
import { shallow } from "../../../enzyme";
import GiftsList from "./GiftsList"

describe("<GiftShow/>", () => {
  
    let wrapper;
    beforeEach(() => {
        let props={
      classes:{
        root:'root',
        table:'table',
        tableWrapper:'tableWrapper'
      }
       
        }
        wrapper = shallow(<GiftsList {...props} />);
    });
    it("should render", () => {

      expect(wrapper).toBeTruthy();
    });
    
 
  });