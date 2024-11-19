// Initial State
export const settingsInitialState = {
  darkMode: false,
  language: "en",
  notifications: true,
  account: {
    username: "",
    email: "",
  },
};

const allowedLanguages = ["en", "es", "fr", "de"];

// Reducer
export const settingsReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case "SET_LANGUAGE":
      if (!allowedLanguages.includes(action.payload)) {
        console.error(`Invalid language: ${action.payload}`);
        return state;
      }
      return {
        ...state,
        language: action.payload,
      };
    case "TOGGLE_NOTIFICATIONS":
      return {
        ...state,
        notifications: !state.notifications,
      };
    case "UPDATE_ACCOUNT":
      return {
        ...state,
        account: {
          ...state.account,
          ...action.payload,
        },
      };
    default:
      console.error(`Invalid action type: ${action.type}`);
      return state;
  }
};
