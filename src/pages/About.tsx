
import pic from "../assets/famous_japanese_chefs_featured_image.png"
import pic2 from "../assets/steptodown.com282041.jpg"
import pic3 from "../assets/Main_be_professional_chef.jpg"

function About() {
  return (
    <div className="w-full min-h-screen bg-lightBlack">
        <div className="w-full h-[80vh] relative">
            <img src={pic} alt="Background" className="w-full h-full object-cover" />
            <div className="w-full h-[40px] gradient-bg z-10 absolute bottom-0"></div>
            <div className="text-orange text-4xl translate-[-50%] font-Lobster z-10 absolute top-1/2 left-1/2">
            About us
            </div>
        </div>
        <div className="w-[90%] md:w-[50%] m-auto   flex flex-col justify-center items-center text-center pb-10 text-gray-300 mt-40">
          <h1 className="text-5xl text-orange">The History of Glow Night</h1>
          <p className="mt-8 text-sm ">The idea for Glow Night was born from a deep passion for bringing people together over exceptional food and an enchanting atmosphere. From the very beginning, our goal was to create a nighttime dining experience where refined flavors meet warmth and elegance.  </p>
          <p className="mt-6 text-sm ">Our journey started in the heart of Marrakech, a city that never sleeps, rich in culture and tradition. We wanted to add a fresh, modern touch to the city’s vibrant nightlife by offering an innovative menu inspired by global cuisine while staying true to authentic flavors that reflect the spirit of the place.</p>
          <p className="mt-6 text-sm "> Since our opening, Glow Night has become a beloved destination for night owls and fine dining enthusiasts. Our commitment to serving outstanding dishes, providing impeccable service, and curating a stylish yet cozy ambiance has made every visit a memorable experience. Every dish we serve tells a story, and every night at Glow Night creates new memories. </p>
          <p className="mt-6 text-sm ">Today, we continue our mission to offer an unforgettable nighttime dining experience—where flavor, artistry, and hospitality come together in perfect harmony. Over time, Glow Night has become more than just a restaurant; it’s a symbol of exceptional taste and magical nights in Marrakech.</p>
          {/* <p className="mt-6 text-sm ">Step into the night. Step into <span className="text-white cursor-pointer">Glow Night</span>.</p> */}
          <img src={pic2} alt="" className="w-full object-cover mt-6" />
          <h1 className="text-3xl mt-6 text-orange">Meet Our Chefs</h1>
          <p className="mt-8 text-sm ">At Glow Night, our talented chefs are the heart of our kitchen, bringing passion, creativity, and expertise to every dish. Specializing in exquisite dinner creations, they carefully craft each meal using the finest ingredients to deliver an unforgettable dining experience. Whether it's a signature dish or a new culinary experiment, our chefs blend flavors, techniques, and artistry to make every plate a masterpiece. Their dedication to quality and innovation ensures that every night at Glow Night is a feast for the senses. </p>
          <img src={pic3} alt="" className="w-full object-cover mt-6" />
          



        </div>

    </div>
  )
}

export default About
// The History of Glow Night – A Journey from Passion to Brilliance
// The idea for Glow Night was born from a deep passion for bringing people together over exceptional food and an enchanting atmosphere. From the very beginning, our goal was to create a nighttime dining experience where refined flavors meet warmth and elegance.

// Our journey started in the heart of Marrakech, a city that never sleeps, rich in culture and tradition. We wanted to add a fresh, modern touch to the city’s vibrant nightlife by offering an innovative menu inspired by global cuisine while staying true to authentic flavors that reflect the spirit of the place.

// Since our opening, Glow Night has become a beloved destination for night owls and fine dining enthusiasts. Our commitment to serving outstanding dishes, providing impeccable service, and curating a stylish yet cozy ambiance has made every visit a memorable experience. Every dish we serve tells a story, and every night at Glow Night creates new memories.

// Today, we continue our mission to offer an unforgettable nighttime dining experience—where flavor, artistry, and hospitality come together in perfect harmony. Over time, Glow Night has become more than just a restaurant; it’s a symbol of exceptional taste and magical nights in Marrakech.

// Join us and be part of the story—experience the brilliance of the night at Glow Night!
{/* <h1 className="text-5xl text-orange">Glow Night – Where Flavor Meets the Night</h1>
<p className="mt-8 text-sm ">Nestled in the heart of Marrakech, Glow Night is more than just a restaurant—it’s an experience. As the sun sets and the city lights flicker to life, we open our doors to welcome night owls, food lovers, and those looking to indulge in an unforgettable evening.</p>
<p className="mt-6 text-sm ">At Glow Night, we believe that dining should be more than just a meal—it should be a journey of taste and atmosphere. Our carefully curated menu blends classic flavors with modern creativity, offering a selection of expertly crafted dishes designed to impress. From our signature gourmet burgers to sizzling grilled meats and fresh, seasonal specialties, every bite is infused with passion and precision.</p>
<p className="mt-6 text-sm ">But the experience doesn’t stop at the food. Our stylish, dimly lit ambiance sets the perfect mood for intimate dinners, lively gatherings, or late-night indulgence. Whether you’re sipping on handcrafted cocktails, sharing a meal with friends, or celebrating a special occasion, Glow Night promises an evening of warmth, flavor, and sophistication.</p>
<p className="mt-6 text-sm ">Step into the night. Step into <span className="text-white cursor-pointer">Glow Night</span>.</p> */}
