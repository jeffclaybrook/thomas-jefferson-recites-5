import Image from "next/image"
import Header from "@/components/Header"
import Main from "@/components/Main"
import Section from "@/components/Section"

const Page = () => {
 return (
  <>
   <Header>
    <h1 className="text-4xl">
     Contact <br />
     <strong className="text-amber-400">Craig Claybrook</strong>
    </h1>
   </Header>
   <Main>
    <Section>
     <Image
      src="/images/headshot-2.webp"
      alt="Craig Claybrook as Thomas Jefferson"
      width="300"
      height="100"
      className="mx-auto rounded-md my-16"
     />
     <form
      action="https://public.herotofu.com/v1/7cad6320-26c7-11ef-b435-b1ba21672864"
      method="POST"
      accept-charset="UTF-8"
      className="flex flex-col items-center max-w-xl mx-auto"
     >
      <input
       type="text"
       placeholder="Name"
       id="name"
       name="Name"
       className="input input-bordered w-full mb-4"
       required
      />
      <input
       type="text"
       placeholder="Email"
       id="email"
       name="Email"
       className="input input-bordered w-full mb-4"
       required
      />
      <textarea
       placeholder="Message"
       id="message"
       name="message"
       className="textarea textarea-lg textarea-bordered w-full mb-4"
       required
      />
      <button type="submit" className="btn btn-primary btn-wide">Submit</button>
     </form>
    </Section>
   </Main>
  </>
 )
}

export default Page