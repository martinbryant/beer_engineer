import notificationMiddleware from "../notification-middleware";
import { setNotification, removeNotification } from "../../actions/ui-actions";

describe("notificationMiddleware", () => {
  let next, dispatch, middleware;
  beforeEach(() => {
    next = jest.fn();
    middleware = notificationMiddleware({ dispatch })(next);
  });
  it("should handle set notification and add an id to the payload", () => {
    const action = setNotification("new message", "feature");
    const expected = setNotification(
      {
        id: expect.any(Number),
        message: "new message"
      },
      "feature"
    );
    middleware(action);
    expect(next).toHaveBeenCalledWith(expected);
  });
  it("should call next for any other actions", () => {
    const action = {
      type: "IGNORED_ACTION"
    };
    middleware(action);
    expect(next).toHaveBeenCalledWith(action);
  });
});
