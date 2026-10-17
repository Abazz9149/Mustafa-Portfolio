import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import CopyButton from "@/components/CopyButton";
import ProjectArt from "@/components/art/ProjectArt";
import { ArrowIcon, ExternalIcon, WhatsAppIcon } from "@/components/icons";
import { profile, projects, experience, skills, education, certifications } from "@/data/resume";

const waLink = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(profile.whatsappMessage)}`;

// Frame times for the hero graph, in ms. All sit under the 11.1 ms budget of a 90 Hz headset.
const frames = [8.2, 9.1, 7.6, 8.8, 10.2, 9.4, 8.1, 7.9, 9.8, 8.6, 9.0, 8.3, 7.7, 9.5, 8.9, 8.4, 10.0, 9.2];

const stack = ["Unity", "C#", "OpenXR", "Meta Quest", "Oculus SDK", "Multiplayer", "Game AI", "NavMesh", "WheelCollider", "Flutter", "MERN", "Git"];

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="hero">
          <div className="grid-floor" aria-hidden="true" />
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-inner">
            <div>
              <div className="hero-status">
                <span className="pulse" aria-hidden="true" />
                <span className="label">{profile.status} · {profile.location}</span>
              </div>
              <h1>
                <span className="line"><span>{profile.name}</span></span>
                <span className="line"><span>{profile.role}</span></span>
              </h1>
              <p className="lede">{profile.intro}</p>
              <div className="actions">
                <a className="btn btn-primary" href="#work">
                  See my work <ArrowIcon />
                </a>
                <a className="btn btn-wa" href={waLink} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon /> WhatsApp me
                </a>
              </div>
            </div>

            <div className="hud" aria-label="VR frame budget">
              <div className="hud-row">
                <span className="label">Frame budget · 90 Hz</span>
                <span className="label">Quest</span>
              </div>
              <div className="hud-big">11.1<small>ms</small></div>
              <div className="frame-graph" aria-hidden="true">
                {frames.map((f, i) => (
                  <i key={i} style={{ height: "100%", ["--h" as string]: (f / 13).toFixed(2), animationDelay: `${i * 90}ms` } as React.CSSProperties} />
                ))}
              </div>
              <div className="budget-line" aria-hidden="true"><span>11.1 ms</span></div>
              <p>Miss the frame budget in a headset and people feel sick. Staying under it is how I build VR.</p>
              <div className="hud-stats">
                <div><b>{projects.length}</b><span>Projects</span></div>
                <div><b>{experience.length}</b><span>Roles</span></div>
                <div><b>{certifications.length}</b><span>Unity certs</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Stack marquee ---------- */}
        <div className="marquee" aria-label="Tools I use">
          <div className="marquee-track">
            {[...stack, ...stack].map((s, i) => (
              <span key={i} aria-hidden={i >= stack.length}>{s}</span>
            ))}
          </div>
        </div>

        {/* ---------- Projects ---------- */}
        <section id="work" className="section">
          <div className="container">
            <Reveal className="section-head">
              <span className="label">01 · Selected work</span>
              <div>
                <h2>Projects</h2>
                <p>VR training, racing and real-time multiplayer. Each one built in Unity and C#.</p>
              </div>
            </Reveal>
            <div className="projects">
              {projects.map((p, i) => (
                <Reveal key={p.slug} delay={i * 60}>
                  <TiltCard className="project">
                    <div className="project-art">
                      <span className="art-tag">{p.where}</span>
                      <ProjectArt kind={p.art} />
                    </div>
                    <div className="project-body">
                      <span className="project-kind">{p.kind}</span>
                      <h3>{p.title}</h3>
                      <p>{p.summary}</p>
                      <ul>
                        {p.points.map((pt) => (
                          <li key={pt}>{pt}</li>
                        ))}
                      </ul>
                      <div className="tags">
                        {p.tags.map((t) => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Experience ---------- */}
        <section id="experience" className="section">
          <div className="container">
            <Reveal className="section-head">
              <span className="label">02 · Experience</span>
              <div>
                <h2>Where I&apos;ve worked</h2>
              </div>
            </Reveal>
            <div className="timeline">
              {experience.map((job, i) => (
                <Reveal key={job.company} delay={i * 80} className="job">
                  <span className="when">{job.period}</span>
                  <div className="what">
                    <h3>{job.role}</h3>
                    <p className="where">{job.company} · {job.place}</p>
                    <ul>
                      {job.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Skills ---------- */}
        <section id="skills" className="section">
          <div className="container">
            <Reveal className="section-head">
              <span className="label">03 · Toolkit</span>
              <div>
                <h2>What I build with</h2>
              </div>
            </Reveal>
            <div className="skills">
              {skills.map((g, i) => (
                <Reveal key={g.group} delay={i * 60} className="skill-card">
                  <span className="label">{g.group}</span>
                  <div className="chips">
                    {g.items.map((s) => (
                      <span key={s} className="chip">{s}</span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Education ---------- */}
        <section id="education" className="section">
          <div className="container">
            <Reveal className="section-head">
              <span className="label">04 · Education</span>
              <div>
                <h2>Education &amp; certifications</h2>
              </div>
            </Reveal>
            <div className="edu">
              <Reveal className="edu-card">
                <span className="label">Degree</span>
                <h3>{education.degree}</h3>
                <p>{education.school} · {education.period}</p>
              </Reveal>
              <Reveal delay={80} className="edu-card">
                <span className="label">Certifications</span>
                <ul className="certs">
                  {certifications.map((c) => (
                    <li key={c.name}>
                      <strong>{c.name}</strong>
                      <span>{c.issuer}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="section">
          <div className="container contact">
            <Reveal>
              <span className="label">05 · Contact</span>
              <h2 style={{ marginTop: 16 }}>
                Hiring for Unity or XR? <span>Let&apos;s talk.</span>
              </h2>
              <p className="lede">
                The fastest way to reach me is WhatsApp. Email and LinkedIn work too.
              </p>
              <a className="btn btn-wa" href={waLink} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
            </Reveal>
            <Reveal delay={100} className="contact-list">
              <a className="contact-item" href={waLink} target="_blank" rel="noopener noreferrer">
                <div><div className="k">WhatsApp</div><div className="v">{profile.whatsappDisplay}</div></div>
                <ExternalIcon />
              </a>
              <div className="contact-item">
                <div><div className="k">Email</div><div className="v">{profile.email}</div></div>
                <CopyButton text={profile.email} />
              </div>
              <a className="contact-item" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <div><div className="k">LinkedIn</div><div className="v">linkedin.com/in/mustafa-abbas-unity</div></div>
                <ExternalIcon />
              </a>
              <a className="contact-item" href={profile.github} target="_blank" rel="noopener noreferrer">
                <div><div className="k">GitHub</div><div className="v">github.com/Abazz9149</div></div>
                <ExternalIcon />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {profile.name} · {profile.location}</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      <a className="wa-float" href={waLink} target="_blank" rel="noopener noreferrer" aria-label="Chat with Mustafa on WhatsApp">
        <WhatsAppIcon />
        <span>Chat on WhatsApp</span>
      </a>
    </>
  );
}
