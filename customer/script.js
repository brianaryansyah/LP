// ==================== 1. KONFIGURASI & DATA ====================
const CONFIG = {
  WA_NUMBER: "6285640734972",
  STORE_NAME: "Mie Ayam Semangkok",
  STORE_ADDRESS: "Jl. Raya Makan Enak No. 123, Jakarta Pusat",
  STORE_PHONE: "0856-4073-4972",
  OPERATION_HOURS: "Senin - Sabtu: 12:00 - 20:00 WIB (Minggu: Libur)",
  STORAGE_KEY: "MAS_CART_V5",
  THEME_KEY: "MAS_THEME",
  CUSTOMER_DATA_KEY: "MAS_CUSTOMER_DATA",
  GOOGLE_MAPS_LINK: "https://goo.gl/maps/v8dnwhChcs6mZC3Za",
  INSTAGRAM_USERNAME: "@mieayamsemangkok",
  SLIDER_INTERVAL: 5000,
  AUTO_SLIDE: true,
  VERSION: "6.0.0",
};

// ==================== 2. DATA PRODUK ====================
const PRODUCTS = {
  makanan: [
    {
      id: 1,
      name: "Bakmi Seafood Hot Plate",
      price: 20000,
      category: "seafood",
      description:
        "Bakmi seafood segar dengan udang, cumi, dan kerang di atas hot plate panas. Sajian istimewa yang menggugah selera.",
      img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=300&fit=crop&auto=format&q=80",
      options: ["seafood", "pedas"],
      popular: true,
      rating: 4.9,
      stock: 30,
    },
    {
      id: 2,
      name: "Bakso Original",
      price: 12000,
      category: "bakso",
      description:
        "Bakso daging sapi pilihan dengan kuah kaldu sapi yang gurih dan nikmat. Tekstur kenyal dan empuk.",
      img: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&h=300&fit=crop&auto=format&q=80",
      options: ["size"],
      popular: true,
      rating: 4.8,
      stock: 50,
    },
    {
      id: 3,
      name: "Bakso Isi Daging Cincang",
      price: 17000,
      category: "bakso",
      description:
        "Bakso spesial dengan isian daging cincang yang gurih dan beraroma rempah pilihan.",
      img: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=400&h=300&fit=crop&auto=format&q=80",
      options: ["size"],
      popular: true,
      rating: 4.8,
      stock: 40,
    },
    {
      id: 4,
      name: "Bakso Isi Keju",
      price: 17000,
      category: "bakso",
      description:
        "Bakso premium dengan isian keju mozarella yang lumer ketika disantap. Kombinasi gurih dan creamy.",
      img: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=400&h=300&fit=crop&auto=format&q=80",
      options: ["size"],
      popular: true,
      rating: 4.9,
      stock: 35,
    },
    {
      id: 5,
      name: "Mie Ayam Original",
      price: 12000,
      category: "mie",
      description:
        "Mie ayam klasik dengan potongan ayam kecap dan minyak bawang yang harum. Rasa autentik khas Indonesia.",
      img: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=400&h=300&fit=crop&auto=format&q=80",
      options: ["topping"],
      popular: true,
      rating: 4.9,
      stock: 60,
    },
    {
      id: 6,
      name: "Mie Ayam Ceker",
      price: 13500,
      category: "mie",
      description:
        "Mie ayam spesial dengan ceker ayam yang empuk dan gurih. Kombinasi sempurna tekstur dan rasa.",
      img: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&h=300&fit=crop&auto=format&q=80",
      options: ["topping"],
      popular: true,
      rating: 4.8,
      stock: 45,
    },
    {
      id: 7,
      name: "Mie Ayam Telur Puyuh",
      price: 14500,
      category: "mie",
      description:
        "Mie ayam dengan tambahan telur puyuh yang gurih dan bergizi. Sajian spesial untuk keluarga.",
      img: "https://images.unsplash.com/photo-1559314809-2b99056a8c4a?w=400&h=300&fit=crop&auto=format&q=80",
      options: ["topping"],
      popular: true,
      rating: 4.8,
      stock: 50,
    },
    {
      id: 8,
      name: "Mie Ayam Kepala",
      price: 14500,
      category: "mie",
      description:
        "Mie ayam dengan bagian kepala ayam yang gurih. Untuk pecinta cita rasa ayam yang kuat.",
      img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop&auto=format&q=80",
      options: ["topping"],
      popular: false,
      rating: 4.7,
      stock: 40,
    },
    {
      id: 9,
      name: "Mie Ayam Bakso",
      price: 15000,
      category: "mie",
      description:
        "Mie ayam dengan tambahan bakso sapi spesial yang kenyal dan gurih. Kombinasi lengkap rasa.",
      img: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&h=300&fit=crop&auto=format&q=80",
      options: ["topping"],
      popular: true,
      rating: 4.9,
      stock: 55,
    },
  ],
  minuman: [
    {
      id: 101,
      name: "Es/Hangat Air Putih",
      price: 1000,
      category: "minuman",
      description:
        "Air putih segar, tersedia dalam pilihan es atau hangat sesuai selera Anda.",
      img: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=300&fit=crop&auto=format&q=80",
      options: ["suhu"],
      popular: true,
      rating: 4.5,
      stock: 100,
    },
    {
      id: 102,
      name: "Es/Hangat Teh Tawar",
      price: 2000,
      category: "minuman",
      description:
        "Teh tawar menyegarkan, tersedia es atau hangat. Pilihan tepat untuk pendamping makanan.",
      img: "https://images.unsplash.com/photo-1597481499751-7c2ecc4f1d14?w=400&h=300&fit=crop&auto=format&q=80",
      options: ["suhu"],
      popular: false,
      rating: 4.5,
      stock: 90,
    },
    {
      id: 103,
      name: "Es/Hangat Teh Manis",
      price: 4000,
      category: "minuman",
      description:
        "Teh manis dengan gula pasir pilihan, dingin atau hangat sempurna.",
      img: "https://images.unsplash.com/photo-1597481499751-7c2ecc4f1d14?w=400&h=300&fit=crop&auto=format&q=80",
      options: ["suhu", "manis"],
      popular: true,
      rating: 4.7,
      stock: 85,
    },
    {
      id: 104,
      name: "Es/Hangat Jeruk Tawar",
      price: 5000,
      category: "minuman",
      description:
        "Jeruk segar asli tanpa gula, kaya vitamin C. Tersedia es atau hangat.",
      img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop&auto=format&q=80",
      options: ["suhu"],
      popular: false,
      rating: 4.6,
      stock: 80,
    },
    {
      id: 105,
      name: "Es/Hangat Jeruk Manis",
      price: 7000,
      category: "minuman",
      description:
        "Jeruk segar dengan gula pasir pilihan. Rasa manis asam yang menyegarkan.",
      img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop&auto=format&q=80",
      options: ["suhu", "manis"],
      popular: true,
      rating: 4.8,
      stock: 75,
    },
    {
      id: 106,
      name: 'Es/Hangat Kopi Hitam "Kapal Api"',
      price: 5000,
      category: "minuman",
      description:
        "Kopi hitam Kapal Api original, rasa kuat dan aroma khas kopi nusantara.",
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&auto=format&q=80",
      options: ["suhu", "kopi"],
      popular: true,
      rating: 4.7,
      stock: 70,
    },
    {
      id: 107,
      name: 'Es/Hangat Kopi "GoodDay Cappucino"',
      price: 5000,
      category: "minuman",
      description:
        "Kopi GoodDay Cappucino dengan rasa creamy dan manis yang pas.",
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&auto=format&q=80",
      options: ["suhu", "kopi"],
      popular: true,
      rating: 4.6,
      stock: 65,
    },
    {
      id: 108,
      name: 'Es/Hangat Matcha "Chocolatos"',
      price: 5000,
      category: "minuman",
      description:
        "Minuman matcha Chocolatos dengan rasa green tea yang autentik.",
      img: "https://images.unsplash.com/photo-1554116152-2c2c0c35dac7?w=400&h=300&fit=crop&auto=format&q=80",
      options: ["suhu"],
      popular: true,
      rating: 4.6,
      stock: 60,
    },
    {
      id: 109,
      name: 'Es/Hangat Chocolate "Chocolatos"',
      price: 5000,
      category: "minuman",
      description:
        "Coklat Chocolatos dengan rasa creamy dan manis yang disukai semua usia.",
      img: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400&h=300&fit=crop&auto=format&q=80",
      options: ["suhu"],
      popular: true,
      rating: 4.7,
      stock: 65,
    },
    {
      id: 110,
      name: "Air Mineral Botol 600ml",
      price: 3500,
      category: "minuman",
      description: "Air mineral kemasan botol 600ml, praktis dan higienis.",
      img: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=300&fit=crop&auto=format&q=80",
      options: [],
      popular: true,
      rating: 4.5,
      stock: 100,
    },
  ],
};

