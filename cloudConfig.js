const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

console.log("Cloudinary ENV:", {
    cloud: process.env.CLOUD_NAME,
    keyExists: !!process.env.CLOUD_API_KEY,
    secretExists: !!process.env.CLOUD_API_SECRET,
    apiKeyLast4: process.env.CLOUD_API_KEY
        ? process.env.CLOUD_API_KEY.slice(-4)
        : null
});

const testParams = {
    allowed_formats: "png,jpg,jpeg",
    folder: "stockpilot_DEV",
    timestamp: 1786199174,
};

const testSignature = cloudinary.utils.api_sign_request(
    testParams,
    process.env.CLOUD_API_SECRET
);

console.log("TEST SIGNATURE:", testSignature);

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