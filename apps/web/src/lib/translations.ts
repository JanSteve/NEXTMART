// ============================================================================
// NexMart — Multi-Language Translations (English, Gujarati, Hindi)
// ============================================================================

export type Language = 'en' | 'gu' | 'hi';

export interface Translations {
  offerBanner: string;
  deliverTo: string;
  searchPlaceholder: string;
  searchButton: string;
  login: string;
  logout: string;
  myAccount: string;
  orders: string;
  wishlist: string;
  cart: string;
  becomeSeller: string;
  categories: string;
  shopByCategory: string;
  dealOfTheDay: string;
  endsIn: string;
  viewAll: string;
  topPicks: string;
  trendingElectronics: string;
  fashionPicks: string;
  brandsWeLove: string;
  plusTitle: string;
  plusDesc: string;
  plusButton: string;
  addToCart: string;
  addedToCart: string;
  buyNow: string;
  checkDelivery: string;
  checkBtn: string;
  pincodePlaceholder: string;
  genuineProduct: string;
  easyReturns: string;
  freeDelivery: string;
  inStock: string;
  savings: string;
  colorFinish: string;
  chooseOption: string;
  shoppingCart: string;
  cartEmpty: string;
  continueShopping: string;
  proceedToCheckout: string;
  priceDetails: string;
  totalAmount: string;
  discountOnMrp: string;
  deliveryCharges: string;
  free: string;
  applyCoupon: string;
  apply: string;
  addNewAddress: string;
  deliverHere: string;
  paymentMethod: string;
  placeOrder: string;
  orderPlacedSuccess: string;
  trackOrder: string;
  cityVadodara: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    offerBanner: '🎉 Grand Launch Sale — Extra 10% off on your first order! Use code NEXMART10',
    deliverTo: 'Deliver to',
    searchPlaceholder: 'Search for smartphones, laptops, clothing, brands & more...',
    searchButton: 'Search',
    login: 'Login',
    logout: 'Logout',
    myAccount: 'My Account',
    orders: 'Orders',
    wishlist: 'Wishlist',
    cart: 'Cart',
    becomeSeller: 'Become a Seller',
    categories: 'Categories',
    shopByCategory: 'Explore Categories',
    dealOfTheDay: 'Deal of the Day',
    endsIn: 'Ends in',
    viewAll: 'View All',
    topPicks: 'Top Picks for You',
    trendingElectronics: 'Trending in Electronics',
    fashionPicks: 'Fashion & Streetwear',
    brandsWeLove: 'Brands We Love',
    plusTitle: 'NexMart Plus Membership',
    plusDesc: 'Unlimited free delivery & exclusive deals for ₹299/month.',
    plusButton: 'Start Free Trial →',
    addToCart: 'Add to Cart',
    addedToCart: 'Added to Cart!',
    buyNow: 'Buy Now',
    checkDelivery: 'Check Delivery & COD Availability',
    checkBtn: 'Check',
    pincodePlaceholder: 'Enter 6-digit Pincode (e.g. 390001)',
    genuineProduct: '100% Genuine',
    easyReturns: '10-Day Returns',
    freeDelivery: 'Free Delivery',
    inStock: 'In Stock',
    savings: 'SAVINGS',
    colorFinish: 'Color Finish',
    chooseOption: 'Choose Option',
    shoppingCart: 'Shopping Cart',
    cartEmpty: 'Your shopping cart is empty',
    continueShopping: 'Continue Shopping',
    proceedToCheckout: 'Proceed to Checkout',
    priceDetails: 'Price Details',
    totalAmount: 'Total Amount',
    discountOnMrp: 'Discount on MRP',
    deliveryCharges: 'Delivery Charges',
    free: 'FREE',
    applyCoupon: 'Apply Coupon',
    apply: 'Apply',
    addNewAddress: 'Add New Address',
    deliverHere: 'Deliver to this Address',
    paymentMethod: 'Select Payment Method',
    placeOrder: 'Place Order & Pay',
    orderPlacedSuccess: 'Order Placed Successfully!',
    trackOrder: 'Track Your Package',
    cityVadodara: 'Vadodara 390001',
  },
  gu: {
    offerBanner: '🎉 મહા શુભારંભ સેલ — તમારા પ્રથમ ઓર્ડર પર ૧૦% વધારાની છૂટ! કોડ વાપરો: NEXMART10',
    deliverTo: 'ડિલિવરી સ્થળ',
    searchPlaceholder: 'સ્માર્ટફોન, લેપટોપ, કપડાં, બ્રાન્ડ્સ અને ઘણું બધું શોધો...',
    searchButton: 'શોધો',
    login: 'લૉગિન',
    logout: 'લૉગઆઉટ',
    myAccount: 'મારું એકાઉન્ટ',
    orders: 'મારા ઓર્ડર્સ',
    wishlist: 'મનપસંદ સૂચિ',
    cart: 'કાર્ટ',
    becomeSeller: 'વિક્રેતા બનો',
    categories: 'શ્રેણીઓ',
    shopByCategory: 'શ્રેણીઓ અનુસાર ખરીદી કરો',
    dealOfTheDay: 'આજનો સુવર્ણ અવસર (ડિલ ઓફ ધ ડે)',
    endsIn: 'બાકી સમય',
    viewAll: 'બધું જુઓ',
    topPicks: 'તમારા માટે ખાસ પસંદગી',
    trendingElectronics: 'ઇલેક્ટ્રોનિક્સમાં લોકપ્રિય',
    fashionPicks: 'ફેશન અને વસ્ત્રો',
    brandsWeLove: 'ટોચની બ્રાન્ડ્સ',
    plusTitle: 'નેક્સમાર્ટ પ્લસ સદસ્યતા',
    plusDesc: 'દર મહિને માત્ર ₹૨૯૯ માં મફત અનલિમિટેડ ડિલિવરી અને વિશિષ્ટ છૂટ.',
    plusButton: 'મફત ટ્રાયલ શરૂ કરો →',
    addToCart: 'કાર્ટમાં ઉમેરો',
    addedToCart: 'કાર્ટમાં ઉમેરાઈ ગયું!',
    buyNow: 'હમણાં ખરીદો',
    checkDelivery: 'ડિલિવરી અને સીઓડી તપાસો',
    checkBtn: 'તપાસો',
    pincodePlaceholder: '૬-અંકનો પિનકોડ દાખલ કરો (દા.ત. ૩૯૦૦૦૧)',
    genuineProduct: '૧૦૦% અસલી ઉત્પાદન',
    easyReturns: '૧૦ દિવસમાં સરળ પરત',
    freeDelivery: 'મફત ડિલિવરી',
    inStock: 'સ્ટોકમાં ઉપલબ્ધ છે',
    savings: 'બચત',
    colorFinish: 'રંગ પસંદ કરો',
    chooseOption: 'મોડેલ / સાઇઝ પસંદ કરો',
    shoppingCart: 'શોપિંગ કાર્ટ',
    cartEmpty: 'તમારું કાર્ટ ખાલી છે',
    continueShopping: 'ખરીદી ચાલુ રાખો',
    proceedToCheckout: 'ચેકઆઉટ આગળ વધો',
    priceDetails: 'કિંમત વિગતો',
    totalAmount: 'કુલ રકમ',
    discountOnMrp: 'MRP પર છૂટ',
    deliveryCharges: 'ડિલિવરી શુલ્ક',
    free: 'મફત',
    applyCoupon: 'કૂપન કોડ ઉમેરો',
    apply: 'લાગુ કરો',
    addNewAddress: 'નવું સરનામું ઉમેરો',
    deliverHere: 'આ સરનામે ડિલિવરી કરો',
    paymentMethod: 'ચુકવણી પદ્ધતિ પસંદ કરો',
    placeOrder: 'ઓર્ડર કન્ફર્મ કરો',
    orderPlacedSuccess: 'ઓર્ડર સફળતાપૂર્વક મૂકાયો!',
    trackOrder: 'ઓર્ડર ટ્રૅક કરો',
    cityVadodara: 'વડોદરા ૩૯૦૦૦૧',
  },
  hi: {
    offerBanner: '🎉 ग्रैंड लॉन्च सेल — अपने पहले ऑर्डर पर 10% अतिरिक्त छूट पाएं! कोड: NEXMART10',
    deliverTo: 'डिलीवरी स्थान',
    searchPlaceholder: 'स्मार्टफोन, लैपटॉप, फैशन, ब्रांड्स और अन्य खोजें...',
    searchButton: 'खोजें',
    login: 'लॉग इन',
    logout: 'लॉग आउट',
    myAccount: 'मेरा खाता',
    orders: 'मेरे ऑर्डर्स',
    wishlist: 'विशलिस्ट',
    cart: 'कार्ट',
    becomeSeller: 'विक्रेता बनें',
    categories: 'श्रेणियां',
    shopByCategory: 'श्रेणियों के अनुसार खरीदारी करें',
    dealOfTheDay: 'आज का खास ऑफर',
    endsIn: 'समाप्त होने में समय',
    viewAll: 'सभी देखें',
    topPicks: 'आपके लिए सर्वश्रेष्ठ',
    trendingElectronics: 'इलेक्ट्रॉनिक्स में ट्रेंडिंग',
    fashionPicks: 'फैशन और लाइफस्टाइल',
    brandsWeLove: 'टॉप ब्रांड्स',
    plusTitle: 'नेक्समार्ट प्लस मेम्बरशिप',
    plusDesc: 'असीमित मुफ्त डिलीवरी और खास ऑफर्स मात्र ₹299/माह में।',
    plusButton: 'फ्री ट्रायल शुरू करें →',
    addToCart: 'कार्ट में डालें',
    addedToCart: 'कार्ट में जोड़ा गया!',
    buyNow: 'अभी खरीदें',
    checkDelivery: 'डिलीवरी और COD चेक करें',
    checkBtn: 'जांचें',
    pincodePlaceholder: '6 अंकों का पिनकोड डालें (उदा. 390001)',
    genuineProduct: '100% असली उत्पाद',
    easyReturns: '10 दिन में आसान वापसी',
    freeDelivery: 'मुफ्त डिलीवरी',
    inStock: 'स्टॉक में उपलब्ध',
    savings: 'बचत',
    colorFinish: 'रंग चुनें',
    chooseOption: 'मॉडल / साइज चुनें',
    shoppingCart: 'शॉपिंग कार्ट',
    cartEmpty: 'आपकी कार्ट खाली है',
    continueShopping: 'खरीदारी जारी रखें',
    proceedToCheckout: 'चेकआउट के लिए आगे बढ़ें',
    priceDetails: 'मूल्य विवरण',
    totalAmount: 'कुल राशि',
    discountOnMrp: 'MRP पर छूट',
    deliveryCharges: 'डिलीवरी शुल्क',
    free: 'मुफ्त',
    applyCoupon: 'कूपन कोड लगाएं',
    apply: 'लागू करें',
    addNewAddress: 'नया पता जोड़ें',
    deliverHere: 'इस पते पर डिलीवरी करें',
    paymentMethod: 'भुगतान का तरीका चुनें',
    placeOrder: 'ऑर्डर पूरा करें',
    orderPlacedSuccess: 'ऑर्डर सफलतापूर्वक स्वीकार हुआ!',
    trackOrder: 'ऑर्डर ट्रैक करें',
    cityVadodara: 'वडोदरा 390001',
  },
};
