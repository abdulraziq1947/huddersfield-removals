---
name: local-seo-schema-generator-elite
description: >
  Elite Local SEO Schema Generator (v3 Synthesis Edition). Use whenever the user asks to create, generate, build, audit, or optimize JSON-LD structured data for any local business — auto repair, auto dealer, restaurant, dentist, attorney, plumber, HVAC, roofer, electrician, salon, gym, hotel, real estate, CPA, vet, funeral home, tutor, pet groomer, tattoo, self storage, body shop, tow, retail, event rental, or any LocalBusiness subtype. Also trigger on "schema," "structured data," "JSON-LD," "rich results," "knowledge graph," "AEO," "GEO," "LLMO," "AI Overviews," "Entity Home," "Map Pack schema," "local schema audit," or terse prompts like "schema for my client's [business]." Produces top-0.1% @graph entity architecture engineered for Map Pack ranking, AI citation (Google AI Overviews, ChatGPT, Perplexity, Gemini, Claude, Copilot), and agentic-commerce readiness. Handles creation, audits, upgrades, multi-location rollouts, vertical builds, post-deploy LLM verification, and entity-flywheel operation.
---

# Local SEO Schema Generator — Elite Edition v3

> **The one-paragraph synthesis.** Architect every page as a bilingual document with depth-over-breadth nesting, anchor the entity graph to a permanent Entity Home, align schema/prose/architecture vectors, expose the agent-API surface, curate the un-automatable entity reconciliation layer, and operate the 12-month flywheel — because the AI consumer is now primary, the SERP rich result is a fading bonus, and the defensive sale (controlling how AI describes the business) is more durable than the offensive sale (ranking higher). This skill produces JSON-LD schema engineered against that reality.

This skill produces JSON-LD schema engineered for three simultaneous objectives:

1. **Map Pack + Local Finder dominance** — the schema reinforces every signal the Google Business Profile already sends, creating cross-source entity validation that strengthens local ranking.
2. **AI citation extraction** — the schema is structured for clean machine parsing by Google AI Overviews, ChatGPT, Perplexity, Gemini, Claude search, and Bing Copilot, giving the business a higher probability of being cited in answer engines.
3. **Agentic-commerce readiness** — the schema exposes the action and transaction surface that autonomous agents will use to discover and transact with the business as agent-driven commerce scales through 2027 and beyond.

The output is never a flat blob of properties on a single LocalBusiness node. It is always a connected entity graph — `@graph` containing Organization, LocalBusiness, WebSite, WebPage, BreadcrumbList, and Person nodes that reference each other by `@id`. This is the architectural difference between schema that validates and schema that builds knowledge graph signal.

---

## How this skill is structured

This is a comprehensive reference. Read it once front-to-back; thereafter, navigate by section.

- **Part I — Foundational Doctrine (the 10 synthesis principles).** The conceptual differentiator. These principles, taken together, are what separate top-0.1% schema work from validator-passing template output. Read this first; everything downstream descends from it.
- **Part II — Google Policy Timeline (2023-2026).** What was deprecated, when, and what it means for current implementation choices. Critical context — many practitioners still build schema as if 2022 rules apply.
- **Part III — Property Type-Constraint Reference.** The domain rules for every property the skill recommends, so you don't ship `mentions` on a LocalBusiness or `audience` on an Organization.
- **Part IV — Architectural Principles.** The @graph foundation, base script pattern, primary entity per page, isPartOf/hasPart chains, @id permanence, server-side rendering, department vs subOrganization, nested OfferCatalog, Service-first vs LocalBusiness-first.
- **Part V — The 9-Tier Entity Architecture.** The systematic build-out from Core Identity through AEO/GEO Reinforcement.
- **Part VI — Map Pack Alignment Audit.** The 11-point checklist for schema/GBP coherence.
- **Part VII — Service Area Business Patterns.** GeoCircle, GeoShape, containsPlace, eligibleRegion, multi-state, hide-address.
- **Part VIII — Vertical Templates.** 25+ vertical-specific builds with ready-to-deploy JSON-LD.
- **Part IX — Companion Schema Types.** FAQPage, HowTo, Article, BlogPosting, NewsArticle, Course, Event.
- **Part X — Compliance & the 2019 Review Issue.** Self-serving review markup, Product/Service wrappers, what's allowed and what isn't.
- **Part XI — Wikidata QID Reference.** Curated table of QIDs for common local business categories.
- **Part XII — Multi-Location Handling.** Headquarters/branch, franchise, department vs subOrganization distinctions.
- **Part XIII — The Un-Automatable Layer Curation Protocol.** The four fields that require expert human judgment — and how to do that judgment well.
- **Part XIV — The Last-Mile Verification Protocol.** Validator-passing is the floor; verifying AI representation is the ceiling.
- **Part XV — The Schema Flywheel.** The 12-month compounding loop, with leading indicators per stage.
- **Part XVI — Client Conversation Framework.** Defensive framing, discovery questions, deliverable language. How to sell this work.
- **Part XVII — Diminishing Returns.** What NOT to do. The over-engineering trap.
- **Part XVIII — Emerging Tech Appendix.** NLWeb, MCP, llms.txt, RLM-on-KG. What to track in the next 12-24 months.
- **Part XIX — Influencer Concept Index.** Glossary of terms-of-art (Entity Home, Brand Context Optimization, Algorithmic Brand Clarity, Relevance Engineering, Query Fan-Out, BRIDGE, etc.) with attribution.

---

## Part I — Foundational Doctrine: The 10 Synthesis Principles

These ten principles are the conceptual core of this skill. Each is a cross-connection between adjacent practitioners' work that, when stitched together, produces a methodology rather than a checklist. Internalize these before implementing anything.

### Principle 1 — Depth Beats Breadth

**Statement.** Minimize top-level entities in the @graph. Maximize nesting depth. Every entity should answer the question "what is this part of?" before declaring what it contains.

**Why this is true.** Andrea Volpini's RLM-on-KG work (January 2026, adapted from the MIT Zhang/Kraska/Khattab paper of December 2025) exposed something underappreciated about how AI consumers actually read schema: **Recursive Language Models don't ingest the whole graph — they navigate it.** They query, decompose, and recurse into branches that look promising for the active question. This is graph traversal, not document parsing.

The implication that almost nobody has stated: for AI consumption, a graph with 8 top-level entities and 5 levels of nesting outperforms a graph with 25 top-level entities and 2 levels of nesting. Recursive systems reward depth because each nested level is a queryable substructure. The "advanced nested schema improves LLM visibility" point Nikolaj Mogensen made at Searchday 2026 (Aarhus) is half this insight; the other half is the active *reduction* of top-level entities so the graph has clearer central anchors to descend from.

**What this looks like in practice.** A common (mediocre) graph has the LocalBusiness, the Organization, multiple Services, multiple Products, an Event, several Persons, an FAQPage, and a HowTo all as top-level siblings in the @graph array. Twelve top-level entities, two levels deep. A top-0.1% graph has the same information represented as: Organization (top-level) → LocalBusiness (referenced) → hasOfferCatalog → OfferCatalog (category) → itemListElement → [Offer → itemOffered → Service → makesOffer → [Offer → priceSpecification], hasOfferCatalog → OfferCatalog (sub-category) → ...]. Five top-level entities, six levels deep. Same data, vastly stronger graph structure.

**How to operationalize.** When designing any @graph, after the initial draft, ask: "Can this top-level entity become a nested entity inside a parent it logically belongs to?" If yes, nest it. Iterate until every top-level entity is genuinely a peer of the others (Organization, WebSite, WebPage, LocalBusiness, BreadcrumbList — these are peers; an Event happening at the LocalBusiness is not a peer, it is `subEvent` of the business or `event` of an Offer).

### Principle 2 — The Vector-Alignment Triangle

**Statement.** Schema, prose, and site architecture must vector-align. When they don't, AI extracts whichever signal is loudest at the moment of the query — and you have no control over which.

**Why this is true.** Olaf Kopp's Brand Context Optimization says your prose should consistently express the same entity-attribute triples (subject-predicate-object). Mike King's Site Focus Calculator measures how off-topic a given page is relative to the site's central vector embedding (below 0.7 is suspect). Neither has explicitly connected these to schema, but the connection is structural: **all three of (a) schema's central declaration, (b) the prose's repeated entity-attribute pairs, and (c) the page's location in site architecture vectorize to a position in concept space.** When those three positions disagree, the AI consumer has to choose one — and which it chooses is unpredictable.

**The defect pattern.** A tent rental company writes "premier West Texas tailgating destination" in the hero, declares `Service` "wedding rentals" in the schema, and places the page at `/site/about/team/` in the URL hierarchy. Three different vectors. The schema says weddings; the prose says tailgating; the architecture says about-page. An LLM extracting "what does this business do?" will sample whichever signal is most prominent in its retrieval at that moment.

**How to operationalize.** For every page, run a **triangulation audit** before publication:
1. What is the schema's central declaration? (`@type` + `name` + primary `description`)
2. What entity-attribute pairs does the prose repeat? (Pull the 5 most-repeated noun phrases and adjective-noun pairs.)
3. Where does this page sit in site architecture? (URL path + internal link inbound profile.)

If all three express the same thing, you have vector alignment. If they don't, the schema isn't the problem; the prose and/or architecture need to be brought into alignment. This is content team work, not technical SEO work — see Principle 5.

### Principle 3 — The Dual-Consumer Inversion

**Statement.** Schema serves two consumers — the SERP rich-result system and the AI extraction system — with divergent rewards. Through May 2026 the AI consumer became primary; the SERP rich result became secondary. Implementation decisions must reflect this inversion.

**Why this is true.** Until 2023, the implementation calculus was: "Does this trigger a rich result? Yes → implement. No → skip." The deprecation cascade obliterates that calculus:

| Schema type | SERP rich result status | AI citation value |
|---|---|---|
| FAQPage | Deprecated May 7, 2026 (except gov/health) | 3.2x higher AI Overview citation rate (Frase research) |
| HowTo | Deprecated fully (desktop + mobile) | Still parsed for AI extraction |
| Vehicle Listing | Deprecated July 31, 2025 | Still parsed; use Product+Vehicle wrapper |
| Course Info | Deprecated | Still parsed |
| Estimated Salary | Deprecated | Still parsed |
| Learning Video | Deprecated | Still parsed |
| Special Announcement | Deprecated | Still parsed |
| Practice Problem | Deprecated Jan 2026 | Still parsed |
| Claim Review | Deprecated | Still parsed |
| LocalBusiness | Still active for Map Pack | High citation value |
| Product + Offer | Active | High citation value |
| Review (within wrapper) | Active for product/service | High citation value |

The inversion: many of the highest-AI-value types now produce zero SERP enhancement. Implementing FAQPage in 2026 is not chasing rich results — it is engineering AI citation eligibility. The validator-passing checkbox stops being the goal.

**How to operationalize — the Dual-Consumer Decision Matrix.** For every property and type decision, score against both consumers explicitly:

| Decision | SERP weight (0-10) | AI weight (0-10) | Implement? |
|---|---|---|---|
| FAQPage on service pages | 0 | 9 | YES |
| HowTo on guide content | 0 | 7 | YES |
| LocalBusiness `aggregateRating` | 2 (self-serving, no stars) | 8 (entity reinforcement) | YES |
| `speakable` on key answers | 0 (no current SERP feature) | 6 | YES |
| `mentions` on WebPage | 0 | 8 (entity context) | YES |
| Product `aggregateRating` on Service wrapper | 7 (stars eligible) | 8 | YES with caution (compliance §X) |
| `priceRange` text field | 3 | 5 | YES |
| Detailed `Vehicle` properties | 1 (no listing rich result) | 7 | YES for VDPs |

The discipline: never reject a property because "it doesn't trigger rich results anymore." That criterion is half-dead. Reject a property only if (a) it's inaccurate or (b) it crowds out a more valuable signal. Mike King's quote from SEO Week 2025 captures this: *"Historically we've only incorporated structured data that yielded rich results. Now is the time to use anything that is relevant to your content because generative systems use it all."*

### Principle 4 — Optimize for What Doesn't Automate

**Statement.** Schema App, WordLift, schemawriter.ai, and a growing field of tools are racing to automate template schema generation. Within 36 months, generating @graph foundations for an arbitrary business will be a commodity API call. Spend 90% of expert schema-craft time on the four fields that don't automate well.

**Why this is true.** The automation roadmap is visible. Template detection (recognize a business as a restaurant, deploy Restaurant schema with menu/hours/address scaffolding) is mostly solved. What tools still get wrong, often:

1. **`additionalType` with the most precise Wikidata QID available.** Tools guess at QIDs and get them wrong constantly. The equipment-rental QID Q1429217 is a good example — schemawriter or Schema App will reach for Q4830453 (business) or a generic store/service QID. The precise QID requires checking schema.org's hierarchy, querying Wikidata directly, and confirming the entity actually matches. This is human judgment work.
2. **`sameAs` curated for authority and relevance.** Tools populate generic `sameAs` arrays — Facebook, Instagram, the obvious profiles. They cannot tell that the abandoned Yelp listing at the old address is a corrupted citation that must be merged, that the BBB profile is fully populated while the Justia profile is stale, or that the niche industry directory (West Texas Home Builders Association, the regional CPA society, the state plumbing board) is worth more for entity reconciliation than five social profiles. Curated `sameAs` is the single highest-leverage entity property.
3. **`mentions` chosen for entity-context reinforcement.** Tools can populate `mentions` with the obvious entities (the city, the state). They cannot intelligently choose which 10 entities from the universe of 10,000 candidates *strengthen this specific business's context*. For a Lubbock criminal defense attorney, the strong mentions are the local courts (Lubbock County District Court, Texas Court of Criminal Appeals), the regional law schools (Texas Tech School of Law), specific case-law concepts the attorney handles, the bar associations. A tool will reach for the city, the county, maybe "law." Useful but thin.
4. **The relationship layer — `founder`, `employee`, `worksFor`, `alumniOf`, `memberOf`, `parentOrganization`, `subOrganization`, `branchOf`, `affiliation`.** These properties model how entities connect, and they require knowing the actual organizational facts (who founded the company, who works there now, what associations they belong to, who their parent organization is). Tools cannot infer these reliably from a website.

**How to operationalize.** Spend 90% of expert schema time on these four fields. Run an explicit pass for each one before deploying. Document the entity reconciliation work (which QID was selected and why, which directories were chosen as `sameAs` and why) so future audits can verify the judgment.

This is the agency moat for the next 3-5 years. Anyone can deploy template schema; few can curate entity reconciliation with this depth.

### Principle 5 — Pages As Bilingual Documents

**Statement.** Martha van Berkel's reframe ("schema is the language of machines and AI") is correct but incomplete. The full framing: every page is a bilingual document with two readers — human and machine — that should be designed together, not sequentially.

**Why this matters.** The standard workflow is: content team writes the page, technical SEO bolts schema on at the end. This produces schema that *describes* the page rather than schema that *was co-designed with* the page. The result: schema fields and prose fields tend to drift apart over time as content is edited but schema is not.

**The reframe.** When a writer drafts "We've been serving West Texas weddings since July 2021," the corresponding schema is `foundingDate: "2021-07"`, `areaServed: West Texas`, `Service: wedding rentals`. That triple should be committed at the writing desk, not retrofitted afterward. The brief for the content team should require entity declarations — name of every entity that will be referenced, attributes of each, relationships between them — and the schema generates mechanically from those declarations.

**How to operationalize — the Bilingual Content Brief Template.** For every page the content team writes, the brief must specify:
1. **Primary entity of the page.** What is this page about? One entity. (Per Principle 1: `mainEntity` of the WebPage.)
2. **Entity attributes.** What facts will be repeatedly stated about the primary entity? (These become `description`, `foundingDate`, `areaServed`, `knowsAbout`, etc.)
3. **Related entities mentioned.** What other entities will be referenced? (These become `mentions` and `sameAs` candidates.)
4. **Relationships expressed.** How does the primary entity connect to the related entities? (These become `provider`, `founder`, `parentOrganization`, etc.)
5. **Repeated entity-attribute pairs.** (Per Principle 2, Brand Context Optimization — Kopp.) Which subject-predicate-object triples will the prose repeat at least three times in slightly different phrasings?

When the brief is filled in, the schema essentially writes itself from the brief. The writer and the schema architect work from the same document. The deliverable is paired — content + schema together, not content first then schema bolted on.

This positioning is unusual and is a strong agency differentiator. Most agencies sell content and schema as separate line items. The bilingual approach sells them as a single deliverable.

### Principle 6 — Schema As Agent API

**Statement.** Schema is no longer just SEO markup. It is your public-facing transactional API. Design it accordingly.

**Why this is true.** Andrea Volpini's prediction: by February 2027, AI agents will guide over $1T in annual global e-commerce — 10-15% of the $9-10T market. Even if directionally right at 10% of his number, that's $100B routed by agents reading machine-readable business surfaces. Microsoft's NLWeb (May 2025, created by RV Guha who created Schema.org) explicitly uses Schema.org as the data layer. Anthropic's MCP (Model Context Protocol) increasingly does too. The trajectory is clear: schema is becoming the standard API surface for agentic discovery.

**What this means for property selection.** The fields that get neglected in conventional schema work become essential when the consumer is an agent:

- **`PotentialAction` family** — `ReserveAction`, `OrderAction`, `BuyAction`, `CommunicateAction`, `PayAction`, `ScheduleAction`. These are the verb surface. Without them, an agent cannot transact.
- **Transaction properties on Service** — `serviceOutput`, `hoursAvailable`, `availableLanguage`, `availableChannel`.
- **Payment properties on Organization** — `paymentAccepted` (as array), `currenciesAccepted`, `acceptedPaymentMethod`.
- **Eligibility properties on Offer** — `eligibleRegion`, `eligibleCustomerType`, `eligibleTransactionVolume`, `eligibleQuantity`, `eligibleDuration`.
- **Action target URLs** — first-party domain endpoints that agents can hit programmatically. Not third-party intermediary URLs.

**The example.** Lubbock Event Rentals in 2027: if an AI agent is booking a tent rental for a user, the agent needs:
- What payment methods are accepted (Stripe? ACH? Net-30 invoicing for corporate?) → `acceptedPaymentMethod`
- What languages support is available in → `availableLanguage`
- What hours service operates → `hoursAvailable` on the Service
- What the minimum order is → `eligibleTransactionVolume`
- What the service area is → `serviceArea` / `eligibleRegion`
- What the available inventory is at the requested date → would require a deeper `inventoryLevel` or feed integration

Almost no local business schema today exposes this. The agency that pre-emptively builds this API surface owns the agentic-commerce lane before competitors realize the lane exists.

**How to operationalize.** Add an **Agent API checklist** to every schema build:
- [ ] Primary `PotentialAction` declared with first-party target URL
- [ ] `paymentAccepted` array populated
- [ ] `acceptedPaymentMethod` populated where Payment-specific
- [ ] `availableLanguage` populated
- [ ] `currenciesAccepted` if applicable
- [ ] `hoursAvailable` on Services (not just `openingHoursSpecification` on the Business)
- [ ] `serviceOutput` declared where the service produces a definable output
- [ ] `eligibleRegion` on Offers when geo-restricted
- [ ] `eligibleTransactionVolume` for minimum-order businesses
- [ ] `eligibleCustomerType` if the service is restricted (B2B-only, age-restricted, etc.)

Frame this internally as: "If a competent autonomous agent visits the site today, can it transact?" If no, the agent-API surface is incomplete.

### Principle 7 — The @id Permanence Commitment

**Statement.** Once an `@id` is published, it never changes. Choose carefully on first deploy.

**Why this is the most-violated principle in schema implementation.** `@id` is treated as a namespace identifier. Practitioners change it freely as the site evolves: `https://example.com/#organization` becomes `https://example.com/#/schema/Organization/1` becomes `https://example.com/about#org` as the site is restructured. **Each change splinters the entity's accumulated AI consumer trust.**

Knowledge graphs are temporal. AI consumers build confidence in `@id` references through repeated exposure across crawls. When the @id changes, every consumer treats the new value as a different entity with zero accumulated trust. The entity's reputation has to be rebuilt from scratch — and the old reputation still exists, attached to the old @id, with no way to merge them after the fact.

**The commitment.** Treat `@id` as permanent. Choose patterns that won't need to change as the site grows:
- **Organization:** `https://[domain]/#organization`
- **WebSite:** `https://[domain]/#website`
- **LocalBusiness (single-location):** `https://[domain]/#localbusiness` OR location-pegged like `https://[domain]/#location-mainstreet`
- **LocalBusiness (multi-location):** `https://[domain]/locations/[slug]#localbusiness` — pegged to the location's permanent page
- **Person entities:** `https://[domain]/about/[firstname-lastname]#person` — pegged to the person's permanent bio page (or `https://[domain]/about/#person-[firstname-lastname]` if no individual page exists)
- **WebPage:** `[full URL of the page]#webpage`
- **Service entities:** `https://[domain]/services/[service-slug]#service`
- **Logo ImageObject:** `https://[domain]/#logo`

