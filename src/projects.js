export const projects = [
  {
    id:'fogstores', title:'Fogstores', type:'Fashion commerce',
    tags:'Ecommerce • Storefront • Design • Development',
    url:'https://fogstores.vercel.app/',
    cover:{src:'/assets/projects/fogstores-streetwear.webp',alt:'Fogstores streetwear campaign with a black hoodie beside a red car and a white graphic tee'},
    description:'A fashion storefront with campaign-led discovery, shoppable collections, product pages and checkout, connected to an ecommerce operations dashboard.',
    features:['Campaign-led storefront','Collections and product discovery','Cart and checkout','Products, inventory and order management'],
    images:[{src:'/assets/projects/fogstores-hero.webp',alt:'Original Fogstores Siren Muse campaign photography'},{src:'/assets/projects/fogstores-look.webp',alt:'Fogstores shoppable look photography'}]
  },
  {
    id:'infinity', title:'Infinity Kitchens', type:'Food + operations',
    tags:'Web • Meal Subscriptions • Ordering • Kitchen Operations',
    url:'https://infinitykitchensblr.com/',
    description:'A connected cloud-kitchen platform for daily menus, meal subscriptions and customer ordering, with a unified kitchen order flow and owner analytics.',
    features:['Daily menu and customer ordering','Meal subscription plans','Kitchen order management','Payments and owner analytics'],
    images:[{src:'/assets/projects/infinity-home.png',alt:'Actual Infinity Kitchens customer homepage screenshot'},{src:'/assets/projects/infinity-menu.png',alt:'Actual Infinity Kitchens daily menu screenshot'}]
  },
  {
    id:'bnm', title:'BNM Cafe', type:'Campus cafe platform',
    tags:'Web App • Customer Ordering • POS • Kitchen Displays',
    url:'https://bnm-cafe-rho.vercel.app/menu',
    description:'A mobile-first cafe ordering experience that connects menu browsing, checkout and live order tracking with the cashier POS and per-station kitchen displays.',
    features:['Mobile menu and cart','Counter and online payments','Live order tracking','Cashier POS and station displays'],
    images:[{src:'/assets/projects/bnm-menu.png',alt:'Actual BNM Cafe mobile menu screenshot'}]
  }
];

export function projectCover(project) {
  if(project.id==='fogstores')return `<div class="project-cover cover-fogstores"><img class="cover-photo" src="${project.cover.src}" alt="${project.cover.alt}" loading="lazy" decoding="async"><div class="cover-shade"></div><div class="cover-brand"><strong>FOGSTORES</strong><span>Fashion, with a point of view.</span></div></div>`;
  if(project.id==='infinity')return '<div class="project-cover cover-infinity"><img class="infinity-photo" src="/assets/projects/infinity-hero.jpg" alt="Original Infinity Kitchens idli and vada hero photography" loading="lazy" decoding="async"><div class="infinity-brand"><img src="/assets/projects/infinity-mark.png" alt="Infinity Kitchens logo" loading="lazy"><strong>One kitchen.<br>One menu a day.<br>For you.</strong><span>INFINITY KITCHENS</span></div></div>';
  return '<div class="project-cover cover-bnm"><div class="bnm-brand"><img src="/assets/projects/bnm-logo.png" alt="BNM Cafe logo" loading="lazy"><span>From craving<br>to counter.</span></div><div class="bnm-phone"><img src="/assets/projects/bnm-menu.png" alt="Actual BNM Cafe mobile ordering interface" loading="lazy" decoding="async"></div></div>';
}
