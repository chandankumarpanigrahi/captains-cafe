const chatbotData = {
    welcome: {
        id: "welcome",
        message: "Hey there! 👋 Welcome to Captain's Cafe. How can I help you today?",
        options: [
            { label: "🍽️ Menu & Orders", next: "menu" },
            { label: "📍 Visit Us", next: "visit" },
            { label: "🎉 Offers & Events", next: "offers" },
            { label: "🎂 Bakery & Catering", next: "bakery" },
            { label: "💼 Careers", next: "careers" },
            { label: "🆘 Support & Complaints", next: "support" },
            { label: "❓ General Questions", next: "general" },
            { label: "📞 Contact Us", next: "contact_direct" }
        ]
    },

    // ─── MENU & ORDERS ────────────────────────────────────
    menu: {
        id: "menu",
        message: "Great choice! 🍽️ What would you like to know about our menu?",
        parent: "welcome",
        options: [
            { label: "📋 View Full Menu", next: "menu_full" },
            { label: "⭐ Today's Specials", next: "menu_specials" },
            { label: "🥗 Dietary Options", next: "menu_dietary" },
            { label: "🛒 Online Ordering", next: "menu_online" },
            { label: "💬 Something Else", next: "menu_other" }
        ]
    },
    menu_full: {
        id: "menu_full",
        message: "You can explore our full menu with all categories, locations, and pricing!",
        parent: "menu",
        action: { type: "link", url: "/menu", label: "View Menu →" }
    },
    menu_specials: {
        id: "menu_specials",
        message: "🌟 Our chef's specials change daily! Visit us or check our menu page for today's featured dishes. We're known for our signature coffee blends and freshly baked pastries!",
        parent: "menu",
        action: { type: "link", url: "/menu", label: "Check Menu Page →" }
    },
    menu_dietary: {
        id: "menu_dietary",
        message: "We care about your dietary needs! 🥗 We offer:\n\n• Vegetarian options across all categories\n• Vegan-friendly dishes\n• Gluten-free alternatives available\n• Allergy information on request\n\nAsk our staff for detailed ingredient information when you visit!",
        parent: "menu"
    },
    menu_online: {
        id: "menu_online",
        message: "You can order from Captain's Cafe through the following options:",
        parent: "menu",
        options: [
            { label: "🟥 Order via Zomato", next: "menu_zomato" },
            { label: "⚠️ Order Related Issue", next: "menu_order_issue" }
        ]
    },
    menu_zomato: {
        id: "menu_zomato",
        message: "You can find us on Zomato! New users enjoy up to 80% off on their first order. 🎉",
        parent: "menu_online",
        action: { type: "link", url: "https://www.zomato.com", label: "Order on Zomato →", external: true }
    },
    menu_order_issue: {
        id: "menu_order_issue",
        message: "Sorry to hear about your order issue! 😔 Please call our Order Support team for immediate assistance:",
        parent: "menu_online",
        action: { type: "phone", number: "1800 159 159", label: "📞 Call 1800 159 159" }
    },
    menu_other: {
        id: "menu_other",
        message: "No worries! Tell us your question about our menu and we'll get back to you.",
        parent: "menu",
        action: { type: "form" }
    },

    // ─── VISIT US ─────────────────────────────────────────
    visit: {
        id: "visit",
        message: "We'd love to see you! 📍 What do you need to know?",
        parent: "welcome",
        options: [
            { label: "📍 Our Locations", next: "visit_locations" },
            { label: "🕐 Cafe Timings", next: "visit_timings" },
            { label: "🅿️ Parking Info", next: "visit_parking" },
            { label: "🗺️ Get Directions", next: "visit_directions" }
        ]
    },
    visit_locations: {
        id: "visit_locations",
        message: "We have 2 outlet locations in Bhubaneswar:\n\n📍 **Outlet 1:** Ekamra Kanan Road, near Chilika Fresh, Rental Colony, IRC Village, Nayapalli, Bhubaneswar, Odisha 751011\n\n📍 **Outlet 2:** Beside Government Veterinary Hospital, Maharishi College Rd, Saheed Nagar, Bhubaneswar, Odisha 751007",
        parent: "visit"
    },
    visit_timings: {
        id: "visit_timings",
        message: "⏰ Our cafe is open:\n\n**Monday to Sunday:** 8:30 AM - 10:00 PM\n\nWe're open every day of the week, ready to serve you!",
        parent: "visit"
    },
    visit_parking: {
        id: "visit_parking",
        message: "🅿️ Yes! Both our locations have convenient parking available for customers. Bike and car parking is available right outside the cafe.",
        parent: "visit"
    },
    visit_directions: {
        id: "visit_directions",
        message: "Get directions to our nearest cafe location. You can also find us easily on Google Maps!",
        parent: "visit",
        action: { type: "link", url: "https://maps.google.com/?q=Captains+Cafe+Bhubaneswar", label: "Open in Google Maps →", external: true }
    },

    // ─── OFFERS & EVENTS ──────────────────────────────────
    offers: {
        id: "offers",
        message: "Looking for a great deal? 🎉 Here's what we have!",
        parent: "welcome",
        options: [
            { label: "🎁 Current Offers", next: "offers_current" },
            { label: "🍔 Foodie Friday", next: "offers_foodie" },
            { label: "🎊 Upcoming Events", next: "offers_events" },
            { label: "💬 Other Offer Inquiry", next: "offers_other" }
        ]
    },
    offers_current: {
        id: "offers_current",
        message: "We have some amazing offers running right now! Check them all out on our offers page. 🎁",
        parent: "offers",
        action: { type: "link", url: "/offers", label: "View All Offers →" }
    },
    offers_foodie: {
        id: "offers_foodie",
        message: "🍔 **FOODIE FRIDAY** — Flat 50% Off!\n\nEvery Friday, enjoy an incredible 50% discount on your favorites. T&C Apply. Don't miss out!",
        parent: "offers",
        action: { type: "link", url: "/offers/foodie-friday", label: "Foodie Friday Details →" }
    },
    offers_events: {
        id: "offers_events",
        message: "🎊 We regularly host exciting events! Keep an eye on our social media for announcements:\n\n• Seasonal specials\n• Live music nights\n• Food tasting events\n• Festival celebrations\n\nFollow us on Instagram for the latest updates!",
        parent: "offers",
        action: { type: "link", url: "https://www.instagram.com/thecaptainscafe.india", label: "Follow on Instagram →", external: true }
    },
    offers_other: {
        id: "offers_other",
        message: "Have a question about our offers? Drop us a message and we'll get back to you!",
        parent: "offers",
        action: { type: "form" }
    },

    // ─── BAKERY & CATERING ────────────────────────────────
    bakery: {
        id: "bakery",
        message: "Yum! 🎂 What are you looking for?",
        parent: "welcome",
        options: [
            { label: "🎂 Custom Cake Orders", next: "bakery_cake" },
            { label: "🍽️ Catering Services", next: "bakery_catering" },
            { label: "🥐 Bakery Menu", next: "bakery_menu" },
            { label: "💬 Something Else", next: "bakery_other" }
        ]
    },
    bakery_cake: {
        id: "bakery_cake",
        message: "🎂 We create beautiful custom cakes for all occasions — birthdays, weddings, anniversaries, and more!\n\nTell us your requirements and we'll craft something special:",
        parent: "bakery",
        action: { type: "form" }
    },
    bakery_catering: {
        id: "bakery_catering",
        message: "We offer professional catering for all types of events! What kind of event are you planning?",
        parent: "bakery",
        options: [
            { label: "🏢 Corporate Catering", next: "bakery_corporate" },
            { label: "🎉 Private Events", next: "bakery_private" }
        ]
    },
    bakery_corporate: {
        id: "bakery_corporate",
        message: "🏢 Our corporate catering covers meetings, conferences, and office events. Let us know your requirements!",
        parent: "bakery_catering",
        action: { type: "form" }
    },
    bakery_private: {
        id: "bakery_private",
        message: "🎉 From birthday parties to wedding receptions — we handle it all! Share your event details:",
        parent: "bakery_catering",
        action: { type: "form" }
    },
    bakery_menu: {
        id: "bakery_menu",
        message: "Explore our freshly baked goods and bakery specials! 🥐",
        parent: "bakery",
        action: { type: "link", url: "/bakery-service", label: "View Bakery Menu →" }
    },
    bakery_other: {
        id: "bakery_other",
        message: "Have a question about our bakery services? We'd love to hear from you!",
        parent: "bakery",
        action: { type: "form" }
    },

    // ─── CAREERS ──────────────────────────────────────────
    careers: {
        id: "careers",
        message: "Interested in joining the Captain's crew? ⚓ Great!",
        parent: "welcome",
        options: [
            { label: "📋 Current Openings", next: "careers_openings" },
            { label: "📝 How to Apply", next: "careers_apply" },
            { label: "💬 Career Inquiry", next: "careers_other" }
        ]
    },
    careers_openings: {
        id: "careers_openings",
        message: "We're currently hiring for multiple positions — Management, Kitchen Staff, and Front of House roles. Check out all the openings!",
        parent: "careers",
        action: { type: "link", url: "/career", label: "View Openings →" }
    },
    careers_apply: {
        id: "careers_apply",
        message: "📝 **How to Apply:**\n\n1. Visit our Career page to see open positions\n2. Click on the role you're interested in\n3. Fill out the application form with your details\n4. Attach your resume/CV\n5. Our HR team will review and get back to you within 5-7 days\n\nGood luck! 🍀",
        parent: "careers",
        action: { type: "link", url: "/career", label: "Start Your Application →" }
    },
    careers_other: {
        id: "careers_other",
        message: "Have a question about working at Captain's Cafe? Ask away!",
        parent: "careers",
        action: { type: "form" }
    },

    // ─── SUPPORT & COMPLAINTS ─────────────────────────────
    support: {
        id: "support",
        message: "We're here to help! 🆘 What do you need assistance with?",
        parent: "welcome",
        options: [
            { label: "📦 Order Issue", next: "support_order" },
            { label: "🌐 Website Issue", next: "support_website" },
            { label: "⭐ Cafe Feedback", next: "support_feedback" },
            { label: "💬 Other Issue", next: "support_other" }
        ]
    },
    support_order: {
        id: "support_order",
        message: "Sorry about that! What went wrong with your order?",
        parent: "support",
        options: [
            { label: "❌ Wrong / Missing Item", next: "support_wrong_item" },
            { label: "🕐 Late Delivery", next: "support_late" },
            { label: "💰 Refund Request", next: "support_refund" }
        ]
    },
    support_wrong_item: {
        id: "support_wrong_item",
        message: "We sincerely apologize! 😔 Please contact our Order Support team immediately for a quick resolution:",
        parent: "support_order",
        action: { type: "phone", number: "1800 159 159", label: "📞 Call 1800 159 159 (Toll Free)" }
    },
    support_late: {
        id: "support_late",
        message: "We're sorry for the delay! 🕐 Please reach out to our Order Support team:",
        parent: "support_order",
        action: { type: "phone", number: "1800 159 159", label: "📞 Call 1800 159 159 (Toll Free)" }
    },
    support_refund: {
        id: "support_refund",
        message: "We understand. Please share your order details and reason for the refund. Our team will review and respond within 24 hours.",
        parent: "support_order",
        action: { type: "form" }
    },
    support_website: {
        id: "support_website",
        message: "For website-related issues, please contact our tech support team:",
        parent: "support",
        action: { type: "phone", number: "+91 89596 89623", label: "📞 Call +91 89596 89623" }
    },
    support_feedback: {
        id: "support_feedback",
        message: "We value your feedback! ⭐ Please share your experience at our cafe. Your input helps us improve!",
        parent: "support",
        action: { type: "form" }
    },
    support_other: {
        id: "support_other",
        message: "Tell us about your issue and we'll do our best to resolve it quickly!",
        parent: "support",
        action: { type: "form" }
    },

    // ─── GENERAL QUESTIONS ────────────────────────────────
    general: {
        id: "general",
        message: "Happy to answer! ❓ What would you like to know?",
        parent: "welcome",
        options: [
            { label: "☕ About Captain's Cafe", next: "general_about" },
            { label: "📶 Wi-Fi Available?", next: "general_wifi" },
            { label: "🐾 Pet Friendly?", next: "general_pets" },
            { label: "🔒 Privacy Policy", next: "general_privacy" },
            { label: "💬 Other Question", next: "general_other" }
        ]
    },
    general_about: {
        id: "general_about",
        message: "Captain's Cafe is your go-to destination for exceptional coffee, food, and vibes in Bhubaneswar! ☕ Learn more about our story, mission, and team:",
        parent: "general",
        action: { type: "link", url: "/about", label: "About Us →" }
    },
    general_wifi: {
        id: "general_wifi",
        message: "📶 **Yes!** Free Wi-Fi is available for all customers at both our locations. Just ask our staff for the password when you visit. Perfect for remote working or casual browsing!",
        parent: "general"
    },
    general_pets: {
        id: "general_pets",
        message: "🐾 We love pets! Well-behaved pets are welcome at our outdoor seating areas. Please keep them on a leash and ensure they're comfortable. We even have water bowls available!",
        parent: "general"
    },
    general_privacy: {
        id: "general_privacy",
        message: "Your privacy matters to us. Read our complete Privacy Policy for details on how we handle your data.",
        parent: "general",
        action: { type: "link", url: "/privacy-policy", label: "View Privacy Policy →" }
    },
    general_other: {
        id: "general_other",
        message: "What's on your mind? Ask away and we'll get back to you!",
        parent: "general",
        action: { type: "form" }
    },

    // ─── CONTACT DIRECTLY ─────────────────────────────────
    contact_direct: {
        id: "contact_direct",
        message: "We'd love to hear from you! 📞 You can reach us through our contact page where you can call, email, or send us a message.",
        parent: "welcome",
        action: { type: "link", url: "/contact", label: "Go to Contact Page →" }
    }
};

export default chatbotData;
