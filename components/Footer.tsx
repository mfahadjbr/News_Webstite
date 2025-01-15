import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const categories = [
    'International',
    'Regional',
    'Politics',
    'Business',
    'Sports',
    'Health'
  ]

  const company = [
    'About Us',
    'Careers',
    'Privacy Policy',
    'Terms Of Services',
    'Contact Us'
  ]

  const social = [
    'Youtube',
    'Instagram',
    'Facebook',
    'Twitter'
  ]

  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/logo.svg" 
              alt="Logo"
              width={150}
              height={40}
            />
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-[#3B9EFF]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-[#3B9EFF]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Social Media</h3>
            <ul className="space-y-2">
              {social.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-[#3B9EFF]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

