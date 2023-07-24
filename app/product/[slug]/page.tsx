'use client'
import {
  CurrencyDollarIcon,
  GlobeAmericasIcon,
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Header from '@/components/header'
import { useState } from 'react'

const product = {
  name: 'Basic Tee',
  price: '$35',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Women', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      id: 1,
      imageSrc: '/hero-image.png',
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    }
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: false },
  ],
  description: `
    <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
    <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
  `,
  details: [
    'Only the best materials',
    'Ethically and locally made',
    'Pre-washed and pre-shrunk',
    'Machine wash cold with similar colors',
  ],
}
const policies = [
  { name: 'International delivery', icon: GlobeAmericasIcon, description: 'Get your order in 2 years' },
  { name: 'Loyalty rewards', icon: CurrencyDollarIcon, description: "Don't look at other tees" },
]
const reviews = {
  average: 3.9,
  totalCount: 512,
  featured: [
    {
      id: 1,
      title: "Can't say enough good things",
      rating: 5,
      content: `
        <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
        <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
      `,
      author: 'Risako M',
      date: 'May 16, 2021',
      datetime: '2021-01-06',
    },
    // More reviews...
  ],
}
const relatedProducts = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: '/hero-image.png',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '$35',
    color: 'Aspen White',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: '/hero-image.png',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '$35',
    color: 'Aspen White',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: '/hero-image.png',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '$35',
    color: 'Aspen White',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: '/hero-image.png',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '$35',
    color: 'Aspen White',
  },
  // More products...
]



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Product = () => {

    const [selectedSize, setSelectedSize] = useState(product.sizes[2])
    return (
        <div className="bg-white">

        
        <main className="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5 lg:col-start-8">
                <div className="flex justify-between">
                <h1 className="text-xl font-medium ">{product.name}</h1>
                <p className="text-xl font-medium ">{product.price}</p>
                </div>
                {/* Reviews */}
                <div className="mt-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                    <p className="text-sm ">
                    {reviews.average}
                    <span className="sr-only"> out of 5 stars</span>
                    </p>
                    <div className="ml-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                        key={rating}
                        className={classNames(
                            reviews.average > rating ? 'text-yellow-400' : 'text-gray-200',
                            'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                        />
                    ))}
                    </div>
                    <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                    ·
                    </div>
                    <div className="ml-4 flex">
                    <a href="#" className="text-sm font-medium text-[#4CA585] hover:text-[#4CA585]/90">
                        See all reviews
                    </a>
                    </div>
                </div>
                </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                <h2 className="sr-only">Images</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                {product.images.map((image) => (
                    <img
                    key={image.id}
                    src={image.imageSrc}
                    alt={image.imageAlt}
                    className={classNames(
                        image.primary ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block',
                        'rounded-lg'
                    )}
                    />
                ))}
                </div>
            </div>

            <div className="mt-8 lg:col-span-5">
                {/* Product details */}
                <div className="mt-10">
                <h2 className="text-sm font-medium ">Description</h2>

                <div
                    className="prose prose-sm mt-4 text-[#003E53]"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                />
                </div>
                <form>
                <button
                    type="submit"
                    className="mt-8 flex w-full items-center justify-center rounded-tl-3xl rounded-br-3xl border border-transparent bg-[#003E53] px-8 py-3 text-base font-medium text-white hover:bg-[#003E53]/80 focus:outline-none focus:ring-2 focus:ring-[#003E53] focus:ring-offset-2"
                >
                    Add to cart
                </button>
                </form>

                

                <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-sm font-medium text-[#003E53]">Fabric &amp; Care</h2>

                <div className="prose prose-sm mt-4 text-[#003E53]">
                    <ul role="list">
                    {product.details.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                    </ul>
                </div>
                </div>

                {/* Policies */}
                <section aria-labelledby="policies-heading" className="mt-10">
                <h2 id="policies-heading" className="sr-only">
                    Our Policies
                </h2>

                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {policies.map((policy) => (
                    <div key={policy.name} className="rounded-lg border border-[#D1ECE7] bg-[#E6F2F0]/30 p-6 text-center">
                        <dt>
                        <policy.icon className="mx-auto h-6 w-6 flex-shrink-0 " aria-hidden="true" />
                        <span className="mt-4 text-sm font-medium ">{policy.name}</span>
                        </dt>
                        <dd className="mt-1 text-sm ">{policy.description}</dd>
                    </div>
                    ))}
                </dl>
                </section>
            </div>
            </div>

            {/* Reviews */}
            <section aria-labelledby="reviews-heading" className="mt-16 sm:mt-24">
            <h2 id="reviews-heading" className="text-lg font-medium ">
                Recent reviews
            </h2>

            <div className="mt-6 space-y-10 divide-y divide-[#D1ECE7] border-b border-t border-[#D1ECE7]/40 pb-10">
                {reviews.featured.map((review) => (
                <div key={review.id} className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
                    <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                    <div className="flex items-center xl:col-span-1">
                        <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                            key={rating}
                            className={classNames(
                                review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                            />
                        ))}
                        </div>
                        <p className="ml-3 text-sm ">
                        {review.rating}
                        <span className="sr-only"> out of 5 stars</span>
                        </p>
                    </div>

                    <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                        <h3 className="text-sm font-bold ">{review.title}</h3>

                        <div
                        className="mt-3 space-y-6 text-sm text-[#003E53]/70"
                        dangerouslySetInnerHTML={{ __html: review.content }}
                        />
                    </div>
                    </div>

                    <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                    <p className="font-medium ">{review.author}</p>
                    <time
                        dateTime={review.datetime}
                        className="ml-4 border-l border-gray-200 pl-4  lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                    >
                        {review.date}
                    </time>
                    </div>
                </div>
                ))}
            </div>
            </section>

            {/* Related products */}
            <section aria-labelledby="related-heading" className="mt-16 sm:mt-24">
            <h2 id="related-heading" className="text-lg font-medium ">
                Customers also purchased
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                        src={relatedProduct.imageSrc}
                        alt={relatedProduct.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                    </div>
                    <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm ">
                        <a href={relatedProduct.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {relatedProduct.name}
                        </a>
                        </h3>
                        <p className="mt-1 text-sm ">{relatedProduct.color}</p>
                    </div>
                    <p className="text-sm font-medium ">{relatedProduct.price}</p>
                    </div>
                </div>
                ))}
            </div>
            </section>
        </main>
        </div>
    )
}

export default Product