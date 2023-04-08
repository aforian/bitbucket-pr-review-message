# Bitbucket PR review

<picture>
  <img src="https://raw.githubusercontent.com/aforian/bitbucket-pr-review-message/main/assets/images/icon.png" alt="icon" height=128 />
</picture>

A chrome extension for bitbucket users to copy links and messages quickly for pull request reviewing.

## installation

[Chrome extension store](https://chrome.google.com/webstore/detail/bitbucket-pr-review/hgjmacckifgnlkmgogjcgenmbmbgmlgm)

## Usage

1. install extension
2. Go to the bitbucket pull request page that you want to get review
3. click "📋 Copy review message" to copy message
4. message can be paste to slack

## Template Configuration

### `{PR_LINK}`

You can place `{PR_LINK}` in the template to represent the pull request link. It will capture the url in current window as the pull request link.

### `{JIRA_CARD}`

You can place `{JIRA_CARD}` in the template to represent the Jira card link. It will use the Jira card number and link on the pull request header as the linked text and link.

*There may be multiple Jira card links.*

### `{PR_HEADER}`

You can place `{PR_HEADER}` in the template to represent the pull request title content. It will use the pull request title content and remove the Jira card link content.

### `{JIRA_HEADER}`

You can place `{JIRA_HEADER}` in the template to represent the related Jira card title content. Related Jira card mechanism can be checked [here](https://community.atlassian.com/t5/Jira-questions/What-links-a-JIRA-issue-to-Bitbucket-commits-PRs/qaq-p/629638).

## License

MIT © [Alex Ian](https://github.com/aforian)