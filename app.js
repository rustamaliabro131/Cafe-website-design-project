/**
 * Specialty Coffee Shop Menu Application
 * Vanilla JavaScript Application Logic
 */

// --- Menu Data Source ---
const MENU_DATA = [
  // --- HOT COFFEES ---
  {
    id: 'caffe-americano',
    name: 'Caffè Americano',
    category: 'hot-coffees',
    categoryName: 'Hot Coffees',
    group: 'drinks',
    price: 4.25,
    calories: '15 cal',
    description: 'Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
    isFeatured: true,
    tag: 'Classic',
    defaultTemp: 'hot'
  },
  {
    id: 'blonde-flat-white',
    name: 'Blonde Roast Flat White',
    category: 'hot-coffees',
    categoryName: 'Hot Coffees',
    group: 'drinks',
    price: 5.45,
    calories: '170 cal',
    description: 'Smooth ristretto shots of blonde espresso paired with steamed whole milk for an exceptionally velvety texture and microfoam rosette.',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=600&auto=format&fit=crop&q=80',
    isFeatured: true,
    tag: 'Barista Choice',
    defaultTemp: 'hot'
  },
  {
    id: 'classic-caramel-macchiato',
    name: 'Classic Caramel Macchiato',
    category: 'hot-coffees',
    categoryName: 'Hot Coffees',
    group: 'drinks',
    price: 5.65,
    calories: '250 cal',
    description: 'Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with a signature buttery caramel drizzle pattern.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop&q=80',
    isFeatured: false,
    tag: 'Popular',
    defaultTemp: 'hot'
  },

  // --- COLD COFFEES ---
  {
    id: 'pistachio-cold-brew',
    name: 'Pistachio Cream Cold Brew',
    category: 'cold-coffees',
    categoryName: 'Cold Coffees',
    group: 'drinks',
    price: 6.25,
    calories: '210 cal',
    description: 'Small-batch slow-steeped cold brew sweetened with vanilla, topped with luscious pistachio cream cold foam and salted brown-butter sprinkles.',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=80',
    isFeatured: true,
    tag: 'Seasonal',
    defaultTemp: 'iced'
  },
  {
    id: 'nitro-cold-brew',
    name: 'Nitro Cold Brew',
    category: 'cold-coffees',
    categoryName: 'Cold Coffees',
    group: 'drinks',
    price: 5.75,
    calories: '5 cal',
    description: 'Slow-steeped Reserve cold brew infused with nitrogen directly on tap for a naturally sweet crema and smooth, cascading draught pour.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80',
    isFeatured: false,
    tag: 'Nitro Tap',
    defaultTemp: 'iced'
  },
  {
    id: 'brown-sugar-shaken-espresso',
    name: 'Brown Sugar Oat Shaken Espresso',
    category: 'cold-coffees',
    categoryName: 'Cold Coffees',
    group: 'drinks',
    price: 5.95,
    calories: '120 cal',
    description: 'Blonde espresso, dark brown sugar and cinnamon vigorously hand-shaken with ice, then topped with a gentle splash of creamy oatmilk.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop&q=80',
    isFeatured: true,
    tag: 'Best Seller',
    defaultTemp: 'iced'
  },

  // --- SIGNATURE LATTES ---
  {
    id: 'iced-caramel-macchiato',
    name: 'Iced Caramel Macchiato',
    category: 'signature-lattes',
    categoryName: 'Signature Lattes',
    group: 'drinks',
    price: 5.85,
    calories: '240 cal',
    description: 'Signature espresso poured over vanilla-infused milk and ice, finished with a generous crosshatch of handcrafted buttery caramel.',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&auto=format&fit=crop&q=80',
    isFeatured: true,
    tag: 'Customer Favorite',
    defaultTemp: 'iced'
  },
  {
    id: 'spanish-vanilla-latte',
    name: 'Spanish Vanilla Latte',
    category: 'signature-lattes',
    categoryName: 'Signature Lattes',
    group: 'drinks',
    price: 6.15,
    calories: '270 cal',
    description: 'Full-bodied double espresso blended with sweetened condensed milk, real Madagascar vanilla beans, and lightly textured warm foam.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop&q=80',
    isFeatured: false,
    tag: 'Signature',
    defaultTemp: 'hot'
  },
  {
    id: 'honey-almond-flat-white',
    name: 'Honey Almond Flat White',
    category: 'signature-lattes',
    categoryName: 'Signature Lattes',
    group: 'drinks',
    price: 5.95,
    calories: '130 cal',
    description: 'Blonde espresso paired with steamed almondmilk and a hint of wildflower honey blend for an uplifted, nutty floral experience.',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=600&auto=format&fit=crop&q=80',
    isFeatured: false,
    tag: 'Plant-Based',
    defaultTemp: 'hot'
  },

  // --- MATCHA & TEA ---
  {
    id: 'ceremonial-iced-matcha',
    name: 'Ceremonial Iced Matcha Latte',
    category: 'matcha-tea',
    categoryName: 'Matcha & Tea',
    group: 'drinks',
    price: 5.95,
    calories: '200 cal',
    description: 'Pure, shade-grown Japanese Uji matcha micro-whisked to vibrant green perfection and layered over chilled organic milk and ice.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&auto=format&fit=crop&q=80',
    isFeatured: true,
    tag: 'Antioxidant',
    defaultTemp: 'iced'
  },
  {
    id: 'peach-green-tea-lemonade',
    name: 'Peach Green Tea Lemonade',
    category: 'matcha-tea',
    categoryName: 'Matcha & Tea',
    group: 'drinks',
    price: 4.95,
    calories: '130 cal',
    description: 'Green tea, spearmint and lemon verbena shaken with ice, real white peach puree and refreshing zesty lemonade.',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=600&auto=format&fit=crop&q=80',
    isFeatured: false,
    tag: 'Refreshing',
    defaultTemp: 'iced'
  },
  {
    id: 'chai-tea-latte',
    name: 'Spiced Masala Chai Latte',
    category: 'matcha-tea',
    categoryName: 'Matcha & Tea',
    group: 'drinks',
    price: 5.25,
    calories: '240 cal',
    description: 'Black tea infused with crushed ginger, cinnamon sticks, cardamom pods and cloves, balance-blended with steamed milk and foam.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80',
    isFeatured: false,
    tag: 'Spiced',
    defaultTemp: 'hot'
  },

  // --- ARTISAN BAKERY ---
  {
    id: 'butter-croissant',
    name: 'Artisan Butter Croissant',
    category: 'artisan-bakery',
    categoryName: 'Artisan Bakery',
    group: 'food',
    price: 3.95,
    calories: '260 cal',
    description: 'Traditional 100% Normandy cultured butter pastry with golden, shatteringly crisp layers and a warm, pillowy honeycomb interior.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop&q=80',
    isFeatured: true,
    tag: 'Fresh Baked',
    defaultTemp: 'warmed'
  },
  {
    id: 'blueberry-scone',
    name: 'Blueberry Streusel Scone',
    category: 'artisan-bakery',
    categoryName: 'Artisan Bakery',
    group: 'food',
    price: 4.25,
    calories: '380 cal',
    description: 'Tender buttermilk scone bursting with sweet wild blueberries, topped with sugar crystals and real vanilla lemon glaze.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80',
    isFeatured: false,
    tag: 'Bakery',
    defaultTemp: 'warmed'
  },
  {
    id: 'almond-danish',
    name: 'Almond Frangipane Danish',
    category: 'artisan-bakery',
    categoryName: 'Artisan Bakery',
    group: 'food',
    price: 4.65,
    calories: '340 cal',
    description: 'Golden puff pastry filled with velvety almond cream, crowned with toasted sliced almonds and powdered confectionery sugar.',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&auto=format&fit=crop&q=80',
    isFeatured: false,
    tag: 'Bakery',
    defaultTemp: 'warmed'
  },

  // --- BREAKFAST ---
  {
    id: 'avocado-sourdough-toast',
    name: 'Avocado Sourdough Toast',
    category: 'breakfast',
    categoryName: 'Breakfast',
    group: 'food',
    price: 7.45,
    calories: '320 cal',
    description: 'Artisan fermented sourdough toasted with cold-pressed olive oil, topped with fresh crushed Hass avocado, micro-radish greens, and chili crunch.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&auto=format&fit=crop&q=80',
    isFeatured: true,
    tag: 'House Special',
    defaultTemp: 'warmed'
  },
  {
    id: 'bacon-gouda-sandwich',
    name: 'Bacon, Gouda & Egg Sandwich',
    category: 'breakfast',
    categoryName: 'Breakfast',
    group: 'food',
    price: 5.95,
    calories: '370 cal',
    description: 'Sizzling applewood smoked bacon, baked parmesan frittata egg, and aged Dutch Gouda cheese served on an artisan toasted ciabatta roll.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=80',
    isFeatured: true,
    tag: 'Hot Breakfast',
    defaultTemp: 'warmed'
  },
  {
    id: 'spinach-feta-wrap',
    name: 'Spinach, Feta & Egg White Wrap',
    category: 'breakfast',
    categoryName: 'Breakfast',
    group: 'food',
    price: 5.65,
    calories: '290 cal',
    description: 'Cage-free fluffy egg whites, sautéed spinach, Mediterranean feta crumbles and sun-dried tomato spread wrapped in whole-wheat lavash.',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&auto=format&fit=crop&q=80',
    isFeatured: false,
    tag: 'High Protein',
    defaultTemp: 'warmed'
  }
];