When the site is later restructured, the @ids stay. Pages move; @ids redirect via 301 along with the URLs. The @id is the *entity's* identifier, not the *page's* identifier — even if it happens to be expressed using URLs.

**The diagnostic.** When auditing existing schema, ask: "Have these @ids changed in the last 24 months?" If yes, document the historical @ids the AI consumers may still have cached; if possible, retain the old @id forms as `additionalProperty` or in a transition period to ease reconciliation. Going forward, lock the @id scheme.

This commitment-grade treatment of @id is, ironically, what most distinguishes agency-grade schema work from amateur or tool-generated output.

### Principle 8 — The Last-Mile Verification Protocol

**Statement.** Validator-passing is the floor. Verifying the schema actually changed what AI consumers say about the business is the ceiling. Most implementations stop at the floor.

**Why this is the deepest gap in current practice.** Everyone implements schema. Everyone validates with Google's Rich Results Test and the Schema Markup Validator. **Almost nobody verifies that the schema actually changed what AI systems say about the business.** Kalicube monetizes this gap (Kalicube Pro tracks AI representations across 25B+ data points). The enterprise tooling is expensive, but the practice itself is free.

**The agency-scale verification protocol.** After schema deploys, query each major LLM with five test queries:

1. "What is [business name]?"
2. "What services does [business name] offer?"
3. "Where is [business name] located?"
4. "Who founded [business name]?" (Or who runs it / who owns it.)
5. "What makes [business name] different from competitors?"

Run these in ChatGPT (with browse), Perplexity, Google AI Mode / Gemini, and Claude (with web search). Compare answers to schema declarations.

Where the answers match schema, the AI consumer is reading the schema correctly. Where they diverge, the divergence diagnoses where additional work is needed — usually corroboration (more directory presence, more `sameAs` sources, third-party mentions on authoritative content, prose-side reinforcement per Principle 5).

**Cadence.**
- **Pre-deploy (T-0):** Run the queries before schema goes live. Document baseline AI answers.
- **T+2 weeks:** Re-run the same queries. Note changes. Some LLM platforms refresh faster than others (Perplexity is fastest, ChatGPT slowest).
- **T+6 weeks:** Re-run. Document directional progress.
- **T+12 weeks (quarterly thereafter):** Re-run as part of ongoing entity hygiene.

**What to do with divergence.** If at T+6 weeks the AI still says something inaccurate about the business:
- Check the corroboration sources. The AI is probably pulling from a stale third-party source (an old Yelp listing, an outdated chamber of commerce profile, a deprecated industry directory). Fix or claim those sources.
- Check the prose-side. The website may have lingering text that contradicts the schema. Fix the prose.
- Check the `sameAs` sources for completeness. Add any authoritative directories you haven't yet claimed.
- Consider third-party citations. If the AI's wrong answer points to a specific competitor source or industry article, you need to either get a correction made or build sufficient first-party authority that your version of the facts outweighs theirs.

This single practice puts any agency in the top 1% of schema implementers, because every other agency stops at "validator passed, ship it."

### Principle 9 — Defensive Framing as the Strategic Frame

**Statement.** The strategic frame for schema work is defensive (controlling AI's representation of the business) rather than offensive (ranking higher in search). The defensive frame raises stakes, justifies investment, and outperforms in client retention.

**Why the offensive frame is now commoditized.** Every agency sells schema as "improve rich results, rank higher, get more clicks." This is true but increasingly thin: rich results are eroding (Principle 3), ranking factor influence from schema is marginal, and AI-driven discovery is replacing click-through behavior. The offensive frame describes diminishing payoff.

**The defensive frame.** Without comprehensive, well-curated schema, AI will:
- Hallucinate facts about the business (wrong founding date, wrong services, wrong area served).
- Confuse the business with similarly-named operations in other cities or industries.
- Attribute the business's services to competitors in the same category.
- Group the business with lower-quality operators in the category.
- Reproduce outdated information from stale third-party sources.

And the business has no mechanism to correct the AI after the fact other than schema (plus the corroboration layer schema anchors). The AI is talking to prospects, customers, and partners 24 hours a day. Misrepresentation is happening now whether the business participates in shaping it or not.

**Why this frame works for selling the work.** A business owner can dismiss "rank slightly higher" but cannot dismiss "AI is telling my prospects the wrong thing about me." Schema becomes brand insurance, not ranking optimization. The deliverable framing shifts from "we'll implement schema" to "we'll architect your AI representation so machines describe you the way you'd describe yourself." Per Jason Barnard's framing of AI engines as "seven employees you didn't hire who are talking to your customers 24 hours a day" — the question is whether they're trained to represent the business accurately or sending customers to competitors.

**How to use this frame in client conversations.** See Part XVI for full discovery questions, deliverable language, and case-study framing.

### Principle 10 — The Schema Flywheel

**Statement.** Schema work generates compounding returns over 6-12 months when run as a flywheel, not a one-time implementation. The agency that operates the flywheel sees outcomes that single-deploy competitors cannot replicate.

**The seven-stage loop.**

1. **Comprehensive schema deploys.** AI extracts the entity correctly (right name, right category, right location, right services, right relationships).
2. **Correct extraction → AI cites the business in answers.** When users ask LLMs about the category, the business shows up in the response.
3. **AI citations → branded search demand rises.** Users hear about the business in AI answers and Google-search the name. Branded impressions in GSC tick up.
4. **Branded search demand → Google strengthens entity signals.** Google interprets rising branded search as authority signal. The entity's standing in the Knowledge Graph improves.
5. **Stronger entity signals → Knowledge Panel eligibility rises.** The business becomes a candidate for a Knowledge Panel on its own Brand SERP (Jason Barnard's term).
6. **Knowledge Panel inclusion → new `sameAs` sources unlock.** Google Knowledge Graph URL, often Wikipedia inclusion, third-party "this business is verified" notations. These all become new `sameAs` entries.
7. **Richer `sameAs` set → deeper, more authoritative schema → loop tightens.** The next iteration of schema includes all the new corroboration sources. AI extraction gets even more reliable. Citations rise further. Repeat.

**Leading indicators per stage.**

| Stage | Metric | Source | Time to first signal |
|---|---|---|---|
| 1 → 2 | Validator passing, no errors | Schema Markup Validator | Immediate |
| 2 | Test queries return the business in answers | Manual LLM queries (per Principle 8) | 2-6 weeks |
| 3 | Branded impressions trending up | GSC Performance, brand-name filter | 4-12 weeks |
| 4 | Non-branded "[category] [city]" impressions rising | GSC Performance | 8-16 weeks |
| 5 | Knowledge Panel appears on Brand SERP | Manual check of Google search for business name | 3-12 months |
| 6 | New authoritative sources appear in search for business name | Manual SERP audit | 3-9 months |
| 7 | Updated schema deploys with new corroboration | Internal deploy schedule | Quarterly cadence |

**The engagement framing.** This is not a one-and-done project. Frame the work as **schema operations** — an ongoing engagement to operate the flywheel. Quarterly schema updates, monthly AI verification, continuous monitoring of new authoritative sources to add to `sameAs`. The agency revenue model shifts from project-based to retainer-based — and the client outcome is genuinely better because the flywheel compounds.

**What this lets the agency promise that competitors cannot.** Single-deploy competitors can promise "we'll add schema." The flywheel operator can promise "we will operate your AI-entity flywheel for 12 months and document compounding signals at each stage." That promise structurally outperforms because the flywheel structurally outperforms — and the client understands why.

---

These ten principles are the conceptual differentiator. Everything in Parts II through XIX is implementation in service of these principles. When in doubt, return here.

---

## Part II — Google Policy Timeline (2023-2026)

Critical context for current implementation choices. Many practitioners still build schema as if 2022 rules apply. The deprecation cascade between August 2023 and June 2026 fundamentally changes which types produce SERP rich results, but — critically — does NOT change which types are valuable for AI extraction. The Dual-Consumer Inversion (Principle 3) lives here.

### The deprecation timeline

| Date | Schema type / feature | Status change | Source |
|---|---|---|---|
| Aug 2023 | FAQPage rich results | Restricted to authoritative gov + health sites | Google Search Central Blog |
| Aug 2023 | HowTo rich results (mobile) | Removed | Google Search Central Blog |
| Sep 2023 | HowTo rich results (desktop) | Fully deprecated | Google Search Central Blog |
| Oct 2023 | Vehicle Listing | Introduced (US dealerships) | Google Search Central Blog |
| Jun 2025 | Course Info rich result | Deprecated | Google docs |
| Jun 2025 | Claim Review rich result | Deprecated | Google docs |
| Jun 2025 | Estimated Salary rich result | Deprecated | Google docs |
| Jun 2025 | Learning Video rich result | Deprecated | Google docs |
| Jun 2025 | Special Announcement | Deprecated | Google docs |
| Jul 2025 | Vehicle Listing rich result | Deprecated | Google docs |
| Sep 2025 | Search Console reporting removed for 6 deprecated types | Removed | Google Search Central |
| Nov 2025 | Practice Problem deprecation announced | Coming Jan 2026 | Google docs (via John Mueller) |
| Nov 2025 | Book Actions deprecation REVERSED | Restored | Google docs |
| Jan 2026 | Practice Problem rich result | Removed | Google docs |
| Jan 2026 | Dataset clarification | Only used by Dataset Search, not regular Search | Google docs |
| **May 7, 2026** | **FAQPage rich results** | **Fully deprecated for ALL sites** | **Google docs (current)** |
| Jun 2026 | FAQ search appearance + Rich Results Test support | Dropped | Google docs |
| Aug 2026 | FAQ Search Console API support | Removed | Google docs |

### What's dead for SERP / still alive for AI

The single most important framing: **deprecated SERP rich result ≠ deprecated schema.** Almost every deprecated type is still actively parsed by Google AI Overviews, ChatGPT (browse), Perplexity, Gemini, Claude, and Bing Copilot for content extraction. The schema is still valuable — it just no longer produces visual SERP enhancement.

| Schema type | SERP feature status (May 2026) | AI extraction value | Implementation recommendation |
|---|---|---|---|
| `LocalBusiness` (+ subtypes) | Map Pack reinforcement signal — alive | High (entity citation, Knowledge Panel candidacy) | ALWAYS implement |
| `Organization` | Knowledge Panel logo, sitelinks search box | High | ALWAYS implement |
| `WebSite` (+ SearchAction) | Sitelinks search box | Medium (sitewide context) | ALWAYS implement |
| `WebPage` | Indirect (helps every other rich result) | High (page context for AI) | ALWAYS implement |
| `BreadcrumbList` | Breadcrumb display in SERP — alive | High (site hierarchy for AI) | ALWAYS implement |
| `FAQPage` | DEPRECATED May 7, 2026 (except gov/health) | Very high — 3.2x AI Overview citation rate (Frase) | IMPLEMENT for AI; understand SERP value is gone |
| `HowTo` | DEPRECATED (desktop + mobile) | Medium | IMPLEMENT for guide content; understand SERP value is gone |
| `Article` / `BlogPosting` / `NewsArticle` | Article rich result — alive (specific types) | High | IMPLEMENT for editorial content |
| `Product` + `Offer` | Product rich result — alive | High | IMPLEMENT for any sellable item |
| `Review` / `AggregateRating` (within Product/Service wrapper) | Review stars — alive in product context | High | IMPLEMENT carefully — see §Compliance |
| `Vehicle` + `Product` | Vehicle Listing rich result DEPRECATED Jul 2025 | High (for VDPs) | IMPLEMENT as Product+Vehicle for AI |
| `Event` | Event rich result — alive | High | IMPLEMENT for events |
| `Course` | Course Info rich result DEPRECATED | Medium | IMPLEMENT if relevant for AI |
| `JobPosting` | Alive | High | IMPLEMENT for hiring pages |
| `Recipe` | Alive | High | IMPLEMENT for food sites |
| `VideoObject` | Alive (with various restrictions) | High | IMPLEMENT for video content |
| `ImageObject` (with license/creator) | Licensable image badge — alive | Medium-High | IMPLEMENT |
| `MedicalCondition` / `Drug` | Various, limited | High for healthcare | IMPLEMENT for medical sites |
| `Claim Review` | DEPRECATED | Low (fact-check niche) | SKIP unless fact-check publisher |
| `Estimated Salary` | DEPRECATED | Low | SKIP |
| `Learning Video` | DEPRECATED | Low | SKIP |
| `Special Announcement` | DEPRECATED | Low | SKIP |
| `Practice Problem` | DEPRECATED Jan 2026 | Low | SKIP |
| `Dataset` | Dataset Search only | Low for general | SKIP unless dataset publisher |

### The decision rule

For any type that has a deprecated SERP feature but still has AI extraction value: **implement it.** The validator-passing checkbox stops being the goal. The agent reading the schema is the goal. See Principle 3 (Dual-Consumer Inversion) for the full reasoning.

### What's coming

Google has not announced further specific deprecations as of May 2026, but the pattern is clear: rich results with low utilization are getting trimmed; the underlying schema vocabulary remains. Track [https://developers.google.com/search/updates](https://developers.google.com/search/updates) for current changes.

---

## Part III — Property Type-Constraint Reference

Schema.org properties have **domain constraints** — the schema.org spec specifies which types each property is valid on. Validators (Google Rich Results Test, validator.schema.org) flag invalid combinations. The most common cause of validator errors in elite-tier schema work is putting properties on the wrong type — `mentions` on a LocalBusiness, `audience` on an Organization, `speakable` on something that isn't a CreativeWork descendant.

This reference is the lookup table for the elite-tier properties this skill recommends. Consult it before deploying.

### High-leverage properties and their valid domains

| Property | Valid on (domain) | Invalid on (common errors) | Notes |
|---|---|---|---|
| `mentions` | `CreativeWork` and descendants (WebPage, Article, BlogPosting, FAQPage, etc.) | `LocalBusiness`, `Organization`, `Person`, `Place` | Move to the WebPage entity that contains the business reference |
| `audience` | `CreativeWork`, `Service`, `Product`, `Event`, `LodgingBusiness` | Generic `LocalBusiness`, `Organization` | LodgingBusiness is a specific exception; generic LocalBusiness is NOT |
| `speakable` | `WebPage`, `Article`, `WebPageElement` | `LocalBusiness`, `Organization` (will not validate) | Use the WebPage entity; CSS selectors target elements on that page |
| `subjectOf` | Most CreativeWork things; `Thing` broadly | Use carefully on Person and Organization | When in doubt, use `about` (inverse direction) instead |
| `about` | `CreativeWork`, `Event` | LocalBusiness, Organization (use `mainEntity` / `mainEntityOfPage` instead) | `about` is what the page is about; `mainEntity` is the primary entity featured |
| `mainEntity` | `WebPage` and descendants | Generic Thing | Pairs with `mainEntityOfPage` (inverse) on the entity itself |
| `mainEntityOfPage` | Most things — `Thing` and below | (rarely an issue) | Inverse of `mainEntity`; declare on the entity, pointing to the WebPage |
| `isPartOf` | `CreativeWork` and several others | (broadly available) | Use to chain hierarchy: Article isPartOf WebPage isPartOf WebSite |
| `hasPart` | `CreativeWork` and several others | (broadly available) | Inverse of isPartOf |
| `knowsAbout` | `Person`, `Organization` | `LocalBusiness` is fine (inherits from Organization) | Use Wikidata QID URIs or specific concept strings |
| `knowsLanguage` | `Person`, `Organization` | LocalBusiness OK | ISO language codes or Language objects |
| `memberOf` | `Person`, `Organization` | LocalBusiness OK | For trade associations, chambers of commerce, professional bodies |
| `hasCredential` | `Person`, `Organization`, `EducationalOccupationalProgram` | LocalBusiness OK | For licenses, certifications, accreditations |
| `parentOrganization` | `Organization` | LocalBusiness OK (inherits) | For multi-location chains |
| `subOrganization` | `Organization` | LocalBusiness OK (inherits) | For multi-location chains (inverse) |
| `department` | `Organization` | LocalBusiness OK (inherits) | For in-building units (NOT for separate locations) |
| `branchOf` | `LocalBusiness` | Organization (use `parentOrganization` instead) | LocalBusiness-specific for declaring a branch's parent |
| `additionalType` | All Things | (no constraint) | Takes Wikidata QID URIs; not Wikipedia URLs |
| `disambiguatingDescription` | All Things | (no constraint) | Used when name is common — "Joe's Pizza" in every city |
| `sameAs` | All Things | (no constraint) | Verified profile URLs only; entity reconciliation |
| `identifier` | All Things | (no constraint) | Use `PropertyValue` for typed identifiers (DUNS, tax IDs) |
| `paymentAccepted` | `LocalBusiness`, `Organization` (limited) | Use array, not comma-string | Free text array — "Cash", "Credit Card", "Bitcoin" |
| `currenciesAccepted` | `LocalBusiness`, `Organization` (limited) | ISO 4217 codes | Array of currency codes |
| `acceptedPaymentMethod` | `Order`, `Invoice`, `Offer`, `PaymentMethod` contexts | NOT `LocalBusiness` directly | Use within Offer or Invoice, not the LocalBusiness itself |
| `availableLanguage` | `ContactPoint`, `LodgingBusiness`, `Service`, etc. | Generic LocalBusiness has it on ContactPoint, not directly | Nest within ContactPoint |
| `areaServed` | `Service`, `Offer`, `LocalBusiness`, `Organization`, `ContactPoint`, `DeliveryChargeSpecification`, `Demand` | (broad) | Most flexible geo property |
| `serviceArea` | `LocalBusiness`, `Organization`, `ContactPoint` | Service does NOT have it — use `areaServed` there | Less flexible than `areaServed`; often `areaServed` is preferred |
| `eligibleRegion` | `Offer`, `Demand`, `DeliveryChargeSpecification` | NOT directly on LocalBusiness | For geo-restricted offers specifically |
| `containsPlace` | `Place` | Used within a parent Place (City, Region, GeoCircle) | List sub-places contained within a region |
| `geo` | `Place` and descendants | (consistent) | Use GeoCoordinates or GeoShape value |
| `hasOfferCatalog` | `Organization`, `Person`, `Service` | LocalBusiness OK (inherits) | Top-level catalog of offers |
| `makesOffer` | `Organization`, `Person` | LocalBusiness OK (inherits) | Individual offers |
| `offers` | `Product`, `Service`, `CreativeWork`, `Event`, others | (broad) | Reverse of `itemOffered` from an Offer |
| `potentialAction` | All Things | (no constraint) | Where to declare ReserveAction, OrderAction, etc. |
| `target` | `Action` | Used within Action types | EntryPoint with urlTemplate and httpMethod |
| `priceRange` | `LocalBusiness` and several others | Free text — $, $$, $$$, $$$$ | Simple categorical indicator |
| `openingHoursSpecification` | `Place`, `CivicStructure` (LocalBusiness inherits) | Preferred over `openingHours` for complex schedules | Use the typed form, not the legacy text form |
| `hoursAvailable` | `Service`, `ContactPoint` | NOT on LocalBusiness directly | Per-service hours (can differ from business hours) |
| `aggregateRating` | `CreativeWork`, `Product`, `Service`, `Event`, `Organization`, `Brand`, `Place`, others | LocalBusiness OK (inherits via Place + Organization) | But: SERP star eligibility is restricted (see §Compliance) |
| `review` | `CreativeWork`, `Product`, `Service`, `Place`, `Brand`, `Organization`, `Event` | LocalBusiness OK (inherits) | Same SERP star restriction as `aggregateRating` |
| `creator` | `CreativeWork` and descendants | ImageObject is a CreativeWork — OK there | For photographs, articles, videos |
| `copyrightNotice` | `CreativeWork` and descendants | (image license property) | Used with `creator`, `license`, `acquireLicensePage` |
| `creditText` | `CreativeWork` and descendants | (image license property) | Used with `creator`, `license`, `acquireLicensePage` |
| `license` | `CreativeWork` and descendants | URL or CreativeWork value | For ImageObject licensing |
| `acquireLicensePage` | `CreativeWork` and descendants | URL value | For ImageObject licensing |

### How to use this reference

When designing schema, for each property you intend to include:
1. Check the property's row in the table.
2. Confirm the type you're putting it on is in the "Valid on" column.
3. If not, either (a) move the property to the right type, or (b) reconsider whether you need it.

**Common reorganization pattern.** Many properties that practitioners reflexively put on LocalBusiness actually belong on WebPage:
- `mentions` (list of related entities) → WebPage
- `speakable` (voice answer markup) → WebPage
- `audience` (target audience description) → CreativeWork/Service/Product, NOT LocalBusiness

This is the most common source of validator errors in tier-9 schema work, and it traces to a conceptual confusion: the LocalBusiness *is* the entity, but properties describing the *page about* the entity belong on the WebPage, not on the entity itself.

### The validator workflow

Validator failures should be treated as design feedback, not nuisance errors. When a validator flags a property as invalid on a type:
1. Don't suppress the warning. Move the property.
2. Re-architect the @graph if needed — usually the fix is creating a WebPage entity (if you don't have one) and migrating the misplaced properties there.
3. Re-validate.

This is how the Lubbock Event Rentals schema bugs (audience and mentions on LocalBusiness) were diagnosed and fixed mid-project. The bugs trace to skill v1 not having this reference; v3 prevents that class of error entirely.

---

## Why this matters in 2026

Google's ranking systems and the major LLM answer engines now treat structured data as the authoritative fact source for entity-level claims about a business. The Knowledge Graph reconciles entities across multiple sources, and the strongest reconciliation signal is consistent, machine-readable schema that matches the Google Business Profile, third-party directories, Wikipedia/Wikidata when available, and the business's own website meta data.

For Map Pack ranking specifically, schema is not a direct ranking factor — but it is a powerful *reinforcement* signal. When the schema, GBP, and primary directories all agree on NAP, hours, categories, services, and geographic coordinates, Google has higher confidence in the entity and rewards that confidence with map placement.

For AI Overviews and ChatGPT/Perplexity/Gemini/Claude/Copilot, LLMs extract structured fields with far higher accuracy than unstructured prose. A page with rich, valid `knowsAbout`, `description`, `availableService`, `hasOfferCatalog`, and `speakable` markup is dramatically more likely to be cited than a page with identical visible content but no schema. Microsoft's Fabrice Canel (Principal Product Manager, Bing) confirmed at SMX Munich March 2025: "Schema markup helps Microsoft's LLMs understand content." This is now official confirmation across Google, Microsoft, and (implicitly via NLWeb adoption) the major LLM platforms.

And: per Principle 9, schema is increasingly the only mechanism the business has to control how AI represents it. The defensive frame matters more than the offensive frame.

---

## Core principles

1. **Always JSON-LD inside `<script type="application/ld+json">`.** Never microdata, never RDFa. JSON-LD is the only format the LLMs and Google reliably parse cleanly.
2. **Always use `@graph` for multi-entity pages.** Flat single-entity blobs are obsolete. The `@graph` pattern is non-negotiable for any local business with a real entity structure.
3. **Every entity gets a stable `@id`.** The `@id` is a referenceable IRI used across pages. The homepage declares the canonical `@id`; sub-pages reference it.
4. **Use the most specific `@type` available.** `Dentist` not `LocalBusiness`. `Restaurant` not `FoodEstablishment`. `AutoRepair` not `AutomotiveBusiness`.
5. **NAP must match the Google Business Profile character-for-character.** Not "approximately" — exactly. Suite numbers, abbreviations, and punctuation all matter.
6. **Phone in E.164.** That is `+15125550199` — no dashes, no parentheses, no spaces. Dashed format is RFC 3966 (tel-URI), not E.164.
7. **`geo` coordinates point to the building entrance.** Six decimal places. Not the parking lot, not the city center, not the Google geocode default.
8. **Currencies and countries in ISO codes.** ISO 4217 for currency (`USD`, `EUR`, `MXN`). ISO 3166-1 alpha-2 for country (`US`, `CA`, `MX`).
9. **`paymentAccepted` as an array.** Not a comma-delimited string. Arrays are machine-readable; strings are legacy noise.
10. **Images as `ImageObject` entities, not URL strings.** Each image gets `contentUrl`, `width`, `height`, `caption`, and (when known) `license` and `creator`.
11. **`sameAs` is the highest-leverage entity property.** Every verified profile URL goes in. Wikipedia and Wikidata when available; authoritative industry directories always.
12. **Never invent ratings or review counts.** `aggregateRating` only when the business collects first-party reviews. Even then, be aware Google does not surface review stars for self-serving LocalBusiness markup (see §Compliance).
13. **One LocalBusiness schema per location page.** Never combine locations in one block. Each location is its own node with its own `@id`.
14. **First-party `potentialAction` URLs only.** Booking, ordering, reservation actions point to URLs on the business's own domain, not OpenTable/Resy/DoorDash generic targets.
15. **Validate before deploying.** Use both Google Rich Results Test (Google-supported types only) AND validator.schema.org (full schema vocabulary coverage). They check different things.
16. **Match GBP categories with schema `@type` + `additionalType`.** GBP primary category → schema `@type`. GBP secondary categories → `additionalType` array (using Wikidata QIDs, not Wikipedia URLs).
17. **`additionalType` takes Wikidata QID URIs, not Wikipedia URLs.** Use `https://www.wikidata.org/wiki/Q177` for pizzeria, not `https://en.wikipedia.org/wiki/Pizzeria`. Google's Knowledge Graph reconciles against Wikidata.
18. **Service Area Businesses use `GeoCircle` or `GeoShape`, not just `areaServed` city lists.** A radius-based `GeoCircle` from headquarters is the elite SAB pattern.
19. **Speakable specification on FAQ and key answer-bearing content.** AI assistants and voice surfaces actively use `speakable`.
20. **`disambiguatingDescription` when the business name is common.** "Joe's Pizza" exists in every city. Disambiguation properties resolve entity confusion.

### Architectural principles (Yoast/Alderson + synthesis)

21. **Render schema server-side. Never JavaScript-inject.** Server-side rendered, hardcoded JSON-LD is reliably parsed. JS-injected schema (via tag managers, client-side rendering) is parsed inconsistently across consumers. This is Yoast's explicit recommendation in their developer specification. The computational cost of executing JS to extract schema is higher for crawlers, and many parsers (especially LLM browse modes) skip JS execution entirely.
22. **The base script appears on every page.** Organization + WebSite + WebPage form the universal foundation. These three entities should appear in the @graph of every page of the site, with the page-specific primary entity grafted in. This is Yoast's "base script" pattern — and most sites get it wrong by including base entities only on the homepage.
23. **Every page has exactly one primary entity.** Per Principle 1 and Yoast's framework: a Recipe page has one Recipe as primary; an Article page has one Article; a service page has one Service; the homepage has the LocalBusiness as primary. The graph is built around the primary entity via `mainEntity` (declared on WebPage) and `mainEntityOfPage` (declared on the entity itself, pointing back).
24. **Use `isPartOf` and `hasPart` to express directional hierarchy.** Recipe `isPartOf` Article `isPartOf` WebPage `isPartOf` WebSite. This makes the graph hierarchy machine-readable rather than just topologically connected. It also makes the graph navigable for recursive AI consumers (Principle 1).
25. **The Entity Home is the canonical declaration.** (Jason Barnard / Kalicube.) Every entity has one site that is its authoritative home. For a local business, this is its own website — specifically, the homepage. The schema there is the source-of-truth declaration. All external mentions (in directories, on social, in third-party content) corroborate the entity home. Treat the homepage's schema with commitment-grade rigor, because every other source on the web triangulates back to it.
26. **`@id` is permanent.** (Principle 7 of the Foundational Doctrine.) Choose carefully on first deploy. Once published, never changed. The agency commitment to @id permanence is what separates serious work from amateur.
27. **Use `department` for in-building units; `subOrganization` / `branchOf` / `parentOrganization` for separate locations.** This distinction matters and is widely misused. An auto repair shop with mechanical, body, and detailing departments at one location: `department`. A 3-location chain: each separate location uses `parentOrganization` to link to the central Organization; the central Organization uses `subOrganization` (or omits it; the parentOrganization link is sufficient).
28. **Nested OfferCatalog within OfferCatalog for hierarchical service taxonomies.** Schema.org's canonical example for cleaning services uses this nesting pattern: a top-level Service has `hasOfferCatalog` → OfferCatalog "all services" → `itemListElement` containing sub-OfferCatalogs ("house cleaning", "one-time services"), each containing Offers with `itemOffered` Services. This pattern is essential for businesses with categorized service hierarchies (event rentals with Decor > Wedding > Centerpieces; auto repair with Mechanical > Brake Service > Front Brakes; legal practice with Criminal Defense > DWI > Felony DWI).
29. **Schema, prose, and architecture must vector-align.** (Principle 2.) For every page, run the triangulation audit before publication: schema's central declaration + prose's repeated entity-attribute pairs + architecture's URL/internal-link signals must all express the same entity claim.
30. **Schema is the agent API.** (Principle 6.) Beyond rich results and AI citation, design schema to expose the action and transaction surface that autonomous agents will use to discover and transact with the business. PotentialAction with first-party target URLs, payment properties, eligibility properties, hours, languages — these are essential for agentic commerce readiness.

---

## The @graph architecture (foundational)

The `@graph` pattern is the single biggest difference between top-0.1% schema and everything else. It declares multiple entities in one JSON-LD block, each with its own `@id`, and lets them reference each other.

### The Base Script doctrine (Yoast / Jono Alderson)

Per Principle 22: **the base script appears on every page.** Yoast's developer specification (authored by Jono Alderson with input from Google engineers) formalizes this: every page of the site outputs a base @graph containing three foundational entities — Organization (or Person if the site represents an individual), WebSite, and WebPage. This trio is universal. Page-specific entities (Article on a blog post, Service on a service page, LocalBusiness on the homepage, Product on a product page, etc.) graft into the base graph via `mainEntity` / `mainEntityOfPage` and `isPartOf` / `hasPart` references.

Most sites violate this. Schema appears only on the homepage. Other pages get nothing, or get a flat LocalBusiness redeclaration with no graph context. The corrective pattern: every page outputs the base script; the page-specific entities extend it.

### The Primary Entity Per Page doctrine

Per Principle 23: **every page has exactly one primary entity.** Identify what that page is *about* and put that entity at the center of the graph:

- **Homepage** → primary entity is the LocalBusiness (or Organization).
- **Service page** (e.g. /services/brakes/) → primary entity is the Service.
- **Product page** → primary entity is the Product.
- **Article / blog post** → primary entity is the Article / BlogPosting.
- **About page** → primary entity is often a Person (the founder) or the Organization, depending on framing.
- **Location page** (multi-location chain, e.g. /locations/dallas/) → primary entity is the LocalBusiness for that specific location.
- **Event page** → primary entity is the Event.
- **FAQ page** (if the site is government or health and FAQPage is appropriate) → primary entity is the FAQPage.

Declare the primary entity via `mainEntity` on the WebPage; declare `mainEntityOfPage` on the entity itself, pointing back to the WebPage. This is the bidirectional anchor that tells AI consumers what the page is principally about.

### The isPartOf / hasPart hierarchy

Per Principle 24: use directional relationship properties to express graph hierarchy. The canonical chains:

```
Recipe / Article / Service / Product (the primary entity)
  isPartOf → WebPage
    isPartOf → WebSite
      publisher → Organization
```

Inversely, `hasPart` can be used to express the reverse direction when needed (a WebSite has WebPages; a Course has CourseInstances; an Article has parts). The pattern makes the graph hierarchy explicit and navigable for recursive AI consumers.

### Skeleton

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://example.com/#organization",
      "name": "[Brand name]",
      "url": "https://example.com/",
      "logo": { "@id": "https://example.com/#logo" },
      "sameAs": ["..."]
    },
    {
      "@type": "ImageObject",
      "@id": "https://example.com/#logo",
      "url": "https://example.com/logo.png",
      "contentUrl": "https://example.com/logo.png",
      "width": "512",
      "height": "512",
      "caption": "[Brand name] logo"
    },
    {
      "@type": "WebSite",
      "@id": "https://example.com/#website",
      "url": "https://example.com/",
      "name": "[Brand name]",
      "publisher": { "@id": "https://example.com/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://example.com/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "[SpecificLocalBusinessType]",
      "@id": "https://example.com/#localbusiness",
      "name": "[Exact GBP name]",
      "parentOrganization": { "@id": "https://example.com/#organization" },
      "url": "https://example.com/",
      "address": { "@type": "PostalAddress", "...": "..." },
      "geo": { "@type": "GeoCoordinates", "...": "..." },
      "founder": { "@id": "https://example.com/#founder" },
      "sameAs": ["..."]
    },
    {
      "@type": "Person",
      "@id": "https://example.com/#founder",
      "name": "[Founder name]",
      "worksFor": { "@id": "https://example.com/#organization" },
      "jobTitle": "[Title]",
      "knowsAbout": ["..."],
      "sameAs": ["..."]
    },
    {
      "@type": "WebPage",
      "@id": "https://example.com/#webpage",
      "url": "https://example.com/",
      "name": "[Page title]",
      "isPartOf": { "@id": "https://example.com/#website" },
      "about": { "@id": "https://example.com/#localbusiness" },
      "primaryImageOfPage": { "@id": "https://example.com/#primaryimage" },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".hero h1", ".intro p", "#hours"]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://example.com/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com/" }
      ]
    }
  ]
}
</script>
```

### Cross-page reference pattern

Once the homepage declares `https://example.com/#localbusiness`, every other page on the site can reference that entity without redeclaring its full property set:

