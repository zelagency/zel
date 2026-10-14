// Case-study screenshots: `-thumb` is the cropped grid tile, the plain file is the full image the
// gallery opens. Size is the tile's footprint on the 12-column grid: phone 2, photo 3, wide 6, full 12.
const SIZE={phone:2,photo:3,wide:6,full:12};
const shot=(project,name,size,alt)=>({src:`/assets/projects/screens/${project}/${name}.webp`,thumb:`/assets/projects/screens/${project}/${name}-thumb.webp`,span:SIZE[size],size,alt});

export const projects = [
  {
    id:'fogstores', title:'Fogstores', type:'Fashion commerce',
    tags:'Ecommerce • Storefront • Design • Development',
    url:'https://fogstores.vercel.app/',
    cover:{src:'/assets/projects/fogstores-streetwear.webp',alt:'Fogstores streetwear campaign with a black hoodie beside a red car and a white graphic tee'},
    description:'A fashion storefront with campaign-led discovery, shoppable collections, product pages and checkout, connected to an ecommerce operations dashboard.',
    features:['Campaign-led storefront','Collections and product discovery','Cart and checkout','Products, inventory and order management'],
    gallery:[
      {label:'Customer side',note:'The storefront shoppers browse, on desktop and phone',shots:[
        shot('fogstores','store-home','full','Home: Siren Muse campaign, most trending looks and the festival edit'),
        shot('fogstores','store-collection','wide','Collection: Shell and Sequins'),
        shot('fogstores','store-tees','wide','Collection: Haze Tees'),
        shot('fogstores','store-product','wide','Product page: Blond, Frank Ocean tee with sizes and colours'),
        shot('fogstores','store-product-2','wide','Product page: Sea Shell Skirt with its photo gallery'),
        shot('fogstores','m-home','phone','Phone home: campaign hero and quick Sale and Men links'),
        shot('fogstores','m-collection','phone','Phone collection with the floating tab bar'),
        shot('fogstores','m-tees','phone','Phone collection: Haze Tees'),
        shot('fogstores','m-product','phone','Phone product page with a sticky add bar'),
        shot('fogstores','m-product-2','phone','Phone product gallery'),
        shot('fogstores','m-search','phone','Search with live results'),
      ]},
      {label:'Behind the counter',note:'The admin the Fogstores team runs the shop from',shots:[
        shot('fogstores','analytics','full','Analytics: sales, orders, sessions, conversion and a sales breakdown'),
        shot('fogstores','admin-home','wide','Admin home: today at a glance with setup shortcuts'),
        shot('fogstores','live','wide','Live view: visitors, sessions and sales as they happen'),
        shot('fogstores','orders','wide','Orders: fulfilment and payment status across every order'),
        shot('fogstores','tracking','wide','Delivery tracking across Qikink, Shree Maruti and Bluedart'),
        shot('fogstores','products','wide','Products: stock, status and inventory in one list'),
        shot('fogstores','product-editor','wide','Product editor: media, pricing, variants and collections'),
        shot('fogstores','discounts','wide','Discounts: codes, usage and active dates'),
        shot('fogstores','report','wide','Sales report: orders and gross sales by day'),
      ]},
    ]
  },
  {
    id:'infinity', title:'Infinity Kitchens', type:'Food + operations',
    tags:'Web • Meal Subscriptions • Ordering • Kitchen Operations',
    url:'https://infinitykitchensblr.com/',
    description:'A connected cloud-kitchen platform for daily menus, meal subscriptions and customer ordering, with a unified kitchen order flow and owner analytics.',
    features:['Daily menu and customer ordering','Meal subscription plans','Kitchen order management','Payments and owner analytics'],
    gallery:[
      {label:'Customer side',note:'Daily menu, meal plans and checkout on the phone',shots:[
        shot('infinity','home','phone','Home: one kitchen, one menu a day'),
        shot('infinity','menu','phone',"Today's menu with search and sections"),
        shot('infinity','menu-dishes','phone','Menu dishes with prices, calories and protein'),
        shot('infinity','plans','phone','Meal plans: pick a plan, we cook to it'),
        shot('infinity','plan-card','phone','Plan card: meals, cycle, billing and price'),
        shot('infinity','plan-checkout','phone','Plan setup: delivery window and days'),
      ]},
      {label:'Behind the counter',note:'What the system does for the kitchen and the owner',shots:[
        shot('infinity','order-flow','full','Every order on one kitchen board: website, Swiggy and Zomato orders in one queue, paid before cooking, tracked from accepted to delivered'),
      ]},
    ]
  },
  {
    id:'bnm', title:'BNM Cafe', type:'Campus cafe platform',
    tags:'Web App • Customer Ordering • POS • Kitchen Displays',
    url:'https://bnm-cafe-rho.vercel.app/menu',
    description:'A mobile-first cafe ordering experience that connects menu browsing, checkout and live order tracking with the cashier POS and per-station kitchen displays.',
    features:['Mobile menu and cart','Counter and online payments','Live order tracking','Cashier POS and station displays'],
    gallery:[
      {label:'Customer side',note:'Ordering from the table on a phone',shots:[
        shot('bnm','menu-cart','phone','Menu with favourites and quick add'),
        shot('bnm','cart','phone','Cart with quantities and GST'),
        shot('bnm','checkout','phone','Checkout: pay at the counter or online'),
        shot('bnm','order-ticket','phone','Order ticket with live item status'),
        shot('bnm','orders','phone','Order history'),
        shot('bnm','review','phone','Leave a review'),
      ]},
      {label:'Behind the counter',note:'Cashier POS, kitchen stations and analytics',shots:[
        shot('bnm','order-board','wide','Live KOT board: pending orders, cancel or mark ready'),
        shot('bnm','cashier','wide','Cashier POS: menu grid and current order'),
        shot('bnm','analytics','wide','Analytics: revenue, profit, prep time, menu engineering'),
        shot('bnm','stations','wide','Station hub: South and North Indian kitchen displays'),
      ]},
    ]
  }
];

export function projectCover(project) {
  if(project.id==='fogstores')return `<div class="project-cover cover-fogstores"><img class="cover-photo" src="${project.cover.src}" alt="${project.cover.alt}" loading="lazy" decoding="async"><div class="cover-shade"></div><div class="cover-brand"><strong>FOGSTORES</strong><span>Fashion, with a point of view.</span></div></div>`;
  if(project.id==='infinity')return '<div class="project-cover cover-infinity"><img class="infinity-photo" src="/assets/projects/infinity-hero.jpg" alt="Original Infinity Kitchens idli and vada hero photography" loading="lazy" decoding="async"><div class="infinity-brand"><img src="/assets/projects/infinity-mark.png" alt="Infinity Kitchens logo" loading="lazy"><strong>One kitchen.<br>One menu a day.<br>For you.</strong><span>INFINITY KITCHENS</span></div></div>';
  return '<div class="project-cover cover-bnm"><div class="bnm-brand"><img src="/assets/projects/bnm-logo.webp" alt="BNM Cafe logo" loading="lazy"><span>From craving<br>to counter.</span></div><div class="bnm-phone"><img src="/assets/projects/bnm-menu.webp" alt="Actual BNM Cafe mobile ordering interface" loading="lazy" decoding="async"></div></div>';
}