// --- Categories Metadata ---
const CATEGORIES = [
  { id: 'all', name: 'All Products', group: 'all', icon: 'grid_view' },
  { id: 'hot-coffees', name: 'Hot Coffees', group: 'drinks', icon: 'coffee' },
  { id: 'cold-coffees', name: 'Cold Coffees', group: 'drinks', icon: 'ac_unit' },
  { id: 'signature-lattes', name: 'Signature Lattes', group: 'drinks', icon: 'auto_awesome' },
  { id: 'matcha-tea', name: 'Matcha & Tea', group: 'drinks', icon: 'eco' },
  { id: 'artisan-bakery', name: 'Artisan Bakery', group: 'food', icon: 'bakery_dining' },
  { id: 'breakfast', name: 'Breakfast', group: 'food', icon: 'lunch_dining' }
];

// --- Customization Options Configuration ---
const CUSTOMIZATION_CONFIG = {
  sizes: [
    { id: 'small', name: 'Small', oz: '8 fl oz', iconSize: 'text-[18px]', priceDiff: -0.40 },
    { id: 'medium', name: 'Medium', oz: '12 fl oz', iconSize: 'text-[22px]', priceDiff: -0.20 },
    { id: 'large', name: 'Large', oz: '16 fl oz', iconSize: 'text-[26px]', priceDiff: 0.00 },
    { id: 'extra-large', name: 'Extra Large', oz: '24 fl oz', iconSize: 'text-[30px]', priceDiff: 0.70 }
  ],
  temperatures: [
    { id: 'hot', name: 'Hot', icon: 'local_fire_department' },
    { id: 'iced', name: 'Iced', icon: 'ac_unit' }
  ],
  milks: [
    { id: 'whole', name: 'Whole Milk', price: 0.00, tag: 'Standard' },
    { id: 'oat', name: 'Oat Milk', price: 0.70, tag: 'Plant-Based' },
    { id: 'almond', name: 'Almond Milk', price: 0.70, tag: 'Nutty' },
    { id: 'soy', name: 'Soy Milk', price: 0.60, tag: 'Protein' },
    { id: 'skim', name: 'Nonfat Milk', price: 0.00, tag: 'Light' }
  ],
  sweetnessLevels: [
    { id: 'none', name: 'Unsweetened', pumps: '0 pumps', price: 0.00 },
    { id: 'half', name: 'Half Sweet', pumps: '2 pumps', price: 0.00 },
    { id: 'regular', name: 'Regular Sweet', pumps: '4 pumps', price: 0.00 },
    { id: 'extra', name: 'Extra Sweet', pumps: '6 pumps', price: 0.50 }
  ],
  syrups: [
    { id: 'none', name: 'No Flavor Syrup', price: 0.00 },
    { id: 'vanilla', name: 'Madagascar Vanilla', price: 0.60 },
    { id: 'caramel', name: 'Buttery Caramel', price: 0.60 },
    { id: 'hazelnut', name: 'Roasted Hazelnut', price: 0.60 },
    { id: 'brown-sugar', name: 'Brown Sugar Cinnamon', price: 0.60 }
  ],
  espressoRoasts: [
    { id: 'signature', name: 'Signature Roast', desc: 'Bold & Roasty' },
    { id: 'blonde', name: 'Blonde Roast', desc: 'Smooth & Sweet' },
    { id: 'decaf', name: 'Decaf Roast', desc: 'Caffeine-Free' }
  ],
  espressoShots: [
    { id: '1', name: 'Single Shot', priceDiff: -0.40 },
    { id: '2', name: 'Double Shot (Standard)', priceDiff: 0.00 },
    { id: '3', name: 'Triple Shot (+1 shot)', priceDiff: 0.90 }
  ],
  // Food warming
  foodWarmings: [
    { id: 'warmed', name: 'Warmed Up', icon: 'microwave' },
    { id: 'not-warmed', name: 'Served Room Temp', icon: 'dry' }
  ],
  foodSpreads: [
    { id: 'none', name: 'No Spread', price: 0.00 },
    { id: 'butter', name: 'Cultured Butter', price: 0.35 },
    { id: 'cream-cheese', name: 'Cream Cheese', price: 0.75 },
    { id: 'strawberry-jam', name: 'Organic Berry Jam', price: 0.60 }
  ]
};

// --- Application State ---
const state = {
  activeCategory: 'all',       // 'all', 'hot-coffees', 'cold-coffees', etc.
  activeFilterTab: 'all',      // 'all', 'featured', 'favorites'
  searchQuery: '',
  favorites: new Set(),
  cart: [],
  customizingItem: null,
  customization: {
    size: 'large',
    temp: 'iced',
    milk: 'whole',
    sweetness: 'regular',
    syrup: 'none',
    roast: 'signature',
    shots: '2',
    warming: 'warmed',
    spread: 'none',
    quantity: 1
  }
};

// --- LocalStorage Keys ---
const STORAGE_KEYS = {
  FAVORITES: 'gupshup_favorites_v1',
  CART: 'gupshup_cart_v1'
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  loadStoredData();
  initEventListeners();
  renderCategorySidebar();
  renderMobileCategoryPills();
  renderMenu();
  updateCartBadge();
  updateFavoritesBadge();
});

// --- Storage Management ---
function loadStoredData() {
  try {
    const savedFavs = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    if (savedFavs) {
      const parsed = JSON.parse(savedFavs);
      state.favorites = new Set(parsed);
    } else {
      // Default initial favorites
      state.favorites = new Set(['pistachio-cold-brew', 'iced-caramel-macchiato', 'ceremonial-iced-matcha', 'butter-croissant']);
    }

    const savedCart = localStorage.getItem(STORAGE_KEYS.CART);
    if (savedCart) {
      state.cart = JSON.parse(savedCart);
    }
  } catch (err) {
    console.error('Error loading stored state:', err);
  }
}

function saveFavorites() {
  try {
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(Array.from(state.favorites)));
  } catch (err) {
    console.error('Error saving favorites:', err);
  }
}

function saveCart() {
  try {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(state.cart));
  } catch (err) {
    console.error('Error saving cart:', err);
  }
}