const PRODUCT_OPTIONS = {
  topping: {
    id: "topping",
    name: "Pilihan Topping",
    type: "select",
    options: [
      { id: "original", label: "Original Ayam Cincang", price: 0 },
      { id: "ceker", label: "Extra Ceker (+Rp 2.000)", price: 2000 },
      { id: "puyuh", label: "Extra Telur Puyuh (+Rp 2.000)", price: 2000 },
      { id: "bakso", label: "Extra Bakso (+Rp 3.000)", price: 3000 },
    ],
  },
  pedas: {
    id: "pedas",
    name: "Level Pedas",
    type: "select",
    options: [
      { id: "tidak", label: "Tidak Pedas", price: 0 },
      { id: "sedang", label: "Pedas Sedang", price: 0 },
      { id: "pedas", label: "Pedas", price: 0 },
      { id: "ekstra", label: "Pedas Ekstra", price: 0 },
    ],
  },
  size: {
    id: "size",
    name: "Ukuran Porsi",
    type: "select",
    options: [
      { id: "reguler", label: "Reguler", price: 0 },
      { id: "jumbo", label: "Jumbo (+Rp 5.000)", price: 5000 },
      { id: "family", label: "Family Size (+Rp 10.000)", price: 10000 },
    ],
  },
  seafood: {
    id: "seafood",
    name: "Pilihan Seafood",
    type: "select",
    options: [
      { id: "original", label: "Udang & Cumi", price: 0 },
      { id: "extra_udang", label: "Extra Udang (+Rp 5.000)", price: 5000 },
      { id: "extra_cumi", label: "Extra Cumi (+Rp 4.000)", price: 4000 },
      { id: "extra_kerang", label: "Extra Kerang (+Rp 3.000)", price: 3000 },
    ],
  },
  suhu: {
    id: "suhu",
    name: "Pilihan Suhu",
    type: "select",
    options: [
      { id: "es", label: "Es", price: 0 },
      { id: "hangat", label: "Hangat", price: 0 },
    ],
  },
  manis: {
    id: "manis",
    name: "Level Kemanisan",
    type: "select",
    options: [
      { id: "normal", label: "Normal", price: 0 },
      { id: "kurang", label: "Kurang Manis", price: 0 },
      { id: "tambah", label: "Tambah Manis", price: 0 },
    ],
  },
  kopi: {
    id: "kopi",
    name: "Pilihan Kopi",
    type: "select",
    options: [
      { id: "normal", label: "Normal", price: 0 },
      { id: "manis", label: "Manis", price: 0 },
      { id: "sedang", label: "Sedang", price: 0 },
    ],
  },
};

// ==================== 3. STATE MANAGEMENT ====================
let appState = null;

class AppState {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEY)) || [];
    this.customerData =
      JSON.parse(localStorage.getItem(CONFIG.CUSTOMER_DATA_KEY)) || {};
    this.currentCategory = "all";
    this.currentSlide = 0;
    this.slideInterval = null;
    this.testimonialIndex = 0;
    this.currentModalProduct = null;
    this.modalQuantity = 1;
    this.selectedOptions = {};
    this.isCartOpen = false;
    this.isModalOpen = false;
    this.currentCartStep = 1;
    this.faqData = [
      {
        question: "Berapa lama waktu pengiriman?",
        answer:
          "Waktu pengiriman berkisar 30-60 menit tergantung lokasi dan kondisi lalu lintas. Untuk area dalam 5km, biasanya 30-45 menit.",
      },
      {
        question: "Apakah ada minimal pembelian untuk pengiriman?",
        answer:
          "Ya, minimal pembelian Rp 50.000 untuk mendapatkan gratis ongkir dalam radius 5km. Di luar itu, biaya ongkir menyesuaikan jarak.",
      },
      {
        question: "Metode pembayaran apa saja yang tersedia?",
        answer:
          "Kami menerima pembayaran via COD (Bayar di tempat), transfer bank (BCA/Mandiri/BNI), QRIS, dan e-wallet (GoPay/OVO/Dana).",
      },
      {
        question: "Jam operasional kapan saja?",
        answer:
          "Kami buka setiap hari Senin hingga Sabtu pukul 12:00 - 20:00 WIB. Hari Minggu kami libur.",
      },
      {
        question: "Bisakah memesan untuk acara khusus?",
        answer:
          "Tentu! Untuk pesanan dalam jumlah besar atau acara khusus, silakan hubungi kami minimal 3 hari sebelumnya untuk koordinasi.",
      },
    ];
    this.testimonials = [
      {
        name: "Budi Santoso",
        rating: 5,
        date: "2 hari yang lalu",
        avatar: "👨‍💼",
        content:
          "Mie ayam terenak yang pernah saya coba! Rasanya autentik banget, ayamnya banyak dan empuk. Worth it banget harganya.",
      },
      {
        name: "Sari Dewi",
        rating: 5,
        date: "1 minggu yang lalu",
        avatar: "👩‍🍳",
        content:
          "Bakso isi telurnya luar biasa! Telurnya padat dan gurih. Anak-anak saya sampai rebutan. Pelayanannya juga cepat dan ramah.",
      },
      {
        name: "Agus Wijaya",
        rating: 4,
        date: "2 minggu yang lalu",
        avatar: "👨‍🎓",
        content:
          "Hotplate seafoodnya recommended banget! Masih panas sampai rumah, seafoodnya segar dan porsinya besar. Bakal order lagi!",
      },
      {
        name: "Diana Putri",
        rating: 5,
        date: "3 minggu yang lalu",
        avatar: "👩‍💻",
        content:
          "Proses order via WhatsApp mudah banget. Makanan datang tepat waktu, masih panas, dan packingnya rapi. 10/10 recommended!",
      },
    ];
  }

  saveCart() {
    try {
      localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(this.cart));
      this.updateCartCount();
    } catch (error) {
      console.error("Gagal menyimpan keranjang:", error);
    }
  }

  saveCustomerData() {
    try {
      localStorage.setItem(
        CONFIG.CUSTOMER_DATA_KEY,
        JSON.stringify(this.customerData)
      );
    } catch (error) {
      console.error("Gagal menyimpan data pelanggan:", error);
    }
  }

  addToCart(product, selectedOptions = [], quantity = 1, note = "") {
    try {
      // Validate stock
      const existingProduct = [...PRODUCTS.makanan, ...PRODUCTS.minuman].find(
        (p) => p.id === product.id
      );
      if (existingProduct && existingProduct.stock < quantity) {
        showToast(`Stok ${product.name} tidak mencukupi`, "error");
        return null;
      }

      // Generate unique ID for cart item
      const optionsKey =
        selectedOptions.length > 0
          ? JSON.stringify(
              selectedOptions.sort((a, b) => a.id.localeCompare(b.id))
            )
          : "default";

      const uniqueId = `${product.id}_${optionsKey}_${Date.now()}`;

      // Check if item already exists in cart
      const existingIndex = this.cart.findIndex(
        (item) =>
          item.productId === product.id && item.optionsKey === optionsKey
      );

      let cartItem;

      if (existingIndex > -1) {
        // Update existing item
        this.cart[existingIndex].quantity += quantity;
        if (note) this.cart[existingIndex].note = note;
        cartItem = this.cart[existingIndex];
      } else {
        // Create new cart item
        cartItem = {
          id: uniqueId,
          productId: product.id,
          name: product.name,
          basePrice: product.price,
          selectedOptions: selectedOptions.map((opt) => ({ ...opt })),
          price:
            product.price +
            selectedOptions.reduce((sum, opt) => sum + (opt.price || 0), 0),
          quantity,
          image: product.img,
          note,
          optionsKey,
          addedAt: new Date().toISOString(),
          category: product.category,
        };
        this.cart.push(cartItem);
      }

      this.saveCart();
      this.updateCartCount();
      this.updateProductCards();

      // Show success notification with product name
      showToast(`${product.name} ditambahkan ke keranjang! 🛒`, "success");

      return cartItem;
    } catch (error) {
      console.error("Error adding to cart:", error);
      showToast("Gagal menambahkan ke keranjang", "error");
      return null;
    }
  }

  removeFromCart(itemId, quantity = 1) {
    try {
      const itemIndex = this.cart.findIndex((item) => item.id === itemId);

      if (itemIndex === -1) return false;

      if (this.cart[itemIndex].quantity > quantity) {
        this.cart[itemIndex].quantity -= quantity;
      } else {
        this.cart.splice(itemIndex, 1);
      }

      this.saveCart();
      this.updateCartCount();
      this.updateProductCards();

      return true;
    } catch (error) {
      console.error("Error removing from cart:", error);
      return false;
    }
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
    this.updateCartCount();
    this.updateProductCards();
  }

  getCartTotal() {
    return this.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  getTotalItems() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  updateCartCount() {
    try {
      const totalItems = this.getTotalItems();
      const cartCountElements = document.querySelectorAll(
        ".cart-count, .mobile-cart-count"
      );

      cartCountElements.forEach((element) => {
        if (element) {
          element.textContent = totalItems;
          element.style.display = totalItems > 0 ? "flex" : "none";
        }
      });

      // Update cart button states
      document.querySelectorAll(".cart-btn").forEach((btn) => {
        if (btn) {
          btn.classList.toggle("has-items", totalItems > 0);
        }
      });
    } catch (error) {
      console.error("Error updating cart count:", error);
    }
  }

  updateProductCards() {
    try {
      const productCards = document.querySelectorAll(".product-card");

      productCards.forEach((card) => {
        const productId = parseInt(card.dataset.id);
        const product = [...PRODUCTS.makanan, ...PRODUCTS.minuman].find(
          (p) => p.id === productId
        );

        if (!product) return;

        // Check if product has options
        const hasOptions = product.options && product.options.length > 0;

        if (!hasOptions) {
          // For products without options, sum all quantities
          const totalQuantity = this.cart
            .filter((item) => item.productId === productId)
            .reduce((sum, item) => sum + item.quantity, 0);

          this.updateProductCardQuantity(card, totalQuantity);
        }
      });
    } catch (error) {
      console.error("Error updating product cards:", error);
    }
  }

  updateProductCardQuantity(card, quantity) {
    try {
      const qtyDisplay = card.querySelector(".qty-display");
      const qtyContainer = card.querySelector(".product-qty");
      const addCartBtn = card.querySelector(".btn-add-cart");
      const btnIcon = addCartBtn?.querySelector("i");
      const btnText = addCartBtn?.querySelector("span") || addCartBtn;

      if (qtyDisplay) qtyDisplay.textContent = quantity;
      if (qtyContainer) {
        qtyContainer.classList.toggle("visible", quantity > 0);
      }
      if (addCartBtn) {
        if (btnIcon)
          btnIcon.className =
            quantity > 0 ? "fas fa-plus" : "fas fa-shopping-cart";
        if (btnText.textContent) {
          btnText.textContent = quantity > 0 ? "Tambah" : "Tambahkan";
        }
      }
    } catch (error) {
      console.error("Error updating product card quantity:", error);
    }
  }

  getProductFromCart(productId) {
    return this.cart.find((item) => item.productId === productId);
  }

  setCartStep(step) {
    this.currentCartStep = step;
    this.updateCartStepIndicator();
    this.updateCartStepTitle();
  }

  updateCartStepIndicator() {
    try {
      const indicators = document.querySelectorAll(".step-indicator");
      indicators.forEach((indicator) => {
        const step = parseInt(indicator.dataset.step);
        indicator.classList.toggle("active", step === this.currentCartStep);
      });

      // Update step visibility
      const steps = document.querySelectorAll(".cart-step");
      steps.forEach((step) => {
        const stepNum = step.id.replace("cartStep", "");
        step.classList.toggle(
          "active",
          stepNum === this.currentCartStep.toString()
        );
      });
    } catch (error) {
      console.error("Error updating cart step indicator:", error);
    }
  }

  updateCartStepTitle() {
    try {
      const stepTitles = {
        1: "Review Pesanan Anda",
        2: "Data Diri & Pengiriman",
        3: "Konfirmasi Pesanan",
      };

      const titleElement = document.getElementById("cartStepTitle");
      if (titleElement) {
        titleElement.textContent = stepTitles[this.currentCartStep] || "";
      }
    } catch (error) {
      console.error("Error updating cart step title:", error);
    }
  }
}

