import Image from "next/image"
import Header from "@/components/Header"
import Main from "@/components/Main"
import Section from "@/components/Section"

const Page = () => {
 return (
  <>
   <Header>
    <h1 className="text-4xl">The Plan</h1>
   </Header>
   <Main>
    <Section>
     <Image
      src="/images/headshot.webp"
      alt="Craig Claybrook as Thomas Jefferson"
      width="300"
      height="100"
      className="mx-auto rounded-md my-16"
     />
     <h2 className="text-2xl font-semibold mb-2">The Plan</h2>
     <h3 className="mb-2">Launching the Declaration onto the National Stage</h3>
     <h3 className="mb-8">By Craig L. Claybrook</h3>
     <video width="720" height="480" controls className="mb-8">
      <source src="/videos/short_video.mp4" type="video/mp4" />
     </video>
     <p className="mb-4 leading-8">Every worthwhile undertaking needs a start-up plan.</p>
     <p className="mb-4 leading-8"><strong>Stage One:</strong></p>
     <ol className="mb-8 leading-8 list-decimal">
      <li>Rely on God, which is self-explanatory.</li>
      <li>Formulate  a vision and put it into writing. Hopefully, this website suffices.</li>
      <li>Create a plan for putting the vision into action and keeping it simple.</li>
      <ul className="list-disc px-4">
       <li>Place a 60-second video of the Declaration&apos;s most potent verbiage on their particular social media.</li>
       <li>Include the message &quot;to see the full recitation, go to www.thomasjeffersonrecites.com.&quot;</li>
       <li>Ask for people to cut and paste and then forward this shorter version video to three or more of their friends.</li>
      </ul>
      <li>See how this works out and go from there. Hopefully, multiplication kicks in and evenutally a &quot;movement&quot; develops.</li>
     </ol>
     <p className="mb-8 leading-4"><strong>Stage Two:</strong></p>
     <ol className="mb-8 leading-8 list-decimal">
      <li>Address the issue of &quot;highly interested&quot; people staying connected.</li>
      <li>Direct people to the book, <em>Never Before in History-America&apos;s Inspired Birth,</em> published by the Discovery Institute, Seattle, WA.</li>
     </ol>
     <p className="mb-4 leading-8"><strong>Stage Three:</strong></p>
     <ol className="mb-8 leading-8 list-decimal">
      <li>Set up a system for those who wish to memorize some or all of the Declaration.</li>
      <li>Everywhere he goes, he hears, &quot;I coud never do what you do.&quot; This is because people are lost when it comes to memorization. He directs people who adhere to the &quot;Muble, Grumble, and Fumble System&quot; to the &quot;Five Flawless Times System.&quot;</li>
     </ol>
    </Section>
   </Main>
  </>
 )
}

export default Page