// --- DOM References ---
const dom = {
  menuGrid: document.getElementById('menuGrid'),
  menuSectionTitle: document.getElementById('menuSectionTitle'),
  menuSectionDesc: document.getElementById('menuSectionDesc'),
  menuItemCount: document.getElementById('menuItemCount'),
  searchInput: document.getElementById('searchInput'),
  searchClearBtn: document.getElementById('searchClearBtn'),
  tabAll: document.getElementById('tabAll'),
  tabFeatured: document.getElementById('tabFeatured'),
  tabFavorites: document.getElementById('tabFavorites'),
  favoritesTabBadge: document.getElementById('favoritesTabBadge'),
  cartBadge: document.getElementById('cartBadge'),
  cartHeaderBtn: document.getElementById('cartHeaderBtn'),
  categoryNavDesktop: document.getElementById('categoryNavDesktop'),
  categoryNavMobile: document.getElementById('categoryNavMobile'),
  
  // Customization Drawer
  customizationDrawer: document.getElementById('customizationDrawer'),
  drawerScrim: document.getElementById('drawerScrim'),
  drawerCloseBtn: document.getElementById('drawerCloseBtn'),
  drawerImage: document.getElementById('drawerImage'),
  drawerTag: document.getElementById('drawerTag'),
  drawerTitle: document.getElementById('drawerTitle'),
  drawerDesc: document.getElementById('drawerDesc'),
  drawerBasePrice: document.getElementById('drawerBasePrice'),
  drawerDynamicBtn: document.getElementById('drawerDynamicBtn'),
  drawerQuantityVal: document.getElementById('drawerQuantityVal'),
  drawerQtyMinus: document.getElementById('drawerQtyMinus'),
  drawerQtyPlus: document.getElementById('drawerQtyPlus'),
  drinkOptionsContainer: document.getElementById('drinkOptionsContainer'),
  foodOptionsContainer: document.getElementById('foodOptionsContainer'),

  // Cart Drawer
  cartDrawer: document.getElementById('cartDrawer'),
  cartScrim: document.getElementById('cartScrim'),
  cartCloseBtn: document.getElementById('cartCloseBtn'),
  cartItemsList: document.getElementById('cartItemsList'),
  cartEmptyState: document.getElementById('cartEmptyState'),
  cartFooter: document.getElementById('cartFooter'),
  cartSubtotal: document.getElementById('cartSubtotal'),
  cartTax: document.getElementById('cartTax'),
  cartTotal: document.getElementById('cartTotal'),
  checkoutBtn: document.getElementById('checkoutBtn'),
  clearCartBtn: document.getElementById('clearCartBtn'),

  // Checkout Modal
  checkoutSuccessModal: document.getElementById('checkoutSuccessModal'),
  checkoutSuccessClose: document.getElementById('checkoutSuccessClose'),
  orderNumberSpan: document.getElementById('orderNumberSpan'),

  // Info Modals
  storyModal: document.getElementById('storyModal'),
  storyModalClose: document.getElementById('storyModalClose'),
  locationsModal: document.getElementById('locationsModal'),
  locationsModalClose: document.getElementById('locationsModalClose'),

  // Mobile Menu
  mobileMenuBtn: document.getElementById('mobileMenuBtn'),
  mobileNavDropdown: document.getElementById('mobileNavDropdown'),

  // Toast Container
  toastContainer: document.getElementById('toastContainer')
};

// --- Event Listeners Initialization ---
function initEventListeners() {
  // Live Search
  if (dom.searchInput) {
    dom.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      if (dom.searchClearBtn) {
        dom.searchClearBtn.classList.toggle('hidden', state.searchQuery.length === 0);
      }
      renderMenu();
    });
  }

  if (dom.searchClearBtn) {
    dom.searchClearBtn.addEventListener('click', () => {
      dom.searchInput.value = '';
      state.searchQuery = '';
      dom.searchClearBtn.classList.add('hidden');
      dom.searchInput.focus();
      renderMenu();
    });
  }

  // Filter Tabs
  if (dom.tabAll) {
    dom.tabAll.addEventListener('click', () => setFilterTab('all'));
  }
  if (dom.tabFeatured) {
    dom.tabFeatured.addEventListener('click', () => setFilterTab('featured'));
  }
  if (dom.tabFavorites) {
    dom.tabFavorites.addEventListener('click', () => setFilterTab('favorites'));
  }

  // Cart Buttons
  if (dom.cartHeaderBtn) {
    dom.cartHeaderBtn.addEventListener('click', () => openCartDrawer());
  }
  if (dom.cartCloseBtn) {
    dom.cartCloseBtn.addEventListener('click', () => closeCartDrawer());
  }
  if (dom.cartScrim) {
    dom.cartScrim.addEventListener('click', () => closeCartDrawer());
  }
  if (dom.clearCartBtn) {
    dom.clearCartBtn.addEventListener('click', () => {
      state.cart = [];
      saveCart();
      renderCart();
      updateCartBadge();
      showToast('Cart cleared', 'info');
    });
  }

  // Checkout
  if (dom.checkoutBtn) {
    dom.checkoutBtn.addEventListener('click', handleCheckout);
  }
  if (dom.checkoutSuccessClose) {
    dom.checkoutSuccessClose.addEventListener('click', () => {
      dom.checkoutSuccessModal.classList.add('hidden');
    });
  }

  // Customization Drawer Close
  if (dom.drawerCloseBtn) {
    dom.drawerCloseBtn.addEventListener('click', () => closeCustomizationDrawer());
  }
  if (dom.drawerScrim) {
    dom.drawerScrim.addEventListener('click', () => closeCustomizationDrawer());
  }

  // Customization Drawer Quantity Controls
  if (dom.drawerQtyMinus) {
    dom.drawerQtyMinus.addEventListener('click', () => {
      if (state.customization.quantity > 1) {
        state.customization.quantity--;
        dom.drawerQuantityVal.textContent = state.customization.quantity;
        updateDrawerPriceButton();
      }
    });
  }
  if (dom.drawerQtyPlus) {
    dom.drawerQtyPlus.addEventListener('click', () => {
      if (state.customization.quantity < 20) {
        state.customization.quantity++;
        dom.drawerQuantityVal.textContent = state.customization.quantity;
        updateDrawerPriceButton();
      }
    });
  }

  // Add Customized Item to Cart
  if (dom.drawerDynamicBtn) {
    dom.drawerDynamicBtn.addEventListener('click', addCustomizedItemToCart);
  }

  // Mobile menu dropdown
  if (dom.mobileMenuBtn && dom.mobileNavDropdown) {
    dom.mobileMenuBtn.addEventListener('click', () => {
      dom.mobileNavDropdown.classList.toggle('hidden');
    });
  }

  // Info Modals (Our Story, Locations)
  document.querySelectorAll('[data-open-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-open-modal');
      const targetModal = document.getElementById(modalId);
      if (targetModal) {
        targetModal.classList.remove('hidden');
      }
    });
  });

  if (dom.storyModalClose && dom.storyModal) {
    dom.storyModalClose.addEventListener('click', () => dom.storyModal.classList.add('hidden'));
    dom.storyModal.addEventListener('click', (e) => {
      if (e.target === dom.storyModal) dom.storyModal.classList.add('hidden');
    });
  }

  if (dom.locationsModalClose && dom.locationsModal) {
    dom.locationsModalClose.addEventListener('click', () => dom.locationsModal.classList.add('hidden'));
    dom.locationsModal.addEventListener('click', (e) => {
      if (e.target === dom.locationsModal) dom.locationsModal.classList.add('hidden');
    });
  }

  // ESC key closes any open drawer or modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCustomizationDrawer();
      closeCartDrawer();
      if (dom.checkoutSuccessModal) dom.checkoutSuccessModal.classList.add('hidden');
      if (dom.storyModal) dom.storyModal.classList.add('hidden');
      if (dom.locationsModal) dom.locationsModal.classList.add('hidden');
    }
  });
}

