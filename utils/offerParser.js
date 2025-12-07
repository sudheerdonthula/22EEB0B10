const parseFlipkartResponse = (payload) => {
    const identifiedOffers = [];

    // HELPER: Safely convert string to number, returning 0 if it fails (NaN)
    const safeParseFloat = (str) => {
        if (!str) return 0;
        const cleanStr = str.replace(/,/g, ''); // Remove commas
        const val = parseFloat(cleanStr);
        return isNaN(val) ? 0 : val;
    };

    try {
        const items = payload.paymentOptions?.items || [];
        const offerItem = items.find(item => item.type === 'OFFER_LIST');
        
        if (!offerItem || !offerItem.data || !offerItem.data.offers || !offerItem.data.offers.offerList) {
            console.log("No offer list found in payload");
            return [];
        }

        const rawOffers = offerItem.data.offers.offerList;

        for (const raw of rawOffers) {
            const titleText = raw.offerText?.text || ""; 
            const descText = raw.offerDescription?.text || ""; 
            
            const offerId = raw.offerDescription?.id || `OFF_${Math.floor(Math.random() * 100000)}`;

            // --- 1. Percentage ---
            const percentMatch = descText.match(/(\d+)%\s*(?:off|cashback|instant discount)/i);
            const discountValue = percentMatch ? safeParseFloat(percentMatch[1]) : 0;
            const discountType = percentMatch ? 'PERCENTAGE' : 'FLAT'; 

            // If FLAT, try to find the amount
            let flatAmount = 0;
            if (discountType === 'FLAT') {
                const flatMatch = descText.match(/(?:flat|save|get)\s*[₹Rs.]?\s*([\d,]+)/i);
                flatAmount = flatMatch ? safeParseFloat(flatMatch[1]) : 0;
            }

            // --- 2. Max Discount ---
            const maxDiscountMatch = descText.match(/up\s*to\s*[₹Rs.]?\s*([\d,]+)/i);
            // Use null for Max Discount if not found (so we don't cap it at 0)
            let maxDiscount = null;
            if (maxDiscountMatch) {
                const parsed = parseFloat(maxDiscountMatch[1].replace(/,/g, ''));
                if (!isNaN(parsed)) maxDiscount = parsed;
            }

            // --- 3. Min Order Value ---
            const minOrderMatch = descText.match(/(?:transaction|order|value|amount)[\s\w]*[₹Rs.]?\s*([\d,]+)/i);
            // Use helper to ensure this is NEVER NaN
            const minOrderValue = minOrderMatch ? safeParseFloat(minOrderMatch[1]) : 0;

            // --- 4. Identify Bank ---
            let bankName = "GENERIC";
            if (raw.provider && raw.provider.length > 0) {
                bankName = raw.provider[0]; 
            } else {
                const upperDesc = descText.toUpperCase();
                if (upperDesc.includes("SBI")) bankName = "SBI";
                else if (upperDesc.includes("HDFC")) bankName = "HDFC";
                else if (upperDesc.includes("AXIS")) bankName = "AXIS";
                else if (upperDesc.includes("ICICI")) bankName = "ICICI";
                else if (upperDesc.includes("PAYTM")) bankName = "PAYTM";
                else if (upperDesc.includes("KOTAK")) bankName = "KOTAK";
            }

            // --- 5. Payment Instruments (FIXED LOGIC) ---
            const instruments = [];
            const upperText = (titleText + " " + descText).toUpperCase();

            // Check for "Non-EMI" specifically (e.g., "Credit Card Non-EMI Transaction")
            const isNonEmi = upperText.includes("NON-EMI");

            // LOGIC FLOW:
            // 1. If it says "EMI" (and is NOT "Non-EMI"), it is strictly an EMI offer.
            // 2. Otherwise, check for Credit/Debit cards (Regular Swipe).
            
            if (upperText.includes("EMI") && !isNonEmi) {
                // It is an EMI offer. Do NOT add "CREDIT_CARD" here.
                instruments.push("EMI");
            } 
            else {
                // It is a Regular Swipe offer (either generic or explicitly Non-EMI)
                if (upperText.includes("CREDIT CARD") || upperText.includes("CREDIT")) {
                    instruments.push("CREDIT_CARD");
                }
                if (upperText.includes("DEBIT CARD") || upperText.includes("DEBIT")) {
                    instruments.push("DEBIT_CARD");
                }
            }

            // UPI is usually distinct, so we can check it independently
            if (upperText.includes("UPI") || upperText.includes("PAYTM") || upperText.includes("BHIM") || upperText.includes("MOBIKWIK")) {
                instruments.push("UPI");
            }
            
            // Fallback: If absolutely no instrument was detected, default to CREDIT_CARD
            if (instruments.length === 0) {
                instruments.push("CREDIT_CARD"); 
            }

            identifiedOffers.push({
                offerId: offerId,
                title: descText,
                bankName: bankName,
                discountType: discountType,
                discountValue: discountType === 'PERCENTAGE' ? discountValue : flatAmount,
                maxDiscount: maxDiscount,
                minOrderValue: minOrderValue,
                paymentInstruments: instruments
            });
        }

    } catch (error) {
        console.error("Error parsing payload:", error);
    }

    return identifiedOffers;
};

module.exports = { parseFlipkartResponse };