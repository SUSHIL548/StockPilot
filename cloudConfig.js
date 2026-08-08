const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

console.log("Cloudinary ENV:", {
    cloud: !!process.env.CLOUD_NAME,
    key: !!process.env.CLOUD_API_KEY,
    secret: !!process.env.CLOUD_API_SECRET,
    cloudName: process.env.CLOUD_NAME,
    apiKeyLast4: process.env.CLOUD_API_KEY
        ? process.env.CLOUD_API_KEY.slice(-4)
        : null
});

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "stockpilot_DEV",
        allowed_formats: ["png", "jpg", "jpeg"],
    },
});

module.exports = {
    cloudinary,
    storage,
};