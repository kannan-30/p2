const homelist = (req, res) => {
  res.render("locations-list", {
    title: "ShopEase - Your One-Stop Shop for All Your Needs",
    pageHeader: {
      title: "ShopEase",
      strapline: "Discover a wide range of products at unbeatable prices!",
    },
    sidebar:
      "Looking for something special? ShopEase helps you find the perfect products for your needs. Whether it's electronics, fashion, or home essentials, we've got you covered!",
    locations: [
      {
        name: "ShopEase Electronics",
        address: "Main Street, Tech Park",
        rating: 4.5,
        facilities: ["Electronics", "Gadgets", "Accessories"],
        distance: "2Km",
      },
      {
        name: "ShopEase Fashion",
        address: "Market Road, Style Hub",
        rating: 4.7,
        facilities: ["Clothing", "Footwear", "Accessories"],
        distance: "3Km",
      },
    ],
  });
};

const locationInfo = function (req, res) {
  res.render("location-info", {
    title: "ShopEase",
    pageHeader: { title: "ShopEase" },
    sidebar: {
      context:
        "is featured on ShopEase because it offers an amazing shopping experience. Shop for the latest gadgets, stylish clothing, and much more. Make your shopping time joyful and convenient with ShopEase.",
      callToAction:
        "If you've visited and enjoyed it – or if you didn't – please leave a review to help other shoppers make informed decisions.",
    },
    location: {
      name: "ShopEase Electronics",
      address: "Main Street, Tech Park",
      rating: 4.5,
      facilities: ["Electronics", "Gadgets", "Accessories"],
      coords: { lat: 51.455041, lng: -0.9690884 },
      openingTimes: [
        {
          days: "Monday - Saturday",
          opening: "9:00am",
          closing: "9:00pm",
          closed: false,
        },
        {
          days: "Sunday",
          opening: "10:00am",
          closing: "6:00pm",
          closed: false,
        },
      ],
      reviews: [
        {
          author: "John Doe",
          rating: 5,
          timestamp: "14 August 2024",
          reviewText: "Amazing variety of products and great customer service.",
        },
        {
          author: "Jane Smith",
          rating: 4,
          timestamp: "16 July 2024",
          reviewText: "Great deals and easy to find what I needed.",
        },
        {
          author: "Michael Brown",
          rating: 3,
          timestamp: "21 June 2023",
          reviewText: "Decent experience, but I wish the prices were lower.",
        },
      ],
    },
  });
};

const addReview = function (req, res) {
  res.render("location-review-form", {
    title: "Review ShopEase",
    pageHeader: { title: "Review ShopEase" },
  });
};

const contactPage = (req, res) => {
  res.render("contact", {
    title: "Contact ShopEase",
    pageHeader: { title: "Get in Touch with ShopEase" },
    sidebar:
      "Have questions or feedback? We'd love to hear from you! Reach out to us for any inquiries or customer support.",
  });
};

module.exports = {
  homelist,
  locationInfo,
  addReview,
  contactPage,
};
