import Header from "@/components/Header"
import Main from "@/components/Main"
import Section from "@/components/Section"

const Page = () => {
  return (
    <>
      <Header>
        <h1 className="text-4xl">
          &quot;...endowed by their <strong className="text-amber-400">Creator</strong>
          <br />
          with certain unalienable Rights...&quot;
        </h1>
      </Header>
      <Main>
        <Section>
          <video width="720" height="480" controls>
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>
        </Section>
      </Main>
    </>
  )
}

export default Page