// ==================== 4. UTILITY FUNCTIONS ====================
function formatPrice(price) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

function showToast(message, type = "success", duration = 3000) {
  try {
    let toast = document.getElementById("toast");

    // Create toast if doesn't exist
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }

    const icons = {
      success: "✓",
      error: "✗",
      warning: "⚠",
      info: "ℹ",
    };

    toast.innerHTML = `${icons[type] || icons.info} ${message}`;
    toast.className = `toast ${type}`;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, duration);
  } catch (error) {
    console.error("Error showing toast:", error);
  }
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function validatePhoneNumber(phone) {
  const phoneRegex = /^(08|62|\+62)\d{9,12}$/;
  return phoneRegex.test(phone.replace(/[^0-9+]/g, ""));
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email === "" || emailRegex.test(email);
}

function formatPhoneForWhatsApp(phone) {
  let cleaned = phone.replace(/[^0-9]/g, "");
  if (cleaned.startsWith("0")) {
    cleaned = "62" + cleaned.substring(1);
  } else if (cleaned.startsWith("8")) {
    cleaned = "62" + cleaned;
  }
  return cleaned;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ==================== 5. LOADING SCREEN ====================
function initializeLoadingScreen() {
  try {
    const loadingScreen = document.getElementById("loadingScreen");
    const loadingProgress = document.getElementById("loadingProgress");
    const loadingPercentage = document.getElementById("loadingPercentage");

    if (!loadingScreen || !loadingProgress) {
      // If no loading screen, initialize app directly
      setTimeout(initializeApp, 100);
      return;
    }

    let progress = 0;

    const progressInterval = setInterval(() => {
      progress += Math.random() * 15 + 5;
      if (progress > 100) progress = 100;

      if (loadingProgress) {
        loadingProgress.style.width = `${progress}%`;
      }
      if (loadingPercentage) {
        loadingPercentage.textContent = `${Math.floor(progress)}%`;
      }

      if (progress >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => {
          loadingScreen.classList.add("hidden");
          document.body.classList.remove("loading");
          initializeApp();
        }, 500);
      }
    }, 100);
  } catch (error) {
    console.error("Error in loading screen:", error);
    initializeApp();
  }
}

// ==================== 6. INITIALIZE APP ====================
function initializeApp() {
  try {
    appState = new AppState();

    // Set current year
    const currentYear = document.getElementById("currentYear");
    if (currentYear) {
      currentYear.textContent = new Date().getFullYear();
    }

    // Initialize components
    initializeTheme();
    initializeEventListeners();
    initializeSlider();
    renderProducts();
    renderTestimonials();
    renderFAQ();
    initializeTaglineAnimation();

    // Load saved customer data into form
    loadCustomerData();

    // Update cart count
    appState.updateCartCount();

    // Show welcome toast
    setTimeout(() => {
      showToast(`Selamat datang di ${CONFIG.STORE_NAME}! 🍜`, "success", 4000);
    }, 1000);
  } catch (error) {
    console.error("Error initializing app:", error);
  }
}

// ==================== 7. THEME MANAGEMENT ====================
function initializeTheme() {
  try {
    const savedTheme = localStorage.getItem(CONFIG.THEME_KEY);
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const theme = savedTheme || (prefersDark ? "dark" : "light");

    document.body.setAttribute("data-theme", theme);
    updateThemeIcon(theme);
  } catch (error) {
    console.error("Error initializing theme:", error);
  }
}

function toggleTheme() {
  try {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem(CONFIG.THEME_KEY, newTheme);
    updateThemeIcon(newTheme);

    showToast(
      `Mode ${newTheme === "dark" ? "gelap 🌙" : "terang ☀️"} diaktifkan`,
      "info"
    );
  } catch (error) {
    console.error("Error toggling theme:", error);
  }
}

function updateThemeIcon(theme) {
  try {
    const themeIcon = document.getElementById("themeIcon");
    if (themeIcon) {
      themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
    }
  } catch (error) {
    console.error("Error updating theme icon:", error);
  }
}

// ==================== 8. SLIDER ====================
function initializeSlider() {
  try {
    const slides = document.querySelectorAll(".slide");
    const indicators = document.querySelectorAll(".indicator");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (!slides.length) return;

    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });

      indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === index);
        indicator.setAttribute("aria-current", i === index ? "true" : "false");
      });

      currentSlide = index;
    }

    function nextSlide() {
      showSlide((currentSlide + 1) % slides.length);
    }

    function prevSlide() {
      showSlide((currentSlide - 1 + slides.length) % slides.length);
    }

    // Event listeners
    if (prevBtn) {
      prevBtn.addEventListener("click", prevSlide);
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", nextSlide);
    }

    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => showSlide(index));
    });

    // Slide buttons
    document.querySelectorAll('[id^="slide"]').forEach((btn, index) => {
      btn.addEventListener("click", () => {
        const product = [...PRODUCTS.makanan, ...PRODUCTS.minuman][index];
        if (product) {
          openProductModal(product);
        }
      });
    });

    // Auto slide
    if (CONFIG.AUTO_SLIDE) {
      setInterval(nextSlide, CONFIG.SLIDER_INTERVAL);
    }
  } catch (error) {
    console.error("Error initializing slider:", error);
  }
}

// ==================== 9. PRODUCT RENDERING ====================
function renderProducts() {
  try {
    const makananGrid = document.getElementById("makananGrid");
    const minumanGrid = document.getElementById("minumanGrid");
    const categoryTabs = document.querySelectorAll(".category-tab");

    if (!makananGrid || !minumanGrid) return;

    // Clear existing content
    makananGrid.innerHTML = "";
    minumanGrid.innerHTML = "";

    // Filter products based on category
    const currentCategory = appState.currentCategory;
    const filteredMakanan =
      currentCategory === "all" ||
      currentCategory === "mie" ||
      currentCategory === "bakso" ||
      currentCategory === "seafood"
        ? PRODUCTS.makanan.filter(
            (p) => currentCategory === "all" || p.category === currentCategory
          )
        : [];

    const filteredMinuman =
      currentCategory === "all" || currentCategory === "minuman"
        ? PRODUCTS.minuman
        : [];

    // Render makanan
    filteredMakanan.forEach((product) => {
      renderProductCard(product, makananGrid);
    });

    // Render minuman
    filteredMinuman.forEach((product) => {
      renderProductCard(product, minumanGrid);
    });

    // Update category tabs
    categoryTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const category = tab.dataset.category;
        appState.currentCategory = category;

        // Update active tab
        categoryTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        // Render products
        renderProducts();

        // Scroll to menu section
        const menuSection = document.getElementById("menu");
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  } catch (error) {
    console.error("Error rendering products:", error);
  }
}

