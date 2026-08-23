import Image from "next/image";
import Link from "next/link";
import ProductGallery from "@/components/ProductGallery";
import ProductOptions from "@/components/ProductOptions";
import ProductReviews from "@/components/ProductReviews";
import { getProductBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import { Metadata } from 'next';

export const revalidate = 15;

interface ProductSeoInfo {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  firstParagraph: string;
  category: string;
  jsonLdGraph?: any;
}

const SPECIFIC_SEO_CONFIG: Record<string, ProductSeoInfo> = {
  "ergowellness-smart-posture-corrector-vibration-alert": {
    metaTitle: "Smart Posture Corrector with Vibration Alert | ErgoWellness",
    metaDescription: "Shop the ErgoWellness Smart Posture Corrector with vibration alert. A discreet, adjustable wearable designed to provide gentle posture reminders throughout your day.",
    h1: "Smart Posture Corrector with Vibration Alert",
    firstParagraph: "The ErgoWellness Smart Posture Corrector with Vibration Alert is a discreet, adjustable wearable designed to increase posture awareness throughout the day. A gentle vibration provides a reminder when your posture changes, making it suitable for desk work, home offices, studying and everyday activities.",
    category: "Posture Correctors",
    jsonLdGraph: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Brand",
          "@id": "https://www.getergowellness.com/#brand",
          "name": "ErgoWellness",
          "url": "https://www.getergowellness.com/"
        },
        {
          "@type": "Product",
          "@id": "https://www.getergowellness.com/shop/ergowellness-smart-posture-corrector-vibration-alert#product",
          "name": "ErgoWellness Smart Posture Corrector with Vibration Alert",
          "url": "https://www.getergowellness.com/shop/ergowellness-smart-posture-corrector-vibration-alert",
          "description": "The ErgoWellness Smart Posture Corrector with Vibration Alert is a discreet, adjustable wearable designed to provide gentle posture reminders throughout the day.",
          "brand": {
            "@id": "https://www.getergowellness.com/#brand"
          },
          "category": "Posture Correctors",
          "material": "Polyester",
          "additionalProperty": [
            {
              "@type": "PropertyValue",
              "name": "Alert Type",
              "value": "Vibration"
            },
            {
              "@type": "PropertyValue",
              "name": "Available Sizes",
              "value": "S, M, L, XL"
            }
          ],
          "offers": {
            "@type": "Offer",
            "url": "https://www.getergowellness.com/shop/ergowellness-smart-posture-corrector-vibration-alert",
            "priceCurrency": "USD",
            "price": "50.00",
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition",
            "seller": {
              "@id": "https://www.getergowellness.com/#brand"
            }
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.getergowellness.com/shop/ergowellness-smart-posture-corrector-vibration-alert#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.getergowellness.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Shop",
              "item": "https://www.getergowellness.com/shop/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Posture Correctors",
              "item": "https://www.getergowellness.com/shop"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Smart Posture Corrector with Vibration Alert",
              "item": "https://www.getergowellness.com/shop/ergowellness-smart-posture-corrector-vibration-alert"
            }
          ]
        },
        {
          "@type": "WebPage",
          "@id": "https://www.getergowellness.com/shop/ergowellness-smart-posture-corrector-vibration-alert#webpage",
          "url": "https://www.getergowellness.com/shop/ergowellness-smart-posture-corrector-vibration-alert",
          "name": "Smart Posture Corrector with Vibration Alert | ErgoWellness",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://www.getergowellness.com/#website"
          },
          "mainEntity": {
            "@id": "https://www.getergowellness.com/shop/ergowellness-smart-posture-corrector-vibration-alert#product"
          },
          "breadcrumb": {
            "@id": "https://www.getergowellness.com/shop/ergowellness-smart-posture-corrector-vibration-alert#breadcrumb"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://www.getergowellness.com/#website",
          "url": "https://www.getergowellness.com/",
          "name": "ErgoWellness",
          "publisher": {
            "@id": "https://www.getergowellness.com/#brand"
          }
        }
      ]
    }
  },
  "ergowellness-pro-vertical-mouse-wrist-pain-relief": {
    metaTitle: "Ergonomic Vertical Mouse for Comfortable Computing | ErgoWellness",
    metaDescription: "Shop the ErgoWellness Pro Vertical Mouse, an ergonomic mouse designed for a more natural hand position and comfortable everyday computer use at home or work.",
    h1: "ErgoWellness Pro Vertical Ergonomic Mouse",
    firstParagraph: "The ErgoWellness Pro Vertical Ergonomic Mouse is designed to support a more natural hand and wrist position while you work, browse or study. Its vertical design provides an alternative to a traditional mouse, making it a practical ergonomic choice for everyday computer use at home or in the office.",
    category: "Ergonomic Mice",
    jsonLdGraph: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Brand",
          "@id": "https://www.getergowellness.com/#brand",
          "name": "ErgoWellness",
          "url": "https://www.getergowellness.com/"
        },
        {
          "@type": "Product",
          "@id": "https://www.getergowellness.com/shop/ergowellness-pro-vertical-mouse-wrist-pain-relief#product",
          "name": "ErgoWellness Pro Vertical Ergonomic Mouse",
          "url": "https://www.getergowellness.com/shop/ergowellness-pro-vertical-mouse-wrist-pain-relief",
          "description": "The ErgoWellness Pro Vertical Ergonomic Mouse is designed to provide an alternative to a traditional mouse with a vertical design intended to support a more natural hand position during everyday computer use.",
          "brand": {
            "@id": "https://www.getergowellness.com/#brand"
          },
          "category": "Ergonomic Mice",
          "offers": {
            "@type": "Offer",
            "url": "https://www.getergowellness.com/shop/ergowellness-pro-vertical-mouse-wrist-pain-relief",
            "priceCurrency": "USD",
            "price": "35.00",
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition",
            "seller": {
              "@id": "https://www.getergowellness.com/#brand"
            }
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.getergowellness.com/shop/ergowellness-pro-vertical-mouse-wrist-pain-relief#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.getergowellness.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Shop",
              "item": "https://www.getergowellness.com/shop/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Ergonomic Mice",
              "item": "https://www.getergowellness.com/shop"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "ErgoWellness Pro Vertical Ergonomic Mouse",
              "item": "https://www.getergowellness.com/shop/ergowellness-pro-vertical-mouse-wrist-pain-relief"
            }
          ]
        },
        {
          "@type": "WebPage",
          "@id": "https://www.getergowellness.com/shop/ergowellness-pro-vertical-mouse-wrist-pain-relief#webpage",
          "url": "https://www.getergowellness.com/shop/ergowellness-pro-vertical-mouse-wrist-pain-relief",
          "name": "Ergonomic Vertical Mouse for Comfortable Computing | ErgoWellness",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://www.getergowellness.com/#website"
          },
          "mainEntity": {
            "@id": "https://www.getergowellness.com/shop/ergowellness-pro-vertical-mouse-wrist-pain-relief#product"
          },
          "breadcrumb": {
            "@id": "https://www.getergowellness.com/shop/ergowellness-pro-vertical-mouse-wrist-pain-relief#breadcrumb"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://www.getergowellness.com/#website",
          "url": "https://www.getergowellness.com/",
          "name": "ErgoWellness",
          "publisher": {
            "@id": "https://www.getergowellness.com/#brand"
          }
        }
      ]
    }
  },
  "ergowellness-premium-aluminum-laptop-riser": {
    metaTitle: "Aluminium Laptop Stand & Adjustable Laptop Riser | ErgoWellness",
    metaDescription: "Shop the ErgoWellness Premium Aluminium Laptop Stand, featuring an adjustable angle, folding design, heat-dissipating construction and compatibility with laptops and tablets up to 15 inches.",
    h1: "Premium Aluminium Laptop Stand & Adjustable Laptop Riser",
    firstParagraph: "The ErgoWellness Premium Aluminium Laptop Stand is a foldable, adjustable laptop riser designed to create a more comfortable and organised workspace. Made from aluminium alloy, it features an adjustable angle, open design for heat dissipation and compatibility with laptops and tablets up to 15 inches.",
    category: "Laptop Stands",
    jsonLdGraph: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Brand",
          "@id": "https://www.getergowellness.com/#brand",
          "name": "ErgoWellness",
          "url": "https://www.getergowellness.com/"
        },
        {
          "@type": "Product",
          "@id": "https://www.getergowellness.com/shop/ergowellness-premium-aluminum-laptop-riser#product",
          "name": "Premium Aluminium Laptop Stand & Adjustable Laptop Riser",
          "url": "https://www.getergowellness.com/shop/ergowellness-premium-aluminum-laptop-riser",
          "description": "The ErgoWellness Premium Aluminium Laptop Stand is a foldable, adjustable laptop riser designed to create a more comfortable and organised workspace.",
          "brand": {
            "@id": "https://www.getergowellness.com/#brand"
          },
          "category": "Laptop Stands",
          "offers": {
            "@type": "Offer",
            "url": "https://www.getergowellness.com/shop/ergowellness-premium-aluminum-laptop-riser",
            "priceCurrency": "USD",
            "price": "45.00",
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition",
            "seller": {
              "@id": "https://www.getergowellness.com/#brand"
            }
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.getergowellness.com/shop/ergowellness-premium-aluminum-laptop-riser#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.getergowellness.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Shop",
              "item": "https://www.getergowellness.com/shop/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Laptop Stands",
              "item": "https://www.getergowellness.com/shop"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Premium Aluminium Laptop Stand & Adjustable Laptop Riser",
              "item": "https://www.getergowellness.com/shop/ergowellness-premium-aluminum-laptop-riser"
            }
          ]
        },
        {
          "@type": "WebPage",
          "@id": "https://www.getergowellness.com/shop/ergowellness-premium-aluminum-laptop-riser#webpage",
          "url": "https://www.getergowellness.com/shop/ergowellness-premium-aluminum-laptop-riser",
          "name": "Aluminium Laptop Stand & Adjustable Laptop Riser | ErgoWellness",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://www.getergowellness.com/#website"
          },
          "mainEntity": {
            "@id": "https://www.getergowellness.com/shop/ergowellness-premium-aluminum-laptop-riser#product"
          },
          "breadcrumb": {
            "@id": "https://www.getergowellness.com/shop/ergowellness-premium-aluminum-laptop-riser#breadcrumb"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://www.getergowellness.com/#website",
          "url": "https://www.getergowellness.com/",
          "name": "ErgoWellness",
          "publisher": {
            "@id": "https://www.getergowellness.com/#brand"
          }
        }
      ]
    }
  }
};

