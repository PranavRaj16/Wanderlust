const Listing = require("../models/listing");
const ExpressError = require("../utils/ExpressError.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
  let query = req.query;
  const allListings = await Listing.find(query);
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewListing = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.createListing = async (req, res) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  newListing.geometry = response.body.features[0].geometry;
  await newListing.save();
  req.flash("success", "New Listing created!");
  res.redirect("/listings");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested does not exist");
    res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

module.exports.editListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested does not exist");
    res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  console.log(originalImageUrl);
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/,w_250");
  console.log(originalImageUrl);
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.renderEditListing = async (req, res) => {
  if (!req.body.listing) {
    throw new ExpressError(400, "Send valid data for listing");
  }
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();
  console.log(response.body.features[0].geometry);
  let { id } = req.params;
  let editedListing = await Listing.findByIdAndUpdate(id, {
    ...req.body.listing,
  });
  editedListing.geometry = response.body.features[0].geometry;
  await editedListing.save();
  console.log(editedListing, "Hi reo");
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    editedListing.image = { url, filename };
    await editedListing.save();
  }
  console.log(editedListing);
  req.flash("success", "Listing updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing deleted!");
  res.redirect("/listings");
};