function renderProductCard(product, container) {
  try {
    // Calculate total quantity for this product (without options)
    const totalQuantity =
      product.options && product.options.length > 0
        ? 0 // Don't show quantity for products with options
        : appState.cart
            .filter((item) => item.productId === product.id)
            .reduce((sum, item) => sum + item.quantity, 0);

    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.dataset.id = product.id;
    productCard.dataset.category = product.category;

    productCard.innerHTML = `
            <div class="product-badges">
                ${product.popular ? '<span class="badge-hot">Hot!</span>' : ""}
                ${
                  product.category === "seafood"
                    ? '<span class="badge-seafood">Seafood</span>'
                    : ""
                }
                ${
                  product.stock < 10
                    ? `<span class="badge-low">${product.stock} tersisa</span>`
                    : ""
                }
            </div>
            <div class="product-image">
                <img src="${product.img}" alt="${
      product.name
    }" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=300&fit=crop&auto=format'">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <span class="rating-text">${product.rating}</span>
                    <span class="stock-info">• ${product.stock} tersedia</span>
                </div>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-action">
                    <div class="product-qty ${
                      totalQuantity > 0 ? "visible" : ""
                    }">
                        <button class="qty-btn minus" type="button" aria-label="Kurangi jumlah">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="qty-display">${totalQuantity}</span>
                        <button class="qty-btn plus" type="button" aria-label="Tambah jumlah">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <button class="btn-add-cart" type="button">
                        <i class="fas ${
                          totalQuantity > 0 ? "fa-plus" : "fa-shopping-cart"
                        }"></i>
                        ${totalQuantity > 0 ? "Tambah" : "Tambahkan"}
                    </button>
                </div>
            </div>
        `;

    // Add event listeners
    const minusBtn = productCard.querySelector(".qty-btn.minus");
    const plusBtn = productCard.querySelector(".qty-btn.plus");
    const addCartBtn = productCard.querySelector(".btn-add-cart");
    const qtyDisplay = productCard.querySelector(".qty-display");

    minusBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      handleMinusClick(product, productCard, qtyDisplay);
    });

    plusBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      handlePlusClick(product, productCard, qtyDisplay);
    });

    addCartBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      handleAddCartClick(product, productCard, qtyDisplay);
    });

    // Card click for details
    productCard.addEventListener("click", (e) => {
      if (
        !e.target.closest(".product-action") &&
        !e.target.closest(".product-badges")
      ) {
        openProductModal(product);
      }
    });

    container.appendChild(productCard);
  } catch (error) {
    console.error("Error rendering product card:", error);
  }
}

function handleMinusClick(product, productCard, qtyDisplay) {
  try {
    // For products without options
    if (!product.options || product.options.length === 0) {
      // Find the cart item (should be only one for products without options)
      const cartItem = appState.cart.find(
        (item) =>
          item.productId === product.id &&
          (!item.selectedOptions || item.selectedOptions.length === 0)
      );

      if (cartItem) {
        appState.removeFromCart(cartItem.id, 1);
        showToast(`${product.name} dikurangi dari keranjang`, "info");
      }
    }
  } catch (error) {
    console.error("Error handling minus click:", error);
  }
}

function handlePlusClick(product, productCard, qtyDisplay) {
  try {
    const currentQty = parseInt(qtyDisplay.textContent) || 0;

    if (product.stock <= currentQty) {
      showToast(`Stok ${product.name} tidak mencukopi`, "error");
      return;
    }

    if (product.options && product.options.length > 0) {
      openProductModal(product);
    } else {
      const cartItem = appState.addToCart(product, [], 1);
      if (cartItem) {
        showToast(`${product.name} ditambahkan ke keranjang`, "success");
      }
    }
  } catch (error) {
    console.error("Error handling plus click:", error);
  }
}

function handleAddCartClick(product, productCard, qtyDisplay) {
  try {
    const currentQty = parseInt(qtyDisplay.textContent) || 0;

    if (product.stock <= currentQty) {
      showToast(`Stok ${product.name} tidak mencukupi`, "error");
      return;
    }

    if (product.options && product.options.length > 0) {
      openProductModal(product);
    } else {
      const cartItem = appState.addToCart(product, [], 1);
      if (cartItem) {
        showToast(`${product.name} ditambahkan ke keranjang`, "success");
      }
    }
  } catch (error) {
    console.error("Error handling add cart click:", error);
  }
}

// ==================== 10. PRODUCT MODAL ====================
function openProductModal(product) {
  try {
    appState.currentModalProduct = product;
    appState.modalQuantity = 1;
    appState.selectedOptions = {};

    // Initialize default options
    if (product.options && product.options.length > 0) {
      product.options.forEach((optId) => {
        const optionGroup = PRODUCT_OPTIONS[optId];
        if (optionGroup && optionGroup.options.length > 0) {
          appState.selectedOptions[optId] = { ...optionGroup.options[0] };
        }
      });
    }

    // Update modal content
    const modal = document.getElementById("productDetailModal");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalPrice = document.getElementById("modalPrice");
    const modalDescription = document.getElementById("modalDescription");
    const modalQtyDisplay = document.getElementById("modalQtyDisplay");
    const modalCategory = document.getElementById("modalCategory");
    const addOnsSection = document.getElementById("addOnsSection");

    if (!modal || !modalImg || !modalTitle || !modalPrice) return;

    modalImg.src = product.img;
    modalImg.alt = product.name;
    modalTitle.textContent = product.name;
    modalPrice.textContent = formatPrice(product.price);

    if (modalDescription) {
      modalDescription.textContent = product.description;
    }

    if (modalQtyDisplay) {
      modalQtyDisplay.textContent = appState.modalQuantity;
    }

    if (modalCategory) {
      let categoryText = "";
      switch (product.category) {
        case "mie":
          categoryText = "Mie Ayam";
          break;
        case "bakso":
          categoryText = "Bakso Kuah";
          break;
        case "seafood":
          categoryText = "Bakmi Seafood";
          break;
        case "minuman":
          categoryText = "Minuman";
          break;
        default:
          categoryText = product.category;
      }
      modalCategory.textContent = categoryText;
    }

    // Render options
    if (addOnsSection) {
      if (!product.options || product.options.length === 0) {
        addOnsSection.innerHTML =
          '<p class="no-options">Tidak ada pilihan tambahan untuk produk ini.</p>';
      } else {
        let html =
          '<div class="modal-options-header"><h4><i class="fas fa-sliders-h"></i> Pilihan Tambahan</h4></div>';

        product.options.forEach((optId) => {
          const option = PRODUCT_OPTIONS[optId];
          if (!option) return;

          html += `
                        <div class="modal-option-group">
                            <label for="modal-option-${option.id}">
                                <i class="fas fa-cog"></i> ${option.name}
                            </label>
                            <div class="option-select-container">
                                <select id="modal-option-${
                                  option.id
                                }" class="modal-option-select" data-option-id="${
            option.id
          }">
                                    ${option.options
                                      .map(
                                        (opt) => `
                                        <option value="${opt.id}" data-price="${
                                          opt.price
                                        }" ${
                                          appState.selectedOptions[optId]
                                            ?.id === opt.id
                                            ? "selected"
                                            : ""
                                        }>
                                            ${opt.label}${
                                          opt.price > 0
                                            ? ` (+${formatPrice(opt.price)})`
                                            : ""
                                        }
                                        </option>
                                    `
                                      )
                                      .join("")}
                                </select>
                                <i class="fas fa-chevron-down select-arrow"></i>
                            </div>
                        </div>
                    `;
        });

        addOnsSection.innerHTML = html;

        // Add event listeners to option selects
        addOnsSection
          .querySelectorAll(".modal-option-select")
          .forEach((select) => {
            select.addEventListener("change", (e) => {
              const optionId = e.target.dataset.optionId;
              const selectedOptionId = e.target.value;
              const option = PRODUCT_OPTIONS[optionId];

              if (option) {
                const selectedOption = option.options.find(
                  (opt) => opt.id === selectedOptionId
                );
                if (selectedOption) {
                  appState.selectedOptions[optionId] = { ...selectedOption };
                  updateModalTotal();
                }
              }
            });
          });
      }
    }

    // Show modal
    modal.classList.add("open");
    document.body.classList.add("modal-open");
    appState.isModalOpen = true;

    // Update total
    updateModalTotal();
  } catch (error) {
    console.error("Error opening product modal:", error);
  }
}

