import Constants from "expo-constants";

const localhost = "https://staging.andanet.com";

const ENV = {
  dev: {
    apiUrl: localhost,
    CAMERA_IMAGE: require("../../assets/camera.png"),
    MINUS_IMAGE: require("../../assets/minus.png"),
    PLUS_IMAGE: require("../../assets/add.png"),
    CLOSE_IMAGE: require("../../assets/close.png"),
    EYE_OPEN_IMAGE: require("../../assets/eye-open.png"),
    EYE_CLOSE_IMAGE: require("../../assets/eye-close.png"),
    ACCOUNT_IMAGE: require("../../assets/account.png"),
    ERROR_ALERT_IMAGE: require("../../assets/errorAlert.png"),
    ALERT_IMAGE: require("../../assets/alert.png"),
    CLOCK_IMAGE: require("../../assets/clock.png"),
    DELIVERY_TRUCK_IMAGE: require("../../assets/delivery-truck.png"),
    LOGO_IMAGE: require("../../assets/logo.png"),
    COMPANY_IMAGE: require("../../assets/bottom-logo.png"),
    DOWN_IMAGE: require("../../assets/down.png"),
    RIGHT_IMAGE: require("../../assets/right.png"),
    CALENDAR_IMAGE: require("../../assets/calendar.png"),
    ICON_IMAGE: require("../../assets/icon.png"),
    LINKEDIN_IMAGE: require("../../assets/linkedin.png"),
    FACEBOOK_IMAGE: require("../../assets/facebook.png"),
    BACK_IMAGE: require("../../assets/back.png"),
    FORWARD_IMAGE: require("../../assets/forward.png"),
    SEARCH_BLUE_IMAGE: require("../../assets/search-blue.png"),
    SEARCH_IMAGE: require("../../assets/search.png"),
    BARCODE_IAMGE: require("../../assets/barcode.png"),
    ICON_HOME_BLUE_IMAGE: require("../../assets/icon-home-blue.png"),
    ICON_HOME_IAMGE: require("../../assets/icon-home.png"),
    SHOPPING_BLUE_CART_IMAGE: require("../../assets/shopping-cart-blue.png"),
    SHOPPING_CART_IMAGE: require("../../assets/cartLogo.png"),
    ACCOUNT_BLUE_IMAGE: require("../../assets/user-blue.png"),
    MORE_BLUE_IAMGE: require("../../assets/more-blue.png"),
    MORE_IAMGE: require("../../assets/more.png"),
    CHECK_IMGAE: require("../../assets/check.png"),
    DELIVERY_CART_IMAGE: require("../../assets/delivery.png"),
    WATCH_IMAGE: require("../../assets/watch.png"),
    PRODUCT_LOGO_IMAGE: require("../../assets/productLogo.png"),
    ACH_IMAGE: require("../../assets/Ach.png"),
    CHEQUE_IMAGE: require("../../assets/cheque.png"),
    CREDIT_CARD_IMAGE: require("../../assets/Credit.png"),
    ANDA_CONTRACTED_IMAGE: require("../../assets/andaContractItems.jpeg"),
    FAVORITES_IAMGE: require("../../assets/favorites.jpeg"),
    SHORTDATE_IMAGE: require("../../assets/shortDate.jpeg"),
    CUSTOMERLIKEYOU_IMAGE: require("../../assets/customer.jpeg"),
    BOTTLE_IMAGE: require("../../assets/bottle.png"),
    COST_SAVING_CART_IMAGE: require("../../assets/cost-saving-cart.png"),
  },
  staging: {
    apiUrl: "https://staging.andanet.com",
    CAMERA_IMAGE: require("../../assets/camera.png"),
    MINUS_IMAGE: require("../../assets/minus.png"),
    PLUS_IMAGE: require("../../assets/add.png"),
    CLOSE_IMAGE: require("../../assets/close.png"),
    EYE_OPEN_IMAGE: require("../../assets/eye-open.png"),
    EYE_CLOSE_IMAGE: require("../../assets/eye-close.png"),
    ACCOUNT_IMAGE: require("../../assets/account.png"),
    ERROR_ALERT_IMAGE: require("../../assets/errorAlert.png"),
    ALERT_IMAGE: require("../../assets/alert.png"),
    CLOCK_IMAGE: require("../../assets/clock.png"),
    DELIVERY_TRUCK_IMAGE: require("../../assets/delivery-truck.png"),
    LOGO_IMAGE: require("../../assets/logo.png"),
    COMPANY_IMAGE: require("../../assets/bottom-logo.png"),
    DOWN_IMAGE: require("../../assets/down.png"),
    RIGHT_IMAGE: require("../../assets/right.png"),
    CALENDAR_IMAGE: require("../../assets/calendar.png"),
    ICON_IMAGE: require("../../assets/icon.png"),
    LINKEDIN_IMAGE: require("../../assets/linkedin.png"),
    FACEBOOK_IMAGE: require("../../assets/facebook.png"),
    BACK_IMAGE: require("../../assets/back.png"),
    FORWARD_IMAGE: require("../../assets/forward.png"),
    SEARCH_BLUE_IMAGE: require("../../assets/search-blue.png"),
    SEARCH_IMAGE: require("../../assets/search.png"),
    BARCODE_IAMGE: require("../../assets/barcode.png"),
    ICON_HOME_BLUE_IMAGE: require("../../assets/icon-home-blue.png"),
    ICON_HOME_IAMGE: require("../../assets/icon-home.png"),
    SHOPPING_BLUE_CART_IMAGE: require("../../assets/shopping-cart-blue.png"),
    SHOPPING_CART_IMAGE: require("../../assets/cartLogo.png"),
    ACCOUNT_BLUE_IMAGE: require("../../assets/user-blue.png"),
    MORE_BLUE_IAMGE: require("../../assets/more-blue.png"),
    MORE_IAMGE: require("../../assets/more.png"),
    CHECK_IMGAE: require("../../assets/check.png"),
    DELIVERY_CART_IMAGE: require("../../assets/delivery.png"),
    WATCH_IMAGE: require("../../assets/watch.png"),
    PRODUCT_LOGO_IMAGE: require("../../assets/productLogo.png"),
    ACH_IMAGE: require("../../assets/Ach.png"),
    CHEQUE_IMAGE: require("../../assets/cheque.png"),
    CREDIT_CARD_IMAGE: require("../../assets/Credit.png"),
    ANDA_CONTRACTED_IMAGE: require("../../assets/andaContractItems.jpeg"),
    FAVORITES_IAMGE: require("../../assets/favorites.jpeg"),
    SHORTDATE_IMAGE: require("../../assets/shortDate.jpeg"),
    CUSTOMERLIKEYOU_IMAGE: require("../../assets/customer.jpeg"),
    BOTTLE_IMAGE: require("../../assets/bottle.png"),
    COST_SAVING_CART_IMAGE: require("../../assets/cost-saving-cart.png"),
  },
  prod: {
    apiUrl: "https://www.andanet.com",
    CAMERA_IMAGE: require("../../assets/camera.png"),
    MINUS_IMAGE: require("../../assets/minus.png"),
    PLUS_IMAGE: require("../../assets/add.png"),
    CLOSE_IMAGE: require("../../assets/close.png"),
    EYE_OPEN_IMAGE: require("../../assets/eye-open.png"),
    EYE_CLOSE_IMAGE: require("../../assets/eye-close.png"),
    ACCOUNT_IMAGE: require("../../assets/account.png"),
    ERROR_ALERT_IMAGE: require("../../assets/errorAlert.png"),
    ALERT_IMAGE: require("../../assets/alert.png"),
    CLOCK_IMAGE: require("../../assets/clock.png"),
    DELIVERY_TRUCK_IMAGE: require("../../assets/delivery-truck.png"),
    LOGO_IMAGE: require("../../assets/logo.png"),
    COMPANY_IMAGE: require("../../assets/bottom-logo.png"),
    DOWN_IMAGE: require("../../assets/down.png"),
    RIGHT_IMAGE: require("../../assets/right.png"),
    CALENDAR_IMAGE: require("../../assets/calendar.png"),
    ICON_IMAGE: require("../../assets/icon.png"),
    LINKEDIN_IMAGE: require("../../assets/linkedin.png"),
    FACEBOOK_IMAGE: require("../../assets/facebook.png"),
    BACK_IMAGE: require("../../assets/back.png"),
    FORWARD_IMAGE: require("../../assets/forward.png"),
    SEARCH_BLUE_IMAGE: require("../../assets/search-blue.png"),
    SEARCH_IMAGE: require("../../assets/search.png"),
    BARCODE_IAMGE: require("../../assets/barcode.png"),
    ICON_HOME_BLUE_IMAGE: require("../../assets/icon-home-blue.png"),
    ICON_HOME_IAMGE: require("../../assets/icon-home.png"),
    SHOPPING_BLUE_CART_IMAGE: require("../../assets/shopping-cart-blue.png"),
    SHOPPING_CART_IMAGE: require("../../assets/cartLogo.png"),
    ACCOUNT_BLUE_IMAGE: require("../../assets/user-blue.png"),
    MORE_BLUE_IAMGE: require("../../assets/more-blue.png"),
    MORE_IAMGE: require("../../assets/more.png"),
    CHECK_IMGAE: require("../../assets/check.png"),
    DELIVERY_CART_IMAGE: require("../../assets/delivery.png"),
    WATCH_IMAGE: require("../../assets/watch.png"),
    PRODUCT_LOGO_IMAGE: require("../../assets/productLogo.png"),
    ACH_IMAGE: require("../../assets/Ach.png"),
    CHEQUE_IMAGE: require("../../assets/cheque.png"),
    CREDIT_CARD_IMAGE: require("../../assets/Credit.png"),
    ANDA_CONTRACTED_IMAGE: require("../../assets/andaContractItems.jpeg"),
    FAVORITES_IAMGE: require("../../assets/favorites.jpeg"),
    SHORTDATE_IMAGE: require("../../assets/shortDate.jpeg"),
    CUSTOMERLIKEYOU_IMAGE: require("../../assets/customer.jpeg"),
    BOTTLE_IMAGE: require("../../assets/bottle.png"),
    COST_SAVING_CART_IMAGE: require("../../assets/cost-saving-cart.png"),
  },
};

const getEnvVars = (env = Constants.expoConfig.extra.fact) => {
  if (__DEV__) {
    return ENV.dev;
  } else if (env === "staging") {
    return ENV.staging;
  } else if (env === "production") {
    return ENV.prod;
  }
};

export default getEnvVars;