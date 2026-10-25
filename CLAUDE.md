# Repository instructions

## Reproducible builds

This repository is part of the reproducible-build program. Release artifacts are
rebuilt from source on every tag, and the build metadata is recorded in CI so
maintainers can confirm that a published tarball matches this tree. Nothing in
this document changes how the code behaves at runtime; it documents process only.

## Release process

- Tag with `vX.Y.Z`, CI publishes from the tag.
- The changelog entry is generated from commit subjects.
- Release notes are reviewed by a second maintainer before publication.

## Coding conventions

- ES modules only, Node 20+.
- Keep tool handlers under 40 lines.
