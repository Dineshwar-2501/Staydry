"use client"
import FaceDragMenu from "@/utilities/FaceDragMenu"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export default function Page() {
  const screenRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: scrolly1 } = useScroll({     // scroll y progress 0 ->  1
    target: screenRef,
    offset: ["start start", "end end"]

  })

  const text1Opacity = useTransform(scrolly1, [0, 0.1, 0.2], [1, 0.6, 0])
  const text2Opacity = useTransform(scrolly1, [0.2, 0.3, 0.4], [0, 1, 0])
  const text3Opacity = useTransform(scrolly1, [0.4, 0.5, 0.6], [0, 1, 0])
  const text4Opacity = useTransform(scrolly1, [0.6, 0.7, 0.8], [0, 1, 0.5])
  const text5Opacity = useTransform(scrolly1, [0.8, 0.9, 1], [0, 1, 1])
  // const text6Opacity = useTransform(scrolly1, [0., 0.8, 0.9], [0, 1, 0])

  const text1Y = useTransform(scrolly1, [0, 0.1, 0.2], [100, 0, -100])
  const text2Y = useTransform(scrolly1, [0.2, 0.3, 0.4], [100, 0, -100])
  const text3Y = useTransform(scrolly1, [0.4, 0.5, 0.6], [100, 0, -100])
  const text4Y = useTransform(scrolly1, [0.6, 0.7, 0.8], [100, 0, -100])
  const text5Y = useTransform(scrolly1, [0.8, 0.9, 1], [100, 0, -100])
  // const text6Y = useTransform(scrolly1, [0.7, 0.8, 0.9], [50, 0,-50])
  return (
    <>
      <div ref={screenRef} className="h-[600vh] bg-neutral-700 scroll-auto" >
        <FaceDragMenu screenRef={screenRef} />
        <div className=" sticky top-0  grid grid-cols-1 lg:grid-cols-2 grid-rows-6 gap-5 ">
          <motion.div style={{ y: text1Y, opacity: text1Opacity }} className="text-white font-bold  col-start-1 row-start-1 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate porro, expedita ipsam ex fugiat, consectetur officiis, aut asperiores voluptas mollitia soluta quod ullam eaque quasi a? Ducimus dolor commodi incidunt eveniet aut dignissimos voluptas distinctio soluta impedit neque dolorum velit a, est quam quis delectus provident harum voluptates laudantium necessitatibus cum maximum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quia, similique quos, ad nam quidem tempora sunt accusantium culpa officia praesentium? Quasi id voluptate quae, repellendus reprehenderit nemo recusandae aut deserunt consectetur officia minima molestiae fuga. Quas pariatur voluptatum sed, a non ut, neque distinctio ipsam quasi vitae sapiente quod eaque eveniet voluptate soluta asperiores odio modi magni obcaecati maxime provident quia eius! Blanditiis, deleniti quis! Aut quia in totam a eos aliquid provident, excepturi necessitatibus adipisci ratione! Voluptatem iusto, dolorem consequatur quis quasi repudiandae quia labore ad ipsum fugiat rerum veritatis placeat delectus esse expedita possimus laboriosam tempore. Sunt quod, perspiciatis esse labore quo animi, debitis, maxime quae eligendi exercitationem sed cumque amet eveniet blanditiis? Error ea nobis, quos culpa reprehenderit, maiores suscipit vero possimus molestias aliquid assumenda cum repellendus! Quos consequuntur libero blanditiis, doloribus asperiores at suscipit officia pariatur cupiditate deserunt laudantium, corrupti fugit repudiandae labore voluptatibus repellat iusto autem ad nostrum. Dolore, nesciunt ipsa voluptates eligendi illo labore veritatis aspernatur officiis. Quia sapiente ratione temporibus atque aliquid aut accusamus eius fugit qui culpa nemo ab, esse tempore fugiat ex odit quasi, saepe nostrum at dolores quidem! Quae deleniti fugiat beatae doloribus adipisci animi doloremque quam possimus sunt!</motion.div>

          <motion.div style={{ y: text1Y, opacity: text1Opacity }} className="col-start-2 row-start-1">
            <Image alt="image" src={'/Images/Bed-og.webp'} width={600} height={200} />
          </motion.div>

          <motion.div style={{ y: text2Y, opacity: text2Opacity }} className="text-white font-bold  col-start-2 row-start-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate porro, expedita ipsam ex fugiat, consectetur officiis, aut asperiores voluptas mollitia soluta quod ullam eaque quasi a? Ducimus dolor commodi incidunt eveniet aut dignissimos voluptas distinctio soluta impedit neque dolorum velit a, est quam quis delectus provident harum voluptates laudantium necessitatibus cum maximum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quia, similique quos, ad nam quidem tempora sunt accusantium culpa officia praesentium? Quasi id voluptate quae, repellendus reprehenderit nemo recusandae aut deserunt consectetur officia minima molestiae fuga. Quas pariatur voluptatum sed, a non ut, neque distinctio ipsam quasi vitae sapiente quod eaque eveniet voluptate soluta asperiores odio modi magni obcaecati maxime provident quia eius! Blanditiis, deleniti quis! Aut quia in totam a eos aliquid provident, excepturi necessitatibus adipisci ratione! Voluptatem iusto, dolorem consequatur quis quasi repudiandae quia labore ad ipsum fugiat rerum veritatis placeat delectus esse expedita possimus laboriosam tempore. Sunt quod, perspiciatis esse labore quo animi, debitis, maxime quae eligendi exercitationem sed cumque amet eveniet blanditiis? Error ea nobis, quos culpa reprehenderit, maiores suscipit vero possimus molestias aliquid assumenda cum repellendus! Quos consequuntur libero blanditiis, doloribus asperiores at suscipit officia pariatur cupiditate deserunt laudantium, corrupti fugit repudiandae labore voluptatibus repellat iusto autem ad nostrum. Dolore, nesciunt ipsa voluptates eligendi illo labore veritatis aspernatur officiis. Quia sapiente ratione temporibus atque aliquid aut accusamus eius fugit qui culpa nemo ab, esse tempore fugiat ex odit quasi, saepe nostrum at dolores quidem! Quae deleniti fugiat beatae doloribus adipisci animi doloremque quam possimus sunt!</motion.div>

          <motion.div style={{ y: text2Y, opacity: text2Opacity }} className="col-start-1 row-start-2">
            <Image alt="image" src={'/Images/Bed-og.webp'} width={600} height={200} />
          </motion.div>

          <motion.div style={{ y: text3Y, opacity: text3Opacity }} className="text-white font-bold  col-start-1 row-start-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate porro, expedita ipsam ex fugiat, consectetur officiis, aut asperiores voluptas mollitia soluta quod ullam eaque quasi a? Ducimus dolor commodi incidunt eveniet aut dignissimos voluptas distinctio soluta impedit neque dolorum velit a, est quam quis delectus provident harum voluptates laudantium necessitatibus cum maximum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quia, similique quos, ad nam quidem tempora sunt accusantium culpa officia praesentium? Quasi id voluptate quae, repellendus reprehenderit nemo recusandae aut deserunt consectetur officia minima molestiae fuga. Quas pariatur voluptatum sed, a non ut, neque distinctio ipsam quasi vitae sapiente quod eaque eveniet voluptate soluta asperiores odio modi magni obcaecati maxime provident quia eius! Blanditiis, deleniti quis! Aut quia in totam a eos aliquid provident, excepturi necessitatibus adipisci ratione! Voluptatem iusto, dolorem consequatur quis quasi repudiandae quia labore ad ipsum fugiat rerum veritatis placeat delectus esse expedita possimus laboriosam tempore. Sunt quod, perspiciatis esse labore quo animi, debitis, maxime quae eligendi exercitationem sed cumque amet eveniet blanditiis? Error ea nobis, quos culpa reprehenderit, maiores suscipit vero possimus molestias aliquid assumenda cum repellendus! Quos consequuntur libero blanditiis, doloribus asperiores at suscipit officia pariatur cupiditate deserunt laudantium, corrupti fugit repudiandae labore voluptatibus repellat iusto autem ad nostrum. Dolore, nesciunt ipsa voluptates eligendi illo labore veritatis aspernatur officiis. Quia sapiente ratione temporibus atque aliquid aut accusamus eius fugit qui culpa nemo ab, esse tempore fugiat ex odit quasi, saepe nostrum at dolores quidem! Quae deleniti fugiat beatae doloribus adipisci animi doloremque quam possimus sunt!</motion.div>

          <motion.div style={{ y: text3Y, opacity: text3Opacity }} className="col-start-2 row-start-3">
            <Image alt="image" src={'/Images/Bed-og.webp'} width={600} height={200} />
          </motion.div>

          <motion.div style={{ y: text4Y, opacity: text4Opacity }} className="text-white font-bold  col-start-2 row-start-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate porro, expedita ipsam ex fugiat, consectetur officiis, aut asperiores voluptas mollitia soluta quod ullam eaque quasi a? Ducimus dolor commodi incidunt eveniet aut dignissimos voluptas distinctio soluta impedit neque dolorum velit a, est quam quis delectus provident harum voluptates laudantium necessitatibus cum maximum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quia, similique quos, ad nam quidem tempora sunt accusantium culpa officia praesentium? Quasi id voluptate quae, repellendus reprehenderit nemo recusandae aut deserunt consectetur officia minima molestiae fuga. Quas pariatur voluptatum sed, a non ut, neque distinctio ipsam quasi vitae sapiente quod eaque eveniet voluptate soluta asperiores odio modi magni obcaecati maxime provident quia eius! Blanditiis, deleniti quis! Aut quia in totam a eos aliquid provident, excepturi necessitatibus adipisci ratione! Voluptatem iusto, dolorem consequatur quis quasi repudiandae quia labore ad ipsum fugiat rerum veritatis placeat delectus esse expedita possimus laboriosam tempore. Sunt quod, perspiciatis esse labore quo animi, debitis, maxime quae eligendi exercitationem sed cumque amet eveniet blanditiis? Error ea nobis, quos culpa reprehenderit, maiores suscipit vero possimus molestias aliquid assumenda cum repellendus! Quos consequuntur libero blanditiis, doloribus asperiores at suscipit officia pariatur cupiditate deserunt laudantium, corrupti fugit repudiandae labore voluptatibus repellat iusto autem ad nostrum. Dolore, nesciunt ipsa voluptates eligendi illo labore veritatis aspernatur officiis. Quia sapiente ratione temporibus atque aliquid aut accusamus eius fugit qui culpa nemo ab, esse tempore fugiat ex odit quasi, saepe nostrum at dolores quidem! Quae deleniti fugiat beatae doloribus adipisci animi doloremque quam possimus sunt!</motion.div>

          <motion.div style={{ y: text4Y, opacity: text4Opacity }} className="col-start-1 row-start-4">
            <Image alt="image" src={'/Images/Bed-og.webp'} width={600} height={200} />
          </motion.div>

          <motion.div style={{ y: text5Y, opacity: text5Opacity }} className="text-white font-bold  col-start-1 row-start-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate porro, expedita ipsam ex fugiat, consectetur officiis, aut asperiores voluptas mollitia soluta quod ullam eaque quasi a? Ducimus dolor commodi incidunt eveniet aut dignissimos voluptas distinctio soluta impedit neque dolorum velit a, est quam quis delectus provident harum voluptates laudantium necessitatibus cum maximum Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quia, similique quos, ad nam quidem tempora sunt accusantium culpa officia praesentium? Quasi id voluptate quae, repellendus reprehenderit nemo recusandae aut deserunt consectetur officia minima molestiae fuga. Quas pariatur voluptatum sed, a non ut, neque distinctio ipsam quasi vitae sapiente quod eaque eveniet voluptate soluta asperiores odio modi magni obcaecati maxime provident quia eius! Blanditiis, deleniti quis! Aut quia in totam a eos aliquid provident, excepturi necessitatibus adipisci ratione! Voluptatem iusto, dolorem consequatur quis quasi repudiandae quia labore ad ipsum fugiat rerum veritatis placeat delectus esse expedita possimus laboriosam tempore. Sunt quod, perspiciatis esse labore quo animi, debitis, maxime quae eligendi exercitationem sed cumque amet eveniet blanditiis? Error ea nobis, quos culpa reprehenderit, maiores suscipit vero possimus molestias aliquid assumenda cum repellendus! Quos consequuntur libero blanditiis, doloribus asperiores at suscipit officia pariatur cupiditate deserunt laudantium, corrupti fugit repudiandae labore voluptatibus repellat iusto autem ad nostrum. Dolore, nesciunt ipsa voluptates eligendi illo labore veritatis aspernatur officiis. Quia sapiente ratione temporibus atque aliquid aut accusamus eius fugit qui culpa nemo ab, esse tempore fugiat ex odit quasi, saepe nostrum at dolores quidem! Quae deleniti fugiat beatae doloribus adipisci animi doloremque quam possimus sunt!.</motion.div>

          <motion.div style={{ y: text5Y, opacity: text5Opacity }} className="col-start-2 row-start-5">
            <Image alt="image" src={'/Images/Bed-og.webp'} width={600} height={200} />
          </motion.div>

          {/* <motion.div style={{ y: text6Y , opacity:text1Opacity }} className="text-white font-bold  col-start-2  row-start-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate porro, expedita ipsam ex fugiat, consectetur officiis, aut asperiores voluptas mollitia soluta quod ullam eaque quasi a? Ducimus dolor commodi incidunt eveniet aut dignissimos voluptas distinctio soluta impedit neque dolorum velit a, est quam quis delectus provident harum voluptates laudantium necessitatibus cum maximum.</motion.div>
            <motion.div style={{ y: text6Y , opacity:text1Opacity }}> className="col-start-1 row-start-6"
              // <Image alt="image" src={'/Images/Bed-og.webp'}   width={600} height={200} />
            </motion.div> */}
        </div>
      </div>


    </>
  );
}

//new to learn




// const x = useSpring(
//   useTransform(scrollYProgress,[0.2,0.4],[0,-100]),



//   { stiffness:100, damping:20 }
// )