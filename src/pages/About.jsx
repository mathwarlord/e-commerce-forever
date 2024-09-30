import { assets } from '../assets/assets.js';
import NewsLetterBox from '../components/NewsLetterBox.jsx';
import Title from '../components/Title';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            cumque eligendi laudantium! Autem in sapiente veniam numquam optio
            nobis itaque vero labore corporis quasi. Minus fugiat blanditiis et
            ipsa quo.
          </p>
          <p>
            Obcaecati, qui adipisci delectus atque placeat fugiat eum quaerat
            perferendis doloribus, officiis velit reprehenderit ratione, id
            deleniti.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
            mollitia. Facere, quidem. Velit voluptatem corporis excepturi
            eveniet odio sint sapiente quas quos id, sunt quae facilis ipsa
            animi laborum ipsum.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            quasi nulla maxime rem repudiandae culpa pariatur esse, alias nihil
            molestias eaque sed quam facere temporibus rerum earum?
            Consequuntur, repudiandae atque.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exeptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            reprehenderit repellat ex libero, quo repudiandae dolorum eligendi
            architecto nostrum excepturi saepe? Possimus libero quos fugit
            ratione, assumenda exercitationem obcaecati soluta.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            quasi nulla maxime rem repudiandae culpa pariatur esse, alias nihil
            molestias eaque sed quam facere temporibus rerum earum?
            Consequuntur, repudiandae atque.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
