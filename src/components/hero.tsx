import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ShoppingBag,
  Truck,
  CreditCard,
} from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70" />

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="text-left max-w-2xl">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
                Modern{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  E-commerce
                </span>{" "}
                Experience
              </h1>

              <p className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
                Discover our curated collection of premium products with fast
                shipping, secure checkout, and an exceptional shopping
                experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center px-8 py-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
                >
                  Shop Now
                  <ShoppingBag className="ml-2 w-5 h-5" />
                </Link>

                <Link
                  href="#categories"
                  className="inline-flex items-center px-8 py-4 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-lg font-medium"
                >
                  Browse Categories
                </Link>
              </div>

              <div className="mt-16 flex flex-col sm:flex-row items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-blue-500" />
                  <span>Free shipping over $50</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-500" />
                  <span>Secure payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-sjsu-blue" />
                  <span>30-day returns</span>
                </div>
              </div>
            </div>

            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80"
                  alt="E-commerce hero image"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm font-medium text-gray-500">
                  New Collection
                </div>
                <div className="text-xl font-bold text-gray-900">Shop Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
