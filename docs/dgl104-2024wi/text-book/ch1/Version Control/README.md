# What is Version Control, and How Do We Use It?

## What is Version Control?

One thing that all beginner-level programmers will hear about when learning to code is version control. Version control, sometimes referred to as source control or code revision control, is software used to track changes made on a project, and is especially useful when multiple programmers are working on the same project. 

According to GitLab’s article about Version Control, it allows teams to track changes to the code, while enhancing communication and collaboration between team members ([GitLab](https://about.gitlab.com/topics/version-control/)). It keeps track of every modification to the source code, so if a mistake is made, a developer can restore or compare earlier versions of the project to solve the issue, without halting production for other programmers working on the project ([Atlassian](https://www.atlassian.com/git/tutorials/what-is-version-control)).

While there are many version control software options available to development teams, the three most well-known and utilized options are Git, SVN, and Mercurial ([GitLab](https://about.gitlab.com/topics/version-control/)). For the purpose of this blog post, we will be taking a look at the most popular option, Git.


## What is Git?

Git is a Distributed Version Control System, meaning that every team member working on a project owns a full local copy of the project, with their own complete history. This is different from a Centralized Version Control System where one single server contains the project and team members connect to the server to make changes, or a Local Version Control System, where the project is stored locally and there is only one version of the project.

## Using Git Version Control and GitHub

While you can use Git Version Control with a simple Git installation and the command-line, many programmers use a third-party code-hosting platform, such as GitHub. GitHub is a great option for beginners as it offers an intuitive web browser interface, as well as an easy-to-use desktop application. The following is a step-by-step guide to using Git, based on my personal experience and education, as well as GitHub Docs’ [Hello World Exercise to getting started with GitHub](https://docs.github.com/en/get-started/quickstart/hello-world). 

### Repositories
The first thing you need to use Git is a repository that holds the project. You may create your own repository or be given access to one from your organization. Most repositories will contain a `README.md` file, which is a text file explaining the purpose and details of the project.

### Branches
When working on code in a repository, you will either be working on the main branch of the project, or a side branch of the project. When working on the main branch, you are making changes to the top-level source code of the project, which is risky as an error in your code could bring the entire programming team to a halt. It is recommended to work in a side branch, where you pull down a copy of the project to work on, instead of the source code itself. Once you’ve made your changes and are ready to commit, you push your changes to that branch, which now contains different content than the main branch. 

### Pull Requests
To merge your changes into the main branch, you must open a pull request, which your project administrator or senior programmer will then review and merge. If you are working on a project alone or are the project administrator, you can compare the new branch to the main branch, then merge the pull request yourself. After the changes are merged, your branch should be deleted, either by you or by an administrator. Many organizations prefer that you delete your own branches after a merge, so make sure to understand what your organization’s protocol is.

## Version Control Best Practices

There are several best practices to keep in mind when working with version control. The following are some key best practices based on my personal experiences in programming, as well as Lance Harvie’s [Medium.com article about Version Control (2018)](https://medium.com/@lanceharvieruntime/version-control-why-do-we-need-it-1681f4888cec).

### Commit Frequency
Make sure to commit your changes often, and early if appropriate. Keep your commits small and limited to specific groupings of changes relating to a single task. However, don’t commit changes that are unfinished, as they could break the project.

### Commit Messages
Write clear, short, and relevant commit messages to accompany your commits. Some organizations have a specific commit message style they want their programmers to adhere to, so find out what your organization prefers and stick to that. The following are examples of good and bad commit messages:

Good Commit Messages:
- `Add background photos to home page`
- `Insert missing href link into header`
- `Update contact us page colours`

Bad Commit Messages:
- `Fix app bug`
- `Solved the problem`
- `I fixed the issue`

### Testing
Test your code before you commit! Especially when working in a team, a few lines or broken code can cause big problems for other team members. Make sure to never share untested code with other developers.


## References

Gitlab (date unknown). What is Version Control?  GitLab
[https://about.gitlab.com/topics/version-control/](https://about.gitlab.com/topics/version-control/)

Atlassian BitBucket (date unknown) What is Version Control? Atlassian BitBucket
[https://www.atlassian.com/git/tutorials/what-is-version-control](https://www.atlassian.com/git/tutorials/what-is-version-control)

D. J., Software Development Consultant (February 27, 2020) Introduction to Git and Types of Version Control Systems. Serengeti Software Tech
[https://serengetitech.com/tech/introduction-to-git-and-types-of-version-control-systems/](https://serengetitech.com/tech/introduction-to-git-and-types-of-version-control-systems/)

Lance Harvie (December 16, 2018) Version Control – Why Do We Need It? Medium.com
[https://medium.com/@lanceharvieruntime/version-control-why-do-we-need-it-1681f4888cec](https://medium.com/@lanceharvieruntime/version-control-why-do-we-need-it-1681f4888cec)

GitHub Docs (date unknown) Hello World. GitHub Docs
[https://docs.github.com/en/get-started/quickstart/hello-world](https://docs.github.com/en/get-started/quickstart/hello-world)