```json
// On a service page like /brakes/
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://example.com/services/brakes/#service",
      "name": "Brake Repair",
      "provider": { "@id": "https://example.com/#localbusiness" },
      "areaServed": { "@id": "https://example.com/#servicearea" },
      "serviceType": "Brake repair and replacement"
    },
    {
      "@type": "WebPage",
      "@id": "https://example.com/services/brakes/#webpage",
      "url": "https://example.com/services/brakes/",
      "isPartOf": { "@id": "https://example.com/#website" },
      "about": { "@id": "https://example.com/services/brakes/#service" },
      "mainEntity": { "@id": "https://example.com/services/brakes/#service" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://example.com/services/" },
        { "@type": "ListItem", "position": 3, "name": "Brake Repair", "item": "https://example.com/services/brakes/" }
      ]
    }
  ]
}
```

This is the pattern that builds a real knowledge graph. The service page tells search engines "this service is provided by the business defined at `#localbusiness`" — no need to redeclare NAP, hours, geo, founder, etc.

---

## The 9-tier entity architecture

Every elite local business schema follows this 9-tier model. Tiers 1–3 are foundational. Tiers 4–7 are entity-authority. Tiers 8–9 are the AEO/GEO and Map Pack reinforcement layer that separates 0.1% from 1%.

### Tier 1 — Core identity

```json
"@context": "https://schema.org",
"@type": "[MOST SPECIFIC TYPE]",
"@id": "[canonical-url]/#localbusiness",
"name": "[Exact GBP name]",
"legalName": "[Registered legal name if different]",
"alternateName": "[Common alternate name or DBA]",
"disambiguatingDescription": "[Short clarifier when name is common — e.g., 'Lubbock, TX location; not affiliated with Joe's Pizza Brooklyn']",
"url": "[Canonical URL]",
"logo": { "@id": "[canonical-url]/#logo" },
"image": [
  { "@id": "[canonical-url]/#image-1x1" },
  { "@id": "[canonical-url]/#image-4x3" },
  { "@id": "[canonical-url]/#image-16x9" }
],
"description": "[150–300 chars: pack 2–3 disambiguating facts — founding year, named specialty, named neighborhood. LLMs extract this verbatim.]",
"slogan": "[Brand tagline]",
"foundingDate": "YYYY-MM-DD",
"telephone": "+1XXXXXXXXXX",
"email": "[primary contact]",
"keywords": "[5–10 keyword phrases, comma-separated]"
```