function updateModalTotal() {
  try {
    if (!appState.currentModalProduct) return;

    let total = appState.currentModalProduct.price;

    // Add option prices
    Object.values(appState.selectedOptions).forEach((option) => {
      total += option.price || 0;
    });

    // Multiply by quantity
    total *= appState.modalQuantity;

    // Update display
    const modalTotalPrice = document.getElementById("modalTotalPrice");
    if (modalTotalPrice) {
      modalTotalPrice.textContent = formatPrice(total);
    }
  } catch (error) {
    console.error("Error updating modal total:", error);
  }
}

function closeProductModal() {
  try {
    const modal = document.getElementById("productDetailModal");
    if (modal) {
      modal.classList.remove("open");
      document.body.classList.remove("modal-open");
      appState.isModalOpen = false;
      appState.currentModalProduct = null;
      appState.selectedOptions = {};
    }
  } catch (error) {
    console.error("Error closing product modal:", error);
  }
}

// ==================== 11. CART MANAGEMENT - 3 STEP PROCESS ====================
function openCart() {
  try {
    const cartPanel = document.getElementById("cartPanel");
    if (cartPanel) {
      cartPanel.classList.add("open");
      document.body.classList.add("cart-open");
      appState.isCartOpen = true;

      // Reset to step 1 when opening cart
      appState.setCartStep(1);
      renderCartItems();
      renderConfirmationData();

      // Scroll to top of cart
      const cartBody = document.getElementById("cartBody");
      if (cartBody) {
        cartBody.scrollTop = 0;
      }
    }
  } catch (error) {
    console.error("Error opening cart:", error);
  }
}

function closeCart() {
  try {
    const cartPanel = document.getElementById("cartPanel");
    if (cartPanel) {
      cartPanel.classList.remove("open");
      document.body.classList.remove("cart-open");
      appState.isCartOpen = false;
    }
  } catch (error) {
    console.error("Error closing cart:", error);
  }
}

function goToCartStep(step) {
  try {
    if (step < 1 || step > 3) return;

    // Validate before proceeding
    if (step === 2 && !validateCartForStep2()) return;
    if (step === 3 && !validateCustomerData()) return;

    appState.setCartStep(step);

    if (step === 2) {
      loadCustomerData();
    } else if (step === 3) {
      saveCustomerData();
      renderConfirmationData();
      updateTermsAgreement();
    }

    // Scroll to top of step content
    const stepContent = document.getElementById(`cartStep${step}`);
    if (stepContent) {
      stepContent.scrollTop = 0;
    }
  } catch (error) {
    console.error("Error going to cart step:", error);
  }
}

function validateCartForStep2() {
  try {
    if (appState.cart.length === 0) {
      showToast("Keranjang belanja kosong", "error");
      return false;
    }

    // Check stock availability
    for (const item of appState.cart) {
      const product = [...PRODUCTS.makanan, ...PRODUCTS.minuman].find(
        (p) => p.id === item.productId
      );
      if (!product) {
        showToast(`Produk ${item.name} tidak ditemukan`, "error");
        return false;
      }

      if (product.stock < item.quantity) {
        showToast(
          `Stok ${product.name} tidak mencukupi. Hanya tersedia ${product.stock} item.`,
          "error"
        );
        return false;
      }
    }

    return true;
  } catch (error) {
    console.error("Error validating cart:", error);
    return false;
  }
}

function renderCartItems() {
  try {
    const cartBody = document.getElementById("cartBody");
    const emptyCartMessage = document.getElementById("emptyCartMessage");
    const cartItemsContainer = document.getElementById("cartItemsContainer");

    if (!cartBody || !emptyCartMessage || !cartItemsContainer) return;

    if (appState.cart.length === 0) {
      emptyCartMessage.classList.remove("hidden");
      cartItemsContainer.innerHTML = "";
      updateCartSummary();
      return;
    }

    emptyCartMessage.classList.add("hidden");
    cartItemsContainer.innerHTML = "";

    appState.cart.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      const optionsSummary = item.selectedOptions
        .map((opt) => opt.label)
        .join(", ");

      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.dataset.id = item.id;

      cartItem.innerHTML = `
                <div class="cart-item-header">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <div class="cart-item-price">${formatPrice(itemTotal)}</div>
                </div>
                
                ${
                  optionsSummary
                    ? `
                    <div class="cart-item-options">
                        <i class="fas fa-cog"></i>
                        <span class="options-summary">${optionsSummary}</span>
                    </div>
                `
                    : ""
                }
                
                <div class="cart-item-controls">
                    <div class="cart-item-qty">
                        <button class="qty-btn decrease" type="button" aria-label="Kurangi jumlah">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="qty-btn increase" type="button" aria-label="Tambah jumlah">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <button class="cart-item-remove" type="button" aria-label="Hapus item dari keranjang">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `;

      // Add event listeners
      const removeBtn = cartItem.querySelector(".cart-item-remove");
      const decreaseBtn = cartItem.querySelector(".qty-btn.decrease");
      const increaseBtn = cartItem.querySelector(".qty-btn.increase");

      removeBtn?.addEventListener("click", () => {
        appState.removeFromCart(item.id);
        renderCartItems();
        showToast("Item dihapus dari keranjang", "info");
      });

      decreaseBtn?.addEventListener("click", () => {
        appState.removeFromCart(item.id, 1);
        renderCartItems();
      });

      increaseBtn?.addEventListener("click", () => {
        const product = [...PRODUCTS.makanan, ...PRODUCTS.minuman].find(
          (p) => p.id === item.productId
        );

        if (product && item.quantity >= product.stock) {
          showToast(`Stok ${product.name} tidak mencukupi`, "error");
          return;
        }

        // Create updated item with increased quantity
        const updatedItem = {
          ...item,
          quantity: item.quantity + 1,
        };

        // Remove old item and add updated one
        appState.removeFromCart(item.id);
        appState.cart.push(updatedItem);
        appState.saveCart();
        renderCartItems();
      });

      cartItemsContainer.appendChild(cartItem);
    });

    updateCartSummary();
  } catch (error) {
    console.error("Error rendering cart items:", error);
  }
}

function updateCartSummary() {
  try {
    const subtotalText = document.getElementById("subtotalText");
    const totalText = document.getElementById("totalText");
    const shippingText = document.getElementById("shippingText");

    const total = appState.getCartTotal();

    if (subtotalText) subtotalText.textContent = formatPrice(total);
    if (totalText) totalText.textContent = formatPrice(total);
    if (shippingText) shippingText.textContent = "Dibahas via WA";
  } catch (error) {
    console.error("Error updating cart summary:", error);
  }
}

// ==================== 12. CUSTOMER DATA MANAGEMENT ====================
function loadCustomerData() {
  try {
    const savedData = appState.customerData;

    // Load into form
    document.getElementById("customerName").value = savedData.name || "";
    document.getElementById("customerPhone").value = savedData.phone || "";
    document.getElementById("customerEmail").value = savedData.email || "";
    document.getElementById("deliveryMethod").value =
      savedData.deliveryMethod || "";
    document.getElementById("customerAddress").value = savedData.address || "";
    document.getElementById("customerCity").value = savedData.city || "";
    document.getElementById("customerPostalCode").value =
      savedData.postalCode || "";
    document.getElementById("deliveryNotes").value =
      savedData.deliveryNotes || "";

    // Load payment method
    const paymentMethod = savedData.paymentMethod || "COD";
    document.getElementById(
      `payment${paymentMethod.toUpperCase()}`
    ).checked = true;

    // Update payment info
    updatePaymentInfo();
  } catch (error) {
    console.error("Error loading customer data:", error);
  }
}

function saveCustomerData() {
  try {
    const form = document.getElementById("customerDataForm");
    if (!form) return;

    appState.customerData = {
      name: document.getElementById("customerName").value.trim(),
      phone: document.getElementById("customerPhone").value.trim(),
      email: document.getElementById("customerEmail").value.trim(),
      deliveryMethod: document.getElementById("deliveryMethod").value,
      address: document.getElementById("customerAddress").value.trim(),
      city: document.getElementById("customerCity").value.trim(),
      postalCode: document.getElementById("customerPostalCode").value.trim(),
      deliveryNotes: document.getElementById("deliveryNotes").value.trim(),
      paymentMethod: document.querySelector(
        'input[name="paymentMethod"]:checked'
      )?.value,
    };

    appState.saveCustomerData();
  } catch (error) {
    console.error("Error saving customer data:", error);
  }
}

