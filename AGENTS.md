# Agents Guide

## Goals

- Keep changes minimal, safe, and documented.
- Use existing abstractions before adding new ones.
- Never hardcode UI text; use `translations.ts`.

## Required Behaviors

MiDika's Core principle you ALWAYS have to follow:

- **KISS (Keep It Simple Stupid)**: Keep things simple and avoid complexity.
- **DRY (Don't Repeat Yourself)**: Avoid duplication of code.
- **YAGNI (You Aren't Gonna Need It)**: Do the minimum necessary to get the job done. If somthing is not used, delete it.
- **TDD (Test Driven Development)**: Write tests before writing code.

everytime you applied a principle specify which principle you have applied and why you have applied it. If you don't apply a principle, explain why you didn't apply it.

- Prefer KISS/DRY/YAGNI.
- Follow TDD: add or update tests alongside code.
- Use neverthrow helpers for error handling.
- Keep auth logic behind `@midika/auth`.
- Keep extension logic behind `@midika/app-sdk`.

## Guardrails

- Do not commit secrets.
- Do not bypass CI scripts or lint rules.
- For UI strings, add keys to `translations.ts`.

## Writing

- Summaries should be concise and actionable.
- Reference file paths in backticks.