`disambiguatingDescription` is genuinely high-leverage and almost never used. When a business name is common (Joe's Pizza, Smith Law, ABC Auto), this property is the cleanest way to resolve entity confusion in the Knowledge Graph.

### Tier 2 — Location signals (Map Pack critical)

```json
"address": {
  "@type": "PostalAddress",
  "streetAddress": "[Street address as on GBP]",
  "addressLocality": "[City]",
  "addressRegion": "[State 2-letter]",
  "postalCode": "[ZIP]",
  "addressCountry": "US"
},
"geo": {
  "@type": "GeoCoordinates",
  "latitude": XX.XXXXXX,
  "longitude": -XX.XXXXXX
},
"hasMap": "https://www.google.com/maps?cid=[GOOGLE_CID]",
"areaServed": [
  { "@type": "City", "name": "[City]", "sameAs": "https://www.wikidata.org/wiki/[Q-ID]" },
  { "@type": "City", "name": "[Nearby city]", "sameAs": "https://www.wikidata.org/wiki/[Q-ID]" }
]
```

**Map Pack alignment rules:**
- `streetAddress` must match GBP exactly (Ste vs Suite, # vs Unit, etc.)
- `geo` precision: six decimals minimum. Point to building entrance (or front door of suite), not the GPS-default parking lot
- `hasMap` with CID is the strongest schema→GBP bridge available. Find CID via Google Maps URL or GBP API
- `areaServed` uses City entities with Wikidata `sameAs` — far stronger than plain strings

For Service Area Businesses (plumbers, HVAC, mobile services), see §Service Area Business handling below.

### Tier 3 — Operational signals

```json
"openingHoursSpecification": [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "17:00"
  },
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Saturday",
    "opens": "09:00",
    "closes": "13:00"
  }
],
"specialOpeningHoursSpecification": [
  {
    "@type": "OpeningHoursSpecification",
    "validFrom": "2026-12-24",
    "validThrough": "2026-12-24",
    "opens": "08:00",
    "closes": "12:00",
    "description": "Christmas Eve — early close"
  },
  {
    "@type": "OpeningHoursSpecification",
    "validFrom": "2026-12-25",
    "validThrough": "2026-12-25",
    "opens": "00:00",
    "closes": "00:00",
    "description": "Christmas Day — closed"
  }
],
"priceRange": "$$",
"currenciesAccepted": "USD",
"paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Apple Pay", "Google Pay", "Financing"]
```

24/7 businesses: use one OpeningHoursSpecification with `dayOfWeek` array of all seven days, `opens: "00:00"`, `closes: "23:59"`.

Closed days: simply omit them from `openingHoursSpecification`. Or use a `specialOpeningHoursSpecification` block with `opens: "00:00"`, `closes: "00:00"` and `description: "Closed"`.

Always include the next 6–12 months of major holidays in `specialOpeningHoursSpecification`. Most competitors have nothing here. Google AI Overviews actively surfaces holiday hours; presence/absence of this data determines citation eligibility.

### Tier 4 — Entity authority signals

This is where the entity becomes a *known thing* in the broader knowledge graph rather than just a listing.

#### sameAs — entity disambiguation (highest leverage)

```json
"sameAs": [
  "https://www.facebook.com/[business]",
  "https://www.instagram.com/[business]",
  "https://www.linkedin.com/company/[business]",
  "https://twitter.com/[business]",
  "https://www.tiktok.com/@[business]",
  "https://www.youtube.com/@[business]",
  "https://www.pinterest.com/[business]",
  "https://www.yelp.com/biz/[business]",
  "https://www.bbb.org/us/[state]/[city]/profile/[category]/[business]",
  "https://nextdoor.com/pages/[business]",
  "https://www.angi.com/companylist/us/[state]/[city]/[business].htm",
  "https://www.homeadvisor.com/rated.[Business].XXXXXXXX.html",
  "https://[industry-specific-directory-1]",
  "https://[industry-specific-directory-2]",
  "https://www.wikidata.org/wiki/[Q-ID]",
  "https://en.wikipedia.org/wiki/[Business_name]"
]
```

**Industry directory hierarchy by vertical** (these are stronger entity signals than social profiles):
- **Auto repair:** RepairPal, AAA Approved Auto Repair, ASE Blue Seal directory, NAPA AutoCare locator
- **Auto dealer:** Kelley Blue Book dealer listing, Cars.com, Edmunds, AutoTrader, manufacturer dealer locator
- **Medical:** Healthgrades, Vitals, ZocDoc, WebMD, NPI Registry, state medical board, hospital affiliation directories
- **Dental:** ADA Find-a-Dentist, state dental board, dental specialty boards
- **Legal:** State bar association profile, Justia, Avvo, Martindale-Hubbell, FindLaw, USLegal, Super Lawyers
- **Real estate:** Zillow agent profile, Realtor.com, local MLS, brokerage page, NAR member directory
- **Home services:** Angi, HomeAdvisor, Thumbtack, Porch, BuildZoom, state contractor license board
- **Restaurants:** OpenTable, Resy, TripAdvisor, Zomato, the local newspaper's restaurant listing
- **Financial:** FINRA BrokerCheck, SEC IAPD, CFP Board, state insurance department
- **CPA:** state CPA society, AICPA member directory
- **Veterinary:** AAHA accredited directory, AVMA member directory, state veterinary board
- **Hotels:** booking.com, expedia.com, tripadvisor.com, brand parent site
- **Fitness:** brand parent site, ClassPass, MindBody business profile

Every verified directory profile in `sameAs` strengthens entity reconciliation. Do not pad with low-quality citation sites — only directories the business is genuinely listed on and verified.

#### additionalType — concept linking via Wikidata

```json
"additionalType": [
  "https://www.wikidata.org/wiki/Q190810",
  "https://www.wikidata.org/wiki/Q1093577"
]
```

Use Wikidata QIDs (the "Q" identifiers) for the business category. Wikidata is the entity reconciliation backbone for Google's Knowledge Graph. Wikipedia URLs work in practice but are semantically less precise. To find a QID: search Wikidata for the concept (e.g., "auto repair shop"), copy the Q-number from the URL.

Common Wikidata QIDs:
- Auto repair shop: Q190810
- Restaurant: Q11707
- Pizzeria: Q177
- Dentist: Q170424 (dentistry)
- Physician: Q39631 (medical practice)
- Lawyer: Q40348
- Plumber: Q179945 (plumbing)
- HVAC: Q1067879
- Electrician: Q165029
- Roofer: Q1308907
- Hair salon: Q391174 (beauty salon)
- Real estate agent: Q466038
- Veterinarian: Q202883 (veterinary medicine)
- Pharmacy: Q108325
- Funeral home: Q1075498
- Self storage: Q3505845

#### knowsAbout — topical authority

```json
"knowsAbout": [
  "[Specific expertise term 1]",
  "[Specific expertise term 2]",
  "[Specific expertise term 3]",
  "[Brand or product specialty]",
  "[Procedure or service specialty]",
  "[Geographic specialty]"
]
```

10–25 specific terms. Not "auto repair" — `Toyota engine diagnostics`, `transmission rebuild`, `OBD-II diagnostic scanning`, `pre-purchase inspection`, `European luxury vehicle service`. LLMs use `knowsAbout` for topic-cluster extraction and citation matching.

For maximum signal, wrap each term in `DefinedTerm`:
```json
"knowsAbout": [
  { "@type": "DefinedTerm", "name": "Transmission rebuild", "inDefinedTermSet": "https://en.wikipedia.org/wiki/Automatic_transmission" },
  { "@type": "DefinedTerm", "name": "OBD-II diagnostics", "inDefinedTermSet": "https://en.wikipedia.org/wiki/On-board_diagnostics" }
]
```

#### memberOf — trade association links

```json
"memberOf": [
  {
    "@type": "Organization",
    "name": "[Trade association name]",
    "url": "[Association URL]",
    "sameAs": "https://www.wikidata.org/wiki/[Q-ID if available]"
  }
]
```

Chamber of Commerce, BBB-accredited, industry associations (NAR, ABA, AMA, ASE, NAPA AutoCare, etc.). Each membership is a separate Organization entity. These are *high-trust* signals for AI citation systems.

#### hasCredential — licenses, certifications, accreditations

```json
"hasCredential": [
  {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "license",
    "name": "[License name]",
    "recognizedBy": {
      "@type": "Organization",
      "name": "[Issuing body]",
      "url": "[Issuer URL]"
    },
    "identifier": "[License number]",
    "validFor": "P5Y"
  }
]
```

State licenses, industry certifications, accreditations. Per location for SABs (each state license).

#### founder / employee — Person entity linking

```json
"founder": {
  "@type": "Person",
  "@id": "[canonical-url]/#founder",
  "name": "[Full name]",
  "honorificPrefix": "[Dr./Mr./Ms.]",
  "honorificSuffix": "[MD/Esq./CPA/PhD]",
  "jobTitle": "[Title]",
  "worksFor": { "@id": "[canonical-url]/#organization" },
  "url": "[bio page URL]",
  "image": "[headshot URL]",
  "description": "[150–250 chars founder bio]",
  "sameAs": [
    "[personal LinkedIn]",
    "[personal Twitter/X]",
    "[personal Instagram]",
    "[Wikipedia if available]"
  ],
  "knowsAbout": ["[expertise 1]", "[expertise 2]"],
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "[School name]",
    "sameAs": "https://www.wikidata.org/wiki/[Q-ID]"
  },
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "[License/certification]",
      "recognizedBy": { "@type": "Organization", "name": "[Issuer]" }
    }
  ],
  "award": ["[Award 1 with year]", "[Award 2 with year]"]
}
```

The founder/owner as a fully fleshed-out Person entity with their own `sameAs`, `knowsAbout`, credentials, and awards is the most powerful single entity signal available to a local business. It creates a two-way entity cluster (business ↔ person) that Google's Knowledge Graph reconciles aggressively.

For multiple key staff, use `employee` array with the same Person structure per person. Don't markup every employee — limit to leadership, named providers (doctors, dentists, attorneys, master technicians), and named instructors. Otherwise the markup becomes noise.

#### parentOrganization + brand

```json
"parentOrganization": {
  "@id": "[parent-canonical-url]/#organization"
},
"brand": {
  "@type": "Brand",
  "name": "[Brand name]",
  "logo": "[logo URL]"
}
```

For franchises and multi-location operators.

### Tier 5 — Actions (conversion layer)

`potentialAction` enables Google Place Actions and feeds the "Book Now" / "Order Online" / "Call" buttons.

#### ReserveAction (appointments, table reservations)

```json
"potentialAction": {
  "@type": "ReserveAction",
  "target": {
    "@type": "EntryPoint",
    "urlTemplate": "https://example.com/book",
    "inLanguage": "en-US",
    "actionPlatform": [
      "http://schema.org/DesktopWebPlatform",
      "http://schema.org/IOSPlatform",
      "http://schema.org/AndroidPlatform"
    ]
  },
  "result": {
    "@type": "Reservation",
    "name": "Service appointment"
  }
}
```

#### OrderAction (restaurants, retail)

```json
{
  "@type": "OrderAction",
  "target": {
    "@type": "EntryPoint",
    "urlTemplate": "https://example.com/order",
    "inLanguage": "en-US",
    "actionPlatform": [
      "http://schema.org/DesktopWebPlatform",
      "http://schema.org/IOSPlatform",
      "http://schema.org/AndroidPlatform"
    ]
  },
  "deliveryMethod": [
    "http://purl.org/goodrelations/v1#DeliveryModePickUp",
    "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"
  ]
}
```

#### CommunicateAction (call, message)

```json
{
  "@type": "CommunicateAction",
  "target": {
    "@type": "EntryPoint",
    "urlTemplate": "tel:+15125550199"
  }
}
```

Actions go in array form if there are multiple. All action URLs must point to first-party properties (own domain, own phone, own booking system). Pointing actions at third-party platforms forfeits attribution and dilutes ranking signal.

### Tier 6 — Service/Product Catalog (vertical-specific)

See the §Vertical templates section below. Each vertical has a distinct catalog structure (Menu for restaurants, OfferCatalog with Service for service businesses, OfferCatalog with Vehicle for auto dealers, etc.).

### Tier 7 — Social proof + extras

#### AggregateRating + Review (with compliance caveats)

```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "bestRating": "5",
  "worstRating": "1",
  "ratingCount": "247",
  "reviewCount": "189"
},
"review": [
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "[Reviewer name]"
    },
    "datePublished": "YYYY-MM-DD",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "reviewBody": "[Review text — verbatim from first-party source]",
    "publisher": { "@id": "[canonical-url]/#organization" }
  }
]
```

**CRITICAL COMPLIANCE NOTE:** As of September 2019, Google stopped surfacing review rich results (stars in SERPs) for self-serving markup of LocalBusiness, Organization, and most service types. The schema is still valid and Google still uses it for entity validation and AI extraction — but stars will not appear in search results. If stars in SERPs are the goal, the schema must wrap a different `@type` such as `Product`, `Service`, `Course`, `CreativeWork`, `Recipe`, `Movie`, or `Book`. See §Compliance section for the workaround patterns.

For LocalBusiness, the most valuable use of `review` and `aggregateRating` is now (a) AI citation extraction — LLMs read this data and use it in answers — and (b) entity reconciliation reinforcement. Stars in SERPs are a side benefit reserved for specific wrappers.

#### Awards (structured)

```json
"award": [
  {
    "@type": "Award",
    "name": "[Award name]",
    "dateReceived": "YYYY",
    "recognizedBy": { "@type": "Organization", "name": "[Awarding body]" }
  }
]
```

#### Amenities

```json
"amenityFeature": [
  {
    "@type": "LocationFeatureSpecification",
    "name": "Free Parking",
    "value": true
  },
  {
    "@type": "LocationFeatureSpecification",
    "name": "Wheelchair Accessible",
    "value": true
  },
  {
    "@type": "LocationFeatureSpecification",
    "name": "Wi-Fi",
    "value": true
  },
  {
    "@type": "LocationFeatureSpecification",
    "name": "Number of parking spaces",
    "value": "30",
    "unitText": "spaces"
  }
],
"smokingAllowed": false,
"publicAccess": true,
"isAccessibleForFree": false
```

#### Accessibility (powerful for AI Overviews)

```json
"accessibilityFeature": [
  "wheelchairAccess",
  "audioDescription",
  "signLanguageInterpretation"
],
"accessibilityHazard": "none",
"accessibilitySummary": "[Plain-language summary of accessibility provisions]"
```

#### Events

```json
"event": [
  {
    "@type": "Event",
    "name": "[Event name]",
    "description": "[Event description]",
    "startDate": "YYYY-MM-DDTHH:MM:SS-06:00",
    "endDate": "YYYY-MM-DDTHH:MM:SS-06:00",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": { "@id": "[canonical-url]/#localbusiness" },
    "organizer": { "@id": "[canonical-url]/#organization" },
    "offers": {
      "@type": "Offer",
      "url": "[ticket URL]",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "YYYY-MM-DD"
    }
  }
]
```

### Tier 8 — Companion entities (the @graph supporting cast)

These entities go in the `@graph` array alongside the LocalBusiness node. They are non-negotiable for a complete entity graph.

#### Organization (the brand entity)

```json
{
  "@type": "Organization",
  "@id": "[canonical-url]/#organization",
  "name": "[Brand name]",
  "url": "[canonical-url]",
  "logo": { "@id": "[canonical-url]/#logo" },
  "image": { "@id": "[canonical-url]/#logo" },
  "sameAs": ["..."],
  "founder": { "@id": "[canonical-url]/#founder" },
  "foundingDate": "YYYY-MM-DD",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "15"
  },
  "naics": "[NAICS code]",
  "iso6523Code": "[for international B2B]",
  "duns": "[DUNS if known]",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+1XXXXXXXXXX",
      "email": "[email]",
      "availableLanguage": ["English", "Spanish"],
      "hoursAvailable": { "@id": "[canonical-url]/#hours" }
    },
    {
      "@type": "ContactPoint",
      "contactType": "emergency",
      "telephone": "+1XXXXXXXXXX",
      "availableLanguage": "English"
    }
  ]
}
```

For service businesses with after-hours emergency service, the `ContactPoint` with `contactType: "emergency"` is a high-value AEO signal.

#### WebSite + SearchAction

```json
{
  "@type": "WebSite",
  "@id": "[canonical-url]/#website",
  "url": "[canonical-url]",
  "name": "[Site name]",
  "description": "[Site description]",
  "publisher": { "@id": "[canonical-url]/#organization" },
  "inLanguage": "en-US",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "[canonical-url]/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

This enables the Sitelinks Search Box for brand queries. Only one WebSite entity per domain.

#### WebPage (per page)

```json
{
  "@type": "WebPage",
  "@id": "[page-url]/#webpage",
  "url": "[page-url]",
  "name": "[Page title]",
  "description": "[Meta description]",
  "isPartOf": { "@id": "[canonical-url]/#website" },
  "about": { "@id": "[canonical-url]/#localbusiness" },
  "primaryImageOfPage": { "@id": "[page-url]/#primaryimage" },
  "datePublished": "YYYY-MM-DD",
  "dateModified": "YYYY-MM-DD",
  "inLanguage": "en-US",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".hero h1", ".lead", ".hours-block", ".address-block"]
  },
  "breadcrumb": { "@id": "[page-url]/#breadcrumb" }
}
```

`dateModified` is a freshness signal that AI Overviews uses when selecting citations. Update it on real content changes.

#### BreadcrumbList

```json
{
  "@type": "BreadcrumbList",
  "@id": "[page-url]/#breadcrumb",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "[canonical-url]/" },
    { "@type": "ListItem", "position": 2, "name": "[Section]", "item": "[section-url]" },
    { "@type": "ListItem", "position": 3, "name": "[Page]", "item": "[page-url]" }
  ]
}
```

Breadcrumbs surface in search results AND feed entity hierarchy understanding. Every non-homepage gets one.

#### ImageObject (proper image markup)

```json
{
  "@type": "ImageObject",
  "@id": "[canonical-url]/#image-1x1",
  "url": "[image URL]",
  "contentUrl": "[image URL]",
  "width": "1200",
  "height": "1200",
  "caption": "[Descriptive caption]",
  "creator": { "@id": "[canonical-url]/#organization" },
  "creditText": "[Credit line if attributable]",
  "license": "[License URL if applicable]",
  "copyrightNotice": "© [Year] [Business]",
  "acquireLicensePage": "[license info page if applicable]"
}
```

For the primary business image, provide three aspect ratios (1:1, 4:3, 16:9) as separate ImageObject entities. Google uses different aspect ratios for different rich result placements.

### Tier 9 — AEO/GEO reinforcement layer

This tier reframes schema's purpose. Martha van Berkel (CEO, Schema App): *"Schema markup is the language of machines and AI."* The properties below are not about SERP rich results — most produce none — they are about controlling how the major AI consumers (ChatGPT, Perplexity, Google AI Overviews, Gemini, Claude, Bing Copilot) represent the business when answering user questions.

**The evidence base:**
- **Frase research:** pages with FAQPage markup are 3.2x more likely to appear in Google AI Overviews; FAQ schema has one of the highest citation rates among structured data types.
- **Microsoft (Fabrice Canel, Principal Product Manager, Bing) at SMX Munich, March 2025:** "Schema markup helps Microsoft's LLMs understand content." Bing's Copilot specifically uses structured data to interpret web content.
- **Data.world research:** Knowledge graphs provide 300% accuracy improvement for LLM responses in enterprises. Grounding LLMs in knowledge graph structure significantly reduces hallucinations.
- **Recency weighting (Perplexity-specific):** content updated in the past three months averages 6 AI citations vs 3.6 for outdated pages. `dateModified` and visible "Last Updated" timestamps matter.

The properties below are the implementation surface for this reframe.

**Type-constraint warning (per Part III):** Several Tier 9 properties have specific domain constraints. `mentions`, `speakable`, and (most narrowly) `audience` do NOT belong on a generic LocalBusiness node. They belong on the WebPage entity, on CreativeWork descendants, or (for `audience`) on Service/Product/Event/CreativeWork/LodgingBusiness specifically. The schema below shows the correct placement for each.

#### speakable

Domain: `WebPage`, `Article`, `WebPageElement`. NOT generic LocalBusiness.

```json
{
  "@type": "WebPage",
  "@id": "https://example.com/#webpage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [
      ".hero h1",
      ".lead-paragraph",
      "#hours-table",
      "#address-block",
      ".answer-snippet"
    ]
  }
}
```

Tells voice assistants and AI Overviews which page elements are summarizable. CSS selectors point to actual on-page content. **Post-deploy task:** open the live page in dev tools, identify the real CSS classes the CMS produces (Elementor, Webflow, Lovable, etc. all generate different class names than you'd guess from the design), and update the selectors. Generic placeholder selectors that don't match real elements provide no value.

If you don't know the CSS yet, default to `["h1"]` and expand after deploy.

#### mentions

Domain: `CreativeWork` and descendants (WebPage, Article, BlogPosting, FAQPage, etc.). **NOT LocalBusiness or Organization.** Put `mentions` on the WebPage entity that describes the business, not on the business itself.

```json
{
  "@type": "WebPage",
  "@id": "https://example.com/#webpage",
  "mentions": [
    { "@type": "Thing", "name": "[Concept]", "sameAs": "https://www.wikidata.org/wiki/[Q-ID]" },
    { "@type": "Place", "name": "[Local landmark]", "sameAs": "https://www.wikidata.org/wiki/[Q-ID]" },
    { "@type": "Brand", "name": "[Brand serviced/sold]" }
  ]
}
```

This is how to wire a page to the broader entity graph. Curation matters per Principle 4 — the un-automatable curation layer. For a Lubbock criminal defense attorney, strong mentions are the local courts (Lubbock County District Court, Texas Court of Criminal Appeals), regional law schools (Texas Tech School of Law), specific bar associations. Generic city and state mentions are weaker. Pick 5-15 mentions that genuinely strengthen this specific business's entity context.

LLMs use this for topical relevance scoring and entity-context reinforcement. This is the implementation of Olaf Kopp's "Brand Context Optimization" at the schema level — declaring the entity-attribute triples explicitly.

#### subjectOf

Domain: most things (`Thing` broadly). For businesses with press coverage. Each Article that's *about* the business is a `subjectOf` entry. Massive trust signal for AI citation.

```json
"subjectOf": [
  {
    "@type": "Article",
    "headline": "[Article headline]",
    "url": "[article URL]",
    "datePublished": "[ISO-8601]",
    "publisher": { "@type": "Organization", "name": "[Publisher]" }
  }
]
```

Place on the entity that the press is about — the LocalBusiness, Organization, or Person. Curate aggressively: include only authoritative publications (regional/national press, industry publications, well-known blogs). Excluding lower-quality citations strengthens the average authority of the set.

#### audience

Domain: `CreativeWork`, `Service`, `Product`, `Event`, `LodgingBusiness`. **NOT generic LocalBusiness or Organization.** LodgingBusiness is an explicit exception in the schema.org spec; other LocalBusiness subtypes do not have `audience` as a valid property.

```json
{
  "@type": "Service",
  "@id": "https://example.com/services/wedding-rentals/#service",
  "audience": {
    "@type": "PeopleAudience",
    "audienceType": "[Target customer description, e.g. 'engaged couples planning weddings']",
    "geographicArea": { "@id": "https://example.com/#servicearea" }
  }
}
```

If you want to express audience for a LocalBusiness, the workaround is: declare it on a Service the business offers, not on the LocalBusiness itself.

#### actionableFeedbackPolicy + correctionsPolicy

Domain: `NewsMediaOrganization` originally, broader Organization use accepted by AI Overviews.

```json
"actionableFeedbackPolicy": "[URL to feedback policy page]",
"correctionsPolicy": "[URL to corrections page]"
```

Originally for news orgs but increasingly cited by AI Overviews as trust indicators for any organization. Low effort, surprising signal value.

#### dateModified (the recency lever)

Domain: `CreativeWork` and descendants — primarily for Article, WebPage, BlogPosting.

```json
{
  "@type": "WebPage",
  "@id": "https://example.com/#webpage",
  "dateModified": "2026-05-10",
  "datePublished": "2024-03-15"
}
```

Per the Perplexity research above: content updated in the past three months averages 6 AI citations vs 3.6 for outdated pages. Pair with a visible "Last Updated: [date]" timestamp on the page itself. Honest dates only — fabricating `dateModified` without actual content updates is detected and penalized.

#### Bilingual reinforcement (Brand Context Optimization, per Olaf Kopp)

This is not a schema property — it is a prose-side discipline that schema cannot replace. Per Principle 5 (Pages as Bilingual Documents): the prose on the page must consistently express the same entity-attribute triples (subject-predicate-object) as the schema. If the schema declares `Service: wedding rentals`, the prose must repeatedly state "wedding rentals" rather than paraphrasing it as "we set up your wedding" or "rentals for the big day." Schema gives the machine the facts; prose reinforces them through repetition. The two together produce signal strength that neither alone achieves.

For implementation: brief the content team that primary entity-attribute pairs must appear at least three times per page in slightly varied phrasings (per Kopp's framework). Schema architects audit this in the triangulation check (Principle 2).

---

## Map Pack alignment (critical for local ranking)

Schema does not directly rank a business in the Map Pack. The Google Business Profile does. But schema is the *highest-leverage cross-source validation signal* for the GBP entity. Misalignment between schema and GBP creates entity confusion that suppresses ranking; alignment creates entity confidence that supports it.

### The 11 alignment points

1. **Business name** — character-for-character match with GBP, including suffixes ("LLC," "Inc.," "Co.")
2. **Address** — street address abbreviations (Ste/Suite, Rd/Road, etc.) match GBP exactly
3. **Phone** — primary phone in `telephone` matches the GBP primary phone
4. **Categories** — schema `@type` matches GBP primary category; `additionalType` array matches GBP secondary categories (via Wikidata QIDs)
5. **Hours** — `openingHoursSpecification` matches GBP open hours, day for day, minute for minute
6. **Holiday hours** — `specialOpeningHoursSpecification` matches GBP special hours
7. **Geo** — `geo.latitude`/`longitude` within ~50 meters of the GBP pin location, six decimals
8. **hasMap CID** — `hasMap` URL contains the actual Google CID from the GBP
9. **Services** — schema `hasOfferCatalog` or `availableService` items align with GBP Services tab
10. **Photos** — primary `image` references match or align with GBP profile photos
11. **Attributes** — schema `amenityFeature` and accessibility properties align with GBP attributes

When all 11 align, Google has high entity confidence. When they don't, Google's algorithms downweight the entity in Map Pack consideration because the cross-source signals conflict.

### Finding the GBP CID

The Google CID is a numeric identifier for a place. Methods:

- From Google Maps URL: open the place, copy the URL, look for `cid=NNNNNNNNNNNNNN` or extract from the URL hash
- From Place ID: convert via Google's Place ID lookup tools
- Format the `hasMap` URL as `https://www.google.com/maps?cid=[CID]`

The CID `hasMap` URL is one of the strongest schema→GBP entity bridges available. Use it on every location page.

---

## Service Area Business handling (SAB)

Plumbers, HVAC techs, electricians, mobile mechanics, locksmiths, mobile pet groomers, mobile detailing, lawn care — businesses that travel to customers — use a different geographic pattern.

