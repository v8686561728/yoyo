import React from "react";
import { shallow } from "../../../enzyme";
import Snackbar from "./Snackbar"

describe("<Snackbar/>", () => {
  
    let wrapper;
    beforeEach(() => {
        
        wrapper = shallow(<Snackbar />);
    });
    it("should render", () => {

      expect(wrapper).toBeTruthy();
    });
    
 
  });
  