# Bitbucket PR review

![icon](assets/images/icon.png)

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

You can place `{JIRA_CARD}` in the template to represent the pull request link. It will use the Jira card number and link on the pull request header as the linked text and link.

*There may be multiple Jira card links.*

## License

MIT © [Alex Ian](https://github.com/aforian)