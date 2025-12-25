# AECRETEC Requirements 2026

---

## License

This document is published under the Creative Commons Attribution-ShareAlike 4.0 International (CC-BY-SA-4.0).

---

## 1. Purpose of this document

This requirements document defines what must be achieved by the AECRETEC concept:

- Mandatory system requirements
- Assumptions and non-assumptions
- Implementation-independent design constraints

This is **not** an implementation specification. Choices such as blockchain platform, languages, or storage backends are left to implementers.

---

## 2. Definitions

- **Content**: Digital data of books, images, audio, video, research materials, etc.  
- **CID**: Content Identifier (content-addressable identifier).  
- **Node**: A participant in the AECRETEC network.  
- **Storage node**: Node that pins and preserves content.  
- **Gateway node**: Node that handles ingress/egress toward the outside network.  
- **Wrapper**: External manifest that carries proof, history, and rights.  
- **Internal label**: Embedded metadata inside the content used for deterrence and identification.  
- **DID**: Decentralized Identifier.  
- **Transaction**: Record of rights transfer, issuance, or rental on the ledger.

---

## 3. System-wide requirements

### 3.1 Decentralization

- The system must not assume a single administrator, server, or company.
- Multiple implementations and deployment topologies must be permitted.

---

### 3.2 Censorship-resistance and legal compliance

- The protocol itself must not enable arbitrary deletion by a centralized authority.
- Node operators are responsible for compliance with their local laws.
- Illegal content handling is performed in a distributed and after-the-fact manner.

---

### 3.3 Offline usability

- Content must be usable without proprietary clients or always-online connections.
- Compatibility with existing standard viewers and players is required.

---

## 4. Content identification

### 4.1 Single-CID principle

- The content body should, whenever possible, be identified by a single canonical CID.
- Presentation or wrapper metadata should not change the canonical content CID.

---

### 4.2 Controlled CID derivation

- CID derivation is allowed for:
  - Internal label embedding
  - Irreversible transformations (e.g., resized/converted derivatives)
- The system must avoid unbounded CID proliferation by design.

---

## 5. Wrapping model requirements

### 5.1 External wrapper (manifest)

A wrapper is separate from the content and may include:

- The content CID
- Transaction ID (tx_id)
- Issuer node identifier
- Issued timestamp
- Signature

Wrappers must be issuable, updatable by issuing new wrapper objects, and revocable in a traceable way.

---

### 5.2 Internal label (in-file)

Internal labels are **required** for any content that exits the network to the outside (e.g., downloads, offline distribution).

An internal label must include at minimum:

- `holder_did` (plain text)
- `issuer_node`
- `issued_at` (timestamp)
- `wrapper_cid` (reference)
- optional: `issuer_signature`

---

### 5.3 Purpose of internal labels

- Offline deterrence and visible provenance
- Responsibility attribution in case of leakage
- Minimum proof in non-logged, offline environments

---

## 6. Gateway node requirements

- Gateway nodes handle network egress and ingress.
- They generate, verify, and optionally attach internal labels.
- Any content opened for review by a gateway must be processed with internal labeling; unlabeled content must not be viewed without a label.

---

## 7. Rewrapping and Reissuance

- Bare copies and redistributed copies with identical content may be reintegrated into legitimate distribution by reissuing wrappers, subject to the rules enforced by smart contracts or equivalent authorization logic.
- Each rewrapping must be recorded and traceable.

---

## 8. Transaction and rights model

- Ownership, sale, rental, and return must be expressible and distinguishable.
- Temporary access and rentals must be captured by `issued_at` or explicit rental fields.
- Content missing internal labels is not considered an asset for trades.

---

## 9. Rewards and incentives

- Rewards must be split between storage compensation and processing compensation.
- Nodes performing caching, distribution, and wrapping should be compensated.
- The design must discourage illicit reward capture (e.g., by slashing or audits).

---

## 10. Interoperability

- Implementations must not be dependent on any single blockchain or currency.
- Multi-chain anchoring and cross-chain verification are allowed.
- Implementations must be clearly identifiable as "AECRETEC-compliant" or "non-compliant."

---

## 11. Security (overview)

- Signatures must be verifiable.
- Centralized private-key storage must be avoided as a design assumption.
- Designs must account for dishonest nodes.

---

## 12. Non-goals

- Perfect prevention of piracy
- Centralized content or ideological curation
- A single canonical implementation
- Permanent central governance

---

## 13. Versioning and inheritance

- The requirements are versioned and subject to revision with traceable history.
- Implementers should honor the charter and avoid contradictions.

---

*Requirements defined for 2026 and beyond*  
*Published under CC-BY-SA-4.0*
