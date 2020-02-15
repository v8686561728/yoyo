import React from "react";
import { shallow, mount } from "../../../enzyme";
import InputTypeComponent from "./inputTypeComponent"
import sinon from 'sinon';
describe("<InputTypeComponent/>", () => {
  
    let wrapper;
    beforeEach(() => {
        
        wrapper = shallow(<InputTypeComponent />);
    });
    it("should render", () => {

      expect(wrapper).toBeTruthy();
    });
    
    //      it("responds to name change", done => {
    //     const event = {target: {name: "endAdornment", value: "spam"}};
    //     const wrap = mount(
    //         <InputTypeComponent />
    //     );
    //     const handleChangeSpy = sinon.spy(wrap.instance(), "handleInputChange");
    //     wrap.update(); // Force re-render
    //     wrap.name('endAdornment').simulate('change', event);
    //     expect(handleChangeSpy.calledOnce).to.equal(true);
    //   })
  });
  