function validateCustomerData() {
  try {
    const form = document.getElementById("customerDataForm");
    if (!form) return false;

    let isValid = true;

    // Clear previous errors
    document
      .querySelectorAll(".form-error")
      .forEach((el) => (el.textContent = ""));

    // Validate name
    const name = document.getElementById("customerName").value.trim();
    if (!name) {
      document.getElementById("nameError").textContent =
        "Nama lengkap harus diisi";
      isValid = false;
    } else if (name.length < 3) {
      document.getElementById("nameError").textContent =
        "Nama minimal 3 karakter";
      isValid = false;
    }

    // Validate phone
    const phone = document.getElementById("customerPhone").value.trim();
    if (!phone) {
      document.getElementById("phoneError").textContent =
        "Nomor WhatsApp harus diisi";
      isValid = false;
    } else if (!validatePhoneNumber(phone)) {
      document.getElementById("phoneError").textContent =
        "Format nomor telepon tidak valid";
      isValid = false;
    }

    // Validate email
    const email = document.getElementById("customerEmail").value.trim();
    if (email && !validateEmail(email)) {
      showToast("Format email tidak valid", "error");
      isValid = false;
    }

    // Validate delivery method
    const deliveryMethod = document.getElementById("deliveryMethod").value;
    if (!deliveryMethod) {
      showToast("Pilih metode pengiriman", "error");
      isValid = false;
    }

    // Validate address if delivery method is not pickup
    if (deliveryMethod !== "pickup") {
      const address = document.getElementById("customerAddress").value.trim();
      if (!address) {
        document.getElementById("addressError").textContent =
          "Alamat lengkap harus diisi";
        isValid = false;
      } else if (address.length < 10) {
        document.getElementById("addressError").textContent =
          "Alamat terlalu pendek";
        isValid = false;
      }

      const city = document.getElementById("customerCity").value.trim();
      if (!city) {
        showToast("Kota harus diisi", "error");
        isValid = false;
      }
    }

    return isValid;
  } catch (error) {
    console.error("Error validating customer data:", error);
    return false;
  }
}

function updatePaymentInfo() {
  try {
    const paymentMethod = document.querySelector(
      'input[name="paymentMethod"]:checked'
    )?.value;
    const paymentInfoText = document.getElementById("paymentInfoText");

    if (!paymentInfoText) return;

    const paymentInfo = {
      COD: "Pembayaran dilakukan saat pesanan diterima",
      transfer:
        "Transfer ke BCA 1234567890 a.n. Mie Ayam Semangkok. Konfirmasi transfer via WhatsApp setelah transfer.",
      qris: "Scan QRIS yang akan dikirim via WhatsApp. Pembayaran otomatis terverifikasi.",
    };

    paymentInfoText.textContent = paymentInfo[paymentMethod] || paymentInfo.COD;
  } catch (error) {
    console.error("Error updating payment info:", error);
  }
}

function updateTermsAgreement() {
  try {
    const agreeTerms = document.getElementById("agreeTerms");
    const confirmOrderBtn = document.getElementById("confirmOrderBtn");

    if (agreeTerms && confirmOrderBtn) {
      agreeTerms.addEventListener("change", () => {
        confirmOrderBtn.disabled = !agreeTerms.checked;
      });

      // Initial state
      confirmOrderBtn.disabled = !agreeTerms.checked;
    }
  } catch (error) {
    console.error("Error updating terms agreement:", error);
  }
}

// ==================== 13. CONFIRMATION STEP ====================
function renderConfirmationData() {
  try {
    // Render order items
    const confirmationItems = document.getElementById("confirmationItems");
    if (confirmationItems) {
      confirmationItems.innerHTML = "";

      appState.cart.forEach((item) => {
        const itemTotal = item.price * item.quantity;
        const itemElement = document.createElement("div");
        itemElement.className = "confirmation-item";

        itemElement.innerHTML = `
                    <span class="item-name">${item.name} (${
          item.quantity
        }x)</span>
                    <span class="item-price">${formatPrice(itemTotal)}</span>
                `;

        confirmationItems.appendChild(itemElement);
      });
    }

    // Update total
    const confirmationTotal = document.getElementById("confirmationTotal");
    if (confirmationTotal) {
      confirmationTotal.textContent = formatPrice(appState.getCartTotal());
    }

    // Render customer info
    const customerInfoGrid = document.getElementById("customerInfoGrid");
    if (customerInfoGrid) {
      const data = appState.customerData;

      customerInfoGrid.innerHTML = `
                <div class="info-item">
                    <span class="info-label">Nama</span>
                    <span class="info-value">${data.name || "-"}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">WhatsApp</span>
                    <span class="info-value">${data.phone || "-"}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Email</span>
                    <span class="info-value">${data.email || "-"}</span>
                </div>
            `;
    }

    // Render delivery info
    const deliveryInfoGrid = document.getElementById("deliveryInfoGrid");
    if (deliveryInfoGrid) {
      const data = appState.customerData;
      const deliveryMethodText = {
        delivery: "Antar ke Alamat",
        pickup: "Ambil di Tempat",
        gofood: "GoFood / GrabFood",
      };

      deliveryInfoGrid.innerHTML = `
                <div class="info-item">
                    <span class="info-label">Pengiriman</span>
                    <span class="info-value">${
                      deliveryMethodText[data.deliveryMethod] || "-"
                    }</span>
                </div>
                ${
                  data.deliveryMethod !== "pickup"
                    ? `
                    <div class="info-item">
                        <span class="info-label">Alamat</span>
                        <span class="info-value">${data.address || "-"}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Kota</span>
                        <span class="info-value">${data.city || "-"}</span>
                    </div>
                `
                    : ""
                }
                <div class="info-item">
                    <span class="info-label">Pembayaran</span>
                    <span class="info-value">${
                      data.paymentMethod === "COD"
                        ? "Cash on Delivery"
                        : data.paymentMethod === "transfer"
                        ? "Transfer Bank"
                        : data.paymentMethod === "qris"
                        ? "QRIS"
                        : "-"
                    }</span>
                </div>
                ${
                  data.deliveryNotes
                    ? `
                    <div class="info-item">
                        <span class="info-label">Catatan</span>
                        <span class="info-value">${data.deliveryNotes}</span>
                    </div>
                `
                    : ""
                }
            `;
    }
  } catch (error) {
    console.error("Error rendering confirmation data:", error);
  }
}

// ==================== 14. CHECKOUT PROCESS ====================
function processCheckout() {
  try {
    // Validate final confirmation
    const agreeTerms = document.getElementById("agreeTerms");
    if (!agreeTerms || !agreeTerms.checked) {
      showToast("Harap setujui syarat dan ketentuan", "error");
      return;
    }

    // Validate cart
    if (appState.cart.length === 0) {
      showToast("Keranjang belanja kosong", "error");
      return;
    }

    // Create order summary
    const orderId = `MAS${Date.now().toString().slice(-8)}`;
    const timestamp = new Date().toLocaleString("id-ID");
    const total = appState.getCartTotal();
    const customerData = appState.customerData;

    // Start building WhatsApp message
    let message = `*${CONFIG.STORE_NAME}* 🍜\n`;
    message += `═══════════════════════════════\n\n`;
    message += `📋 *INFORMASI PEMESANAN*\n`;
    message += `─────────────────────────────\n`;
    message += `🆔 Order ID: ${orderId}\n`;
    message += `📅 Tanggal: ${timestamp}\n\n`;

    message += `👤 *DATA PELANGGAN*\n`;
    message += `─────────────────────────────\n`;
    message += `• Nama: ${customerData.name}\n`;
    message += `• WhatsApp: ${customerData.phone}\n`;
    if (customerData.email) {
      message += `• Email: ${customerData.email}\n`;
    }
    message += `\n`;

    message += `🚚 *PENGIRIMAN & PEMBAYARAN*\n`;
    message += `─────────────────────────────\n`;
    message += `• Metode: ${
      customerData.deliveryMethod === "delivery"
        ? "Antar ke Alamat"
        : customerData.deliveryMethod === "pickup"
        ? "Ambil di Tempat"
        : "GoFood/GrabFood"
    }\n`;

    if (customerData.deliveryMethod !== "pickup") {
      message += `• Alamat: ${customerData.address}\n`;
      message += `• Kota: ${customerData.city}\n`;
      if (customerData.postalCode) {
        message += `• Kode Pos: ${customerData.postalCode}\n`;
      }
    }

    message += `• Pembayaran: ${
      customerData.paymentMethod === "COD"
        ? "Cash on Delivery (COD)"
        : customerData.paymentMethod === "transfer"
        ? "Transfer Bank"
        : "QRIS"
    }\n`;

    if (customerData.deliveryNotes) {
      message += `• Catatan: ${customerData.deliveryNotes}\n`;
    }
    message += `\n`;

    message += `🛒 *DETAIL PESANAN*\n`;
    message += `─────────────────────────────\n`;

    appState.cart.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      message += `*${index + 1}. ${item.name} (${item.quantity}x)*\n`;
      message += `   💰 ${formatPrice(itemTotal)}\n`;

      if (item.selectedOptions && item.selectedOptions.length > 0) {
        message += `   ⚙️ Pilihan: ${item.selectedOptions
          .map((opt) => opt.label)
          .join(", ")}\n`;
      }

      message += `\n`;
    });

    message += `💰 *RINCIAN PEMBAYARAN*\n`;
    message += `─────────────────────────────\n`;
    message += `📦 Subtotal: ${formatPrice(total)}\n`;
    message += `🚚 Biaya Kirim: Dibahas via WA\n`;
    message += `─────────────────────────────\n`;
    message += `💵 *TOTAL: ${formatPrice(total)}*\n\n`;

    message += `🏪 *INFORMASI TOKO*\n`;
    message += `─────────────────────────────\n`;
    message += `🍜 ${CONFIG.STORE_NAME}\n`;
    message += `📍 ${CONFIG.STORE_ADDRESS}\n`;
    message += `📞 ${CONFIG.STORE_PHONE}\n`;
    message += `⏰ ${CONFIG.OPERATION_HOURS}\n\n`;

    message += `✅ *KONFIRMASI PESANAN*\n`;
    message += `─────────────────────────────\n`;
    message += `Silakan konfirmasi bahwa data di atas sudah benar. Tim kami akan segera memproses pesanan Anda.\n\n`;
    message += `_Pesan ini dikirim otomatis dari website Mie Ayam Semangkok._`;

    // Send to WhatsApp
    const formattedPhone = formatPhoneForWhatsApp(CONFIG.WA_NUMBER);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;

    // Clear cart and customer data
    appState.clearCart();
    appState.customerData = {};
    appState.saveCustomerData();

    // Close cart panel
    closeCart();
    appState.setCartStep(1);

    // Show success message
    showToast("Pesanan berhasil dikirim ke WhatsApp! 🎉", "success", 5000);

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1000);
  } catch (error) {
    console.error("Error processing checkout:", error);
    showToast("Terjadi kesalahan saat proses checkout", "error");
  }
}

