def commit_callback(commit):
    if commit.author_email == b"samkishore16@gmail.com":
        commit.author_name = b"Soniya"
        commit.author_email = b"soniyasingaravelu@gmail.com"

    if commit.committer_email == b"samkishore16@gmail.com":
        commit.committer_name = b"Soniya"
        commit.committer_email = b"soniyasingaravelu@gmail.com"