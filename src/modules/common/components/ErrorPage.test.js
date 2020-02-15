import React from "react";
import { shallow, configure } from "../../../enzyme";
import GiftCard from "./GiftCard";


describe("<GiftCard/>", () => {
  
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<GiftCard />);
    });
    it("should render", () => {
      expect(wrapper).toBeTruthy();
    });
  
  });
  