// --- Render Sidebar & Navigation ---
function renderCategorySidebar() {
  if (!dom.categoryNavDesktop) return;

  const drinks = CATEGORIES.filter(c => c.group === 'drinks');
  const food = CATEGORIES.filter(c => c.group === 'food');

  const createListItems = (list) => {
    return list.map(cat => {
      const count = MENU_DATA.filter(item => item.category === cat.id).length;
      const isActive = state.activeCategory === cat.id;

      return `
        <li>
          <button 
            type="button" 
            onclick="selectCategory('${cat.id}')"
            class="w-full flex items-center justify-between px-3.5 py-2.5 rounded-full text-sm font-medium transition-all group ${
              isActive 
                ? 'bg-[#1E3932] text-white shadow-sm font-semibold' 
                : 'text-[#1F1F1F] hover:bg-[#F9F6F0] hover:text-[#1E3932]'
            }">
            <span class="flex items-center gap-2.5">
              <span class="material-symbols-outlined text-[19px] ${isActive ? 'text-white' : 'text-[#6B7280] group-hover:text-[#1E3932]'}">${cat.icon}</span>
              <span>${cat.name}</span>
            </span>
            <span class="text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-[#F9F6F0] text-[#6B7280] group-hover:bg-[#1E3932]/10'} font-semibold">${count}</span>
          </button>
        </li>
      `;
    }).join('');
  };

  const isAllActive = state.activeCategory === 'all';
  const totalCount = MENU_DATA.length;

  dom.categoryNavDesktop.innerHTML = `
    <!-- All Products Item -->
    <div class="mb-4">
      <button 
        type="button" 
        onclick="selectCategory('all')"
        class="w-full flex items-center justify-between px-3.5 py-2.5 rounded-full text-sm font-medium transition-all group ${
          isAllActive 
            ? 'bg-[#1E3932] text-white shadow-sm font-semibold' 
            : 'text-[#1F1F1F] hover:bg-[#F9F6F0] hover:text-[#1E3932]'
        }">
        <span class="flex items-center gap-2.5">
          <span class="material-symbols-outlined text-[19px] ${isAllActive ? 'text-white' : 'text-[#6B7280] group-hover:text-[#1E3932]'}">menu_book</span>
          <span>Full Menu (All Items)</span>
        </span>
        <span class="text-xs px-2 py-0.5 rounded-full ${isAllActive ? 'bg-white/20 text-white' : 'bg-[#F9F6F0] text-[#6B7280]'} font-semibold">${totalCount}</span>
      </button>
    </div>

    <!-- Drinks Section -->
    <div class="space-y-1.5 pt-2">
      <div class="flex items-center justify-between px-3 pb-1 border-b border-gray-100">
        <h3 class="text-xs font-bold uppercase tracking-wider text-[#1E3932]">Handcrafted Drinks</h3>
        <span class="text-[11px] text-[#6B7280] font-medium">${MENU_DATA.filter(i => i.group === 'drinks').length} Items</span>
      </div>
      <ul class="space-y-1 pt-1">
        ${createListItems(drinks)}
      </ul>
    </div>

    <!-- Food Section -->
    <div class="space-y-1.5 pt-5">
      <div class="flex items-center justify-between px-3 pb-1 border-b border-gray-100">
        <h3 class="text-xs font-bold uppercase tracking-wider text-[#1E3932]">Bakery & Warm Food</h3>
        <span class="text-[11px] text-[#6B7280] font-medium">${MENU_DATA.filter(i => i.group === 'food').length} Items</span>
      </div>
      <ul class="space-y-1 pt-1">
        ${createListItems(food)}
      </ul>
    </div>
  `;
}

function renderMobileCategoryPills() {
  if (!dom.categoryNavMobile) return;

  dom.categoryNavMobile.innerHTML = CATEGORIES.map(cat => {
    const isActive = state.activeCategory === cat.id;
    return `
      <button 
        type="button" 
        onclick="selectCategory('${cat.id}')"
        class="whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm ${
          isActive 
            ? 'bg-[#1E3932] text-white shadow-md' 
            : 'bg-white text-[#1F1F1F] border border-gray-200 hover:border-[#1E3932]'
        }">
        <span class="material-symbols-outlined text-[16px]">${cat.icon}</span>
        <span>${cat.name}</span>
      </button>
    `;
  }).join('');
}