### Hide-address SABs (no public storefront)

```json
"address": {
  "@type": "PostalAddress",
  "addressLocality": "[Primary city]",
  "addressRegion": "[State]",
  "postalCode": "[ZIP]",
  "addressCountry": "US"
},
"geo": {
  "@type": "GeoCoordinates",
  "latitude": XX.XXXXXX,
  "longitude": -XX.XXXXXX
},
"serviceArea": {
  "@type": "GeoCircle",
  "geoMidpoint": {
    "@type": "GeoCoordinates",
    "latitude": XX.XXXXXX,
    "longitude": -XX.XXXXXX
  },
  "geoRadius": "40000"
},
"areaServed": [
  { "@type": "City", "name": "[City 1]", "sameAs": "https://www.wikidata.org/wiki/[Q-ID]" },
  { "@type": "City", "name": "[City 2]", "sameAs": "https://www.wikidata.org/wiki/[Q-ID]" }
]
```

`geoRadius` is in meters. 40000 = 40 km / ~25 miles. Common values: 16000 (10 mi), 32000 (20 mi), 48000 (30 mi), 80000 (50 mi).

Omit `streetAddress` from `address` for hide-address SABs. The GBP setting and the schema must match.

### Hybrid (has storefront + service area)

Include both the full address AND the `serviceArea`. Auto repair shops, HVAC supply houses with field service, etc.

### `areaServed` vs `serviceArea`

- `areaServed`: the geographic regions a service is offered to (can be Cities, States, Countries, or GeoShapes)
- `serviceArea`: the geographic area the *business itself* covers (typically a GeoCircle from a center point)

Use both. Google parses them as complementary signals.

### Multi-state SABs

```json
"areaServed": [
  { "@type": "State", "name": "Texas", "sameAs": "https://www.wikidata.org/wiki/Q1439" },
  { "@type": "State", "name": "New Mexico", "sameAs": "https://www.wikidata.org/wiki/Q1522" }
],
"serviceArea": [
  {
    "@type": "GeoCircle",
    "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 33.5779, "longitude": -101.8552 },
    "geoRadius": "120000"
  }
]
```

### Advanced SAB pattern: containsPlace inside the GeoCircle

The standard SAB schema declares a `GeoCircle` and lets the consumer figure out which cities/towns are inside. The advanced pattern explicitly enumerates the contained places — each with its own URL to Wikipedia/Wikidata for entity reconciliation. This is more granular signal than `areaServed` city lists alone.

```json
"serviceArea": {
  "@type": "GeoCircle",
  "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 33.5779, "longitude": -101.8552 },
  "geoRadius": "120000",
  "containsPlace": [
    { "@type": "City", "name": "Lubbock", "sameAs": "https://www.wikidata.org/wiki/Q49231" },
    { "@type": "City", "name": "Wolfforth", "sameAs": "https://www.wikidata.org/wiki/Q2630739" },
    { "@type": "City", "name": "Shallowater", "sameAs": "https://www.wikidata.org/wiki/Q2630737" },
    { "@type": "City", "name": "Slaton", "sameAs": "https://www.wikidata.org/wiki/Q2632036" },
    { "@type": "City", "name": "Levelland", "sameAs": "https://www.wikidata.org/wiki/Q985577" },
    { "@type": "City", "name": "Plainview", "sameAs": "https://www.wikidata.org/wiki/Q1135833" },
    { "@type": "City", "name": "Brownfield", "sameAs": "https://www.wikidata.org/wiki/Q985381" }
  ]
}
```

Use sparingly: 5-15 contained places is a good balance. Listing 200 zip codes is noise. Pick the meaningfully served population centers and their Wikidata identifiers.

### eligibleRegion for offer-specific geographic restrictions

`eligibleRegion` is distinct from `areaServed` and applies to specific Offers, not the business as a whole. Useful for delivery services with restricted delivery zones, regional pricing tiers, geo-restricted promotions, or services available only in certain markets.

```json
{
  "@type": "Offer",
  "@id": "https://example.com/services/delivery/#offer",
  "name": "Same-day delivery",
  "eligibleRegion": {
    "@type": "GeoCircle",
    "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 33.5779, "longitude": -101.8552 },
    "geoRadius": "30000"
  },
  "eligibleTransactionVolume": {
    "@type": "PriceSpecification",
    "minPrice": "50.00",
    "priceCurrency": "USD"
  }
}
```

The combination signals to agents (per Principle 6) and consumers: this offer is geographically restricted AND has a minimum order. Agentic-commerce-ready businesses expose both.

---

## Vertical templates

The following sections give the catalog structure and vertical-specific properties for each major local business category. All vertical templates assume the foundational 9-tier architecture is in place; these sections cover ONLY the catalog/specialty layer specific to that vertical.

### Vertical: Auto Repair

**`@type`:** `AutoRepair`
**Wikidata additionalType:** `https://www.wikidata.org/wiki/Q190810`

```json
{
  "@type": "AutoRepair",
  "@id": "https://example.com/#localbusiness",
  "name": "[Shop name]",
  "description": "[Include: founding year, specialties (European/Asian/domestic/diesel/classic), certifications, key brands serviced]",
  "knowsAbout": [
    "Engine diagnostics",
    "Transmission repair",
    "Brake service",
    "Suspension and steering",
    "OBD-II diagnostic scanning",
    "Pre-purchase inspection",
    "Check engine light diagnosis",
    "Timing belt replacement",
    "Cooling system service",
    "[Brand 1] vehicle service",
    "[Brand 2] vehicle service",
    "Fleet vehicle maintenance"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "ASE Certified",
      "recognizedBy": {
        "@type": "Organization",
        "name": "National Institute for Automotive Service Excellence",
        "url": "https://www.ase.com/"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "ASE Blue Seal of Excellence",
      "recognizedBy": {
        "@type": "Organization",
        "name": "ASE"
      }
    }
  ],
  "memberOf": [
    {
      "@type": "Organization",
      "name": "NAPA AutoCare",
      "url": "https://www.napaautocare.com/"
    },
    {
      "@type": "Organization",
      "name": "Automotive Service Association",
      "url": "https://asashop.org/"
    }
  ],
  "brand": [
    { "@type": "Brand", "name": "Toyota" },
    { "@type": "Brand", "name": "Honda" },
    { "@type": "Brand", "name": "Ford" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Auto Repair Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brake Repair and Replacement",
          "description": "Complete brake system service including pads, rotors, calipers, brake fluid, and ABS diagnostics",
          "provider": { "@id": "https://example.com/#localbusiness" },
          "serviceType": "Automotive brake service",
          "areaServed": { "@id": "https://example.com/#servicearea" }
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "minPrice": "150",
          "maxPrice": "800"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Oil Change Service",
          "description": "Conventional, synthetic blend, and full synthetic oil change with multi-point inspection",
          "provider": { "@id": "https://example.com/#localbusiness" },
          "serviceType": "Automotive oil change"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "minPrice": "45",
          "maxPrice": "120"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Engine Diagnostics",
          "description": "Comprehensive check engine light diagnosis using factory-grade scan tools",
          "provider": { "@id": "https://example.com/#localbusiness" },
          "serviceType": "Engine diagnostics"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Transmission Repair",
          "description": "Automatic and manual transmission service, fluid flush, and rebuild",
          "provider": { "@id": "https://example.com/#localbusiness" },
          "serviceType": "Transmission service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Air Conditioning Service",
          "description": "AC diagnostics, recharge, compressor and condenser replacement",
          "provider": { "@id": "https://example.com/#localbusiness" },
          "serviceType": "Automotive air conditioning"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pre-Purchase Inspection",
          "description": "Comprehensive inspection of used vehicles before purchase",
          "provider": { "@id": "https://example.com/#localbusiness" },
          "serviceType": "Pre-purchase vehicle inspection"
        }
      }
    ]
  },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Customer Lounge", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Shuttle Service", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Loaner Vehicles", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "12-Month/12,000-Mile Warranty", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Financing Available", "value": true }
  ]
}
```

**Auto repair specifics:**
- Per-service `priceSpecification` with `minPrice`/`maxPrice` is excellent for AI Overview citation ("how much does brake repair cost in Lubbock")
- `brand` array for makes serviced is a clean signal for "do you work on [brand]" queries
- ASE and NAPA AutoCare credentials are the highest-trust auto repair signals
- Warranty markup via `amenityFeature` is genuinely citation-worthy

### Vertical: Auto Dealer

**`@type`:** `AutoDealer`
**Wikidata additionalType:** `https://www.wikidata.org/wiki/Q27686`

**Deprecation note (per Part II).** The dedicated **Vehicle Listing rich result was deprecated July 31, 2025.** Vehicle inventory schema is still actively parsed by Google AI Overviews, ChatGPT, Perplexity, and other AI consumers — but the visual SERP enhancement (inventory carousels with pricing, mileage, photos) is gone. The current best-practice pattern: deploy **Vehicle + Product wrapper** on individual VDPs (Vehicle Detail Pages) for AI extraction. Industry sources (a3brands, demandlocal) confirm that for model-specific landing pages (e.g. "2026 Toyota Camry in Lubbock"), combine `Car` schema for the model with `AutoDealer` referenced as `seller`. This signals to AI that the page is about a specific vehicle available from a specific franchised dealer.

For dealers, the inventory catalog is the centerpiece. Use `makesOffer` with `Vehicle`/`Car` entities for live inventory (or `MotorVehicle` for trucks/SUVs).

```json
{
  "@type": "AutoDealer",
  "@id": "https://example.com/#localbusiness",
  "name": "[Dealer name]",
  "brand": [
    { "@type": "Brand", "name": "Ford", "sameAs": "https://www.wikidata.org/wiki/Q44294" }
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Car",
        "name": "2026 Ford F-150 XLT",
        "brand": { "@type": "Brand", "name": "Ford" },
        "model": "F-150 XLT",
        "vehicleModelDate": "2026",
        "vehicleIdentificationNumber": "[VIN]",
        "mileageFromOdometer": {
          "@type": "QuantitativeValue",
          "value": "12",
          "unitCode": "SMI"
        },
        "fuelType": "Gasoline",
        "vehicleTransmission": "Automatic",
        "driveWheelConfiguration": "https://schema.org/FourWheelDriveConfiguration",
        "numberOfDoors": "4",
        "color": "Oxford White",
        "vehicleConfiguration": "XLT 4x4 SuperCrew"
      },
      "price": "52995",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  ]
}
```

Inventory schema is typically generated programmatically from DMS data, not hand-written. For dealers, the priority is the dealer-level schema (Tiers 1–9) plus a programmatic feed pattern that emits `Vehicle` per VDP.

### Vertical: Restaurant

**`@type`:** `Restaurant` (or specific: `BarOrPub`, `CafeOrCoffeeShop`, `FastFoodRestaurant`, `Bakery`, `Brewery`, `Winery`, `Distillery`)
**Wikidata additionalType:** `https://www.wikidata.org/wiki/Q11707` (restaurant), `https://www.wikidata.org/wiki/Q177` (pizzeria), etc.

Restaurant-specific properties:

```json
{
  "@type": "Restaurant",
  "@id": "https://example.com/#localbusiness",
  "servesCuisine": ["Italian", "Mediterranean"],
  "acceptsReservations": "True",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "4",
    "bestRating": "5",
    "author": { "@type": "Organization", "name": "[Rating body]" }
  },
  "menu": "https://example.com/menu",
  "hasMenu": {
    "@type": "Menu",
    "@id": "https://example.com/#menu",
    "name": "Dinner Menu",
    "description": "Served 5pm–10pm",
    "inLanguage": "en-US",
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Antipasti",
        "description": "Starters and small plates",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Burrata e Prosciutto",
            "description": "Fresh burrata, prosciutto di Parma, arugula, balsamic",
            "image": "https://example.com/photos/burrata.jpg",
            "offers": {
              "@type": "Offer",
              "price": "18.00",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "suitableForDiet": [
              "https://schema.org/GlutenFreeDiet"
            ],
            "nutrition": {
              "@type": "NutritionInformation",
              "calories": "420 calories"
            }
          }
        ]
      },
      {
        "@type": "MenuSection",
        "name": "Pasta",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Cacio e Pepe",
            "description": "Tonnarelli, Pecorino Romano, black pepper",
            "offers": {
              "@type": "Offer",
              "price": "24.00",
              "priceCurrency": "USD"
            },
            "suitableForDiet": ["https://schema.org/VegetarianDiet"]
          }
        ]
      }
    ]
  },
  "maximumAttendeeCapacity": 80,
  "potentialAction": [
    {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://example.com/reserve",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      },
      "result": {
        "@type": "FoodEstablishmentReservation",
        "name": "Table reservation"
      }
    },
    {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://example.com/order",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      },
      "deliveryMethod": [
        "http://purl.org/goodrelations/v1#DeliveryModePickUp",
        "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"
      ]
    }
  ],
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Outdoor Seating", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Private Dining Room", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Full Bar", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Live Music", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Pet-Friendly Patio", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Valet Parking", "value": true }
  ]
}
```

**Restaurant-specific notes:**
- `servesCuisine` is critical and missed by most generators
- `acceptsReservations` is a recognized Google rich result property
- `suitableForDiet` is high-value for "[diet] restaurants near me" AI queries
- `Menu` can be inlined OR referenced by URL via `menu` property; for large menus, URL reference is more maintainable

### Vertical: Healthcare (Physician, Dentist, Clinic)

**`@type`:** `Physician`, `Dentist`, `Optometrist`, `MedicalClinic`, `Hospital`, `Pharmacy`, `VeterinaryCare`
**Wikidata additionalType:** vary by specialty

```json
{
  "@type": "Dentist",
  "@id": "https://example.com/#localbusiness",
  "name": "[Practice name]",
  "medicalSpecialty": [
    "https://schema.org/Dentistry"
  ],
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Dental Implants",
      "procedureType": "https://schema.org/SurgicalProcedure",
      "howPerformed": "[Brief description]",
      "preparation": "[Pre-procedure prep info]"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Invisalign Treatment",
      "procedureType": "https://schema.org/NoninvasiveProcedure"
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "Texas State Board of Dental Examiners License",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Texas State Board of Dental Examiners"
      },
      "identifier": "[License #]"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "American Board of Pediatric Dentistry Diplomate",
      "recognizedBy": {
        "@type": "Organization",
        "name": "American Board of Pediatric Dentistry"
      }
    }
  ],
  "memberOf": [
    { "@type": "Organization", "name": "American Dental Association", "url": "https://www.ada.org/" }
  ],
  "healthPlanNetworkId": ["[Insurance plans accepted]"],
  "isAcceptingNewPatients": true,
  "availableLanguage": ["English", "Spanish"]
}
```

For each named physician/dentist/practitioner, create a separate `Physician`/`Dentist` Person entity (or `MedicalOrganization` for the practice with employees) linked via `employee` array. Per-provider markup is high-leverage for "Dr. [Name] reviews / hours / appointments" queries.

### Vertical: Legal (Attorneys)

**`@type`:** `Attorney`, `LegalService`
**Wikidata additionalType:** `https://www.wikidata.org/wiki/Q40348`

```json
{
  "@type": "Attorney",
  "@id": "https://example.com/#localbusiness",
  "name": "[Firm or attorney name]",
  "knowsAbout": [
    "Criminal defense",
    "DWI defense",
    "Drug crime defense",
    "Federal criminal defense",
    "White collar crime defense",
    "Assault defense",
    "Domestic violence defense",
    "Probation violations",
    "Juvenile defense",
    "[State] criminal law"
  ],
  "areaServed": [
    { "@type": "State", "name": "Texas", "sameAs": "https://www.wikidata.org/wiki/Q1439" }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "Texas State Bar License",
      "recognizedBy": {
        "@type": "Organization",
        "name": "State Bar of Texas",
        "url": "https://www.texasbar.com/"
      },
      "identifier": "[Bar #]"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "Admitted, U.S. District Court, Northern District of Texas"
    }
  ],
  "memberOf": [
    { "@type": "Organization", "name": "State Bar of Texas", "url": "https://www.texasbar.com/" },
    { "@type": "Organization", "name": "Texas Criminal Defense Lawyers Association" },
    { "@type": "Organization", "name": "National Association of Criminal Defense Lawyers" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Legal Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Criminal Defense Representation",
          "serviceType": "Criminal defense",
          "provider": { "@id": "https://example.com/#localbusiness" }
        }
      }
    ]
  },
  "feesAndCommissionsSpecification": "https://example.com/fees",
  "availableLanguage": ["English", "Spanish"]
}
```

For law firms with multiple attorneys, each attorney is a separate `Attorney` Person entity in the `@graph`, linked via `employee` and with their own bar admission credentials. This is Thomas's Luke W. Jordan setup — Person entities for each attorney with full `hasCredential`, `knowsAbout` (practice areas), and `sameAs` to Justia, Avvo, Martindale, USLegal, state bar profiles.

### Vertical: Home Services / SAB Trades

**`@type`:** `Plumber`, `Electrician`, `HVACBusiness`, `RoofingContractor`, `GeneralContractor`, `LocksmithService`, `HousePainter`, `MovingCompany`, `PestControl`

```json
{
  "@type": "Plumber",
  "@id": "https://example.com/#localbusiness",
  "name": "[Business name]",
  "knowsAbout": [
    "Residential plumbing",
    "Commercial plumbing",
    "Emergency plumbing repair",
    "Water heater installation",
    "Tankless water heater service",
    "Drain cleaning",
    "Sewer line repair",
    "Hydro jetting",
    "Slab leak detection",
    "Repipe specialist",
    "Gas line repair",
    "Backflow testing"
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 33.5779,
      "longitude": -101.8552
    },
    "geoRadius": "60000"
  },
  "areaServed": [
    { "@type": "City", "name": "Lubbock", "sameAs": "https://www.wikidata.org/wiki/Q49232" },
    { "@type": "City", "name": "Wolfforth" },
    { "@type": "City", "name": "Slaton" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Plumbing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "24/7 Emergency Plumbing",
          "serviceType": "Emergency plumbing",
          "provider": { "@id": "https://example.com/#localbusiness" },
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Water Heater Replacement",
          "serviceType": "Water heater installation"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "minPrice": "900",
          "maxPrice": "3500"
        }
      }
    ]
  },
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "Texas Master Plumber License",
      "recognizedBy": { "@type": "Organization", "name": "Texas State Board of Plumbing Examiners" },
      "identifier": "M-XXXXX"
    }
  ],
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "24/7 Emergency Service", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Free Estimates", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Licensed and Insured", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Senior Discount", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Military Discount", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Financing Available", "value": true }
  ]
}
```

For HVAC, electrician, roofing, general contractor: same pattern with type-specific `knowsAbout` terms and credentials. Roofers should include manufacturer certifications (GAF, Owens Corning, CertainTeed) as `hasCredential` entries.

### Vertical: Real Estate

**`@type`:** `RealEstateAgent`

```json
{
  "@type": "RealEstateAgent",
  "@id": "https://example.com/#localbusiness",
  "name": "[Agent name or team]",
  "memberOf": [
    { "@type": "Organization", "name": "National Association of Realtors", "url": "https://www.nar.realtor/" },
    { "@type": "Organization", "name": "[Local MLS]" }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "Texas Real Estate License",
      "recognizedBy": { "@type": "Organization", "name": "Texas Real Estate Commission" }
    }
  ],
  "knowsAbout": [
    "Residential real estate",
    "Luxury home sales",
    "First-time home buyer",
    "Investment property",
    "[Neighborhood specialty 1]",
    "[Neighborhood specialty 2]"
  ],
  "areaServed": [
    { "@type": "City", "name": "[City]" },
    { "@type": "Place", "name": "[Specific neighborhood]" }
  ]
}
```

For individual listings, use `Residence` / `Accommodation` / `SingleFamilyResidence` types with `RealEstateListing` markup. Listings are typically programmatically generated.

### Vertical: Hospitality (Hotel, Motel, B&B)

**`@type`:** `Hotel`, `Motel`, `BedAndBreakfast`, `Resort`, `Campground`, `Hostel`, `LodgingBusiness`

```json
{
  "@type": "Hotel",
  "@id": "https://example.com/#localbusiness",
  "name": "[Hotel name]",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "4",
    "bestRating": "5"
  },
  "checkinTime": "15:00",
  "checkoutTime": "11:00",
  "numberOfRooms": {
    "@type": "QuantitativeValue",
    "value": "120"
  },
  "petsAllowed": true,
  "smokingAllowed": false,
  "availableLanguage": ["English", "Spanish", "French"],
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Pool", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Fitness Center", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Free Breakfast", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Pet-Friendly", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Airport Shuttle", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Business Center", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Restaurant on Premises", "value": true }
  ],
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://example.com/book",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/IOSPlatform",
        "http://schema.org/AndroidPlatform"
      ]
    },
    "result": { "@type": "LodgingReservation" }
  }
}
```

Room-type markup uses `Room` / `Suite` / `HotelRoom` entities, typically programmatic.

### Vertical: Fitness & Wellness (Gym, Yoga, Studio)

**`@type`:** `ExerciseGym`, `HealthClub`, `SportsActivityLocation`, `YogaStudio` (use `SportsActivityLocation` with additionalType)

