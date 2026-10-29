import { useEffect, useState, type ReactNode } from "react"

type RoleSlug = "firm" | "cosec" | "assistant" | "director"
type IconName = "arrow" | "bell" | "book" | "briefcase" | "building" | "calendar" | "check" | "chevron" | "clipboard" | "document" | "folder" | "home" | "inbox" | "layers" | "menu" | "people" | "person" | "review" | "shield" | "spark" | "subscription" | "tasks" | "users" | "x"

type Responsibility = {
  icon: IconName
  title: string
  description: string
}

type WorkflowStep = {
  icon: IconName
  title: string
  description: string
}

type Role = {
  slug: RoleSlug
  name: string
  eyebrow: string
  phrase: string
  description: string
  intro: string
  accent: string
  pale: string
  capabilities: { icon: IconName label: string }[]
  responsibilities: Responsibility[]
  workflow?: WorkflowStep[]
  note: string
  guideUrl: string
}

const roles: Role[] = [
  {
    slug: "firm",
    name: "Firm",
    eyebrow: "Firm administration",
    phrase: "Manage your firm with confidence.",
    description:
      "Manage Cosec accounts, clients or groups, subscriptions, and tasks where supported by the ACE system.",
    intro:
      "See how firm-level tools connect your people, client portfolio, subscriptions, and work in one clear journey.",
    accent: "#1766d5",
    pale: "#e9f2ff",
    capabilities: [
      { icon: "users", label: "Accounts" },
      { icon: "building", label: "Clients" },
      { icon: "subscription", label: "Subscriptions" },
      { icon: "tasks", label: "Tasks" },
    ],
    responsibilities: [
      {
        icon: "users",
        title: "Manage Cosec Accounts",
        description:
          "Register and organise Cosec access under the firm account where supported.",
      },
      {
        icon: "people",
        title: "Manage Clients and Groups",
        description:
          "View the firm client portfolio and organise clients into useful groups.",
      },
      {
        icon: "subscription",
        title: "Manage Subscriptions",
        description:
          "Review subscription options, registration, and renewal information.",
      },
      {
        icon: "tasks",
        title: "Monitor and Manage Tasks",
        description:
          "Follow firm tasks and keep supported work moving to the right person.",
      },
    ],
    note: "The ACE Knowledgebase documents Firm sections for subscriptions, Cosec, clients, groups, templates, and tasks.",
    guideUrl: "https://help.blazetech.my/docs/firm-user/",
  },
  {
    slug: "cosec",
    name: "Cosec",
    eyebrow: "Company secretarial work",
    phrase: "Keep company records organised.",
    description:
      "Manage client and company records, statutory registers, documents, filings, and compliance-related tasks where supported.",
    intro:
      "Move from client information to registers, documents, and follow-up tasks with a structured company-secretarial view.",
    accent: "#5b55d9",
    pale: "#efefff",
    capabilities: [
      { icon: "building", label: "Records" },
      { icon: "book", label: "Registers" },
      { icon: "document", label: "Documents" },
      { icon: "shield", label: "Compliance" },
    ],
    responsibilities: [
      {
        icon: "folder",
        title: "Client and Company Records",
        description:
          "Add and maintain client information available to your Cosec account.",
      },
      {
        icon: "book",
        title: "Statutory Registers",
        description:
          "Work with documented registers for members, directors, charges, and more.",
      },
      {
        icon: "document",
        title: "Documents and Filings",
        description:
          "Use templates and the client storeroom to keep supported records organised.",
      },
      {
        icon: "calendar",
        title: "Compliance Tasks",
        description:
          "Track relevant company-secretarial work and supported task deadlines.",
      },
    ],
    note: "ACE documents Cosec tools for clients, assistants, registers, templates, and the client storeroom.",
    guideUrl: "https://help.blazetech.my/docs/cosec-user/",
  },
  {
    slug: "assistant",
    name: "Assistant",
    eyebrow: "Assigned support work",
    phrase: "Support daily tasks efficiently.",
    description:
      "Support assigned clients, prepare documents, and complete assigned tasks according to the permissions available.",
    intro:
      "Focus on work that has been assigned to you, with a clear path from understanding the task to preparing the required material.",
    accent: "#008f8a",
    pale: "#e5f8f5",
    capabilities: [
      { icon: "people", label: "Assigned clients" },
      { icon: "tasks", label: "Tasks" },
      { icon: "document", label: "Preparation" },
    ],
    responsibilities: [
      {
        icon: "people",
        title: "Assigned Clients",
        description:
          "Access only the clients assigned to you by an authorised Cosec user.",
      },
      {
        icon: "clipboard",
        title: "Assigned Tasks",
        description:
          "Review the task details and scope made available to your account.",
      },
      {
        icon: "document",
        title: "Document Preparation",
        description:
          "Prepare relevant documents using the access and instructions provided.",
      },
      {
        icon: "spark",
        title: "Support and Onboarding",
        description:
          "Help with documented new-client onboarding tasks where assigned.",
      },
    ],
    workflow: [
      {
        icon: "clipboard",
        title: "View Assigned Task",
        description:
          "Read the scope, client context, and instructions provided.",
      },
      {
        icon: "document",
        title: "Prepare Document",
        description:
          "Complete the required material within your available access.",
      },
      {
        icon: "review",
        title: "Submit for Review",
        description:
          "Pass the work onward when the assigned workflow provides a review step.",
      },
    ],
    note: "ACE documents Assistant access around assigned clients and new-client onboarding tasks; access is controlled by assignment.",
    guideUrl: "https://help.blazetech.my/docs/assistant/",
  },
  {
    slug: "director",
    name: "Director",
    eyebrow: "Review and response",
    phrase: "Stay informed and review important matters.",
    description:
      "Review assigned items, access relevant board documents, check approval status, and respond to items where permitted.",
    intro:
      "Keep attention on the items shared with you, review the supporting detail, and respond only through actions available to your account.",
    accent: "#df7925",
    pale: "#fff1e4",
    capabilities: [
      { icon: "inbox", label: "Assigned items" },
      { icon: "document", label: "Board documents" },
      { icon: "review", label: "Review" },
      { icon: "bell", label: "Updates" },
    ],
    responsibilities: [
      {
        icon: "inbox",
        title: "Pending or Assigned Items",
        description:
          "Focus on items specifically shared with or assigned to your account.",
      },
      {
        icon: "document",
        title: "Board Documents",
        description:
          "Access relevant supporting documents when they are made available.",
      },
      {
        icon: "review",
        title: "Approval Status",
        description:
          "Check the status of a review or response where the workflow supports it.",
      },
      {
        icon: "bell",
        title: "Inbox or Notifications",
        description:
          "Follow relevant updates through the communication tools available to you.",
      },
    ],
    workflow: [
      {
        icon: "inbox",
        title: "Review Assigned Item",
        description:
          "Open the item that has been made available to your account.",
      },
      {
        icon: "review",
        title: "Check Details",
        description: "Read the supporting information and relevant documents.",
      },
      {
        icon: "check",
        title: "Review and Respond",
        description: "Respond using only the actions permitted for that item.",
      },
    ],
    note: "Director access varies by assignment and permissions. This guide does not assume that every item can be approved.",
    guideUrl:
      "https://help.blazetech.my/docs/ace-documentation/quickstart/director-account/",
  },
]

