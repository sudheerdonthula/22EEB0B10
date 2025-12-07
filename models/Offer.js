const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    offerId: { type: String, unique: true, required: true }, // Unique ID from Flipkart
    title: String,
    bankName: String, // e.g., "AXIS", "HDFC"
    discountType: { type: String, enum: ['PERCENTAGE', 'FLAT'] },
    discountValue: Number, // e.g., 10 (for 10%) or 500 (flat off)
    maxDiscount: Number, // Cap on discount (e.g., up to ₹1500)
    minOrderValue: Number, // Minimum spend required
    paymentInstruments: [String] // Bonus: ['CREDIT_CARD', 'EMI', 'DEBIT_CARD']
});

module.exports = mongoose.model('Offer', offerSchema);