```json
{
  "@type": "ExerciseGym",
  "@id": "https://example.com/#localbusiness",
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Free Weights", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Cardio Equipment", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Group Classes", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Personal Training", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Locker Rooms with Showers", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Sauna", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "24-Hour Access", "value": true }
  ],
  "event": [
    {
      "@type": "Event",
      "name": "Yoga Flow Class",
      "description": "60-minute vinyasa flow",
      "startDate": "2026-05-15T07:00:00-05:00",
      "endDate": "2026-05-15T08:00:00-05:00",
      "eventSchedule": {
        "@type": "Schedule",
        "byDay": ["https://schema.org/Monday", "https://schema.org/Wednesday", "https://schema.org/Friday"],
        "startTime": "07:00",
        "endTime": "08:00",
        "scheduleTimezone": "America/Chicago"
      },
      "location": { "@id": "https://example.com/#localbusiness" }
    }
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Monthly Membership",
      "price": "49.99",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "49.99",
        "priceCurrency": "USD",
        "billingDuration": "P1M",
        "unitText": "MONTH"
      }
    }
  ]
}
```

### Vertical: Salons & Spas

**`@type`:** `HairSalon`, `BeautySalon`, `NailSalon`, `DaySpa`, `HealthAndBeautyBusiness`

```json
{
  "@type": "HairSalon",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Salon Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Women's Haircut",
          "serviceType": "Haircut"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "minPrice": "65",
          "maxPrice": "120"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Balayage",
          "serviceType": "Hair coloring"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "minPrice": "250",
          "maxPrice": "450"
        }
      }
    ]
  }
}
```

Named stylists/estheticians get `Person` entities with `knowsAbout` for specialties (color, cutting, extensions, etc.) and `sameAs` to Instagram. Critical for "[stylist name] reviews" queries.

### Vertical: Retail (General)

**`@type`:** `Store`, `ClothingStore`, `BookStore`, `FurnitureStore`, `JewelryStore`, `ShoeStore`, `SportingGoodsStore`, `ToyStore`, `HardwareStore`, `HomeGoodsStore`, `GardenStore`, `OfficeEquipmentStore`

```json
{
  "@type": "Store",
  "hasPOS": true,
  "currenciesAccepted": "USD",
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Apple Pay", "Google Pay", "Buy Now Pay Later"],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "[Product name]",
        "brand": { "@type": "Brand", "name": "[Brand]" },
        "category": "[Category]"
      }
    }
  ]
}
```

For e-commerce retailers with web inventory, use `Product` schema per PDP (separate, programmatic).

### Vertical: Financial Services

**`@type`:** `FinancialService`, `BankOrCreditUnion`, `InsuranceAgency`, `AccountingService`

```json
{
  "@type": "FinancialService",
  "feesAndCommissionsSpecification": "https://example.com/fees",
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "Certified Financial Planner",
      "recognizedBy": {
        "@type": "Organization",
        "name": "CFP Board",
        "url": "https://www.cfp.net/"
      }
    }
  ],
  "memberOf": [
    { "@type": "Organization", "name": "FINRA", "url": "https://www.finra.org/" }
  ],
  "knowsAbout": [
    "Retirement planning",
    "Tax-advantaged investing",
    "Estate planning",
    "401(k) rollover",
    "Roth IRA conversion",
    "Small business financial planning"
  ]
}
```

Insurance agents add `availableProduct` array of insurance product types. CPAs use `AccountingService` and add tax-prep specialty terms in `knowsAbout`.

### Vertical: Professional Services (CPA, Consultants, Notary)

**`@type`:** `AccountingService`, `ProfessionalService`, `Notary`

CPA example:

```json
{
  "@type": "AccountingService",
  "knowsAbout": [
    "Individual tax preparation",
    "Small business tax returns",
    "S-Corp tax filing",
    "LLC tax filing",
    "IRS audit representation",
    "Bookkeeping services",
    "Payroll services",
    "QuickBooks ProAdvisor"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "Texas CPA License",
      "recognizedBy": { "@type": "Organization", "name": "Texas State Board of Public Accountancy" }
    }
  ]
}
```

### Vertical: Veterinary

**`@type`:** `VeterinaryCare`

```json
{
  "@type": "VeterinaryCare",
  "knowsAbout": [
    "Small animal medicine",
    "Feline medicine",
    "Canine dentistry",
    "Surgical procedures",
    "Emergency veterinary care",
    "Exotic pet medicine",
    "Avian medicine"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "Texas Veterinary Medical License",
      "recognizedBy": { "@type": "Organization", "name": "Texas Board of Veterinary Medical Examiners" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "accreditation",
      "name": "AAHA Accredited",
      "recognizedBy": { "@type": "Organization", "name": "American Animal Hospital Association" }
    }
  ]
}
```

### Vertical: Funeral Homes

**`@type`:** Use `LocalBusiness` with `additionalType` pointing to Wikidata `https://www.wikidata.org/wiki/Q1075498`. (Schema.org has `FuneralHome` as a type — verify current support; otherwise fall back to LocalBusiness.)

```json
{
  "@type": "FuneralHome",
  "knowsAbout": [
    "Traditional funeral services",
    "Cremation services",
    "Memorial services",
    "Pre-planning",
    "Veteran funeral services"
  ],
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "On-site chapel", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Reception facility", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Pre-planning services", "value": true }
  ]
}
```

### Vertical: Education & Tutoring

**`@type`:** `EducationalOrganization`, `Preschool`, `ElementarySchool`, `HighSchool`, `CollegeOrUniversity`, `TutoringService` (use `LocalBusiness` with appropriate `additionalType`)

```json
{
  "@type": "EducationalOrganization",
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "accreditation",
      "name": "[Accrediting body]"
    }
  ],
  "hasCourse": [
    {
      "@type": "Course",
      "name": "SAT Prep",
      "description": "12-week SAT preparation course",
      "provider": { "@id": "https://example.com/#organization" },
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "in-person",
          "location": { "@id": "https://example.com/#localbusiness" }
        }
      ]
    }
  ]
}
```

### Vertical: Pet Services (Grooming, Daycare, Boarding)

Schema.org has no specific subtype; use `LocalBusiness` with `additionalType` to Wikidata.

```json
{
  "@type": "LocalBusiness",
  "additionalType": "https://www.wikidata.org/wiki/Q1361932",
  "knowsAbout": [
    "Dog grooming",
    "Cat grooming",
    "Dog boarding",
    "Doggy daycare",
    "Pet bathing",
    "De-shedding",
    "Nail trimming"
  ]
}
```

### Vertical: Tattoo & Body Modification

**`@type`:** `TattooParlor`

```json
{
  "@type": "TattooParlor",
  "knowsAbout": [
    "Custom tattoo design",
    "Black and grey tattoo",
    "Color realism tattoo",
    "Japanese-style tattoo",
    "Cover-up tattoo work",
    "Body piercing"
  ]
}
```

Named artists get full `Person` entity with portfolio links via `sameAs` to Instagram, plus `knowsAbout` for their style specialties.

### Vertical: Self Storage

**`@type`:** `SelfStorage`

```json
{
  "@type": "SelfStorage",
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Climate Controlled Units", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "24/7 Access", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Drive-Up Units", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Video Surveillance", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "RV/Boat Storage", "value": true }
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "5x5 Climate Controlled Unit",
      "price": "55",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "55",
        "priceCurrency": "USD",
        "billingDuration": "P1M"
      }
    }
  ]
}
```

### Vertical: Auto Body / Collision Repair

**`@type`:** Use `AutoBodyShop`

```json
{
  "@type": "AutoBodyShop",
  "knowsAbout": [
    "Collision repair",
    "Dent removal",
    "Paintless dent repair",
    "Auto painting",
    "Frame straightening",
    "Insurance claim assistance",
    "Hail damage repair",
    "Bumper repair"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "I-CAR Gold Class",
      "recognizedBy": { "@type": "Organization", "name": "Inter-Industry Conference on Auto Collision Repair" }
    }
  ]
}
```

### Vertical: Tow & Roadside

**`@type`:** Use `AutomotiveBusiness` with `additionalType` to Wikidata towing, or `LocalBusiness`

```json
{
  "@type": "AutomotiveBusiness",
  "additionalType": "https://www.wikidata.org/wiki/Q1422290",
  "knowsAbout": [
    "Emergency towing",
    "Light-duty towing",
    "Heavy-duty towing",
    "Motorcycle towing",
    "Roadside assistance",
    "Jump start service",
    "Tire change service",
    "Lockout service",
    "Fuel delivery",
    "Winch-out service"
  ],
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "24/7 Service", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "AAA Approved", "value": true }
  ]
}
```

### Vertical: Event Rental

**`@type`:** `LocalBusiness` (no specific event-rental subtype exists in schema.org)
**Wikidata additionalType:** `https://www.wikidata.org/wiki/Q1429217` (equipment rental)

Event rental businesses (tent, table, chair, linen, decor, AV, bounce house, photo booth, wedding rentals, party supplies) sit awkwardly in schema.org's hierarchy — there is no specific `EventRental` subtype. The pattern: use `LocalBusiness` as `@type` with `additionalType` pointing to the equipment-rental Wikidata QID. The catalog uses nested `OfferCatalog` per Principle 28 to express the category hierarchy.

```json
{
  "@type": "LocalBusiness",
  "@id": "https://example.com/#localbusiness",
  "additionalType": "https://www.wikidata.org/wiki/Q1429217",
  "name": "[Business name]",
  "disambiguatingDescription": "[City] event rental company providing tents, tables, chairs, linens, and decor for weddings, corporate events, and parties",
  "knowsAbout": [
    { "@type": "Thing", "name": "tent rental", "sameAs": "https://www.wikidata.org/wiki/Q190570" },
    { "@type": "Thing", "name": "wedding planning", "sameAs": "https://www.wikidata.org/wiki/Q259533" },
    { "@type": "Thing", "name": "event management", "sameAs": "https://www.wikidata.org/wiki/Q5402313" },
    { "@type": "Thing", "name": "tailgating", "sameAs": "https://www.wikidata.org/wiki/Q1525350" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Event Rental Inventory",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Tents & Structures",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "20x20 frame tent" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "20x40 frame tent" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "40x60 pole tent" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Sailcloth tent" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Tables & Seating",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "60-inch round table" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "8-foot rectangular table" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Cocktail tables" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Chiavari chairs" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Cross-back chairs" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Linens & Tabletop",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Floor-length linens" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Charger plates" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Glassware" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Lighting & Decor",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "String lights" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Chandeliers" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Up-lighting packages" } }
        ]
      }
    ]
  },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Delivery", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Setup & Teardown", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Day-of Coordination", "value": "Available" }
  ]
}
```

For event rental businesses with seasonal demand (wedding rentals, tailgate season), the WebPage `dateModified` is especially important — AI consumers heavily weight recency for "available [equipment] in [city] this weekend" type queries.

### Other verticals quick reference

| Business | `@type` | Wikidata QID for additionalType |
|----------|---------|-------------------------------|
| Florist | `Florist` | Q484799 |
| Pharmacy | `Pharmacy` | Q108325 |
| Optician | `Optician` | Q1359288 |
| Travel agency | `TravelAgency` | Q1729387 |
| Insurance agency | `InsuranceAgency` | Q43229 (insurance) |
| Dry cleaner | `DryCleaningOrLaundry` | Q200460 (dry cleaning) |
| Locksmith | `LocksmithService` | Q207130 (locksmithing) |
| Notary | `Notary` | Q189553 (notary public) |
| Pest control | `PestControl` | Q1404687 |
| Moving company | `MovingCompany` | Q2750223 |
| House painter | `HousePainter` | Q3360300 |
| Photography studio | `ProfessionalService` + addtl Q165436 | Q165436 |
| Wedding planner | `ProfessionalService` + addtl Q1820172 | Q1820172 |
| Daycare | `ChildCare` | Q2706093 |
| Landscaping | `HomeAndConstructionBusiness` + addtl Q1349639 | Q1349639 |
| Tree service | `HomeAndConstructionBusiness` + addtl Q124100 | Q124100 |
| Cleaning service | `HousePainter` parent, use `LocalBusiness` + addtl | Q15239622 |
| Pool service | `LocalBusiness` + addtl | Q740623 |
| Solar installation | `HomeAndConstructionBusiness` + addtl | Q11473 |
| Fence company | `HomeAndConstructionBusiness` + addtl Q148571 | Q148571 |
| Garage door | `HomeAndConstructionBusiness` + addtl Q2620577 | Q2620577 |
| Window installation | `HomeAndConstructionBusiness` + addtl | Q35473 |
| Flooring | `HomeAndConstructionBusiness` + addtl | Q3357112 |
| Music school | `EducationalOrganization` | Q184644 |
| Dance studio | `EducationalOrganization` + addtl | Q2752108 |
| Martial arts | `SportsActivityLocation` + addtl | Q11417 |

For any vertical where schema.org lacks a specific subtype, use the closest parent type (`LocalBusiness`, `HomeAndConstructionBusiness`, `ProfessionalService`, `MedicalBusiness`, `AutomotiveBusiness`, `Store`) and add `additionalType` with the Wikidata QID for the specific concept.

---

## Companion schema types (pair with LocalBusiness)

### FAQPage (the dual-consumer reframe)

**SERP rich result status:** DEPRECATED May 7, 2026 for all sites except authoritative government and health domains. The FAQ search appearance, Rich Results Test support, and Search Console API support for FAQ are being phased out through August 2026.

**AI extraction value: very high.** Frase research: pages with FAQPage markup are 3.2x more likely to appear in Google AI Overviews. FAQ schema has one of the highest citation rates in AI-generated answers across ChatGPT, Perplexity, and Google AI Overviews. The Q-and-A format aligns structurally with how AI presents synthesized answers.

**Implementation decision (per Principle 3, Dual-Consumer Inversion):** implement FAQPage when the page is *genuinely a FAQ page* — not on marketing pages, not on service pages with five tacked-on questions. Per Search Engine Land (Jennifer Mathews, October 2025): *"Don't apply FAQPage schema unless the page exists primarily to answer questions."* Misuse of FAQ schema (stuffing keyword-heavy promotional content into Question/Answer pairs) has been the trigger for Google's deprecation; doing it anyway invites penalties and provides no benefit since the rich result is gone.

**When to use FAQPage in 2026:**
- The page is a dedicated FAQ page or knowledge-base article structured as Q&A.
- Each Question has one definitive non-promotional Answer.
- The Answers are genuinely useful and stand alone as factual content.

**When NOT to use FAQPage (use QAPage or article structure instead):**
- The page is a product/service page with FAQs added for SEO purposes.
- The "FAQs" are marketing copy with thin questions ("Why choose us?").
- Multiple valid answers exist for a question (use QAPage instead).
- The page sells a product and you want stars in SERPs (use Product review schema, not FAQPage).

```json
{
  "@type": "FAQPage",
  "@id": "[page-url]/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Genuine customer question]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Factual answer in 2–4 sentences. LLMs extract this verbatim. Pack with disambiguating facts: location, time period, specific quantities, exact procedures.]"
      }
    }
  ]
}
```

