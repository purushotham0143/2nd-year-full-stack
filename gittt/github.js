// This concept is from the vamsi bhavani chanell in utube
// Git and Github this two are not same
// In this course we are learning about This Topics
//1.vcs and git Reporaties
//2.staging area and commit
//3.Branches
//4.Issues and PRS
// Git->VCS->version Control System


// IN git we have 4 parts
//About this all Screanshorts in Laoptop
// 1.is working Directory ->
// 2.is staging area 
// 3.local Reposatary
// 4. is Remote reposatary

//1.this is all about making and Initializing the project**********************
// initialsize the project using  command ->                               git init
//check ststus of the git using command ->                                 git status
//then add the present directory to the staging command->                  git add file or folder//git add --all,git add .
//then from the statting to the local repotatory using command->           git commmit -m "Discription"
// It will show all the details                                            git log//git checkout
//to create branches command->                                             git checkout -b "branch name"
//then push from the local reporaties to remote reporatires command ->     git push -u "File or Foldername"



//2.this all about the already the reporaties in the Remote Reporatory *******************
//then step one fork the repotatry the the remote reporatory will come into the our local GitHub
//then make the changes and send Pull request to the Remote repotatory Admin if it is ok then he will Mergr it 


//3.How to Handle the Merge Conflict error
//supose two people are workinng in same file then conflict error Uccur first person is pushed this one is correcct 
//but second person  is saying that his change is ccorrect
//we solve this problem once see video in the Utube command ->git merge origin/master after this command we have to go vs code 
//git push


//THis is from another Youtube channel Tech Jashwanth ans chat Gpt---*********
// why we write the remote beacuse to access any repo we want Remote  so we create a  remote
// why we  create different  branches beause to avoid Confussion we use differernt braches if your friend is working in 
//another  page your working on another page then no confussion and at last we will merge the braches code will be moxed
//if you not putting tha files intho Staging area your files will not be Tracked tha changes

// git --version          # Check if Git is installed
// git config --global user.name "Your Name"
// git config --global user.email "you@example.com"

//Basic Process at first
// git init
// git add .
// git commit -m "Initial commit"
// git branch -M main
// git remote add origin https://github.com/user/repo.git
// git push -u origin main



//To do some basic commands for gitHub
//git init            Initialize a new git repository#
// git add .              # Add all files to staging area
// git add filename       # Add specific file
//git commit -m "Your commit message"
//git remote add origin https://github.com/user/repo.git
// git push -u origin main          # First push to set upstream
// git push                         # Push changes
//git pull origin main             # Pull latest changes from main
// git branch             # List all branches
// git branch new-branch  # Create new branch
// git checkout new-branch  # Switch to new branch
// git checkout -b feature  # Create and switch in one command
// git merge branch-name  # Merge a branch into current branch

// git diff               # Show unstaged changes
// git stash              # Save changes temporarily
// git stash pop          # Apply last stashed changes
// git reset --hard       # Undo all local changes
// git rm filename        # Delete tracked file

// 1. Undo the last commit (but keep your changes)
// git reset --soft HEAD~1


// 2. Undo the last commit (and unstage the changes)
// git reset --mixed HEAD~1

// 3. Undo last commit (and delete all code changes too)
// git reset --hard HEAD~1

// 4. Undo specific file from staging
// git reset HEAD filename


// Undo Pushed Commit
// If you already pushed and want to remove a commit:
// git revert <commit-hash>
// This creates a new commit that undoes changes from a previous one.


// 🧹 Start Over (Reset Everything)

// git reset --hard origin/main
// ⚠️ This will reset your repo to the state of the remote branch (main). All local changes will be lost.


// Want to Undo a Git Add?
// git reset HEAD file.txt
// Unstages a file from git add, but keeps changes in your working directory.


// git log             # See history of commits
// git status          # See what's changed/staged
// git diff            # See actual code differences

//examples
// 🧨 You committed by mistake:
// git commit -m "Oops wrong commit"

// To undo:
// git reset --soft HEAD~1

// Then fix your code and:
// git add .
// git commit -m "Correct commit"

//git clone https://github.com/user/repo.git  #To clone the Reposatory
//git status             # Show changed files, staged files, etc.
// git log                # See all commits
// git log --oneline      # See short commit history















// Yogi sir git in class
// git init 
// git config user.name "rpurushotham0143"
// git config user.email "rpuurshotham@gmail.com"
// git status 
