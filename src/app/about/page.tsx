import Image from "next/image"
import Header from "@/components/Header"
import Main from "@/components/Main"
import Section from "@/components/Section"

const Page = () => {
 return (
  <>
   <Header>
    <h1 className="text-4xl">
     About <br />
     <strong className="text-amber-400">Craig Claybrook</strong>
    </h1>
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
     <div className="collapse collapse-arrow bg-base-200">
     <input type="radio" name="accordion" />
     <div className="collapse-title text-xl font-medium">Aptitude for Memorization</div>
     <div className="collapse-content">
      <ul className="list-disc px-4">
       <li className="leading-8">Memorized six clarinet solos for music contests while growing up</li>
       <li className="leading-8">Has memorized numerous Scripture verses, plus entire chapters of the Bible</li>
       <li className="leading-8">As a freelance wedding officiant, he memorized three wedding ceremonies and each contained four pages of script</li>
       <li className="leading-8">Memorized the <em>Declaration of Independence</em> in one hundred days (&apos;16)</li>
      </ul>
     </div>
    </div>
    <div className="collapse collapse-arrow bg-base-200">
     <input type="radio" name="accordion" />
     <div className="collapse-title text-xl font-medium">Adroit as a Performer</div>
     <div className="collapse-content">
      <ul className="list-disc px-4">
       <li className="leading-8">Achieved 1st Place among 400 woodwind soloists as a 7th grader; chosen first chair of seven bands: junior high band, high school band at end of 8th grade, All-District Band as a 9th grader; three bands at summer band camp in Aurora, Colorado, and his college band; he was also highly ranked in All-State Bands; from Wewoka, OK (&apos;58-69)</li>
       <li className="leading-8">Hired as a professional water-skier in the Tommy Bartlett Water Ski Show, Wisconsin Dells (&apos;68); Ozark Water Ski Thrill Show, Osage Beach, MO (&apos;69); Sea World, Aurora, OH, where, among other things, he was featured for his backwards barefoot skiing and was known as the &quot;best clown&quot; (&apos;75)</li>
       <li className="leading-8">Officiated hundreds upon hundreds of weddings, mostly in the Dallas area (&apos;69-14)</li>
       <li className="leading-8 mb-2">At age 74, he was filmed reciting the <em>Declaration of Independence</em> in a studio for the Freedom Encounter organization and its show Freedom Journey in Branson, MO (&apos;22)</li>
       <li className="leading-8 list-none">Note: His water skiing began as a 12-year old when his dad won a boat, motor, and trailer</li>
      </ul>
     </div>
    </div>
    <div className="collapse collapse-arrow bg-base-200">
     <input type="radio" name="accordion" />
     <div className="collapse-title text-xl font-medium">Accomplished as a Writer/Editor</div>
     <div className="collapse-content">
      <ul className="list-disc px-4">
       <li className="leading-8">Wrote two editorials for college newspaper, Central State College, OK (&apos;67)</li>
       <li className="leading-8">Edited the 4-page Texas insert for Focus on the Family&apos;s <em>Citizen Magazine</em> at Richard Ford Associates, Dallas, TX (&apos;89-90)</li>
       <li className="leading-8">Edited ninety-nine <em>Counseling Keys</em> at Hope for the Heart radio ministry, Dallas (&apos;91-92)</li>
       <li className="leading-8">Featured in <em>The Dallas Morning News</em> with two editorials (&apos;95)</li>
       <li className="leading-8">Ghostwrote the book, <em>The Ultimate Gift</em> about a national phenomenon that erupted when a couple rented two billboards in hopes of adopting a child; as a freelance editor, he edited nine books (&apos;95-14)</li>
       <li className="leading-8">Co-edited Incidents of the <em>U.S. Christian Commission</em>, a major Christian book that came out of the Civil War about the Union Army, published in 1869, retitled <em>Triumph Amidst Bloodshed——Civil War Soldiers&apos; Spiritual Victories</em>, published by <em>Primedia eLaunch</em> (&apos;12)</li>
       <li className="leading-8">Published one article in <em>The Baptist Standard</em> (&apos;19), later footnoted in David Jeremiah&apos;s <em>Turning Point Magazine</em>, plus another <em>Standard</em> article in their now-discontinued sister magazine, <em>CommonCall</em> (&apos;22)</li>
      </ul>
     </div>
    </div>
    <div className="collapse collapse-arrow bg-base-200">
     <input type="radio" name="accordion" />
     <div className="collapse-title text-xl font-medium">Adept as a Public Speaker</div>
     <div className="collapse-content">
      <ul className="list-disc px-4">
       <li className="leading-8">Started out as a fledgling speaker with Campus Crusade for Christ, now Cru (&apos;70-74)</li>
       <li className="leading-8">Addressed 700 college students on New Year&apos;s Eve and was told by many that his humor &quot;brought the house down&quot; (&apos;71)</li>
       <li className="leading-8">Was known in the Dallas area as the &quot;freelance minister who does weddings by memory&quot; (&apos;99-14); officiated funerals for some of those years and beyond</li>
       <li className="leading-8">Served as a bi-vocational minister of a congregation at a retirement home (&apos;09-14)</li>
       <li className="leading-8">Has recited the <em>Declaration of Independence</em> for organizations and churches since 2016</li>
      </ul>
     </div>
    </div>
    <div className="collapse collapse-arrow bg-base-200">
     <input type="radio" name="accordion" />
     <div className="collapse-title text-xl font-medium">Acknowledged as a Leader</div>
     <div className="collapse-content">
      <ul className="list-disc px-4">
       <li className="leading-8">Selected as Drum Major of his high school band (&apos;64) and four years at Central State College, now Central State University in Edmond, OK (&apos;65-69)</li>
       <li className="leading-8">Served as student leader of Campus Crusade for Christ in college; was told by a traveling singing group that it was &quot;the best organized concert we have ever done,&quot; then as a staff member, he served as Campus Coordinator, Sacramento, CA; as Area Administrator for Northern California, Hawaii, and Reno; and as Campus Director at SMU, Dallas (’70-74)</li>
       <li className="leading-8">Owned and operated a lawn maintenance business, starting with $10 and borrowed equipment, employed as many as six employees, recognized as one of top five lawn companies in Plano, TX, (&apos;80-85)</li>
       <li className="leading-8">Selected as Dallas Walk Chairman for the Kent Hance gubernatorial campaign, recruiting and directing 130 volunteers (&apos;89-90)</li>
       <li className="leading-8">Organized <em>Patriotic Sunday</em>, a voter registration drive for Dallas area churches, capitalizing on July Fourth; covered by <em>The Dallas Morning News</em> (&apos;94)</li>
       <li className="leading-8">Recognized by the U.S. Census Bureau as the census-taker who had &quot;the highest production for Dallas, Tarrant, and Denton Counties&quot; (&apos;00)</li>
       <li className="leading-8 mb-2">Assistant Pastor/Pastor of Lakeview Congregation, located at a retirement home, Dallas (&apos;09-14)</li>
       <li className="leading-8 list-none">Note: A reporter for <em>The Dallas Morning News</em> called him a &quot;Renaisance Man.&quot; He calls himself ADD.</li>
      </ul>
     </div>
    </div>
    </Section>
   </Main>
  </>
 )
}

export default Page