import React from "react";
import { shallow } from "../../../enzyme";
import { Header } from "./Header";
import { shallowToJson } from "enzyme-to-json";
import { mapDispatchToProps } from "./Header";
import { mapStateToProps } from "./Header";
describe("<Header/>", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      classes: {
        root: "root",
        toolBar: "toolBar",
        grow: "grow"
      },
      isLoggedIn:false
    };
    wrapper = shallow(<Header {...props} />);
  });
  it("should render", () => {
    expect(wrapper).toBeTruthy();
  });

  it("mapDispatchToProps fuction dispatch logout", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).logout();
  });
  it("mapDispatchToProps fuction dispatch login", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).login();
  });
  it("mapDispatchToProps fuction dispatch createUser", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).createUser();
  });
  it("mapStateToProps fuction ", () => {
    const initialState = {
      login: { loginStatus: undefined, detailsObject: undefined }
    };
    expect(mapStateToProps(initialState).loginStatus).toEqual(undefined);
    expect(mapStateToProps(initialState).detailsObject).toEqual(undefined);
  });

  it("simulate login button click", () => {
    const props = {
        classes: {
          root: "root",
          toolBar: "toolBar",
          grow: "grow"
        },
        isLoggedIn:true
      };

    wrapper = shallow(<Header {...props} logout={jest.fn()} />);
    wrapper.find("#login").simulate("click");
  });

  
  it("simulate giftReceived button click", () => {
    const props = {
        classes: {
          root: "root",
          toolBar: "toolBar",
          grow: "grow"
        },
        isLoggedIn:true
      };

    wrapper = shallow(<Header {...props}  />);
    wrapper.find("#giftReceived").simulate("click");
  });

  it("simulate giftSent button click", () => {
    const props = {
        classes: {
          root: "root",
          toolBar: "toolBar",
          grow: "grow"
        },
        isLoggedIn:true
      };

    wrapper = shallow(<Header {...props}  />);
    wrapper.find("#giftSent").simulate("click");
  });
  it("simulate profile button click", () => {
    const props = {
        classes: {
          root: "root",
          toolBar: "toolBar",
          grow: "grow"
        },
        isLoggedIn:true
      };

    wrapper = shallow(<Header {...props}  />);
    wrapper.find("#profile").simulate("click");
  });

  it("simulate goToLanding button click", () => {
    const props = {
        classes: {
          root: "root",
          toolBar: "toolBar",
          grow: "grow"
        },
        isLoggedIn:true
      };

    wrapper = shallow(<Header {...props}  />);
    wrapper.find("#goToLanding").simulate("click");
  });
});
