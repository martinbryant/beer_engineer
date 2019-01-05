import { SET_NOTIFICATION, setNotification } from "../actions/ui-actions";

const notificationMiddleware = state => next => action => {
  if (action.type.includes(SET_NOTIFICATION)) {
    const id = new Date().getMilliseconds();
    next(
      setNotification({ id: id, message: action.payload }, action.meta.feature)
    );
  } else {
    next(action);
  }
};

export default notificationMiddleware;
