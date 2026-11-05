---
title: abm-project-backup
description: Personal Google Drive backup authorization for ABM research materials.
---

# abm-project-backup

`abm-project-backup` is Joon Hyun Song's personal OAuth application for backing up
ABM research materials to Google Drive with a locally operated rclone client.
It is for the owner's use and does not offer a public backup service.

## What the application does

The application authorizes rclone on the owner's computer to compare backup files
and transfer selected research notes, figures, simulation outputs, and archived inputs
to the owner's designated Google Drive folder. Backup jobs are configured separately
on that computer. This website provides information about the application; it does
not run backup jobs or collect files, passwords, or OAuth credentials.

## Why Google Drive access is requested

Google Drive authorization lets rclone inspect backup file metadata and create or
update backup content. The configured backup destination is a project-specific folder.
The requested Drive OAuth scope permits broader Drive access; selecting a destination
folder is an operational setting rather than a restriction on the OAuth grant.

Read the [privacy policy](https://www.joonhyunsong.kr/abm-backup/privacy/) for data
handling, retention, and access revocation information.

## Terms

This is a personal research backup tool maintained by the account owner. There are
no public accounts, subscriptions, or third-party backup services offered by this
application. The owner controls which files are transferred and how copies are kept
or removed. Google Drive and rclone remain subject to their respective service and
software terms. These pages do not grant access to the owner's research materials.

For support, use the support contact displayed on the application's Google OAuth
consent screen. The maintainer's public profile is
[StudyingAnt](https://github.com/StudyingAnt).
