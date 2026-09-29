import { Nav, WorkCard, ArrowDownRight, ArrowUpRight } from './ui';

export default function Home() {
  return <><Nav/><main>
    <section className="hero site-width">
      <div className="hero-kicker"><span className="status-dot"/> PRODUCT DESIGNER · UI/UX DESIGNER <span>OPEN TO OPPORTUNITIES · HCMC / REMOTE</span></div>
      <h1>Designing clarity<br/><span>into complex products.</span></h1>
      <div className="hero-bottom"><p>I design enterprise SaaS, data-heavy workflows, and AI-powered experiences — turning complex product logic into clear, usable interfaces.</p><a className="text-link" href="#work">Explore selected work <ArrowDownRight size={17}/></a></div>
    </section>

    <section id="work" className="section site-width">
      <div className="section-intro"><span className="section-number">01</span><div><p className="overline">Selected work</p><h2>Different products.<br/>Same obsession: clarity.</h2></div></div>
      <div className="work-stack">
        <WorkCard href="/work/flo" number="01" year="2026" type="flo" title="Flo — Financial Intelligence" tags={['B2B SaaS','AI','Fintech']} description="Turn financial signals into context, recommendations, and better decisions."/>
        <WorkCard href="/work/scheduler" number="02" year="2024–25" type="scheduler" title="Scheduler Management" tags={['Enterprise SaaS','Operations','Systems']} description="Make background jobs, processing states, and failures visible and actionable."/>
        <WorkCard href="/work/cryprice" number="03" year="2021" type="cry" title="Cryprice" tags={['Fintech','Mobile','UI/UX']} description="A mobile fintech concept exploring portfolio tracking, market data, and alerts."/>
      </div>
    </section>

    <section className="section section-rule site-width">
      <div className="section-intro"><span className="section-number">02</span><div><p className="overline">Design philosophy</p><h2>I work where<br/>complexity lives.</h2></div></div>
      <div className="split-copy"><div className="big-copy">Dense data. Operational workflows. Business rules. <em>Edge cases.</em></div><div className="body-copy"><p>I sit between product logic and interface craft — understanding how a system works, then making that complexity easier to navigate, understand, and act on.</p><div className="skill-list"><span>01 · STRUCTURE — Make complexity legible.</span><span>02 · SIGNAL — Surface what matters.</span><span>03 · ACTION — Design for the next decision.</span></div></div></div>
    </section>

    <section id="experience" className="section section-rule site-width">
      <div className="section-intro"><span className="section-number">03</span><div><p className="overline">Experience</p><h2>6+ years inside<br/>complex systems.</h2></div></div>
      <div className="experience-list">
        <div className="experience-row"><span className="exp-year">2024 — 2026</span><div><h3>Senior Product Designer</h3><p>Edulog Vietnam · Enterprise SaaS</p><small>Designed new enterprise workflows including Seating Chart, Scheduler Management, user guides, and frontend interaction specifications.</small></div><span className="exp-type">Product Design</span></div>
        <div className="experience-row"><span className="exp-year">2021 — 2024</span><div><h3>Product Designer</h3><p>Edulog Vietnam · Athena</p><small>Only Product Designer for an enterprise school transportation platform, covering routing, time & attendance, mapping, and telematics workflows.</small></div><span className="exp-type">Product Design</span></div>
        <div className="experience-row"><span className="exp-year">2020 — 2021</span><div><h3>UI/UX Designer</h3><p>SGH Asia Ltd.</p><small>Designed document-processing and fintech business systems in Agile product teams.</small></div><span className="exp-type">UI / UX</span></div>
        <div className="experience-row"><span className="exp-year">2017 — 2020</span><div><h3>Solution Designer Lead</h3><p>SGH Asia Ltd.</p><small>Led solution design for OCR, capture, validation, and automation workflows.</small></div><span className="exp-type">Solution Design</span></div>
        <div className="experience-row"><span className="exp-year">2014 — 2017</span><div><h3>Production Team Lead</h3><p>SGH Asia Ltd.</p><small>Managed data-processing operations for a 20+ person team working under strict SLA requirements.</small></div><span className="exp-type">Operations</span></div>
      </div>
    </section>

    <section className="section section-rule site-width">
      <div className="section-intro"><span className="section-number">04</span><div><p className="overline">Capabilities</p><h2>Product thinking.<br/>UI craft.</h2></div></div>
      <div className="split-copy"><div className="big-copy">From <em>product logic</em> to the interface people actually use.</div><div className="body-copy"><div className="skill-list"><span>PRODUCT · Product thinking · UX / IA · Interaction design</span><span>SYSTEMS · Enterprise SaaS · Design systems · Complex workflows</span><span>INTERFACE · Data-heavy UI · Visual hierarchy · Prototyping</span><span>EMERGING · AI experiences · AI-assisted workflows · Rapid prototyping</span></div></div></div>
    </section>

    <section className="statement-band"><div className="site-width"><p className="overline">Let&apos;s build something clear.</p><h2>I care about the details<br/>that make a product feel <span>obvious.</span></h2><a className="text-link light" href="mailto:kimngoc.max@gmail.com">Let&apos;s talk <ArrowUpRight size={17}/></a></div></section>
    <footer className="footer site-width"><span>© 2026 NGOC NGO</span><span>Product Designer · UI/UX Designer</span><span>HCMC / GMT+7</span></footer>
  </main></>;
}
