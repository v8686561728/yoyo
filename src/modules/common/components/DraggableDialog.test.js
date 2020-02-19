import React from "react";
import { shallow } from "../../../enzyme";
import DraggableDialog,{PaperComponent} from './DraggableDialog'

describe("<DraggableDialog/>", () => {
   
    let wrapper;
  
    it("should render", () => {
        wrapper = shallow(<DraggableDialog />);
      expect(wrapper).toBeTruthy();
    });
    it("simulate formic submit button click", () => {
      
        wrapper = shallow(<DraggableDialog />);
        wrapper.find('Formik').simulate('click');
    
      });

      it("call PaperComponent",()=>{
        wrapper = shallow(<PaperComponent/>);
        expect(wrapper).toBeTruthy();
      })
    
  });
  
 
 
  