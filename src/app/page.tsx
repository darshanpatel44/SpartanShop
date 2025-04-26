import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  ShoppingBag,
  Truck,
  CreditCard,
  Package,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";
import { createClient } from "../../supabase/server";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Sample featured products - in a real app, these would come from the database
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Headphones",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
      category: "Electronics",
    },
    {
      id: 2,
      name: "Minimalist Watch",
      price: 149.99,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
      category: "Accessories",
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
      category: "Clothing",
    },
    {
      id: 4,
      name: "Smart Home Speaker",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1558089687-f282ffcbc0d4?w=400&q=80",
      category: "Electronics",
    },
  ];

  // Sample categories
  const categories = [
    { name: "Electronics", icon: <Sparkles className="w-6 h-6" />, count: 42 },
    { name: "Clothing", icon: <ShoppingBag className="w-6 h-6" />, count: 56 },
    {
      name: "Home & Kitchen",
      icon: <Package className="w-6 h-6" />,
      count: 38,
    },
    { name: "Accessories", icon: <Clock className="w-6 h-6" />, count: 24 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our wide selection of products across popular categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 hover:border-blue-200 cursor-pointer"
              >
                <div className="text-blue-600 mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.count} products</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link
              href="/dashboard"
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              View All <ArrowUpRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="aspect-square relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-sm text-blue-600 mb-1">
                    {product.category}
                  </div>
                  <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">${product.price}</span>
                    <button className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Shop With Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide an exceptional shopping experience with features
              designed for your convenience and peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Truck className="w-6 h-6" />,
                title: "Fast Delivery",
                description:
                  "Free shipping on orders over $50 with quick delivery to your doorstep",
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Secure Payments",
                description:
                  "Multiple payment options with bank-level security for all transactions",
              },
              {
                icon: <Package className="w-6 h-6" />,
                title: "Quality Products",
                description:
                  "Curated selection of high-quality products from trusted brands",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Create an account today and get access to exclusive deals and
            personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="inline-flex items-center px-6 py-3 text-sjsu-blue bg-white rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Create Account
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center px-6 py-3 text-white bg-transparent border border-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Browse Products
              <ShoppingBag className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
