import Image from "next/image";
const Features = () => {
  return (
    <div className="grid sm:grid-cols-4 grid-cols-1 gap-8 px-5 py-8">
      {/* Feature 1: High Quality Protection */}
      <div className="flex items-center text-left">
        <Image
        width={500}
        height={500}
          src="/images/cart/trophy.png" 
          alt="High Quality Protection" 
          className="w-12 h-12 mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold mb-1">High Quality Protection</h3>
          <p className="text-gray-600">Crafted from top materials</p>
        </div>
      </div>

      {/* Feature 2: Warranty Protection */}
      <div className="flex items-center text-left">
        <Image
        width={500}
        height={500}
          src="/images/cart/check.png" 
          alt="Warranty Protection" 
          className="w-12 h-12 mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold mb-1">Warranty Protection</h3>
          <p className="text-gray-600">Over 2 years</p>
        </div>
      </div>

      {/* Feature 3: Free Shipping */}
      <div className="flex items-center text-left">
        <Image
          width={500}
          height={500}
          src="/images/cart/free.png" 
          alt="Free Shipping" 
          className="w-12 h-12 mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold mb-1">Free Shipping</h3>
          <p className="text-gray-600">Order over 150$</p>
        </div>
      </div>

      {/* Feature 4: 24/7 Support */}
      <div className="flex items-center text-left">
        <Image
        width={500}
        height={500}
          src="/images/cart/support.png" 
          alt="24/7 Support" 
          className="w-12 h-12 mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold mb-1">24/7 Support</h3>
          <p className="text-gray-600">Dedicated Support</p>
        </div>
      </div>
    </div>
  );
};

export default Features;

