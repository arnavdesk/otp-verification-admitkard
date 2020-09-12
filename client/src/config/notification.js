import Noty from "noty";

const showNotification = (text) => {
  new Noty({
    text: text,
    layout: "bottomRight",
    theme: "sunset",
    type: "alert",
    timeout: 2000,
  }).show();
};

const showNotificationError = (text) => {
  new Noty({
    text: text,
    layout: "bottomRight",
    theme: "sunset",
    type: "error",
    timeout: 1000,
  }).show();
};

const showNotificationSuccess = (text) => {
  new Noty({
    text: text,
    layout: "bottomRight",
    theme: "sunset",
    type: "success",
    timeout: 1000,
  }).show();
};

export { showNotification, showNotificationError, showNotificationSuccess };
