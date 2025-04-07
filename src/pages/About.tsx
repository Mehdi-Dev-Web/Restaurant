import pic from "../assets/famous_japanese_chefs_featured_image.png"
import pic2 from "../assets/steptodown.com282041.jpg"
import pic3 from "../assets/Main_be_professional_chef.jpg"
import { motion } from "framer-motion"

function About() {
  return (
    <div className="w-full min-h-screen bg-lightBlack">
      <div className="w-full h-[80vh] relative overflow-hidden">
        <motion.img
          src={pic}
          alt="Background"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="w-full h-[40px] gradient-bg z-10 absolute bottom-0"></div>
        <motion.div
          className="text-orange text-6xl font-Lobster z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          About us
        </motion.div>
      </div>
      <div className="w-[90%] md:w-[50%] m-auto flex flex-col justify-center items-center text-center pb-20 text-gray-300 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl text-orange font-Lobster mb-8">The History of Glow Night</h1>
          <p className="mt-8 text-lg leading-relaxed">The idea for Glow Night was born from a deep passion for bringing people together over exceptional food and an enchanting atmosphere. From the very beginning, our goal was to create a nighttime dining experience where refined flavors meet warmth and elegance.</p>
          <p className="mt-6 text-lg leading-relaxed">Our journey started in the heart of Marrakech, a city that never sleeps, rich in culture and tradition. We wanted to add a fresh, modern touch to the city's vibrant nightlife by offering an innovative menu inspired by global cuisine while staying true to authentic flavors that reflect the spirit of the place.</p>
          <p className="mt-6 text-lg leading-relaxed">Since our opening, Glow Night has become a beloved destination for night owls and fine dining enthusiasts. Our commitment to serving outstanding dishes, providing impeccable service, and curating a stylish yet cozy ambiance has made every visit a memorable experience. Every dish we serve tells a story, and every night at Glow Night creates new memories.</p>
          <p className="mt-6 text-lg leading-relaxed">Today, we continue our mission to offer an unforgettable nighttime dining experience—where flavor, artistry, and hospitality come together in perfect harmony. Over time, Glow Night has become more than just a restaurant; it's a symbol of exceptional taste and magical nights in Marrakech.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full mt-20"
        >
          <img src={pic2} alt="Restaurant Interior" className="w-full h-[500px] object-cover rounded-lg shadow-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h1 className="text-4xl text-orange font-Lobster mb-8">Meet Our Chefs</h1>
          <p className="text-lg leading-relaxed">At Glow Night, our talented chefs are the heart of our kitchen, bringing passion, creativity, and expertise to every dish. Specializing in exquisite dinner creations, they carefully craft each meal using the finest ingredients to deliver an unforgettable dining experience. Whether it's a signature dish or a new culinary experiment, our chefs blend flavors, techniques, and artistry to make every plate a masterpiece. Their dedication to quality and innovation ensures that every night at Glow Night is a feast for the senses.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full mt-20"
        >
          <img src={pic3} alt="Our Chefs" className="w-full h-[500px] object-cover rounded-lg shadow-2xl" />
        </motion.div>
      </div>
    </div>
  )
}

export default About
