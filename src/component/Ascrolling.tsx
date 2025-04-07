import { useScroll } from "framer-motion"
import { lazy, useRef } from "react" 
const Card = lazy(()=> import("./Card"))
function Ascrolling() {
    const ref = useRef(null)
    // only for testing
    const card = [ 

        { id: 1, title: 'Moor Hall, Lancashire', content: 'Moor Hall, located near Liverpool, recently earned its third Michelin star. Chef Mark Birchall offers an 18-course tasting menu that includes dishes like Devon beef aged 80 days and Ormskirk gingerbread ice cream. The venue also features seven sustainable garden suites with private hot tubs. ', color : '#FFD700' },
        { id: 2, title: 'The Bull, Burford', content: 'Card 2 content', color : '#FFD700' },
        { id: 3, title: 'Card 3', content: 'Card 3 content', color : '#FFD700' },
        { id: 4, title: 'Card 4', content: 'Card 4 content', color : '#FFD700' },

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