5–10 FAQs per page. Target the actual questions people ask AI search engines (Google's "People Also Ask" boxes are a strong source). Pair with `speakable` on the WebPage entity for voice-surface alignment. Answers should be packed with specific, disambiguating facts — LLMs extract verbatim, so prose that's vague or generic produces vague generic citations.

### HowTo (similar dual-consumer reframe)

**SERP rich result status:** DEPRECATED fully (desktop deprecated September 2023, mobile earlier).

**AI extraction value: medium.** Still parsed by AI consumers for procedural content. Useful for genuinely how-to content (DIY guides, repair procedures, recipe-adjacent processes); not useful for marketing fluff structured as steps.

**Implementation decision:** implement on genuine how-to content. Skip on service pages where the "steps" are sales copy.

```json
{
  "@type": "HowTo",
  "name": "How to [task]",
  "description": "[Brief overview of what this guide accomplishes]",
  "totalTime": "PT2H",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "150"
  },
  "tool": [{ "@type": "HowToTool", "name": "[Tool]" }],
  "supply": [{ "@type": "HowToSupply", "name": "[Supply]" }],
  "step": [
    {
      "@type": "HowToStep",
      "name": "[Step name]",
      "text": "[Detailed step instructions]",
      "image": "[step image URL]"
    }
  ]
}
```

### Article / BlogPosting (for blog content)

```json
{
  "@type": "BlogPosting",
  "headline": "[Article title]",
  "image": "[primary image]",
  "datePublished": "YYYY-MM-DDTHH:MM:SS-06:00",
  "dateModified": "YYYY-MM-DDTHH:MM:SS-06:00",
  "author": { "@id": "[author-url]/#person" },
  "publisher": { "@id": "[canonical-url]/#organization" },
  "mainEntityOfPage": { "@id": "[page-url]/#webpage" },
  "about": { "@id": "[canonical-url]/#localbusiness" },
  "mentions": [
    { "@type": "Thing", "name": "[Concept mentioned]", "sameAs": "https://www.wikidata.org/wiki/[Q-ID]" }
  ],
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".article-headline", ".article-summary"]
  }
}
```

### Course (for educational/training offerings)

```json
{
  "@type": "Course",
  "name": "[Course name]",
  "description": "[Description]",
  "provider": { "@id": "[canonical-url]/#organization" },
  "hasCourseInstance": [
    {
      "@type": "CourseInstance",
      "courseMode": "in-person",
      "startDate": "YYYY-MM-DD",
      "endDate": "YYYY-MM-DD",
      "location": { "@id": "[canonical-url]/#localbusiness" }
    }
  ],
  "offers": {
    "@type": "Offer",
    "price": "[price]",
    "priceCurrency": "USD"
  }
}
```

---

## Multi-location handling

For businesses with 2+ locations:

1. **Brand-level homepage** carries `Organization` schema (the parent entity)
2. **Each location page** carries a full LocalBusiness schema with:
   - Unique `@id` (`https://example.com/locations/austin/#localbusiness`)
   - Unique NAP, geo, hours, hasMap CID, action URLs
   - `parentOrganization` reference to `https://example.com/#organization`
   - Its own complete 9-tier structure
3. **A "Locations" hub page** can list all locations with `branchOf` references but doesn't replace per-location markup
4. **Never combine multiple locations in one schema block**

For 100+ location enterprises, schema is programmatic from a CMS or location database. Hand-build the template; populate per-location from the data source.

### Franchise pattern

```json
{
  "@type": "[Specific subtype]",
  "@id": "https://franchisee-site.com/#localbusiness",
  "name": "[Franchise brand] [Location identifier]",
  "branchOf": {
    "@type": "Organization",
    "@id": "https://franchise-corporate.com/#organization",
    "name": "[Franchise brand corporate]",
    "url": "https://franchise-corporate.com/"
  },
  "parentOrganization": {
    "@id": "https://franchise-corporate.com/#organization"
  }
}
```

---

## Compliance & Google policy

### The 2019 review rich results change

Google stopped displaying review stars in search results for *self-serving* `aggregateRating` and `review` markup on `LocalBusiness`, `Organization`, and most service types. The schema is still valid; Google still uses it for entity validation, Knowledge Graph reinforcement, and AI Overview extraction. But the stars in SERPs require a workaround.

**Wrapper workaround for stars:**
- `Product` — markup the products sold (works for retailers)
- `Service` — markup individual services as Service entities with their own aggregateRating
- `Course` — for training providers, restaurants offering classes, etc.
- `Book`, `Movie`, `Recipe`, `CreativeWork` — depending on what the business publishes
- `Event` — for venues hosting events

For LocalBusiness types where stars-in-SERPs is the goal, the modern pattern is: keep `aggregateRating` on the LocalBusiness (for entity validation and AI citation), AND mark up specific services or products with their own AggregateRating wrappers for SERP stars.

**Third-party review markup is permitted only when:**
- The reviews are genuinely first-party (collected on the business's own site/forms)
- Specific Google guidelines for third-party platforms are met (rare; mostly for aggregator platforms themselves)

Marking up Google Maps reviews, Yelp reviews, or Facebook reviews on the business's own site is a violation and risks manual action.

### Don't mark up invisible content

Google's structured data guidelines: schema must reflect content visible on the page. Marking up an FAQ that doesn't appear in visible HTML is a violation. Markup must mirror the page.

### Don't fabricate

No invented ratings. No invented review counts. No invented credentials or awards. Manual actions exist for fabricated structured data.

### Don't markup competitors' brands

`brand` markup for vehicles serviced (auto repair) or products sold (retail) is appropriate. Marking up competitor brands to capture branded query intent is a manipulation tactic Google penalizes.

---

## Validation strategy

Three tools, each checking different things:

1. **Google Rich Results Test** (`search.google.com/test/rich-results`)
   - Validates *only* schema types Google supports for rich results
   - Tells you which Google rich result features are eligible
   - Use this to confirm SERP eligibility

2. **Schema Markup Validator** (`validator.schema.org`)
   - Validates the *full schema.org vocabulary*
   - Catches all schema-level errors regardless of Google support
   - Use this as the primary validation gate

3. **JSON syntax linter** (any JSON validator)
   - Catches trailing commas, malformed strings, type mismatches
   - Run before any schema/JSON-LD tool

**Standard validation flow:**
1. JSON linter → fix syntax
2. Schema Markup Validator → fix schema vocabulary issues
3. Google Rich Results Test → confirm rich result eligibility
4. Deploy
5. Google Search Console → URL Inspection → confirm Google reads the schema
6. Monitor → check Search Console for "Rich results" enhancements over 2–4 weeks

---

## Diminishing returns — what NOT to do

These are things below the 0.1% bar — beyond comprehensive, into noise.

1. **Don't `employee`-markup every staff member.** Limit to leadership, named providers (doctors, lawyers, master technicians), named instructors. A 50-person team should have 3–8 named people in schema, not 50.
2. **Don't over-nest beyond 5–6 levels deep.** Parsers can choke; the entity graph becomes unmanageable.
3. **Don't generate hundreds of FAQ entries for keyword stuffing.** 3–6 high-quality FAQs per page is the ceiling.
4. **Don't markup every social engagement metric in `interactionStatistic`.** Follower counts change too fast and the markup goes stale.
5. **Don't `mentions`-link to irrelevant entities for topical padding.** Each mention should be genuinely related.
6. **Don't markup speculative or aspirational events.** Only schedule schema for confirmed events.
7. **Don't markup hours you don't actually keep.** Hours misalignment with GBP is a Map Pack ranking dampener.
8. **Don't include `aggregateRating` if reviews are sparse.** Under 5 reviews looks worse than no markup.
9. **Don't replicate the same `sameAs` URL with trailing slash variants.** One canonical URL per profile.
10. **Don't include both `LocalBusiness` and `Organization` `@type` on the same node.** They are separate entities with separate `@id`s.
11. **Don't add `priceRange` if you operate variable pricing.** `priceSpecification` per Service/Offer is more accurate.
12. **Don't keep `specialOpeningHoursSpecification` entries past their date.** Prune quarterly or use server-side date logic.
13. **Don't link `sameAs` to citation sources you can't verify.** Bad citations weaken entity reconciliation.
14. **Don't markup an `aggregateRating` for a service that has no reviews.** Wrap-pattern is for genuine reviewed services only.
15. **Don't conflict GBP and schema on categories.** GBP primary category → schema `@type` must agree.

---

## Part XIII — The Un-Automatable Layer Curation Protocol

Per Principle 4: tools are rapidly automating template schema. Within 36 months, generating @graph foundations for an arbitrary business will be a commodity API call. **The four fields below are where expert human judgment continues to add irreplaceable value.** Spend 90% of expert schema-craft time here.

### Field 1 — `additionalType` with the most precise Wikidata QID

**What goes wrong with automation.** Tools guess at Wikidata QIDs and choose the most popular match or the most-frequently-used QID for the category. They lack the judgment to recognize when:
- The business is a specialized variant that has its own QID (a tort attorney is not just a "lawyer" — Q40348)
- The Wikidata entry for the obvious term is actually about something different (Q1234567 might be about a defunct company or a sports team, not the industry)
- Multiple QIDs are valid and the choice between them carries different signal weight
- The schema.org type already covers most of what's needed and `additionalType` should specify the *vertical specialization* rather than restate the type

**The protocol.** For every business, after selecting the schema.org `@type`:
1. Open wikidata.org. Search for the business's most specific category.
2. Read the Wikidata entry for the candidate QID. Confirm it describes the same concept as the business.
3. Check related QIDs ("subclass of", "different from") to ensure you have the *narrowest* applicable.
4. If multiple are valid (e.g., a wedding rental business is both "equipment rental" Q1429217 and "wedding industry" Q255159), choose the narrower or include both — but document why.
5. Save the chosen QID and reasoning to a project file. Future audits should be able to verify the judgment.

**The Lubbock Event Rentals example.** No specific schema.org subtype exists for event rental. `LocalBusiness` is the `@type`. The Wikidata QID Q1429217 (equipment rental) is more specific than Q4830453 (business). Q1429217 was chosen because (a) it explicitly covers the equipment-rental category, (b) it's narrower than generic "business," and (c) it cleanly disambiguates from sales-oriented retailers.

### Field 2 — `sameAs` curated for authority and relevance

**What goes wrong with automation.** Tools populate `sameAs` with the obvious profiles (Facebook, Instagram, LinkedIn) and call it done. Critical defects this misses:
- **Stale/incorrect citations** that need to be claimed or merged before linking. Linking to a Yelp listing at the old address actively damages entity reconciliation.
- **Low-quality aggregators** (Wheree, ThreeBestRated, generic local-finder spam sites) are bottom-of-the-barrel signals that dilute the average authority of the `sameAs` set.
- **Authoritative niche directories** that tools rarely surface — state bar associations for attorneys, the NADA for auto dealers, the AVA for veterinarians, regional industry associations, the BBB profile (when active), trade-specific verification programs.
- **The Wikidata and Wikipedia entries** when they exist — these are the single highest-authority `sameAs` and tools often miss them entirely or fail to verify they actually exist.

**The protocol.** For every business, run an explicit `sameAs` curation pass:
1. **Audit existing directory presence.** Enumerate every directory profile that exists for the business. Note which are current and accurate, which are stale, which point to wrong info.
2. **Triage.** Claim/merge stale citations. Correct any that have wrong info.
3. **Identify authoritative niche directories** for the business's industry. Industry trade associations, state licensing boards, professional society directories, regional industry groups. These often outweigh five social profiles in authority signal.
4. **Add Wikipedia/Wikidata** when they exist. If the business doesn't have entries, evaluate whether it merits them (most local businesses don't; some — long-established, regional landmarks, family-owned 50+ years — do).
5. **Curate the set.** Prefer 8-15 high-authority, fully-current citations over 25 mediocre ones. The average authority matters more than the count.
6. **Document the rationale.** Why each citation was included. Future audits should be able to assess whether the choices still hold.

**The agency moat insight.** Tools cannot do steps 1-3 reliably. The agency that does them well builds entity authority that template-output competitors cannot match.

### Field 3 — `mentions` chosen for entity-context reinforcement

**What goes wrong with automation.** Tools default to generic mentions: the city, the state, maybe "small business" or the industry. These are weak — the city is mentioned by every business in the city.

**The protocol.** Per Principle 4, choose 5-15 mentions that *strengthen this specific business's context* beyond the generic. For each candidate mention, ask:
- Does this mention provide entity disambiguation? (A mention of "Lubbock County District Court" disambiguates a Lubbock criminal defense attorney from a Lubbock divorce attorney.)
- Does this mention strengthen topical authority? (A mention of "Texas Court of Criminal Appeals" signals appellate-level practice.)
- Does this mention link to related authoritative entities? (Texas Tech School of Law is itself a Knowledge Graph entity that the attorney's profile gets weighted by.)
- Does this mention come from the *prose* of the page? (Per Principle 5, the bilingual document — mentions should reference entities the prose actually discusses.)

**The Lubbock Event Rentals example.** Their mentions, chosen via this protocol:
- Texas Tech University (Q499417) — the major tailgating clientele
- Lubbock ISD (Q6695030) — school events, proms
- Buddy Holly Center (Q4985129) — local landmark, often rented for events near it
- UMC Health — corporate event client base
- United Supermarkets (Q7886420) — local employer with frequent events
- Cotton Court Hotel — wedding venue partner
- Tin Top Gin — wedding venue partner
- 6666 Ranch (Q7574554) — destination wedding venue in the region
- West Texas Home Builders Association — networking source
- National Ranching Heritage Center (Q14710195) — corporate event venue

Each one signals what business they actually serve, which clientele they have, and which venue partners they work with. None are generic city or state mentions. This is the entity-context layer that template output never produces.

### Field 4 — The relationship layer

**What goes wrong with automation.** Tools cannot reliably infer organizational relationships from a website. Who founded the business? Who works there now? Which trade associations is it a member of? What's its parent organization? These are facts that require knowing the business, not parsing the website.

**The protocol.** Explicitly populate (where applicable):
- **`founder` / `founders`** — the founding individual(s), each as a Person entity with `worksFor` pointing back to the Organization.
- **`employee`** — current key staff (the owner, general manager, lead practitioners) as Person entities. Don't enumerate every employee; pick the entity-relevant ones (typically 1-5 people whose names matter to the business's identity).
- **`memberOf`** — trade associations, chambers of commerce, professional bodies. Each as an Organization entity with name + URL + sameAs to the association's site.
- **`hasCredential`** — licenses, certifications, accreditations. Each with `recognizedBy` (the issuing body).
- **`parentOrganization`** — for multi-location chains, the headquarters Organization.
- **`subOrganization`** — for the headquarters, the location LocalBusinesses (or omit; the `parentOrganization` link from each location is sufficient).
- **`affiliation`** — for partnerships that aren't formal membership.
- **`alumniOf`** (on Person entities) — relevant educational institutions for credentialed practitioners (attorneys, physicians, CPAs).

**The audit question.** For every relationship property in the schema, ask: "Is this fact verifiable, and does this relationship strengthen entity reconciliation?" If the answer is no to either, omit.

### The 90/10 time allocation

In a typical schema engagement, expert time should split:
- **10%** — template generation (the @graph skeleton, base properties, NAP, hours, etc.). Tools handle most of this.
- **90%** — un-automatable curation across the four fields above. This is where the agency's value lives.

If you're spending more than 10% of time on template generation, you're using the wrong tools. If you're spending less than 90% on curation, you're underbidding the work — and the output will be indistinguishable from template-generated schema.

---

## Part XIV — The Last-Mile Verification Protocol

Per Principle 8: validator-passing is the floor. Verifying the schema actually changed what AI consumers say about the business is the ceiling. Most implementations stop at the floor; this protocol moves to the ceiling.

### Pre-deploy: validator pass

Before deploy:
1. **validator.schema.org** — full schema.org vocabulary coverage. Should pass with zero errors. Warnings can be evaluated case-by-case.
2. **Google Rich Results Test** — Google-supported types only. Verifies SERP eligibility for the rich-result-eligible portions.
3. **JSON syntax validator** (any JSON linter). Catches trailing commas, missing quotes, smart quotes — the silent killers.
4. **Manual review** of @id consistency across the @graph and across pages. Tools rarely catch @id inconsistencies.

If all four pass, the schema is technically valid. Proceed to deploy.

### T-0 baseline: capture pre-deploy AI representation

Before the new schema deploys (or before deploying for the first time on a site that didn't have it), capture the baseline AI representation. Query each major LLM with five test questions:

1. **"What is [business name]?"** — captures how AI currently describes the entity.
2. **"What services does [business name] offer?"** — captures service-portfolio understanding.
3. **"Where is [business name] located?"** — captures geographic accuracy.
4. **"Who founded [business name]?" / "Who runs [business name]?" / "Who owns [business name]?"** — captures relationship understanding.
5. **"What makes [business name] different from competitors?"** — captures differentiation/positioning understanding.

Run these in:
- **ChatGPT** (with browsing enabled — without browsing it's just training data, which is less useful)
- **Perplexity** (default mode)
- **Google AI Mode / Gemini** (the AI Overview surface)
- **Claude** (with web search)
- **Bing Copilot** (where applicable)

Document each answer verbatim. Save as a baseline file.

### T+2 weeks: first verification cycle

After deploy + 2 weeks (allows time for crawling, indexing, and AI consumer refresh — Perplexity is fastest, ChatGPT and Gemini are slower), re-run the same five queries on the same platforms.

**Compare answers to schema declarations.**

For each query, score the AI's answer on:
- **Accuracy** — does it match the schema? (5-point scale)
- **Completeness** — does it cover what the schema declares? (5-point scale)
- **Citation** — does the AI cite the business's own website as a source?

### T+6 weeks: second verification cycle

Re-run. Expect progress on accuracy and completeness. Citation rate is the slowest metric to move.

### T+12 weeks (and quarterly thereafter): ongoing entity hygiene

Re-run as part of ongoing entity hygiene. This becomes the basis for retainer-engagement reporting.

### What to do with divergence

If at T+6 weeks the AI still gets something wrong:

| Symptom | Likely cause | Remediation |
|---|---|---|
| AI states wrong NAP | Stale third-party source dominating | Audit `sameAs` directories; claim/correct old listings |
| AI describes wrong services | Prose-side contradiction with schema | Audit page prose (Principle 5); align with schema |
| AI confuses with competitor | Insufficient disambiguation | Strengthen `disambiguatingDescription`, `additionalType`, `mentions` |
| AI lists wrong founder | Outdated About page or LinkedIn | Update About page, claim/correct LinkedIn, refresh `founder` schema |
| AI gives generic description | Schema lacks specific entity-context signals | Strengthen `knowsAbout`, `mentions`, `description` with specifics |
| AI doesn't surface the business at all | Insufficient authority + corroboration | Expand `sameAs` to authoritative directories; build third-party press; verify content depth |

The remediations are rarely schema-only — they involve the broader corroboration layer that schema anchors. This is why the agency engagement extends beyond initial implementation.

### The single-most-important practice

This entire protocol is what puts an agency in the top 1% of schema implementers. **Most agencies stop at validator-passing.** They deploy schema, the validator returns green, they declare success. Whether the AI actually changed what it says about the business is unmeasured.

The agency that runs this protocol can document compounding improvements over 6-12 months, has clear data to show clients, and (per Principle 9) can defend the engagement on the defensive frame ("we corrected what AI was saying about you") not just the offensive frame ("we improved your schema").

---

## Part XV — The Schema Flywheel

Per Principle 10: schema generates compounding returns over 6-12 months when operated as a flywheel, not a one-time implementation. This section specifies the flywheel's seven stages, the leading indicators per stage, and the agency engagement structure that operates it.

### The seven-stage loop

**Stage 1 — Comprehensive schema deploys.**
- **Actions:** All 9 tiers of the entity architecture deployed. @graph correctly stitched across pages. @ids permanent. Validation pass.
- **Time horizon:** Initial implementation (1-4 weeks).
- **Leading indicators:** Validator pass, Rich Results Test pass, GSC Performance baseline established.

**Stage 2 — AI extracts the entity correctly.**
- **Actions:** Run the verification protocol from Part XIV. Document baseline → T+2 weeks → T+6 weeks AI responses.
- **Time horizon:** 2-6 weeks after deploy.
- **Leading indicators:** AI answers match schema in test queries; citation rate begins to rise.

**Stage 3 — Correct extraction triggers AI citations in answers.**
- **Actions:** Monitor AI surfaces for citation patterns. Track which AI platforms cite first (typically Perplexity → Gemini → ChatGPT → Claude in that order of speed).
- **Time horizon:** 4-12 weeks.
- **Leading indicators:** Manual LLM queries return the business in answers about its category in its geography ("event rentals Lubbock," "criminal defense attorney Lubbock TX," etc.).

**Stage 4 — AI citations drive branded search demand.**
- **Actions:** Monitor GSC Performance for branded search impressions. Filter by query containing the business name.
- **Time horizon:** 8-16 weeks (lagged behind AI citations).
- **Leading indicators:** Branded impressions trending up in GSC; brand-name search volume rising in Google Trends (where the business is large enough to register).

**Stage 5 — Branded demand strengthens Google's entity signals.**
- **Actions:** Monitor non-branded category impressions; check if Knowledge Panel begins appearing on Brand SERP.
- **Time horizon:** 3-9 months.
- **Leading indicators:** Non-branded "[category] [city]" impressions rising; Google search for the exact business name starts showing a Knowledge Panel (initially without all features, often growing over time).

**Stage 6 — Knowledge Panel inclusion unlocks new authoritative `sameAs` sources.**
- **Actions:** Audit the Knowledge Panel for what Google has populated. Capture any new authoritative URLs Google links to. Add those URLs to the `sameAs` array on the next schema iteration.
- **Time horizon:** 6-12 months.
- **Leading indicators:** Google Knowledge Graph URL appears; third-party "verified business" notations on directories; Wikidata entry created (if the business merits one).

**Stage 7 — Richer `sameAs` set → deeper schema → loop tightens.**
- **Actions:** Quarterly schema refresh. Incorporate all new corroboration. Re-run verification protocol. Identify remaining gaps.
- **Time horizon:** Continuous, with quarterly check-ins.
- **Leading indicators:** Citation rate continues to rise; new authoritative sources continue to be incorporated; the entity becomes increasingly hard for competitors to displace.

### The leading-indicator dashboard

For ongoing engagement reporting, track:

| Indicator | Source | Cadence | Target trajectory |
|---|---|---|---|
| Validator errors / warnings | validator.schema.org | Per deploy | 0 / minimal |
| Branded impressions (GSC) | GSC Performance, brand name filter | Monthly | Rising |
| Non-branded category+city impressions | GSC Performance | Monthly | Rising |
| AI citation rate | Manual verification protocol | Bi-monthly | Rising |
| Knowledge Panel completeness | Manual SERP check | Monthly | More fields populated over time |
| `sameAs` corpus size + average authority | Internal `sameAs` audit | Quarterly | Stable count, rising average authority |
| New press/citation acquisitions | Manual + tools (Mention, BrandMentions) | Monthly | Continuous |

### The engagement framing

Frame the work as **schema operations** — ongoing, not one-time. Pricing structure:
- **Initial deploy (months 1-2):** project-based, billed against the full implementation.
- **Ongoing operations (months 3-12+):** monthly or quarterly retainer covering verification, refresh, and continuous improvement.

The flywheel only works if it's operated. Single-deploy work loses momentum at stage 3-4 because nobody is monitoring or iterating. The retainer structure aligns agency incentive with client outcome — the agency gets paid to operate the flywheel; the client gets compounding returns.

---

## Part XVI — Client Conversation Framework

Per Principle 9: the strategic frame for schema work is defensive — controlling AI's representation of the business — not offensive (ranking higher). This section provides discovery questions, deliverable language, and case-study framing for client conversations.

### Discovery questions

These questions surface the defensive-frame pain that justifies the engagement:

1. **"When you Google your business name today, what shows up?"** — surfaces Brand SERP defects.
2. **"Have you ever Googled yourself and seen wrong information about your business?"** — surfaces stale citations.
3. **"Try asking ChatGPT or Perplexity 'tell me about [business name].' What does it say?"** — surfaces AI misrepresentation.
4. **"Are you currently in Google's Knowledge Panel? If yes, does it have the right info? If no, do you know why not?"** — surfaces Knowledge Graph inclusion gaps.
5. **"Imagine a prospect asks AI 'what's the best [your category] in [your city]?' What name comes up? Yours, or a competitor's?"** — surfaces AI category-citation defects.
6. **"When was the last time you reviewed every directory listing of your business across the web?"** — surfaces uncurated `sameAs` corpus.
7. **"Who else has the same business name as you in any city? Do you have a way to disambiguate from them in search and AI?"** — surfaces entity disambiguation defects.
8. **"If you wanted to update what AI says about your business, what mechanism would you use?"** — surfaces lack of control. (The answer most owners give: "I don't know." That's the opening.)

### Deliverable language

Avoid the offensive frame: "we'll improve your schema markup so you rank higher and get rich results." This is true-but-thin. Use the defensive frame instead:

**The deliverable.** *"We architect your AI representation. The work has three components. First, we deploy comprehensive schema markup on your website that becomes the source-of-truth declaration for every fact about your business — name, services, location, ownership, relationships, hours, payment methods. Second, we curate and correct your presence across the authoritative directories, social profiles, and industry sources that AI uses to corroborate that source of truth. Third, we run an ongoing verification protocol — every two weeks, we query ChatGPT, Perplexity, Google AI Mode, Claude, and Bing Copilot about your business. We capture what they say. We compare it to what your schema declares. Where they disagree, we identify the source of the disagreement and fix it. Over 6-12 months, this work produces a measurable, documented shift in how AI describes your business to the prospects, customers, and partners who ask about you. The work compounds — once AI is reading your business correctly, branded search demand rises, Google's entity signals strengthen, your Knowledge Panel becomes more complete, and new authoritative sources begin to corroborate the entity you've established."*

### Case study structure

When you have case studies (the agency will, over time), structure them on the defensive frame:

**Before.** "Lubbock Event Rentals: when ChatGPT was asked 'tell me about Lubbock Event Rentals,' the answer cited an outdated Yelp listing at the old address (1211 Ave F, defunct since 2022), described the business as 'a small party rental shop,' and didn't mention the Tailgate Express DBA at all. Wedding-segment prospects asking AI for tent rental recommendations in Lubbock were being shown competitors' names first."

**Engagement.** "We deployed comprehensive schema architecture across the homepage and all service pages. We claimed and corrected the stale Yelp listing. We populated the `sameAs` with verified profiles across nine authoritative directories. We curated `mentions` to reference the Texas Tech tailgating clientele, the regional wedding venues, and the corporate event partners. We ran the verification protocol every two weeks for six months."

**After.** "At month 6, ChatGPT, Perplexity, Gemini, and Claude all describe Lubbock Event Rentals accurately — current address, both names (LER + Tailgate Express), specific service segments (weddings, corporate, tailgating, social parties), and the West Texas geographic footprint. Branded search impressions on GSC have risen 47% from baseline. The Knowledge Panel on the Brand SERP now displays founding year, services category, and three review platform aggregates. When prospects ask AI 'best tent rental Lubbock,' the business is cited in the first answer position across all four LLM platforms tested."

The structure is consistent: **describe AI misrepresentation → describe the architected remediation → describe the measured AI representation shift**. This frames the work as something the client could not have done themselves and could not get from a generic SEO agency.

### Pricing positioning

The defensive frame supports higher pricing than the offensive frame. Offensive frame ("we'll add schema") competes against $500/month generic SEO retainers. Defensive frame ("we architect your AI representation") competes against brand consultancies billing $5,000-$15,000/month. The work is similar in hours; the positioning differs in perceived value.

This is the strategic reframe for agencies serious about owning schema work as a category.

---

## Part XVII — Diminishing Returns: What NOT to Do

Already covered in §Diminishing returns above. Treat that section as Part XVII; the numbered list there is canonical. The summary principle: schema is not a stacking game where more is always better. Every property should serve a specific consumer (Map Pack, AI, or both). Anything that serves neither is noise that dilutes the average authority of the entity declaration.

---

## Part XVIII — Emerging Tech Appendix

These technologies are in early adoption (as of May 2026) but are directionally important for 12-24 month planning. Track them; don't implement everything today, but build schema with them in mind.

### NLWeb (Microsoft, May 2025)

**What it is.** A conversational interface protocol launched by Microsoft in May 2025, created by **RV Guha** — the same person who created Schema.org. NLWeb uses Schema.org as its data layer. The pitch: a website can expose a conversational interface using its existing Schema.org markup, and an agent or AI consumer can interact with the site through that interface.

**Why it matters.** Guha's quote on NLWeb: *"No hallucinations because it uses Schema Markup."* The trajectory is clear — schema is becoming the standard data layer for conversational and agentic interfaces to websites. Microsoft is building NLWeb into Copilot.

**Implication for the skill.** Comprehensive schema today positions the business for NLWeb adoption tomorrow. The agent-API surface (Principle 6) is partly future-proofing for NLWeb-style interfaces. No specific implementation changes today; the architectural principles in Part IV already cover what NLWeb will consume.

**Track:** https://github.com/microsoft/NLWeb

### MCP (Model Context Protocol, Anthropic)

**What it is.** Anthropic's protocol for connecting AI models to external data sources and tools. Increasingly, MCP servers are being built that consume Schema.org markup as their data layer for representing business entities to agents.

**Why it matters.** As MCP adoption grows, businesses that have comprehensive Schema.org markup are pre-positioned as data sources for AI agents. The same schema that serves AI Overviews and ChatGPT extraction will serve MCP-based agent interactions.

**Implication for the skill.** Same as NLWeb — comprehensive schema is the durable investment. Specific MCP-server-side implementation work is downstream of the schema work this skill produces.

**Track:** https://modelcontextprotocol.io

### llms.txt (Jeremy Howard / Answer.AI proposal)

**What it is.** A plain-Markdown file at `/llms.txt` on the website root, providing a structured summary of the site's most important content for large language models. Analogous to `robots.txt` for crawlers and `sitemap.xml` for indexers, but specifically for LLM consumption.

**Current adoption status.** Uneven. As of late 2025, OpenAI, Google, and Anthropic do NOT natively support llms.txt in their primary AI products. Adoption is strongest among AI coding assistants (Cursor, Claude Code), MCP servers, and some smaller AI tools. By 2026, AI crawlers (GPTBot, ClaudeBot, PerplexityBot) have begun requesting llms.txt during inference, but the practice is not universal.

**Implication for the skill.** For local businesses, llms.txt is currently low-priority — the ROI is theoretical until the major LLM providers natively support it. **Recommendation:** if the site is well-organized and llms.txt is trivial to deploy (CMS plugin available, content already structured), deploy it as low-effort preparation. If it requires significant content reorganization, skip until adoption clarifies.

**Format example:**
```markdown
# [Business Name]

> [Business description in 1-2 sentences]

## Services

- [Service URL]: [Service name and description]

## Locations

- [Location URL]: [Location name and address]

## About

- [About URL]: Company history and team
```

**Track:** https://llmstxt.org

### RLM-on-KG (Recursive Language Models on Knowledge Graphs)

**What it is.** A research framework introduced by Zhang, Kraska, and Khattab at MIT in December 2025. Recursive Language Models (RLMs) treat long prompts as an environment that the LLM programmatically navigates rather than ingesting as a context window. Andrea Volpini (WordLift, January 2026) adapted the approach by using a WordLift Knowledge Graph (accessed via GraphQL) as the environment.

**Why it matters.** This is the technical underpinning of Principle 1 (Depth Beats Breadth). RLMs *navigate* graphs rather than ingesting them. Depth and queryability matter; flat lists of properties become less valuable than nested, navigable structures. As RLM-style architectures become common in production AI systems, the schema implementations that look like navigable graphs will outperform those that look like flat property lists.

**Implication for the skill.** Already incorporated into Principle 1. The directive — minimize top-level entities, maximize nesting depth — is the practical application of RLM implications.

**Track:** The MIT paper (Dec 2025) and Volpini's adaptation on the WordLift blog (Jan 2026). Both linked from the Influencer Concept Index below.

### Generative UI (Google Gemini 3, AI Mode)

**What it is.** As of January 2026, Google's AI Mode (powered by Gemini 3) generates dynamic, interactive layouts directly in search results — not just text answers but visual modules with interactive elements. The phenomenon: "Generative UI" replacing static SERPs for an increasing share of queries.

**Why it matters.** When AI generates the result layout, the underlying data for that layout is pulled from… structured data sources. Schema becomes the input to UI generation, not just to text generation. This further raises the value of comprehensive schema.

**Implication for the skill.** Continued validation of the comprehensive-schema thesis. No specific new implementation changes; this further commits to the architectural principles already specified.

---

## Part XIX — Influencer Concept Index

Quick-reference glossary of terms-of-art from the practitioners whose work has informed this skill. Use when a client or another practitioner references a concept and you need to ground in its provenance.

| Concept | Originator | Year coined | Brief definition |
|---|---|---|---|
| **Brand SERP** | Jason Barnard / Kalicube | 2012 | The search engine results page that appears when someone searches a brand's own name. The "digital business card" view. |
| **Answer Engine Optimization (AEO)** | Jason Barnard | 2018 | Optimization for AI answer engines (ChatGPT, Perplexity, Google AI Overviews) rather than traditional search rankings. |
| **Entity Home** | Jason Barnard / Kalicube | ~2018 | The one site that an entity owns, treated as its authoritative source. All external mentions corroborate the Entity Home. For a local business, this is its own website. |
| **Algorithmic Brand Clarity** | Jason Barnard | 2024 | The state achieved when AI and search engines have a clear, consistent, unambiguous understanding of an entity's identity, attributes, and offerings. |
| **Algorithmic Brand Debt** | Jason Barnard | 2025 | The compounding negative effect of fragmented or inconsistent brand representation across the web. Progressively harder to fix as algorithms build confidence in the flawed narrative. |
| **Brand Training Deficit** | Jason Barnard | 2025 | The gap between what AI currently knows about a brand and what it should know to represent that brand effectively. |
| **Understandability-Credibility-Deliverability** | Jason Barnard | — | The three-phase framework for digital brand engineering. Schema lives in Understandability; reviews/mentions in Credibility; channel surfacing in Deliverability. |
| **Brand Context Optimization (BCO)** | Olaf Kopp | 2025-2026 | Strategic GEO process to control brand perception within LLMs and knowledge graphs by strengthening syntactic and semantic connections between brand name and specific attributes. Operationalized via entity-attribute (subject-predicate-object) triples repeated consistently across prose. |
| **Relevance Engineering (r19g)** | Mike King / iPullRank | 2024-2025 | Framework merging content strategy, information retrieval, UX, digital PR, and AI. Positions SEO as a technical marketing discipline built on language modeling, query understanding, and information gain. |
| **Query Fan-Out** | Mike King (analysis of Google's AI Mode) | 2025 | Google AI Mode's technique of expanding one query into dozens of sub-queries, retrieving at the passage level, and assembling grounded answers. Implication: schema needs to support passage-level extraction. |
| **Qforia** | Mike King / iPullRank | 2025 | Gemini-powered tool by iPullRank for generating query fan-outs to inform multi-modal content strategy. |
| **Site Focus Calculator** | Mike King / iPullRank | 2024 | Tool measuring how off-topic a given page is relative to a site's central vector embedding. Below 0.7 is suspect. |
| **BRIDGE framework** | Beatrice Gamba / WordLift | 2025-2026 | Entity architecture methodology covering Brand entity development, Reference / KG integration, Implementation strategy, Discovery / measurement, Growth / amplification, Evolution / monitoring. |
| **Language of machines and AI** | Martha van Berkel / Schema App | 2024-2025 | The reframe positioning schema markup not as SEO markup but as the standardized vocabulary for communicating with machines and AI. |
| **Content Knowledge Graph** | Martha van Berkel / Schema App | — | A reusable, semantically enriched data layer built from schema markup on a site, used as a source-of-truth for both search engines and internal AI applications. |
| **Ontology-driven SEO agents** | Andrea Volpini / WordLift | May 2025 | Autonomous AI agents trained on knowledge graphs to handle SEO tasks. Predicts AI-agent-driven commerce to reach $1T+ annually by Feb 2027. |
| **RLM-on-KG** | Andrea Volpini / WordLift (adapting Zhang/Kraska/Khattab MIT paper) | January 2026 | Recursive Language Models that navigate a knowledge graph as their environment rather than ingesting it as context. Practical implication: structure beats bigger context windows. |
| **Entity-first SEO** | Lazarina Stoy / MLforSEO | — | Methodology centering the entity as the unit of optimization rather than the keyword. Production-grade NER APIs (Google Cloud NLP, Amazon Comprehend) recommended over LLMs for entity extraction in SEO workflows. |
| **Schema iframes** | Jesper Nissen / schemawriter.ai network | — | Technique of embedding schema-bearing iframes on third-party domains. Gray-hat in some applications (parasite SEO); legitimate in narrow technical use cases. Useful to recognize on competitor audits. |
| **Nested schema for LLM visibility** | Nikolaj Mogensen / S360 (Searchday 2026, Aarhus) | 2026 | Practical recommendation: "go one step deeper than standard webpage schema. Markup entities, products, etc." The validation of Principle 1 (Depth Beats Breadth) from a major industry conference. |
| **Generative Engine Optimization (GEO)** | Olaf Kopp (early publications) / multiple sources | 2023 | The broader category encompassing AEO. Optimization for any AI-powered generative answer surface. |
| **Large Language Model Optimization (LLMO)** | Olaf Kopp / industry-wide | 2023-2024 | Subset of GEO focused specifically on LLM citation and representation. |

### Practitioner directory

For ongoing reading and tracking:

| Practitioner | Outlet | Specialty | Geography |
|---|---|---|---|
| **Mike King** | iPullRank, SEO Week | Technical SEO, Relevance Engineering, AI Search | New York, USA |
| **Andrea Volpini** | WordLift blog, Knowledge Graph Conference | Semantic web, knowledge graphs, agentic SEO | Italy |
| **Beatrice Gamba** | WordLift, MLforSEO Academy | Entity SEO, knowledge graph strategy | Italy |
| **Martha van Berkel** | Schema App | Enterprise schema markup, content knowledge graphs | Canada |
| **Jason Barnard** | Kalicube, Brand SERP Guy | Personal brand entity, knowledge panels, AEO | France |
| **Olaf Kopp** | Aufgesang GmbH, SEO Research Suite | Semantic SEO, GEO/LLMO, brand context | Germany |
| **Lazarina Stoy** | MLforSEO | ML for SEO, entity extraction, automation | Bulgaria |
| **Jesper Nissen** | schemawriter.ai, YACSS | Schema tooling, entity-rich schema, WordPress | Denmark |
| **Jono Alderson** | Yoast (formerly), independent | WordPress schema framework, base script doctrine | UK |
| **Aaron Bradley** | SEO Skeptic (historical) | Schema foundations | Canada |
| **Dawn Anderson** | Various conferences | Technical SEO, NLP, semantic understanding | UK |
| **Teodora Petkova** | WordLift collaborator | Semantic web, KG + LLM | Bulgaria |
| **Dixon Jones** | InLinks | Entity extraction, semantic SEO tooling | UK |
| **Nikolaj Mogensen** | S360, Searchday Denmark | Nested schema, LLM visibility | Denmark |

### Recommended conferences

- **SEO Week (iPullRank, New York)** — annual, late April. Heavy on AI search, technical SEO, frontier methodology.
- **Knowledge Graph Conference (online + global)** — annual, early May. Semantic web, knowledge graphs, AI integration.
- **Searchday Denmark (S360, Aarhus)** — annual, January. Strong on nested schema and LLM visibility tactics.
- **SMX Munich** — annual, March. European search marketing; strong technical track. Microsoft has presented on Copilot+schema here.
- **BrightonSEO** — semi-annual, UK. Wide technical SEO coverage.

---

## Output format

Every schema output is a complete, ready-to-paste `<script type="application/ld+json">` block with:

1. Properly nested JSON with 2-space indentation
2. `@graph` array containing all entities for the page (Organization + WebSite + WebPage base script per Principle 22, plus page-specific primary entity per Principle 23)
3. Cross-reference `@id`s consistent across the graph, treated as permanent (Principle 7)
4. Depth-over-breadth structure: top-level entities minimized, nesting maximized (Principle 1)
5. Type-constraint correctness: properties placed on valid domain types per Part III (mentions/audience/speakable on WebPage/CreativeWork/Service, not on bare LocalBusiness)
6. All placeholder values clearly marked with `[BRACKETS]` instructions OR realistic sample data
7. Validation-ready syntax — no trailing commas, ISO-formatted dates, ISO currency codes
8. Comments above the script tag (HTML `<!-- -->` style) explaining what to replace and where

When the user provides real business details, populate with real data and mark only the unknown fields with bracket placeholders.

When the user requests a sample (no specific business given), build a fully realistic fictional business with all 9 tiers populated to demonstrate the complete architecture.

When the schema involves un-automatable curation decisions (Part XIII) — choosing a specific Wikidata QID, curating `sameAs` directories, selecting `mentions` entities, modeling relationships — document the reasoning inline as HTML comments. Future audits and client-side reviewers will need to verify the judgment.

When deploying schema for a client, output should include:
- The JSON-LD block(s) themselves
- A separate "deployment notes" section listing what the client must complete after deploy (replace placeholder image URLs, claim stale directories, update GBP attributes to mirror schema, etc.)
- A separate "verification protocol" section listing the 5 test queries × 4 LLM platforms for T-0 baseline capture

---

## Final pre-deploy checklist

### Architectural integrity
- [ ] Output uses `@graph` structure (not flat single-entity blob)
- [ ] Base script (Organization + WebSite + WebPage) appears on every page, not just homepage (Principle 22)
- [ ] Every page has exactly one primary entity declared via `mainEntity` / `mainEntityOfPage` (Principle 23)
- [ ] `isPartOf` / `hasPart` chains express graph hierarchy (Principle 24)
- [ ] Top-level entities minimized; nesting depth maximized (Principle 1 / depth-over-breadth)
- [ ] `@id`s are stable canonical URIs used consistently — and will be treated as permanent (Principle 7)
- [ ] Server-side rendered, not JavaScript-injected (Principle 21)

### Type-constraint correctness (Part III)
- [ ] `mentions` is on WebPage / CreativeWork entities, NOT on LocalBusiness or Organization
- [ ] `audience` is on Service / Product / Event / LodgingBusiness, NOT on generic LocalBusiness
- [ ] `speakable` is on WebPage / Article entities with real (not guessed) CSS selectors
- [ ] `mainEntity` is on WebPage; `mainEntityOfPage` is on the entity pointing back to WebPage
- [ ] `branchOf` used for LocalBusiness branches; `parentOrganization` / `subOrganization` for Organization-level hierarchy
- [ ] `department` used for in-building units (NOT for separate locations)

### Identity correctness
- [ ] `@type` is the most specific available subtype
- [ ] Organization, LocalBusiness, WebSite, WebPage, BreadcrumbList entities present in `@graph`
- [ ] `name` matches GBP exactly
- [ ] `streetAddress` matches GBP exactly (abbreviations, suite format)
- [ ] `telephone` in E.164 (`+15125550199`, no dashes)
- [ ] `geo` precision: 6 decimals, building entrance, within 50m of GBP pin
- [ ] `hasMap` includes Google CID URL

### Entity reconciliation (the un-automatable layer — Part XIII)
- [ ] `additionalType` uses precise Wikidata QID URIs (not Wikipedia URLs), rationale documented
- [ ] `sameAs` includes verified social profiles + 3+ industry-specific authoritative directories, curated for authority not just count
- [ ] `sameAs` audit completed: stale/wrong citations claimed or corrected before linking
- [ ] `mentions` populated with 5-15 entities that specifically reinforce this business's context (not generic city/state)
- [ ] Relationship layer modeled: `founder`, `employee`, `memberOf`, `hasCredential`, parent/sub-Organization where applicable

### Operational accuracy
- [ ] `openingHoursSpecification` matches GBP day-for-day, minute-for-minute
- [ ] `specialOpeningHoursSpecification` covers upcoming 6–12 months of holidays
- [ ] `paymentAccepted` as array
- [ ] `currenciesAccepted` is ISO 4217 (`USD`)
- [ ] `priceRange` populated where relevant ($, $$, $$$, $$$$)

### Vector alignment (Principle 2)
- [ ] Triangulation audit complete: schema's central declaration, prose's repeated entity-attribute pairs, and URL/architecture all express the same primary entity
- [ ] Prose-side reinforcement: primary entity-attribute pairs repeated 3+ times across the page in slightly varied phrasings (Brand Context Optimization / Kopp)

### Media
- [ ] Images marked up as `ImageObject` entities (not URL strings) with width/height/caption
- [ ] `creator`, `license`, `acquireLicensePage` populated where applicable

### People & credentials
- [ ] Founder/key staff as `Person` entities with `knowsAbout`, `hasCredential`, `sameAs`
- [ ] `hasCredential` for licenses, certifications with `recognizedBy` issuer
- [ ] `memberOf` for trade associations, BBB, Chamber
- [ ] `knowsAbout` with 10–25 specific terms (not generic categories)

### Agent API surface (Principle 6)
- [ ] `potentialAction` URLs are first-party (own domain, own booking system)
- [ ] `paymentAccepted` array populated
- [ ] `acceptedPaymentMethod` populated within Offers where relevant
- [ ] `availableLanguage` populated (within ContactPoint)
- [ ] `hoursAvailable` on Services if differs from business hours
- [ ] `eligibleRegion` / `eligibleTransactionVolume` on geo- or volume-restricted Offers
- [ ] If an autonomous agent visited today, could it transact?

### Catalog & geography
- [ ] `hasOfferCatalog` or vertical-specific catalog populated with services/products
- [ ] Nested OfferCatalog used for hierarchical service taxonomies (Principle 28)
- [ ] `serviceArea` (GeoCircle) for SAB; `areaServed` for all local businesses
- [ ] `containsPlace` enumerated for SABs with multiple cities served

### AI extraction signals
- [ ] `speakable` on WebPage entities with real CSS selectors (post-deploy validation against live page)
- [ ] `mentions` linking to related Wikidata entities on WebPage (not LocalBusiness)
- [ ] `subjectOf` populated for businesses with authoritative press coverage
- [ ] `disambiguatingDescription` if business name is common
- [ ] `dateModified` populated on WebPage entities; visible "Last Updated" timestamp on page
- [ ] `actionableFeedbackPolicy` / `correctionsPolicy` populated where applicable

### Companion schema decisions (per Dual-Consumer Matrix, Part II)
- [ ] FAQPage deployed only where the page is genuinely a FAQ (not for SEO-only on marketing pages)
- [ ] HowTo deployed only on genuine procedural content
- [ ] Deprecated rich-result types skipped only if also low AI extraction value; otherwise included for AI

### Compliance
- [ ] No invented ratings, reviews, awards, or credentials
- [ ] aggregateRating wrapper used appropriately for SERP star eligibility (Product/Service wrapper, not bare LocalBusiness)

### Syntax
- [ ] No trailing commas
- [ ] All URLs use HTTPS
- [ ] All dates use ISO 8601 (`YYYY-MM-DDTHH:MM:SS±TZ`)

### Validation
- [ ] Validated against Schema Markup Validator (validator.schema.org)
- [ ] Validated against Google Rich Results Test (for rich result eligibility)
- [ ] GBP↔schema alignment audited on the 11 Map Pack alignment points

### Post-deploy verification protocol (Part XIV)
- [ ] T-0 baseline captured: 5 test queries × 4 LLM platforms, answers documented
- [ ] T+2 week verification cycle scheduled
- [ ] T+6 week verification cycle scheduled
- [ ] Quarterly entity hygiene calendar established

If all checks pass, the schema is deployment-ready. After deploy, the flywheel (Part XV) begins.
