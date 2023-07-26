'use client'

import React, { useEffect } from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon as XMarkIconOutline,
} from '@heroicons/react/24/outline'
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Header from '../components/header'
import Link from 'next/link'

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
const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Sienna',
    inStock: true,
    size: 'Large',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    inStock: false,
    leadTime: '3–4 weeks',
    size: 'Large',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 3,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35.00',
    color: 'White',
    inStock: true,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
    imageAlt: 'Insulated bottle with white base and black snap lid.',
  },
]
const relatedProducts = [
  {
    id: 1,
    name: 'Billfold Wallet',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-related-product-01.jpg',
    imageAlt: 'Front of Billfold Wallet in natural leather.',
    price: '$118',
    color: 'Natural',
  },
  // More products...
]
const footerNavigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
  ],
}
function classNames(...classes: String[]) {
    return classes.filter(Boolean).join(' ')
}


import fetch from 'isomorphic-fetch';

const generateCheckoutLink = async (products: any[]) => {
  const apiKey = "44edaabee9bdd7fb7431f30fb89b87c2"
  const storeDomain = 'greenplanet-sustainable-cleaning-products.myshopify.com'

  const cartData = {
    items: products.map(product => ({ id: product.id, quantity: product.quantity })),
  };

  try {
    const response = await fetch(`https://${storeDomain}/cart/add.js`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': apiKey,
      },
      body: JSON.stringify(cartData),
    });

    const cartDataResponse = await response.json();

    if (response.ok) {
      return cartDataResponse.cart_token;
    } else {
      throw new Error(cartDataResponse.description || 'Error adding items to cart');
    }
  } catch (error) {
    console.error('Error generating checkout link:', error);
    throw error;
  }
}

import Client from 'shopify-buy'
import { productCartType } from './types'

