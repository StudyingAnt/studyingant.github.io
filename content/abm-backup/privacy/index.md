---
title: abm-project-backup Privacy Policy
description: Data handling for the owner's personal ABM research backup workflow.
---

# abm-project-backup Privacy Policy

Last updated: November 5, 2026.

This notice describes Joon Hyun Song's personal `abm-project-backup` OAuth application
and its locally operated rclone backup workflow. It does not describe a public backup
service or authorize public access to the owner's research materials.

## Data accessed and purpose

The backup client accesses selected research file contents and Google Drive file
metadata, such as names, sizes, modification times, identifiers, and checksums where
available. It uses this information to compare, upload, update, and verify backup
copies in a designated project folder. Individual file operations are controlled by
the owner's local rclone commands and backup configuration.

The OAuth grant uses the Google Drive scope, which permits access beyond the chosen
backup folder. The folder setting determines the intended destination; it does not
narrow the permissions granted by Google.

## Credentials and storage

Authorization is performed through Google's sign-in and consent pages. The local
client stores OAuth credentials on the owner's computer in a protected rclone
configuration outside the research workspace. The application documentation website
and its public GitHub repository do not receive or store OAuth tokens, client secrets,
Google passwords, or research backup contents.

Selected backup files are stored in the owner's designated Google Drive folder.
Their visibility depends on the folder's and files' Google Drive sharing settings.
Publishing these informational pages does not change those settings.

## Use and disclosure

The backup workflow uses Google user data for the owner's file backup operations.
It does not sell that data, use it for advertising, or use it to develop or train
non-personalized AI or machine learning models. Google processes the stored backup
files as the Google Drive service provider. The backup application does not
intentionally distribute those files to other users or external services.

The informational website is hosted with GitHub Pages. Its hosting infrastructure
and any configured website analytics may process ordinary page-visit information;
this is separate from the local Google Drive authorization and backup transfer.

## Retention and deletion

The owner controls retention through local backup settings and Google Drive.
Revoking authorization stops subsequent authorized client access, but does not
by itself delete copies already stored locally or in Google Drive. The owner can
remove retained files from their storage locations and manage Google Drive trash
and any preserved backup versions separately.

## Revoking access and contact

The owner can review or remove this application's access from
[Google Account connections](https://myaccount.google.com/connections).
Local credential files can also be removed by the owner when the workflow is retired.

For questions, use the support contact shown on the application's Google OAuth
consent screen. The maintainer's public profile is
[StudyingAnt](https://github.com/StudyingAnt).

Return to the [application homepage](https://www.joonhyunsong.kr/abm-backup/).
