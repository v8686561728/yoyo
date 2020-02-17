import { login, logout, createUser } from "./index";
import axiosWrapper from "../../../../apis/axiosCreate";
import userDetails from "../../../../fixtures/userDetails";
const userDetail = { userDetails };

it("login", () => {
  expect(login({ res: "res" })()).toEqual(
   
  );
});

it("logout", () => {
  expect(logout()).toEqual( {"payload": null, "type": "LOGOUT"});
});

it("createUser", async () => {
  axiosWrapper.get = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ data: { card: "test" } }));
  const dispatch = jest.fn().mockImplementation(args => {});
  const returnedFunction = createUser(userDetail[0]);
  await returnedFunction(dispatch);
  // expect(dispatch).toHaveBeenCalledWith({
  //   type: RECEIVED_CARDS,
  //   payload: { card: "test" }
  // });
});