// ==================== 15. RESERVASI FUNCTION ====================
function processReservation() {
  try {
    const form = document.getElementById("reservationForm");
    if (!form) return;

    const name = document.getElementById("reservationName").value.trim();
    const phone = document.getElementById("reservationPhone").value.trim();
    const date = document.getElementById("reservationDate").value;
    const time = document.getElementById("reservationTime").value;
    const guests = document.getElementById("reservationGuests").value;
    const notes = document.getElementById("reservationNotes").value.trim();

    // Validation
    if (!name || !phone || !date || !time || !guests) {
      showToast("Harap isi semua field yang wajib diisi", "error");
      return;
    }

    if (!validatePhoneNumber(phone)) {
      showToast("Format nomor telepon tidak valid", "error");
      return;
    }

    // Format date
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Create reservation message
    let message = `*${CONFIG.STORE_NAME} - RESERVASI TEMPAT* 🍜\n`;
    message += `═══════════════════════════════\n\n`;
    message += `📋 *DATA RESERVASI*\n`;
    message += `─────────────────────────────\n`;
    message += `👤 Nama: ${name}\n`;
    message += `📞 Telepon: ${phone}\n`;
    message += `📅 Tanggal: ${formattedDate}\n`;
    message += `⏰ Waktu: ${time} WIB\n`;
    message += `👥 Jumlah Orang: ${guests}\n`;

    if (notes) {
      message += `📝 Catatan: ${notes}\n`;
    }

    message += `\n🏪 *INFORMASI TOKO*\n`;
    message += `─────────────────────────────\n`;
    message += `🍜 ${CONFIG.STORE_NAME}\n`;
    message += `📍 ${CONFIG.STORE_ADDRESS}\n`;
    message += `📞 ${CONFIG.STORE_PHONE}\n`;
    message += `⏰ ${CONFIG.OPERATION_HOURS}\n\n`;

    message += `✅ Reservasi akan kami konfirmasi via WhatsApp dalam 1x24 jam.\n`;
    message += `🙏 Terima kasih telah memilih ${CONFIG.STORE_NAME}!`;

    // Send to WhatsApp
    const formattedPhone = formatPhoneForWhatsApp(CONFIG.WA_NUMBER);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;

    // Show success modal
    const successModal = document.getElementById("orderConfirmModal");
    const confirmTitle = document.getElementById("confirmTitle");
    const confirmMessage = document.getElementById("confirmMessage");

    if (successModal && confirmTitle && confirmMessage) {
      confirmTitle.textContent = "Reservasi Berhasil Dikirim! 📅";
      confirmMessage.textContent = `Reservasi atas nama ${name} berhasil dikirim. Tim kami akan segera menghubungi Anda via WhatsApp untuk konfirmasi.`;
      successModal.classList.add("open");
      document.body.classList.add("modal-open");

      // Reset form
      form.reset();

      // Set minimum date to today
      const today = new Date().toISOString().split("T")[0];
      document.getElementById("reservationDate").min = today;
    }

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1000);
  } catch (error) {
    console.error("Error processing reservation:", error);
    showToast("Terjadi kesalahan saat mengirim reservasi", "error");
  }
}

// ==================== 16. TESTIMONIALS & FAQ ====================
function renderTestimonials() {
  try {
    const container = document.getElementById("testimonialsContainer");
    if (!container) return;

    container.innerHTML = "";

    appState.testimonials.forEach((testimonial) => {
      const testimonialCard = document.createElement("div");
      testimonialCard.className = "testimonial-card";

      testimonialCard.innerHTML = `
                <div class="testimonial-header">
                    <div class="testimonial-avatar">${testimonial.avatar}</div>
                    <div class="testimonial-info">
                        <h4>${testimonial.name}</h4>
                        <div class="testimonial-rating">
                            ${"★".repeat(testimonial.rating)}${"☆".repeat(
        5 - testimonial.rating
      )}
                        </div>
                        <div class="testimonial-date">${testimonial.date}</div>
                    </div>
                </div>
                <div class="testimonial-content">
                    <p>${testimonial.content}</p>
                </div>
            `;

      container.appendChild(testimonialCard);
    });

    // Initialize testimonial navigation
    const prevBtn = document.getElementById("prevTestimonial");
    const nextBtn = document.getElementById("nextTestimonial");

    if (prevBtn && nextBtn) {
      let currentTestimonial = 0;
      const totalTestimonials = appState.testimonials.length;

      function updateTestimonialPosition() {
        container.style.transform = `translateX(-${currentTestimonial * 100}%)`;
      }

      prevBtn.addEventListener("click", () => {
        currentTestimonial =
          (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
        updateTestimonialPosition();
      });

      nextBtn.addEventListener("click", () => {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        updateTestimonialPosition();
      });

      // Auto slide
      setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        updateTestimonialPosition();
      }, 8000);
    }
  } catch (error) {
    console.error("Error rendering testimonials:", error);
  }
}

function renderFAQ() {
  try {
    const container = document.getElementById("faqContainer");
    if (!container) return;

    container.innerHTML = "";

    appState.faqData.forEach((faq, index) => {
      const faqItem = document.createElement("div");
      faqItem.className = "faq-item";

      faqItem.innerHTML = `
                <button class="faq-question">
                    <span>${faq.question}</span>
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="faq-answer">
                    <p>${faq.answer}</p>
                </div>
            `;

      const questionBtn = faqItem.querySelector(".faq-question");
      questionBtn.addEventListener("click", () => {
        const isActive = faqItem.classList.contains("active");

        // Close all other FAQs
        document.querySelectorAll(".faq-item.active").forEach((item) => {
          if (item !== faqItem) {
            item.classList.remove("active");
          }
        });

        // Toggle current FAQ
        faqItem.classList.toggle("active", !isActive);
      });

      container.appendChild(faqItem);
    });
  } catch (error) {
    console.error("Error rendering FAQ:", error);
  }
}

// ==================== 17. TAGLINE ANIMATION ====================
function initializeTaglineAnimation() {
  try {
    const headerTagline = document.getElementById("headerTagline");
    if (!headerTagline) return;

    const taglines = [
      "🍜 Rasa Autentik Sejak 1990",
      "⭐ Premium Quality, Affordable Price",
      "🔥 Fresh, Delicious, Appetizing",
      "🚀 Order Now, Fast Delivery!",
      "✅ Quality Guaranteed Since 1990",
    ];

    let taglineIndex = 0;

    setInterval(() => {
      headerTagline.style.opacity = "0";
      headerTagline.style.transform = "translateY(10px)";

      setTimeout(() => {
        taglineIndex = (taglineIndex + 1) % taglines.length;
        headerTagline.textContent = taglines[taglineIndex];
        headerTagline.style.opacity = "1";
        headerTagline.style.transform = "translateY(0)";
      }, 500);
    }, 3000);
  } catch (error) {
    console.error("Error in tagline animation:", error);
  }
}

