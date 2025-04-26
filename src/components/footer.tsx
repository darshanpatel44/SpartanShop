import Link from "next/link";
import {
  Twitter,
  Instagram,
  Facebook,
  CreditCard,
  Truck,
  RotateCcw,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Payment and Shipping Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-sjsu-gold/20 rounded-full text-sjsu-blue">
              <CreditCard className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Secure Payment</h3>
              <p className="text-gray-600 text-sm">
                All major credit cards accepted
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-sjsu-gold/20 rounded-full text-sjsu-blue">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Fast Shipping</h3>
              <p className="text-gray-600 text-sm">Free on orders over $50</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-sjsu-gold/20 rounded-full text-sjsu-blue">
              <RotateCcw className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Easy Returns</h3>
              <p className="text-gray-600 text-sm">30-day return policy</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Shop Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#categories"
                  className="text-gray-600 hover:text-sjsu-blue"
                >
                  All Categories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-sjsu-blue">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-sjsu-blue"
                >
                  Featured Products
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-sjsu-blue">
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-sjsu-blue">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-sjsu-blue">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-sjsu-blue">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-sjsu-blue">
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>

          {/* Account Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Your Account</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sign-in"
                  className="text-gray-600 hover:text-sjsu-blue"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  href="/sign-up"
                  className="text-gray-600 hover:text-sjsu-blue"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-sjsu-blue">
                  Order History
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-sjsu-blue">
                  Track Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-sjsu-blue">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-sjsu-blue">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-sjsu-blue">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-sjsu-blue">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="text-gray-600 mb-4 md:mb-0">
            © {currentYear} SpartanShop. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-sjsu-blue">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-sjsu-blue">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-sjsu-blue">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
