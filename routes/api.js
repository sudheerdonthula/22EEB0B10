const express = require('express');
const router = express.Router();
const Offer = require('../models/Offer');
const { parseFlipkartResponse } = require('../utils/offerParser');

// 1. POST /offer - Ingests the Flipkart data
router.post('/offer', async (req, res) => {
    try {
        const rawPayload = req.body.flipkartOfferApiResponse;
        
        if (!rawPayload) {
            return res.status(400).json({ error: "Missing flipkartOfferApiResponse in body" });
        }

        const offersToProcess = parseFlipkartResponse(rawPayload);
        let newOffersCount = 0;

        for (const offerData of offersToProcess) {
            // Upsert: Update if exists, Insert if new
            const result = await Offer.updateOne(
                { offerId: offerData.offerId },
                { $set: offerData },
                { upsert: true }
            );
            if (result.matchedCount === 0) newOffersCount++;
        }

        res.json({
            noOfOffersIdentified: offersToProcess.length,
            noOfNewOffersCreated: newOffersCount
        });

    } catch (error) {
        console.error("Error in POST /offer:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// 2. GET /highest-discount - Calculates the best offer (THE NEW PART)
router.get('/highest-discount', async (req, res) => {
    try {
        const { amountToPay, bankName, paymentInstrument } = req.query;
        
        // Basic Validation
        if (!amountToPay || !bankName) {
            return res.status(400).json({ error: "amountToPay and bankName are required" });
        }

        const amount = parseFloat(amountToPay);

        // 1. Build the Query
        // We use a Regex to make bankName case-insensitive (e.g., "sbi" finds "SBI")
        const query = { 
            bankName: { $regex: new RegExp(bankName, 'i') } 
        };

        // Bonus: If user specifies an instrument (e.g., "EMI"), filter for it.
        // Mongoose automatically checks if the array CONTAINS this string.
        if (paymentInstrument) {
            query.paymentInstruments = paymentInstrument;
        }

        // Fetch all matching offers from MongoDB
        const applicableOffers = await Offer.find(query);

        let maxDiscountAmount = 0;
        let bestOfferTitle = null; // Optional: helpful for debugging

        // 2. Iterate and Calculate
        applicableOffers.forEach(offer => {
            // A. Check Minimum Order Value
            if (offer.minOrderValue && amount < offer.minOrderValue) {
                return; // Skip this offer, cart value is too low
            }

            let currentDiscount = 0;

            // B. Calculate based on Type
            if (offer.discountType === 'PERCENTAGE') {
                currentDiscount = (amount * offer.discountValue) / 100;
                
                // C. Apply Max Cap (if it exists)
                if (offer.maxDiscount && currentDiscount > offer.maxDiscount) {
                    currentDiscount = offer.maxDiscount;
                }
            } else if (offer.discountType === 'FLAT') {
                currentDiscount = offer.discountValue;
            }

            // D. Keep the best one found so far
            if (currentDiscount > maxDiscountAmount) {
                maxDiscountAmount = currentDiscount;
                bestOfferTitle = offer.title;
            }
        });

        // 3. Return Result
        res.json({
            highestDiscountAmount: maxDiscountAmount,
            // I've added these purely for your testing, the assignment only asks for the amount
            appliedOffer: bestOfferTitle 
        });

    } catch (error) {
        console.error("Error in GET /highest-discount:", error);
        res.status(500).json({ error: 'Calculation Error' });
    }
});

module.exports = router;