function getSeoForProduct(slug: string, product: any): ProductSeoInfo {
  for (const [key, seo] of Object.entries(SPECIFIC_SEO_CONFIG)) {
    if (slug === key || slug.includes(key) || key.includes(slug)) {
      return seo;
    }
  }

  if (slug.includes('posture-corrector') || slug.includes('vibration')) {
    return SPECIFIC_SEO_CONFIG['ergowellness-smart-posture-corrector-vibration-alert'];
  }
  if (slug.includes('vertical-mouse') || slug.includes('mouse')) {
    return SPECIFIC_SEO_CONFIG['ergowellness-pro-vertical-mouse-wrist-pain-relief'];
  }
  if (slug.includes('laptop') || slug.includes('riser') || slug.includes('stand')) {
    return SPECIFIC_SEO_CONFIG['ergowellness-premium-aluminum-laptop-riser'];
  }

  const cleanDesc = product?.description ? product.description.replace(/<[^>]*>?/gm, '').trim() : '';
  const firstSentence = cleanDesc ? (cleanDesc.split('.')[0] + '.') : `${product?.name || 'This product'} is designed to support better workplace posture and ergonomics.`;

  return {
    metaTitle: `${product?.name || 'Ergonomic Product'} | ErgoWellness`,
    metaDescription: cleanDesc.substring(0, 155) || `Shop ${product?.name || 'ergonomic products'} at ErgoWellness for superior posture support and desk comfort.`,
    h1: product?.name || 'Ergonomic Product',
    firstParagraph: firstSentence,
    category: "Ergonomic Gear"
  };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = await getProductBySlug(resolvedParams.slug);
  
  if (!product) return { title: 'Product Not Found | ErgoWellness' };

  const seo = getSeoForProduct(resolvedParams.slug, product);

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      url: `https://www.getergowellness.com/shop/${resolvedParams.slug}`,
      siteName: "ErgoWellness",
      images: [product.image?.sourceUrl || '/hero-product.jpg'],
    },
  };
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = await getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const seo = getSeoForProduct(resolvedParams.slug, product);

  const createMarkup = (html: string) => {
    return { __html: html };
  };

  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  const galleryImages: string[] = [];
  let match;
  while ((match = imgRegex.exec(product.description || '')) !== null) {
    if (match[1] && !match[1].includes('data:image')) {
      galleryImages.push(match[1]);
    }
  }

  const cleanDescription = product.description 
    ? product.description.replace(/<img[^>]*>/gi, '') 
    : '';

  const jsonLd = seo.jsonLdGraph || {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: seo.h1,
    image: product.image?.sourceUrl || 'https://www.getergowellness.com/hero-product.jpg',
    description: seo.metaDescription,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: product.price ? product.price.replace(/[^0-9.]/g, '') : '0.00',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'ErgoWellness'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '124'
    }
  };

  return (
    <div className="flex flex-col font-sans w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs for SEO */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 w-full">
          <div className="text-sm text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-brand-primary">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-brand-primary">Shop</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">{seo.h1}</span>
          </div>
        </div>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-16">
          <div className="flex flex-col md:flex-row">
            
            {/* Interactive Product Image Gallery */}
            <ProductGallery 
              mainImage={product.image?.sourceUrl || "/hero-product.jpg"} 
              altText={product.image?.altText || seo.h1} 
              galleryImages={galleryImages} 
            />

            {/* Product Info & Buy Box */}
            <div className="md:w-1/2 p-8 lg:p-12">
              <span className="text-green-600 font-bold tracking-wider text-sm uppercase mb-3 flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                In Stock & Ready to Ship
              </span>
              
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 leading-tight">
                {seo.h1}
              </h1>
              
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-lg">★★★★★</div>
                <span className="text-slate-600 text-sm ml-2 font-medium underline cursor-pointer">4.8 (124 Reviews)</span>
              </div>

              {/* SEO First Paragraph right under H1 & Rating */}
              {seo.firstParagraph && (
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {seo.firstParagraph}
                </p>
              )}

              <ProductOptions product={product} />
            </div>
          </div>
          
          {/* Full-width Description Section */}
          {cleanDescription && cleanDescription.trim().length > 10 && (
            <div className="border-t border-slate-100 bg-white p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Product Details</h2>
              <div 
                className="text-slate-600 text-base leading-relaxed prose prose-slate max-w-none w-full"
                dangerouslySetInnerHTML={createMarkup(cleanDescription)}
              />
            </div>
          )}
        </div>

        {/* Product Reviews Section */}
        <div className="mt-16">
          <ProductReviews productSlug={product.slug} />
        </div>

        {/* SEO FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex justify-between items-center cursor-pointer">
                How quickly will this relieve my pain?
                <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2">Many customers report feeling relief within the first 1-2 hours of use. For long-term postural correction and chronic pain relief, consistent daily use over 2-3 weeks is recommended to rebuild muscle memory.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex justify-between items-center cursor-pointer">
                Is this suitable for all body types?
                <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2">Yes, our ergonomic solutions feature highly adjustable straps and universal sizing to comfortably fit chest sizes ranging from 28 to 48 inches.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex justify-between items-center cursor-pointer">
                Can I wear this under my work clothes?
                <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2">Absolutely. The slim-profile, breathable material is designed to be completely invisible under a standard office button-down shirt or blouse.</p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
