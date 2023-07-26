'use client'

import { JSX,  SVGProps, use, useEffect, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, CloudArrowUpIcon, LockClosedIcon, MagnifyingGlassIcon, ServerIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}
const favorites = [
  {
    id: 1,
    name: 'Black Basic Tee',
    price: '$32',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
  {
    id: 2,
    name: 'Off-White Basic Tee',
    price: '$32',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
    imageAlt: "Model wearing women's off-white cotton crewneck tee.",
  },
  {
    id: 3,
    name: 'Mountains Artwork Tee',
    price: '$36',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-03.jpg',
    imageAlt:
      "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
  },
]


const offers = [
  { name: 'Download the app', description: 'Get an exclusive $5 off code', href: '#' },
  { name: "Return when you're ready", description: '60 days of free returns', href: '#' },
  { name: 'Sign up for our newsletter', description: '15% off your first order', href: '#' },
]

const products = [
  {
    id: 1,
    name: 'Nomad Pouch',
    href: '#',
    price: '$50',
    availability: 'White and Black',
    imageSrc: '/product1.webp',
    imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
  },
  {
    id: 2,
    name: 'Zip Tote Basket',
    href: '#',
    price: '$140',
    availability: 'Washed Black',
    imageSrc: '/product2.webp',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 3,
    name: 'Medium Stuff Satchel',
    href: '#',
    price: '$220',
    availability: 'Blue',
    imageSrc: '/product3.webp',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 4,
    name: 'Nomad Pouch',
    href: '#',
    price: '$50',
    availability: 'White and Black',
    imageSrc: '/product4.webp',
    imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
  },
  {
    id: 5,
    name: 'Zip Tote Basket',
    href: '#',
    price: '$140',
    availability: 'Washed Black 4',
    imageSrc: '/product5.webp',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 6,
    name: 'Medium Stuff Satchel',
    href: '#',
    price: '$220',
    availability: 'Blue',
    imageSrc: '/product6.webp',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 7,
    name: 'Nomad Pouch',
    href: '#',
    price: '$50',
    availability: 'White and Black',
    imageSrc: '/product7.webp',
    imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
  },
  {
    id: 8,
    name: 'Zip Tote Basket',
    href: '#',
    price: '$140',
    availability: 'Washed Black',
    imageSrc: '/product8.webp',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 9,
    name: 'Medium Stuff Satchel',
    href: '#',
    price: '$220',
    availability: 'Blue',
    imageSrc: '/product4.webp',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 10,
    name: 'Nomad Pouch',
    href: '#',
    price: '$50',
    availability: 'White and Black',
    imageSrc: '/product2.webp',
    imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
  },
  {
    id: 11,
    name: 'Zip Tote Basket',
    href: '#',
    price: '$140',
    availability: 'Washed Black',
    imageSrc: '/product5.webp',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 12,
    name: 'Medium Stuff Satchel',
    href: '#',
    price: '$220',
    availability: 'Blue',
    imageSrc: '/product4.webp',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]

const features = [
  {
    name: 'Eco-Friendly',
    description:
      'These products are environmentally friendly, contributing to a cleaner planet.',
    icon: "/eco-friendly-icon.svg",
  },
  {
    name: 'Effective',
    description: 'Despite being eco-friendly, they are just as effective as traditional cleaning products.',
    icon: LockClosedIcon,
  },
  {
    name: 'Wide Variety',
    description: 'We offer a range of products, from surface cleaners to laundry detergents, catering to all home cleaning needs',
    icon: ServerIcon,
  },
]

const incentives = [
  {
    name: 'Eco-Friendly',
    imageSrc: '/eco-friendly-icon.svg',
    description: "These products are environmentally friendly, contributing to a cleaner planet.",
  },
  {
    name: 'Effective',
    imageSrc: '/effective-icon.svg',
    description: "Despite being eco-friendly, they are just as effective as traditional cleaning products.",
  },
  {
    name: 'Wide Variety',
    imageSrc: '/wide-variety-icon.svg',
    description: "We offer a range of products, from surface cleaners to laundry detergents, catering to all home cleaning needs.",
  },
]

const incentives2 = [
  {
    name: 'Good for the Planet',
    imageSrc: '/good-for-the-planet-icon.svg',
    description: "By choosing our products, customers contribute to a healthier planet.",
  },
  {
    name: 'Safe for Use',
    imageSrc: '/safe-for-use-icon.svg',
    description: "Our products are safe for your home and family.",
  },
  {
    name: 'Cost-Efficient',
    imageSrc: '/cost-efficient-icon.svg',
    description: "Despite being eco-friendly, our products are competitively priced.",
  },
]

const featuredTestimonial = {
  body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
  author: {
    name: 'Brenna Goyette',
    handle: 'brennagoyette',
    imageUrl:
      '/avatar.png',
    logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
  },
}
const testimonials = [
  [
    [
      {
        body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
        author: {
          name: 'Leslie Alexander',
          handle: 'lesliealexander',
          imageUrl:
            '/avatar.png',
        },
      },
      {
        body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
        author: {
          name: 'Leslie Alexander',
          handle: 'lesliealexander',
          imageUrl:
            '/avatar.png',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
        author: {
          name: 'Lindsay Walton',
          handle: 'lindsaywalton',
          imageUrl:
            '/avatar.png',
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: 'Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.',
        author: {
          name: 'Tom Cook',
          handle: 'tomcook',
          imageUrl:
            '/avatar.png',
        },
      },
      
      // More testimonials...
    ],
    [
      {
        body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
        author: {
          name: 'Leonard Krasner',
          handle: 'leonardkrasner',
          imageUrl:
            '/avatar.png',
        },
      },
      {
        body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
        author: {
          name: 'Leonard Krasner',
          handle: 'leonardkrasner',
          imageUrl:
            '/avatar.png',
        },
      },
      // More testimonials...
    ],
    
  ],
]

const footerNav = {
  main: [
    { name: 'Home', href: '#' },
    { name: 'Delivery', href: '#' },
    { name: 'Refund Policies', href: '#' },
    { name: 'Privacy & policy', href: '#' },
    { name: 'Terms & conditons', href: '#' },
    { name: 'SiteMap', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const SHOPIFY_STORE_URL="https://greenplanet-sustainable-cleaning-products.myshopify.com/"




// const domain = SHOPIFY_STORE_URL
// const storefrontAccessToken = SHOPIFY_API_PRIVATE_ACCESS_TOKEN



// import Client from 'shopify-buy';

// const fetchProducts = async () => {
//   // Load the access token as per instructions above
//   const storefrontAccessToken = "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";
//   // Shop from which we're fetching data
//   const shop = 'https://greenplanet-sustainable-cleaning-products.myshopify.com/';
//   // StorefrontClient takes in the shop url and the Storefront Access Token for that shop.

  

//   // Initializing a client to return content in the store's primary language
//   const client = Client.buildClient({
//     domain: shop,
//     storefrontAccessToken: SHOPIFY_API_PUBLIC_ACCESS_TOKEN,
//     apiVersion: '2023-10'
//   });

//   // Fetch all products in your shop
//   const products = await client.product.fetchAll()

//   if(products){
//     console.log(products)
//   } else {
//     console.log("no products")
//   }
  
// }

import { shopifyApi } from '@shopify/shopify-api';
import shopify from '@shopify/shopify-api'
import Client from 'shopify-buy'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Link from 'next/link'
const SHOPIFY_API_PUBLIC_ACCESS_TOKEN="44edaabee9bdd7fb7431f30fb89b87c2"
const SHOPIFY_API_PRIVATE_ACCESS_TOKEN="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"




const Home = () => {
  const [productsr, setProductsr] = useState<any>([])

  const [cartItems, setCartItems] = useState<any>([])
  useEffect(() => {
    const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
    const cartItemsList = cartItemsFromLocalStorage? JSON.parse(cartItemsFromLocalStorage) : [];
    setCartItems(cartItemsList)
  }, [])
  

  

  console.log(cartItems)

  // const fetchProductsHandler = async () => {
  //   const fetchedProducts  = await fetchAll()
  //   //setProductsr(fetchedProducts)
  // }

  useEffect(() => {
    const fetchAll = async () => {
      // Load the access token as per instructions above
      const storefrontAccessToken = SHOPIFY_API_PUBLIC_ACCESS_TOKEN;
      // Shop from which we're fetching data
      const shop = 'greenplanet-sustainable-cleaning-products.myshopify.com'; // Remove 'https://' and trailing slash from the shop URL
      // StorefrontClient takes in the shop url and the Storefront Access Token for that shop.
      const storefrontClient =  new Client({
        storefrontAccessToken,
        domain: shop,
        apiVersion: '2023-10'
      });
      // Use client.query and pass your query as `data`
      const products = await storefrontClient.product.fetchAll()
      console.log(JSON.stringify(products));
      // return products
      setProductsr(products)
    }
    fetchAll()

  }, [])
  

  // const cartItemsFromLocalStorage = localStorage.getItem('cartItems')


  // if(cartItemsFromLocalStorage){
  //   cartItems = cartItemsFromLocalStorage? JSON.parse(cartItemsFromLocalStorage) : [];
  // } 
  

  return (
    <div className="bg-white">
      {/* <button onClick={fetchProductsHandler} >Fetch products</button>
      <ul>
        {
          productsr.map((product: any) => <li key={product.id}>{product.title}</li>)
        }
      </ul> */}


      <header className="relative overflow-hidden">
        {/* Top navigation */}
        <nav aria-label="Top" className="relative z-20  bg-opacity-100 backdrop-blur-xl backdrop-filter bg-[#D1ECE7]">
          <div className="mx-auto max-w-7xl pt-4 px-4 sm:px-6 lg:px-4 2xl:px-0">
            <div className="flex h-16 items-center">

              {/* Logo */}
              <div className=" flex lg:ml-0 ">
                <Link href="/">
                  <span className="sr-only">GreenPlanet</span>
                  <Image
                    className="h-16 w-auto"
                    src="/greenplanet-logo.svg"
                    alt=""
                    width={222}
                    height={109}
                  />
                </Link>
              </div>



              <div className="ml-auto flex items-center">

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link href="/cart" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0  group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium  group-hover:text-[#003E53]">{cartItems.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>

        {/* Hero section */}
        <section className="mn-0 bg-[#D1ECE7]">
          <div className="px-6 py-12 text-center md:px-12 lg:text-left">
            <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="mt-12 lg:mt-0">
                  <h1 className="mt-0 mb-0 text-[36px] font-extrabold md:text-[40px] xl:text-[44px] text-[#003E53]">
                    GreenPlanet's Sustainable Clean: Good for You, Great for Earth
                  </h1>
                  <p className="mb-9 text-[#003E53]">GreenPlanet offers sustainable cleaning products that are not only effective for your home but also contribute to a healthier planet. Embrace a greener clean and be a part of our eco-conscious journey today.</p>
                  <a className="mb-2 inline-block rounded-tl-3xl rounded-br-3xl bg-[#003E53] px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-[#003E53]/80 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-[#003E53]/80 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-[#003E53]/80 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] md:mr-2 md:mb-0"
                      data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Discover Our Products</a>
                </div>
                <div className="mb-12 lg:mb-0">
                  <Image src="/heroimage.webp" className="w-full" alt="" width={400} height={260} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div aria-label="Offers" className="order-last lg:order-first border border-b-[1px] border-t-[1px]">
            <div className="mx-auto max-w-7xl lg:px-8">
              <ul
                role="list"
                className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0"
              >
                {offers.map((offer, index) => (
                  <li key={offer.name+index} className="flex flex-col">
                    <a
                      href={offer.href}
                      className="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10"
                    >
                      <p className="text-sm ">{offer.name}</p>
                      <p className="font-semibold ">{offer.description}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
        </div>
        

        {/* Products section */}
        <div className="bg-white">
          <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="bg-white px-6 pb-12 sm:pb-16 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-bold tracking-tight  sm:text-6xl text-[#003E53]">Our Products</h2>
                <p className="mt-6 text-lg leading-8  text-[#003E53]">
                Experience the power of sustainability with our range of eco-friendly and effective cleaning products.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
              {productsr.map((product: any, index: any) => (
                <Link key={product.id} href={`/product/${product.id.replace("gid://shopify/Product/","")}`} className="group text-sm">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <Image
                      src={product.images[0].src}
                      alt={product.title}
                      fill
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 text-[#003E53] font-bold">{product.title}</h3>
                  <p className="italic text-gray-500">in Stock</p>
                  <p className="mt-2 font-medium text-[#4CA585]">${product.variants[0].price.amount}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>



        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
            <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
              <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
                <div>
                  <h2 className="text-4xl font-bold tracking-tight ">
                    Why Choose GreenPlanet Cleaning Products?
                  </h2>
                  <p className="mt-4 ">
                    Our products combine effectiveness with environmental sustainability, catering to all your home cleaning needs.
                  </p>
                </div>
                <div className="aspect-h-2 aspect-w-3 overflow-hidden bg-gray-100">
                  <Image
                    src="/features-image.webp"
                    alt=""
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                {incentives.map((incentive,index) => (
                  <div key={incentive.name+index} className="sm:flex lg:block">
                    <div className="sm:flex-shrink-0">
                      <Image className="h-16 w-16" src={incentive.imageSrc} alt="" width={64} height={64} />
                    </div>
                    <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                      <h3 className="font-bold">{incentive.name}</h3>
                      <p className="mt-2 text-sm ">{incentive.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>



    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#E6F2F0] px-6 py-16 sm:p-16">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="text-center">
              <h2 className=" font-bold text-[30px] ">
              Naturally Clean, Sustainably Caring
              </h2>
              <p>Join us in making a positive impact on the planet while ensuring a safe and clean home for your loved ones.</p>
            </div>
            <div className="mx-auto mt-24 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3 ">
              {incentives2.map((incentive, index) => (
                <div key={incentive.name+index} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <Image className="mx-auto h-16 w-16" src={incentive.imageSrc} alt="" width={64} height={64} />
                    </div>
                  </div>
                  <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="font-bold">{incentive.name}</h3>
                    <p className="mt-2 text-sm ">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="relative isolate">
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl tracking-tight sm:text-6xl font-extrabold text-[#4CA585]">
                  Market Trends
                  </h1>
                  <h1 className="text-[20px] font-semibold tracking-tight sm:text-[20px]  ">
                  Join the Sustainable Cleaning Revolution and be a part of improving the well-being of you, your beloved ones, and the planet.
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none">
                  The market for sustainable cleaning products is growing, expected to reach $110 billion in 2025. There is a clear shift towards environmentally friendly cleaning products, with the market growth rate for these products being twice as much as that for all cleaning products. Therefore, emphasizing the environmental sustainability of our products is crucial.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-tl-3xl rounded-br-3xl bg-[#003E53] px-8 py-3.5 font-semibold text-white shadow-sm hover:bg-[#003E53]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003E53]"
                    >
                      Check our products
                    </a>
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <Image
                        src="/tm5.webp"
                        alt=""
                        width={300}
                        height={450}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Image
                        src="/tm1.webp"
                        alt=""
                        width={300}
                        height={450}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src="/tm2.webp"
                        alt=""
                        width={300}
                        height={450}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <Image
                        src="/tm3.webp"
                        alt=""
                        width={300}
                        height={450}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src="/tm4.webp"
                        alt=""
                        width={300}
                        height={450}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-lg font-semibold leading-8 tracking-tigh">Testimonials</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Hear from Our Satisfied Customers
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
              <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight ">
                  <p>{`“${featuredTestimonial.body}”`}</p>
                </blockquote>
                <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                  <Image
                    className="h-10 w-10 flex-none rounded-full bg-gray-50"
                    width={40}
                    height={40}
                    src={featuredTestimonial.author.imageUrl}
                    alt=""
                  />
                  <div className="flex-auto">
                    <div className="font-semibold">{featuredTestimonial.author.name}</div>
                    <div className="">{`@${featuredTestimonial.author.handle}`}</div>
                  </div>
                  <Image width={40} height={40} className="h-10 w-auto flex-none" src={featuredTestimonial.author.logoUrl} alt="" />
                </figcaption>
              </figure>
              {testimonials.map((columnGroup, columnGroupIdx) => (
                <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                  {columnGroup.map((column, columnIdx) => (
                    <div
                      key={columnIdx}
                      className={classNames(
                        (columnGroupIdx === 0 && columnIdx === 0) ||
                          (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                          ? 'xl:row-span-2'
                          : 'xl:row-start-1',
                        'space-y-8'
                      )}
                    >
                      {column.map((testimonial, index) => (
                        <figure
                          key={testimonial.author.handle+index}
                          className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                        >
                          <blockquote className="">
                            <p>{`“${testimonial.body}”`}</p>
                          </blockquote>
                          <figcaption className="mt-6 flex items-center gap-x-4">
                            <Image width={40} height={40} className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                            <div>
                              <div className="font-semibold">{testimonial.author.name}</div>
                              <div className="">{`@${testimonial.author.handle}`}</div>
                            </div>
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      

        {/* CTA section */}
        <section aria-labelledby="sale-heading">
          <div className="overflow-hidden pt-32 sm:pt-14">
            <div className="bg-[#003E53]">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative pb-16 pt-48 sm:pb-24">
                  <div>
                    <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                      Shop Now 
                      <br />
                      for a Greener Clean
                    </h2>
                    <div className="mt-6 text-base">
                      <a href="#" className="font-semibold text-white">
                        Shop now
                        <span aria-hidden="true"> &rarr;</span>
                      </a>
                    </div>
                  </div>

                  <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                    <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                      <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="flex-shrink-0">
                          <Image
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/product4.webp"
                            width={256}
                            height={256}
                            alt=""
                          />
                        </div>

                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                          <Image
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/product3.webp"
                            width={256}
                            height={256}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="flex-shrink-0">
                          <Image
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/product6.webp"
                            width={256}
                            height={256}
                            alt=""
                          />
                        </div>

                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                          <Image
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/product1.webp"
                            width={256}
                            height={256}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="flex-shrink-0">
                          <Image
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/product2.webp"
                            width={256}
                            height={256}
                            alt=""
                          />
                        </div>

                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                          <Image
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src="/product3.webp"
                            width={256}
                            height={256}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>





    </div>
  )
}



export default Home