const Cart = () => {
    const [open, setOpen] = useState(false)
    // Set up state to manage cart items
    const [cartItems, setCartItems] = useState<any>([]);
    const [updatedToCart, setUpdatedCart] = useState<boolean>(false)
    const [total, setTotal] = useState({ subtotal: 0, shippingEstimate: 0, taxEstimate: 0, orderTotal: 0 })

    // Function to calculate the total price for an item
    function calculateTotalPrice(item: { price: number; quantity: number }) {
      return item.price * item.quantity;
    }

    // Function to calculate the total price of the entire array
    function calculateTotalPrices(items: any[]) {
      return items.reduce((total: number, item: any) => total + calculateTotalPrice(item), 0);
    }

    const handleTotalChanges = (cartItemsList: any[]) => {
      const subtotal = calculateTotalPrices(cartItemsList);
      const shippingEstimate = 5
      const taxEstimate = subtotal*0.13
      const orderTotal = subtotal + taxEstimate + shippingEstimate
      setTotal({ subtotal, shippingEstimate, taxEstimate, orderTotal })
    }

    useEffect(() => {
      const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
      const cartItemsList = cartItemsFromLocalStorage? JSON.parse(cartItemsFromLocalStorage) : [];
      setCartItems(cartItemsList)
      console.log(cartItemsList)
      // Calculate the total price
      handleTotalChanges(cartItemsList)
    }, [])
    

    const removeFromCart = (productId: any ) => {
      // alert(productId)
      // Filter out the item with the given productId and create a new cartItems array
      const cartItemsFromLocalStorage = localStorage.getItem('cartItems')

      const cartItemsList = [...cartItems]
      const updatedCartItems = cartItemsList.filter((item: { id: any }) => item.id !== productId);
      setCartItems(updatedCartItems)

      // alert(updatedCartItems)
    
      // Save the updated cart items to local storage
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

      setUpdatedCart(true)

      handleTotalChanges(updatedCartItems)
    
      // You can also provide feedback to the user that the item was removed successfully
      // alert('Item removed from cart successfully!');
    };

    const changeQuantity = (itemId: String, newQuantity: number) => {
      const cartItemsList: any = [...cartItems]
      const itemIndex = cartItemsList.findIndex((cartItemsList: any) => cartItemsList.id === itemId);
      if (itemIndex !== -1) {
        cartItemsList[itemIndex].quantity = newQuantity;
      } else {
        console.error('Item not found');
      }
      return cartItemsList;
    }

    // const generateLink = async () => {
    //   try {
    //     const checkoutToken = await generateCheckoutLink(cartItems);
    //     const checkoutUrl = `https://greenplanet-sustainable-cleaning-products.myshopify.com/checkout/${checkoutToken}`;
    //     console.log('Checkout URL:', checkoutUrl);
    //     alert(checkoutUrl)
    //     // window.location.href = `https://greenplanet-sustainable-cleaning-products.myshopify.com/checkout/${checkoutUrl}`;
    //     return checkoutUrl
    //     // You can use the checkout URL to redirect the user to the checkout page
    //   } catch (error) {
    //     console.error('Error generating checkout link:', error);
    //     return error
    //   }
    // }
    
    const handleQuantityChange = (productId: String, quantity: number) => {
      const res = changeQuantity(productId, quantity);
      setCartItems(res)
      handleTotalChanges(cartItems)
    }

    const goToCheckoutHandler = async () => {
      //alert(generateLink())
      // c1-b984dcfd7d7d8ca1d6d3de1fba7f5724
      const SHOPIFY_API_PUBLIC_ACCESS_TOKEN="44edaabee9bdd7fb7431f30fb89b87c2"
      const SHOPIFY_API_PRIVATE_ACCESS_TOKEN="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"
      const checkoutId = 'gid://shopify/Checkout/c1-b984dcfd7d7d8ca1d6d3de1fba7f5724'; // ID of an existing checkout
      
      const lineItemsToAdd = cartItems.map((product: productCartType) => ({ variantId: `${product.productVariant}`, quantity: product.quantity }) );
      // for (let index = 0; index < lineItemsToAdd2.length; index++) {
      //   lineItemsToAdd.push(lineItemsToAdd2[index])
      // }
      
      // console.log('lineItemsToAdd',lineItemsToAdd)
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
      // Create an empty checkout
      storefrontClient.checkout.create().then(
        (checkout) => {
          // Do something with the checkout
          console.log(checkout.id);
          // Add an item to the checkout
          // storefrontClient.checkout.addLineItems(checkout.id, lineItemsToAdd2).then((checkout2) => {
          //   // Do something with the updated checkout
          //   console.log(checkout2.lineItems); // Array with one additional line item
          // })
          storefrontClient.checkout.addLineItems(checkout.id, lineItemsToAdd).then((checkout2) => {
             // Do something with the updated checkout
             console.log(checkout2.totalPrice); // Array with one additional line item
            })
          // console.log(updateLineItems.webUrl);
          window.location.href = checkout.webUrl
        })

      
      // generateLink()
      //alert(checkoutUrl)
      // window.location.href = "https://greenplanet-sustainable-cleaning-products.myshopify.com/checkouts/cn/c1-b984dcfd7d7d8ca1d6d3de1fba7f5724/"
    }



    return (
        <div className="bg-white">

        <Header updatedCart />

        <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">

            <h1 className="text-3xl font-bold tracking-tight  sm:text-4xl">Shopping Cart</h1>

            <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
                <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
                </h2>

                <ul role="list" className="divide-y divide-[#E6F2F0] border-b border-t border-[#E6F2F0]">
                {cartItems.map((item: any) => (

                  <li key={item.id} className="flex py-6 sm:py-10">
                    <div className='text-3xl'>{cartItems.variantId}</div>
                      <div className="flex-shrink-0">
                          <Image
                            width={300}
                            height={450}
                            src={item.imageURI}
                            alt={""}
                            className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                          />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                              <div className="flex justify-between">
                              <h3 className="text-sm">
                                  <Link href={`/product/${item.id}`} className="font-medium  hover:text-[#003E53]/90">
                                  {item.title}
                                  </Link>
                              </h3>
                              </div>
                              <div className="mt-1 flex text-sm">
                              </div>
                              <p className="mt-1 text-sm font-medium text-[#003E53]">${item.price}</p>
                          </div>

                          <div className="mt-4 sm:mt-0 sm:pr-9">
                              <label htmlFor={`quantity-${"product one"}`} className="sr-only">
                              Quantity, {"product one"}
                              </label>
                              <select
                              id={`quantity-${"Product one"}`}
                              name={`quantity-${"Product one"}`}
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.id.toString(), parseInt(e.target.value))}
                              className="max-w-full rounded-md border border-[#E6F2F0] py-1.5 text-left text-base font-medium leading-5  shadow-sm focus:border-[#4CA585] focus:outline-none focus:ring-1 focus:ring-[#4CA585] sm:text-sm"
                              >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={7}>7</option>
                              <option value={8}>8</option>
                              </select>

                              <div className="absolute right-0 top-0">
                              <button type="button" onClick={() => removeFromCart(item.id.toString())} className="-m-2 inline-flex p-2 text-[#003E53] hover:text-[#003E53]/90">
                                  <span className="sr-only">Remove</span>
                                  <XMarkIconMini className="h-5 w-5" aria-hidden="true" />
                              </button>
                              </div>
                          </div>
                          </div>

                      </div>
                    </li>
                ))}
                </ul>
            </section>

            {/* Order summary */}
            <section
                aria-labelledby="summary-heading"
                className="mt-16 rounded-lg bg-[#E6F2F0]/30 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
            >
                <h2 id="summary-heading" className="text-lg font-medium text-[#003E53]">
                Order summary
                </h2>

                <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                    <dt className="text-sm text-[#003E53]">Subtotal</dt>
                    <dd className="text-sm font-medium text-[#003E53]">${total.subtotal.toFixed(2) }</dd>
                </div>
                <div className="flex items-center justify-between border-t border-[#E6F2F0] pt-4">
                    <dt className="flex items-center text-sm text-[#003E53]">
                    <span>Shipping estimate</span>
                    <a href="#" className="ml-2 flex-shrink-0 text-[#003E53] hover:text-[#003E53]/80">
                        <span className="sr-only">Learn more about how shipping is calculated</span>
                        <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                    </a>
                    </dt>
                    <dd className="text-sm font-medium text-[#003E53]">${total.shippingEstimate.toFixed(2) }</dd>
                </div>
                <div className="flex items-center justify-between border-t border-[#E6F2F0] pt-4">
                    <dt className="flex text-sm text-[#003E53]">
                    <span>Tax estimate</span>
                    <a href="#" className="ml-2 flex-shrink-0 text-[#003E53] hover:text-[#003E53]/80">
                        <span className="sr-only">Learn more about how tax is calculated</span>
                        <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                    </a>
                    </dt>
                    <dd className="text-sm font-medium text-[#003E53]">${total.taxEstimate.toFixed(2) }</dd>
                </div>
                <div className="flex items-center justify-between border-t border--[#E6F2F0] pt-4">
                    <dt className="text-base font-medium text-[#003E53]">Order total</dt>
                    <dd className="text-base font-medium text-[#003E53]">${total.orderTotal.toFixed(2) }</dd>
                </div>
                </dl>

                <div className="mt-6">
                <button
                    type="button"
                    onClick={goToCheckoutHandler}
                    className="w-full rounded-tl-3xl rounded-br-3xl border border-transparent bg-[#003E53] px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-[#003E53]/80 focus:outline-none focus:ring-2 focus:ring-[#003E53]/80 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                    Checkout
                </button>
                </div>
            </section>
            </form>


        </main>

        </div>
    )
}

export default Cart


