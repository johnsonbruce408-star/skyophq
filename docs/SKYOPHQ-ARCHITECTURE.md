# SkyOPHQ Architecture

## Purpose

This repository is the technical foundation for the SkyOPHQ ecosystem. The architecture separates the public Bruce Johnson portfolio, the SkyOPHQ business documentation/source-of-truth layer, active business applications, and independent personal projects.

## Canonical structure

### 1. Public front end — Bruce Johnson
- Domain: `bruce-johnson.org`
- Purpose: public-facing portfolio and professional identity for Bruce Johnson.
- Audience: employers, partners, investors, collaborators, and other authorized public visitors.
- Content should be intentionally public and should not expose private company documentation, credentials, investor records, or internal operating information.

### 2. Private master documentation — SkyOPHQ Business Structure & Documentation
- Purpose: single source of truth for SkyOPHQ business structure, operating model, architecture, decisions, specifications, and institutional documentation.
- This is the documentation/blueprint layer, not the investor application itself.
- Historical material belongs in an Archive within this documentation structure rather than remaining as disconnected active projects.

Suggested documentation sections:
- Current Business Structure
- Company Documentation
- Operating Model
- Project Blueprints
- Integrations & Infrastructure
- Decisions / Change Log
- Archive / Historical Projects

### 3. Active business application — SkyOPHQ Investor Operations
- Purpose: the real, active investor/business operations project.
- It remains a separate application/workspace from the master documentation project.
- Its business rules and authoritative documentation should trace back to the master documentation layer.

### 4. Independent personal project — AI Tutor Pro
- Purpose: Bruce Johnson's independent AI-powered learning and knowledge-expansion project.
- It is a real project but is not part of the SkyOPHQ business operating system.
- It should remain architecturally independent.

## Archive policy

Historical projects such as Skyline Investor Connect, Sizzle & Serve, Investor Pack, and other obsolete projects should be treated as archived reference material. Useful information may be preserved as documentation, but these projects should not be treated as current operating systems unless explicitly reactivated.

## Design principle

The portfolio is the public front door. The master documentation project is the private knowledge and blueprint layer. Active applications implement the blueprint. Independent projects remain independent.

## Safety principle

Do not place secrets, API keys, passwords, private investor data, or other sensitive credentials in this repository. Environment configuration belongs in secure deployment/secret-management systems.

## Next implementation phases

1. Preserve and audit the existing application before major refactoring.
2. Establish the Bruce Johnson public portfolio experience for `bruce-johnson.org`.
3. Define the documentation/navigation model for SkyOPHQ Business Structure & Documentation.
4. Preserve the existing Investor application while aligning its terminology with SkyOPHQ Investor Operations.
5. Keep AI Tutor Pro separate from SkyOPHQ business infrastructure.
6. Add the new Bruce Johnson headshots to the public portfolio when the image assets are available in the development workspace.
