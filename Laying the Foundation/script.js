import ReactDOM from "react-dom/client";

const baseImgUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"

const Header = () => {

  return <div className="Heading">
    <div className="logo">
      <img src="https://www.logodesign.net/logo/chef-hat-with-pizza-5384ld.png" alt="logo" />
    </div>
    <nav>
      <ul className="NavItems">
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </nav>
  </div>
}

const Card = ({ props }) => {
  const { name, cloudinaryImageId, avgRating, costForTwo, category } = props.info;

  return <div className="Card">
    <img src={baseImgUrl + cloudinaryImageId} alt="dish" />
    <div className="Card-Content">
      <h3>{name}</h3>
      <h4>{avgRating}, {category}</h4>
      <h4>{costForTwo}</h4>
    </div>
  </div>;
}

const data = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "238029",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/14/6206a581-74fa-4c9b-bc7d-6b5cd45a4317_238029.JPG",
      "locality": "Mouza- Ukil Bazar",
      "areaName": "Silchar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "2456",
      "avgRatingString": "4.3",
      "totalRatingsString": "3.6K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-06-23 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
            "description": "Top-rated for Bolt, based on user votes."
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Top-rated for Bolt, based on user votes.",
                  "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                  "theme": ""
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹59",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-796aece6-b82a-45f0-93f7-19ccb27a2287"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/silchar/dominos-pizza-mouza-ukil-bazar-silchar-rest238029",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "235622",
      "name": "KFC",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/fd651c80-2b21-483f-8c2b-cde187ee666a_235622.JPG",
      "locality": "Glodighi Mall",
      "areaName": "Silchar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
      ],
      "avgRating": 4.3,
      "parentId": "547",
      "avgRatingString": "4.3",
      "totalRatingsString": "12K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-06-23 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
            "description": "Top-rated for Bolt, based on user votes."
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Top-rated for Bolt, based on user votes.",
                  "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                  "theme": ""
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "discountTag": "FLAT DEAL",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-796aece6-b82a-45f0-93f7-19ccb27a2287"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/silchar/kfc-glodighi-mall-silchar-rest235622",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "255435",
      "name": "Pizza Hut",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/15/4fa0cc09-ea06-498d-be05-ff949ff36e29_255435.JPG",
      "locality": "Premtola Road",
      "areaName": "Goldighi Mall",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4.3,
      "parentId": "721",
      "avgRatingString": "4.3",
      "totalRatingsString": "11K+",
      "sla": {
        "deliveryTime": 37,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-06-23 23:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹89",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-796aece6-b82a-45f0-93f7-19ccb27a2287"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/silchar/pizza-hut-premtola-road-goldighi-mall-rest255435",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "1073392",
      "name": "Dada Boudi Biryani Corner",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/5/794c66f8-caa1-401d-90d4-da57c3bb5f30_1073392.jpg",
      "locality": "Tarapur",
      "areaName": "Tarapur",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Biryani"
      ],
      "avgRating": 4.1,
      "parentId": "624716",
      "avgRatingString": "4.1",
      "totalRatingsString": "550",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-06-23 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "android/static-assets/icons/big_rx.png",
            "description": "bolt!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "android/static-assets/icons/big_rx.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "70% OFF",
        "subHeader": "UPTO ₹130",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-796aece6-b82a-45f0-93f7-19ccb27a2287"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/silchar/dada-boudi-biryani-corner-tarapur-rest1073392",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "232031",
      "name": "Baba'z Biriyani Hub",
      "cloudinaryImageId": "eiohxwpp06imdpjejgqs",
      "locality": "Tarapur Station Road",
      "areaName": "Station Road",
      "costForTwo": "₹280 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Rolls",
        "Mughlai"
      ],
      "avgRating": 4.3,
      "parentId": "39125",
      "avgRatingString": "4.3",
      "totalRatingsString": "5.0K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-06-23 22:15:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            "description": "Exclusively available on Swiggy — you won't find it elsewhere."
          }
        ]
      },
      "select": true,
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Exclusively available on Swiggy — you won't find it elsewhere.",
                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  "theme": ""
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-796aece6-b82a-45f0-93f7-19ccb27a2287"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/silchar/babaz-biriyani-hub-tarapur-station-road-rest232031",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "232028",
      "name": "Baba'z",
      "cloudinaryImageId": "wyc2ejhqcuar68hfigkh",
      "locality": "Tarapur Station Road",
      "areaName": "Ambicapatty",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Biryani",
        "Chinese"
      ],
      "avgRating": 4.4,
      "parentId": "39124",
      "avgRatingString": "4.4",
      "totalRatingsString": "4.4K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-06-23 22:15:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Ratnesh_Badges/price%20badge.png",
            "description": "Menu prices matched to the restaurant's own, with no markup."
          },
          {
            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            "description": "Exclusively available on Swiggy — you won't find it elsewhere."
          }
        ]
      },
      "select": true,
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Menu prices matched to the restaurant's own, with no markup.",
                  "imageId": "Ratnesh_Badges/price%20badge.png",
                  "theme": ""
                }
              },
              {
                "attributes": {
                  "description": "Exclusively available on Swiggy — you won't find it elsewhere.",
                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  "theme": ""
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹79",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-796aece6-b82a-45f0-93f7-19ccb27a2287"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/silchar/babaz-tarapur-station-road-ambicapatty-rest232028",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "818340",
      "name": "Biva Food Court",
      "cloudinaryImageId": "b53d3d6a1a6156f497dd2f90565da642",
      "locality": "Jail Road",
      "areaName": "Tarapur",
      "costForTwo": "₹100 for two",
      "cuisines": [
        "Biryani",
        "South Indian"
      ],
      "avgRating": 4.2,
      "parentId": "487725",
      "avgRatingString": "4.2",
      "totalRatingsString": "1.3K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-06-23 22:20:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Ratnesh_Badges/price%20badge.png",
            "description": "Menu prices matched to the restaurant's own, with no markup."
          },
          {
            "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
            "description": "Top-rated for Bolt, based on user votes."
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Menu prices matched to the restaurant's own, with no markup.",
                  "imageId": "Ratnesh_Badges/price%20badge.png",
                  "theme": ""
                }
              },
              {
                "attributes": {
                  "description": "Top-rated for Bolt, based on user votes.",
                  "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                  "theme": ""
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹45",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-796aece6-b82a-45f0-93f7-19ccb27a2287"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/silchar/biva-food-court-jail-road-tarapur-rest818340",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "250286",
      "name": "Momo Plaza",
      "cloudinaryImageId": "kcqdfaqriqblcje3qdir",
      "locality": "Shibbari Road",
      "areaName": "Ramnagar",
      "costForTwo": "₹220 for two",
      "cuisines": [
        "Momos",
        "Chinese",
        "Pizzas"
      ],
      "avgRating": 4.1,
      "parentId": "138223",
      "avgRatingString": "4.1",
      "totalRatingsString": "5.2K+",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 0.2,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-06-23 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "android/static-assets/icons/big_rx.png",
            "description": "bolt!"
          },
          {
            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            "description": "Exclusively available on Swiggy — you won't find it elsewhere."
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "android/static-assets/icons/big_rx.png"
                }
              },
              {
                "attributes": {
                  "description": "Exclusively available on Swiggy — you won't find it elsewhere.",
                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  "theme": ""
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹150",
        "discountTag": "SAVE BIG",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-796aece6-b82a-45f0-93f7-19ccb27a2287"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/silchar/momo-plaza-shibbari-road-ramnagar-rest250286",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
]

const Body = () => {
  return <div className="Main-Container">
    <div className="Search-Container">
      <input type="text" placeholder="Search..." id="searchInput" />
      <button id="searchBtn">Search</button>
    </div>
    <div className="Card-Container">
      {
        data.map((curRes) => {
          return <Card props={curRes} key={curRes.info.id} />
        })
      }
    </div>
  </div>
}

const AppLayout = () => {

  return <>
    <Header />
    <Body />
  </>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
