import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";

const blog1 = () => {
  return (
    <>
      <Navbar />
      {/* <!--Title--> */}
      <div className="text-center pt-16 md:pt-32">
        <p className="text-sm md:text-base text-green-500 font-bold">
          14 March 2022 <span className="text-gray-900">/</span> GETTING STARTED
        </p>
        <h1 className="font-bold break-normal text-3xl md:text-5xl">
          “SOCIAL MEDIA Good or Bad?”
        </h1>
      </div>

      {/* <!--image--> */}
      <div
        className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"
        style={{
          // backgroundImage: `url(
          //   "https://source.unsplash.com/collection/1118905/"
          // )`,
          backgroundImage: `url(
            "/learn.jpg"
          )`,
          // backgroundImage: `url("/learn.svg")`,
          height: 75 + "vh",
        }}
      ></div>

      {/* <!--Container--> */}
      <div className="container max-w-5xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">
          <div
            className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
            style={{ fontFamily: "Georgia serif" }}
          >
            {/* <!--Post Content--> */}

            {/* <!--Lead Para--> */}
            <p className="text-2xl md:text-3xl mb-5 text-center">
              👋 Welcome Guys
              <a
                className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500 mx-2"
                href="https://www.youtube.com/channel/UCR3Py_Ko1w8Y8tK8rg5wwqA"
              >
                Akshit Here
              </a>
            </p>

            <p className="py-6">
              There is not any clearcut answer to this question. We can consider
              the good or the bad things about social media. In this article, we
              will be having a view on that.
            </p>

            <p className="py-6">
              Social media has its pros and cons as other things have. It In the
              past 10 years, our lives have changed to a great extent and we can
              say that our lifestyle is changing constantly. Social media is one
              of the greatest changes we have seen in past years. Nowadays we
              have several social media apps and websites available where people
              can connect with other people and exchange their thoughts, talk to
              each other, and can do a lot of stuff we will be talking about.
            </p>

            <ol>
              <li className="py-3">
                Social media is also evolving and evolved very far from what it
                was in starting. Every social media has its own story on how it
                was started and for what purpose it was created. If we see look
                at the history of these social media apps then we will find that
                initially, these were very different from what they are today.
              </li>
              <li className="py-3">
                We see different types of social media apps and websites that
                provide some kind of tool to the user to interact with other
                people on that platform. We can see media sharing platforms like
                Instagram, Youtube, Facebook, Twitter, etc. They all are kind of
                the same as well as we can say that they provide features
                differently from each other and that is the reason why they are
                surviving instead of having these so many apps.
              </li>
              <li className="py-3">
                We see messaging apps like WhatsApp, Telegram, Signal, WeChat,
                etc. exist and their main purpose is to send and receive
                messages, videos, photos, stickers, and other media in a
                communication between two people or a limited number of people
                like groups and personal chats.
              </li>
              <li className="py-3">
                We have apps like YouTube which is a massive video-sharing
                platform in which people can share their content online on this
                platform publicly. Youtube is a platform where you have a large
                audience and you can make content related to their interest. You
                can live stream on youtube and this is a very useful feature for
                many content creators like teachers, gamers, event organizers,
                etc. as they can use this platform to stream their video live.
              </li>
            </ol>
            <ol>
              <li className="py-3">
                We have Facebook and Instagram where you have a public profile
                and you can share your thoughts, content, make friends, follow
                your friends and celebrities. You can create groups, rooms, and
                pages to share anything you want to share. These are the two
                platforms where you can do multiple things. You can become an
                influencer of Instagram. You can share photos, reels, videos,
                etc. on Instagram
              </li>
              <li className="py-3">
                Recently in the past two years, we have seen many social media
                apps like TikTok, Instagram Reels, YouTube Shorts, etc. in which
                you can share short videos of timing under 60 seconds. These
                apps are providing opportunities to people to showcase their
                talent if they have any. We can see a lot of clutter as well on
                these types of apps. People spend a lot of time on these apps.
              </li>
              <li className="py-3">
                Another social media app we have is Snapchat where you can chat
                with the people who are your friends and can share their snaps
                of what are you doing at any time. Snaps will disappear after
                you view them and they don’t get stored. It has a special
                feature for creating your Bitmoji. Bitmoji is nothing but a
                kinda your cartoony image. It has different modes in which you
                can click your photos and share them with your friends.
              </li>
              <li className="py-3">
                We have Github and Stack overflow and many other communities of
                different professional persons. Like we have these two things
                for the professional programmers who can interact and
                collaborate to solve a particular problem. Programmers can share
                their codes on the platform.
              </li>
              <li className="py-3">
                We have apps like Twitter and Koo where you can share your views
                on any topic. You can tweet your opinion on these apps on
                hot-burning topics.
              </li>
              <li className="py-3">
                These are the types of social media we see on the internet.
                There are also different communities online in which people come
                together for a cause, or to solve a problem and contribute in
                the process to achieve a final product that is feasible and
                helpful to the community.
              </li>
            </ol>
            <h1 className="text-2xl md:text-3xl mb-5 text-center font-bold">
              What are the advantages of Social Media platforms or Apps?
            </h1>
            <ol>
              <li className="py-3">
                Now, we will see the advantages of Social Media. There are many
                advantages of social media available for us. Money is the best
                topic, to begin with as everyone is interested to know about how
                they can earn money. People on these Social Media platforms can
                earn a lot amount of money. You can begin with creating an
                account on all these apps.
              </li>
              <h1 className="text-2xl md:text-3xl mb-5 text-center font-bold">
                1.Youtube Benefits
              </h1>
              <li className="py-3">
                People on YouTube are creating content on different subjects
                like education, news, politics, entertainment, comedy, fun,
                sports, technology, finance, investing, and a lot of different
                subjects. There are a lot of content creators in all the fields
                I have mentioned above and they are successful despite the great
                competition available in their field. This is because they are
                creating some unique and good quality for the people to watch.
                People are earning money from YouTube which is sufficient for
                them to carry their lives and they don’t need any job as well
                because they are earning even more than any job. It is a good
                place to go for free and good quality content in all the fields.
                No one is charging any fee for the content. You can learn on
                youtube and grow yourself. You can keep yourself updated through
                the news as all the news is available on youtube.
              </li>
              <h1 className="text-2xl md:text-3xl mb-5 text-center font-bold">
                2. Positive sides of Instagram, Facebook, and Twitter
              </h1>
              <li className="py-3">
                These platforms give you an opportunity to communicate and
                connect to the world online on a single click thing. You can
                make your friends worldwide and can talk to each other and learn
                about the different types and the cultures in the world. They
                can be very helpful in one’s growth as you can adapt to the
                outside world in a better way. Like youtube you can earn from
                these platforms well. You can become influencers on these social
                media apps and can promote the products f different firms on
                your brand value and earn money as well. You can see a lot of
                people are doing these types of stuff and are willing to build a
                career on that. You can follow the pages, join the groups of the
                people and the organizations you are interested in. You can
                follow some educational pages, financial pages, news pages to
                get updated and informed. You can chat with your friends and can
                share your photos videos on these platforms.
              </li>
              <li className="py-3">
                You as a business person can you these apps to build your own
                business or take your business online. It provides you with a
                large audience and you can engage with your customers and
                increase your sales. You can set up an online store as well on
                these apps.
              </li>
              <h1 className="text-2xl md:text-3xl mb-5 text-center font-bold">
                3.Importance of Messaging apps
              </h1>
              <li className="py-3">
                Today we have a lot of messaging apps and they completely
                revolutionized the way of messaging. Now we can do a lot more
                things than just texting. The messaging apps today are using
                internet messaging which made the messaging easier and more
                interactive for the people who want to talk to their friends.
                Now we can share the images, videos, stickers, memes, etc. with
                our friends and family. We can message them any time even if
                they are online they can get the message when they will be
                online. These apps give us the feature of voice calls and video
                calls which is one of the nicest features of these apps and
                people are moving towards internet calling instead of normal
                calling. Another good feature of these apps is that they provide
                us the feature to create groups and engage with each other.
              </li>
              <h1 className="text-2xl md:text-3xl mb-5 text-center font-bold">
                What are the disadvantages of Social Media?
              </h1>
              <li className="py-3">
                There are a lot of disadvantages of Social Media and we can see
                that if we will dive deep into it. There is a lot of time
                wastage on Social Media if we look at it closely. It happens
                that you have opened an app for some important information but
                instead of doing that thing. There is a lot of clutter content
                on social media that creates a lot of negativity in your day.
                Some content posted on social media is inappropriate and
                unwanted for children and they are unprotected from that type of
                content. Children can get indulged in these types of things and
                that might go bad for their studies and normal life.
              </li>
            </ol>
            <ol>
              <li className="py-3">
                People on social media show the positive sides of their lives.
                People don’t post about the bad things in their lives and the
                consumers of this content think that the lives of celebrities
                are happy only and start expecting only good things in their
                lives. We observe a large amount of propaganda content on these
                apps and they target some communities and people. People do
                these things only for personal benefits and propagate wrongs
                things about anybody. We see people abusing celebrities and
                other people in these apps. We have seen many cases of social
                media trials on many people who are accused of something.
              </li>
              <li className="py-3">
                The whole social media is divided into many sections and people
                are abusing each other from each side. It creates a sense of
                hatred against each other. We see that social media has become
                the home of rumors and many rumors have serious repercussions.
                Many incidents of mob lynching happened due to this social media
                and many people have suffered due to this.
              </li>
              <h1 className="text-2xl md:text-3xl mb-5 text-center font-bold">
                Who to follow on Social Media as there is so much clutter?
              </h1>
              <li className="py-3">
                Today social media is one of the important parts of everyone’s
                life. You follow different people on different social media
                sites.
              </li>
              <li className="py-3">
                Here the question that arises is who to follow?
              </li>
              <li className="py-3">
                By the way, it depends on you. It depends on your interests.
                Your following list shows what you like and your friend circle.
              </li>
              <li className="py-3">
                I would like to draw your attention to the garbage that this
                social media gives us and waste our time and energy. There is a
                famous saying that every rose has its thorns. So social media is
                a rose to express and a thorn that hurts.
              </li>
              <li className="py-3">
                Social media has its pros and cons as other things have. It
                gives you some good things but a lot of bad things or we can say
                the things that are not relevant to your work and requirement.
                It motivates you in some way but derails you in another way too.
                You need to see both sides of a thing.
              </li>
              <li className="py-3">
                Talking of advantages I would say that you can express yourself,
                make friends, connect to the world, know about different people,
                start and expand your business, etc. It allows you to make your
                point on every issue. It provides you knowledge about nature,
                wildlife, lifestyle, culture, languages, etc. due to the
                availability of social media handles related to them. You also
                see the official accounts of all organizations that are making a
                difference in a good way. In addition to that, you find social
                media handles of many governmental organizations, sports
                organizations, business organizations, tech-related, etc.
                handles. It brings to you a positive vibe throughout the day.
                So, according to me, you should follow these handles.
              </li>
              <li className="py-3">
                There also exists social media handles that create a ruckus,
                negativity, and disappointment in your mind. It may spoil your
                whole day. They try to influence and rage you against other
                groups of people. They provide no important information to you.
                They try to play with your psychology and disturb your mind. So,
                I recommend you to be away from such social media handles.
              </li>
              <li className="py-3">
                You should follow those handles that give you positive energy.
                It’s your choice what you need. These all are my findings. More
                than 70% of people are wasting their time on social media and
                not investing it.
              </li>
            </ol>

            <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
              Thank You Akshit Kumar rests his words here…
            </blockquote>

            {/* <p className="py-6">Example code block:</p>
            <pre className="bg-gray-900 rounded text-white font-mono text-base p-4">
              <code className="break-words whitespace-pre-wrap">
                &lt;header className="site-header outer"&gt; &lt;div
                className="inner"&gt; &gt; "site-nav" &lt;/div&gt;
                &lt;/header&gt;
              </code>
            </pre> */}

            {/* <!--/ Post Content--> */}
          </div>

          {/* <!--Subscribe--> */}
          <div className="container font-sans bg-green-100 rounded mt-8 p-4 md:p-24 text-center">
            <h2 className="font-bold break-normal text-2xl md:text-4xl">
              Subscribe to Villagepur.com
            </h2>
            <h3 className="font-bold break-normal text-gray-600 text-base md:text-xl">
              Get the latest posts delivered right to your inbox
            </h3>
            <div className="w-full text-center pt-4">
              <form action="#">
                <div className="max-w-sm mx-auto p-1 pr-0 flex flex-wrap items-center">
                  <input
                    type="email"
                    placeholder="youremail@example.com"
                    className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"
                  />
                  <Link href="#!">
                    <button
                      type="submit"
                      className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400"
                    >
                      Subscribe
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- /Subscribe--> */}

          {/* <!--Author--> */}
          <div className="flex w-full items-center font-sans p-8 md:p-24 m-4">
            <Image
              className="w-10 h-10 rounded-full mr-4"
              src="http://i.pravatar.cc/300"
              // src="/akshit.jpg"
              alt="Avatar of Author"
              width={40 + "px"}
              height={40 + "px"}
            />
            <div className="flex-1">
              <p className="text-base font-bold md:text-xl leading-none">
                Akshit kumar
              </p>
              <p className="text-gray-600 text-xs md:text-base">
                Follow me on Social Media handles
                <a
                  className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                  href="https://www.tailwindtoolbox.com"
                ></a>
              </p>
            </div>
            <div className="justify-end flex space-x-2">
              <span>
                <BsFacebook />
              </span>
              <span>
                <BsInstagram />
              </span>
              <span>
                <BsYoutube />
              </span>
            </div>
          </div>
          {/* <!--/Author--> */}
        </div>
      </div>

      <div className="bg-gray-200">
        <div className="container w-full max-w-6xl mx-auto px-2 py-8">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/3 px-2 pb-12">
              <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                <a href="#" className="no-underline hover:no-underline">
                  <img
                    src="https://source.unsplash.com/_AjqGGafofE/400x200"
                    className="h-48 w-full rounded-t shadow-lg"
                  />
                  <div className="p-6 h-auto md:h-48">
                    <p className="text-gray-600 text-xs md:text-sm">
                      GETTING STARTED
                    </p>
                    <div className="font-bold text-xl text-gray-900">
                      Lorem ipsum dolor sit amet.
                    </div>
                    <p className="text-gray-800 font-serif text-base mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam at ipsum eu nunc commodo posuere et sit amet
                      ligula.
                    </p>
                  </div>
                  <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                    <img
                      className="w-8 h-8 rounded-full mr-4"
                      src="http://i.pravatar.cc/300"
                      alt="Avatar of Author"
                    />
                    <p className="text-gray-600 text-xs md:text-sm">
                      2 MIN READ
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 pb-12">
              <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                <a href="#" className="no-underline hover:no-underline">
                  <img
                    src="https://source.unsplash.com/_AjqGGafofE/400x200"
                    className="h-48 w-full rounded-t shadow"
                  />
                  <div className="p-6 h-auto md:h-48">
                    <p className="text-gray-600 text-xs md:text-sm">
                      UNDERWATER
                    </p>
                    <div className="font-bold text-xl text-gray-900">
                      Biolumini algae diatomeae ecology.
                    </div>
                    <p className="text-gray-800 font-serif text-base mb-5">
                      Lorem ipsum dolor sit. Aliquam at ipsum eu nunc commodo
                      posuere et sit amet ligula.
                    </p>
                  </div>
                  <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                    <img
                      className="w-8 h-8 rounded-full mr-4"
                      src="http://i.pravatar.cc/300"
                      alt="Avatar of Author"
                    />
                    <p className="text-gray-600 text-xs md:text-sm">
                      4 MIN READ
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 pb-12">
              <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                <a href="#" className="no-underline hover:no-underline">
                  <img
                    src="https://source.unsplash.com/DEa8_vxKlEo/400x200"
                    className="h-48 w-full rounded-t shadow"
                  />
                  <div className="p-6 h-auto md:h-48">
                    <p className="text-gray-600 text-xs md:text-sm">FOREST</p>
                    <div className="font-bold text-xl text-gray-900">
                      What is life but a teardrop in the eye of infinity?
                    </div>
                    <p className="text-gray-800 font-serif text-base mb-5">
                      Mollis pretium integer eros et dui orci, lectus nec elit
                      sagittis neque. Dignissim ac nullam semper aliquet
                      volutpat, ut scelerisque.
                    </p>
                  </div>
                  <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                    <img
                      className="w-8 h-8 rounded-full mr-4"
                      src="http://i.pravatar.cc/300"
                      alt="Avatar of Author"
                    />
                    <p className="text-gray-600 text-xs md:text-sm">
                      7 MIN READ
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default blog1;
