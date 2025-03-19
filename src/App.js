import React, { useState } from "react";
import Header from "./Components/Header";
import ResturantCard from "./Components/ResturantCard";

const App = () => {
  const resObj = [
    {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
          layout: {
            columns: 4,
          },
          id: "restaurant_grid_listing_v2",
          gridElements: {
            infoWithStyle: {
              "@type":
                "type.googleapis.com/swiggy.seo.widgets.v1.FoodRestaurantGridListingInfo",
              restaurants: [
                {
                  "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                  info: {
                    id: "1003414",
                    name: "Pizza Hut",
                    cloudinaryImageId:
                      "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
                    locality: "Chhindwara",
                    areaName: "Parasia Road",
                    costForTwo: "₹350 for two",
                    cuisines: ["Pizzas"],
                    avgRating: 4,
                    parentId: "721",
                    avgRatingString: "4.0",
                    totalRatingsString: "47",
                    sla: {
                      deliveryTime: 46,
                      lastMileTravel: 11.9,
                      serviceability: "SERVICEABLE",
                      slaString: "45-50 mins",
                      lastMileTravelString: "11.9 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-03-19 23:00:00",
                      opened: true,
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV2: {},
                    orderabilityCommunication: {},
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    isNewlyOnboarded: true,
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--",
                      },
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-ca5f0b70-a47b-45cd-bb9e-82e06a588dbe",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/chhindwara/pizza-hut-parasia-road-rest1003414",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK",
                  },
                  widgetId:
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                },
                {
                  "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                  info: {
                    id: "234875",
                    name: "Adil Hotel",
                    cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
                    locality: "Rautha Wada",
                    areaName: "Chhindwara Locality",
                    costForTwo: "₹150 for two",
                    cuisines: ["North Indian", "Biryani", "Tandoor"],
                    avgRating: 4.3,
                    parentId: "27123",
                    avgRatingString: "4.3",
                    totalRatingsString: "1.2K+",
                    sla: {
                      deliveryTime: 36,
                      lastMileTravel: 11.5,
                      serviceability: "SERVICEABLE",
                      slaString: "35-40 mins",
                      lastMileTravelString: "11.5 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-03-20 00:00:00",
                      opened: true,
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "ITEMS",
                      subHeader: "AT ₹129",
                    },
                    orderabilityCommunication: {},
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--",
                      },
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-ca5f0b70-a47b-45cd-bb9e-82e06a588dbe",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK",
                  },
                  widgetId:
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                },
                {
                  "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                  info: {
                    id: "150602",
                    name: "Raimens Cafe 79",
                    cloudinaryImageId: "eohdm5sdnq6e2u46xeux",
                    locality: "Teacher's Colony",
                    areaName: "VIP Road",
                    costForTwo: "₹250 for two",
                    cuisines: ["Bakery", "Pizzas", "Snacks", "Beverages"],
                    avgRating: 4.4,
                    veg: true,
                    parentId: "164782",
                    avgRatingString: "4.4",
                    totalRatingsString: "4.1K+",
                    sla: {
                      deliveryTime: 45,
                      lastMileTravel: 12.5,
                      serviceability: "SERVICEABLE",
                      slaString: "45-50 mins",
                      lastMileTravelString: "12.5 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-03-19 22:30:00",
                      opened: true,
                    },
                    badges: {
                      imageBadges: [
                        {
                          imageId: "v1695133679/badges/Pure_Veg111.png",
                          description: "pureveg",
                        },
                      ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "pureveg",
                                imageId: "v1695133679/badges/Pure_Veg111.png",
                              },
                            },
                          ],
                        },
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "ITEMS",
                      subHeader: "AT ₹49",
                    },
                    orderabilityCommunication: {},
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--",
                      },
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-ca5f0b70-a47b-45cd-bb9e-82e06a588dbe",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/chhindwara/raimens-cafe-79-teachers-colony-vip-road-rest150602",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK",
                  },
                  widgetId:
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                },
                {
                  "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                  info: {
                    id: "151649",
                    name: "Hotel Sai Nath & Sai Restaurant",
                    cloudinaryImageId: "vkhcohhmqfczycw9vsar",
                    locality: "railway station",
                    areaName: "Chhindwara Locality",
                    costForTwo: "₹200 for two",
                    cuisines: [
                      "North Indian",
                      "South Indian",
                      "Chinese",
                      "Beverages",
                      "Fast Food",
                      "Desserts",
                    ],
                    avgRating: 4.3,
                    veg: true,
                    parentId: "101802",
                    avgRatingString: "4.3",
                    totalRatingsString: "976",
                    sla: {
                      deliveryTime: 39,
                      lastMileTravel: 10.3,
                      serviceability: "SERVICEABLE",
                      slaString: "35-40 mins",
                      lastMileTravelString: "10.3 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-03-19 22:30:00",
                      opened: true,
                    },
                    badges: {
                      imageBadges: [
                        {
                          imageId: "v1695133679/badges/Pure_Veg111.png",
                          description: "pureveg",
                        },
                      ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "pureveg",
                                imageId: "v1695133679/badges/Pure_Veg111.png",
                              },
                            },
                          ],
                        },
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV2: {},
                    orderabilityCommunication: {},
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--",
                      },
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-ca5f0b70-a47b-45cd-bb9e-82e06a588dbe",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK",
                  },
                  widgetId:
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                },
                {
                  "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                  info: {
                    id: "150591",
                    name: "Satkar Restaurant",
                    cloudinaryImageId: "rvxp5xbniat84r6efku2",
                    locality: "Sinchai Colony",
                    areaName: "Satkar Chowk",
                    costForTwo: "₹250 for two",
                    cuisines: [
                      "North Indian",
                      "South Indian",
                      "Indian",
                      "Salads",
                      "Desserts",
                    ],
                    avgRating: 4.4,
                    veg: true,
                    parentId: "21553",
                    avgRatingString: "4.4",
                    totalRatingsString: "2.5K+",
                    sla: {
                      deliveryTime: 36,
                      lastMileTravel: 11.1,
                      serviceability: "SERVICEABLE",
                      slaString: "35-40 mins",
                      lastMileTravelString: "11.1 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-03-19 22:45:00",
                      opened: true,
                    },
                    badges: {
                      imageBadges: [
                        {
                          imageId: "v1695133679/badges/Pure_Veg111.png",
                          description: "pureveg",
                        },
                      ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "pureveg",
                                imageId: "v1695133679/badges/Pure_Veg111.png",
                              },
                            },
                          ],
                        },
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "ITEMS",
                      subHeader: "AT ₹49",
                    },
                    orderabilityCommunication: {},
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--",
                      },
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-ca5f0b70-a47b-45cd-bb9e-82e06a588dbe",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK",
                  },
                  widgetId:
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                },
                {
                  "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                  info: {
                    id: "213358",
                    name: "Apni Rasoi Family Dhaba",
                    cloudinaryImageId: "sidigb8zqjfrfpkrtqgl",
                    locality: "Vishnu Nagar",
                    areaName: "Parasia Road",
                    costForTwo: "₹250 for two",
                    cuisines: ["Indian", "South Indian", "Chinese"],
                    avgRating: 4.2,
                    veg: true,
                    parentId: "35024",
                    avgRatingString: "4.2",
                    totalRatingsString: "1.3K+",
                    sla: {
                      deliveryTime: 39,
                      lastMileTravel: 13.9,
                      serviceability: "SERVICEABLE",
                      slaString: "35-40 mins",
                      lastMileTravelString: "13.9 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-03-19 23:00:00",
                      opened: true,
                    },
                    badges: {
                      imageBadges: [
                        {
                          imageId: "v1695133679/badges/Pure_Veg111.png",
                          description: "pureveg",
                        },
                      ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "pureveg",
                                imageId: "v1695133679/badges/Pure_Veg111.png",
                              },
                            },
                          ],
                        },
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV2: {},
                    orderabilityCommunication: {},
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--",
                      },
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-ca5f0b70-a47b-45cd-bb9e-82e06a588dbe",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/chhindwara/apni-rasoi-family-dhaba-vishnu-nagar-parasia-road-rest213358",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK",
                  },
                  widgetId:
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                },
                {
                  "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                  info: {
                    id: "898041",
                    name: "Thikana",
                    cloudinaryImageId:
                      "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/78517964-20dc-4e37-92ce-8990deb14ab6_898041.jpg",
                    locality: "RANGLA PUNJAB PARASIA ROAD",
                    areaName: " ADARSH NAGAR CHHINDWARA",
                    costForTwo: "₹250 for two",
                    cuisines: ["Indian"],
                    avgRating: 4.3,
                    parentId: "215738",
                    avgRatingString: "4.3",
                    totalRatingsString: "39",
                    sla: {
                      deliveryTime: 43,
                      lastMileTravel: 13.6,
                      serviceability: "SERVICEABLE",
                      slaString: "40-45 mins",
                      lastMileTravelString: "13.6 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-03-19 23:45:00",
                      opened: true,
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "₹50 OFF",
                      subHeader: "ABOVE ₹199",
                      discountTag: "FLAT DEAL",
                    },
                    orderabilityCommunication: {},
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--",
                      },
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-ca5f0b70-a47b-45cd-bb9e-82e06a588dbe",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/chhindwara/thikana-rangla-punjab-parasia-road-adarsh-nagar-chhindwara-rest898041",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK",
                  },
                  widgetId:
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                },
                {
                  "@type":
                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                  info: {
                    id: "151656",
                    name: "Dev International",
                    cloudinaryImageId: "enj3srsnhbltbom2ovvh",
                    locality: "khajri road",
                    areaName: "Mohan Nagar",
                    costForTwo: "₹100 for two",
                    cuisines: [
                      "North Indian",
                      "Chinese",
                      "Fast Food",
                      "Beverages",
                    ],
                    avgRating: 4.3,
                    parentId: "71556",
                    avgRatingString: "4.3",
                    totalRatingsString: "462",
                    sla: {
                      deliveryTime: 54,
                      lastMileTravel: 11.7,
                      serviceability: "SERVICEABLE",
                      slaString: "50-55 mins",
                      lastMileTravelString: "11.7 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-03-19 22:30:00",
                      opened: true,
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "₹150 OFF",
                      subHeader: "ABOVE ₹399",
                      discountTag: "FLAT DEAL",
                    },
                    orderabilityCommunication: {},
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--",
                      },
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-ca5f0b70-a47b-45cd-bb9e-82e06a588dbe",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/chhindwara/dev-international-khajri-road-mohan-nagar-rest151656",
                    text: "RESTAURANT_MENU",
                    type: "WEBLINK",
                  },
                  widgetId:
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
                },
              ],
            },
          },
        },
      },
    },
  ];

  const allRestaurants =
    resObj[0].card.card.gridElements.infoWithStyle.restaurants;

  // State to manage the list of restaurants
  const [restaurants, setRestaurants] = useState(allRestaurants);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to filter top-rated restaurants
  const filterTopRated = () => {
    const filteredRestaurants = allRestaurants.filter(
      (res) => parseFloat(res.info.avgRatingString) > 4
    );
    setRestaurants(filteredRestaurants);
  };

  // Function to reset the filter and show all restaurants
  const resetFilter = () => {
    setRestaurants(allRestaurants);
  };

  // Function to handle search
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredRestaurants = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(query)
    );
    setRestaurants(filteredRestaurants);
  };

  return (
    <div
      style={{
        margin: 10,
      }}
    >
      <Header />

      {/* Search and Filter Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        {/* Search Input */}
        <div style={{ border: "1px solid black", padding: 5 }}>
          <input
            placeholder="Search here"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        {/* Filter Button */}
        <button
          style={{
            height: 30,
            width: 200,
            marginLeft: 10,
          }}
          onClick={filterTopRated}
        >
          Top Rated Restaurants
        </button>

        {/* Reset Filter Button */}
        <button
          style={{
            height: 30,
            width: 100,
            marginLeft: 10,
          }}
          onClick={resetFilter}
        >
          Reset
        </button>
      </div>

      {/* Restaurant Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {restaurants.map((restaurant) => (
          <ResturantCard
            key={restaurant.info.id}
            resName={restaurant.info.name}
            cusine={restaurant.info.cuisines.join(", ")}
            rating={restaurant.info.avgRatingString}
            deliveryTime={restaurant.info.sla.slaString}
            imageId={restaurant.info.cloudinaryImageId}
            price={restaurant.info.costForTwo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
