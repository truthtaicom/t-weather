import { applyMiddleware, createStore, compose, Store } from "redux";
import thunk from "redux-thunk";
// @ts-ignore
import { createLogger, LogEntryObject } from "redux-logger";
import rootReducer, { ApplicationState } from "./rootReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}
export default function configureStore(
  initialState: ApplicationState
): Store<ApplicationState> {
  const middleware = [thunk];
  const enhancers = [];

  window.__REDUX_DEVTOOLS_EXTENSION__ =
    window.__REDUX_DEVTOOLS_EXTENSION__ || {};
  if (process.env.NODE_ENV === "development") {
    middleware.push(
      // @ts-ignore
      createLogger({
        collapsed: (
          _getState: () => any,
          action: any,
          logEntry: LogEntryObject
        ) => !logEntry.error,
      })
    );

    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension());
    }
  }

  const composeEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  const store = createStore(rootReducer, initialState, composeEnhancers);
  // @ts-ignore
  (window as any).store = store;

  return store;
}