// --- Category & Filter Tab Actions ---
window.selectCategory = function(catId) {
  state.activeCategory = catId;
  // If user picks a category, reset filter tab to 'all' so they see the category items directly
  if (state.activeFilterTab !== 'all') {
    state.activeFilterTab = 'all';
    updateFilterTabUI();
  }
  renderCategorySidebar();
  renderMobileCategoryPills();
  renderMenu();

  // On mobile, scroll smoothly to the menu container
  if (window.innerWidth < 1024) {
    const mainSection = document.getElementById('menuMainContainer');
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

function setFilterTab(tab) {
  state.activeFilterTab = tab;
  updateFilterTabUI();
  renderMenu();
}

function updateFilterTabUI() {
  const tabs = [
    { btn: dom.tabAll, id: 'all' },
    { btn: dom.tabFeatured, id: 'featured' },
    { btn: dom.tabFavorites, id: 'favorites' }
  ];

  tabs.forEach(({ btn, id }) => {
    if (!btn) return;
    const isActive = state.activeFilterTab === id;
    const underline = btn.querySelector('.tab-underline');

    if (isActive) {
      btn.classList.add('text-[#1E3932]', 'font-bold');
      btn.classList.remove('text-[#6B7280]', 'font-medium');
      if (underline) underline.classList.remove('hidden');
    } else {
      btn.classList.remove('text-[#1E3932]', 'font-bold');
      btn.classList.add('text-[#6B7280]', 'font-medium');
      if (underline) underline.classList.add('hidden');
    }
  });
}

function updateFavoritesBadge() {
  if (dom.favoritesTabBadge) {
    dom.favoritesTabBadge.textContent = state.favorites.size;
    dom.favoritesTabBadge.classList.toggle('hidden', state.favorites.size === 0);
  }
}

// --- Menu Rendering ---
function renderMenu() {
  if (!dom.menuGrid) return;

  // Filter items based on activeCategory, activeFilterTab, and searchQuery
  let filtered = [...MENU_DATA];

  // 1. Search Query filter
  if (state.searchQuery) {
    filtered = filtered.filter(item => 
      item.name.toLowerCase().includes(state.searchQuery) ||
      item.description.toLowerCase().includes(state.searchQuery) ||
      item.categoryName.toLowerCase().includes(state.searchQuery) ||
      (item.tag && item.tag.toLowerCase().includes(state.searchQuery))
    );
  }

  // 2. Filter Tab filter
  if (state.activeFilterTab === 'featured') {
    filtered = filtered.filter(item => item.isFeatured);
  } else if (state.activeFilterTab === 'favorites') {
    filtered = filtered.filter(item => state.favorites.has(item.id));
  }

  // 3. Category filter (if activeCategory is not 'all')
  if (state.activeCategory !== 'all') {
    filtered = filtered.filter(item => item.category === state.activeCategory);
  }

  // Update Section Header Info
  updateSectionHeader(filtered.length);

  // If no items match
  if (filtered.length === 0) {
    renderEmptyMenu();
    return;
  }

  // Render cards
  dom.menuGrid.innerHTML = filtered.map(item => createProductCardHtml(item)).join('');
}

function updateSectionHeader(count) {
  if (dom.menuItemCount) {
    dom.menuItemCount.textContent = `${count} ${count === 1 ? 'item' : 'items'}`;
  }

  let title = 'Our Menu';
  let desc = 'Explore freshly pulled espresso, velvety cold brews, ceremonial grade matchas, and artisan pastries baked daily.';

  if (state.searchQuery) {
    title = `Results for "${state.searchQuery}"`;
    desc = `Showing matches across all categories.`;
  } else if (state.activeFilterTab === 'featured') {
    title = 'Featured Crafts & House Specials';
    desc = 'Handpicked by our master roasters and baristas for exceptional flavor notes.';
  } else if (state.activeFilterTab === 'favorites') {
    title = 'Your Saved Favorites';
    desc = 'Your personally curated drinks and food items ready for fast one-tap ordering.';
  } else if (state.activeCategory !== 'all') {
    const cat = CATEGORIES.find(c => c.id === state.activeCategory);
    if (cat) {
      title = cat.name;
      if (cat.id === 'hot-coffees') desc = 'Poured with signature espresso roasts and silky microfoam micro-bubbles.';
      else if (cat.id === 'cold-coffees') desc = 'Slow-steeped over 20 hours for ultra-smooth body and low natural acidity.';
      else if (cat.id === 'signature-lattes') desc = 'Delicately crafted lattes layered with house-made Madagascar syrups and creamy milk.';
      else if (cat.id === 'matcha-tea') desc = 'Vibrant shade-grown botanical teas with rich antioxidants and mindful focus.';
      else if (cat.id === 'artisan-bakery') desc = 'Crafted using French pastry laminating techniques and pure cultured butter.';
      else if (cat.id === 'breakfast') desc = 'Hot artisan sandwiches, whole-wheat wraps, and wholesome fresh sourdough toasts.';
    }
  }

  if (dom.menuSectionTitle) dom.menuSectionTitle.textContent = title;
  if (dom.menuSectionDesc) dom.menuSectionDesc.textContent = desc;
}

function createProductCardHtml(item) {
  const isFav = state.favorites.has(item.id);
  const formattedPrice = `$${item.price.toFixed(2)}`;

  return `
    <article 
      class="group relative flex flex-col items-center p-5 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 card-hover-effect transition-all duration-300"
      data-item-id="${item.id}">
      
      <!-- Top Badges & Favorite Heart Toggle -->
      <div class="w-full flex items-center justify-between mb-2 z-10">
        ${item.tag ? `
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
            item.tag === 'Seasonal' || item.tag === 'Customer Favorite' 
              ? 'bg-[#1E3932] text-white' 
              : 'bg-[#2F8F2F]/10 text-[#2F8F2F]'
          }">
            ${item.tag}
          </span>
        ` : '<span></span>'}

        <!-- Favorite Heart Button -->
        <button 
          type="button"
          onclick="toggleFavorite(event, '${item.id}')"
          class="p-2 rounded-full transition-transform active:scale-90 hover:bg-[#F9F6F0] group-hover:opacity-100 focus:outline-none"
          title="${isFav ? 'Remove from favorites' : 'Add to favorites'}"
          aria-label="Save to favorites">
          <span class="material-symbols-outlined text-[22px] transition-colors ${
            isFav 
              ? 'text-red-500 fill-current animate-heart-pop' 
              : 'text-gray-400 hover:text-red-400'
          }" style="font-variation-settings: 'FILL' ${isFav ? 1 : 0};">
            favorite
          </span>
        </button>
      </div>

      <!-- High-Resolution Circular Product Thumbnail inside #F9F6F0 Frame -->
      <div 
        onclick="openCustomizationDrawer('${item.id}')"
        class="cursor-pointer relative w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-[#F9F6F0] p-2.5 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105 shadow-inner">
        <img 
          src="${item.image}" 
          alt="${item.name}"
          loading="lazy"
          class="w-full h-full rounded-full object-cover shadow-sm transition-transform duration-300"
        />
        <!-- Quick View Overlay Hint -->
        <div class="absolute inset-0 rounded-full bg-[#1E3932]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span class="px-3 py-1 rounded-full bg-[#1E3932] text-white text-xs font-semibold shadow-md flex items-center gap-1">
            <span class="material-symbols-outlined text-[14px]">tune</span> Customize
          </span>
        </div>
      </div>

      <!-- Bold Centered Product Name, Price, and Calorie Count -->
      <div class="w-full text-center space-y-1 cursor-pointer" onclick="openCustomizationDrawer('${item.id}')">
        <h3 class="text-base sm:text-lg font-bold text-[#1F1F1F] group-hover:text-[#1E3932] transition-colors leading-snug line-clamp-1">
          ${item.name}
        </h3>
        <p class="text-xs sm:text-sm text-[#6B7280] font-medium">
          <span class="font-bold text-[#1F1F1F]">${formattedPrice}</span> 
          <span class="text-gray-300 mx-1">•</span> 
          <span>${item.calories}</span>
        </p>
        <p class="text-xs text-[#6B7280] line-clamp-2 px-1 pt-1 opacity-80 leading-relaxed hidden sm:block">
          ${item.description}
        </p>
      </div>

      <!-- Add / Customize Action Button -->
      <div class="w-full mt-4 pt-1">
        <button 
          type="button"
          onclick="openCustomizationDrawer('${item.id}')"
          class="w-full py-2.5 px-4 rounded-full bg-[#F9F6F0] hover:bg-[#1E3932] text-[#1E3932] hover:text-white font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm hover:shadow">
          <span class="material-symbols-outlined text-[18px]">add_circle</span>
          <span>Order • ${formattedPrice}</span>
        </button>
      </div>
    </article>
  `;
}

function renderEmptyMenu() {
  dom.menuGrid.innerHTML = `
    <div class="col-span-full py-16 px-4 text-center bg-white rounded-3xl border border-gray-100 p-8">
      <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-[#F9F6F0] flex items-center justify-center text-[#1E3932]">
        <span class="material-symbols-outlined text-4xl">local_cafe</span>
      </div>
      <h3 class="text-lg font-bold text-[#1F1F1F] mb-1">No items found</h3>
      <p class="text-sm text-[#6B7280] max-w-md mx-auto mb-6">
        ${state.activeFilterTab === 'favorites' 
          ? 'You haven\'t saved any favorite items yet. Click the heart icon on any drink or pastry to build your quick favorites list!' 
          : 'We couldn\'t find any menu item matching your current search or category filter.'}
      </p>
      <button 
        type="button" 
        onclick="resetFilters()"
        class="px-5 py-2.5 rounded-full bg-[#1E3932] hover:bg-[#142722] text-white text-sm font-semibold transition-all shadow">
        Show All Menu Items
      </button>
    </div>
  `;
}

window.resetFilters = function() {
  state.activeCategory = 'all';
  state.activeFilterTab = 'all';
  state.searchQuery = '';
  if (dom.searchInput) dom.searchInput.value = '';
  if (dom.searchClearBtn) dom.searchClearBtn.classList.add('hidden');
  updateFilterTabUI();
  renderCategorySidebar();
  renderMobileCategoryPills();
  renderMenu();
};

// --- Favorites Handler ---
window.toggleFavorite = function(e, itemId) {
  if (e) e.stopPropagation();

  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;

  if (state.favorites.has(itemId)) {
    state.favorites.delete(itemId);
    showToast(`Removed "${item.name}" from favorites`, 'info');
  } else {
    state.favorites.add(itemId);
    showToast(`Saved "${item.name}" to your favorites!`, 'success');
  }

  saveFavorites();
  updateFavoritesBadge();
  renderMenu();
};

// --- Customization Drawer (Slide-Over) ---
window.openCustomizationDrawer = function(itemId) {
  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;

  state.customizingItem = item;

  // Reset customizer state for this item
  state.customization = {
    size: 'large',
    temp: item.defaultTemp || 'hot',
    milk: 'whole',
    sweetness: 'regular',
    syrup: 'none',
    roast: 'signature',
    shots: '2',
    warming: 'warmed',
    spread: 'none',
    quantity: 1
  };

  if (dom.drawerQuantityVal) dom.drawerQuantityVal.textContent = '1';

  // Populate Drawer Header
  if (dom.drawerImage) dom.drawerImage.src = item.image;
  if (dom.drawerTitle) dom.drawerTitle.textContent = item.name;
  if (dom.drawerDesc) dom.drawerDesc.textContent = item.description;
  if (dom.drawerBasePrice) dom.drawerBasePrice.textContent = `Base: $${item.price.toFixed(2)} • ${item.calories}`;
  if (dom.drawerTag) {
    dom.drawerTag.textContent = item.tag || item.categoryName;
  }

  // Toggle options depending on drink vs food
  const isDrink = item.group === 'drinks';
  if (dom.drinkOptionsContainer) dom.drinkOptionsContainer.classList.toggle('hidden', !isDrink);
  if (dom.foodOptionsContainer) dom.foodOptionsContainer.classList.toggle('hidden', isDrink);

  if (isDrink) {
    renderDrinkCustomizationControls(item);
  } else {
    renderFoodCustomizationControls(item);
  }

  updateDrawerPriceButton();

  // Slide Open Drawer
  if (dom.customizationDrawer && dom.drawerScrim) {
    dom.customizationDrawer.classList.remove('translate-x-full');
    dom.customizationDrawer.classList.add('translate-x-0');
    dom.drawerScrim.classList.remove('opacity-0', 'pointer-events-none');
    dom.drawerScrim.classList.add('opacity-100', 'pointer-events-auto');
    document.body.classList.add('overflow-hidden');
  }
};

window.closeCustomizationDrawer = function() {
  if (dom.customizationDrawer && dom.drawerScrim) {
    dom.customizationDrawer.classList.remove('translate-x-0');
    dom.customizationDrawer.classList.add('translate-x-full');
    dom.drawerScrim.classList.remove('opacity-100', 'pointer-events-auto');
    dom.drawerScrim.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('overflow-hidden');
  }
  state.customizingItem = null;
};

// --- Customization Controls Renderers ---
function renderDrinkCustomizationControls(item) {
  if (!dom.drinkOptionsContainer) return;

  const selectedSize = CUSTOMIZATION_CONFIG.sizes.find(s => s.id === state.customization.size) || CUSTOMIZATION_CONFIG.sizes[2];
  const selectedMilk = CUSTOMIZATION_CONFIG.milks.find(m => m.id === state.customization.milk) || CUSTOMIZATION_CONFIG.milks[0];

  dom.drinkOptionsContainer.innerHTML = `
    <!-- 1. Temperature Toggle -->
    <div class="space-y-2 pb-4 border-b border-gray-100">
      <div class="flex items-center justify-between">
        <label class="text-xs font-bold text-[#1E3932] uppercase tracking-wider">Drink Temperature</label>
        <span class="text-xs text-[#2F8F2F] font-semibold capitalize" id="labelSelectedTemp">${state.customization.temp}</span>
      </div>
      <div class="grid grid-cols-2 p-1 bg-[#F9F6F0] rounded-full gap-1">
        ${CUSTOMIZATION_CONFIG.temperatures.map(t => {
          const isSelected = state.customization.temp === t.id;
          return `
            <button 
              type="button" 
              onclick="setCustomizationOption('temp', '${t.id}')"
              class="py-2 rounded-full text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                isSelected 
                  ? 'bg-[#1E3932] text-white shadow-sm' 
                  : 'text-[#1F1F1F] hover:text-[#1E3932]'
              }">
              <span class="material-symbols-outlined text-[17px]">${t.icon}</span>
              <span>${t.name}</span>
            </button>
          `;
        }).join('')}
      </div>
    </div>

    <!-- 2. Cup Size Visual Selector -->
    <div class="space-y-2.5 pb-5 border-b border-gray-100">
      <div class="flex items-center justify-between">
        <label class="text-xs font-bold text-[#1E3932] uppercase tracking-wider">Cup Size</label>
        <span class="text-xs text-[#2F8F2F] font-semibold" id="labelSelectedSize">${selectedSize.name} ${selectedSize.oz}</span>
      </div>
      <div class="grid grid-cols-4 gap-2">
        ${CUSTOMIZATION_CONFIG.sizes.map(size => {
          const isSelected = state.customization.size === size.id;
          const diffText = size.priceDiff === 0 ? 'Standard' : (size.priceDiff > 0 ? `+$${size.priceDiff.toFixed(2)}` : `-$${Math.abs(size.priceDiff).toFixed(2)}`);

          return `
            <button 
              type="button" 
              onclick="setCustomizationOption('size', '${size.id}')"
              class="p-2.5 rounded-2xl flex flex-col items-center justify-center text-center transition-all border ${
                isSelected 
                  ? 'bg-[#1E3932] text-white border-[#1E3932] shadow-sm' 
                  : 'bg-[#F9F6F0] text-[#1F1F1F] border-transparent hover:border-gray-300'
              }">
              <div class="h-10 flex items-end justify-center mb-1">
                <span class="material-symbols-outlined ${size.iconSize || 'text-[24px]'} ${isSelected ? 'text-white' : 'text-[#1E3932]'}">local_cafe</span>
              </div>
              <span class="text-xs font-bold leading-tight">${size.name}</span>
              <span class="text-[10px] opacity-80">${size.oz}</span>
              <span class="text-[9px] mt-1 font-semibold ${isSelected ? 'text-green-200' : 'text-[#6B7280]'}">${diffText}</span>
            </button>
          `;
        }).join('')}
      </div>
    </div>

    <!-- 3. Choice of Milk -->
    <div class="space-y-2.5 pb-5 border-b border-gray-100">
      <div class="flex items-center justify-between">
        <label class="text-xs font-bold text-[#1E3932] uppercase tracking-wider">Choice of Milk</label>
        <span class="text-xs text-[#2F8F2F] font-semibold" id="labelSelectedMilk">${selectedMilk.name}</span>
      </div>
      <div class="grid grid-cols-1 gap-1.5">
        ${CUSTOMIZATION_CONFIG.milks.map(milk => {
          const isSelected = state.customization.milk === milk.id;
          return `
            <button 
              type="button" 
              onclick="setCustomizationOption('milk', '${milk.id}')"
              class="w-full px-3.5 py-2.5 rounded-xl flex items-center justify-between text-xs font-medium border transition-all ${
                isSelected 
                  ? 'bg-[#1E3932] text-white border-[#1E3932] font-semibold' 
                  : 'bg-[#F9F6F0] text-[#1F1F1F] border-transparent hover:border-gray-200'
              }">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-[16px]">${isSelected ? 'check_circle' : 'radio_button_unchecked'}</span>
                <span>${milk.name}</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded ${isSelected ? 'bg-white/20 text-white' : 'bg-white text-[#6B7280]'} font-normal">${milk.tag}</span>
              </div>
              <span class="font-bold">${milk.price > 0 ? `+$${milk.price.toFixed(2)}` : 'Free'}</span>
            </button>
          `;
        }).join('')}
      </div>
    </div>

    <!-- 4. Sweetness & Syrup -->
    <div class="space-y-2.5 pb-5 border-b border-gray-100">
      <label class="text-xs font-bold text-[#1E3932] uppercase tracking-wider block">Sweetness Level</label>
      <div class="grid grid-cols-2 gap-1.5">
        ${CUSTOMIZATION_CONFIG.sweetnessLevels.map(lvl => {
          const isSelected = state.customization.sweetness === lvl.id;
          return `
            <button 
              type="button" 
              onclick="setCustomizationOption('sweetness', '${lvl.id}')"
              class="px-3 py-2 rounded-xl text-left border text-xs transition-all ${
                isSelected 
                  ? 'bg-[#1E3932] text-white border-[#1E3932] font-semibold' 
                  : 'bg-[#F9F6F0] text-[#1F1F1F] border-transparent hover:border-gray-200'
              }">
              <div class="font-bold">${lvl.name}</div>
              <div class="text-[10px] opacity-80">${lvl.pumps}</div>
            </button>
          `;
        }).join('')}
      </div>

      <div class="pt-2">
        <label class="text-xs font-bold text-[#1E3932] uppercase tracking-wider block mb-1.5">Flavored Syrup</label>
        <select 
          onchange="setCustomizationOption('syrup', this.value)"
          class="w-full px-3.5 py-2.5 rounded-xl bg-[#F9F6F0] border border-gray-200 text-xs font-medium text-[#1F1F1F] focus:outline-none focus:border-[#1E3932]">
          ${CUSTOMIZATION_CONFIG.syrups.map(s => `
            <option value="${s.id}" ${state.customization.syrup === s.id ? 'selected' : ''}>
              ${s.name} ${s.price > 0 ? `(+$${s.price.toFixed(2)})` : ''}
            </option>
          `).join('')}
        </select>
      </div>
    </div>

    <!-- 5. Espresso Roast & Shots -->
    <div class="space-y-2.5 pb-2">
      <label class="text-xs font-bold text-[#1E3932] uppercase tracking-wider block">Espresso Roast & Shots</label>
      <div class="grid grid-cols-3 gap-1.5">
        ${CUSTOMIZATION_CONFIG.espressoRoasts.map(r => {
          const isSelected = state.customization.roast === r.id;
          return `
            <button 
              type="button" 
              onclick="setCustomizationOption('roast', '${r.id}')"
              class="p-2 rounded-xl text-center border text-xs transition-all ${
                isSelected 
                  ? 'bg-[#1E3932] text-white border-[#1E3932] font-semibold' 
                  : 'bg-[#F9F6F0] text-[#1F1F1F] border-transparent hover:border-gray-200'
              }">
              <div class="font-bold text-[11px] leading-tight">${r.name}</div>
              <div class="text-[9px] opacity-80 mt-0.5">${r.desc}</div>
            </button>
          `;
        }).join('')}
      </div>

      <div class="pt-2">
        <div class="flex items-center justify-between mb-1.5">
          <span class="text-xs text-[#1F1F1F] font-medium">Number of Shots</span>
        </div>
        <div class="grid grid-cols-3 gap-1.5">
          ${CUSTOMIZATION_CONFIG.espressoShots.map(shot => {
            const isSelected = state.customization.shots === shot.id;
            return `
              <button 
                type="button" 
                onclick="setCustomizationOption('shots', '${shot.id}')"
                class="py-2 px-1 text-center rounded-xl border text-xs transition-all ${
                  isSelected 
                    ? 'bg-[#1E3932] text-white border-[#1E3932] font-semibold' 
                    : 'bg-[#F9F6F0] text-[#1F1F1F] border-transparent hover:border-gray-200'
                }">
                <div class="font-bold text-[11px]">${shot.name}</div>
                <div class="text-[9px] opacity-80">${shot.priceDiff > 0 ? `+$${shot.priceDiff.toFixed(2)}` : (shot.priceDiff < 0 ? `-$${Math.abs(shot.priceDiff).toFixed(2)}` : 'Standard')}</div>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderFoodCustomizationControls(item) {
  if (!dom.foodOptionsContainer) return;

  dom.foodOptionsContainer.innerHTML = `
    <!-- Warming Options -->
    <div class="space-y-2 pb-5 border-b border-gray-100">
      <label class="text-xs font-bold text-[#1E3932] uppercase tracking-wider block">Warming Preference</label>
      <div class="grid grid-cols-2 p-1 bg-[#F9F6F0] rounded-full gap-1">
        ${CUSTOMIZATION_CONFIG.foodWarmings.map(w => {
          const isSelected = state.customization.warming === w.id;
          return `
            <button 
              type="button" 
              onclick="setCustomizationOption('warming', '${w.id}')"
              class="py-2.5 rounded-full text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                isSelected 
                  ? 'bg-[#1E3932] text-white shadow-sm' 
                  : 'text-[#1F1F1F] hover:text-[#1E3932]'
              }">
              <span class="material-symbols-outlined text-[17px]">${w.icon}</span>
              <span>${w.name}</span>
            </button>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Spreads & Butter -->
    <div class="space-y-2.5 pb-2">
      <label class="text-xs font-bold text-[#1E3932] uppercase tracking-wider block">Add Spreads & Condiments</label>
      <div class="grid grid-cols-1 gap-1.5">
        ${CUSTOMIZATION_CONFIG.foodSpreads.map(spread => {
          const isSelected = state.customization.spread === spread.id;
          return `
            <button 
              type="button" 
              onclick="setCustomizationOption('spread', '${spread.id}')"
              class="w-full px-3.5 py-2.5 rounded-xl flex items-center justify-between text-xs font-medium border transition-all ${
                isSelected 
                  ? 'bg-[#1E3932] text-white border-[#1E3932] font-semibold' 
                  : 'bg-[#F9F6F0] text-[#1F1F1F] border-transparent hover:border-gray-200'
              }">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-[16px]">${isSelected ? 'check_circle' : 'radio_button_unchecked'}</span>
                <span>${spread.name}</span>
              </div>
              <span class="font-bold">${spread.price > 0 ? `+$${spread.price.toFixed(2)}` : 'Included'}</span>
            </button>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

window.setCustomizationOption = function(key, value) {
  state.customization[key] = value;

  // Re-render controls to reflect active selection
  if (state.customizingItem) {
    if (state.customizingItem.group === 'drinks') {
      renderDrinkCustomizationControls(state.customizingItem);
    } else {
      renderFoodCustomizationControls(state.customizingItem);
    }
  }

  updateDrawerPriceButton();
};

function calculateCurrentCustomizedPrice() {
  if (!state.customizingItem) return 0;

  let unitPrice = state.customizingItem.price;

  if (state.customizingItem.group === 'drinks') {
    // Size diff
    const sizeObj = CUSTOMIZATION_CONFIG.sizes.find(s => s.id === state.customization.size);
    if (sizeObj) unitPrice += sizeObj.priceDiff;

    // Milk price
    const milkObj = CUSTOMIZATION_CONFIG.milks.find(m => m.id === state.customization.milk);
    if (milkObj) unitPrice += milkObj.price;

    // Sweetness extra price
    const sweetObj = CUSTOMIZATION_CONFIG.sweetnessLevels.find(sw => sw.id === state.customization.sweetness);
    if (sweetObj) unitPrice += sweetObj.price;

    // Syrup price
    const syrupObj = CUSTOMIZATION_CONFIG.syrups.find(sy => sy.id === state.customization.syrup);
    if (syrupObj) unitPrice += syrupObj.price;

    // Shots diff
    const shotsObj = CUSTOMIZATION_CONFIG.espressoShots.find(sh => sh.id === state.customization.shots);
    if (shotsObj) unitPrice += shotsObj.priceDiff;
  } else {
    // Food spread
    const spreadObj = CUSTOMIZATION_CONFIG.foodSpreads.find(sp => sp.id === state.customization.spread);
    if (spreadObj) unitPrice += spreadObj.price;
  }

  // Ensure price doesn't go below $1.50
  unitPrice = Math.max(1.50, unitPrice);

  const total = unitPrice * state.customization.quantity;
  return { unitPrice, total };
}

function updateDrawerPriceButton() {
  if (!dom.drawerDynamicBtn || !state.customizingItem) return;

  const { total } = calculateCurrentCustomizedPrice();
  dom.drawerDynamicBtn.innerHTML = `
    <span>Add to Order</span>
    <span class="w-1.5 h-1.5 rounded-full bg-white/40"></span>
    <span class="font-bold">$${total.toFixed(2)}</span>
  `;
}

function addCustomizedItemToCart() {
  if (!state.customizingItem) return;

  const { unitPrice, total } = calculateCurrentCustomizedPrice();

  // Create human-readable options summary
  let optionsSummary = [];
  if (state.customizingItem.group === 'drinks') {
    const size = CUSTOMIZATION_CONFIG.sizes.find(s => s.id === state.customization.size)?.name;
    const temp = state.customization.temp === 'hot' ? 'Hot' : 'Iced';
    const milk = CUSTOMIZATION_CONFIG.milks.find(m => m.id === state.customization.milk)?.name;
    const syrup = CUSTOMIZATION_CONFIG.syrups.find(s => s.id === state.customization.syrup);
    const roast = CUSTOMIZATION_CONFIG.espressoRoasts.find(r => r.id === state.customization.roast)?.name;
    const shots = state.customization.shots === '1' ? 'Single Shot' : (state.customization.shots === '2' ? 'Double Shot' : 'Triple Shot');

    optionsSummary.push(`${size} • ${temp}`);
    if (milk) optionsSummary.push(milk);
    if (syrup && syrup.id !== 'none') optionsSummary.push(syrup.name);
    optionsSummary.push(`${roast} (${shots})`);
  } else {
    const warming = state.customization.warming === 'warmed' ? 'Warmed' : 'Room Temp';
    const spread = CUSTOMIZATION_CONFIG.foodSpreads.find(s => s.id === state.customization.spread);
    optionsSummary.push(warming);
    if (spread && spread.id !== 'none') optionsSummary.push(spread.name);
  }

  const cartItem = {
    cartItemId: `${state.customizingItem.id}_${Date.now()}`,
    id: state.customizingItem.id,
    name: state.customizingItem.name,
    image: state.customizingItem.image,
    unitPrice: unitPrice,
    quantity: state.customization.quantity,
    totalPrice: total,
    summary: optionsSummary.join(' • '),
    options: { ...state.customization }
  };

  state.cart.push(cartItem);
  saveCart();
  updateCartBadge();
  closeCustomizationDrawer();
  showToast(`Added ${cartItem.quantity}x ${cartItem.name} to your order!`, 'success');

  // Trigger slight bounce on header cart button
  if (dom.cartHeaderBtn) {
    dom.cartHeaderBtn.classList.add('scale-105');
    setTimeout(() => dom.cartHeaderBtn.classList.remove('scale-105'), 200);
  }
}

// --- Cart Drawer Management ---
window.openCartDrawer = function() {
  renderCart();
  if (dom.cartDrawer && dom.cartScrim) {
    dom.cartDrawer.classList.remove('translate-x-full');
    dom.cartDrawer.classList.add('translate-x-0');
    dom.cartScrim.classList.remove('opacity-0', 'pointer-events-none');
    dom.cartScrim.classList.add('opacity-100', 'pointer-events-auto');
    document.body.classList.add('overflow-hidden');
  }
};

window.closeCartDrawer = function() {
  if (dom.cartDrawer && dom.cartScrim) {
    dom.cartDrawer.classList.remove('translate-x-0');
    dom.cartDrawer.classList.add('translate-x-full');
    dom.cartScrim.classList.remove('opacity-100', 'pointer-events-auto');
    dom.cartScrim.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('overflow-hidden');
  }
};

function renderCart() {
  if (!dom.cartItemsList || !dom.cartEmptyState || !dom.cartFooter) return;

  if (state.cart.length === 0) {
    dom.cartItemsList.innerHTML = '';
    dom.cartEmptyState.classList.remove('hidden');
    dom.cartFooter.classList.add('hidden');
    return;
  }

  dom.cartEmptyState.classList.add('hidden');
  dom.cartFooter.classList.remove('hidden');

  let subtotal = 0;

  dom.cartItemsList.innerHTML = state.cart.map((item, idx) => {
    subtotal += item.unitPrice * item.quantity;
    return `
      <div class="flex items-start gap-3.5 p-3.5 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 transition-all shadow-sm">
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          class="w-16 h-16 rounded-full object-cover bg-[#F9F6F0] p-1 flex-shrink-0"
        />
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between gap-1">
            <h4 class="text-sm font-bold text-[#1F1F1F] leading-tight truncate">${item.name}</h4>
            <button 
              type="button" 
              onclick="removeCartItem(${idx})" 
              class="text-gray-400 hover:text-red-500 transition-colors p-1"
              title="Remove item">
              <span class="material-symbols-outlined text-[17px]">delete</span>
            </button>
          </div>
          <p class="text-[11px] text-[#6B7280] line-clamp-2 mt-0.5 leading-relaxed">${item.summary}</p>
          
          <div class="flex items-center justify-between mt-2.5 pt-1 border-t border-gray-50">
            <span class="text-xs font-bold text-[#1E3932]">$${(item.unitPrice * item.quantity).toFixed(2)}</span>
            
            <!-- Quantity controls -->
            <div class="flex items-center gap-2 bg-[#F9F6F0] px-2 py-1 rounded-full">
              <button 
                type="button" 
                onclick="updateCartItemQty(${idx}, -1)" 
                class="w-5 h-5 rounded-full bg-white text-[#1F1F1F] flex items-center justify-center text-xs font-bold hover:bg-gray-200 transition-colors shadow-xs">
                -
              </button>
              <span class="text-xs font-bold text-[#1F1F1F] min-w-[14px] text-center">${item.quantity}</span>
              <button 
                type="button" 
                onclick="updateCartItemQty(${idx}, 1)" 
                class="w-5 h-5 rounded-full bg-white text-[#1F1F1F] flex items-center justify-center text-xs font-bold hover:bg-gray-200 transition-colors shadow-xs">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const tax = subtotal * 0.0825;
  const total = subtotal + tax;

  if (dom.cartSubtotal) dom.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  if (dom.cartTax) dom.cartTax.textContent = `$${tax.toFixed(2)}`;
  if (dom.cartTotal) dom.cartTotal.textContent = `$${total.toFixed(2)}`;
  if (dom.checkoutBtn) {
    dom.checkoutBtn.textContent = `Checkout • $${total.toFixed(2)}`;
  }
}

window.updateCartItemQty = function(index, delta) {
  if (state.cart[index]) {
    state.cart[index].quantity += delta;
    if (state.cart[index].quantity <= 0) {
      state.cart.splice(index, 1);
    }
    saveCart();
    renderCart();
    updateCartBadge();
  }
};

window.removeCartItem = function(index) {
  if (state.cart[index]) {
    const name = state.cart[index].name;
    state.cart.splice(index, 1);
    saveCart();
    renderCart();
    updateCartBadge();
    showToast(`Removed "${name}" from cart`, 'info');
  }
};

function updateCartBadge() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (dom.cartBadge) {
    dom.cartBadge.textContent = totalItems;
    dom.cartBadge.classList.toggle('hidden', totalItems === 0);
  }
}

// --- Checkout Handler ---
function handleCheckout() {
  if (state.cart.length === 0) return;

  const total = dom.cartTotal ? dom.cartTotal.textContent : '$0.00';
  const orderNum = 'GS-' + Math.floor(1000 + Math.random() * 9000);

  // Clear cart
  state.cart = [];
  saveCart();
  renderCart();
  updateCartBadge();
  closeCartDrawer();

  // Show Success Modal
  if (dom.orderNumberSpan) dom.orderNumberSpan.textContent = orderNum;
  if (dom.checkoutSuccessModal) {
    dom.checkoutSuccessModal.classList.remove('hidden');
  }

  showToast(`Order #${orderNum} confirmed! Pick up in 8-12 mins.`, 'success');
}

// --- Floating Toast Notifications ---
function showToast(message, type = 'info') {
  if (!dom.toastContainer) return;

  const toast = document.createElement('div');
  const bgClass = type === 'success' ? 'bg-[#1E3932] text-white' : 'bg-[#1F1F1F] text-white';
  const icon = type === 'success' ? 'check_circle' : 'info';

  toast.className = `flex items-center gap-2.5 px-4 py-3 rounded-full text-xs sm:text-sm font-semibold shadow-xl border border-white/10 ${bgClass} animate-toast mb-2 transition-all`;
  toast.innerHTML = `
    <span class="material-symbols-outlined text-[18px] text-[#2F8F2F]">${icon}</span>
    <span>${message}</span>
  `;

  dom.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3200);
}