// ==================== 18. EVENT LISTENERS ====================
function initializeEventListeners() {
  try {
    // Theme toggle
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", toggleTheme);
    }

    // Cart buttons
    const openCartBtn = document.getElementById("openCartBtn");
    const closeCartBtn = document.getElementById("closeCartBtn");
    const mobileCartBtn = document.getElementById("mobileCartBtn");

    if (openCartBtn) openCartBtn.addEventListener("click", openCart);
    if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
    if (mobileCartBtn) mobileCartBtn.addEventListener("click", openCart);

    // Desktop order button
    const desktopOrderBtn = document.getElementById("desktopOrderBtn");
    if (desktopOrderBtn) {
      desktopOrderBtn.addEventListener("click", openCart);
    }

    // Cart actions - Step 1
    const clearCartBtn = document.getElementById("clearCartBtn");
    const nextToStep2Btn = document.getElementById("nextToStep2");

    if (clearCartBtn) {
      clearCartBtn.addEventListener("click", () => {
        if (appState.cart.length === 0) {
          showToast("Keranjang sudah kosong", "info");
          return;
        }

        if (confirm("Yakin ingin mengosongkan keranjang belanja?")) {
          appState.clearCart();
          renderCartItems();
          showToast("Keranjang belanja dikosongkan", "info");
        }
      });
    }

    if (nextToStep2Btn) {
      nextToStep2Btn.addEventListener("click", () => goToCartStep(2));
    }

    // Cart actions - Step 2
    const backToStep1Btn = document.getElementById("backToStep1");
    const nextToStep3Btn = document.getElementById("nextToStep3");

    if (backToStep1Btn) {
      backToStep1Btn.addEventListener("click", () => goToCartStep(1));
    }

    if (nextToStep3Btn) {
      nextToStep3Btn.addEventListener("click", () => goToCartStep(3));
    }

    // Cart actions - Step 3
    const backToStep2Btn = document.getElementById("backToStep2");
    const confirmOrderBtn = document.getElementById("confirmOrderBtn");

    if (backToStep2Btn) {
      backToStep2Btn.addEventListener("click", () => goToCartStep(2));
    }

    if (confirmOrderBtn) {
      confirmOrderBtn.addEventListener("click", processCheckout);
    }

    // Payment method change listener
    document
      .querySelectorAll('input[name="paymentMethod"]')
      .forEach((radio) => {
        radio.addEventListener("change", updatePaymentInfo);
      });

    // Delivery method change listener
    const deliveryMethodSelect = document.getElementById("deliveryMethod");
    if (deliveryMethodSelect) {
      deliveryMethodSelect.addEventListener("change", () => {
        const isPickup = deliveryMethodSelect.value === "pickup";
        document.querySelector(".delivery-address-group").style.display =
          isPickup ? "none" : "block";
      });
    }

    // Modal controls
    const modalCloseBtn = document.getElementById("modalCloseBtn");
    const modalQtyDec = document.getElementById("modalQtyDec");
    const modalQtyInc = document.getElementById("modalQtyInc");
    const modalAddToCartBtn = document.getElementById("modalAddToCartBtn");

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener("click", closeProductModal);
    }

    if (modalQtyDec) {
      modalQtyDec.addEventListener("click", () => {
        if (appState.modalQuantity > 1) {
          appState.modalQuantity--;
          const display = document.getElementById("modalQtyDisplay");
          if (display) display.textContent = appState.modalQuantity;
          updateModalTotal();
        }
      });
    }

    if (modalQtyInc) {
      modalQtyInc.addEventListener("click", () => {
        appState.modalQuantity++;
        const display = document.getElementById("modalQtyDisplay");
        if (display) display.textContent = appState.modalQuantity;
        updateModalTotal();
      });
    }

    if (modalAddToCartBtn) {
      modalAddToCartBtn.addEventListener("click", () => {
        if (!appState.currentModalProduct) return;

        // Validate stock
        if (appState.currentModalProduct.stock < appState.modalQuantity) {
          showToast(
            `Stok tidak mencukupi. Hanya tersedia ${appState.currentModalProduct.stock} item.`,
            "error"
          );
          return;
        }

        // Convert selected options to array
        const optionsArray = Object.values(appState.selectedOptions).map(
          (opt) => ({
            id: opt.id,
            label: opt.label,
            price: opt.price,
          })
        );

        // Add to cart
        const cartItem = appState.addToCart(
          appState.currentModalProduct,
          optionsArray,
          appState.modalQuantity
        );

        if (cartItem) {
          // Close modal
          closeProductModal();

          // Show confirmation
          const confirmModal = document.getElementById("orderConfirmModal");
          if (confirmModal) {
            confirmModal.classList.add("open");
            document.body.classList.add("modal-open");
          }

          showToast(
            `${appState.currentModalProduct.name} ditambahkan ke keranjang`,
            "success"
          );
        }
      });
    }

    // Order confirmation modal
    const continueShoppingBtn = document.getElementById("continueShoppingBtn");
    const goToCartBtn = document.getElementById("goToCartBtn");

    if (continueShoppingBtn) {
      continueShoppingBtn.addEventListener("click", () => {
        const confirmModal = document.getElementById("orderConfirmModal");
        if (confirmModal) {
          confirmModal.classList.remove("open");
          document.body.classList.remove("modal-open");
        }
      });
    }

    if (goToCartBtn) {
      goToCartBtn.addEventListener("click", () => {
        const confirmModal = document.getElementById("orderConfirmModal");
        if (confirmModal) {
          confirmModal.classList.remove("open");
          document.body.classList.remove("modal-open");
        }
        openCart();
      });
    }

    // Back to top
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Scroll events
    window.addEventListener(
      "scroll",
      debounce(() => {
        handleScroll();
      }, 100)
    );

    // Newsletter subscription
    const subscribeBtn = document.getElementById("subscribeBtn");
    const newsletterEmail = document.getElementById("newsletterEmail");

    if (subscribeBtn && newsletterEmail) {
      subscribeBtn.addEventListener("click", () => {
        const email = newsletterEmail.value.trim();
        if (!email || !email.includes("@")) {
          showToast("Mohon masukkan email yang valid", "error");
          return;
        }

        showToast(
          "Terima kasih! Anda telah berlangganan newsletter kami.",
          "success"
        );
        newsletterEmail.value = "";
      });
    }

    // FAQ button
    const openFaqBtn = document.getElementById("openFaqBtn");
    if (openFaqBtn) {
      openFaqBtn.addEventListener("click", () => {
        const faqSection = document.querySelector(".faq-section");
        if (faqSection) {
          faqSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }

    // Continue shopping button in cart
    const continueShoppingBtn1 = document.getElementById(
      "continueShoppingBtn1"
    );
    if (continueShoppingBtn1) {
      continueShoppingBtn1.addEventListener("click", closeCart);
    }

    // Reservation form
    const reservationForm = document.getElementById("reservationForm");
    if (reservationForm) {
      reservationForm.addEventListener("submit", (e) => {
        e.preventDefault();
        processReservation();
      });

      // Set minimum date to today
      const today = new Date().toISOString().split("T")[0];
      const reservationDate = document.getElementById("reservationDate");
      if (reservationDate) {
        reservationDate.min = today;
      }
    }

    // Keyboard shortcuts
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (appState.isModalOpen) closeProductModal();
        if (appState.isCartOpen) closeCart();

        const confirmModal = document.getElementById("orderConfirmModal");
        if (confirmModal && confirmModal.classList.contains("open")) {
          confirmModal.classList.remove("open");
          document.body.classList.remove("modal-open");
        }
      }
    });

    // Close modals when clicking outside
    document.addEventListener("click", (e) => {
      const cartPanel = document.getElementById("cartPanel");
      const productModal = document.getElementById("productDetailModal");
      const confirmModal = document.getElementById("orderConfirmModal");

      // Close cart panel
      if (
        appState.isCartOpen &&
        cartPanel &&
        !cartPanel.contains(e.target) &&
        !openCartBtn?.contains(e.target) &&
        !mobileCartBtn?.contains(e.target) &&
        !desktopOrderBtn?.contains(e.target)
      ) {
        closeCart();
      }

      // Close product modal
      if (appState.isModalOpen && productModal && e.target === productModal) {
        closeProductModal();
      }

      // Close confirmation modal
      if (
        confirmModal &&
        confirmModal.classList.contains("open") &&
        e.target === confirmModal
      ) {
        confirmModal.classList.remove("open");
        document.body.classList.remove("modal-open");
      }
    });

    // Mobile menu button
    const mobileMenuBtn = document.getElementById("openMenuBtn");
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener("click", () => {
        const mobileNav = document.getElementById("mobileNav");
        const isExpanded =
          mobileMenuBtn.getAttribute("aria-expanded") === "true";

        mobileMenuBtn.setAttribute("aria-expanded", !isExpanded);
        if (mobileNav) {
          mobileNav.classList.toggle("open");
        }
      });
    }
  } catch (error) {
    console.error("Error initializing event listeners:", error);
  }
}

// ==================== 19. SCROLL HANDLING ====================
function handleScroll() {
  try {
    // Back to top button
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (backToTopBtn) {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    }

    // Header shadow on scroll
    const header = document.querySelector(".site-header");
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    // Update active nav link
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-item");

    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  } catch (error) {
    console.error("Error handling scroll:", error);
  }
}

// ==================== 20. INITIALIZE EVERYTHING ====================
document.addEventListener("DOMContentLoaded", () => {
  initializeLoadingScreen();
});

// ==================== 21. GLOBAL EXPORTS ====================
// Make essential functions available globally for HTML onclick handlers
window.toggleTheme = toggleTheme;
window.openCart = openCart;
window.closeCart = closeCart;
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.processCheckout = processCheckout;
window.processReservation = processReservation;
window.goToCartStep = goToCartStep;
