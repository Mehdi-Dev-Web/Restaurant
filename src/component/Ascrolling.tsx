import { useScroll } from "framer-motion"
import { lazy, useRef } from "react" 
import pic1 from "../assets/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation.jpg"
import pic2 from "../assets/bohemian-man-with-his-arms-crossed.jpg"
import pic3 from "../assets/handsome-young-man-with-arms-crossed-white-background.jpg"
import pic4 from "../assets/portrait-beautiful-young-woman-standing-grey-wall.jpg"
const Card = lazy(()=> import("./Card"))
function Ascrolling() {
    const ref = useRef(null)
    // only for testing
    const card = [ 

        { id: 1,
          title: 'Moor Hall',
          date: '20/05/2025',
          content: 'Glow Night is a hidden gem! The ambiance is cozy and perfect for a late dinner. The staff were super welcoming, and the pasta was hands down the best I’ve had in Marrakech. Highly recommend!', 
          image: pic1
        },
        { id: 2,
          title: 'Yassine M',
          date: '06/01/2025',
          content: 'Absolutely loved the vibe at Glow Night! The lighting, the music, the food — everything was perfect for a chill evening out. The steak was juicy and cooked just right. Will definitely come back with friends!”',
          image: pic2
        },
        { id: 3,
          title: 'Sara L',
          date: '10/09/2024',
          content: 'The best dinner spot in town! The service was friendly and quick, and the atmosphere made me feel like I was in a high-end lounge. I recommend the grilled salmon — so flavorful',
          image : pic3
        },
        { id: 4,
          title: 'Omar R',
          date: '05/06/2024',
          content: 'First time here and I’m impressed. The online reservation was smooth, and the restaurant looked even better than the pictures. Loved the creativity in the dishes. You can tell they put love into the food.',
          image : pic4
        },

    ]
    const {scrollYProgress} = useScroll({
        target: ref,
        offset : ['start start','end end']
    })
  return (
    <div ref={ref} >
        {card.map((item,index)=>{ 
            const typo = 1 - ((card.length - index )* 0.05)
          return  <Card  key={item.id} {...item} i={index} scrollYProgress={scrollYProgress} range={[index*0.25,1]} typo={typo}/> 
})}

    </div>
  )
}

export default Ascrolling