function Icon({ name, size = 24 }: { name: IconName size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
        <path d="M10 19a2 2 0 0 0 4 0" />
      </>
    ),
    book: (
      <>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
        <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5z" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
      </>
    ),
    building: (
      <>
        <path d="M4 21V5l8-3 8 3v16" />
        <path d="M2 21h20M8 8h2m4 0h2M8 12h2m4 0h2M8 16h2m4 0h2" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.5 2.5L16 9" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    clipboard: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4V2h6v2M9 10h6M9 14h6M9 18h4" />
      </>
    ),
    document: (
      <>
        <path d="M6 2h8l4 4v16H6z" />
        <path d="M14 2v5h5M9 12h6M9 16h6" />
      </>
    ),
    folder: (
      <path d="M3 6a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v11h14V10M9 21v-7h6v7" />
      </>
    ),
    inbox: (
      <>
        <path d="M4 4h16l2 11v5H2v-5z" />
        <path d="M2 15h6l2 3h4l2-3h6" />
      </>
    ),
    layers: (
      <>
        <path d="m12 2 9 5-9 5-9-5z" />
        <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    people: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20a6 6 0 0 1 12 0M16 4a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5" />
      </>
    ),
    person: (
      <>
        <circle cx="12" cy="7" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    review: (
      <>
        <circle cx="10" cy="10" r="6" />
        <path d="m15 15 6 6M7.5 10l1.7 1.7 3.5-3.5" />
      </>
    ),
    shield: (
      <>
        <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    spark: (
      <path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8zM19 17l.8 2.2L22 20l-2.2.8L19 23l-.8-2.2L16 20l2.2-.8z" />
    ),
    subscription: (
      <>
        <rect x="3" y="5" width="18" height="15" rx="2" />
        <path d="M3 10h18M7 15h3M17 3v4M7 3v4" />
      </>
    ),
    tasks: (
      <>
        <path d="M10 6h11M10 12h11M10 18h11" />
        <path d="m3 6 1.5 1.5L7 4.5M3 12l1.5 1.5L7 10.5M3 18l1.5 1.5L7 16.5" />
      </>
    ),
    users: (
      <>
        <circle cx="8" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M2 20a6 6 0 0 1 12 0M14 15a5 5 0 0 1 7 4.5" />
      </>
    ),
    x: <path d="m6 6 12 12M18 6 6 18" />,
  }

  return (
    <svg
      aria-hidden="true"
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className={`brand ${inverse ? "brand--inverse" : ""}`}>
      <span className="brand__logo">
        <img src="/ace-logo.png" alt="ACE" />
      </span>
      <span className="brand__copy">
        <strong>Interactive Journey</strong>
        <small>Understand every role</small>
      </span>
    </div>
  )
}

function PersonIllustration({
  role,
  compact = false,
}: {
  role: RoleSlug
  compact?: boolean
}) {
  const roleData = roles.find((item) => item.slug === role) ?? roles[0]
  const isCosec = role === "cosec"
  const isAssistant = role === "assistant"
  const isDirector = role === "director"

  return (
    <svg
      className={`person-illustration ${
        compact ? "person-illustration--compact" : ""
      }`}
      viewBox="0 0 420 360"
      role="img"
      aria-label={`Professional ${roleData.name} illustration`}
    >
      <ellipse
        cx="210"
        cy="330"
        rx="156"
        ry="18"
        fill="#0e376e"
        opacity=".08"
      />
      <circle cx="210" cy="170" r="143" fill={roleData.pale} />
      <circle cx="314" cy="68" r="28" fill={roleData.accent} opacity=".12" />
      <circle cx="82" cy="218" r="18" fill={roleData.accent} opacity=".15" />
      <rect x="64" y="262" width="292" height="13" rx="6.5" fill="#17406f" />
      <path d="M91 275h238l-16 56H108z" fill="#cfe0f5" />
      <path d="M123 275h174l-8 56H131z" fill="#e8f1fb" />
      <rect
        x={isAssistant ? 96 : 270}
        y="204"
        width="66"
        height="49"
        rx="6"
        fill="#fff"
      />
      <path
        d={
          isAssistant
            ? "M108 218h40M108 228h32M108 238h36"
            : "M282 218h40M282 228h30M282 238h34"
        }
        stroke={roleData.accent}
        strokeWidth="4"
        strokeLinecap="round"
        opacity=".55"
      />
      <circle cx="211" cy="103" r="42" fill="#efb394" />
      <path
        d={
          isCosec
            ? "M168 102c2-35 19-56 45-56 28 0 46 21 43 62-12-4-20-17-24-31-14 16-38 25-64 25Z"
            : isDirector
              ? "M168 100c2-36 18-54 45-54 30 0 47 22 44 60-17-5-27-18-32-32-13 14-32 23-57 26Z"
              : "M170 99c3-34 19-51 43-51 28 0 44 19 43 55-14-3-25-14-30-28-12 13-31 21-56 24Z"
        }
        fill={isAssistant ? "#243b62" : isCosec ? "#49354f" : "#173052"}
      />
      {isDirector && (
        <path
          d="M174 99c3 37 9 55 37 55 25 0 37-20 39-52"
          fill="none"
          stroke="#173052"
          strokeWidth="5"
        />
      )}
      <circle cx="196" cy="108" r="2.8" fill="#173052" />
      <circle cx="226" cy="108" r="2.8" fill="#173052" />
      <path
        d="M202 126c6 5 13 5 19 0"
        fill="none"
        stroke="#b36555"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M180 150c19 13 43 13 62 0 36 15 55 50 56 112H124c2-61 20-97 56-112Z"
        fill={roleData.accent}
      />
      <path d="m188 153 23 28 23-28 9 109h-64z" fill="#fff" opacity=".95" />
      <path
        d="m196 162 15 19 15-19-7 44h-16z"
        fill={isDirector ? "#ef9a46" : "#164d91"}
      />
      <path
        d={
          isAssistant
            ? "M133 199c-13 12-22 30-26 55M288 197c10 17 13 35 15 55"
            : "M132 200c-10 17-14 34-15 52M289 198c12 15 18 34 20 54"
        }
        stroke="#efb394"
        strokeWidth="18"
        strokeLinecap="round"
      />
      {isCosec && (
        <>
          <rect
            x="289"
            y="184"
            width="54"
            height="69"
            rx="6"
            fill="#f7fbff"
            stroke={roleData.accent}
            strokeWidth="4"
          />
          <path
            d="M300 201h31M300 212h31M300 223h22"
            stroke={roleData.accent}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </>
      )}
      {role === "firm" && (
        <>
          <circle cx="313" cy="189" r="25" fill="#fff" />
          <circle cx="313" cy="181" r="7" fill={roleData.accent} opacity=".7" />
          <path
            d="M300 205c2-10 24-10 26 0"
            fill={roleData.accent}
            opacity=".7"
          />
        </>
      )}
      {isDirector && (
        <g>
          <rect x="70" y="193" width="70" height="59" rx="8" fill="#fff" />
          <path
            d="M86 209h38M86 220h29M86 231h35"
            stroke={roleData.accent}
            strokeWidth="4"
            strokeLinecap="round"
            opacity=".6"
          />
          <circle cx="132" cy="193" r="13" fill="#2ca86b" />
          <path
            d="m126 193 4 4 7-8"
            fill="none"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      )}
      {isAssistant && (
        <g>
          <rect x="271" y="212" width="73" height="41" rx="7" fill="#173052" />
          <rect x="278" y="219" width="59" height="27" rx="3" fill="#dff5f3" />
          <path
            d="M292 253h31"
            stroke="#173052"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </g>
      )}
    </svg>
  )
}

function ButtonLink({
  children,
  onClick,
  variant = "primary",
  href,
}: {
  children: ReactNode
  onClick?: () => void
  variant?: "primary" | "light" | "outline"
  href?: string
}) {
  if (href) {
    return (
      <a
        className={`button button--${variant}`}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={`button button--${variant}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function HomePage({ navigate }: { navigate: (path: string) => void }) {
  return (
    <div className="site-shell">
      <header className="topbar">
        <Logo />
        <nav className="topbar__nav" aria-label="Main navigation">
          <button
            className="nav-link nav-link--active"
            type="button"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button
            className="nav-link"
            type="button"
            onClick={() =>
              document
                .querySelector("#roles")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore roles
          </button>
          <a
            className="nav-link"
            href="https://help.blazetech.my/"
            target="_blank"
            rel="noreferrer"
          >
            ACE Knowledgebase
          </a>
        </nav>
        <ButtonLink
          onClick={() =>
            document
              .querySelector("#roles")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Get started <Icon name="arrow" size={18} />
        </ButtonLink>
      </header>

      <main>
        <section className="hero">
          <div className="hero__curve">
            <div className="hero__copy">
              <span className="eyebrow eyebrow--light">
                <Icon name="spark" size={16} /> Your guided ACE experience
              </span>
              <h1>
                Understand ACE.
                <br />
                Know your role.
              </h1>
              <p>
                Explore how Firm, Cosec, Assistant, and Director users move
                through the ACE system — explained in simple, visual steps.
              </p>
              <div className="hero__actions">
                <ButtonLink
                  variant="light"
                  onClick={() =>
                    document
                      .querySelector("#roles")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore ACE <Icon name="arrow" size={18} />
                </ButtonLink>
                <span className="hero__hint">
                  <Icon name="check" size={18} /> Based on the ACE Knowledgebase
                </span>
              </div>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__badge hero__badge--top">
              <span className="icon-box icon-box--blue">
                <Icon name="layers" />
              </span>
              <span>
                <strong>One system</strong>
                <small>Four clear journeys</small>
              </span>
            </div>
            <PersonIllustration role="firm" />
            <div className="hero__badge hero__badge--bottom">
              <span className="status-dot">
                <Icon name="check" size={16} />
              </span>
              <span>
                <strong>Learn at a glance</strong>
                <small>Responsibilities, not statistics</small>
              </span>
            </div>
          </div>
        </section>

        <section className="role-section" id="roles">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                <Icon name="people" size={16} /> Explore by user role
              </span>
              <h2>Choose your ACE journey</h2>
            </div>
            <p>
              Each guide focuses on the responsibilities and information that
              matter to that user, using cautious wording where access can vary.
            </p>
          </div>
          <div className="role-grid">
            {roles.map((role, index) => (
              <article className="role-card" key={role.slug}>
                <div className="role-card__number">0{index + 1}</div>
                <div
                  className="role-card__illustration"
                  style={{ "--role-pale": role.pale } as React.CSSProperties}
                >
                  <PersonIllustration role={role.slug} compact />
                </div>
                <span className="role-card__eyebrow">{role.eyebrow}</span>
                <h3>{role.name}</h3>
                <strong className="role-card__phrase">{role.phrase}</strong>
                <p>{role.description}</p>
                <div
                  className="capability-row"
                  aria-label={`${role.name} areas`}
                >
                  {role.capabilities.map((capability) => (
                    <span key={capability.label} title={capability.label}>
                      <Icon name={capability.icon} size={18} />
                    </span>
                  ))}
                </div>
                <ButtonLink
                  variant="outline"
                  onClick={() => navigate(`/roles/${role.slug}`)}
                >
                  Explore role <Icon name="arrow" size={18} />
                </ButtonLink>
              </article>
            ))}
          </div>
        </section>

        <section className="journey-section">
          <div className="journey-section__intro">
            <span className="eyebrow">
              <Icon name="spark" size={16} /> Built for understanding
            </span>
            <h2>From role to responsibility in seconds.</h2>
            <p>
              No charts, overloaded counters, or unexplained admin screens.
              Every page uses visual cues to show who does what and where
              permissions matter.
            </p>
          </div>
          <div className="journey-line">
            <div className="journey-point">
              <span>1</span>
              <strong>Choose a role</strong>
              <small>Start with the user you want to understand.</small>
            </div>
            <Icon name="arrow" />
            <div className="journey-point">
              <span>2</span>
              <strong>See responsibilities</strong>
              <small>Scan the key areas supported by ACE.</small>
            </div>
            <Icon name="arrow" />
            <div className="journey-point">
              <span>3</span>
              <strong>Follow the journey</strong>
              <small>Understand the sequence and permission boundaries.</small>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <Logo inverse />
        <p>
          ACE Interactive Journey · A visual role guide for university project
          demonstration.
        </p>
        <a href="https://help.blazetech.my/" target="_blank" rel="noreferrer">
          Visit ACE Knowledgebase <Icon name="arrow" size={16} />
        </a>
      </footer>
    </div>
  )
}

function Sidebar({
  activeRole,
  navigate,
  open,
  setOpen,
}: {
  activeRole: RoleSlug
  navigate: (path: string) => void
  open: boolean
  setOpen: (open: boolean) => void
}) {
  return (
    <>
      <button
        className="mobile-menu"
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <Icon name={open ? "x" : "menu"} />
      </button>
      <aside className={`sidebar ${open ? "sidebar--open" : ""}`}>
        <Logo inverse />
        <div className="sidebar__label">Journey navigation</div>
        <nav className="sidebar__nav" aria-label="Role guide navigation">
          <button type="button" onClick={() => navigate("/")}>
            <Icon name="home" />
            <span>Home</span>
          </button>
          <button type="button" onClick={() => navigate("/#roles")}>
            <Icon name="layers" />
            <span>Explore roles</span>
          </button>
        </nav>
        <div className="sidebar__label">Role dashboards</div>
        <nav className="sidebar__nav" aria-label="Role dashboards">
          {roles.map((role) => (
            <button
              className={activeRole === role.slug ? "active" : ""}
              key={role.slug}
              type="button"
              onClick={() => {
                navigate(`/roles/${role.slug}`)
                setOpen(false)
              }}
            >
              <Icon name={role.capabilities[0].icon} />
              <span>{role.name}</span>
              {activeRole === role.slug && <Icon name="chevron" size={17} />}
            </button>
          ))}
        </nav>
        <div className="sidebar__help">
          <span>
            <Icon name="book" />
          </span>
          <strong>Need more detail?</strong>
          <p>Open the official ACE documentation for system instructions.</p>
          <a href="https://help.blazetech.my/" target="_blank" rel="noreferrer">
            Open knowledgebase <Icon name="arrow" size={15} />
          </a>
        </div>
      </aside>
      {open && (
        <button
          className="sidebar-backdrop"
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}

function RolePage({
  role,
  navigate,
}: {
  role: Role
  navigate: (path: string) => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="dashboard-shell">
      <Sidebar
        activeRole={role.slug}
        navigate={navigate}
        open={menuOpen}
        setOpen={setMenuOpen}
      />
      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <div className="breadcrumbs">
            <button type="button" onClick={() => navigate("/")}>
              Home
            </button>
            <Icon name="chevron" size={15} />
            <button type="button" onClick={() => navigate("/#roles")}>
              Explore roles
            </button>
            <Icon name="chevron" size={15} />
            <strong>{role.name}</strong>
          </div>
          <span className="guide-chip">
            <span /> Interactive role guide
          </span>
        </header>

        <div className="dashboard-content">
          <section
            className="role-hero"
            style={
              {
                "--role-accent": role.accent,
                "--role-pale": role.pale,
              } as React.CSSProperties
            }
          >
            <div className="role-hero__copy">
              <span className="eyebrow">
                <Icon name="spark" size={16} /> {role.eyebrow}
              </span>
              <h1>
                Welcome to the
                <br />
                <span>{role.name} Dashboard</span>
              </h1>
              <p>{role.intro}</p>
              <div className="role-hero__actions">
                <ButtonLink
                  onClick={() =>
                    document
                      .querySelector("#responsibilities")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View responsibilities <Icon name="arrow" size={18} />
                </ButtonLink>
                <ButtonLink variant="outline" href={role.guideUrl}>
                  Official ACE guide <Icon name="arrow" size={18} />
                </ButtonLink>
              </div>
            </div>
            <div className="role-hero__visual">
              <PersonIllustration role={role.slug} />
              <div className="permission-pill">
                <Icon name="shield" size={18} /> Access follows account
                permissions
              </div>
            </div>
          </section>

          <section className="responsibilities" id="responsibilities">
            <div className="section-heading section-heading--compact">
              <div>
                <span className="eyebrow">
                  <Icon name="briefcase" size={16} /> Main responsibilities
                </span>
                <h2>What a {role.name} user can focus on</h2>
              </div>
              <p>Four clear areas, shown without distracting statistics.</p>
            </div>
            <div className="responsibility-grid">
              {role.responsibilities.map((item, index) => (
                <article className="responsibility-card" key={item.title}>
                  <div className="responsibility-card__top">
                    <span
                      className="responsibility-card__icon"
                      style={{ background: role.pale, color: role.accent }}
                    >
                      <Icon name={item.icon} size={30} />
                    </span>
                    <span className="responsibility-card__number">
                      0{index + 1}
                    </span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span
                    className="responsibility-card__line"
                    style={{ background: role.accent }}
                  />
                </article>
              ))}
            </div>
          </section>

          {role.workflow ? (
            <section className="workflow-section">
              <div className="section-heading section-heading--compact">
                <div>
                  <span className="eyebrow">
                    <Icon name="layers" size={16} /> Simple workflow
                  </span>
                  <h2>How the journey flows</h2>
                </div>
                <p>
                  A visual example of the supported sequence, subject to the
                  item and your permissions.
                </p>
              </div>
              <div className="workflow">
                {role.workflow.map((step, index) => (
                  <div className="workflow__group" key={step.title}>
                    <article className="workflow-step">
                      <span
                        className="workflow-step__number"
                        style={{ background: role.accent }}
                      >
                        Step {index + 1}
                      </span>
                      <span
                        className="workflow-step__icon"
                        style={{ color: role.accent, background: role.pale }}
                      >
                        <Icon name={step.icon} size={32} />
                      </span>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </article>
                    {index < role.workflow!.length - 1 && (
                      <span
                        className="workflow__arrow"
                        style={{ color: role.accent }}
                      >
                        <Icon name="arrow" size={28} />
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ) : (
            <section className="role-path">
              <div className="role-path__copy">
                <span className="eyebrow">
                  <Icon name="layers" size={16} /> Connected experience
                </span>
                <h2>Keep work structured from overview to follow-up.</h2>
                <p>
                  Use the four responsibility areas as a visual map. The ACE
                  interface and your account permissions determine the exact
                  actions available.
                </p>
              </div>
              <div className="role-path__steps">
                {role.responsibilities.map((item, index) => (
                  <div className="role-path__step" key={item.title}>
                    <span style={{ color: role.accent, background: role.pale }}>
                      <Icon name={item.icon} />
                    </span>
                    <strong>{item.title}</strong>
                    {index < role.responsibilities.length - 1 && (
                      <Icon name="arrow" size={18} />
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          <aside className="accuracy-note">
            <span className="accuracy-note__icon">
              <Icon name="shield" size={26} />
            </span>
            <div>
              <strong>Designed around documented ACE access</strong>
              <p>
                {role.note} Features shown here are explanatory, not simulated
                operational controls.
              </p>
            </div>
            <ButtonLink variant="outline" href={role.guideUrl}>
              Read source guide <Icon name="arrow" size={17} />
            </ButtonLink>
          </aside>
        </div>
      </main>
    </div>
  )
}

function getPath() {
  return window.location.pathname
}

export default function App() {
  const [path, setPath] = useState(getPath)

  useEffect(() => {
    const onPopState = () => setPath(getPath())
    window.addEventListener("popstate", onPopState)
    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  const navigate = (nextPath: string) => {
    const [pathname, hash] = nextPath.split("#")
    window.history.pushState(
      {},
      "",
      `${pathname || "/"}${hash ? `#${hash}` : ""}`,
    )
    setPath(pathname || "/")
    window.scrollTo({ top: 0, behavior: "smooth" })
    if (hash) {
      window.setTimeout(
        () =>
          document
            .querySelector(`#${hash}`)
            ?.scrollIntoView({ behavior: "smooth" }),
        50,
      )
    }
  }

  const slug = path.match(
    /^\/roles\/(firm|cosec|assistant|director)\/?$/,
  )?.[1] as RoleSlug | undefined
  const role = roles.find((item) => item.slug === slug)

  if (role) return <RolePage role={role} navigate={navigate} />
  return <HomePage navigate={navigate} />
}
